import React from 'react'
import './styles/Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <img
          src="/images/hero.png"
          alt=""
          className="hero-bg-image hero-bg-desktop"
          draggable="false"
        />
        <img
          src="/images/mobile hero.png"
          alt=""
          className="hero-bg-image hero-bg-mobile"
          draggable="false"
        />
        <div className="hero-bg-overlay"></div>
      </div>

      <div className="hero-content">
        <img
          src="/images/game title.png"
          alt="Brainrot Survivor"
          className="hero-title-logo"
          data-depth="0.14"
          draggable="false"
        />
      </div>

      <div className="hero-fade-bottom"></div>

      <div className="hero-scroll-hint" data-reveal="up" style={{ '--reveal-delay': '0.4s' }}>
        <span className="scroll-line"></span>
        <span className="scroll-text">Scroll to explore</span>
        <span className="scroll-line"></span>
      </div>
    </section>
  )
}

export default Hero
