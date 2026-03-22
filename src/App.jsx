import React, { useEffect } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedGame from './components/FeaturedGame'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll('[data-reveal]'))
    const depthElements = Array.from(document.querySelectorAll('[data-depth]'))
    let rafId = null

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    const updateDepth = () => {
      depthElements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const depth = Number(element.dataset.depth || 0)
        const distance = (window.innerHeight - rect.top) * depth
        const offset = Math.max(-90, Math.min(90, distance * 0.12))
        element.style.setProperty('--parallax-offset', `${offset.toFixed(2)}px`)
      })
      rafId = null
    }

    const requestDepthUpdate = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(updateDepth)
      }
    }

    revealElements.forEach((element) => observer.observe(element))
    updateDepth()
    window.addEventListener('scroll', requestDepthUpdate, { passive: true })
    window.addEventListener('resize', requestDepthUpdate)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', requestDepthUpdate)
      window.removeEventListener('resize', requestDepthUpdate)
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId)
      }
    }
  }, [])

  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <main className="site-shell">
          <Hero />
          <FeaturedGame />
          <Portfolio />
          <Contact />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
