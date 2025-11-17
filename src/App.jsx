import './App.css'
import Hero from './components/Hero'
import WhatIDo from './components/WhatIDo'
import Projects from './components/Projects'
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
      <Projects />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
