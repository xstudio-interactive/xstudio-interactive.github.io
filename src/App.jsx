import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import GameCarousel from './components/GameCarousel'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <GameCarousel />
      <Hero />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

