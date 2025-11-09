import './App.css'
import Hero from './components/Hero'
import WhatIDo from './components/WhatIDo'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Hero />
      <WhatIDo />
      <Testimonials />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
