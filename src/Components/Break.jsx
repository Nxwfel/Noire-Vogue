import React from 'react'
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Bg2 from '../Assets/Bg3.png';
const Break = () => {
    const container = useRef();

    const { scrollYProgress } = useScroll({

        target: container,

        offset: ["start end", 'end start']

    })

    const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);


  return (
    <div 
    ref={container} 

    className='relative flex items-center justify-center h-screen text-center overflow-hidden'

    style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}>
        
        <h1 className='uppercase text-9xl font-syne font-bold text-white z-10'>Shop NOW!</h1>
        
        <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
        
            <motion.div style={{y}} className='relative w-full h-full z-20'> 
              <img src={Bg2} fill className="h-full object-cover" loading='lazy'/>
            </motion.div>

        </div>
        
    </div>
  )
}

export default Break