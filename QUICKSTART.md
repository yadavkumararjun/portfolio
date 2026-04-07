# Quick Start Guide - Arjun Kumar Yadav's Portfolio

## 🎯 Project Overview

This is a professional, modern e-portfolio website built with:
- **React 18** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Lightning-fast build tool
- **GitHub Pages** - Free hosting
- **GitHub Actions** - Automated deployment

## ⚡ Quick Setup

### Prerequisites
- Node.js 18 or higher
- npm or yarn
- Git account (for deployment)

### 1. Clone and Install

```bash
cd portfolio
npm install
```

### 2. Local Development

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### 3. Build for Production

```bash
npm run build
npm run preview
```

## 🚀 Deployment to GitHub Pages

### One-Time Setup

1. **Ensure GitHub repo exists**: The portfolio should be in `https://github.com/yadavkumararjun/portfolio`

2. **Enable GitHub Pages** (if needed):
   - Go to Settings > Pages
   - Select "GitHub Actions" as source
   - (Our workflow file handles this automatically)

3. **First Deployment**:
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

4. **Check Deployment**:
   - Go to repository > Actions tab
   - Watch the "Deploy Portfolio to GitHub Pages" workflow
   - Once complete, visit `https://yadavkumararjun.github.io/portfolio`

### Automatic Deployment

After the first setup, every push to `main` branch automatically:
1. Runs tests and type checking
2. Builds the project
3. Deploys to GitHub Pages

## 📋 File Structure Overview

```
portfolio/
├── src/
│   ├── components/     # React components (Navbar, Hero, About, etc.)
│   ├── styles/         # CSS files for each component
│   ├── App.tsx         # Main component
│   └── main.tsx        # Entry point
├── index.html          # HTML template
├── package.json        # Dependencies
├── vite.config.ts      # Build configuration
├── tsconfig.json       # TypeScript config
├── .github/workflows/  # GitHub Actions workflows
└── README.md           # Documentation
```

## 🎨 Customization

### Update Your Information

Edit these files to add your personal info:

1. **Hero Section** (`src/components/Hero.tsx`):
   - Name, title, description
   - Social links

2. **About Section** (`src/components/About.tsx`):
   - Personal biography
   - Contact details
   - Links

3. **Skills Section** (`src/components/Skills.tsx`):
   - Add/remove skills
   - Update proficiency levels

4. **Projects Section** (`src/components/Projects.tsx`):
   - Add your own projects
   - Update descriptions and links

5. **Contact Section** (`src/components/Contact.tsx`):
   - Email, phone, location
   - Social profiles

### Change Colors

Edit `src/styles/index.css`:

```css
:root {
  --primary: #0066ff;      /* Main color */
  --secondary: #00d4ff;    /* Accent color */
  --accent: #ff006e;       /* Highlight color */
  /* ... */
}
```

## 🧪 Available Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Check code quality |
| `npm run type-check` | Run TypeScript checks |

## 📱 Responsive Design

The portfolio is optimized for:
- **Desktop** (1200px+)
- **Tablet** (768px - 1024px)
- **Mobile** (320px - 768px)

Test responsiveness:
1. Run `npm run dev`
2. Open browser DevTools (F12)
3. Toggle device simulation

## 🔐 GitHub Actions Setup

The deployment workflow (`.github/workflows/deploy.yml`):

1. ✅ Checks out code
2. ✅ Sets up Node.js environment
3. ✅ Installs dependencies
4. ✅ Runs type checking
5. ✅ Builds the project
6. ✅ Deploys to GitHub Pages

No additional secrets or tokens needed!

## 🐛 Troubleshooting

### Build Error
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Deploy Failed in GitHub Actions
1. Check Actions tab for error messages
2. Verify branch is named `main` or `master`
3. Check GitHub Pages settings

### Site shows 404
1. Wait 2-3 minutes for deployment
2. Clear browser cache
3. Verify site URL: `https://yadavkumararjun.github.io/portfolio`

### Styles not loading
1. Check that CSS files are properly imported
2. Verify no typos in file names
3. Clear browser cache

## 📚 Additional Resources

- **Vite Docs**: https://vitejs.dev
- **React Docs**: https://react.dev
- **TypeScript Docs**: https://www.typescriptlang.org
- **GitHub Pages**: https://pages.github.com

## 🎉 You're Ready!

Your portfolio is all set up and ready to go live. Just push to GitHub and watch the magic happen! ✨

---

**Need help?** Check:
- `README.md` - Project overview
- `DEPLOYMENT.md` - Detailed deployment guide
- `DEVELOPMENT.md` - Development workflow
