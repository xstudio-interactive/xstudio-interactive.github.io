import { useLocation } from 'react-router-dom';
import { Palette, X, Gamepad2, Users, Mail } from 'lucide-react';
import type { HeaderProps } from '../../types';
import GooeyNav from '../GooeyNav/GooeyNav';
import styles from './Header.module.css';

const Header: React.FC<HeaderProps> = ({ 
  showThemePanel, 
  setShowThemePanel 
}) => {
  const location = useLocation();

  const navItems = [
    { 
      label: 'Games', 
      href: '/',
      icon: <Gamepad2 size={18} />
    },
    { 
      label: 'About', 
      href: '/about',
      icon: <Users size={18} />
    },
    { 
      label: 'Contact', 
      href: '/contact',
      icon: <Mail size={18} />
    }
  ];

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          {/* Logo */}
          <div className={styles.logo}>
            <div className={styles.logoText}>
              <span className={styles.logoMain}>XStudio</span>
              <span className={styles.logoSub}>Interactive</span>
            </div>
            <div className={styles.logoGlow}></div>
          </div>

          {/* React Bits GooeyNav */}
          <div className={styles.navigation}>
            <GooeyNav
              items={navItems}
              animationTime={600}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
              initialActiveIndex={navItems.findIndex(item => 
                item.href === '/' ? location.pathname === '/' : location.pathname.startsWith(item.href)
              )}
            />
          </div>

          {/* Theme Controls */}
          <div className={styles.themeControls}>
            <button
              className={`${styles.themeButton} ${showThemePanel ? styles.active : ''}`}
              onClick={() => setShowThemePanel(!showThemePanel)}
              aria-label="Toggle theme panel"
            >
              {showThemePanel ? (
                <X size={20} />
              ) : (
                <Palette size={20} />
              )}
              <div className={styles.buttonGlow}></div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 