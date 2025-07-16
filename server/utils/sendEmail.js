// server/utils/sendEmail.js

const nodemailer = require('nodemailer');

const sendEmail = async ({ to, subject, html }) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const info = await transporter.sendMail({
            from: `"EmailAI Pro" <${process.env.SMTP_FROM}>`,
            to,
            subject,
            html,
        });

        console.log('Email sent: %s', info.messageId);
        return info;
    } catch (err) {
        console.error('Email sending error:', err);
        throw err;
    }
};

module.exports = sendEmail;
