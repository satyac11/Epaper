import React from 'react';

const NavigationButtons = ({ goToPrevious, goToNext }) => {
    return (
    <div className="carousel-buttons">
        <button className="carousel-button" onClick={goToPrevious}>
          &#8249;
        </button>
        <button className="carousel-button" onClick={goToNext}>
          &#8250;
        </button>
     </div>

    );
};

export default NavigationButtons;