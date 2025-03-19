import React from 'react'
import Background from '../Assets/background.mp4'
const HomePage = () => {
  return (
    <div className='h-screen w-screen overflow-hidden items-center justify-center'>
        <div className='z-50 right-0 top-1 absolute'> 
        <button
          className="z-30 relative mr-3 mt-3  cursor-pointer group bg-transparent  hover:bg-neutral-700 text-white font-semibold text-sm px-2 py-2 rounded-full transition-all duration-200 ease-in-out shadow hover:shadow-lg w-30 h-12"
        >
          <div class="relative flex items-center justify-center gap-2">
            <span class="relative inline-block overflow-hidden">
              <span
                class="block transition-transform duration-300 group-hover:-translate-y-full"
              >
                Menu
              </span>
              <span
                class="absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0"
              >
                Menu
              </span>
            </span>

            <svg
              class="w-4 h-4 transition-transform duration-200 group-hover:rotate-45"
              viewBox="0 0 24 24"
            >
              <circle fill="currentColor" r="11" cy="12" cx="12"></circle>
              <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                stroke="black"
                d="M7.5 16.5L16.5 7.5M16.5 7.5H10.5M16.5 7.5V13.5"
              ></path>
            </svg>
          </div>
        </button>
        <div className='hidden absolute right-0 top-0 h-[60vh] w-[37vw] z-20 bg-white rounded-4xl'></div>
        </div>
        <video src={Background} autoPlay loop muted  className='h-screen w-screen object-cover'/>
        <div className='absolute h-1/2 w-screen z-30 bg-white'></div>
        <div className='absolute bottom-10 left-3 text-start'>
          <h1 className='font-syne text-6xl text-white'>Noire Vauge</h1>
          <h3 className='font-syne text-2xl text-neutral-600'>Elegance a porter</h3>
        </div>
    </div>
  )
}

export default HomePage