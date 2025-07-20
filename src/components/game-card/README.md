# GameCard Component

## Overview
The GameCard component displays individual game information in a card format with hover animations and interactive elements. It's designed to showcase games in a grid layout with a gaming-focused aesthetic.

## Component Specifications

### Props
```jsx
<GameCard game={gameObject} />
```

### Game Object Structure
```javascript
{
  id: string,
  title: string,
  shortDescription: string,
  genre: string,
  platforms: string[]
}
```

### Required Fields
- **title**: Game title displayed as heading
- **shortDescription**: Short description of the game
- **genre**: Game genre/category
- **platforms**: Array of platform names (PC, PS5, Xbox, etc.)

## Visual Design

### Card Structure
1. **Image Section**: Full-height placeholder with gradient background
2. **Content Overlay**: Hidden by default, slides up from bottom on hover
3. **Metadata Grid**: Genre and platforms in a responsive layout

### Styling Features
- **Hover Effects**: Card lifts up with shadow and border color change
- **Gradient Border**: Animated top border on hover
- **Content Animation**: Content slides up from bottom with fade-in effect
- **16:9 Aspect Ratio**: Consistent card proportions across all screen sizes
- **Full-Height Image**: Image extends to fill entire card
- **Responsive**: Adapts to different screen sizes

### Color System
- Uses CSS custom properties for theme consistency
- Supports swappable color palettes
- Gaming-focused aesthetic with vibrant accents

## Interactions

### Hover States
1. **Card Hover**: 
   - Translates up by 8px (4px on mobile)
   - Adds enhanced shadow
   - Changes border color to primary
   - Animates top gradient border

2. **Content Animation**:
   - Content slides up from bottom (translateY: 100% → 0)
   - Semi-transparent gradient background appears
   - Smooth fade-in transition



### Click Actions
- **No direct actions**: Component is display-only
- **Navigation**: Can be wrapped in Link component for routing

## Responsive Behavior

### Desktop (768px+)
- 16:9 aspect ratio maintained
- 2-column metadata grid in overlay
- Maximum hover translation (8px)

### Tablet (480px - 768px)
- 16:9 aspect ratio maintained
- Single-column metadata layout in overlay
- Reduced padding in content overlay

### Mobile (<480px)
- 16:9 aspect ratio maintained
- Minimal padding in content overlay
- Reduced hover translation (4px)

## CSS Classes

### Main Container
- `.gameCard`: Main card container with hover effects

### Image Section
- `.cardImage`: Full-height image container with placeholder (16:9 ratio)
- `.imagePlaceholder`: Gradient background

### Content Section
- `.cardContent`: Overlay content area (slides up from bottom)
- `.cardHeader`: Title section
- `.cardMeta`: Metadata grid container
- `.metaItem`: Individual metadata item

### Platform Display
- `.platforms`: Platform tags container
- `.platform`: Individual platform tag
- `.platformMore`: "+X more" indicator

## Usage Examples

### Basic Usage
```jsx
import GameCard from './components/game-card/GameCard';

const game = {
  id: "game-1",
  title: "Cyberpunk Adventure",
  shortDescription: "A thrilling cyberpunk RPG experience",
  genre: "RPG",
  platforms: ["PC", "PS5", "Xbox Series X"]
};

<GameCard game={game} />
```

### With Wrapper for Navigation
```jsx
import { Link } from 'react-router-dom';

<Link to={`/game/${game.id}`} style={{ textDecoration: 'none' }}>
  <GameCard game={game} />
</Link>
```

## Accessibility

### Keyboard Navigation
- All interactive elements are keyboard accessible
- Focus states are clearly visible
- Proper ARIA labels for screen readers

### Screen Reader Support
- Semantic HTML structure
- Descriptive alt text for icons
- Clear content hierarchy

## Performance Considerations

### Optimizations
- CSS transitions for smooth animations
- Efficient hover state management
- Minimal DOM manipulation

### Bundle Size
- CSS Modules for scoped styling
- No external dependencies beyond React Router

## Data Structure

### Clean Game Data
The component expects a simplified game object structure that matches the cleaned up `games.json`:

```javascript
{
  "games": [
    {
      "id": "cyber-quest",
      "title": "Cyber Quest 2077",
      "shortDescription": "Immersive cyberpunk RPG in a neon dystopia",
      "genre": "RPG",
      "platforms": ["PC", "PlayStation 5", "Xbox Series X"]
    }
  ]
}
```

### Removed Fields
The following fields have been removed from the data structure:
- `description` (long description)
- `image` and `screenshots`
- `releaseDate` and `status`
- `rating` and `playTime`
- `features` and `tags`
- `links` (external store links)

## Future Enhancements

### Planned Features
- Image loading states
- Lazy loading for large grids
- Custom image support
- Additional platform links

### Potential Improvements
- Animation performance optimization
- Enhanced accessibility features
- Custom theme support
- Analytics tracking

---

*Last Updated: December 19, 2024*
*Version: 2.4* 