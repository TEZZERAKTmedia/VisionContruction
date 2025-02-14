// controllers/contactController.js
const { sendEmailNotification } = require('../../utils/email');

const handleContactForm = async (req, res) => {
  const { name, email, constructionType, message } = req.body;

  if (!name || !email || !constructionType || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const emailContent = `
    <h1>New Contact Form Submission</h1>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Type of Construction:</strong> ${constructionType}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `;

  try {
    await sendEmailNotification(
      process.env.ADMIN_EMAIL,
      `Contact Form Submission: ${constructionType}`,
      emailContent
    );
    res.status(200).json({ message: 'Your message has been sent successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send your message. Please try again later.' });
  }
};

module.exports = { handleContactForm };
