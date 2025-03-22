import React from 'react';
import HomePage from './HomePage.jsx';
import ArticlesPage from './ArticlesPage.jsx';
import About from './About.jsx';
import Footer from './Footer.jsx';
import Break from './Break.jsx';
import { useEffect } from 'react';
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
    </>
  )
}

export default App
