import React, { useState } from 'react';
import Background from '../Assets/background.mp4';
import Pants from '../Assets/pants.png';
import Top from '../Assets/top.png';
import Shoes from '../Assets/shoes.png';
import '../Style/HomePage.css';

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [Top, Pants, Shoes];

  const updateSlider = (direction) => {
    if (direction === 'left') {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    } else if (direction === 'right') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden items-center justify-center">
      <div className="z-50 right-0 top-1 absolute">
        <button
          className="z-30 relative mr-3 mt-3 cursor-pointer group bg-transparent hover:bg-neutral-700 text-white font-semibold text-sm px-2 py-2 rounded-full transition-all duration-200 ease-in-out shadow hover:shadow-lg w-30 h-12"
        >
          <div className="relative flex items-center justify-center gap-2">
            <span className="relative inline-block overflow-hidden">
              <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                Menu
              </span>
              <span className="absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                Menu
              </span>
            </span>

            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:rotate-45"
              viewBox="0 0 24 24"
            >
              <circle fill="currentColor" r="11" cy="12" cx="12"></circle>
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                stroke="black"
                d="M7.5 16.5L16.5 7.5M16.5 7.5H10.5M16.5 7.5V13.5"
              ></path>
            </svg>
          </div>
        </button>
        <div className="hidden absolute right-0 top-0 h-[60vh] w-[37vw] z-20 bg-white rounded-4xl"></div>
      </div>

      <video src={Background} autoPlay loop muted className="h-screen w-screen object-cover" />

      <div className="absolute h-1/2 w-screen top-40 z-30 bg-transparent justify-center items-center">
        <div className="flex items-center justify-center">
          <div className="track relative w-screen h-[400px] overflow-hidden">
            {/* Left Button */}
            <button
              id="left_button"
              onClick={() => updateSlider('left')}
              className="absolute left-0 top-1/2 z-10 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50px"
                height="50px"
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

            {/* Images */}
            <div className="relative h-full w-full flex flex-col items-center">
              {images.map((image, index) => (
                <div 
                  key={index} 
                  className="absolute w-full h-full flex flex-col items-center"
                  style={{
                    transform: `translateX(${(index - currentIndex) * 100}%)`,
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    opacity: index === currentIndex ? 1 : 0,
                  }}
                >
                  <h1 className="text-center text-4xl font-syne text-white mt-4 relative z-20">
                    {index === 0 ? 'Tops' : index === 1 ? 'Pants' : 'Shoes'}
                  </h1>
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="img w-[300px] h-[300px] object-contain transition-all duration-500 mt-8"
                  />
                </div>
              ))}
            </div>

            {/* Right Button */}
            <button
              id="right_button"
              onClick={() => updateSlider('right')}
              className="absolute right-3 top-1/2 z-10 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50px"
                height="50px"
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
        </div>
      </div>

      <div className="absolute bottom-10 left-3 text-start">
        <h1 className="font-syne text-6xl text-white">Noire Vauge</h1>
        <h3 className="font-syne text-2xl text-neutral-600">Elegance a porter</h3>
      </div>
    </div>
  );
};

export default HomePage;