# Creatik Designs Website

A modern, premium website for Creatik Designs — a digital product studio focused on creating polished Android apps, software, icon packs, and useful digital experiences.

## Features

- **Modern Dark-First Design** with light theme support
- **Fully Responsive** across all devices
- **Performance Optimized** with lazy loading and efficient animations
- **Accessible** with semantic HTML, keyboard navigation, and reduced motion support
- **SEO Optimized** with structured data, meta tags, and sitemap
- **Scalable Architecture** designed to easily add new products

## Structure

```
creatik-designs/
├── index.html              # Homepage
├── products.html           # Products overview
├── icon-packs.html         # Icon packs library
├── miniblue.html           # MiniBlue product page
├── about.html              # About Creatik Designs
├── support.html            # Support & contact
├── privacy.html            # Privacy policy
├── terms.html              # Terms of use
├── 404.html                # 404 error page
├── robots.txt              # Search engine rules
├── sitemap.xml             # XML sitemap
└── assets/
    ├── css/
    │   ├── design-system.css    # Design tokens & base styles
    │   └── components.css       # Component styles
    └── js/
        └── main.js              # Interactive functionality
```

## Design System

The website uses a comprehensive design system with:

- **CSS Variables** for colors, spacing, typography, and effects
- **Dark/Light Theme** with persistent preference
- **Responsive Grid** and flexible layouts
- **Reusable Components** for cards, buttons, badges, and more
- **Smooth Animations** with reduced motion support

## Key Technologies

- **HTML5** with semantic markup
- **CSS3** with modern features (Grid, Flexbox, Custom Properties)
- **Vanilla JavaScript** for interactions (no dependencies)
- **Mobile-First** responsive design approach

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Optimized animations using transform/opacity
- Efficient scroll event handling
- Lazy loading where applicable
- Minimal JavaScript footprint
- CSS-based interactions prioritized
- Reduced motion support

## Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Focus indicators
- Color contrast compliance
- Reduced motion media query support

## Getting Started

### Local Development

1. Open `index.html` in a modern web browser
2. For best results, serve with a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (with npx)
   npx serve
   ```

### Deployment

This is a static website that can be hosted on:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

Simply upload all files to your hosting provider.

## Customization

### Updating Colors

Edit CSS variables in `assets/css/design-system.css`:

```css
:root {
  --primary: #3b82f6;
  --accent: #8b5cf6;
  /* ... more variables */
}
```

### Adding Products

Products use a reusable card structure. Add new products in `products.html` by copying the `.product-card` structure.

### Theme Customization

The theme system uses the `data-theme` attribute. Customize light/dark themes in the design system file.

## Important Notes

### Before Publishing

1. **Replace Placeholders** in Privacy Policy and Terms of Use with actual information
2. **Update Contact Emails** throughout the site
3. **Add Real Product Images** (currently using placeholder graphics)
4. **Update Google Play Links** when products are published
5. **Configure Analytics** if desired
6. **Review Legal Documents** with legal counsel

### Legal Documents

Both `privacy.html` and `terms.html` contain placeholder values marked with blue highlighting that must be replaced with actual information before the site goes live.

## Brand Guidelines

**Creatik Designs** is the primary brand. Products like MiniBlue should always be presented as:

```
Creatik Designs → Products → MiniBlue
```

Not:
```
MiniBlue → Creatik Designs
```

## License

© 2026 Creatik Designs. All rights reserved.

## Support

For questions or issues, contact: hello@creatikdesigns.com
