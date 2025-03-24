import React , {useRef} from 'react'
import Bg3 from '../Assets/Bg3.png'
import Product from '../Assets/Product2.png'
const ProductList = () => {
  const Pants = useRef()
  const Tops = useRef()

  const toggleDisplay = (showRef, hideRef) => {
    if (showRef.current && hideRef.current) {
      // Show the selected section
      showRef.current.classList.remove('hidden', 'opacity-0');
      showRef.current.classList.add('grid', 'opacity-100');

      // Hide the other section
      hideRef.current.classList.remove('grid', 'opacity-100');
      hideRef.current.classList.add('hidden', 'opacity-0');
    }
  };

  const Pants_display = () => toggleDisplay(Pants, Tops);
  const Tops_display = () => toggleDisplay(Tops, Pants);

  return (
    <div 
    className='h-fit w-screen bg-center bg-cover flex flex-col items-center text-center'
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
          <div ref={Tops} id='Tops' className='grid grid-cols-4 ml-auto mr-auto mt-10 gap-10 max-w-screen min-h-screen opacity-100 transition-opacity duration-300'>
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
          <div ref={Pants} id='Pants' className='hidden grid-cols-4 ml-auto mr-auto mt-10 gap-10 max-w-screen min-h-screen opacity-0 transition-opacity duration-300'>
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