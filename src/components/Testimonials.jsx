import './Testimonials.css'

function Testimonials() {
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

  return (
    <section className="testimonials">
      <div className="container">
        <p className="section-subtitle">WHAT CLIENTS SAY</p>
        <h2 className="section-title">Testimonial</h2>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">
                {'⭐'.repeat(testimonial.rating)}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="client-info">
                <div className="client-avatar">👤</div>
                <div>
                  <h4>{testimonial.name}</h4>
                  <p className="client-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
