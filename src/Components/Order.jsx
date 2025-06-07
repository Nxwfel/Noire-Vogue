import React, { useRef } from 'react';
import Bill from '../Assets/bill-icon.png';
import History from '../Assets/history-icon.png';
import Bg from '../Assets/Admin-Bg.png'

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
    <div className='h-fit w-screen bg-right bg-cover flex' 
        style={{ backgroundImage: `url(${Bg})` }}	
    >
      <div className='flex flex-col h-screen w-1/5 items-center justify-center'>
        <div className=' w-full h-[10%] mb-auto shadow-2xl border-b-1'></div>
        <div className='flex flex-col h-[90%] w-full bg-white/10 items-center justify-center border-r-1'>
          <h1 className='mr-auto ml-[2vw] font-syne font-bold text-6xl'>Name</h1>
          <h1 className='mr-auto ml-[2.3vw] font-syne font-thin text-xl'>Id: 001010</h1>
        </div>
      </div>

      <div className='flex flex-col h-screen w-4/5'>
        <div className='w-full shadow-2xl h-[10%] border-b-1 justify-center items-center text-start'>
          <h1 className='mt-auto mb-auto font-syne font-bold text-6xl'>Order Page</h1>
        </div>

        <div className='w-1/8 h-[7%] bg-white/10 rounded-xl border-1 mb-auto mt-6 ml-3 flex gap-10 justify-center items-center '>
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
          className='hidden w-[98%] h-[76%] bg-white/10 ml-3 mb-3 border-1 flex shadow-2xl flex-col'
        >
          <div className='h-[12vh] w-full border-b-1'>
            <h1 className='font-syne font-bold text-7xl'>Product-List</h1>
          </div>
          <div className=''>
            <div id='ids' className='w-full h-fit p-3 flex flex-row border-b-1'>
              <p className='font-syne font-thin text-2xl flex-1 text-center'>Code Product</p>
              <p className='font-syne font-thin text-2xl flex-1 text-center'>Product</p>
              <p className='font-syne font-thin text-2xl flex-1 text-center'>Price/Unit</p>
              <p className='font-syne font-thin text-2xl flex-1 text-center'>Final Price</p>
            </div>
          </div>
          <div id='info' className=''>
            <div className='w-full h-fit p-3 flex flex-row border-b-1'>
              <p className='font-syne font-thin text-2xl flex-1 text-center'>001</p>
              <p className='font-syne font-thin text-2xl flex-1 text-center'>Product A</p>
              <p className='font-syne font-thin text-2xl flex-1 text-center'>10.00</p>
              <p className='font-syne font-thin text-2xl flex-1 text-center'>100.00</p>
            </div>
            <div className='w-full h-fit p-3 flex flex-row border-b-1'>
              <p className='font-syne font-thin text-2xl flex-1 text-center'>002</p>
              <p className='font-syne font-thin text-2xl flex-1 text-center'>Product B</p>
              <p className='font-syne font-thin text-2xl flex-1 text-center'>20.00</p>
              <p className='font-syne font-thin text-2xl flex-1 text-center'>200.00</p>
            </div>
          </div>
          <div className='flex mt-auto h-fit w-full p-3 border-t-1'>
            <div className='mr-auto'>
              <h1 className='uppercase font-syne font-bold text-4xl'>total</h1>
            </div>
            <div className='ml-auto'>
              <h1 className='uppercase font-syne font-bold text-4xl'>00.00 $</h1>
            </div>
            <div></div>
          </div>
        </div>

        <div
          id='Details'
          ref={detailsRef}
          className='w-[98%] h-[76%] ml-3 mb-3 border-1 bg-white/10'
        >
          <div className='h-[12vh] w-full border-b-1'>
            <h1 className='font-syne font-bold text-7xl'>Details</h1>
          </div>
          <div className='w-full h-fit p-3 flex flex-row border-b-1'>
            <p className='font-syne font-thin text-2xl flex-1 text-center'>Trans Code</p>
            <p className='font-syne font-thin text-2xl flex-1 text-center'>Product Qnt</p>
            <p className='font-syne font-thin text-2xl flex-1 text-center'>Date</p>
            <p className='font-syne font-thin text-2xl flex-1 text-center'>Location</p>
            <p className='font-syne font-thin text-2xl flex-1 text-center'>Phase</p>
            <p className='font-syne font-thin text-2xl flex-1 text-center'>Paid</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;