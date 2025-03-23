import React from 'react'
import Navbar from './components/Navbar'
import { Hero } from './components/Hero'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Turbocharged from './components/Turbocharged'
import TSquaredC from './components/TSquaredC'
import WhyChoose from './components/WhyChoose'
import Businesses from './components/Businesses'

const App = () => {
  return (
    <div >
      <Hero />
      <Turbocharged />
      <TSquaredC />
      <WhyChoose />
      <Businesses/>
      <Testimonials />
      <Contact />
      <Footer />

    </div>
  )
}

export default App