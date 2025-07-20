// Game-related types
export interface Game {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  genre: string;
  status: string;
  platforms: string[];
  featuredMedia: {
    type: 'image' | 'video';
    url: string;
    alt: string;
  };
  screenshots: string[];
  releaseDate: string;
  navigationButtons: NavigationButton[];
}

export interface NavigationButton {
  text: string;
  url: string;
  type: 'steam' | 'appstore' | 'playstore' | 'custom' | 'learn';
  icon: string;
}

export interface GamesData {
  games: Game[];
  metadata: {
    totalGames: number;
    lastUpdated: string;
    version: string;
  };
}

// Color palette types
export interface ColorPalette {
  name: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
  };
}

export interface ColorPaletteWithId extends ColorPalette {
  id: string;
}

// Typography types
export interface TypographyPreset {
  name: string;
  description: string;
  fontFamily: string;
  scale: 'systematic' | 'golden' | 'modular';
  baseSize: string;
  lineHeight: string;
}

// Theme types
export interface ThemeState {
  currentTheme: string;
  currentTypography: string;
}

export interface ThemeContextType {
  currentTheme: string;
  currentTypography: string;
  onThemeChange: (theme: string) => void;
  onTypographyChange: (typography: string) => void;
}

// Component prop types
export interface LayoutProps {
  children: React.ReactNode;
  currentTheme: string;
  currentTypography: string;
  onThemeChange: (theme: string) => void;
  onTypographyChange: (typography: string) => void;
}

export interface HeaderProps {
  currentTheme?: string;
  currentTypography?: string;
  onThemeChange?: (theme: string) => void;
  onTypographyChange?: (typography: string) => void;
  showThemePanel: boolean;
  setShowThemePanel: (show: boolean) => void;
}

export interface GameCardProps {
  game: Game;
  onClick?: () => void;
}

export interface HeroProps {
  games: Game[];
}

export interface NavigationProps {
  currentTheme: string;
  currentTypography: string;
  onThemeChange: (theme: string) => void;
  onTypographyChange: (typography: string) => void;
}

export interface GameDetailProps {
  // Will be populated by React Router
}

// Utility types
export type ColorName = 'primary' | 'secondary' | 'accent' | 'background' | 'surface' | 'text';

export interface ColorContrastResult {
  normal: boolean;
  large: boolean;
  contrast: number;
}

export interface ComplementaryColors {
  base: string;
  complementary: string;
  triadic: string[];
}

export interface PaletteCombination {
  palette: string;
  typography: string;
  description: string;
}

// Route types
export interface RouteParams {
  id: string;
}

 