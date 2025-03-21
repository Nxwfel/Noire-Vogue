import React, { useState } from 'react';
import Background from '../Assets/background.mp4';
import Pants from '../Assets/Pants.jpg';
import Top from '../Assets/Top.jpg';
import '../Style/HomePage.css';

const HomePage = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <div className="h-screen w-screen overflow-hidden items-center justify-center">
      <div className="h-3/4 w-1/2 z-30 right-4 top-2 fixed overflow-hidden">
        <button
          onClick={toggleMenu}
          className={`menu_button z-50 absolute right-0 mr-3 mt-3 cursor-pointer group hover:bg-neutral-700 text-white ${isMenuOpen ? "bg-neutral-700" : "bg-transparent" }  font-semibold text-sm px-2 py-2 rounded-full transition-all duration-200 ease-in-out shadow hover:shadow-lg w-30 h-12`}
        >
          <div className="relative flex items-center justify-center gap-2 ">
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

        {/* Menu */}
        <div className={`menu absolute right-0 top-0 h-[60vh] w-[37vw] z-40 bg-white rounded-4xl transition-all duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}>

          </div>
      </div>

      <video src={Background} autoPlay loop muted className="h-screen w-screen object-cover" />

      <div className={`absolute h-1/2 w-screen top-30 ${isMenuOpen ? 'z-20' : 'z-40'} bg-transparent justify-center items-center`}>

            {/* Images */}
            <div className="relative gap-20 h-full w-full flex justify-center items-center z-30">
              
            <div className='h-96 w-72  bg-amber-50 rounded-xl shadow-lg items-center justify-center text-center hover:-translate-y-2 hover:transition-all'>
              <div className='relative ml-auto mr-auto mt-2 h-2/3 w-11/12 bg-black rounded-xl'>
                  <img src={Top} alt="Top" className="h-full w-full object-cover rounded-xl grayscale" loading='lazy' />
                </div>  
                  <h1 className='text-4xl font-syne font-bold'>Tops</h1>
                  <p className='text-xl fnot-syne'>Good top can Make a whole dress</p>
              </div>


              <div className='h-96 w-72 bg-amber-50 rounded-xl shadow-lg items-center justify-center text-center hover:-translate-y-2 hover:transition-all'>
                <div className='relative ml-auto mr-auto mt-2 h-2/3 w-11/12 bg-black rounded-xl'>
                  <img src={Pants} alt="Top" className="h-full w-full object-cover object-left rounded-xl grayscale" loading='lazy'/>
                </div>  
                <h1 className='text-4xl font-syne font-bold'>Pants</h1>
                <p className='text-xl fnot-syne'>Good Pair of Pants can make you avoid arrest</p>
              </div>

             </div>

          </div>

      <div className="absolute bottom-0 left-3 text-start">
        <h1 className="font-syne text-6xl font-bold text-white">Noire Vauge</h1>
        <h3 className="font-syne text-8xl font-bold tracking-widest text-neutral-600">Elegance a porter</h3>
      </div>
    </div>
  );
};

export default HomePage;