import React , {useState} from 'react'
import Bg3 from '../Assets/Bg3.png';
import Product from '../Assets/Top.jpg';
import '../Style/ProductPage.css';
import { Link } from 'react-router-dom';
import Cart from '../Assets/shopping-cart.png';
const ProductPage = () => {
       const [quantity, setQuantity] = useState(1)
       const [price, setPrice] = useState(50)
       const Quantity_addition = () =>{
          setQuantity(quantity+1)
          setPrice(price+50)
       } 
        const Quantity_substraction = () =>{
            setQuantity(quantity-1)
            setPrice(price-50)
            if(quantity === 1){
                setQuantity(1)
                setPrice(50)
            }
            else if(price <= 0){
              setQuantity(1)
                setPrice(50)
            }
        }

  return (
    <div 
    className='h-screen w-screen bg-cover bg-center flex flex-col'
    style={{ backgroundImage: `url(${Bg3})` }}
    >
      <div className='h-10 w-10 rounded-full bg-white/15 border-white border-1 absolute justify-center top-7 right-5'>
          <button className='h-full w-full flex items-center justify-center'> 
            <img src={Cart} alt="" className='h-6 ml-1.5 mr-auto'/>
          </button>
      </div>
    <div className='h-1/5 w-screen flex items-center '>
      <Link to={'/products'}>
    <button
        class="bg-transparent ml-2 mr-auto mb-10 text-center w-48 rounded-2xl h-14 relative text-white cursor-pointer text-xl font-syne font-semibold group"
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
      </Link>
      </div>
     <div className='h-2/3 w-2/3 max-md:h-fit relative ml-auto mr-auto rounded-xl border-1 border-stone-400 bg-white/20 flex max-md:flex-col items-center justify-center text-justify'>
      <div id='Product-Pic' className='relative mr-auto  max-md:ml-auto h-2/3 w-1/2'>
      <img src={Product} alt=""  className='h-100 max-md:-mt-8 -mt-10'/>
      </div>
      <div id='Product-infos'className='flex flex-col w-1/2 h-full max-md:items-center max-md:justify-center max-md:text-center'> 
        <div id='Product-name' className='h-1/3 w-full mt-10 max-md:mt-3'>
        <h1 className='font-syne font-bold text-4xl max-md:text-xl'>XVI - Full-White</h1>
        <p className='font-syne font-semibold '>Available: 30 pieces</p>
        </div>
        <div id='size'>
            <div class="radio-input">
              <label>
                <input type="radio" id="value-1" name="value-radio" value="value-1" />
                <span>XL</span>
              </label>
              <label>
                <input type="radio" id="value-2" name="value-radio" value="value-2" />
                <span>L</span>
              </label>
              <label>
                <input type="radio" id="value-3" name="value-radio" value="value-3" />
                <span>M</span>
              </label>
              <label>
                <input type="radio" id="value-4" name="value-radio" value="value-4" />
                <span>S</span>
              </label>
              <span class="selection"></span>
            </div>
        </div>
        <div id='Product-quantity' className='h-1/3 w-full mt-10 '>
           <div className='h-10 w-30 bg-white rounded-4xl flex items-center justify-center max-md:justify-self-center'>  
            <button onClick={Quantity_substraction} className='h-10 w-10 bg-black text-white rounded-l-4xl justify-start items-start mr-auto '>-</button>
            <h1 className='font-syne font-bold text-green-600'>{quantity}</h1>
            <button onClick={Quantity_addition} className='h-10 w-10 bg-black text-white rounded-r-4xl justify-end items-end ml-auto -mr-0.5'>+</button>
           </div>
        </div>
        <div id='Product-price' className='h-1/3 w-full '><h1 id='Price' className='font-syne text-2xl font-bold text-black'>Price: <span className='text-white'>{price} $ </span> </h1></div>
        <div className='flex gap-3'>
        <button
            class="cursor-pointer group relative bg-white hover:bg-zinc-300 text-black font-semibold text-sm px-2 py-3 rounded-full transition-all duration-200 ease-in-out shadow hover:shadow-lg w-40 h-12 mb-10"
          >
            <div class="relative flex items-center justify-center gap-2">
              <span class="relative inline-block overflow-hidden">
                <span
                  class="block transition-transform duration-300 group-hover:-translate-y-full"
                >
                  Buy Now!
                </span>
                <span
                  class="absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0"
                >
                  Thanks
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
                  stroke="white"
                  d="M7.5 16.5L16.5 7.5M16.5 7.5H10.5M16.5 7.5V13.5"
                ></path>
              </svg>
            </div>
          </button>
          <button
            class="cursor-pointer group relative bg-white hover:bg-zinc-300 text-black font-semibold text-sm px-2 py-3 rounded-full transition-all duration-200 ease-in-out shadow hover:shadow-lg w-40 h-12 mb-10"
          >
            <div class="relative flex items-center justify-center gap-2">
              <span class="relative inline-block overflow-hidden">
                <span
                  class="block transition-transform duration-300 group-hover:-translate-y-full"
                >
                  Add to Cart
                </span>
                <span
                  class="absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0"
                >
                  Added
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
                  stroke="white"
                  d="M7.5 16.5L16.5 7.5M16.5 7.5H10.5M16.5 7.5V13.5"
                ></path>
              </svg>
            </div>
          </button>
          </div>
      </div>
     </div>
     <div class="flex flex-col items-center justify-center h-screen hidden">
  <div class="w-full max-w-md bg-white rounded-lg shadow-md p-6">
    <h2 class="text-2xl font-bold text-gray-900 mb-4">Job Application Form</h2>

    <form class="flex flex-col">
      <input type="text" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Full Name" />
      <input type="email" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Email"/>
      <input type="text" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Phone Number"/>
      <input type="text" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="LinkedIn Profile URL"/>
      <textarea name="cover_letter" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Cover Letter"></textarea>
      <input type="file" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Resume"/>

      <button type="submit" class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">Apply</button>
    </form>
  </div>
</div>

    </div>
  )
}

export default ProductPage