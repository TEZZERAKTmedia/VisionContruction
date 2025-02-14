import React, { useState } from 'react';
import './contact.css';

const Contact: React.FC = () => {
  const [constructionType, setConstructionType] = useState<string>('');

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setConstructionType(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 style={{ marginTop: '20%' }}>Get In Touch</h2>
        <p>Have a project in mind? Contact us today and let’s build something incredible together!</p>

        <div className="contact-details">
          <p>📍 <strong>Office Address:</strong> 123 Vision Drive, Construction City, USA</p>
          <p>📞 <strong>Phone:</strong> <a href="tel:+1(970)852-1810">+1 (970) 852-1810</a></p>
          <p>📧 <strong>Email:</strong> <a href="mailto:contact@visionconstruction.com?subject=Project Inquiry&body=Hi, I am interested in discussing a project with you.">contact@visionconstruction.com</a></p>
          <p>🕒 <strong>Working Hours:</strong> Mon - Fri: 8 AM - 6 PM</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Enter your name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" required />

          <label htmlFor="type">Type of Construction:</label>
          <select id="type" value={constructionType} onChange={handleTypeChange} required>
            <option value="">Select a type</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Industrial">Industrial</option>
            <option value="Renovation">Renovation</option>
            <option value="Other">Other</option>
          </select>

          <label htmlFor="message">Message:</label>
          <textarea id="message" rows={5} placeholder="Tell us about your project..." required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
