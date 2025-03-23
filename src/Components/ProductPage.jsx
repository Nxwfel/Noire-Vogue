import React from 'react'
import Bg3 from '../Assets/Bg3.png';
const ProductPage = () => {
  return (
    <div 
    className='h-screen w-screen items-center justify-center bg-cover bg-center flex flex-col'
    style={{ backgroundImage: `url(${Bg3})` }}
    >
    <button
        class="bg-transparent mr-auto ml-20 mb-10 text-center w-48 rounded-2xl h-14 relative text-white cursor-pointer text-xl font-syne font-semibold group"
        type="button"
      >
        <div
          class="bg-green-600 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            height="25px"
            width="25px"
          >
            <path
              d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
              fill="#000000"
            ></path>
            <path
              d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
              fill="#000000"
            ></path>
          </svg>
        </div>
        <p class="translate-x-2">Go Back</p>
      </button>

     <div className='h-2/3 w-2/3 relative ml-auto mr-auto rounded-xl border-1 border-stone-400 bg-white/20 flex items-center justify-center text-justify'>
      <div id='Product-Pic' className='relative mt-auto mb-auto mr-auto -ml-10 bg-white h-2/3 w-1/2'></div>
      <div id='Product-infos'className='flex flex-col w-1/2 h-full'> 
        <div id='Product-name' className='h-1/3 w-full'>
        <h1>XVII - Full-White</h1>
        <p>Available: 30 pieces</p>
        </div>
        <div id='size'>
   
        <div class="flex flex-wrap justify-center items-center w-11/12 rounded-full select-none gap-2">
        <label class="text-slate-400">
          <input type="checkbox" class="h-[1px] opacity-0 overflow-hidden absolute whitespace-nowrap w-[1px] peer" />
          <span class="peer-checked:border-green-600 peer-checked:shadow-green-600/10 peer-checked:text-green-600 peer-checked:before:border-blue-500 peer-checked:before:bg-blue-500 peer-checked:before:opacity-100 peer-checked:before:scale-100 flex flex-col items-center justify-center w-9 h-[2.5rem] rounded-lg shadow-lg transition-all duration-200 cursor-pointer relative border-slate-300 border-[3px] bg-white before:absolute before:block before:w-5 before:h-5 before:border-[3px]  before:rounded-full before:top-1 before:left-1 before:opacity-0 before:transition-transform before:scale-0 before:text-white before:text-xs before:flex before:items-center before:justify-center hover:border-green-600 hover:before:scale-100 hover:before:opacity-100">
            <span class="transition-all duration-100">
            </span>
            <span class="transition-all duration-300 text-center">XL</span>
          </span>
        </label>

</div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default ProductPage