import React, { useState, useEffect } from 'react'
import Navigation from './Navigation'
import './styles/Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src="/images/studio_icon_nobg_white.png" alt="ShakesBee Studio" className="logo-icon" />
            <span className="logo-text">ShakesBee Studio</span>
          </div>
          <Navigation 
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}></span>
            <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}></span>
            <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

