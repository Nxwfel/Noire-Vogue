import React, { useState } from 'react'
import Bg3 from '../Assets/Bg3.png';
import Product from '../Assets/Top.jpg';
import '../Style/ProductPage.css';
import { Link } from 'react-router-dom';
import Cart from '../Assets/shopping-cart.png';
import Close from '../Assets/close.png';
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

      const [formVisible, setFormVisible] = useState(false);
      const toggleForm = () => {
        setFormVisible(!formVisible);
        const formulaire = document.getElementById('formulaire');
        if (formulaire) {
          formulaire.classList.toggle('hidden');
        }
      };

      const [deliveryNote, setDeliveryNote] = useState(null);

      const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = {
          name: form[0].value,
          email: form[1].value,
          phone: form[2].value,
          location: form[3].value,
          shipping: "Standard", // ou récupère dynamiquement
          productPrice: price,
          finalPrice: price, // adapte si tu ajoutes des frais
          quantity: quantity,
          product: "XVI - Full-White"
        };
        setDeliveryNote(data);
        setFormVisible(false);
        document.getElementById('formulaire').classList.add('hidden');
      };

  return (
    <div 
    className='h-screen max-lg:min-h-fit w-screen bg-cover bg-center flex flex-col'
    style={{ backgroundImage: `url(${Bg3})` }}
    >
      <div className='h-10 w-10 rounded-full bg-white/15 border-white border-1 absolute justify-center top-7 right-5'>
          <button className='h-full w-full flex items-center justify-center '> 
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
     <div className='h-2/3 w-2/3 max-md:h-fit max-md:mb-5 relative ml-auto mr-auto rounded-xl border-1 border-stone-400 bg-white/20 flex max-md:flex-col items-center justify-center text-justify'>
      <div id='Product-Pic' className='relative mr-auto  max-md:ml-auto h-2/3 w-1/2'>
      <img src={Product} alt=""  className='h-100 max-md:h-full max-md:mt-0 -mt-10'/>
      </div>
      <div id='Product-infos'className='flex flex-col w-1/2 h-full max-md:items-center max-md:justify-center max-md:text-center'> 
        <div id='Product-name' className='h-1/3 w-full mt-10 max-md:mt-3'>
        <h1 className='font-syne font-bold text-4xl max-md:text-xl text-nowrap'>XVI - Full-White</h1>
        <p className='font-syne font-semibold text-nowrap max-md:pb-4'>Available: 30 pieces</p>
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
        <div id='Product-price' className='h-1/3 w-full max-md:mt-4'><h1 id='Price' className='font-syne text-2xl font-bold text-black'>Price: <span className='text-white font-mono'>{price} $ </span> </h1></div>
        <div className='flex gap-3 max-md:flex-col max-md:mt-5'>
        <button
            class="cursor-pointer group relative bg-white hover:bg-zinc-300 text-black font-semibold text-sm px-2 py-3 rounded-full transition-all duration-200 ease-in-out shadow hover:shadow-lg w-40 h-12 mb-10 max-md:mb-2"
            onClick={toggleForm}
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
     <div className='h-screen w-screen absolute z-10 flex items-center justify-center hidden' id='formulaire'>
        <div className="w-full max-w-md bg-black rounded-lg shadow-md p-6 absolute z-20">
          <div className='flex items-center justify-between mb-4 relative'>
            <h2 className="text-2xl font-bold text-white mb-4">Buying formular</h2>
            <button onClick={toggleForm} className="absolute cursor-pointer top-1 right-2">
              <img src={Close} alt="Close" className="h-6 w-6" />
            </button>
          </div>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input type="text" className="bg-gray-50 text-black border-0 rounded-md p-2 mb-4 focus:bg-white focus:outline-none focus:ring-1 focus:ring-green-500 transition ease-in-out duration-150" placeholder="Full Name" required />
            <input type="email" className="bg-gray-50 text-black border-0 rounded-md p-2 mb-4 focus:bg-white focus:outline-none focus:ring-1 focus:ring-green-500 transition ease-in-out duration-150" placeholder="Email" required />
            <input type="text" className="bg-gray-50 text-black border-0 rounded-md p-2 mb-4 focus:bg-white focus:outline-none focus:ring-1 focus:ring-green-500 transition ease-in-out duration-150" placeholder="Phone Number" required />
            <input type="text" className="bg-gray-50 text-black border-0 rounded-md p-2 mb-4 focus:bg-white focus:outline-none focus:ring-1 focus:ring-green-500 transition ease-in-out duration-150" placeholder="Location" required />
            <p className='text-lg text-white ml-3 font-bold font-syne'>Shipping: Standard</p>
            <p className='text-lg text-white ml-3 font-bold font-syne'>Product Price: {price} $</p>
            <p className='text-lg text-white ml-3 font-bold font-syne'>Final Price: {price} $</p>
            <button type="submit" className="bg-gradient-to-r cursor-pointer from-green-500 to-green-700 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-green-300 hover:to-green-900 transition ease-in-out duration-150">Submit</button>
          </form>
        </div>
        <div className="flex-col items-center justify-center h-full w-full z-0 bg-black/80 blur-3xl"></div>
      </div>

      {/* Bon de livraison */}
      {deliveryNote && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/70">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-lg" id="delivery-note">
            <h2 className="text-3xl font-bold mb-4 text-green-700">Bon de livraison</h2>
            <p><span className="font-bold">Full Name:</span> {deliveryNote.name}</p>
            <p><span className="font-bold">Email:</span> {deliveryNote.email}</p>
            <p><span className="font-bold">Phone:</span> {deliveryNote.phone}</p>
            <p><span className="font-bold">Adresse:</span> {deliveryNote.location}</p>
            <p><span className="font-bold">Product:</span> {deliveryNote.product}</p>
            <p><span className="font-bold">Quantity:</span> {deliveryNote.quantity}</p>
            <p><span className="font-bold">Unit Price:</span> {price} $</p>
            <p><span className="font-bold">Total:</span> {deliveryNote.finalPrice} $</p>
            <div className="flex gap-4 mt-6">
              <button
                className="bg-green-600 text-white px-4 py-2 rounded"
                onClick={() => setDeliveryNote(null)}
              >
                Close
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded"
                onClick={() => {
                  const printContents = document.getElementById('delivery-note').innerHTML;
                  const win = window.open('', '', 'height=700,width=700');
                  win.document.write('<html><head><title>Bon de livraison</title>');
                  win.document.write('<style>body{font-family:sans-serif;padding:2rem;} h2{color:#15803d;}</style>');
                  win.document.write('</head><body >');
                  win.document.write(printContents);
                  win.document.write('</body></html>');
                  win.document.close();
                  win.focus();
                  win.print();
                  win.close();
                }}
              >
                Print
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductPage