import React from 'react'
import {motion} from 'framer-motion'
import Block1 from '../assets/Block.jpg'
import Block2 from '../assets/Block2.jpg'
import '../Style/About.css'
const About = () => {
  return (
    <div id='About' className='h-screen w-screen bg-black flex-col'>

        <h1 className='pl-4 pt-20 pb-20 font-syne font-bold text-6xl text-white max-md:text-center'>Who Are <span className='font-french font-extralight'>W</span>e</h1>
        <div className='flex h-1/3 w-screen justify-center'> 
            <motion.div 
            initial={{opacity: 0, y: -100}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 2}}
            className='ml-10 max-md:ml-5 justify-self-start w-1/2 text-wrap flex-col max-sm:justify-center max-sm:items-center max-sm:ttext-center'> 
                <p className='max-w-2/3 max-sm:max-w-3xl max-sm:text-center font-syne font-light text-2xl text-white'>A High-end Clothing Brand That offers High <span className='font-french text-4xl'>Quality/Price</span> ratio .</p>
                <div class="flex max-sm:justify-center items-center gap-4">
              
             <div className='flex justify-self-start mt-8 justify-center items-center gap-10'>
               <div className='h-42 w-30 max-md:w-20  max-md:h-32 rounded-xl overflow-hidden hover:scale-110 hover:transition-transform'>
                 <img src={Block1} className='object-cover' loading='lazy' />
               </div>
               <div className='h-42 w-30 max-md:w-20  max-md:h-32 rounded-xl overflow-hidden hover:scale-110 hover:transition-transform'>
                 <img src={Block2} className='object-cover' loading='lazy' />
               </div>
              </div>
              
             </div>
             <button className="button self-center max-sm:justify-self-center">
                <svg class="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>
                Explore
              </button>
            </motion.div>
           
            <motion.div
            initial={{opacity: 0, x: 100}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 2}}
            className='justify-self-end w-1/2 text-wrap max-sm:hidden'>
               <p className='max-w-2/3 font-syne font-light text-2xl max-lg:text-base max-sm:text-sm text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aliquam, amet at unde, nam magnam voluptas repellat nostrum corrupti eveniet rem iusto. Corporis temporibus quos error fugiat repudiandae, ea, fugit id sit tempora aliquid, eveniet natus consequuntur mollitia. Explicabo nostrum perferendis nisi? Nostrum molestiae porro at laudantium, repudiandae beatae dolore!</p>
            </motion.div>
        </div>
    </div>
  )
}

export default About