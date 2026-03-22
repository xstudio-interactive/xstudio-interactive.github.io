import React from 'react'
import './styles/Navigation.css'

const Navigation = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Games', href: '#game' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`navigation ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.name} className="nav-item">
            <a
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="nav-link"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation

