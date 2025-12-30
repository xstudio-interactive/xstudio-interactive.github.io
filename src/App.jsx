import React from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import GameCarousel from './components/GameCarousel'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <GameCarousel />
        <Hero />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App

