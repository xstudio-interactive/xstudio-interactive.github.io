import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Get theme from localStorage or default to 'cream'
    const savedTheme = localStorage.getItem('colorTheme')
    return savedTheme || 'cream'
  })

  useEffect(() => {
    // Apply theme class to document root
    document.documentElement.classList.remove('theme-cream', 'theme-green')
    document.documentElement.classList.add(`theme-${theme}`)
    
    // Save to localStorage
    localStorage.setItem('colorTheme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'cream' ? 'green' : 'cream')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

