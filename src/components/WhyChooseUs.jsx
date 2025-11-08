import './WhyChooseUs.css'

function WhyChooseUs() {
  const features = [
    {
      icon: '⚡',
      title: 'Fast 7-Day Delivery',
      description: 'Get your website up and running within a week without compromising on quality.'
    },
    {
      icon: '📱',
      title: 'Mobile-First Websites',
      description: 'All websites are designed mobile-first to ensure perfect experience on all devices.'
    },
    {
      icon: '💰',
      title: 'Affordable Pricing',
      description: 'Quality web development services at prices that fit your budget perfectly.'
    },
    {
      icon: '🎨',
      title: 'Clean UI',
      description: 'Modern, clean and intuitive user interfaces that your visitors will love.'
    },
    {
      icon: '🔍',
      title: 'Basic SEO Included',
      description: 'Every website comes with basic SEO optimization to help you get found online.'
    },
    {
      icon: '💬',
      title: 'Friendly Communication',
      description: 'Clear and friendly communication throughout the project to ensure your satisfaction.'
    }
  ]

  return (
    <section id='why-choose-us' className="why-choose-us">
      <div className="container">
        <p className="section-subtitle">WHY CHOOSE ME</p>
        <h2 className="section-title">Why Choose Us</h2>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
