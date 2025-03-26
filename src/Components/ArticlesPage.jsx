import React from 'react'
import Pants from '../Assets/Pants.png';
import Top from '../Assets/Top.png'; 
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
const ArticlesPage = () => {
  return (
    <div id='Articles' className='h-screen w-screen bg-black max-sm:flex-col max-sm:h-fit max-sm:pb-4'>
            <div className='pt-30 max-md:pt-10 bg-transparent justify-center items-center text-center '>
             <h1 className='font-french font-extralight text-8xl  mb-10 text-lime-400'>We <span className='font-syne font-bold text-white'>Provide</span> </h1>
            
            <div className="relative gap-20 h-full w-full flex justify-center items-center z-30 max-sm:flex-col max-sm:gap-4">
             <Link to='/products'>
            <motion.div
            initial={{opacity: 0, x: -100}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 2}}
            className='h-96 w-72 cursor-pointer bg-amber-50 rounded-xl shadow-lg items-center justify-center text-center hover:-translate-y-2 hover:transition-all'>
              <div className='relative ml-auto mr-auto pt-3 h-2/3 w-11/12 bg-transparent rounded-xl'>
                  <img src={Top} alt="Top" className="h-full w-full object-cover object-center rounded-xl grayscale"/>
                </div>  
                  <h1 className='text-4xl font-syne font-bold'>Tops</h1>
                  <p className='text-xl font-syne'>Good top can Make a whole dress</p>
              </motion.div>
            </Link> 
             <Link to={'/products'}>
              <motion.div
            initial={{opacity: 0, x: 100}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 2}} className='h-96 w-72 cursor-pointer bg-amber-50 rounded-xl shadow-lg items-center justify-center text-center hover:-translate-y-2 hover:transition-all'>
                <div className='relative ml-auto mr-auto pt-3 h-2/3 w-11/12 bg-transparent rounded-xl'>
                <img src={Pants} alt="Top" className="h-full w-full object-cover object-bottom rounded-xl grayscale"/>
                </div>  
                <h1 className='text-4xl font-syne font-bold'>Pants</h1>
                <p className='text-xl font-syne'>Good Pair of Pants can make you avoid arrest</p>
              </motion.div>
              </Link>
             </div>

          </div>
    </div>
  )
}

export default ArticlesPage