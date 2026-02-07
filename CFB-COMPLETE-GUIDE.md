# CFB Updates - COMPLETE GUIDE
## READ THIS AFTER ANY MEMORY LOSS

---

## THE PROJECT

**Website:** https://cfbupdates.com  
**GitHub Repo:** Colin09222/cfbupdates  
**Purpose:** Satirical ESPN-style coverage of a College Football 25 video game dynasty league

**Vibe:** ESPN meets South Park - professional sports journalism format with completely unhinged character-driven comedy

---

## THE THREE COACHES - KNOW THEIR LORE

### 1. CHARLIE KIRK - University of Wyoming Cowboys
**Character:** Real-life conservative commentator parody  
**Colors:** Brown/Gold  
**Star Players:** QB Brady Hart, RB Terron Kellman

**Personality Evolution (IMPORTANT - HE CHANGES):**
- **Phase 1 (Early season):** Extremely racist, blames losses on "DEI refs," Civil Rights Act, Black people
- **Phase 2 (Mid-season):** Had 0-3 start, suddenly wore DURAG, praised Diddy, started massaging players, used AAVE, said "I'm tryna be more like that n****"
- **Phase 3 (Current):** Abandoned durag, now wears YARMULKE, obsessed with Israel, redirects every question to Zionism

**Key Quotes:**
- "The Civil Rights Act was a mistake"
- "DEI refs cost us the game"
- "I'm tryna be more like that n****" (about Diddy)
- "My biggest priority is the protection of Israel"

**Current Status:** Ranked #25 despite mediocre 5-3 record, terrible offense (19.1 PPG, 179.5 pass YPG), QB controversy, only 2 recruits

### 2. SEAN "DIDDY" COMBS - Bowling Green Falcons
**Character:** P Diddy with all the allegations  
**Colors:** Orange/Brown  
**Star Players:** QB Jaylen Kush, TE Arlis Boardingham (2,047 yards, 32 TDs - NATION LEADER)

**Personality:**
- Obsessed with "massaging" and "touching" players
- Gives uncomfortable explanations about "hands-on development"
- References Bad Boy Records, music industry past
- Threatens rivals constantly
- Now running Heisman campaign for Arlis, calling NFL/Heisman voters "racist crackers"

**Key Quotes:**
- "I gave him all the love"
- "I need to touch my players"
- "The NFL is a plantation dressed in turf"
- References "4 AM Cîroc-fueled route runs" and "Biggie holograms"

### 3. THAD CASTLE - Colorado State Rams
**Character:** Blue Mountain State TV show character  
**Colors:** Green/Gold  
**Star Players:** QB Tavien St. Clair, RB Lloyd Avant

**Personality:**
- Constantly high and/or on cocaine
- Visibly intoxicated at press conferences
- Screams "HALF BACK TOSS" repeatedly
- Drinks "Gatorade" (actually Red Bull vodka)
- Paranoid, incoherent rambling mixed with surprisingly good football takes

**Key Quotes:**
- "HALF BACK TOSS. HALF BACK TOSS. I'M READY."
- "Hold your cocks and play football"
- "That culture-vulture fraud needs his ass beat" (about Kirk's durag phase)
- References cocaine openly, admits to drug use

---

## ARTICLE CREATION PROCESS

### STEP 1: Get game stats from user
- Box scores
- Player stats (passing, rushing, receiving)
- Team stats

### STEP 2: Write the article
**Format:**
- 4-7 paragraphs of game recap with REAL stats
- Score box with key stats
- 5-7 Q&A section with coach being UNHINGED in character
- Keep stats accurate, comedy absurd
- Use team-colored gradient header

**HTML TEMPLATE - ALWAYS USE THIS:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Article Title] | CFB Updates</title>
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Roboto', sans-serif; background-color: #0a0a0a; color: #e0e0e0; line-height: 1.6; }
        .header { background: linear-gradient(135deg, [TEAM_COLOR_1], [TEAM_COLOR_2]); padding: 20px; text-align: center; border-bottom: 4px solid #c8a415; }
        .header h1 { font-family: 'Oswald', sans-serif; font-size: 2.5rem; color: white; }
        .header a { color: #fff; text-decoration: none; }
        .article-container { max-width: 900px; margin: 0 auto; padding: 30px 20px; }
        .article-meta { color: #888; font-size: 0.9rem; margin-bottom: 10px; }
        .article-title { font-family: 'Oswald', sans-serif; font-size: 2.2rem; color: #ffffff; margin-bottom: 20px; line-height: 1.2; }
        .article-image { width: 100%; max-height: 500px; object-fit: contain; background: #111; border-radius: 8px; margin-bottom: 25px; }
        .article-content p { margin-bottom: 20px; font-size: 1.1rem; color: #d0d0d0; }
        .score-box { background: linear-gradient(135deg, #1a1a1a, #252525); border-left: 4px solid [ACCENT_COLOR]; padding: 20px; margin: 25px 0; border-radius: 0 8px 8px 0; }
        .score-box h3 { font-family: 'Oswald', sans-serif; color: #c8a415; margin-bottom: 10px; }
        .qa-section { background: #1a1a1a; border-radius: 8px; padding: 20px; margin: 25px 0; }
        .qa-section h3 { font-family: 'Oswald', sans-serif; color: #c8a415; margin-bottom: 15px; font-size: 1.3rem; }
        .qa-item { margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #333; }
        .qa-item:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
        .qa-question { color: #888; font-weight: 500; margin-bottom: 8px; }
        .qa-answer { color: #e0e0e0; font-style: italic; }
        .back-link { display: inline-block; margin-top: 30px; color: #c8a415; text-decoration: none; font-weight: 500; }
    </style>
</head>
<body>
    <div class="header"><h1><a href="../index.html">CFB Updates</a></h1></div>
    <div class="article-container">
        <div class="article-meta">[Date] • [Category]</div>
        <h1 class="article-title">[Title]</h1>
        <img src="../images/[image].jpg" alt="[alt]" class="article-image">
        
        <div class="article-content">
            <p>[Opening paragraph with context]</p>

            <div class="score-box">
                <h3>Final Score</h3>
                <p><strong>[Winner]: XX</strong></p>
                <p>[Loser]: XX</p>
                <p style="margin-top: 10px; font-size: 0.9rem;">[Key stats]</p>
            </div>

            <p>[More paragraphs]</p>

            <div class="qa-section">
                <h3>Press Conference Transcript</h3>
                
                <div class="qa-item">
                    <p class="qa-question">Q: [Question]</p>
                    <p class="qa-answer">"[Unhinged answer in character]"</p>
                </div>
                
                <!-- Repeat qa-item 5-7 times -->
            </div>

            <p>[Closing paragraphs]</p>

        </div>

        <a href="../index.html" class="back-link">← Back to Home</a>
    </div>
</body>
</html>
```

**Team Colors:**
- Wyoming: `#8B6914, #DAA520` (brown/gold) - accent `#0038b8` when Israel-focused
- Bowling Green: `#4F2C1D, #FF7300` (orange/brown) - accent `#FF7300`
- Colorado State: `#1B5E20, #4CAF50` (green) - accent `#4CAF50`

### STEP 3: Save images
- Copy image to `/tmp/cfbupdates/images/[descriptive-name].jpg`
- Use in article with `../images/[name].jpg`

### STEP 4: ALWAYS update index.html
**Two things to update:**

**A) Featured Article (optional, for major news):**
Find this section and replace:
```html
<article class="featured-article">
    <a href="./articles/[new-article].html">
        <img src="./images/[new-image].jpg" alt="..." class="featured-image">
        <div class="featured-content">
            <span class="featured-tag">Breaking News</span>
            <h2 class="featured-title">[Title]</h2>
            <p class="featured-excerpt">[Short description]</p>
            <p class="featured-meta">[Date]</p>
        </div>
    </a>
</article>
```

**B) Latest Stories Carousel (MANDATORY - ALWAYS DO THIS):**
Add NEW article at the START of the carousel:
```html
<div class="carousel-track" id="carouselTrack">
    <!-- ADD NEW ARTICLE HERE -->
    <div class="article-card">
        <a href="./articles/[article-name].html">
            <img src="./images/[image].jpg" class="article-card-image" alt="[Coach]">
            <div class="article-card-content">
                <h3 class="article-card-title">[Short Title]</h3>
                <p class="article-card-meta">[Date]</p>
            </div>
        </a>
    </div>
    <!-- Previous articles follow -->
```

### STEP 5: Commit and push
```bash
cd /tmp/cfbupdates
git add .
git commit -m "ADD: [brief description]"
git push origin main
```

---

## CRITICAL RULES - NEVER BREAK THESE

### 1. HTML Structure - DON'T DELETE THESE TAGS
When updating stats in index.html, these tags MUST stay intact:
```html
<section class="center-content">  <!-- CRITICAL -->
    <article class="featured-article">  <!-- CRITICAL -->
```

**What broke the site before:** I deleted these opening tags when updating stats with sed commands. The page rendered with no featured article, no carousel, nothing.

**How to update safely:**
- Use the `edit` tool with EXACT text matching
- Replace ONLY the stat values/names inside `<div class="stat-item">` tags
- NEVER use sed or scripts that could delete structure
- Verify the file still has `<section class="center-content">` after editing

### 2. Always Add To Carousel
Every new article = add to Latest Stories carousel. No exceptions.

### 3. Never Delete Content
NEVER remove old articles or images. Always add, never subtract.

### 4. File Paths
Use relative paths with `./` prefix:
- `./images/file.jpg`
- `./articles/article.html`

### 5. Image Styling
- `object-fit: contain` (not cover)
- `background: #111` for dark background
- Featured image height: 350px
- Carousel card image height: 100px

---

## GITHUB CREDENTIALS

Credentials are stored in workspace file `.github-credentials` (not in this public repo).

**Workflow:**
```bash
cd /tmp
# Clone with credentials from .github-credentials
git clone https://[TOKEN]@github.com/colin09222/cfbupdates.git
cd cfbupdates
# Make changes
git add .
git commit -m "Message"
git push origin main
```

---

## STAT UPDATES

When updating season leaders on homepage:

**Categories to update:**
1. Passing Yards (top 10)
2. Passing TDs (top 10)
3. Rushing Yards (top 10)
4. Receiving Yards (top 10)
5. Week X Scores (sidebar)

**Format:**
```html
<div class="stat-item">
    <span class="stat-name">Player Name <span class="stat-team">TEAM</span></span>
    <span class="stat-value">1,234</span>
</div>
```

**How to update safely:**
1. Use `edit` tool
2. Copy ENTIRE stat-category section including opening/closing `<div class="stat-category">` tags
3. Replace with new values
4. Verify structure is intact before pushing

---

## ARTICLE TONE GUIDE

**Headlines:** Shocking, clickbait-style  
**Writing:** Professional journalism voice  
**Q&A:** Completely unhinged character quotes

**Kirk articles:**
- Racist dogwhistles OR Diddy imitation OR Israel obsession (depending on his current phase)
- Contradictory statements highlighting his flip-flops
- Other coaches calling him out for appropriation/fraud

**Diddy articles:**
- Creepy massage/touching references
- "Bad Boy" empire comparisons
- Threats to rivals
- Conspiracy theories about racism in sports

**Thad articles:**
- Drug references (cocaine, Red Bull vodka)
- "HALF BACK TOSS" mania
- Incoherent rambling mixed with good analysis
- Violent threats delivered casually

---

## CURRENT SEASON CONTEXT (Week 8-9, 2026)

**Wyoming (5-3, ranked #25):**
- Blowout losses to #2 Clemson (42-21), #12 Miami (31-7), #20 Duke in 2OT (35-27)
- QB controversy: Hart, Barnett, Anderson all getting snaps
- Terrible offense: 4th to last nationally
- Only 2 recruits
- Kirk currently in "Israel phase"

**Bowling Green (7-3):**
- Arlis Boardingham having historic season (2,047 yards, 32 TDs)
- Diddy pushing Heisman campaign
- Strong team overall

**Colorado State (4-3):**
- Just destroyed Oklahoma 49-21
- Explosive offense
- Thad openly using drugs

---

## BACKUP & RECOVERY

**Current backup:** `backup-site` tag and `backup-site-feb3-2026` branch

**To restore backup:**
```bash
cd /tmp/cfbupdates
git reset --hard backup-site
git push origin main --force
```

**To create new backup:**
```bash
git branch backup-site-[date]
git push origin backup-site-[date]
git tag -a backup-site-new -m "Description"
git push origin backup-site-new
```

---

## WORKFLOW CHECKLIST

For every new article:
- [ ] Write article HTML with proper template
- [ ] Save images to /images/
- [ ] Add to Latest Stories carousel in index.html
- [ ] Optionally update featured article
- [ ] Commit and push
- [ ] Verify site is working

For stat updates:
- [ ] Read current index.html
- [ ] Use `edit` tool with EXACT text matching
- [ ] Replace ONLY stat values, keep structure
- [ ] Verify `<section class="center-content">` still exists
- [ ] Commit and push
- [ ] Test the live site

---

## TROUBLESHOOTING

**Site is broken/blank:**
1. Check if `<section class="center-content">` and `<article class="featured-article">` tags exist
2. If missing, restore from backup
3. Never use sed/scripts for HTML updates

**Images not showing:**
1. Verify path uses `./images/` not `/images/`
2. Check image was pushed to repo
3. Verify `object-fit: contain` and `background: #111` in CSS

---

## REMEMBER

- The coaches are CHARACTERS - they're meant to be offensive and over-the-top
- Keep stats ACCURATE, comedy ABSURD
- NEVER delete old content
- ALWAYS add new articles to carousel
- This is satire for friends - push the envelope but make it funny

---

**After reading this file, you should know EVERYTHING about the CFB Updates project.**
