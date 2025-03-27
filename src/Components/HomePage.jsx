import React, { useState } from 'react';
import Background from '../Assets/background.mp4';
import '../Style/HomePage.css';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-scroll';

const HomePage = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"])

  return (
    <div id='Home' className="h-screen w-screen overflow-hidden items-center justify-center">
      <motion.div style={{y}} className='relative h-full'>
      <div className="h-3/4 w-1/2 max-md:w-[80vw] z-30 right-4 top-2 fixed overflow-hidden">
        
        <button
          onClick={toggleMenu}
          className={`menu_button z-50 absolute right-0 mr-3 mt-3 cursor-pointer group hover:bg-lime-400 text-white ${isMenuOpen ? "bg-lime-400" : "bg-transparent" }  font-semibold text-sm px-2 py-2 rounded-full transition-all duration-200 ease-in-out shadow hover:shadow-lg w-30 h-12`}
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
        <div className={`menu absolute justify-start items-center right-0 top-0 h-[60vh] max-md:w-[78vw] w-[37vw] z-40 bg-white rounded-4xl transition-all duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 hidden'
          }`}>
          <ul className='flex flex-col gap-4 p-20 max-md:pl-6'>
           <Link to='Home' smooth={true} duration={500}><li onClick={toggleMenu} className='font-syne text-4xl  font-bold text-black hover:scale-105 hover:transition-transform cursor-pointer'>Home</li></Link> 
            <Link to='About' smooth={true} duration={500}><li onClick={toggleMenu} className='font-syne text-4xl  font-bold text-black hover:scale-105 hover:transition-transform cursor-pointer'>About us</li></Link>
            <Link to='Articles' smooth={true} duration={500}><li onClick={toggleMenu} className='font-syne text-4xl  font-bold text-black hover:scale-105 hover:transition-transform cursor-pointer'>Articles</li></Link>
            <Link to='Contact' smooth={true} duration={500}><li onClick={toggleMenu} className='font-syne text-4xl  font-bold text-black hover:scale-105 hover:transition-transform cursor-pointer'>Contact us</li></Link>
          </ul>
          </div>
      </div>

      <video src={Background} autoPlay loop muted className="h-screen w-screen object-cover" />



      <motion.div
      initial={{opacity: 0, x: -100}}
      whileInView={{opacity: 1, x: 0}}
      transition={{duration: 2}}
      className="absolute bottom-0 left-3 text-start max-sm:bottom-40">
        <h1 className="font-syne text-6xl font-bold text-zinc-50">Noire Vauge</h1>
        <h3 className="font-french text-8xl max-sm:text-6xl font-normal text-lime-400">Elegance a porter</h3>
      </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;