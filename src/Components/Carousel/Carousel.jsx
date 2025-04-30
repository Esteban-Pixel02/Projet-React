import React, { useState } from "react";
import "./Carousel.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      {/* Bouton précédent */}
      <button className="arrow left" onClick={prevSlide} aria-label="Slide précédente">
        <FaChevronLeft />
      </button>
      
      <div 
        className="carousel-image" 
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="image-counter">
          {currentIndex + 1}/{images.length}
        </div>
      </div>
      
      {/* Bouton suivant */}
      <button className="arrow right" onClick={nextSlide} aria-label="Slide suivante">
        <FaChevronRight />
      </button>
    </div>
  );

};
  

export default Carousel;
