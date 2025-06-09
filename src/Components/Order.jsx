import React, { useRef } from 'react';
import Bill from '../Assets/bill-icon.png';
import History from '../Assets/history-icon.png';
import Bg from '../Assets/Bg3.png'

const Order = () => {
  const billRef = useRef(null);
  const detailsRef = useRef(null);

  const showBill = () => {
    if (billRef.current && detailsRef.current) {
      billRef.current.classList.remove('hidden');
      detailsRef.current.classList.add('hidden');
    }
  };

  const showDetails = () => {
    if (billRef.current && detailsRef.current) {
      detailsRef.current.classList.remove('hidden');
      billRef.current.classList.add('hidden');
    }
  };

  return (
    <div className='h-fit w-screen bg-right bg-cover flex max-lg:flex-col' 
        style={{ backgroundImage: `url(${Bg})` }}	
    >
      <div className='flex flex-col h-screen max-lg:h-fit mb-5 w-1/5 items-center justify-center max-lg:w-full'>
        <div className=' w-full h-[10%] mb-auto shadow-2xl bg-white/10 max-lg:hidden'></div>
        <div className='flex flex-col h-[90%] w-full bg-white/10 items-center justify-center max-lg:text-center max-lg:h-[20%]'>
          <h1 className='mr-auto ml-[2vw] font-syne font-bold text-6xl text-white'>Name</h1>
          <h1 className='mr-auto ml-[2.3vw] font-syne font-thin text-xl text-white'>Id: 001010</h1>
        </div>
      </div>

      <div className='flex flex-col h-screen w-4/5 max-lg:w-full'>
        <div className='w-full shadow-2xl h-[10%] bg-white/10 justify-center items-center text-start '>
          <h1 className='mt-auto mb-auto font-syne font-bold text-6xl max-lg:text-4xl text-white'>Order Page</h1>
        </div>

        <div className='w-1/8 max-lg:w-2/8 h-[7%] bg-white/10 rounded-xl mb-auto mt-6 ml-3 flex gap-10 justify-center items-center '>
          <button
            id='BillB'
            className='cursor-pointer w-fit h-fit flex flex-col justify-center items-center'
            onClick={showBill}
          >
            <img src={Bill} alt="" className='h-8 ml-auto mr-auto'/>
          </button>
          <button
            id='DetailsB'
            className='cursor-pointer w-fit h-fit flex flex-col justify-center items-center'
            onClick={showDetails}
          >
            <img src={History} alt="" className='h-8 ml-auto mr-auto'/>
          </button>
        </div>

        <div
          id='Bill'
          ref={billRef}
          className='hidden w-[98%] h-[76%] bg-white/10 rounded-xl ml-3 mb-3 flex shadow-2xl flex-col'
        >
          <div className='h-[12vh] w-full max-lg:overflow-scroll'>
            <h1 className='font-syne font-bold text-7xl text-white'>Products</h1>
          </div>
          <div className='w-full h-fit p-3 flex flex-col max-lg:flex-row max-lg:mt-auto max-lg:mb-auto max-lg:overflow-scroll'>
            <div id='ids' className='w-full h-fit p-3 flex flex-row max-lg:flex-col '>
              <p className='font-syne font-thin text-2xl max-lg:text-nowrap flex-1 text-center  text-white '>Code Product</p>
              <p className='font-syne font-thin text-2xl flex-1 text-start text-white'>Product</p>
              <p className='font-syne font-thin text-2xl flex-1 text-start  text-white'>Price/Unit</p>
              <p className='font-syne font-thin text-2xl flex-1 text-start  text-white'>Final Price</p>
            </div>
          <div id='info' className='max-lg:flex'>
            <div className='w-full h-fit p-3 flex flex-row max-lg:flex-col '>
              <p className='font-syne font-thin text-2xl flex-1 text-center  text-white'>001</p>
              <p className='font-syne font-thin text-2xl max-lg:text-nowrap flex-1 text-white'>Product A</p>
              <p className='font-syne font-thin text-2xl flex-1 text-center  text-white'>10.00</p>
              <p className='font-syne font-thin text-2xl flex-1 text-center  text-white'>100.00</p>
            </div>
            <div className='w-full h-fit p-3 flex flex-row max-lg:flex-col'>
              <p className='font-syne font-thin text-2xl flex-1 text-center  text-white'>002</p>
              <p className='font-syne font-thin text-2xl max-lg:text-nowrap flex-1 text-white'>Product B</p>
              <p className='font-syne font-thin text-2xl flex-1 text-center  text-white'>20.00</p>
              <p className='font-syne font-thin text-2xl flex-1 text-center  text-white'>200.00</p>
            </div>
          </div>
          </div>
          <div className='flex mt-auto h-fit w-full p-3 '>
            <div className='mr-auto'>
              <h1 className='uppercase font-syne font-bold text-4xl text-white'>total</h1>
            </div>
            <div className='ml-auto'>
              <h1 className='uppercase font-syne font-bold text-4xl text-white'>00.00 $</h1>
            </div>
            <div></div>
          </div>
        </div>

        <div
          id='Details'
          ref={detailsRef}
          className='w-[98%] h-[76%] ml-3 mb-3 bg-white/10 rounded-xl'
        >
          <div className='h-[12vh] w-full '>
            <h1 className='font-syne font-bold text-7xl text-white'>Details</h1>
          </div>
          <div className='w-full h-fit p-3 flex flex-col max-lg:flex-row lg:gap-0'>
            {/* Header row */}
            <div className='w-full h-fit p-3 flex flex-row max-lg:flex-col'>
              <p className='font-syne font-thin text-2xl flex-1 text-center text-white'>Trans Code</p>
              <p className='font-syne font-thin text-2xl flex-1 text-center text-white'>Product Qnt</p>
              <p className='font-syne font-thin text-2xl flex-1 text-center text-white'>Date</p>
              <p className='font-syne font-thin text-2xl flex-1 text-center text-white'>Location</p>
              <p className='font-syne font-thin text-2xl flex-1 text-center text-white'>Phase</p>
              <p className='font-syne font-thin text-2xl flex-1 text-center text-white'>Paid</p>
            </div>
            {/* Data rows */}
            <div className='flex flex-col w-full max-lg:flex-row max-lg:overflow-scroll'>
              <div className='w-full h-fit p-3 flex flex-row max-lg:flex-col'>
                <p className='font-syne font-thin text-2xl flex-1 text-center text-white'>TR001</p>
                <p className='font-syne font-thin text-2xl flex-1 text-center text-white'>2</p>
                <p className='font-syne font-thin text-2xl flex-1 text-nowrap text-center text-white'>2024-06-09</p>
                <p className='font-syne font-thin text-2xl flex-1 text-center text-white'>Paris</p>
                <p className='font-syne font-thin text-2xl flex-1 text-center text-white'>Shipped</p>
                <p className='font-syne font-thin text-2xl flex-1 text-center text-white'>Yes</p>
              </div>
              <div className='w-full h-fit p-3 flex flex-row max-lg:flex-col'>
                <p className='font-syne font-thin text-2xl flex-1 text-center text-white'>TR002</p>
                <p className='font-syne font-thin text-2xl flex-1 text-center text-white'>1</p>
                <p className='font-syne font-thin text-2xl flex-1 text-nowrap text-center text-white'>2024-06-08</p>
                <p className='font-syne font-thin text-2xl flex-1 text-center text-white'>Lyon</p>
                <p className='font-syne font-thin text-2xl flex-1 text-center text-white'>Processing</p>
                <p className='font-syne font-thin text-2xl flex-1 text-center text-white'>No</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;