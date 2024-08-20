import React from 'react';
import '../App.css'
import '../styles/HeroSection.css';
import heroImage from '../assets/images/MaStR.png';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hey! I'm Satya Raj Awasthi</h1>
          <p>Your catchy tagline or bio goes here.</p>
        </div>
          <img src={heroImage} alt="Satya Raj Awasthi Profile Picture." className="hero-image" />
      </div>
    </section>
  );
}

export default HeroSection;
