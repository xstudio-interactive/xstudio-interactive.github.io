import React, { useState, useEffect, useRef } from 'react'
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
      image: '/images/studio_icon_nobg_white.png',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const intervalRef = useRef(null)
  const dragStartRef = useRef(null)
  const slidesContainerRef = useRef(null)
  const animationRef = useRef(null)

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
    setDragOffset(0) // Reset drag offset
    startTimer() // Reset timer when manually navigating
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + games.length) % games.length)
    setDragOffset(0) // Reset drag offset
    startTimer() // Reset timer when manually navigating
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % games.length)
    setDragOffset(0) // Reset drag offset
    startTimer() // Reset timer when manually navigating
  }

  const handleDragStart = (e) => {
    // Cancel any ongoing animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
      animationRef.current = null
    }
    
    setIsDragging(true)
    setIsAnimating(false)
    dragStartRef.current = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX
    if (e.type === 'mousedown') {
      e.preventDefault()
    }
    // Pause auto-advance while dragging
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  const handleDragMove = (e) => {
    if (!isDragging || !dragStartRef.current) return
    
    const currentX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX
    const diff = currentX - dragStartRef.current
    const containerWidth = slidesContainerRef.current?.offsetWidth || 1
    
    // Always update drag offset for smooth movement
    setDragOffset(diff)
    
    // Check if we've dragged far enough to wrap to next/previous slide for infinite loop
    const threshold = containerWidth * 0.6 // 60% of container width
    
    if (Math.abs(diff) > threshold) {
      // Wrap to maintain infinite loop
      if (diff > threshold) {
        // Dragged right enough, wrap to previous
        setCurrentIndex((prevIndex) => {
          const newIndex = (prevIndex - 1 + games.length) % games.length
          if (newIndex !== prevIndex) {
            // Adjust drag start to account for the wrap
            dragStartRef.current = currentX - (diff - containerWidth)
            setDragOffset(diff - containerWidth)
            return newIndex
          }
          return prevIndex
        })
      } else if (diff < -threshold) {
        // Dragged left enough, wrap to next
        setCurrentIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % games.length
          if (newIndex !== prevIndex) {
            // Adjust drag start to account for the wrap
            dragStartRef.current = currentX - (diff + containerWidth)
            setDragOffset(diff + containerWidth)
            return newIndex
          }
          return prevIndex
        })
      }
    }
    
    if (e.type === 'mousemove') {
      e.preventDefault()
    }
  }

  const handleDragEnd = () => {
    if (!isDragging) return
    
    const containerWidth = slidesContainerRef.current?.offsetWidth || 1
    const threshold = containerWidth * 0.15 // 15% of container width to trigger slide change
    const shouldChange = Math.abs(dragOffset) > threshold
    
    setIsDragging(false)
    setIsAnimating(true)
    
    if (shouldChange) {
      // Determine target slide
      const targetIndex = dragOffset > 0
        ? (currentIndex - 1 + games.length) % games.length
        : (currentIndex + 1) % games.length
      
      // Calculate the remaining offset after index change
      // If we're moving to next slide, we need to account for the slide width
      const direction = dragOffset > 0 ? 1 : -1
      const remainingOffset = dragOffset - (direction * containerWidth)
      
      // Update index immediately
      setCurrentIndex(targetIndex)
      
      // Start animation from remaining offset to 0
      requestAnimationFrame(() => {
        const startOffset = remainingOffset
        const startTime = performance.now()
        const duration = 400 // 400ms animation
        
        const animate = (currentTime) => {
          const elapsed = currentTime - startTime
          const progress = Math.min(elapsed / duration, 1)
          
          // Ease-out function (cubic ease-out)
          const easeOut = 1 - Math.pow(1 - progress, 3)
          
          // Interpolate offset to 0
          const currentOffset = startOffset * (1 - easeOut)
          setDragOffset(currentOffset)
          
          if (progress < 1) {
            animationRef.current = requestAnimationFrame(animate)
          } else {
            // Animation complete - reset offset
            setDragOffset(0)
            setIsAnimating(false)
            dragStartRef.current = null
            startTimer()
          }
        }
        
        animationRef.current = requestAnimationFrame(animate)
      })
    } else {
      // Not enough drag - animate back to center
      const startOffset = dragOffset
      const startTime = performance.now()
      const duration = 300 // 300ms animation
      
      const animate = (currentTime) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Ease-out function (cubic ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3)
        
        // Interpolate offset back to 0
        const currentOffset = startOffset * (1 - easeOut)
        setDragOffset(currentOffset)
        
        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate)
        } else {
          // Animation complete
          setDragOffset(0)
          setIsAnimating(false)
          dragStartRef.current = null
          startTimer()
        }
      }
      
      animationRef.current = requestAnimationFrame(animate)
    }
  }

  return (
    <section id="games" className="game-carousel section">
      <div className="container">
        <div className="carousel-wrapper">
          <div className="carousel-container">
            <div 
              ref={slidesContainerRef}
              className={`carousel-slides ${isDragging ? 'dragging' : ''} ${isAnimating ? 'animating' : ''}`}
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}
            >
              <div 
                className="carousel-slides-track"
                style={{
                  transform: isDragging || isAnimating || Math.abs(dragOffset) > 0
                    ? `translateX(${-(currentIndex * 100) + (dragOffset / (slidesContainerRef.current?.offsetWidth || 1)) * 100}%)`
                    : `translateX(${-(currentIndex * 100)}%)`,
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
                        <img
                          src={game.image}
                          alt={game.title}
                          className="slide-image"
                          draggable="false"
                        />
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

