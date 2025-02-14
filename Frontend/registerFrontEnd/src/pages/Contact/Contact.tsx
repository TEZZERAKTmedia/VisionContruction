// src/pages/Contact/Contact.tsx
import React, { useState } from 'react';
import {registerApi} from '../../../config/axios'; // Adjust the path as needed
import './contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    constructionType: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      const response = await registerApi.post('/register-contact', formData);
      alert(response.data.message);
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('There was an error sending your message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 style={{ marginTop: '20%' }}>Get In Touch</h2>
        <p>Have a project in mind? Contact us today and let’s build something incredible together!</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />

          <label htmlFor="constructionType">Type of Construction:</label>
          <select
            id="constructionType"
            value={formData.constructionType}
            onChange={handleChange}
            required
          >
            <option value="">Select a type</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Industrial">Industrial</option>
            <option value="Renovation">Renovation</option>
            <option value="Other">Other</option>
          </select>

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
