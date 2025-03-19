import React from 'react'
import Background from '../Assets/background.mp4'
import Header from './Header.jsx'
const HomePage = () => {
  return (
    <div className='h-screen w-screen overflow-hidden items-center justify-center'>
       <Header />
        <div> 
        <video src={Background} autoPlay loop muted  className='h-screen w-screen object-cover'/>
        </div>

        <div className='absolute bottom-10 left-3 text-start'>
          <h1 className='font-syne text-6xl text-white'>Noire Vauge</h1>
          <h3 className='font-syne text-2xl text-neutral-600'>Elegance a porter</h3>
        </div>
    </div>
  )
}

export default HomePage