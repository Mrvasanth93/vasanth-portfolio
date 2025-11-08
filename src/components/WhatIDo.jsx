import './WhatIDo.css'

function WhatIDo() {
  const services = [
    {
      icon: '💼',
      title: 'Business Website',
      description: 'Professional business websites that establish your online presence and help you reach more customers effectively.'
    },
    {
      icon: '🚀',
      title: 'Landing Page',
      description: 'High-converting landing pages designed to capture leads and drive your marketing campaigns to success.'
    },
    {
      icon: '👤',
      title: 'Portfolio Website',
      description: 'Stunning portfolio websites to showcase your work and skills in the best possible way to potential clients.'
    },
    {
      icon: '🛒',
      title: 'E-commerce Setup',
      description: 'Complete e-commerce solutions with payment integration to help you sell your products online seamlessly.'
    },
    {
      icon: '🎨',
      title: 'Website Redesign',
      description: 'Transform your outdated website into a modern, user-friendly platform that engages visitors and boosts conversions.'
    },
    {
      icon: '💬',
      title: 'WhatsApp Integration',
      description: 'Integrate WhatsApp Business API to connect with your customers instantly and provide better support.'
    }
  ]

  return (
    <section className="what-i-do">
      <div className="container">
        <p className="section-subtitle">SERVICES</p>
        <h2 className="section-title">What I Do</h2>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatIDo
