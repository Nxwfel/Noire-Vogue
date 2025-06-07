import React from 'react';
import Bill from '../Assets/bill-icon.png';
import History from '../Assets/history-icon.png';
const Order = () => {
  return (
    <div className='h-fit w-screen bg-yellow-300 bg-center bg-cover flex' >
        <div className='flex flex-col h-screen w-1/5 items-center justify-center border-r-1'>
          
          <div className='border-b-1 w-full h-[10%] mb-auto'></div>

          <div className='flex flex-col h-[90%] w-full items-center justify-center'>
          <h1 className='mr-auto ml-[2vw] font-syne font-bold text-6xl'>Name</h1>
          <h1 className='mr-auto ml-[2.3vw] font-syne font-thin text-xl'>001010</h1>
          </div>
        </div>

        <div className='flex flex-col h-screen w-4/5'>

        <div className='border-b-1 w-full h-[10%] justify-center items-center text-start'>
          <h1 className='mt-auto mb-auto font-syne font-thin text-6xl'>Order Page</h1>
        </div>

        <div className='w-1/8 h-[7%] border-1 mb-auto mt-6 ml-3 flex gap-5'>
          <img src={Bill} alt="" className='h-10 ml-auto mr-auto'/>
          <img src={History} alt="" className='h-10 ml-auto mr-auto'/>
        </div>

        <div id='Bill' className='w-[98%] h-[76%] ml-3 mb-3 border-1'>
          <div className='h-[12vh] w-full border-b-1'>
          <h1 className='font-syne font-bold text-7xl'>Product-List</h1>
          </div>
          <div className='w-full h-fit p-3 flex border-b-1'>
            <p className='font-syne font-thin text-2xl ml-auto mr-auto'>Code Product</p>
            <p className='font-syne font-thin text-2xl ml-auto mr-auto'>Product</p>
            <p className='font-syne font-thin text-2xl ml-auto mr-auto'>Price/Unit</p>
            <p className='font-syne font-thin text-2xl ml-auto mr-auto'>Final Price</p>
          </div>
        </div>
        <div id='History' className='hidden w-[98%] h-[76%] ml-3 mb-3 border-1'>
          <div className='h-[12vh] w-full border-b-1'>
          <h1 className='font-syne font-bold text-7xl'>History</h1>
          </div>
          <div className='w-full h-fit p-3 flex border-b-1'>
            <p className='font-syne font-thin text-2xl ml-auto mr-auto'>Transaction Code</p>
            <p className='font-syne font-thin text-2xl ml-auto mr-auto'>Product Qnt</p>
            <p className='font-syne font-thin text-2xl ml-auto mr-auto'>Date</p>
            <p className='font-syne font-thin text-2xl ml-auto mr-auto'>Paid</p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Order;