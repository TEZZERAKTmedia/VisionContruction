import React from 'react';
import './LandingPage.css';
import VisionAnimation from './assets/Vision.mp4';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      {/* Section 1 – Transparent background */}
      <section className="section section-1">
        {/* Background Video */}
       
        {/* Content */}
        <h1 className="title">Welcome Vision Construction</h1>
        <p>Your vision is our sight</p>
      </section>

      {/* Section 2 – Curved top border with parallax background */}
      <section className="section section-2">
        <div
          className="parallax parallax-top"
          style={{ backgroundImage: `url('/assets/your-image1.jpg')` }}
        >
          <div className="content">
            <h2>About Us</h2>
            <p>Some introductory content.</p>
          </div>
        </div>
      </section>

      {/* Section 3 – Curved bottom border with parallax background */}
      <section className="section section-3">
        <div
          className="parallax parallax-bottom"
          style={{ backgroundImage: `url('/assets/your-image2.jpg')` }}
        >
          <div className="content">
            <h2>Our Services</h2>
            <p>Details about what we offer.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
