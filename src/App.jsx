import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ImageCarousel from "./ImageCarousel";
import "./App.css";
import SocialIcons from "./SocialIcons";
import NavigationButtons from "./NavigationButtons";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const screenshotRef = useRef(null);

  const images = [
    "/images/page-0001.jpg",
    "/images/page-0002.jpg",
    "/images/page-0003.jpg",
    "/images/page-0004.jpg",
  ];

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToTop();
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollToTop();
  };

  const handleScreenshot = () => {
    if (screenshotRef.current) {
      screenshotRef.current.takeScreenshot();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="app-container">
      <Navbar />

      {/* <NavigationButtons goToPrevious={goToPrevious} goToNext={goToNext} /> */}
      {/* <Screenshot ref={screenshotRef} targetRef={carouselRef} /> */}
      <div ref={carouselRef}>
        <ImageCarousel images={images} currentIndex={currentIndex} />
        <h4 className="page-count">Page Number: {currentIndex + 1}</h4>
        <NavigationButtons goToPrevious={goToPrevious} goToNext={goToNext} />
      </div>
      <SocialIcons onScreenshot={handleScreenshot} />
      <Footer />
    </div>
  );
}

export default App;
