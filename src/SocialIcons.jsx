import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebook, 
  faTwitter, 
  faInstagram, 
  faWhatsapp 
} from '@fortawesome/free-brands-svg-icons';
import { faCut } from '@fortawesome/free-solid-svg-icons';
import './SocialIcons.css';

function SocialIcons({ onScreenshot }) {
  return (
    <div className="social-icons">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
      {/* <button className="screenshot-icon" onClick={onScreenshot}>
        <FontAwesomeIcon icon={faCut} />
      </button> */}
    </div>
  );
}

export default SocialIcons;