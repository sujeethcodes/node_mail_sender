import nodemailer from "nodemailer";

export async function sendMail(emailData) {
  try {
    // 🔹 SMTP Transport setup
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,       
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,                
      auth: {
        user: process.env.SMTP_USER,   
        pass: process.env.SMTP_PASS,     
      },
    });

    // Send email
    const info = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: emailData.to,
      subject: emailData.subject,
      text: emailData.body,
    });

    return {
      toEmail: emailData.to,
      subject: emailData.subject,
      body: emailData.body,
      status: "success",
      delivered: true,
      messageId: info.messageId,
    };
  } catch (err) {
    return {
      toEmail: emailData.to,
      subject: emailData.subject,
      body: emailData.body,
      status: "failed",
      delivered: false,
      errorText: err.message,
    };
  }
}
