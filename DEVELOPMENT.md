# Development Guide

## Project Structure

```
portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── styles/              # Component styles
│   │   ├── index.css
│   │   ├── App.css
│   │   ├── Navbar.css
│   │   ├── Hero.css
│   │   ├── About.css
│   │   ├── Skills.css
│   │   ├── Experience.css
│   │   ├── Projects.css
│   │   ├── Contact.css
│   │   └── Footer.css
│   ├── App.tsx              # Main component
│   └── main.tsx             # Entry point
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies
├── .eslintrc.json           # ESLint configuration
├── .gitignore               # Git ignore rules
├── .github/workflows/       # GitHub Actions workflows
│   └── deploy.yml           # Deployment workflow
├── README.md                # Project documentation
└── DEPLOYMENT.md            # Deployment guide
```

## Adding New Components

1. Create a new TSX file in `src/components/`
2. Create corresponding CSS file in `src/styles/`
3. Import component in `App.tsx`

Example:

```typescript
// src/components/MyComponent.tsx
import '../styles/MyComponent.css'

interface MyComponentProps {
  message: string
}

export default function MyComponent({ message }: MyComponentProps): JSX.Element {
  return (
    <section className="my-component">
      <h2>{message}</h2>
    </section>
  )
}
```

## Styling Guidelines

- Use CSS variables from `src/styles/index.css`
- Follow BEM naming convention for class names
- Keep component styles modular and reusable
- Use flexbox and grid for layouts
- Ensure mobile responsiveness with media queries

### Available CSS Variables

```css
--primary: #0066ff
--secondary: #00d4ff
--dark: #0a0e27
--darker: #050812
--light: #f0f4ff
--text: #e0e0e0
--accent: #ff006e
--success: #06d6a0
--warning: #ffc41d
```

## Type Safety

- All components should have explicit return types `: JSX.Element`
- Define interfaces for component props
- Use strict TypeScript settings (`"strict": true` in tsconfig.json)

## Performance Tips

- Use React.memo for component memoization if needed
- Lazy load heavy components
- Minimize inline functions in JSX
- Use CSS animations instead of JavaScript animations
- Optimize images and assets

## Testing

Run type checking:
```bash
npm run type-check
```

Run linting:
```bash
npm run lint
```

## Customization

### Changing Colors

Update the CSS variables in `src/styles/index.css`:

```css
:root {
  --primary: #yourcolor1;
  --secondary: #yourcolor2;
  /* ... */
}
```

### Adding Social Links

Update contact info in components:
- `src/components/Hero.tsx`
- `src/components/About.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`

### Updating Personal Information

Search and replace in these files:
- `src/components/Hero.tsx`
- `src/components/About.tsx`
- `src/components/Contact.tsx`
- `index.html` (meta tags)

## Deployment Process

1. Make changes to the code
2. Test locally: `npm run dev`
3. Build: `npm run build`
4. Preview: `npm run preview`
5. Commit and push to main branch
6. GitHub Actions automatically deploys to GitHub Pages

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers supported

## Common Issues

### Build fails
- Check TypeScript errors: `npm run type-check`
- Check linting errors: `npm run lint`
- Clear node_modules: `rm -rf node_modules && npm install`

### Styles not applying
- Check file paths in imports
- Verify CSS selector specificity
- Check browser dev tools for CSS rules

### Deployment fails
- Check GitHub Actions logs
- Verify branch is `main` or `master`
- Ensure no uncommitted changes
