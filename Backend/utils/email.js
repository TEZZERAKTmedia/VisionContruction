const nodemailer = require('nodemailer');

// Configure the email transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST, // Hostinger's SMTP server (e.g., smtp.hostinger.com)
  port: process.env.EMAIL_PORT, // Port (e.g., 465 for SSL, 587 for TLS)
  secure: process.env.EMAIL_SECURE === 'true', // true for SSL, false for TLS
  auth: {
    user: process.env.EMAIL_USER, // Your Hostinger email address
    pass: process.env.EMAIL_PASS  // Your Hostinger email password
  },
  logger: true, // Log SMTP communication
  debug: true,  // Enable debugging
});
// Send email function
const sendEmailNotification = async (to, subject, html) => {
  try {
    const mailOptions = {
      from: {
        name: 'Vision Construction', // Display name
        address: process.env.EMAIL_USER, // Authenticated user's email address
      },
      to, // Recipient
      subject, // Subject line
      html, // HTML body
      replyTo: 'no-reply@yourapp.com', // Reply-to address
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error.message);
    throw error;
  }
};

// Export the utility
module.exports = {
  sendEmailNotification,
};
