import EmailLog from "../models/mail.js";

// Save email log into MongoDB
export const saveEmailLog = async (info) => {
  try {
    const log = new EmailLog({
      toEmail: info.toEmail,
      subject: info.subject,
      body: info.body,
      status: info.status,
      delivered: info.delivered,
      errorText: info.errorText || "",
    });

    await log.save();
    console.log("Email log saved in MongoDB");
    return log;
  } catch (err) {
    console.error("Error saving email log:", err);
    throw err;
  }
};


export const getMailLogs = async () => {
  try {
    const now = new Date();
    const hundredDaysAgo = new Date(now.getTime() - 100 * 24 * 60 * 60 * 1000);

    const logs = await EmailLog.find({
      createdAt: { $gte: hundredDaysAgo }
    }).sort({ createdAt: -1 }); // recent first

    return logs;
  } catch (err) {
    console.error("Error fetching last 100 days logs:", err);
    throw err;
  }
};