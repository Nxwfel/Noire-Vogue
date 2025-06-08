import React from 'react'
import Bg3 from '../Assets/Bg3.png'
import Dashboard from '../Assets/Dashboard.png'
import Finance from '../Assets/Finance.png'
import Settings from '../Assets/Settings.png'
import { Link } from "react-router";
const Admin = () => {
  return (
    <div className='h-screen w-screen flex'
    style={{ backgroundImage: `url(${Bg3})` }}	
    > 
       <div className='w-1/6 h-screen bg-white/10 shadow-2xl shadow-black'>

          <h2 className='text-2xl font-bold font-syne text-white text-center'>Noire-vauge</h2>

          <ul className='flex flex-col mt-[30vh] w-full h-full text-center'>
              <li className='ml-5 mb-5 flex text-center gap-4 hover:scale-110 hover:transition-all'><img src={Dashboard} alt="" className='h-8' /><a href='#' className='text-green-500 font-bold font-syne hover:transition-all hover:text-white'>Dashboard</a></li>
              <li className='ml-5 mb-5 flex text-center gap-4 hover:scale-110 hover:transition-all'><img src={Finance} alt="" className='h-8' /><a href='#' className='text-green-500 font-bold font-syne  hover:transition-all hover:text-white'>Finance</a></li>
              <li className='ml-5 mb-5 flex text-center gap-4 hover:scale-110 hover:transition-all'><img src={Settings} alt="" className='h-8' /><a href='#' className='text-green-500 font-bold font-syne  hover:transition-all hover:text-white'>Settings</a></li>
              <li className='mt-auto mb-auto'><a href='#' className='text-red-500 font-bold font-syne '>Logout</a></li>
          </ul>

       </div>
       <div className='h-screen w-5/6 flex flex-col'>
          <h1 className='text-7xl font-bold font-syne text-white mt-20 ml-10'>Clients</h1>
         <div className='w-[94%] h-[80%] bg-white/15 shadow-2xl shadow-black ml-13 rounded-xl'>
            <table className='w-full h-full text-white'>
              <thead>
                <tr className='text-center'>
                  <th className='p-4'>ID</th>
                  <th className='p-4'>Name</th>
                  <th className='p-4'>Status</th>
                  <th className='p-4'>Phone</th>
                </tr>
              </thead>
              <tbody>
                {/* Example data, replace with actual data */}
                  <tr className='text-center hover:bg-white/10 transition'>
                    <td className='p-4'>
                      <a href="/order" className="block w-full h-full">
                        1
                      </a>
                    </td>
                    <td className='p-4'>
                      <a href="/order" className="block w-full h-full">
                        John Doe
                      </a>
                    </td>
                    <td className='p-4'>
                      <a href="/order" className="block w-full h-full">
                        Delivered
                      </a>
                    </td>
                    <td className='p-4'>
                      <a href="/order" className="block w-full h-full">
                        05 75 15 92 21
                      </a>
                    </td>
                  </tr>
              </tbody>
              </table>
         </div>

       </div>
    </div>
  )
}

export default Admin