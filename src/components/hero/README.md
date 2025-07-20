# ProjectShowcase Component

## Overview
The ProjectShowcase component transforms the traditional hero section into an immersive project showcase with featured media backgrounds, interactive carousel navigation, and real-time progress indicators.

## Features

### 🎬 Featured Media Background
- Dynamic background images for each game with 16:9 aspect ratio
- Smooth transitions between projects with overlay effects
- Gradient overlays for optimal text readability
- Responsive background sizing (16:9 desktop, 4:3 tablet, 3:2 mobile)
- Graceful fallback to gradient backgrounds if images fail to load

### 🎠 Interactive Carousel Navigation
- **Auto-advancing carousel** with 5-second intervals and visual progress tracking
- **Manual navigation** with left/right buttons positioned on carousel sides
- **Clickable project cards** with instant selection and auto-scroll
- **Progress bar** with countdown timer showing time until next image
- **Grayscale inactive thumbnails** with color transition on hover/selection
- **Auto-scroll functionality** to keep selected thumbnail in view

### 📱 Responsive Design
- Mobile-first approach with adaptive layouts
- Touch-friendly navigation optimized for mobile devices
- Responsive thumbnail sizing (210px desktop, 180px tablet, 150px mobile)
- Optimized for various aspect ratios and screen sizes

### 🎮 Gaming-Focused Design
- Gaming aesthetics with modern UI and backdrop blur effects
- Smooth hover animations and color transitions
- Color-coded genre badges
- Data-driven navigation buttons with platform-specific styling
- Progress indicators with shimmer and pulse animations

### ⏱️ Progress Tracking
- **Visual progress bar** on active thumbnail showing advancement
- **Countdown timer** displaying remaining seconds
- **Smooth animations** with shimmer and pulse effects
- **Auto-reset** when manually navigating or clicking thumbnails

## Usage

```jsx
import ProjectShowcase from '../components/hero/Hero';

const Home = () => {
  const [games, setGames] = useState([]);
  
  useEffect(() => {
    setGames(gamesData.games);
  }, []);

  return (
    <div className="home">
      <ProjectShowcase games={games} />
      {/* Rest of the page content */}
    </div>
  );
};
```

## Data Structure

The component expects a `games` array with the following structure:

```javascript
{
  id: "game-id",
  title: "Game Title",
  shortDescription: "Brief description",
  longDescription: "Detailed description for showcase",
  genre: "RPG",
  status: "Full Release Available on Steam",
  platforms: ["PC", "PlayStation 5"],
  featuredMedia: {
    type: "image",
    url: "/images/game-hero.jpg",
    alt: "Game description"
  },
  screenshots: [
    "/images/game-1.jpg",
    "/images/game-2.jpg",
    "/images/game-3.jpg"
  ],

  releaseDate: "2024-03-15",
  navigationButtons: [
    {
      text: "Play on Steam",
      url: "https://store.steampowered.com/app/example/game",
      type: "steam",
      icon: "external-link"
    },
    {
      text: "App Store",
      url: "https://apps.apple.com/app/game/id123456789",
      type: "appstore",
      icon: "download"
    },
    {
      text: "Learn More",
      url: "/game/game-id",
      type: "learn",
      icon: "arrow-right"
    }
  ]
}
```

### Navigation Button Types
- **steam**: Steam store links with external-link icon
- **appstore**: iOS App Store links with download icon
- **playstore**: Google Play Store links with download icon
- **custom**: Custom actions (pre-order, beta, etc.) with play icon
- **learn**: Internal game detail pages with arrow-right icon

### Icon Types
- **play**: Play icon for custom actions
- **arrow-right**: Navigation to internal pages
- **external-link**: External store links
- **download**: App store downloads

## Styling

The component uses CSS Modules with the following key classes:

- `.projectShowcase`: Main container with aspect ratio control
- `.backgroundContainer`: Background media container
- `.backgroundImage`: Featured media background with transitions
- `.showcaseContent`: Main content area with project information
- `.projectInfo`: Project information display with hierarchy
- `.projectStatus`: Status area with project status badge
- `.projectTitle`: Main title with responsive sizing
- `.projectDescription`: Description text with reduced sizing
- `.projectActions`: Navigation buttons container
- `.carouselContainer`: Carousel navigation area with overlay
- `.projectCards`: Horizontal scrollable thumbnail cards
- `.projectCard`: Individual thumbnail with grayscale/color states
- `.navButton`: Navigation buttons positioned on carousel sides
- `.progressBar`: Progress indicator with animations
- `.progressFill`: Progress fill with gradient and glow effects
- `.progressTime`: Countdown timer display

## Customization

### Colors
The component uses CSS custom properties for theming:
- `--color-primary`: Primary brand color (#00ff88 cyberpunk green)
- `--color-primary-light`: Lighter primary variant
- `--color-primary-dark`: Darker primary variant
- `--color-success`: Success states
- `--color-error`: Error states

### Spacing
Uses systematic spacing scale:
- `--space-xs` to `--space-4xl` (4px to 96px)
- Responsive breakpoints for different screen sizes
- Consistent gap and padding values

### Typography
Integrates with the global typography system:
- `.heading-1` for project titles (responsive sizing)
- `.body-large` for descriptions (reduced sizing)
- `.body-small` for metadata and timers

### Button Styling
Platform-specific button styles:
- **Steam**: Dark blue gradient with Steam branding
- **App Store**: Blue gradient with iOS styling
- **Google Play**: Green gradient with Android styling
- **Custom**: Primary brand color with custom actions
- **Learn More**: Transparent with backdrop blur

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- Safari 9+ with `-webkit-backdrop-filter` prefix
- Mobile browsers with touch event support
- CSS custom properties support
- Smooth scrolling API support

## Performance

- Optimized image loading with proper sizing and fallbacks
- Smooth animations using CSS transforms and transitions
- Efficient carousel transitions with auto-scroll
- Responsive image handling with aspect ratio control
- Debounced progress updates (100ms intervals)
- Memory-efficient event handling

## Accessibility

- ARIA labels for navigation buttons and carousel controls
- Keyboard navigation support for all interactive elements
- Screen reader friendly structure with semantic HTML
- High contrast text overlays for readability
- Focus management for interactive elements
- Progress indicators for time-sensitive content
- Alternative text for all images

## Recent Updates

### v3.5 - Project Status Display
- ✅ **Custom Status Field**: Project status now displays custom strings from data
- ✅ **Status Examples**: "Full Release Available on Steam", "Early Access", "Wishlist on Steam", etc.
- ✅ **Enhanced Styling**: Glassmorphism effect with backdrop blur and subtle border
- ✅ **Better UX**: Clear project availability and status information

### v3.4 - Harmonized Typography
- ✅ **Harmonized Font Sizes**: Clean, consistent scale with 1.2 ratio progression
- ✅ **Clean Values**: Rounded to whole pixels for better consistency
- ✅ **Balanced Jumps**: More harmonious size progression (10px → 12px → 14px → 16px → 20px → 24px → 30px → 36px → 44px → 54px)
- ✅ **Improved Readability**: Better visual hierarchy with consistent spacing

### v3.3 - Simplified Design
- ✅ **Removed Star Ratings**: Cleaner interface without rating display
- ✅ **Reduced Font Sizes**: Smaller typography across the entire site
- ✅ **Streamlined Status**: Genre badge only in project status
- ✅ **Enhanced Readability**: Better text hierarchy with reduced sizes
- ✅ **Consistent Design**: Aligned with simplified GameCard component

### v3.2 - Enhanced User Experience
- ✅ **Progress Bar**: Visual progress indicator with countdown timer
- ✅ **Auto-Scroll**: Automatic scrolling to keep selected thumbnail in view
- ✅ **Grayscale Thumbnails**: Inactive thumbnails in grayscale with color on hover/selection
- ✅ **Data-Driven Navigation**: Navigation buttons defined in JSON data
- ✅ **Reduced Thumbnail Size**: 3/4 of original size for better proportions
- ✅ **Simplified Hover Effects**: Color-only transitions without scale/movement
- ✅ **Enhanced Visual Hierarchy**: Clear status, title, description, and button layout
- ✅ **Responsive Progress**: Progress bar adapts to all screen sizes
- ✅ **Smooth Animations**: Shimmer and pulse effects for progress indicators 