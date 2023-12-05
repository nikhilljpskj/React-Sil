

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>&copy; {new Date().getFullYear()} WG GREEN. All rights reserved.</p>
    </div>
  );
};

export default Footer;
