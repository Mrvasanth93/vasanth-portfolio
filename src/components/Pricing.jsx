import './Pricing.css'

function Pricing() {
  const plans = [
    {
      name: 'Static',
      price: '199',
      features: [
        'Website Design',
        'Mobile Apps Design',
        'Logo Design',
        'Banner Design',
        'Visiting Card'
      ]
    },
    {
      name: 'Standard',
      price: '599',
      features: [
        'Website Design',
        'Mobile Apps Design',
        'Logo Design',
        'Banner Design',
        'Visiting Card',
        'Business Card'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: '1299',
      features: [
        'Website Design',
        'Mobile Apps Design',
        'Logo Design',
        'Banner Design',
        'Visiting Card',
        'Business Card',
        'SEO Optimization'
      ]
    }
  ]

  return (
    <section className="pricing">
      <div className="container">
        <p className="section-subtitle">PRICING</p>
        <h2 className="section-title">My Pricing</h2>
        
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Popular</div>}
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">{plan.price}</span>
                <span className="period">/mo</span>
              </div>
              <ul className="features-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
              <button className="order-btn">Order Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
