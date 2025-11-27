# Ngiri "Double Turbo V16" Energy Drink Website

A high-energy, visually striking website for Ngiri premium energy drink with motorsport-inspired design.

## Features

- 🚀 **Bold Hero Section** - Animated product showcase with parallax effects
- ⚡ **V16 Power Section** - Feature highlights with smooth scroll animations
- 🛒 **Shop Page** - Interactive 360° product viewer with drag-to-rotate functionality
- 🎮 **Experience Gallery** - Lifestyle showcase with hover effects
- 📱 **Fully Responsive** - Optimized for all devices
- ✨ **Smooth Animations** - Powered by Framer Motion

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library
- **React Router** - Navigation
- **Lucide React** - Icon library
- **Three.js** - 3D graphics (for future enhancements)

## Design System

### Colors
- Midnight Blue (`#191970`) - Primary background
- Crimson Red (`#DC143C`) - Energy/accent color
- Electric Yellow (`#FFFF00`) - Highlight color
- Dark (`#0A0A0A`) - Base background
- Silver (`#C0C0C0`) - Secondary text

### Typography
- **Bebas Neue** - Headlines and titles
- **Montserrat** - Body text

### Effects
- Glow pulses on CTAs
- Glitch animations
- Parallax scrolling
- Smooth transitions
- Hover effects

## Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn installed

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
ngiri-energy-drink/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx       # Top navigation bar
│   │   ├── Footer.jsx           # Footer with links
│   │   ├── Hero.jsx             # Homepage hero section
│   │   ├── V16PowerSection.jsx  # Features section
│   │   └── ProductViewer3D.jsx  # 360° product viewer
│   ├── pages/
│   │   ├── Home.jsx             # Homepage
│   │   ├── TheDrink.jsx         # Product details page
│   │   ├── Shop.jsx             # Shop page
│   │   └── Experience.jsx       # Lifestyle/community page
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── img/                         # Product images
├── index.html                   # HTML template
├── package.json                 # Dependencies
├── vite.config.js              # Vite configuration
└── tailwind.config.js          # Tailwind configuration
```

## Pages

1. **Home** (`/`) - Hero section, V16 power features, CTA sections
2. **The Drink** (`/the-drink`) - Ingredients, nutrition facts, product details
3. **Shop** (`/shop`) - Product packs, 360° viewer, pricing
4. **Experience** (`/experience`) - Lifestyle gallery, community, events

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Fast page loads with Vite
- Optimized images
- Lazy loading
- Code splitting
- Smooth 60fps animations

## Future Enhancements

- [ ] Shopping cart functionality
- [ ] Payment integration
- [ ] User accounts
- [ ] Product reviews
- [ ] Blog section
- [ ] Email newsletter
- [ ] Social media integration
- [ ] Advanced 3D product viewer with Three.js

## License

© 2024 Ngiri Energy. All rights reserved.
