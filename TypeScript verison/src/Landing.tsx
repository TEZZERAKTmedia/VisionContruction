import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import './LandingPage.css';
import layer1 from './assets/layer1.png';
import layer2 from './assets/layer2.png';
import layer3 from './assets/layer3.png';
import { Link } from 'react-router-dom';


const LandingPage: React.FC = () => {
  return (
    <ParallaxProvider>
      <div className="landing-page">
        {/* Section 1 – Parallax Background */}
        <section className="section section-1">
          <Parallax className="parallax-layer" translateY={[-20, 20]} >
            <img src={layer3} alt="Layer 1" />
          </Parallax>
          <Parallax className="parallax-layer" translateY={[-30, 30]} >
            <img src={layer2} style={{marginTop:'10%'}} alt="Layer 2" />
          </Parallax>
          <Parallax className="parallax-layer" translateY={[-40, 40]}>
            <img src={layer1} style={{marginTop:'20%'}} alt="Layer 3" />
          </Parallax>
          <div className="content">
            <h1 className="title">Welcome Vision Construction</h1>
            <p>Your vision is our sight</p>
            <Link to="/contact" className="btn">Get Started</Link>
          </div>
        </section>

        {/* Section 2 – Curved top border with parallax background */}
        <section className="section section-2">
          <div
            className="parallax parallax-top"
            style={{ backgroundImage: `url('/assets/your-image1.jpg')` }}
          >
            <div className="content" style={{width:'80%'}}>
              <h2>About Us</h2>
              <h3>Why Choose Us?</h3>
        <ul>
          <li>🏗 <strong>Expert Craftsmanship</strong> – Our team consists of highly skilled builders, engineers, and architects.</li>
          <li>🌍 <strong>Sustainable Construction</strong> – We prioritize eco-friendly materials and energy-efficient designs.</li>
          <li>🏡 <strong>Custom Solutions</strong> – Whether you need a new home, office, or warehouse, we tailor each project to your needs.</li>
          
        </ul>
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
    </ParallaxProvider>
  );
};

export default LandingPage;
