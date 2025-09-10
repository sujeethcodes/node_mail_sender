import { sendMail } from "../service/mail.js";
import { saveEmailLog,getMailLogs } from "../usecase/mail.js";

import { MESSAGES, CODE } from "../constant/message.js";

export const sendEmailController = async (req, res) => {
  console.log("Enter sender mail controller");

  const { to, subject, body } = req.body;
  if (!to || !subject || !body) {
    return res.status(CODE.ALL_FIELDS_REQUIRED).json({ message: MESSAGES.ALL_FIELDS_REQUIRED });
  }

  try {
    const info = await sendMail({ to, subject, body });

    //  Save log to MongoDB
    await saveEmailLog(info);
res.status(CODE.EMAIL_SENT_SUCCESS).json({
      data: {
        status: "sent_attempted",  // custom key
        delivered: info.delivered,
        error: info.errorText || null
      }
    });




  } catch (err) {
    console.error("Controller Error:", err.message);
    res.status(CODE.EMAIL_SEND_FAIL).json({ message: MESSAGES.EMAIL_SEND_FAIL, error: err.message });
  }
};


export const getLogsController = async (req, res) => {
  try {
    // Get logs in Mongo DB
    const logs = await getMailLogs();
    res.status(CODE.EMAIL_FETCH_SUCCESS).json({ logs });
  } catch (err) {
    res.status(500).json({ message: MESSAGES.LOG_FETCH_FAIL, error: err.message });
  }
};