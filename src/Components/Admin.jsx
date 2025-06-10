import React, { useRef } from 'react'
import Bg3 from '../Assets/Bg3.png'
import Dashboard from '../Assets/dashboard.png'
import Settings from '../Assets/Settings.png'
import Orders from '../Assets/Clients.png'
import Income from '../Assets/cash.png'
import Delivered from '../Assets/Delivered.png'

const Admin = () => {
  const dashboardRef = useRef(null);
  const settingsRef = useRef(null);

  const showDashboard = () => {
    if (dashboardRef.current && settingsRef.current) {
      dashboardRef.current.classList.remove('hidden');
      settingsRef.current.classList.add('hidden');
    }
  };

  const showSettings = () => {
    if (dashboardRef.current && settingsRef.current) {
      dashboardRef.current.classList.add('hidden');
      settingsRef.current.classList.remove('hidden');
    }
  };

  return (
    <div className='h-fit w-screen flex overflow-hidden'
      style={{ backgroundImage: `url(${Bg3})` }}
    >
      <div className='w-1/6 h-screen max-lg:h-auto  bg-white/10 shadow-2xl shadow-black sticky'>
        <h2 className='text-2xl max-lg:text-xl font-bold font-syne text-white text-center'>Noire-vauge</h2>
        <ul className='flex flex-col mt-[30vh] w-full h-full text-center'>
          <li
            id='DashboardB'
            className='ml-5 mb-5 flex text-center gap-4 hover:scale-110 hover:transition-all cursor-pointer'
            onClick={showDashboard}
          >
            <img src={Dashboard} alt="" className='h-8' onClick={showDashboard} />
            <span className='text-green-500 font-bold font-syne hover:transition-all hover:text-white max-lg:hidden'>Dashboard</span>
          </li>
          <li
            id='SettingsB'
            className='ml-5 mb-5 flex text-center gap-4 hover:scale-110 hover:transition-all cursor-pointer'
            onClick={showSettings}
          >
            <img src={Settings} alt="" className='h-8' onClick={showDashboard} />
            <span className='text-green-500 font-bold font-syne hover:transition-all hover:text-white max-lg:hidden'>Settings</span>
          </li>
          <li className='mt-auto mb-auto'>
            <a href='#' className='text-red-500 font-bold font-syne '>Logout</a>
          </li>
        </ul>
      </div>

      {/* Dashboard Section */}
      <div
        id='Dashboard'
        ref={dashboardRef}
        className='h-fit w-5/6 flex flex-col'
      >
        <div className='w-5/6 h-[35vh] max-lg:h-fit flex flex-col gap-4 mr-auto'>
          <h1 className='text-4xl font-bold font-syne text-white mt-10'>Admin Dashboard</h1>
          <div className='w-full h-full ml-10 flex max-lg:flex-col gap-20 items-center justify-center'>
            <div className='h-full w-1/3 max-lg:w-2/3 ml-auto mr-auto bg-green-800 rounded-xl flex flex-col items-center justify-center'>
              <div className='flex gap-5 mb-auto mt-5'>
                <img src={Orders} alt="" className='h-8' />
                <h1 className='font-syne text-xl font-bold text-white'>Today's Orders</h1>
              </div>
              <h1 className='text-white font-bold font-syne text-4xl mb-auto mr-auto ml-5'>00</h1>
            </div>
            <div className='h-full w-1/3 max-lg:w-2/3 ml-auto mr-auto bg-red-700 rounded-xl flex flex-col items-center justify-center'>
              <div className='flex gap-8 mb-auto mt-5'>
                <img src={Income} alt="" className='h-8' />
                <h1 className='font-syne text-xl font-bold text-white'>Month's income</h1>
              </div>
              <h1 className='text-white font-bold font-syne text-4xl mb-auto mr-auto ml-5'>00.00$</h1>
            </div>
            <div className='h-full w-1/3 max-lg:w-2/3 ml-auto mr-auto bg-yellow-700 rounded-xl flex flex-col items-center justify-center'>
              <div className='flex gap-5 mb-auto mt-5'>
                <img src={Delivered} alt="" className='h-8' />
                <h1 className='font-syne text-xl font-bold text-white'>Delivered Orders</h1>
              </div>
              <h1 className='text-white font-bold font-syne text-4xl mb-auto mr-auto ml-5'>00</h1>
            </div>
          </div>
        </div>
        <h1 className='text-7xl  font-bold font-syne text-white mt-20 ml-10 max-lg:ml-3'>Clients</h1>
        <div className='w-[94%] h-[80%] bg-white/15 shadow-2xl shadow-black ml-13 max-lg:ml-4 rounded-xl'>
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

      {/* Settings Section */}
      <div
        id='Settings'
        ref={settingsRef}
        className='h-fit w-5/6 flex flex-col hidden'
      >
        <div className='w-full h-screen flex flex-col gap-4 ml-auto mr-auto items-center justify-center'>
          <h1 className='text-4xl font-bold font-syne text-white mt-10'>Settings</h1>
          {/* Add/Suppress Products Section */}
          <div className='w-full flex flex-col md:flex-row gap-8 items-center justify-center mt-10'>
            {/* Add Product */}
            <div className='h-[40vh] bg-white/10 rounded-xl p-8 flex flex-col items-center w-80'>
              <h2 className='font-syne text-2xl font-bold text-white mb-4'>Add Product</h2>
              <input
                type="text"
                placeholder="Product Name"
                className="mb-2 px-4 py-2 rounded w-full"
              />
              <input
                type="number"
                placeholder="Price"
                className="mb-2 px-4 py-2 rounded w-full"
              />
              <input
                type="file"
                accept="image/*"
                className="mb-2 px-4 py-2 rounded w-full bg-white text-black"
              />
              <button className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition w-full mt-auto mb-auto'>
                Add
              </button>
            </div>
            {/* Delete Product */}
            <div className='h-[40vh] bg-white/10 rounded-xl p-8 flex flex-col items-center w-80'>
              <h2 className='font-syne text-2xl font-bold text-white mb-4'>Delete Product</h2>
              <input
                type="text"
                placeholder="Product ID or Name"
                className="px-4 py-2 rounded w-full mt-auto mb-auto"
              />
              <button className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition w-full mt-auto mb-auto'>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin