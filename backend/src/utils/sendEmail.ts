import nodemailer from "nodemailer";

export async function sendEmail(to: string, html: string) {
  // Create a transporter using the Gmai SMTP with the username and password from .env
  // Replace them with your password
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USERNANME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  // Send the mail with to the listed email, with the HTML listed
  await transporter.sendMail({
    from: '"SchoolDB"',
    to: to,
    subject: "Change Password",
    html,
  });
}
