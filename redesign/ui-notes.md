# CFB Updates — Design System v2.0

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#0b0c10` | Page background |
| `--bg-secondary` | `#131419` | Secondary surfaces, footer |
| `--bg-card` | `#1a1b23` | Cards, sections |
| `--bg-card-hover` | `#22232e` | Card hover states |
| `--bg-surface` | `#1e1f29` | Inset surfaces (quote boxes, Q&A) |
| `--gold` | `#c8a415` | Primary accent (kept per brand) |
| `--gold-light` | `#e2c44a` | Hover/active gold |
| `--red` | `#E31937` | Secondary accent, CTAs, featured tags |
| `--text-primary` | `#f0f0f5` | Body text |
| `--text-secondary` | `#a0a0b0` | Excerpts, descriptions |
| `--text-muted` | `#6b6b80` | Captions, metadata |

## Typography

- **Headlines:** Oswald 400–700, uppercase, tracked
- **Body:** Roboto 300–700
- Size classes: `.heading-xl/lg/md/sm`, `.body-lg/md/sm`, `.caption`

## Key Components & Classes

### Navigation
- `.ticker-bar` → Breaking news ticker (red bar, auto-scrolling)
- `.top-nav` → Sticky glass-morphism nav bar
- `.nav-logo` → Site name in nav (use `<span>` for gold accent)
- `.nav-links a` → Nav items (add `.active` for current page)

### Layout
- `.container` → Max-width centered wrapper
- `.layout-grid` → 3-column grid on desktop (sidebar-left / main / sidebar-right)
- `.sidebar-left` → Sticky left column for stat leaders

### Sections
- `.section` → Dark card container with border
- `.section-header` → Gold gradient header bar
- `.section-title` → Title inside gold header (black text)
- `.section-title-dark` → Centered gold title with bottom border

### Hero
- `.hero` → Full-width hero with gold gradient fade
- `.hero-title` / `.hero-subtitle` / `.hero-icon`

### Cards
- `.glass-card` → Frosted glass card with blur
- `.article-card` → Article preview (wrap img in `.article-card-img-wrap`)
- `.featured-card` → Large featured article
- `.player-card` → Sports-card style player profile
- `.inductee-card` → Hall of Fame inductee (add `.gold`/`.green` for top accent)

### Stats
- `.stat-table` → Full `<table>` with `.rank-cell`, `.value-cell`, `.team-badge`
- `.stat-list-item` → Flex row for list-style stats
- `.stats-grid` → 2-col grid for stat categories
- `.stat-category` + `.category-title` → Stat group card
- `.stats-row` → Grid-row (matches existing 4-col structure)
- `.stats-row-5` → 5-column variant (historical page)
- `.stats-row.header` → Column headers
- `.stats-row.legend` / `tr.highlight` → Highlighted dynasty rows

### Scores
- `.score-box` → Game score callout (gold left border)
- `.score-item` / `.score-team.winner` / `.score-team.loser`

### Articles
- `.article-container` → Centered article page wrapper (900px)
- `.article-page-title` / `.article-page-meta` / `.article-hero-img`
- `.article-body p` → Article paragraph styling
- `.quote-box` → Pull-quote with gold border
- `.qa-section` / `.qa-item` → Press conference transcripts

### Footer
- `.site-footer` → Full footer with gold top border
- `.footer-inner` → Auto-fit grid columns
- `.footer-col` → Column with `h4` heading and `a` links
- `.footer-social a` → Circular social icon buttons
- `.footer-bottom` → Copyright line

### Tags & Buttons
- `.tag-red` / `.tag-gold` / `.tag-dark`
- `.btn-gold` / `.btn-red` / `.btn-outline`
- `.back-link` → "← Back" navigation

### Animations
- `.fade-in` → Add to elements; becomes `.visible` via IntersectionObserver
- `.skeleton` → Loading placeholder shimmer
- `.spinner` → Circular loading spinner
- All cards have hover transitions built in

## Integration Guide

1. **Link the stylesheet** in `<head>`:
   ```html
   <link rel="stylesheet" href="redesign/styles.css">
   ```
   (For articles: `href="../redesign/styles.css"`)

2. **Remove inline `<style>` blocks** — all styling is now in the shared CSS

3. **Add fade-in script** before `</body>`:
   ```html
   <script>
   document.addEventListener('DOMContentLoaded',()=>{
     const obs=new IntersectionObserver((entries)=>{
       entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}})
     },{threshold:0.1});
     document.querySelectorAll('.fade-in').forEach(el=>obs.observe(el));
   });
   </script>
   ```

4. **Existing class compatibility**: The CSS covers existing classes (`.stats-row`, `.stat-tab`, `.featured`, `.article-card`, `.score-box`, `.quote-box`, `.qa-section`, `.back-link`, etc.) so many pages will improve just by linking the stylesheet.

5. **New structure for nav** (replace per-page headers):
   ```html
   <div class="ticker-bar">
     <span class="ticker-label">BREAKING</span>
     <span class="ticker-content">Your scrolling text here &bull; More text &bull;</span>
   </div>
   <nav class="top-nav">
     <div class="top-nav-inner">
       <a href="./index.html" class="nav-logo">CFB <span>Updates</span></a>
       <div class="nav-links">
         <a href="./index.html" class="active">Home</a>
         <a href="./hall-of-fame.html">Hall of Fame</a>
         <a href="./historical.html">Records</a>
         <a href="./season-2026.html">2026-27</a>
         <a href="./archive/index.html">Articles</a>
       </div>
     </div>
   </nav>
   ```

## Responsive Breakpoints
- **< 768px**: Single column, smaller text, compact cards
- **768px–1023px**: 2-column layouts
- **≥ 1024px**: Full 3-column index grid, sticky sidebar

## Design Philosophy
- Dark backgrounds with subtle blue-black tints (not pure black) for depth
- Gold (#c8a415) as the premium brand accent — used for nav, headers, borders, highlights
- Red (#E31937) as the action/energy color — CTAs, featured tags, stat values
- Glass-morphism on nav for modern floating feel
- All interactive elements have smooth transitions (0.3s cubic-bezier)
- Hover states lift cards with translateY + enhanced shadows
- Alternating row shading on tables for readability
- Typography hierarchy: Oswald for impact headlines, Roboto for readable body
