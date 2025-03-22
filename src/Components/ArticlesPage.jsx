import React from 'react'
import Pants from '../Assets/Pants.jpg';
import Top from '../Assets/Top.jpg'; 
const ArticlesPage = () => {
  return (
    <div className='h-screen w-screen bg-black'>
            <div className='pt-30 bg-transparent justify-center items-center text-center'>
             <h1 className='font-french font-extralight text-8xl  mb-10 text-lime-400'>We <span className='font-syne font-bold text-white'>Provide</span> </h1>
            {/* Images */}
            <div className="relative gap-20 h-full w-full flex justify-center items-center z-30">
              
            <div className='h-96 w-72 cursor-pointer bg-amber-50 rounded-xl shadow-lg items-center justify-center text-center hover:-translate-y-2 hover:transition-all'>
              <div className='relative ml-auto mr-auto mt-2 h-2/3 w-11/12 bg-black rounded-xl'>
                  <img src={Top} alt="Top" className="h-full w-full object-cover rounded-xl grayscale" loading='lazy' />
                </div>  
                  <h1 className='text-4xl font-syne font-bold'>Tops</h1>
                  <p className='text-xl font-syne'>Good top can Make a whole dress</p>
              </div>


              <div className='h-96 w-72 cursor-pointer bg-amber-50 rounded-xl shadow-lg items-center justify-center text-center hover:-translate-y-2 hover:transition-all'>
                <div className='relative ml-auto mr-auto mt-2 h-2/3 w-11/12 bg-black rounded-xl'>
                  <img src={Pants} alt="Top" className="h-full w-full object-cover object-left rounded-xl grayscale" loading='lazy'/>
                </div>  
                <h1 className='text-4xl font-syne font-bold'>Pants</h1>
                <p className='text-xl font-syne'>Good Pair of Pants can make you avoid arrest</p>
              </div>

             </div>

          </div>
    </div>
  )
}

export default ArticlesPage