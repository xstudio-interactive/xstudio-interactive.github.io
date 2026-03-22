import React, { useState, useEffect, useRef } from 'react'
import './styles/GameCarousel.css'

const GameCarousel = () => {
  const games = [
    {
      id: 1,
      title: 'Brainrot Survivor',
      image: '/images/poster_1.png',
      tagline: 'Featured chaos drop',
      genre: '2D survivor roguelite',
      description: 'Fast loops, cursed energy, and a loud visual moodboard that leans into the studio personality.',
    },
    {
      id: 2,
      title: 'Studio World Preview',
      image: '/images/poster_2.png',
      tagline: 'Art slot ready',
      genre: 'Supporting section art',
      description: 'This panel is built to accept future key art, seasonal beats, or campaign-style promotional visuals.',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef(null)

  // Function to start/reset the auto-advance timer
  const startTimer = React.useCallback(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    
    // Start a new interval
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % games.length)
    }, 8000) // Change slide every 8 seconds (slower than before)
  }, [games.length])

  useEffect(() => {
    startTimer()
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [startTimer])

  const goToSlide = (index) => {
    setCurrentIndex(index)
    startTimer() // Reset timer when manually navigating
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + games.length) % games.length)
    startTimer() // Reset timer when manually navigating
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % games.length)
    startTimer() // Reset timer when manually navigating
  }

  return (
    <section id="showcase" className="game-carousel section">
      <div className="container">
        <div className="section-header showcase-header" data-reveal="up">
          <span className="section-eyebrow">Studio showcase</span>
          <h2 className="section-title">Big art, layered mood, and a stronger first scroll.</h2>
          <p className="section-subtitle">
            The showcase now behaves more like a game studio splash sequence, with room for campaign art and dramatic section transitions.
          </p>
        </div>
        <div className="carousel-wrapper">
          <div className="carousel-backdrop glass-effect" data-depth="0.14"></div>
          <div className="carousel-container">
            <div className="carousel-slides">
              <div 
                className="carousel-slides-track"
                style={{
                  transform: `translateX(${-(currentIndex * 100)}%)`,
                }}
              >
                {games.map((game, index) => {
                  const isCurrent = index === currentIndex
                  
                  return (
                    <div
                      key={game.id}
                      className={`carousel-slide ${isCurrent ? 'active' : ''}`}
                    >
                      <div className="slide-content">
                        <div className="slide-image-shell" data-depth="0.24">
                          <img
                            src={game.image}
                            alt={game.title}
                            className="slide-image"
                            draggable="false"
                          />
                        </div>
                        <div className="slide-copy glass-effect" data-reveal="up" style={{ '--reveal-delay': '0.12s' }}>
                          <span className="slide-tagline">{game.tagline}</span>
                          <h3 className="slide-title">{game.title}</h3>
                          <p className="slide-description">{game.description}</p>
                          <div className="slide-meta">
                            <span>{game.genre}</span>
                            <span>{index === 0 ? 'Playable spotlight' : 'Future artwork ready'}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          
          <div className="carousel-controls">
            <button 
              className="carousel-button carousel-button-prev" 
              onClick={goToPrevious}
              aria-label="Previous slide"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"/>
                <path d="M11 18l-6-6 6-6" opacity="0.5"/>
              </svg>
            </button>
            
            <div className="carousel-indicators">
              {games.map((game, index) => (
                <button
                  key={game.id}
                  className={`indicator ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" opacity={index === currentIndex ? "1" : "0.6"}/>
                    <circle cx="8" cy="8" r="3.5" fill="currentColor" opacity={index === currentIndex ? "1" : "0.5"}/>
                  </svg>
                </button>
              ))}
            </div>
            
            <button 
              className="carousel-button carousel-button-next" 
              onClick={goToNext}
              aria-label="Next slide"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
                <path d="M13 18l6-6-6-6" opacity="0.5"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GameCarousel

