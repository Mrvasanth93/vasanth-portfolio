import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Vasanth Kumar</h2>
            <p>© 2025. All rights reserved by Vasanth.Webstudio.</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">HOME</a></li>
          <li><a href="#what-i-do">SERVICES</a></li>
          <li><a href="#why-choose-us">WHY CHOOSE US</a></li>
          <li><a href="#testimonials">TESTIMONIALS</a></li>
          <li><a href="#contact">CONTACT</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
