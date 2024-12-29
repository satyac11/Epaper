import React from 'react';
import './DisplayImage.css';

function DisplayImage({ src, alt }) {
  return (
    <div className="image-container">
      <img src={src} alt={alt} className="image" />
    </div>
  );
}

export default DisplayImage;