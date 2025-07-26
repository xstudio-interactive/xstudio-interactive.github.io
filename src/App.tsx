import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import GameDetail from './pages/GameDetail';
import Contact from './pages/Contact';
import Galaxy from './Backgrounds/Galaxy/Galaxy';
import { applyColorPalette } from './utils/colorPalettes';
import { applyTypographyPreset } from './utils/typography';
import './styles/global.css';

function App(): React.JSX.Element {
  const [currentTheme, setCurrentTheme] = useState<string>('gaming-vibrant');
  const [currentTypography, setCurrentTypography] = useState<string>('gaming-modern');

  // Initialize theme on component mount
  useEffect(() => {
    // Apply default theme
    applyColorPalette(currentTheme);
    applyTypographyPreset(currentTypography);
  }, []);

  // Theme switching function
  const switchTheme = (themeName: string): void => {
    applyColorPalette(themeName);
    setCurrentTheme(themeName);
  };

  // Typography switching function
  const switchTypography = (typographyName: string): void => {
    applyTypographyPreset(typographyName);
    setCurrentTypography(typographyName);
  };

  return (
    <Router>
      <div className="App">
        {/* Dynamic Galaxy Background */}
        <div className="background-container" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
          <Galaxy />
        </div>
        
        <Layout 
          currentTheme={currentTheme}
          currentTypography={currentTypography}
          onThemeChange={switchTheme}
          onTypographyChange={switchTypography}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game/:id" element={<GameDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App; 