# CLAUDE.md - Project Guide

## What is this?

Personal portfolio site 

## Quick Commands

```bash
npm run serve        # Dev server at http://localhost:8000 (HMR enabled)
npm run start        # Watch mode build (no server)
npm run dist         # Production build → dist/
npm run publish      # Full deploy: clean → build → copy to root for GitHub Pages
npm run lint         # ESLint on src/
```

## Build & Deploy Pipeline

1. `npm run publish` runs: clean → dist → copy dist/{assets,index.html,favicon.ico} to repo root
2. Commit the root-level index.html + assets/ + favicon.ico
3. Push to master — GitHub Pages serves from repo root

The root `index.html` and `assets/` are **generated files** — never edit them directly.

## Stack

| Tool | Version | Notes |
|------|---------|-------|
| Webpack | 5.90 | Two configs: webpack.dev.js, webpack.dist.js |
| Babel | 7.24 | Presets: @babel/preset-env, @babel/preset-react |
| TypeScript | 5.4 | Only used for particles.ts and textToPoints.ts |
| React | 16.14 | Class components, no hooks |
| Three.js | 0.170 | WebGL particle animation in header |
| Font Awesome | 4.7 | Icon fonts (fa-github, fa-medium, etc.) |
| core-js | 3.36 | Polyfills (import from `core-js/actual/`, NOT `core-js/fn/`) |

## Key Files

```
src/
  index.js               # Entry: mounts React, inits particle animation
  index.template.html     # HTML template (HtmlWebpackPlugin processes this)
  particles.ts            # Three.js WebGL particle system (most complex file)
  textToPoints.ts         # Canvas text → pixel coordinate array
  components/
    Main.js               # Root wrapper
    About.js              # Bio with typing animation + social links
    Works.js / Work.js    # Project showcase grid
    Articles.js           # Medium article list
    Footer.js             # Social links + offline snack-bar
  constants/
    worksData.js          # Project entries (title, image, description JSX)
    articles.js           # Article entries (name, url, date)
    descriptionList.js    # Bio text with inline tag metadata
    domID.js              # Section ID constants
  styles/                 # Component-scoped CSS files
  config/                 # Env-specific config (dev.js, dist.js, base.js)
```

## Architecture Notes

### Particle Animation (particles.ts)
- Creates a Three.js scene with triangular mesh particles positioned to spell text
- `namePoints` array contains pre-computed [x, y] coordinates for "David Guan"
- Each `Plane` instance has position, velocity, rotation, and mouse-repulsion physics
- Canvas is capped at 1200px wide; centered with `margin: 0 auto` (modern Three.js sets `display: block`)
- Mouse interaction disabled on mobile via `mobilecheck()`
- Resize triggers `rebuildParticles()` with 1500ms debounce

### HTML Structure
```
<div class="App">
  <div class="Header" id="header">   ← Three.js canvas lives here
  </div>
  <div id="main">                     ← React renders here
  </div>
</div>
```

### Webpack Config Differences
- **dev**: `publicPath: '/'`, output to `dist/`, `eval-source-map`, style-loader (injects CSS)
- **dist**: `publicPath: './assets/'`, output to `dist/assets/`, full `source-map`, content-hashed filenames

Both configs share the same resolve aliases (components, styles, constants, etc.) and loader rules.

## Common Pitfalls

- **Three.js canvas centering**: Modern Three.js (0.170+) sets `display: block` on canvas. The centering fix (`margin: 0 auto`) is applied in `rebuildParticles()` after `setSize()`. If you see the header shift left, check this.
- **core-js imports**: v3 uses `core-js/actual/...`, not `core-js/fn/...` (v2 path).
- **TypeScript imports**: Don't use explicit `.ts` extension in imports — webpack resolve handles it.
- **Dev server stale builds**: If dev server shows old content, check that `dist/` isn't serving stale static files. Run `npm run clean` and restart.
- **Production build references**: Root `index.html` uses relative paths (`./assets/...`), so the site must be served from the repo root.

## Testing Checklist

After making changes, verify:

- [ ] `npm run serve` starts without errors on port 8000
- [ ] Particle header shows "David Guan" centered in the viewport
- [ ] Particles respond to mouse hover (desktop only — repulsion effect)
- [ ] All 5 project images load without broken icons
- [ ] Font Awesome icons render (Github, Stack Overflow, Medium, YouTube, LinkedIn, Twitter)
- [ ] Typing animation plays in the bio section
- [ ] Layout is responsive at 375px (mobile), 768px (tablet), 1600px (desktop)
- [ ] `npm run dist` builds without errors
- [ ] `npm run publish` copies built files to repo root correctly
