const nodeMailer = require('nodemailer');
const smtpTransporter = require('nodemailer-smtp-transport');

const transporterDetails = smtpTransporter({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    secureConnection: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
    tls: {
        ciphers: "SSLv3",
    },
});
exports.sendEmail = (email, fullName, subject, message) => {
    const transPorter = nodeMailer.createTransport(transporterDetails);
    transPorter.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject: subject,
        html: `<h1>hello ${fullName}<h1>
    <p>${message}<p>
    `

    });

};













// let details = {
//     from: "coder3664@gemail.com",
//     to: "javadrezaie3392gmail.com",
//     subject: "hello",
//     text: "welcome king"
// };
// mailTransporter.sendMail(details, (err) => {
//     if (err) {
//         console.log("wrong")
//     } else {
//         console.log("success")
//     }
// });