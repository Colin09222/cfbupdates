# CFB Updates — ESPN Redesign v4 (drop-in)

Drop every file in this folder into the repo root, overwriting the old ones.
**Do NOT touch `CNAME`** — it isn't included here, so nothing will overwrite it.
All image paths still point to `./images/...` — no image changes needed.

## What changed

**styles.css (full rewrite, one file, no build):**
- Real-ESPN chrome: dark unified sticky header with the nav *inside* it (logo block left,
  condensed-caps links, red active underline, "Season 1 · 2026" pill right).
- White scoreboard strip stays on top, now with proper game-slot structure:
  `Final` label, winner bolded with an arrow (`.sb-row.sb-win`), and a `● Live` state.
- Ticker is now a BottomLine-style dark strip with an angled red "TOP" bug. Pauses on
  hover, respects `prefers-reduced-motion`.
- Roboto + Roboto Condensed everywhere; condensed caps for section labels/kickers/stat
  numbers — that's most of the "real ESPN" feel.
- Red (#d50a0a) reserved for breaking/live/active. Headline hovers go ESPN blue.
- New ESPN table system for HOF/Historical: `.table-card` + `.espn-table` — sticky dark
  header row, zebra striping, hover highlight, red top-3 ranks, `.champ-row` gold tint.
- New article-page pieces: `.article-kicker`, `.byline-bar`, `figure` + caption,
  `.pull-quote`, `.more-coverage`.
- Footer now hugs the bottom of the viewport on short pages.
- All the old classes from the `redesign/` folder's ~40 articles still work
  (qa-section, score-box, stat-highlight, career-table, brackets, etc.), so old
  content can be ported over without edits.

**index.html:** hero lead with related-links row beneath it, "Top Stories" 2-up row,
Latest News carousel, right rail = Top Headlines list + Latest Scores, left rail =
Season Leaders (sticky). On mobile the lead story now comes FIRST, then headlines,
then leaders. Commented templates inline for: scorebar game slots, leader rows,
score-widget items.

**articles/:** both live articles re-templated (content untouched). New
`_TEMPLATE.html` — copy it, fill the [BRACKETS], delete unused optional blocks.

**hall-of-fame.html / historical.html:** empty states kept, with commented-out
ESPN-style tables (sticky headers, zebra rows) ready to uncomment and fill.

**archive/index.html:** fixed a CSS class collision (`.archive-content` was used as
both page container and item text wrapper — items now use `.archive-text`).

## Maintenance cheatsheet
- New article → copy `articles/_TEMPLATE.html`, fill brackets, then add the story to:
  homepage carousel (newest first), Top Headlines list, ticker, and the archive.
- Game played → add a `.sb-game` slot to the scorebar and a `.score-item` to the
  Latest Scores widget (templates are commented in `index.html`).
- First inductee/record → uncomment the tables in `hall-of-fame.html` /
  `historical.html` and add rows.

## v4.1 Realism Pack (additions)

- **Favicon** — inline SVG (red square, italic white C) on every page, no image file needed.
- **Link previews** — og:/twitter meta on every page, so links unfurl with headline +
  photo in Discord/iMessage/X. New articles: fill the og: tags in `_TEMPLATE.html`
  (use the full `https://cfbupdates.com/...` URL for og:image).
- **League Poll · Top 10 widget** (left rail) — commented row template with ▲▼
  movement classes (`up` / `dn` / `nc`).
- **Trending Now widget** (right rail) — numbered list, auto-numbers itself; just
  add `<li><a>` items.
- **Fan Poll widget** (right rail) — working vote buttons, per-device results via
  localStorage. New poll = change `data-poll-id`, the question, the option buttons,
  and the `seed` counts in the script.
- **Betting odds** — scorebar slots support an odds line (`.sb-odds`), plus an
  UPCOMING game template with kickoff time.
- **Articles** — breadcrumbs, author avatar + read-time in the byline bar, tag chips
  at the end, and a tweet-style `.social-card` embed block (in `_TEMPLATE.html`) for
  fake coach posts.
- **Archive search** — live filter box on the All Articles page.
- **404.html** — styled error page; GitHub Pages serves it automatically.
- **Wordmark** — now italic/slanted, ESPN-style. (Deliberately NOT the literal ESPN
  name/logo — that's a trademark problem waiting to happen. If you want a soundalike
  like BSPN, it's one find-and-replace on `.brand-logo` text.)
- **Footer disclaimer** — satire/not-affiliated line on every page. It's both a
  legal fig leaf and a bit.

## v4.2 — DATA-DRIVEN UPDATES (⚡ clawdbot: read this section ⚡)

The site now has two small JS files:
- **`data.js`** — THE file you edit for weekly updates. Nothing else.
- **`app.js`** — the renderer. Don't touch it.

Everything in `data.js` renders on EVERY page automatically:

| Edit this in data.js | Updates |
|---|---|
| `rankings.teams` | AP Top 25 widget (homepage left rail, scrolls past 10). Set `mv` to `"up:3"`, `"dn:1"`, `"nc"`, or `"new"` for the ▲▼ arrows. Update `rankings.title` each week ("AP Top 25 · Week 4"). |
| `scores` | 1) scoreboard tiles at the very top of every page, 2) the white rotating SCORES ticker under the TOP ticker, 3) the Latest Scores widget. Newest game first. When `scores` is empty the ticker hides and the widget shows "No games yet". The pre-season story slots in the scorebar auto-remove once scores exist. |
| `storyTicker` | The dark rotating TOP headline ticker on every page. |
| `fanPoll` | The homepage Fan Poll. New poll = new `id` + question + options. `randomSeed: [min,max]` fakes starting votes, randomized per device. |

Weekly flow when Coach sends a screenshot of scores:
1. Read the scores from the image.
2. Add one object per game to `scores` (see the EXAMPLE in the file — status,
   note, away/home + score, winner, recap link, optional odds).
3. Refresh `storyTicker` with the week's headlines.
4. Update `rankings` (records + `mv` arrows) and the `title`.
5. Commit + push. Done — every page updates.

Links inside data.js are site-root relative WITHOUT ./ or ../
(e.g. "articles/foo.html"). app.js fixes the prefix per page via
`<body data-root>`, so the same data works from /, /articles/, /archive/.

Preseason AP Top 25 is pre-loaded (Josh Pate's 2026 projection).

## v4.3 — Mobile App Pass

- **Bottom tab bar** (Home / News / HOF / Stats) on every page ≤820px wide —
  injected automatically by app.js, correct tab highlights per page, respects
  iPhone home-bar safe area. Zero HTML maintenance.
- **Add to Home Screen**: manifest.json + icon-192/512/180.png + theme-color.
  On a phone: Share → "Add to Home Screen" → the site launches fullscreen with
  the red C icon like a real app. Tell the league to install it.
- Status bar / browser chrome themes dark (#1b1c1f) on mobile.
- Bigger touch targets (nav, headlines, poll buttons, tabs), card carousel
  sized for thumb-swiping (72vw cards, no buttons), momentum scrolling on
  tables, notch-safe padding in landscape.
- NEW FILES at repo root: app icons (icon-192.png, icon-512.png, icon-180.png)
  and manifest.json. Keep them at the root.

## v4.4 — Mobile ordering fix

On phones the homepage now stacks: news feed → Latest Scores → Season Leaders
→ AP Top 25 → Top Headlines → Trending → Fan Poll. (Everything was previously
below the fold-of-all-folds; scores/leaders/rankings now sit right under the
stories.) Desktop 3-column layout unchanged.

Reminder: the rotating white SCORES ticker at the top of every page appears
automatically as soon as `scores` in data.js has at least one game — no other
step needed. Same data also fills the scoreboard tiles and the Latest Scores
widget.
