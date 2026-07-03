/* ==========================================================================
   CFB UPDATES — SITE DATA
   ⚡ CLAWDBOT: THIS IS THE ONLY FILE YOU EDIT FOR ROUTINE UPDATES. ⚡
   Rankings, scores, tickers, and the fan poll all render from here,
   on every page. Edit → commit → push → done.

   RULES:
   - Keep valid JS (commas between items, quotes around strings).
   - Links: site-root relative WITHOUT leading "./" or "../"
     e.g. "articles/some-story.html", "hall-of-fame.html", "index.html"
   ========================================================================== */

const CFB_DATA = {

  /* ---------- AP TOP 25 (left-rail widget on homepage) ----------
     rk = rank, team = name, rec = record, mv = movement vs last poll:
     "up:N" | "dn:N" | "nc" (no change) | "new" (new to poll)          */
  rankings: {
    title: "AP Top 25 · Week 3",
    teams: [
      { rk: 1,  team: "Ohio State",    rec: "2-0", mv: "up:1" },
      { rk: 2,  team: "Miami",         rec: "3-0", mv: "dn:1" },
      { rk: 3,  team: "Oregon",        rec: "2-0", mv: "nc" },
      { rk: 4,  team: "Georgia",       rec: "2-0", mv: "nc" },
      { rk: 5,  team: "Indiana",       rec: "2-0", mv: "nc" },
      { rk: 6,  team: "Texas A&M",     rec: "2-0", mv: "up:1" },
      { rk: 7,  team: "Ole Miss",      rec: "2-0", mv: "up:1" },
      { rk: 8,  team: "Oklahoma",      rec: "3-0", mv: "up:1" },
      { rk: 9,  team: "LSU",           rec: "2-0", mv: "up:1" },
      { rk: 10, team: "BYU",           rec: "2-0", mv: "up:1" },
      { rk: 11, team: "Texas",         rec: "1-1", mv: "dn:5" },
      { rk: 12, team: "USC",           rec: "2-0", mv: "up:2" },
      { rk: 13, team: "Notre Dame",    rec: "2-1", mv: "up:2" },
      { rk: 14, team: "Texas Tech",    rec: "2-0", mv: "up:2" },
      { rk: 15, team: "Penn State",    rec: "2-0", mv: "up:2" },
      { rk: 16, team: "Iowa",          rec: "2-0", mv: "up:2" },
      { rk: 17, team: "Tennessee",     rec: "2-0", mv: "up:3" },
      { rk: 18, team: "SMU",           rec: "2-0", mv: "up:3" },
      { rk: 19, team: "Washington",    rec: "2-0", mv: "up:3" },
      { rk: 20, team: "Florida",       rec: "2-0", mv: "up:3" },
      { rk: 21, team: "Michigan",      rec: "1-1", mv: "dn:8" },
      { rk: 22, team: "Missouri",      rec: "3-0", mv: "up:2" },
      { rk: 23, team: "Alabama",       rec: "1-1", mv: "dn:11" },
      { rk: 24, team: "South Carolina",rec: "2-0", mv: "new" },
      { rk: 25, team: "Virginia",      rec: "2-0", mv: "new" }
    ]
  },

  /* ---------- SCORES ----------
     Feeds: the top scoreboard tiles (every page), the rotating SCORES
     ticker (every page), and the Latest Scores widget (homepage).
     Newest game FIRST. Delete old ones as weeks pass, or keep ~10.

     status : "Final" | "Final/OT" | "Live · Q3 4:12" | "Sat · 7:00 PM"
     winner : "away" | "home" | "" (use "" for upcoming/live)
     odds   : optional betting line for upcoming games, e.g. "CSU -3.5 · O/U 54.5"
     link   : recap article, or "index.html" if none yet

     EXAMPLE:
     { status: "Final", note: "Week 1", away: { team: "WYO", score: 17 },
       home: { team: "CSU", score: 28 }, winner: "home",
       link: "articles/csu-wyo-recap.html", odds: "" },
  */
  scores: [
    { status: "Final", note: "Week 2", away: { team: "OSU", score: 24 },
      home: { team: "TEX", score: 17 }, winner: "away", link: "index.html", odds: "" },
    { status: "Final", note: "Week 2", away: { team: "OU", score: 29 },
      home: { team: "MICH", score: 19 }, winner: "away", link: "index.html", odds: "" },
    { status: "Final", note: "Week 2", away: { team: "KY", score: 29 },
      home: { team: "BAMA", score: 28 }, winner: "away", link: "index.html", odds: "" },
    { status: "Final", note: "Week 2", away: { team: "LSU", score: 54 },
      home: { team: "LT", score: 20 }, winner: "away", link: "index.html", odds: "" },
    { status: "Final", note: "Week 2", away: { team: "BYU", score: 45 },
      home: { team: "ARIZ", score: 34 }, winner: "away", link: "index.html", odds: "" },
    { status: "Final", note: "Week 2", away: { team: "IOWA", score: 28 },
      home: { team: "ISU", score: 20 }, winner: "away", link: "index.html", odds: "" },
    { status: "Final", note: "Week 2", away: { team: "WASH", score: 21 },
      home: { team: "USU", score: 20 }, winner: "away", link: "index.html", odds: "" },
    { status: "Final", note: "Week 2", away: { team: "MIZ", score: 35 },
      home: { team: "KU", score: 21 }, winner: "away", link: "index.html", odds: "" },
    { status: "Final", note: "Week 2", away: { team: "ORE", score: 45 },
      home: { team: "OKST", score: 0 }, winner: "away", link: "index.html", odds: "" },
    { status: "Final", note: "Week 2", away: { team: "TTU", score: 21 },
      home: { team: "ORST", score: 7 }, winner: "away", link: "index.html", odds: "" }
  ],

  /* ---------- STORY TICKER (dark "TOP" strip, every page) ---------- */
  storyTicker: [
    { text: "BREAKING: Charlie Kirk commits to NDSU, names Kim Jong Un assistant coach", href: "articles/kirk-ndsu-kim-jong-un.html" },
    { text: "Alex Jones leaves media, enters head coaching free agent market", href: "articles/alex-jones-coaching-announcement.html" },
    { text: "Ohio State jumps Miami for No. 1 after 24-17 win at Texas", href: "index.html" },
    { text: "Upset alert: Kentucky stuns No. 12 Alabama 29-28", href: "index.html" },
    { text: "Oklahoma wins at No. 21 Michigan 29-19, climbs to No. 8", href: "index.html" },
    { text: "The legends of Season 1 live forever in the Hall of Fame", href: "hall-of-fame.html" }
  ],

  /* ---------- FAN POLL (homepage right rail) ----------
     New poll = change id (any unique string), question, options.
     randomSeed: [min,max] fake starting votes per option, randomized
     per device so early results look alive and vary between friends. */
  fanPoll: {
    id: "poll-castle-landing-v1",
    question: "Where should Thad Castle land?",
    options: [
      { key: "USF",     label: "USF" },
      { key: "Tulsa",   label: "Tulsa" },
      { key: "Coastal", label: "Coastal Carolina" },
      { key: "CSU",     label: "Colorado State" }
    ],
    randomSeed: [2, 14]
  }
};
