import React from 'react';
import './ImageCarousel.css';

function ImageCarousel({ images, currentIndex }) {
  return (
    <div className="carousel-container">
      <div className="image-container">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="image" />
        
      </div>
    </div>
    
  );
}

export default ImageCarousel;