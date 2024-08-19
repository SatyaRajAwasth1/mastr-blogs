import React from 'react';
import '../styles/HeroSection.css';
import heroImage from '../assets/images/hero.jpg';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hey! I'm Satya Raj Awasthi</h1>
          <p>Your catchy tagline or bio goes here.</p>
        </div>
        <div>
          <img src={heroImage} alt="Satya Raj Awasthi Profile Picture." className="hero-image" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
