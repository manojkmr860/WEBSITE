# VeeduWay Website Deployment Guide

## 🚀 GitHub Actions Automatic Deployment

This project is configured with GitHub Actions to automatically build and deploy to GitHub Pages whenever you push to the `main` branch.

### How It Works

1. **Automatic Trigger**: When you push code to `main`, the workflow automatically:
   - Installs dependencies
   - Builds the production bundle
   - Deploys to GitHub Pages

2. **Workflow File**: `.github/workflows/deploy.yml`

3. **Deployment**: The built files are automatically deployed to GitHub Pages

### Setting Up GitHub Pages

1. Go to your repository: `https://github.com/veeduway-svg/WEBSITE`
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select:
   - **Source**: `GitHub Actions`
4. Save the settings

### Environment Variables (Optional)

For full functionality, set these in GitHub repository secrets:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Add the following secrets (if you have them):

   - `VITE_SUPABASE_URL` - Your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY` - Your Supabase anonymous key
   - `VITE_CLARITY_PROJECT_ID` - Your Microsoft Clarity project ID

**Note**: The website will work without these, but some features may be limited:
- Without Supabase: Form submissions won't be saved to database (but will still work via Web3Forms)
- Without Clarity: Analytics won't track user sessions

### Manual Deployment

If you need to deploy manually:

```bash
npm install
npm run build
# The dist/ folder contains your production build
```

## 🔧 Configuration

### SPA Routing Support

The website includes:
- `public/404.html` - Handles client-side routing for GitHub Pages
- SPA routing script in `index.html` - Ensures proper navigation

### Build Configuration

- **Build Output**: `dist/` folder
- **Base Path**: Root (`/`) - works for GitHub Pages
- **Framework**: Vite + React + TypeScript

## ✅ Pre-Deployment Checklist

- [x] All images are in `public/` folder
- [x] Environment variables are optional (graceful fallbacks)
- [x] SPA routing configured for GitHub Pages
- [x] 404.html file for client-side routing
- [x] Build process verified
- [x] TypeScript compilation successful
- [x] No linting errors

## 🐛 Troubleshooting

### Build Fails

1. Check GitHub Actions logs: **Actions** tab in your repository
2. Verify Node.js version (should be 20)
3. Check for TypeScript errors locally: `npx tsc --noEmit`

### Pages Not Loading

1. Verify GitHub Pages is enabled
2. Check that the source is set to "GitHub Actions"
3. Wait a few minutes after deployment (can take 1-5 minutes)

### Routes Not Working

1. Ensure `public/404.html` exists
2. Check that SPA routing script is in `index.html`
3. Verify all routes are defined in `src/App.tsx`

### Images Not Loading

1. Verify images are in `public/` folder
2. Check image paths start with `/` (e.g., `/Whisk_xxx.png`)
3. Ensure images are committed to repository

## 📝 Notes

- The website works without environment variables (graceful degradation)
- Supabase errors are caught and logged, won't crash the app
- Clarity only loads in production with valid Project ID
- All form submissions work via Web3Forms even without Supabase

## 🔗 Useful Links

- GitHub Actions: `https://github.com/veeduway-svg/WEBSITE/actions`
- GitHub Pages: `https://veeduway-svg.github.io/WEBSITE/` (after deployment)
- Repository: `https://github.com/veeduway-svg/WEBSITE`

