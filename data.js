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
    title: "AP Top 25 · Preseason",
    teams: [
      { rk: 1,  team: "Texas",         rec: "0-0", mv: "nc" },
      { rk: 2,  team: "Notre Dame",    rec: "0-0", mv: "nc" },
      { rk: 3,  team: "Indiana",       rec: "0-0", mv: "nc" },
      { rk: 4,  team: "Oregon",        rec: "0-0", mv: "nc" },
      { rk: 5,  team: "Ohio State",    rec: "0-0", mv: "nc" },
      { rk: 6,  team: "Miami",         rec: "0-0", mv: "nc" },
      { rk: 7,  team: "Georgia",       rec: "0-0", mv: "nc" },
      { rk: 8,  team: "Texas A&M",     rec: "0-0", mv: "nc" },
      { rk: 9,  team: "Ole Miss",      rec: "0-0", mv: "nc" },
      { rk: 10, team: "LSU",           rec: "0-0", mv: "nc" },
      { rk: 11, team: "Alabama",       rec: "0-0", mv: "nc" },
      { rk: 12, team: "Texas Tech",    rec: "0-0", mv: "nc" },
      { rk: 13, team: "Oklahoma",      rec: "0-0", mv: "nc" },
      { rk: 14, team: "BYU",           rec: "0-0", mv: "nc" },
      { rk: 15, team: "Penn State",    rec: "0-0", mv: "nc" },
      { rk: 16, team: "Michigan",      rec: "0-0", mv: "nc" },
      { rk: 17, team: "USC",           rec: "0-0", mv: "nc" },
      { rk: 18, team: "Iowa",          rec: "0-0", mv: "nc" },
      { rk: 19, team: "Utah",          rec: "0-0", mv: "nc" },
      { rk: 20, team: "SMU",           rec: "0-0", mv: "nc" },
      { rk: 21, team: "Louisville",    rec: "0-0", mv: "nc" },
      { rk: 22, team: "Tennessee",     rec: "0-0", mv: "nc" },
      { rk: 23, team: "Missouri",      rec: "0-0", mv: "nc" },
      { rk: 24, team: "Florida",       rec: "0-0", mv: "nc" },
      { rk: 25, team: "Boise State",   rec: "0-0", mv: "nc" }
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
    // season hasn't started — add games here
  ],

  /* ---------- STORY TICKER (dark "TOP" strip, every page) ---------- */
  storyTicker: [
    { text: "BREAKING: Thad Castle weighs USF, Tulsa, Coastal Carolina, Colorado State", href: "articles/thad-castle-coaching-decision.html" },
    { text: "Charlie Kirk reborn after ayahuasca trip — weighs coaching offers", href: "articles/kirk-ayahuasca-rebirth-commitment.html" },
    { text: "A NEW SEASON BEGINS — New coaches, new teams, new chaos", href: "index.html" },
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
