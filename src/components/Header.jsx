import React, { useState, useEffect } from 'react'
import { useTheme } from '../contexts/ThemeContext'
import Navigation from './Navigation'
import './styles/Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="container">
        <div className="header-content">
          <a href="#home" className="logo" aria-label="Go to home section">
            <img src="/images/studio_icon_nobg_white.png" alt="ShakesBee Studio" className="logo-icon" />
            <div className="logo-copy">
              <span className="logo-text">ShakesBee Studio</span>
            </div>
          </a>
          <Navigation 
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
          <div className="header-actions">
            <button 
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'cream' ? 'green' : 'cream'} theme`}
              title={`Current: ${theme === 'cream' ? 'Cream' : 'Green'} theme - Click to switch`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m7.08 7.08l4.24 4.24M1 12h6m6 0h6M4.22 19.78l4.24-4.24m7.08-7.08l4.24-4.24" />
              </svg>
            </button>
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
      </div>
    </header>
  )
}

export default Header

