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

      <div className='flex flex-col h-screen w-4/5 '>
        <div className='w-full shadow-2xl h-[10%] bg-white/10 justify-center items-center text-start'>
          <h1 className='mt-auto mb-auto font-syne font-bold text-6xl max-lg:text-4xl text-white'>Order Page</h1>
        </div>

        <div className='w-1/8 h-[7%] bg-white/10 rounded-xl mb-auto mt-6 ml-3 flex gap-10 justify-center items-center '>
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
          <div className='h-[12vh] w-full '>
            <h1 className='font-syne font-bold text-7xl text-white'>Product-List</h1>
          </div>
          <div className='w-full h-fit p-3 flex flex-row '>
            <div id='ids' className='w-full h-fit p-3 flex flex-row max-lg:flex-col'>
              <p className='font-syne font-thin text-2xl flex-1 text-center  text-white'>Code Product</p>
              <p className='font-syne font-thin text-2xl flex-1 text-center  text-white'>Product</p>
              <p className='font-syne font-thin text-2xl flex-1 text-center  text-white'>Price/Unit</p>
              <p className='font-syne font-thin text-2xl flex-1 text-center  text-white'>Final Price</p>
            </div>
          <div id='info' className=''>
            <div className='w-full h-fit p-3 flex flex-row max-lg:flex-col'>
              <p className='font-syne font-thin text-2xl flex-1 text-center  text-white'>001</p>
              <p className='font-syne font-thin text-2xl flex-1 text-center  text-white'>Product A</p>
              <p className='font-syne font-thin text-2xl flex-1 text-center  text-white'>10.00</p>
              <p className='font-syne font-thin text-2xl flex-1 text-center  text-white'>100.00</p>
            </div>
            <div className='w-full h-fit p-3 flex flex-row max-lg:flex-col'>
              <p className='font-syne font-thin text-2xl flex-1 text-center  text-white'>002</p>
              <p className='font-syne font-thin text-2xl flex-1 text-center  text-white'>Product B</p>
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
          className='w-[98%] h-[76%] ml-3 mb-3  bg-white/10 rounded-xl'
        >
          <div className='h-[12vh] w-full '>
            <h1 className='font-syne font-bold text-7xl text-white'>Details</h1>
          </div>
          <div className='w-full h-fit p-3 flex flex-row '>
            <p className='font-syne font-thin text-2xl flex-1 text-center  text-white'>Trans Code</p>
            <p className='font-syne font-thin text-2xl flex-1 text-center text-white  '>Product Qnt</p>
            <p className='font-syne font-thin text-2xl flex-1 text-center text-white '>Date</p>
            <p className='font-syne font-thin text-2xl flex-1 text-center text-white '>Location</p>
            <p className='font-syne font-thin text-2xl flex-1 text-center text-white '>Phase</p>
            <p className='font-syne font-thin text-2xl flex-1 text-center text-white '>Paid</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;