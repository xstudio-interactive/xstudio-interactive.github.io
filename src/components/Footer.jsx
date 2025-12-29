import React from 'react'
import './styles/Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-title">ShakesBee Studio Inc.</h3>
            <p className="footer-tagline">Powered by Coffee, Chaos, and Bad Ideas.</p>
          </div>
          <div className="footer-links">
            <a href="#home" className="footer-link">Home</a>
            <a href="#portfolio" className="footer-link">Game</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} ShakesBee Studio Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

