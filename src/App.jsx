import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './pages/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import Services from './pages/Services'
import Features from './pages/Features'
import Projects from './pages/Projects'
import Wedo from './pages/Wedo'
import Choose from './pages/Choose'
import Pricing from './pages/Pricing'
import Testimonial from './pages/Testimonial'
import Cta from './pages/Cta'
import Blog from './pages/Blog'
import Footer from './pages/Footer'
function App() {

    return(<>
        <Navbar/>
        <Hero/>
        <About/>
        <Services/>
        <Features/>
        <Projects/>
        <Wedo/>
        <Choose/>
        <Pricing/>
        <Testimonial/>
        <Cta/>
        <Blog/>
<Footer/>
      </>

        )
 
}


export default App
