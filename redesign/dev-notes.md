# CFB Updates Redesign — Developer Notes

## What Changed

### Architecture
- **All inline `<style>` blocks removed** — every page now uses `./styles.css` (or `../styles.css` for nested pages)
- **Shared external stylesheet** at `/tmp/cfbupdates/redesign/styles.css` (~26KB) with CSS custom properties for theming
- **Google Fonts import** moved into the stylesheet (Oswald + Roboto)

### New Features Added
1. **Breaking News Ticker** — Red scrolling bar at top of every page with rotating headlines from recent articles. Pure CSS animation (`ticker-scroll` keyframes), no JS required.
2. **Sticky Navbar** — `position: sticky; top: 0` with backdrop blur. All page links present. Hall of Fame has 🏆 emoji. Current page highlighted with `class="active"` (red underline).
3. **Homepage Redesign**:
   - 3-column grid layout (stat leaders | main content | scores)
   - Hero featured article with hover animation
   - Carousel section (preserved from original with same JS)
   - New "Featured Stories" grid section below carousel
   - Responsive: 2-col on tablet, 1-col on mobile
4. **Season Pages** — Stat table headers have sortable-looking indicators (▾ chevrons via CSS `::after`). Bracket games use semantic `.bracket-game` / `.bracket-team` classes instead of inline styles.
5. **Article Pages**:
   - Wider content area (880px max-width via `.article-page`)
   - All existing classes preserved: `.score-box`, `.stat-highlight`, `.qa-section`, `.defense-section`
   - Added decorative share buttons (📋 Copy Link, 🐦 Tweet, 📱 Share)
   - Back link preserved
6. **Hall of Fame** — All inductee cards preserved exactly. Now uses shared stylesheet classes.
7. **Footer** — Every page has a consistent footer with brand, navigation links, and season links.

### Content Preserved
- **ALL 39 articles** rebuilt with new wrapper (ticker + header + navbar + footer + share buttons)
- **ALL stats** — every ranking, every stat line, every player, every score
- **ALL images** — copied to `redesign/images/` (42 files)
- **ALL text** — every article body, every quote, every bio, every press conference Q&A
- **ALL links** — same `articles/` folder structure, same filenames

### File Structure
```
redesign/
├── styles.css              # Shared stylesheet
├── index.html              # Homepage
├── hall-of-fame.html       # Hall of Fame
├── historical.html         # All-time records
├── season-2025.html        # 2025-26 season
├── season-2026.html        # 2026-27 season
├── dev-notes.md            # This file
├── archive/
│   └── index.html          # Article archive
├── articles/
│   ├── bg-cmu-diddy-week9.html
│   ├── ... (39 articles total)
│   └── wyoming-sdsu.html
└── images/
    ├── ... (42 image files)
```

### Integration Notes
- The `styles.css` was built by the web developer (not a separate UI designer). If the UI designer creates their own version, it should use the same class names documented here.
- Article rebuild was automated via `rebuild-articles.py` — the script extracts body content from originals, strips old headers, wraps in new template.
- Some original articles had images referenced that may not exist in the images folder (e.g., `csu-natty.jpg`, `thad-lsu.jpg`, `diddy-big12.jpg` on season-2026.html). These were preserved as-is from the original.
- The ticker content is hardcoded with the most recent/notable headlines. To update, edit the `.ticker-wrap` div in each page.
- CSS uses `var()` custom properties for easy theming (gold, red, backgrounds).

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- `backdrop-filter` for navbar blur (Safari requires `-webkit-` prefix, included)
- CSS Grid layout throughout
- Smooth scroll via `html { scroll-behavior: smooth; }`
