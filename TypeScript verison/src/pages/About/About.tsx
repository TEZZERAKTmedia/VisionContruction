import React from 'react';
import './about.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 style={{marginTop:'20%'}}>About Vision Construction</h2>
        <p>
          At <strong>Vision Construction</strong>, we bring your dreams to life with precision, expertise, and innovation.
          With years of experience in the industry, we specialize in **residential, commercial, and industrial construction** projects.
          From designing modern homes to engineering large-scale commercial developments, our team is dedicated to quality and excellence.
        </p>
        
        <h3>Why Choose Us?</h3>
        <ul>
          <li>🏗 <strong>Expert Craftsmanship</strong> – Our team consists of highly skilled builders, engineers, and architects.</li>
          <li>🌍 <strong>Sustainable Construction</strong> – We prioritize eco-friendly materials and energy-efficient designs.</li>
          <li>🏡 <strong>Custom Solutions</strong> – Whether you need a new home, office, or warehouse, we tailor each project to your needs.</li>
          <li>📆 <strong>On-Time Delivery</strong> – We value efficiency and ensure every project meets its deadline.</li>
        </ul>

        <p>
          At Vision Construction, we don’t just build structures; we create lasting legacies. Whether you're a homeowner looking to renovate
          or a business planning a major development, our team is ready to bring your vision to reality.
        </p>
      </div>
    </section>
  );
};

export default About;
