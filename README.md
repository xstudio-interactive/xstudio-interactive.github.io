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

The project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup (One-time)

1. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
   - Save the settings

2. **Push your code:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin website
   ```

3. **The GitHub Action will automatically:**
   - Build your project when you push to `website` branch
   - Deploy the built files to GitHub Pages
   - Your site will be available at: `https://houchuyi.github.io/xstudio-interactive.github.io/`

### Manual Deployment (Alternative)

If you prefer to deploy manually:

1. Build the project:
```bash
npm run build
```

2. The `vite.config.js` is already configured with the base path `/xstudio-interactive.github.io/`

3. Push the `dist` folder contents to the `gh-pages` branch

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

