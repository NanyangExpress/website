
'use strict';
const nodemailer = require("nodemailer");

export async function sendEmail(subject, mailFrom, content) {

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "enquiries@nanyangexpress.org", // generated ethereal user
    pass: "04LDUSCtN6JKhv9s", // generated ethereal password
  },
});

// send mail with defined transport object
const info = await transporter.sendMail({
    from: mailFrom, // sender address
    to: "enquiries@nanyangexpress.org", // list of receivers
    subject: 'Get in Touch from ' + subject, // Subject line
    text: content, // plain text body
});


console.log("Message sent: %s", info.messageId);
// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

