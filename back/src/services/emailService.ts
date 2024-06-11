import nodemailer from "nodemailer";
import { EMAIL, PASSWORD } from "../config/envs";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function sendAppointmentConfirmationEmail(
  to: string,
  subject: string,
  body: string
) {
  try {
    const mailOptions = {
      from: EMAIL,
      to,
      subject,
      text: body,
    };

    const result = await transporter.sendMail(mailOptions);

    console.log("Email sent successfully:", result);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
