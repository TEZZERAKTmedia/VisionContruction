import React from 'react';
import './service.css';

const Services: React.FC = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2 style={{marginTop:'20%'}}>Our Services</h2>
        <p>We offer a full spectrum of construction services, ensuring excellence in every phase of your project.</p>

        <div className="service-list">
          <div className="service-card">
            <h3>🏠 Residential Construction</h3>
            <p>
              From custom-built homes to luxury renovations, we craft beautiful, durable, and energy-efficient houses designed to match your lifestyle.
            </p>
          </div>

          <div className="service-card">
            <h3>🏢 Commercial Development</h3>
            <p>
              We construct modern office buildings, retail spaces, and industrial facilities that support businesses in achieving their full potential.
            </p>
          </div>

          <div className="service-card">
            <h3>⚙️ Industrial & Infrastructure</h3>
            <p>
              We specialize in large-scale projects, including warehouses, factories, and infrastructure development for a growing economy.
            </p>
          </div>

          <div className="service-card">
            <h3>🛠 Remodeling & Renovations</h3>
            <p>
              Upgrade your space with cutting-edge designs, improved functionality, and high-quality renovations tailored to your needs.
            </p>
          </div>

          <div className="service-card">
            <h3>🌿 Sustainable & Green Building</h3>
            <p>
              We integrate eco-friendly materials, smart designs, and energy-efficient technologies to create sustainable, environmentally conscious buildings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
