import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Vasanth Kumar</h2>
            <p>© 2024. All rights reserved by Vasanth Kumar.</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Link</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Authentication</a></li>
              <li><a href="#">System Status</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Over Right</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Developers</h4>
            <ul>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Authentication</a></li>
              <li><a href="#">API Reference</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Open Source</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
