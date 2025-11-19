import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './pages/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'

function App() {

    return(<>
        <Navbar/>
        <Hero/>
        <About/>
      </>

        )
 
}

export default App
