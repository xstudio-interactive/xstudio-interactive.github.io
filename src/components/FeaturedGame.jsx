import React from 'react'
import './styles/FeaturedGame.css'

const FeaturedGame = () => {
  return (
    <section id="game" className="featured-game section">
      <div className="container">
        <div className="fg-layout">
          <div className="fg-poster" data-reveal="up" style={{ '--reveal-delay': '0.05s' }}>
            <div className="fg-poster-frame glass-effect" data-depth="0.14">
              <img
                src="/images/poster_1.png"
                alt="Brainrot Survivor"
                className="fg-poster-image"
                draggable="false"
              />
              <div className="fg-poster-status">In development</div>
            </div>
          </div>

          <div className="fg-info" data-reveal="up" style={{ '--reveal-delay': '0.14s' }}>
            <span className="fg-eyebrow">Featured game</span>
            <h2 className="fg-title">Brainrot Survivor</h2>
            <p className="fg-description">
              A 2D top-down survivor game featuring Italian Brainrot Animals as characters. Survive the chaos, embrace the brainrot.
            </p>
            <div className="fg-tags">
              <span className="tag">Rogue-lite</span>
              <span className="tag">2D</span>
              <span className="tag">Action</span>
              <span className="tag">Survivor</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedGame
