import React , {useState} from 'react'
import Bg3 from '../Assets/Bg3.png';
import Product from '../Assets/Product2.png';
import '../Style/ProductPage.css';
import { Link } from 'react-router-dom';
const ProductPage = () => {
       const [quantity, setQuantity] = useState(1)
       const [price, setPrice] = useState(250)

       const Quantity_addition = () =>{
          setQuantity(quantity+1)
          setPrice(price+250)
       } 
        const Quantity_substraction = () =>{
            setQuantity(quantity-1)
            setPrice(price-250)
            if(quantity === 1){
                setQuantity(1)
                setPrice(250)
            }
            else if(price <= 0){
              setQuantity(1)
                setPrice(250)
            }
        }

  return (
    <div 
    className='h-screen w-screen bg-cover bg-center flex flex-col'
    style={{ backgroundImage: `url(${Bg3})` }}
    >
      <Link to={'/products'}>
    <button
        class="bg-transparent ml-2 mr-auto mb-10 mt-10 text-center w-48 rounded-2xl h-14 relative text-white cursor-pointer text-xl font-syne font-semibold group"
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
     <div className='h-2/3 w-2/3 relative ml-auto mr-auto rounded-xl border-1 border-stone-400 bg-white/20 flex items-center justify-center text-justify'>
      <div id='Product-Pic' className='relative mt-auto mb-auto  mr-auto -ml-30 rotate-20 h-2/3 w-1/2'>
      <img src={Product} alt=""  className='-mt-40'/>
      </div>
      <div id='Product-infos'className='flex flex-col w-1/2 h-full'> 
        <div id='Product-name' className='h-1/3 w-full mt-10'>
        <h1 className='font-syne font-bold text-4xl'>XVII - Full-White</h1>
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
        <div id='Product-quantity' className='h-1/3 w-full mt-10'>
           <div className='h-10 w-30 bg-white rounded-4xl flex items-center justify-center'>  
            <button onClick={Quantity_substraction} className='h-10 w-10 bg-black text-white rounded-l-4xl justify-start items-start mr-auto '>-</button>
            <h1 className='font-syne font-bold text-green-600'>{quantity}</h1>
            <button onClick={Quantity_addition} className='h-10 w-10 bg-black text-white rounded-r-4xl justify-end items-end ml-auto -mr-0.5'>+</button>
           </div>
        </div>
        <div id='Product-price' className='h-1/3 w-full'><h1 id='Price' className='font-syne text-2xl font-bold text-black'>Price: <span className='text-white'>{price} $ </span> </h1></div>
        
      </div>
     </div>
    </div>
  )
}

export default ProductPage