import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
    <footer className="footer">
      <p>&copy; {currentYear} Tejas It Solutions. All rights reserved.</p>
    </footer>
    </div>
  );
}

export default Footer;