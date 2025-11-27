# 🚀 Deploy Ngiri Website to Vercel

Your project is now configured for Vercel deployment! Choose your preferred method:

---

## ⚡ METHOD 1: One-Click Deploy (Easiest)

### Step 1: Sign Up/Login to Vercel
Go to [vercel.com](https://vercel.com) and sign up with GitHub, GitLab, or Bitbucket (free!)

### Step 2: Import Project
1. Click **"Add New Project"**
2. Choose **"Import Git Repository"** OR upload this folder directly
3. Vercel will auto-detect it's a Vite project
4. Click **"Deploy"**

**That's it!** You'll get a live URL like:
```
https://ngiri-energy-drink.vercel.app
```

---

## 💻 METHOD 2: Deploy via Command Line

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```
(Opens browser to authenticate)

### Step 3: Deploy
From your project folder, run:
```bash
vercel
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Select your account
- **Link to existing project?** → No
- **Project name?** → ngiri-energy-drink (or your choice)
- **Directory?** → ./ (press Enter)
- **Override settings?** → No

**First deployment:**
```bash
vercel
```

**Production deployment:**
```bash
vercel --prod
```

---

## 🎯 METHOD 3: GitHub Auto-Deploy (Best for Updates)

### Step 1: Push to GitHub
```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial Ngiri website"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR-USERNAME/ngiri-energy-drink.git
git push -u origin main
```

### Step 2: Connect to Vercel
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel auto-detects settings
5. Click **"Deploy"**

**Now every push to GitHub auto-deploys!** 🎉

---

## ⚙️ Configuration Details

Your project is configured with:

**Build Settings:**
- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`
- Node Version: 18.x (default)

**Routing:**
- SPA routing configured (all routes redirect to index.html)
- No 404 errors on page refresh

---

## 🌐 Custom Domain (Optional)

After deployment, you can add a custom domain:

1. Go to your project on Vercel
2. Click **"Settings"** → **"Domains"**
3. Add your domain: `ngiri.com` or `www.ngiri.com`
4. Follow DNS configuration instructions

Vercel provides:
- Free SSL certificates
- Automatic HTTPS
- Global CDN
- DDoS protection

---

## 📊 What Happens During Deployment

1. **Build Phase:**
   - Installs dependencies (`npm install`)
   - Runs build (`npm run build`)
   - Optimizes assets
   - Creates production bundle

2. **Deploy Phase:**
   - Uploads to Vercel's global CDN
   - Configures routing
   - Enables HTTPS
   - Generates preview URL

3. **Result:**
   - Lightning-fast global delivery
   - Automatic image optimization
   - Edge caching
   - Analytics included

**Build Time:** ~1-2 minutes  
**Deploy Time:** ~30 seconds

---

## 🔄 Making Updates

### If using CLI:
```bash
# Make your changes, then:
vercel --prod
```

### If using GitHub:
```bash
git add .
git commit -m "Update message"
git push
```
Auto-deploys in ~2 minutes!

---

## 📱 Preview Deployments

Every `vercel` command (without --prod) creates a preview:
- Get unique URL for testing
- Share with team/clients
- Perfect for staging

Production deployment:
```bash
vercel --prod
```

---

## 🎯 Environment Variables (If Needed Later)

For API keys, secrets, etc:

**Via CLI:**
```bash
vercel env add VARIABLE_NAME
```

**Via Dashboard:**
1. Project Settings → Environment Variables
2. Add key-value pairs
3. Redeploy

---

## 📊 After Deployment

You'll have access to:
- **Analytics** - Page views, visitors, performance
- **Speed Insights** - Core Web Vitals scores
- **Logs** - Real-time function logs
- **Deployments** - History and rollbacks

---

## ✅ Checklist

- [x] `vercel.json` configured
- [x] `.vercelignore` created
- [x] SPA routing enabled
- [x] Build settings optimized
- [ ] Choose deployment method above
- [ ] Deploy and get your live URL!
- [ ] (Optional) Add custom domain
- [ ] (Optional) Set up GitHub auto-deploy

---

## 🆘 Troubleshooting

**Build fails?**
- Check Node version: `node --version` (should be 16+)
- Clear cache: `vercel --force`

**Routes not working?**
- `vercel.json` rewrites are configured (already done!)

**Images not loading?**
- Ensure `img/` folder is included in deployment
- Check file paths are relative

**Need help?**
- Vercel docs: [vercel.com/docs](https://vercel.com/docs)
- Check build logs in Vercel dashboard

---

## 🎉 Next Steps After Deployment

1. **Test the live site** - Check all pages and features
2. **Share the URL** - Send to friends, clients, social media
3. **Monitor analytics** - See how people use your site
4. **Add custom domain** - Make it professional
5. **Set up GitHub deploy** - Easy updates

---

**Ready to deploy?** Choose a method above and you'll have a live URL in minutes! 🚀

**Need help with the deployment?** Let me know which method you want to use and I can guide you through it step-by-step!
