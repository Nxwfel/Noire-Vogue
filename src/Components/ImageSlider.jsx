import React, { useState } from 'react';
import Top from '../Assets/top.png';
import Pants from '../Assets/pants.png';
import Shoes from '../Assets/shoes.png';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [Pants, Top, Shoes];

  const handleSlide = (direction) => {
    if (direction === 'left') {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    } else {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Slider Container */}
      <div className="relative h-full w-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="absolute w-[300px] h-auto transition-all duration-500 transform"
            style={{
              left: '50%',
              transform: `translateX(-50%) translateX(${(index - currentIndex) * 100}%)`,
              opacity: index === currentIndex ? 1 : 0.3,
              scale: index === currentIndex ? '1' : '0.8',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              zIndex: index === currentIndex ? 2 : 1
            }}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        id="left_button"
        onClick={() => handleSlide('left')}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm p-2 rounded-full hover:bg-white/50 transition-all duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="stroke-yellow-600"
        >
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="1.5"
            d="M11 6L5 12M5 12L11 18M5 12H19"
          />
        </svg>
      </button>

      <button
        id="right_button"
        onClick={() => handleSlide('right')}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm p-2 rounded-full hover:bg-white/50 transition-all duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="stroke-yellow-600 rotate-180"
        >
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="1.5"
            d="M11 6L5 12M5 12L11 18M5 12H19"
          />
        </svg>
      </button>
    </div>
  );
};

export default ImageSlider;