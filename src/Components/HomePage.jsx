import React from 'react'
import Background from '../Assets/background.mp4'
import Header from './Header.jsx'
import Spline from '@splinetool/react-spline';
const HomePage = () => {
  return (
    <div className='h-screen w-screen overflow-hidden items-center justify-center'>
       <Header />
        <div> 
        <video src={Background} autoPlay loop muted  className='h-screen w-screen object-cover'/>
        </div>
        <div className='absolute left-3'>
          <h1 className='-mt-[35vw] text-8xl text-white font-mono '>Noire Vauge</h1>
          <h3 className='text-2xl text-white font-mono '>Elegance a porter</h3>
        </div>
    </div>
  )
}

export default HomePage