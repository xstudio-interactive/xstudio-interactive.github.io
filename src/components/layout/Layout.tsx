import { useState } from 'react';
import Header from './Header';
import { getAvailablePalettes } from '../../utils/colorPalettes';
import { typographyPresets } from '../../utils/typography';
import type { LayoutProps } from '../../types';
import styles from './Layout.module.css';

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  currentTheme, 
  currentTypography, 
  onThemeChange, 
  onTypographyChange 
}) => {
  const [showThemePanel, setShowThemePanel] = useState<boolean>(false);
  const availablePalettes = getAvailablePalettes();
  const availableTypography = Object.keys(typographyPresets);

  return (
    <div className={styles.layout}>
      <Header 
        currentTheme={currentTheme}
        currentTypography={currentTypography}
        onThemeChange={onThemeChange}
        onTypographyChange={onTypographyChange}
        showThemePanel={showThemePanel}
        setShowThemePanel={setShowThemePanel}
      />
      
      <main className={styles.main}>
        {children}
      </main>
      
      {/* Theme Control Panel */}
      {showThemePanel && (
        <div className={styles.themePanel}>
          <div className={styles.themePanelContent}>
            <div className={styles.themeSection}>
              <h3 className={styles.sectionTitle}>🎨 Color Themes</h3>
              <div className={styles.themeGrid}>
                {availablePalettes.map((palette) => (
                  <button
                    key={palette.id}
                    className={`${styles.themeButton} ${
                      currentTheme === palette.id ? styles.active : ''
                    }`}
                    onClick={() => onThemeChange(palette.id)}
                    style={{
                      '--theme-primary': palette.colors.primary,
                      '--theme-secondary': palette.colors.secondary,
                      '--theme-accent': palette.colors.accent
                    } as React.CSSProperties}
                  >
                    <div className={styles.themePreview}>
                      <div 
                        className={styles.colorSwatch} 
                        style={{ backgroundColor: palette.colors.primary }}
                      />
                      <div 
                        className={styles.colorSwatch} 
                        style={{ backgroundColor: palette.colors.secondary }}
                      />
                      <div 
                        className={styles.colorSwatch} 
                        style={{ backgroundColor: palette.colors.accent }}
                      />
                    </div>
                    <span className={styles.themeName}>{palette.name}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className={styles.themeSection}>
              <h3 className={styles.sectionTitle}>📝 Typography</h3>
              <div className={styles.typographyGrid}>
                {availableTypography.map((typography) => (
                  <button
                    key={typography}
                    className={`${styles.typographyButton} ${
                      currentTypography === typography ? styles.active : ''
                    }`}
                    onClick={() => onTypographyChange(typography)}
                  >
                    <span className={styles.typographyName}>
                      {typographyPresets[typography].description}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout; 