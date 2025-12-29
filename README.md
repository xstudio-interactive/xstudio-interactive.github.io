# ShakesBee Studio Inc. - Website

A modern, game-style website for ShakesBee Studio Inc. built with React and Vite.

## Features

- 🎮 Modern gaming aesthetic with neon accents
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- 🎨 Glassmorphism effects and smooth animations
- 📦 Portfolio showcase section
- 📧 Contact form

## Tech Stack

- React 18
- Vite 5
- CSS3 with custom properties
- Google Fonts (Orbitron, Rajdhani)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Deployment to GitHub Pages

1. Build the project:
```bash
npm run build
```

2. The `vite.config.js` is already configured with the base path `/xstudio-interactive.github.io/`

3. Deploy the `dist` folder to the `gh-pages` branch or use GitHub Actions

### Using GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Project Structure

```
/
├── public/
│   └── images/          # Static images
├── src/
│   ├── components/      # React components
│   │   └── styles/     # Component-specific styles
│   ├── styles/         # Global styles
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## Customization

### Colors

Edit `src/styles/variables.css` to customize the color scheme and theme variables.

### Content

- Portfolio items: Edit `src/components/Portfolio.jsx`
- Contact information: Edit `src/components/Contact.jsx`
- Hero content: Edit `src/components/Hero.jsx`

## License

© 2024 ShakesBee Studio Inc. All rights reserved.

