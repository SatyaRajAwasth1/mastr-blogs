import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="newsletter">
        <h2>Subscribe to our Newsletter</h2>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
      <div className="social-links">
        <h2>Follow Us</h2>
        {/* Add social media icons/links */}
      </div>
      <div className="additional-info">
        <p>&copy; 2024 Mastr Blogs. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
