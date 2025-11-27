# How to Preview the Ngiri Energy Drink Website

## Quick Start Guide

### Step 1: Install Dependencies
Open PowerShell/Terminal in this folder and run:
```bash
npm install
```

This will install all the required packages (React, Vite, Tailwind CSS, Framer Motion, etc.)

### Step 2: Start the Development Server
Once installation is complete, run:
```bash
npm run dev
```

### Step 3: Open in Browser
The terminal will show you a URL, typically:
- Local: `http://localhost:3000`
- Network: `http://192.168.x.x:3000`

Open the local URL in your browser and the website will load!

### What You'll See:
- **Homepage** - Hero section with animated can, V16 power features, stats
- **The Drink** - Detailed ingredients, nutrition facts
- **Shop** - Interactive 360° product viewer (drag to rotate, scroll to zoom), product packs
- **Experience** - Lifestyle gallery, community stats, events

### Controls:
- Navigate using the top menu
- On the Shop page, drag the product to rotate it 360°
- Scroll to zoom in/out on the 360° viewer
- Click the auto-rotate button for automatic rotation
- All animations are smooth and responsive

### Troubleshooting:

**If npm install fails:**
- Make sure you have Node.js 16+ installed
- Try: `npm install --force`

**If port 3000 is busy:**
- Vite will automatically use port 3001, 3002, etc.
- Or specify a port: `npm run dev -- --port 4000`

**If images don't load:**
- Make sure the `img/` folder is in the project root
- Images should be: web1.PNG through web7.PNG

### Production Build:
To create an optimized build for deployment:
```bash
npm run build
```

Then preview it:
```bash
npm run preview
```

## Features Showcase:

### 🎨 Design System
- Bold motorsport-inspired aesthetics
- Midnight Blue, Crimson Red, Electric Yellow color scheme
- Bebas Neue headlines + Montserrat body text
- Smooth animations and transitions

### ⚡ Key Features
- Parallax scrolling effects
- 360° interactive product viewer
- Responsive mobile design
- Smooth page transitions
- Glowing text effects
- Animated product showcases

### 📱 Pages
1. **Home** - Hero, V16 features, CTA sections, stats
2. **The Drink** - Ingredients breakdown, nutrition facts
3. **Shop** - 360° viewer, product selection, testimonials
4. **Experience** - Lifestyle gallery, community, events

Enjoy exploring the Ngiri website! 🚀
