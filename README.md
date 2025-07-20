# XStudio Game Showcase

A modern, responsive game showcase landing page built with React, TypeScript, and Vite. Features a dynamic project showcase with carousel navigation, swappable color themes, and systematic typography.

## Features

- **TypeScript**: Full TypeScript support with strict type checking
- **Modern React**: Built with React 18+ and modern hooks
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Dynamic Theming**: 6 swappable color palettes with gaming aesthetics
- **Typography System**: Multiple font families and systematic scales
- **Project Showcase**: Auto-advancing carousel with featured media backgrounds
- **Game Cards**: Responsive grid layout with hover animations
- **Routing**: React Router with individual game detail pages
- **Viewport Scaling**: Fully responsive design that scales with browser window size

## Tech Stack

- **Framework**: React 18+ with TypeScript
- **Build Tool**: Vite
- **Styling**: CSS Modules with systematic design tokens
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Type Checking**: TypeScript with strict mode

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd xstudio-interactive.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production with type checking
- `npm run lint` - Run ESLint with TypeScript support
- `npm run preview` - Preview production build
- `npm run type-check` - Run TypeScript type checking only

## Project Structure

```
src/
├── components/          # React components
│   ├── game-card/      # Game card component
│   ├── hero/           # Project showcase component
│   ├── layout/         # Layout and header components
│   └── navigation/     # Navigation components
├── data/               # Game data and JSON files
├── pages/              # Page components
├── styles/             # Global styles and CSS modules
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── main.tsx           # Application entry point
```

## Design System

### Color Palettes
- **Cyberpunk**: Neon cyberpunk with high contrast
- **Retro**: Warm retro gaming colors
- **Minimalist**: Clean and modern
- **Dark**: Deep dark theme
- **Neon**: Bright neon colors
- **Sunset**: Warm sunset gradient

### Typography Scales
- **Systematic**: 1.25 ratio scale
- **Golden**: Golden ratio scale
- **Modular**: 1.5 ratio scale

### Responsive Design Features

#### Viewport-Based Scaling
- **Container Widths**: Uses `min()` functions for responsive max-widths (e.g., `min(1200px, 90vw)`)
- **Typography**: Responsive font sizes with `clamp()` functions for smooth scaling
- **Component Sizing**: All components scale proportionally with viewport size
- **Flexible Layouts**: CSS Grid and Flexbox with responsive breakpoints

#### Responsive Breakpoints
- **Desktop**: 1400px+ with optimized layouts for large screens
- **Tablet**: 768px - 1200px with adjusted grid layouts
- **Mobile**: 480px - 768px with single-column layouts
- **Small Mobile**: <480px with compact spacing and typography

#### Key Improvements
- ✅ **Full viewport scaling**: Content scales with browser window size
- ✅ **Responsive typography**: Text sizes adjust based on viewport width
- ✅ **Flexible containers**: All containers use viewport-based units
- ✅ **Better mobile experience**: Improved scaling on smaller screens
- ✅ **No horizontal overflow**: Eliminated overflow issues
- ✅ **Consistent spacing**: All spacing scales proportionally

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes with proper TypeScript types
4. Run type checking: `npm run type-check`
5. Run linting: `npm run lint`
6. Submit a pull request

## License

This project is licensed under the MIT License.
