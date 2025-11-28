# Run Ngiri Website Locally - Instructions for Boss

## 🎯 Quick Start (No Internet Required After Setup)

This guide will help you run the Ngiri Energy Drink website on your computer.

---

## 📋 Prerequisites (One-Time Setup)

### **Step 1: Install Node.js**

1. Go to: https://nodejs.org/
2. Download the **LTS version** (left button - recommended for most users)
3. Run the installer
4. Click "Next" through all prompts (use default settings)
5. Restart your computer

**To verify installation:**
- Open Command Prompt (search "cmd" in Windows)
- Type: `node --version`
- You should see something like: `v18.x.x`

---

## 🚀 Running the Website

### **Method 1: Double-Click Script (Easiest)**

1. Navigate to the project folder: `C:\Users\q\Desktop\v16`
2. Double-click: **`START-WEBSITE.bat`** (I'll create this for you)
3. Wait 10-20 seconds for the browser to open automatically
4. Website opens at: `http://localhost:3000`

**To stop:** Close the Command Prompt window that opened

---

### **Method 2: Manual Commands**

1. Open Command Prompt or PowerShell
2. Navigate to project folder:
   ```
   cd C:\Users\q\Desktop\v16
   ```
3. Install dependencies (first time only):
   ```
   npm install
   ```
4. Start the website:
   ```
   npm run dev
   ```
5. Open browser and go to: `http://localhost:3000`

**To stop:** Press `Ctrl + C` in the command window

---

## 📂 What to Give Your Boss

### **Option A: Full Package (Recommended)**

**Zip the entire folder and send:**
```
v16.zip (Contains everything)
```

**What's included:**
- All source code
- Images
- Configuration files
- This instruction document

**Boss needs to:**
1. Install Node.js (one time)
2. Unzip the folder
3. Run the START-WEBSITE.bat file
4. Website opens in browser

---

### **Option B: Build a Standalone Version**

Create a static HTML version that works without Node.js:

**Steps:**
1. Run: `npm run build`
2. This creates a `dist` folder
3. Send just the `dist` folder
4. Boss can open `index.html` in any browser

**Limitations:** 
- Some animations may not work perfectly
- 360° viewer might be slower
- Live reload won't work

---

## 🎯 What Your Boss Will See

### **Homepage (localhost:3000/)**
- Animated hero section with floating product can
- "Double Turbo V16" branding
- V16 power features
- Call-to-action buttons

### **The Drink (/the-drink)**
- Ingredient breakdown
- Nutrition facts
- Product benefits

### **Shop (/shop)**
- **Interactive 360° product viewer** (drag to rotate!)
- 4 product pack options
- Customer testimonials

### **Experience (/experience)**
- Lifestyle gallery
- Community stats
- Sponsored events

---

## 💡 Tips for Your Boss

### **Navigation:**
- Use the top menu to switch between pages
- On mobile view (resize browser), menu becomes hamburger icon

### **Interactive Features to Try:**
1. **Home page:** Scroll down slowly to see parallax effects
2. **Shop page:** 
   - Drag the product image left/right to rotate
   - Scroll to zoom in/out
   - Click the auto-rotate button
3. **All pages:** Hover over buttons and cards for effects

### **Viewing on Mobile:**
- Open browser dev tools (F12)
- Click mobile icon (top left)
- Select a phone model from dropdown
- See mobile version

---

## 🔧 Troubleshooting

### **"Node is not recognized" error:**
- Node.js not installed or not in PATH
- Solution: Reinstall Node.js, restart computer

### **Port 3000 already in use:**
- Another app is using port 3000
- Solution: Close other apps, or use: `npm run dev -- --port 4000`

### **Images not loading:**
- Check that `public/img/` folder has all images
- Filenames: v1.jpg, v2.jpg, v3.jpg, v7.PNG, v8.PNG, v9.PNG, v10.PNG

### **Blank white screen:**
- Wait 10-15 seconds for initial load
- Check console (F12) for errors
- Try: `npm install` then `npm run dev` again

### **Animations not smooth:**
- Close other browser tabs
- Use Chrome or Firefox (better performance)
- Update graphics drivers

---

## 📊 System Requirements

**Minimum:**
- Windows 7 or later / Mac OS X / Linux
- 2GB RAM
- Any modern browser (Chrome, Firefox, Safari, Edge)
- 500MB free disk space

**Recommended:**
- Windows 10/11 / Mac OS X 10.15+
- 4GB+ RAM
- Chrome or Firefox (latest version)
- 1GB free disk space

---

## 🎓 For Non-Technical Users

### **What is "localhost"?**
- Localhost means "this computer"
- The website runs on YOUR computer only
- Nobody else can see it (it's private)
- No internet needed after setup

### **What is "npm"?**
- npm = Node Package Manager
- It installs the website's dependencies (like React, Vite, etc.)
- Think of it like installing an app's requirements

### **What is "port 3000"?**
- A port is like a channel on your computer
- Port 3000 is where the website listens for requests
- http://localhost:3000 means "website on my computer on channel 3000"

---

## 📧 Presenting to Your Boss

### **In Person:**
1. Open the website on your laptop
2. Connect to projector/screen
3. Navigate through all 4 pages
4. Demonstrate the 360° viewer on Shop page
5. Show mobile responsive design (resize browser)

### **Email:**
1. Zip the `v16` folder
2. Attach to email
3. Include this `RUN-LOCALLY.md` file
4. Include `EXECUTIVE-SUMMARY.md` for context

### **USB Drive:**
1. Copy entire `v16` folder to USB
2. Include PDF version of instructions
3. Add a README.txt with quick steps

---

## 🎯 Quick Command Reference

```bash
# First time setup
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check Node.js version
node --version

# Check npm version
npm --version
```

---

## ✅ Checklist Before Giving to Boss

- [ ] Node.js installation link provided
- [ ] START-WEBSITE.bat file created (see below)
- [ ] All images in public/img/ folder
- [ ] Tested on your machine
- [ ] Instructions document included
- [ ] Executive summary included
- [ ] Contact info provided for questions

---

## 🆘 If Boss Has Issues

**Quick Fixes:**
1. Restart computer
2. Run `npm install` again
3. Clear browser cache (Ctrl+F5)
4. Try different browser
5. Check antivirus isn't blocking Node.js

**Contact:** [Your contact information]

---

## 🎉 Success Indicators

**Boss will know it's working when:**
- Browser opens automatically to localhost:3000
- Homepage loads with animated can
- Navigation menu works
- Can drag to rotate product on Shop page
- All images load correctly
- Mobile responsive (resize browser window)

---

*Simple, clear instructions for non-technical users*  
*No jargon, step-by-step guidance*
