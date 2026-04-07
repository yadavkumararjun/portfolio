# GitHub Pages Configuration Guide

## Setup Instructions

### 1. Repository Settings (GitHub Web UI)

1. Go to your repository settings: `https://github.com/arjunky/portfolio/settings`
2. Navigate to **Pages** section
3. Under "Build and deployment":
   - **Source**: GitHub Actions
   - This is automatically configured by our workflow

### 2. Custom Domain (Optional)

To use a custom domain like `portfolio.arjunky.dev`:

1. Update the `cname` field in `.github/workflows/deploy.yml` (already configured)
2. Go to GitHub repository Settings > Pages
3. Add your custom domain (this will create a CNAME file automatically)
4. Enable "Enforce HTTPS"

### 3. Deployment

The portfolio automatically deploys when you:
- Push changes to the main branch
- Create or merge a pull request to the main branch

### 4. Verify Deployment

- Check GitHub Actions tab for workflow status
- Visit `https://arjunky.github.io/portfolio` to view the live site
- Check repository settings > Pages for the live URL

## Troubleshooting

### Workflow Won't Run
- Ensure you have granted GitHub Actions permissions
- Check that `.github/workflows/deploy.yml` exists
- Verify branch name is `main` or `master`

### Site Not Updating
- Clear browser cache
- Wait 2-3 minutes for deployment to complete
- Check GitHub Actions tab for any errors
- Verify the build step completed successfully

### 404 on Custom Domain
- Ensure DNS records are configured correctly
- Wait 24-48 hours for DNS propagation
- Verify CNAME file in your GitHub repo

## Environment Variables

No sensitive environment variables are needed for this deployment.

## Manual Testing

Before pushing to production:

1. Build locally:
   ```bash
   npm run build
   ```

2. Preview the build:
   ```bash
   npm run preview
   ```

3. Test all links and functionality

4. Check responsiveness on different devices

## Additional Notes

- The homepage in package.json is set to `/portfolio/`
- All assets and links are relative to this base path
- The GitHub Actions workflow has automatic caching for faster builds
- Build artifacts are retained for 30 days for debugging
