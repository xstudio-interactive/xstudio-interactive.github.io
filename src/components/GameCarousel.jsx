import React, { useState, useEffect } from 'react'
import './styles/GameCarousel.css'

const GameCarousel = () => {
  // Game titles with their images
  const games = [
    {
      id: 1,
      title: 'Brainrot Survivor',
      image: '/images/brainrot survivor.png',
    },
    {
      id: 2,
      title: 'ShakesBee Studio',
      image: '/images/studio_icon.png',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % games.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [games.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + games.length) % games.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % games.length)
  }

  return (
    <section id="games" className="game-carousel section">
      <div className="container">
        <div className="carousel-wrapper">
          <div className="carousel-container">
            <button 
              className="carousel-button carousel-button-prev" 
              onClick={goToPrevious}
              aria-label="Previous slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            
            <div className="carousel-slides">
              {games.map((game, index) => (
                <div
                  key={game.id}
                  className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
                >
                  <div className="slide-content">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="slide-image"
                    />
                    <div className="slide-overlay">
                      <h3 className="slide-title">{game.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              className="carousel-button carousel-button-next" 
              onClick={goToNext}
              aria-label="Next slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
          
          <div className="carousel-indicators">
            {games.map((game, index) => (
              <button
                key={game.id}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GameCarousel

