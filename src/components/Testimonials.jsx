import './Testimonials.css'
import { useState } from 'react'

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const testimonials = [
    {
      name: 'Nevine Acotanza',
      role: 'Chief Operating Officer',
      text: 'Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.',
      rating: 5
    },
    {
      name: 'Jone Duone Joe',
      role: 'Operating Officer',
      text: 'Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.',
      rating: 5
    },
    {
      name: 'Nevine Dhawan',
      role: 'CEO Of Golden Bravo',
      text: 'Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.',
      rating: 5
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  return (
    <section id='testimonials' className="testimonials">
      <div className="container">
        <p className="section-subtitle">WHAT CLIENTS SAY</p>
        <h2 className="section-title">Testimonial</h2>
        
        <div className="testimonial-carousel">
          <button className="carousel-btn prev-btn" onClick={prevTestimonial}>
            ‹
          </button>
          
          <div className="testimonial-card active">
            <div className="stars">
              {'⭐'.repeat(testimonials[currentIndex].rating)}
            </div>
            <p className="testimonial-text">{testimonials[currentIndex].text}</p>
            <div className="client-info">
              <div className="client-avatar">👤</div>
              <div>
                <h4>{testimonials[currentIndex].name}</h4>
                <p className="client-role">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>
          
          <button className="carousel-btn next-btn" onClick={nextTestimonial}>
            ›
          </button>
        </div>
        
        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
