import React from 'react';
import {lazy, useEffect } from 'react';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import HomePage from './HomePage.jsx';
const ArticlesPage = lazy (() => import ('./ArticlesPage.jsx'));
const About = lazy (() => import ('./About.jsx')) ;
const Footer = lazy(() => import ('./Footer.jsx'));
const Break = lazy(() => import ('././Break.jsx'));
const ProductPage = lazy(() => import ('./ProductPage.jsx'));
const ProductList = lazy(() => import ('./ProductList.jsx'));
const Order = lazy(() => import ('./Order.jsx'));
import Lenis from 'lenis';
function App() {
 
  useEffect( () => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

  }, [])

  return (
    <div className='h-fit w-screen overflow-hidden'>
    <HomePage />
    <About />
    <Break />
    <ArticlesPage />
    <Footer />
    <Order />
    </div>
  )
}

export default App
