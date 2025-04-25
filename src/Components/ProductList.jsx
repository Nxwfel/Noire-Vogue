import React , {useRef, useEffect} from 'react'
import Bg3 from '../Assets/Bg3.png'
import Product from '../Assets/Product2.png'
import Product2 from '../Assets/Top.jpg';
import { Link } from 'react-router-dom'
const ProductList = () => {
  const Pants = useRef();
  const Tops = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const toggleDisplay = (showRef, hideRef) => {
    if (showRef.current && hideRef.current) {
      showRef.current.classList.remove('hidden', 'opacity-0');
      showRef.current.classList.add('grid', 'opacity-100');

      hideRef.current.classList.remove('grid', 'opacity-100');
      hideRef.current.classList.add('hidden', 'opacity-0');
    }
  };

  const Pants_display = () => toggleDisplay(Pants, Tops);
  const Tops_display = () => toggleDisplay(Tops, Pants);

  return (
    <div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}
    className='h-fit w-screen bg-center bg-cover flex flex-col'
    style={{ backgroundImage: `url(${Bg3})` }}	
    >
        <h1 className='font-syne font-bold text-sm text-black ml-auto mr-auto mt-4 uppercase'>noire-vauge</h1>
        <div className='flex ml-auto mr-auto mt-10 gap-10'>
          <div className='h-12 w-20 pb-2 bg-transparent hover:border-2 hover:border-transparent hover:border-b-white'>
            <button onClick={Tops_display} className='text-3xl font-syne font-bold text-white cursor-pointer'>
              Tops
            </button>
          </div>
          <div className='h-12 w-20 pb-2 bg-transparent hover:border-2 hover:border-transparent hover:border-b-white'>
            <button onClick={Pants_display}  className='text-3xl font-syne font-bold text-white cursor-pointer'>
              Pants
            </button>
          </div>

          </div>
                <Link to={'/'}>
              <button
                  class="bg-transparent mr-auto ml-2 mb-10 text-center w-48 rounded-2xl h-14 relative text-white cursor-pointer text-xl font-syne font-semibold group"
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
          <div ref={Tops} id='Tops' className='grid grid-cols-4 max-md:grid-cols-1 ml-auto mr-auto mt-10 gap-10 max-w-screen min-h-screen opacity-100 transition-opacity duration-300'>
          <Link to={'/product'}>
          <div className='h-96 w-72 cursor-pointer bg-amber-50 rounded-xl shadow-lg items-center justify-center text-center hover:-translate-y-2 hover:transition-all'>
              <div className='relative ml-auto mr-auto  h-2/3 w-11/12 bg-transparent rounded-xl hover:first:rotate-25 hover:first:scale-130 hover:first:-translate-x-5 hover:first:-translate-y-20 hover:transition-transform'>
                  <img src={Product2} alt="Top" className="h-full w-full object-cover rounded-xl grayscale" loading='lazy' />
                </div>  
                  <h1 className='text-4xl font-syne font-bold'>XVI</h1>
                  <p className='text-xl font-syne'>Price : 250$</p>
          </div>
          </Link>
          <div className='h-96 w-72 cursor-pointer bg-amber-50 rounded-xl shadow-lg items-center justify-center text-center hover:-translate-y-2 hover:transition-all'>
              <div className='relative ml-auto mr-auto mt-2 h-2/3 w-11/12 bg-transparent rounded-xl hover:first:rotate-25 hover:first:scale-130 hover:first:-translate-x-5 hover:first:-translate-y-20 hover:transition-transform'>
                  <img src={Product} alt="Top" className="h-full w-full object-cover rounded-xl grayscale" loading='lazy' />
                </div>  
                  <h1 className='text-4xl font-syne font-bold'>XVII</h1>
                  <p className='text-xl font-syne'>Price : 250$</p>
          </div>
          <div className='h-96 w-72 cursor-pointer bg-amber-50 rounded-xl shadow-lg items-center justify-center text-center hover:-translate-y-2 hover:transition-all'>
              <div className='relative ml-auto mr-auto mt-2 h-2/3 w-11/12 bg-transparent rounded-xl hover:first:rotate-25 hover:first:scale-130 hover:first:-translate-x-5 hover:first:-translate-y-20 hover:transition-transform'>
                  <img src={Product} alt="Top" className="h-full w-full object-cover rounded-xl grayscale" loading='lazy' />
                </div>  
                  <h1 className='text-4xl font-syne font-bold'>XVII</h1>
                  <p className='text-xl font-syne'>Price : 250$</p>
          </div>
          <div className='h-96 w-72 cursor-pointer bg-amber-50 rounded-xl shadow-lg items-center justify-center text-center hover:-translate-y-2 hover:transition-all'>
              <div className='relative ml-auto mr-auto mt-2 h-2/3 w-11/12 bg-transparent rounded-xl hover:first:rotate-25 hover:first:scale-130 hover:first:-translate-x-5 hover:first:-translate-y-20 hover:transition-transform'>
                  <img src={Product} alt="Top" className="h-full w-full object-cover rounded-xl grayscale" loading='lazy' />
                </div>  
                  <h1 className='text-4xl font-syne font-bold'>XVII</h1>
                  <p className='text-xl font-syne'>Price : 250$</p>
          </div>
          <div className='h-96 w-72 cursor-pointer bg-amber-50 rounded-xl shadow-lg items-center justify-center text-center hover:-translate-y-2 hover:transition-all'>
              <div className='relative ml-auto mr-auto mt-2 h-2/3 w-11/12 bg-transparent rounded-xl hover:first:rotate-25 hover:first:scale-130 hover:first:-translate-x-5 hover:first:-translate-y-20 hover:transition-transform'>
                  <img src={Product} alt="Top" className="h-full w-full object-cover rounded-xl grayscale" loading='lazy' />
                </div>  
                  <h1 className='text-4xl font-syne font-bold'>XVII</h1>
                  <p className='text-xl font-syne'>Price : 250$</p>
          </div>
          <div className='h-96 w-72 cursor-pointer bg-amber-50 rounded-xl shadow-lg items-center justify-center text-center hover:-translate-y-2 hover:transition-all'>
              <div className='relative ml-auto mr-auto mt-2 h-2/3 w-11/12 bg-transparent rounded-xl hover:first:rotate-25 hover:first:scale-130 hover:first:-translate-x-5 hover:first:-translate-y-20 hover:transition-transform'>
                  <img src={Product} alt="Top" className="h-full w-full object-cover rounded-xl grayscale" loading='lazy' />
                </div>  
                  <h1 className='text-4xl font-syne font-bold'>XVII</h1>
                  <p className='text-xl font-syne'>Price : 250$</p>
          </div>
          </div>
          <div ref={Pants} id='Pants' className='hidden grid-cols-4 max-md:grid-cols-1 ml-auto mr-auto mt-10 gap-10 max-w-screen min-h-screen opacity-0 transition-opacity duration-300'>
          <div className='h-96 w-72 cursor-pointer bg-amber-50 rounded-xl shadow-lg items-center justify-center text-center hover:-translate-y-2 hover:transition-all'>
              <div className='relative ml-auto mr-auto mt-2 h-2/3 w-11/12 bg-transparent rounded-xl hover:first:rotate-25 hover:first:scale-130 hover:first:-translate-x-5 hover:first:-translate-y-20 hover:transition-transform'>
                  <img src={Product} alt="Top" className="h-full w-full object-cover rounded-xl grayscale" loading='lazy' />
                </div>  
                  <h1 className='text-4xl font-syne font-bold'>XVII</h1>
                  <p className='text-xl font-syne'>Price : 250$</p>
          </div>
          <div className='h-96 w-72 cursor-pointer bg-amber-50 rounded-xl shadow-lg items-center justify-center text-center hover:-translate-y-2 hover:transition-all'>
              <div className='relative ml-auto mr-auto mt-2 h-2/3 w-11/12 bg-transparent rounded-xl hover:first:rotate-25 hover:first:scale-130 hover:first:-translate-x-5 hover:first:-translate-y-20 hover:transition-transform'>
                  <img src={Product} alt="Top" className="h-full w-full object-cover rounded-xl grayscale" loading='lazy' />
                </div>  
                  <h1 className='text-4xl font-syne font-bold'>XVII</h1>
                  <p className='text-xl font-syne'>Price : 250$</p>
          </div>
          <div className='h-96 w-72 cursor-pointer bg-amber-50 rounded-xl shadow-lg items-center justify-center text-center hover:-translate-y-2 hover:transition-all'>
              <div className='relative ml-auto mr-auto mt-2 h-2/3 w-11/12 bg-transparent rounded-xl hover:first:rotate-25 hover:first:scale-130 hover:first:-translate-x-5 hover:first:-translate-y-20 hover:transition-transform'>
                  <img src={Product} alt="Top" className="h-full w-full object-cover rounded-xl grayscale" loading='lazy' />
                </div>  
                  <h1 className='text-4xl font-syne font-bold'>XVII</h1>
                  <p className='text-xl font-syne'>Price : 250$</p>
          </div>
          <div className='h-96 w-72 cursor-pointer bg-amber-50 rounded-xl shadow-lg items-center justify-center text-center hover:-translate-y-2 hover:transition-all'>
              <div className='relative ml-auto mr-auto mt-2 h-2/3 w-11/12 bg-transparent rounded-xl hover:first:rotate-25 hover:first:scale-130 hover:first:-translate-x-5 hover:first:-translate-y-20 hover:transition-transform'>
                  <img src={Product} alt="Top" className="h-full w-full object-cover rounded-xl grayscale" loading='lazy' />
                </div>  
                  <h1 className='text-4xl font-syne font-bold'>XVII</h1>
                  <p className='text-xl font-syne'>Price : 250$</p>
          </div>
          <div className='h-96 w-72 cursor-pointer bg-amber-50 rounded-xl shadow-lg items-center justify-center text-center hover:-translate-y-2 hover:transition-all'>
              <div className='relative ml-auto mr-auto mt-2 h-2/3 w-11/12 bg-transparent rounded-xl hover:first:rotate-25 hover:first:scale-130 hover:first:-translate-x-5 hover:first:-translate-y-20 hover:transition-transform'>
                  <img src={Product} alt="Top" className="h-full w-full object-cover rounded-xl grayscale" loading='lazy' />
                </div>  
                  <h1 className='text-4xl font-syne font-bold'>XVII</h1>
                  <p className='text-xl font-syne'>Price : 250$</p>
          </div>
          <div className='h-96 w-72 cursor-pointer bg-amber-50 rounded-xl shadow-lg items-center justify-center text-center hover:-translate-y-2 hover:transition-all'>
              <div className='relative ml-auto mr-auto mt-2 h-2/3 w-11/12 bg-transparent rounded-xl hover:first:rotate-25 hover:first:scale-130 hover:first:-translate-x-5 hover:first:-translate-y-20 hover:transition-transform'>
                  <img src={Product} alt="Top" className="h-full w-full object-cover rounded-xl grayscale" loading='lazy' />
                </div>  
                  <h1 className='text-4xl font-syne font-bold'>XVII</h1>
                  <p className='text-xl font-syne'>Price : 250$</p>
          </div>
          <div className='h-96 w-72 cursor-pointer bg-amber-50 rounded-xl shadow-lg items-center justify-center text-center hover:-translate-y-2 hover:transition-all'>
              <div className='relative ml-auto mr-auto mt-2 h-2/3 w-11/12 bg-transparent rounded-xl hover:first:rotate-25 hover:first:scale-130 hover:first:-translate-x-5 hover:first:-translate-y-20 hover:transition-transform'>
                  <img src={Product} alt="Top" className="h-full w-full object-cover rounded-xl grayscale" loading='lazy' />
                </div>  
                  <h1 className='text-4xl font-syne font-bold'>XVII</h1>
                  <p className='text-xl font-syne'>Price : 250$</p>
          </div>
          <div className='h-96 w-72 cursor-pointer bg-amber-50 rounded-xl shadow-lg items-center justify-center text-center hover:-translate-y-2 hover:transition-all'>
              <div className='relative ml-auto mr-auto mt-2 h-2/3 w-11/12 bg-transparent rounded-xl hover:first:rotate-25 hover:first:scale-130 hover:first:-translate-x-5 hover:first:-translate-y-20 hover:transition-transform'>
                  <img src={Product} alt="Top" className="h-full w-full object-cover rounded-xl grayscale" loading='lazy' />
                </div>  
                  <h1 className='text-4xl font-syne font-bold'>XVII</h1>
                  <p className='text-xl font-syne'>Price : 250$</p>
          </div>
          </div>
    </div>
  )
}

export default ProductList