// import { SMTPClient } from "emailjs";

// import { render } from "@react-email/components";

// const client = new SMTPClient({
//   user: import.meta.env.SMTP_USER,
//   password: import.meta.env.SMTP_PASSWORD,
//   host: import.meta.env.SMTP_HOST,
//   ssl: true,
// });

// export async function sendMail({ to, subject, html }) {
//   let emailHtml = await render(html);
//   const info = await client.sendAsync({
//     text: "Hello",
//     from: import.meta.env.SMTP_USER,
//     to,
//     subject,
//     attachment: [{ data: emailHtml, alternative: true }],
//   });

//   console.log("Message sent: %s", info.messageId);
// }
