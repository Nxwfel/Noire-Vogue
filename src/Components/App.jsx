import React from 'react';
import {lazy, useEffect } from 'react';
import HomePage from './HomePage.jsx';
const ArticlesPage = lazy (() => import ('./ArticlesPage.jsx'));
const About = lazy (() => import ('./About.jsx')) ;
const Footer = lazy(() => import ('./Footer.jsx'))
const Break = lazy(() => import ('././Break.jsx'))
const ProductPage = lazy(() => import ('./ProductPage.jsx'))
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
    <>
    <HomePage />
    <About />
    <Break />
    <ArticlesPage />
    <Footer />
    <ProductPage />
    </>
  )
}

export default App
