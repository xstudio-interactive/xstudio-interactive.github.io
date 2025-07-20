import { Link, useLocation } from 'react-router-dom';
import { Palette, Type, X } from 'lucide-react';
import styles from './Header.module.css';

const Header = ({ 
  currentTheme, 
  currentTypography, 
  showThemePanel, 
  setShowThemePanel 
}) => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Games', exact: true },
    { path: '/about', label: 'About', exact: false },
    { path: '/contact', label: 'Contact', exact: false }
  ];

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={`${styles.headerContent} flex items-center justify-between`}>
          {/* Logo */}
          <Link to="/" className={styles.logo}>
            <span className="heading-4 text-primary-brand">XStudio</span>
            <span className="body-small text-muted">Game Showcase</span>
          </Link>

          {/* Navigation */}
          <nav className={styles.navigation}>
            <ul className={`${styles.navList} flex items-center gap-lg`}>
              {navItems.map((item) => {
                const isActive = item.exact 
                  ? location.pathname === item.path
                  : location.pathname.startsWith(item.path);
                
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`${styles.navLink} ${
                        isActive ? styles.active : ''
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Theme Controls */}
          <div className={`${styles.themeControls} flex items-center gap-sm`}>
            <button
              className={`${styles.themeButton} ${showThemePanel ? styles.active : ''}`}
              onClick={() => setShowThemePanel(!showThemePanel)}
              aria-label="Toggle theme panel"
            >
              {showThemePanel ? (
                <X size={20} className="text-primary" />
              ) : (
                <Palette size={20} className="text-primary" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 