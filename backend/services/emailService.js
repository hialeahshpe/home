// File: backend/services/emailService.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const emailService = {
    async sendWelcomeEmail(user) {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: user.email,
            subject: 'Welcome to SHPE MDC!',
            html: `
                <h1>Welcome to SHPE MDC!</h1>
                <p>Dear ${user.name},</p>
                <p>Thank you for joining our community. We're excited to have you on board!</p>
                <p>Best regards,<br>SHPE MDC Team</p>
            `
        };

        return await transporter.sendMail(mailOptions);
    },

    async sendEventReminder(user, event) {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: user.email,
            subject: `Reminder: ${event.title}`,
            html: `
                <h2>Event Reminder</h2>
                <p>Don't forget about the upcoming event:</p>
                <h3>${event.title}</h3>
                <p>Date: ${new Date(event.date).toLocaleDateString()}</p>
                <p>Location: ${event.location}</p>
                <p>Description: ${event.description}</p>
            `
        };

        return await transporter.sendMail(mailOptions);
    }
};

module.exports = emailService;
