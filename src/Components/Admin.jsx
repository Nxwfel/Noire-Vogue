import React from 'react'
import Bg3 from '../Assets/Bg3.png'
const Admin = () => {
  return (
    <div className='h-screen w-screen flex bg-black'
    style={{ backgroundImage: `url(${Bg3})` }}	
    >
       <div className='w-1/6 h-screen bg-black/30 shadow-2xl shadow-black'>
          <h2 className='text-2xl font-bold font-syne text-white '>Noire-vauge</h2>
          <ul className='flex flex-col mt-auto mb-auto'>
            <li className='mb-2 '><a href='#' className='text-blue-500 font-bold font-syne'>Dashboard</a></li>
            <li className='mb-2'><a href='#' className='text-blue-500 font-bold font-syne'>Finance</a></li>
            <li className='mb-2'><a href='#' className='text-blue-500 font-bold font-syne'>Settings</a></li>
            <li><a href='#' className='text-blue-500 font-bold font-syne'>Logout</a></li>
          </ul>
       </div>
       <div>

       </div>
    </div>
  )
}

export default Admin