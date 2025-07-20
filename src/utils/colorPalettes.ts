import type { ColorPalette, ColorPaletteWithId, ColorName, ColorContrastResult, ComplementaryColors, PaletteCombination } from '../types';

// Color palette utility functions

export const colorPalettes: Record<string, ColorPalette> = {
  cyberpunk: {
    name: 'Cyberpunk',
    description: 'Neon cyberpunk with high contrast',
    colors: {
      primary: '#00ff88',
      secondary: '#ff0080',
      accent: '#ffaa00',
      background: '#0a0a0a',
      surface: '#1a1a1a',
      text: '#ffffff'
    }
  },
  retro: {
    name: 'Retro',
    description: 'Warm retro gaming colors',
    colors: {
      primary: '#ff6b35',
      secondary: '#4ecdc4',
      accent: '#ffe66d',
      background: '#2c3e50',
      surface: '#34495e',
      text: '#ecf0f1'
    }
  },
  minimalist: {
    name: 'Minimalist',
    description: 'Clean and modern',
    colors: {
      primary: '#6366f1',
      secondary: '#f59e0b',
      accent: '#10b981',
      background: '#ffffff',
      surface: '#f8fafc',
      text: '#0f172a'
    }
  },
  dark: {
    name: 'Dark',
    description: 'Deep dark theme',
    colors: {
      primary: '#8b5cf6',
      secondary: '#f43f5e',
      accent: '#06b6d4',
      background: '#0f0f23',
      surface: '#1a1a2e',
      text: '#ffffff'
    }
  },
  neon: {
    name: 'Neon',
    description: 'Bright neon colors',
    colors: {
      primary: '#ff00ff',
      secondary: '#00ffff',
      accent: '#ffff00',
      background: '#000000',
      surface: '#111111',
      text: '#ffffff'
    }
  },
  sunset: {
    name: 'Sunset',
    description: 'Warm sunset gradient',
    colors: {
      primary: '#ff6b6b',
      secondary: '#4ecdc4',
      accent: '#ffe66d',
      background: '#2c3e50',
      surface: '#34495e',
      text: '#ecf0f1'
    }
  },
  // Example of how to add a new palette
  forest: {
    name: 'Forest',
    description: 'Nature-inspired green theme',
    colors: {
      primary: '#22c55e',
      secondary: '#84cc16',
      accent: '#fbbf24',
      background: '#0f172a',
      surface: '#1e293b',
      text: '#f8fafc'
    }
  }
};

// Function to apply color palette
export const applyColorPalette = (paletteName: string): boolean => {
  const palette = colorPalettes[paletteName];
  if (!palette) return false;

  const root = document.documentElement;
  
  // Set the theme attribute for CSS targeting
  root.setAttribute('data-theme', paletteName);
  
  // Apply colors as CSS custom properties
  Object.entries(palette.colors).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value);
  });
  
  // Apply additional theme-specific colors based on the palette
  if (paletteName === 'cyberpunk') {
    root.style.setProperty('--color-primary-dark', '#00cc6a');
    root.style.setProperty('--color-primary-light', '#66ffaa');
    root.style.setProperty('--color-secondary-dark', '#cc0066');
    root.style.setProperty('--color-secondary-light', '#ff66b3');
    root.style.setProperty('--color-accent-dark', '#cc8800');
    root.style.setProperty('--color-accent-light', '#ffcc66');
    root.style.setProperty('--color-surface-light', '#2a2a2a');
    root.style.setProperty('--color-text-secondary', '#cccccc');
    root.style.setProperty('--color-text-muted', '#888888');
    root.style.setProperty('--color-border', '#333333');
    root.style.setProperty('--color-border-light', '#444444');
  } else if (paletteName === 'retro') {
    root.style.setProperty('--color-primary-dark', '#e55a2b');
    root.style.setProperty('--color-primary-light', '#ff8f66');
    root.style.setProperty('--color-secondary-dark', '#3db8b0');
    root.style.setProperty('--color-secondary-light', '#7dd8d2');
    root.style.setProperty('--color-accent-dark', '#e6cf5a');
    root.style.setProperty('--color-accent-light', '#ffed99');
    root.style.setProperty('--color-surface-light', '#4a5f7a');
    root.style.setProperty('--color-text-secondary', '#bdc3c7');
    root.style.setProperty('--color-text-muted', '#95a5a6');
    root.style.setProperty('--color-border', '#34495e');
    root.style.setProperty('--color-border-light', '#4a5f7a');
  } else if (paletteName === 'minimalist') {
    root.style.setProperty('--color-primary-dark', '#4f46e5');
    root.style.setProperty('--color-primary-light', '#818cf8');
    root.style.setProperty('--color-secondary-dark', '#d97706');
    root.style.setProperty('--color-secondary-light', '#fbbf24');
    root.style.setProperty('--color-accent-dark', '#059669');
    root.style.setProperty('--color-accent-light', '#34d399');
    root.style.setProperty('--color-surface-light', '#f1f5f9');
    root.style.setProperty('--color-text-secondary', '#475569');
    root.style.setProperty('--color-text-muted', '#64748b');
    root.style.setProperty('--color-border', '#e2e8f0');
    root.style.setProperty('--color-border-light', '#f1f5f9');
  } else if (paletteName === 'dark') {
    root.style.setProperty('--color-primary-dark', '#7c3aed');
    root.style.setProperty('--color-primary-light', '#a78bfa');
    root.style.setProperty('--color-secondary-dark', '#e11d48');
    root.style.setProperty('--color-secondary-light', '#fb7185');
    root.style.setProperty('--color-accent-dark', '#0891b2');
    root.style.setProperty('--color-accent-light', '#22d3ee');
    root.style.setProperty('--color-surface-light', '#16213e');
    root.style.setProperty('--color-text-secondary', '#cbd5e1');
    root.style.setProperty('--color-text-muted', '#64748b');
    root.style.setProperty('--color-border', '#334155');
    root.style.setProperty('--color-border-light', '#475569');
  }
  
  return true;
};

// Function to get current color palette
export const getCurrentColorPalette = (): ColorPalette => {
  const root = document.documentElement;
  const currentTheme = root.getAttribute('data-theme') || 'cyberpunk';
  return colorPalettes[currentTheme] || colorPalettes.cyberpunk;
};

// Function to reset color palette to default
export const resetColorPalette = (): void => {
  const root = document.documentElement;
  root.removeAttribute('data-theme');
  
  // Remove custom color properties
  Object.keys(colorPalettes.cyberpunk.colors).forEach(key => {
    root.style.removeProperty(`--color-${key}`);
  });
};

// Function to create custom color palette
export const createCustomPalette = (name: string, colors: Partial<ColorPalette['colors']>): ColorPalette => {
  const customPalette: ColorPalette = {
    name,
    description: 'Custom color palette',
    colors: {
      primary: colors.primary || '#00ff88',
      secondary: colors.secondary || '#ff0080',
      accent: colors.accent || '#ffaa00',
      background: colors.background || '#0a0a0a',
      surface: colors.surface || '#1a1a1a',
      text: colors.text || '#ffffff'
    }
  };
  
  // Add to available palettes
  colorPalettes[name.toLowerCase()] = customPalette;
  
  return customPalette;
};

// Function to get all available palettes
export const getAvailablePalettes = (): ColorPaletteWithId[] => {
  return Object.keys(colorPalettes).map(key => ({
    id: key,
    ...colorPalettes[key]
  }));
};

// Function to validate color palette
export const validateColorPalette = (colors: Partial<ColorPalette['colors']>): boolean => {
  const requiredColors: ColorName[] = ['primary', 'secondary', 'accent', 'background', 'surface', 'text'];
  const missingColors = requiredColors.filter(color => !colors[color]);
  
  if (missingColors.length > 0) {
    throw new Error(`Missing required colors: ${missingColors.join(', ')}`);
  }
  
  return true;
};

// Function to generate complementary colors
export const generateComplementaryColors = (baseColor: string): ComplementaryColors => {
  // Simple complementary color generation
  const hex = baseColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  const complementary = `#${(255 - r).toString(16).padStart(2, '0')}${(255 - g).toString(16).padStart(2, '0')}${(255 - b).toString(16).padStart(2, '0')}`;
  
  return {
    base: baseColor,
    complementary,
    triadic: [
      baseColor,
      `#${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}${r.toString(16).padStart(2, '0')}`,
      `#${b.toString(16).padStart(2, '0')}${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}`
    ]
  };
};

// Function to check color contrast for accessibility
export const getColorContrast = (color1: string, color2: string): number => {
  const getLuminance = (color: string): number => {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16) / 255;
    const g = parseInt(hex.substr(2, 2), 16) / 255;
    const b = parseInt(hex.substr(4, 2), 16) / 255;
    
    const [rs, gs, bs] = [r, g, b].map(c => {
      if (c <= 0.03928) return c / 12.92;
      return Math.pow((c + 0.055) / 1.055, 2.4);
    });
    
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };
  
  const l1 = getLuminance(color1);
  const l2 = getLuminance(color2);
  
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  
  return (lighter + 0.05) / (darker + 0.05);
};

// Function to check if color combination meets accessibility standards
export const isAccessible = (color1: string, color2: string, level: 'AA' | 'AAA' = 'AA'): ColorContrastResult => {
  const contrast = getColorContrast(color1, color2);
  const thresholds = {
    'AA': { normal: 4.5, large: 3 },
    'AAA': { normal: 7, large: 4.5 }
  };
  
  return {
    normal: contrast >= thresholds[level].normal,
    large: contrast >= thresholds[level].large,
    contrast: Math.round(contrast * 100) / 100
  };
};

// Predefined palette combinations
export const paletteCombinations: Record<string, PaletteCombination> = {
  'cyberpunk-gaming': {
    palette: 'cyberpunk',
    typography: 'gaming-cyberpunk',
    description: 'Futuristic cyberpunk gaming aesthetic'
  },
  'retro-classic': {
    palette: 'retro',
    typography: 'retro-pixel',
    description: 'Classic retro gaming feel'
  },
  'modern-clean': {
    palette: 'minimalist',
    typography: 'modern-clean',
    description: 'Clean and modern design'
  },
  'dark-futuristic': {
    palette: 'dark',
    typography: 'gaming-cyberpunk',
    description: 'Dark futuristic theme'
  }
}; 