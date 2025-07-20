// Typography utility functions

export const fontFamilies = {
  system: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  mono: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
  display: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  gaming: '"Orbitron", "Audiowide", "Russo One", sans-serif',
  retro: '"Press Start 2P", "VT323", "Courier New", monospace',
  modern: '"Poppins", "Roboto", sans-serif'
};

export const typographyScales = {
  // Systematic scale (1.25 ratio)
  systematic: {
    xs: '0.64rem',    // 10.24px
    sm: '0.8rem',     // 12.8px
    base: '1rem',     // 16px
    lg: '1.25rem',    // 20px
    xl: '1.563rem',   // 25px
    '2xl': '1.953rem', // 31.25px
    '3xl': '2.441rem', // 39.06px
    '4xl': '3.052rem', // 48.83px
    '5xl': '3.815rem', // 61.04px
    '6xl': '4.768rem'  // 76.29px
  },
  // Golden ratio scale
  golden: {
    xs: '0.618rem',   // 9.89px
    sm: '0.764rem',   // 12.22px
    base: '1rem',     // 16px
    lg: '1.618rem',   // 25.89px
    xl: '2.618rem',   // 41.89px
    '2xl': '4.236rem', // 67.78px
    '3xl': '6.854rem', // 109.66px
    '4xl': '11.09rem', // 177.44px
    '5xl': '17.944rem', // 287.1px
    '6xl': '29.034rem'  // 464.54px
  },
  // Modular scale (1.5 ratio)
  modular: {
    xs: '0.667rem',   // 10.67px
    sm: '0.889rem',   // 14.22px
    base: '1rem',     // 16px
    lg: '1.5rem',     // 24px
    xl: '2.25rem',    // 36px
    '2xl': '3.375rem', // 54px
    '3xl': '5.063rem', // 81px
    '4xl': '7.594rem', // 121.5px
    '5xl': '11.391rem', // 182.25px
    '6xl': '17.086rem'  // 273.38px
  }
};

export const fontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800
};

export const lineHeights = {
  tight: 1.2,
  normal: 1.5,
  relaxed: 1.75
};

export const letterSpacing = {
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em'
};

// Function to apply typography theme
export const applyTypographyTheme = (fontFamily, scale) => {
  const root = document.documentElement;
  
  // Apply font family
  if (fontFamilies[fontFamily]) {
    root.style.setProperty('--font-family-primary', fontFamilies[fontFamily]);
  }
  
  // Apply typography scale
  if (typographyScales[scale]) {
    Object.entries(typographyScales[scale]).forEach(([size, value]) => {
      root.style.setProperty(`--font-size-${size}`, value);
    });
  }
};

// Function to get current typography settings
export const getCurrentTypography = () => {
  const root = document.documentElement;
  return {
    fontFamily: root.style.getPropertyValue('--font-family-primary') || fontFamilies.system,
    fontSize: root.style.getPropertyValue('--font-size-base') || '1rem'
  };
};

// Function to reset typography to defaults
export const resetTypography = () => {
  const root = document.documentElement;
  root.style.removeProperty('--font-family-primary');
  Object.keys(typographyScales.systematic).forEach(size => {
    root.style.removeProperty(`--font-size-${size}`);
  });
};

// Predefined typography combinations
export const typographyPresets = {
  'gaming-cyberpunk': {
    fontFamily: 'gaming',
    scale: 'systematic',
    description: 'Futuristic gaming aesthetic'
  },
  'retro-pixel': {
    fontFamily: 'retro',
    scale: 'modular',
    description: 'Classic retro gaming feel'
  },
  'modern-clean': {
    fontFamily: 'modern',
    scale: 'golden',
    description: 'Clean, modern typography'
  },
  'system-default': {
    fontFamily: 'system',
    scale: 'systematic',
    description: 'System default typography'
  }
};

// Function to apply typography preset
export const applyTypographyPreset = (presetName) => {
  const preset = typographyPresets[presetName];
  if (preset) {
    applyTypographyTheme(preset.fontFamily, preset.scale);
    return preset;
  }
  return null;
}; 