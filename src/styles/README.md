# CSS Styling Guide & Design System

> **Enforcing consistency for XStudio collaborators**

This guide ensures all CSS follows our established design system and maintains the gaming-focused aesthetic across the entire application.

## 📋 Table of Contents

- [Design Philosophy](#design-philosophy)
- [File Structure](#file-structure)
- [Design Tokens](#design-tokens)
- [Color System](#color-system)
- [Typography](#typography)
- [Spacing & Layout](#spacing--layout)
- [Component Styling](#component-styling)
- [CSS Modules](#css-modules)
- [Responsive Design](#responsive-design)
- [Performance Guidelines](#performance-guidelines)
- [Code Quality](#code-quality)
- [Common Patterns](#common-patterns)

## 🎮 Design Philosophy

**Gaming-First Aesthetic**: Our design prioritizes a less corporate, more gamer feel with:
- Bold, vibrant colors with neon accents
- High contrast for readability
- Smooth animations and transitions
- Modern, clean typography
- Immersive visual effects

## 📁 File Structure

```
src/styles/
├── variables.css          # Design tokens & CSS custom properties
├── color-palettes.css     # Theme color definitions
├── typography.css         # Typography system & utilities
├── global.css            # Global styles & utilities
└── README.md             # This file
```

**✅ DO**: Import styles in this order in your main CSS file:
```css
@import './variables.css';
@import './color-palettes.css';
@import './typography.css';
```

## 🎨 Design Tokens

### Using CSS Custom Properties

**✅ DO**: Always use design tokens from [variables.css](variables.css):
```css
.myComponent {
  padding: var(--space-lg);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
}
```

**❌ DON'T**: Use hardcoded values:
```css
.myComponent {
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

### Available Tokens

| Category | Tokens | Usage |
|----------|--------|-------|
| **Spacing** | `--space-xs` to `--space-4xl` | Margins, padding, gaps |
| **Typography** | `--font-size-*`, `--font-weight-*` | Text sizing and weights |
| **Colors** | `--color-*` | All color values |
| **Shadows** | `--shadow-*` | Box shadows and glows |
| **Transitions** | `--transition-*` | Animation timing |
| **Border Radius** | `--radius-*` | Corner rounding |
| **Z-Index** | `--z-*` | Layering |

## 🌈 Color System

### Theme Support

Our app supports multiple gaming themes defined in [color-palettes.css](color-palettes.css):

- **Cyberpunk** (default): Neon greens, pinks, and oranges
- **Retro**: Warm oranges, teals, and yellows
- **Minimalist**: Clean blues, oranges, and greens
- **Dark**: Purple, pink, and cyan accents

### Color Usage Guidelines

**✅ DO**: Use semantic color variables:
```css
.button {
  background-color: var(--color-primary);
  color: var(--color-background);
  border: 1px solid var(--color-border);
}
```

**❌ DON'T**: Use theme-specific colors directly:
```css
.button {
  background-color: #00ff88; /* Hardcoded cyberpunk green */
}
```

### Color Hierarchy

1. **Primary**: Main brand color, CTAs, important actions
2. **Secondary**: Supporting elements, secondary actions
3. **Accent**: Highlights, special features
4. **Surface**: Cards, panels, containers
5. **Background**: Page backgrounds
6. **Text**: Text colors with proper contrast

## 📝 Typography

### Typography Classes

Use predefined typography classes from [typography.css](typography.css):

**✅ DO**: Use semantic typography classes:
```css
.gameTitle {
  composes: heading-2 from global;
  color: var(--color-primary);
}
```

**Available Classes**:
- `heading-1` through `heading-6`: Semantic headings
- `body-large`, `body`, `body-small`: Body text variants
- `caption`: Small, muted text
- `text-link`: Interactive links

### Font Utilities

**✅ DO**: Use utility classes for quick styling:
```css
.gameCard {
  composes: font-display text-lg font-semibold from global;
}
```

## 📐 Spacing & Layout

### Spacing Scale

Use the consistent spacing scale for all margins, padding, and gaps:

```css
.container {
  padding: var(--space-lg);
  margin-bottom: var(--space-xl);
  gap: var(--space-md);
}
```

### Layout Utilities

**✅ DO**: Use utility classes from [global.css](global.css):
```css
.gameGrid {
  composes: grid grid-cols-3 gap-lg from global;
}

.gameCard {
  composes: flex flex-col from global;
}
```

## 🧩 Component Styling

### CSS Modules Pattern

**✅ DO**: Use CSS Modules for component-specific styles:

```css
/* GameCard.module.css */
.gameCard {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  transition: all var(--transition-normal);
}

.gameCard:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl), var(--shadow-primary-light);
}
```

### Component Structure

1. **Base styles**: Layout, positioning, sizing
2. **Theme integration**: Colors, shadows, borders
3. **Interactive states**: Hover, focus, active
4. **Responsive adjustments**: Mobile-first approach

### Animation Guidelines

**✅ DO**: Use consistent transitions:
```css
.interactiveElement {
  transition: all var(--transition-normal);
}

.interactiveElement:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
```

**Animation Principles**:
- Use `var(--transition-fast)` for micro-interactions
- Use `var(--transition-normal)` for standard interactions
- Use `var(--transition-slow)` for major state changes
- Keep animations under 350ms for responsiveness

## 📱 Responsive Design

### Mobile-First Approach

**✅ DO**: Start with mobile styles, then enhance for larger screens:
```css
.gameCard {
  padding: var(--space-sm);
}

@media (min-width: 768px) {
  .gameCard {
    padding: var(--space-lg);
  }
}
```

### Breakpoint Strategy

- **Mobile**: `< 768px` - Single column, compact spacing
- **Tablet**: `768px - 1024px` - Two columns, medium spacing
- **Desktop**: `> 1024px` - Multiple columns, generous spacing

### Responsive Utilities

Use responsive grid utilities:
```css
.gameGrid {
  composes: grid gap-md from global;
  grid-template-columns: repeat(1, 1fr);
}

@media (min-width: 768px) {
  .gameGrid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .gameGrid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## ⚡ Performance Guidelines

### CSS Optimization

**✅ DO**: Optimize for performance:
```css
/* Use transform instead of top/left for animations */
.animatedElement {
  transform: translateY(0);
  transition: transform var(--transition-normal);
}

.animatedElement:hover {
  transform: translateY(-8px);
}
```

**❌ DON'T**: Use expensive properties for animations:
```css
.animatedElement {
  top: 0;
  transition: top var(--transition-normal);
}

.animatedElement:hover {
  top: -8px; /* Triggers layout recalculation */
}
```

### Best Practices

1. **Use CSS custom properties** for theme switching
2. **Prefer transform/opacity** for animations
3. **Minimize layout thrashing** with proper transitions
4. **Use will-change** sparingly for complex animations

## 🔍 Code Quality

### Naming Conventions

**✅ DO**: Use BEM-like naming for CSS Modules:
```css
.gameCard { }
.gameCard__image { }
.gameCard__content { }
.gameCard--featured { }
.gameCard:hover { }
```

### CSS Organization

**✅ DO**: Organize CSS properties in this order:
```css
.myComponent {
  /* 1. Layout */
  display: flex;
  position: relative;
  
  /* 2. Sizing */
  width: 100%;
  height: auto;
  
  /* 3. Spacing */
  margin: var(--space-md);
  padding: var(--space-lg);
  
  /* 4. Visual */
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  
  /* 5. Typography */
  font-size: var(--font-size-base);
  color: var(--color-text-primary);
  
  /* 6. Interactive */
  cursor: pointer;
  transition: all var(--transition-normal);
}

.myComponent:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
```

### Comments

**✅ DO**: Add meaningful comments:
```css
/* Game card container with hover effects */
.gameCard {
  /* ... styles ... */
}

/* Gradient overlay for text readability */
.cardOverlay {
  /* ... styles ... */
}
```

## 🎯 Common Patterns

### Card Components

```css
.card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  transition: all var(--transition-normal);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary);
}
```

### Button Styles

```css
.button {
  background-color: var(--color-primary);
  color: var(--color-background);
  border: none;
  border-radius: var(--radius-md);
  padding: var(--space-sm) var(--space-lg);
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.button:hover {
  background-color: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}
```

### Loading States

```css
.loading {
  opacity: 0.6;
  pointer-events: none;
  transition: opacity var(--transition-fast);
}

.loading::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  border: 2px solid var(--color-border);
  border-top-color: var(--color-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
```

## 🚀 Getting Started

1. **Review the design tokens** in [variables.css](variables.css)
2. **Understand the color system** in [color-palettes.css](color-palettes.css)
3. **Use typography classes** from [typography.css](typography.css)
4. **Follow the component patterns** shown in existing components
5. **Test responsive behavior** across different screen sizes

## 🔧 Tools & Resources

- **CSS Custom Properties**: For theme switching and consistency
- **CSS Modules**: For component-scoped styling
- **Design Tokens**: For consistent spacing, colors, and typography
- **Mobile-First**: For responsive design approach

---

**Remember**: Consistency is key! Always use the design system tokens and follow established patterns to maintain the gaming aesthetic across the entire application. 