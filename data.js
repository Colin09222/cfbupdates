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
      // Fill in as the 2027 season gets going. Format:
      // { rk: 1, team: "Team Name", rec: "0-0", mv: "nc" },
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
    // Newest game FIRST. Add as the 2027 season is played. Example:
    // { status: "Final", note: "Week 1", away: { team: "AAA", score: 17 },
    //   home: { team: "BBB", score: 28 }, winner: "home", link: "index.html", odds: "" },
  ],

  /* ---------- STORY TICKER (dark "TOP" strip, every page) ---------- */
  storyTicker: [
    { text: "A NEW SEASON BEGINS — Season 2 · 2027: new coaches, new teams, new chaos", href: "index.html" },
    { text: "The legends of Season 1 live forever in the Hall of Fame", href: "hall-of-fame.html" }
  ],

  /* ---------- FAN POLL (homepage right rail) ----------
     New poll = change id (any unique string), question, options.
     randomSeed: [min,max] fake starting votes per option, randomized
     per device so early results look alive and vary between friends. */
  fanPoll: {
    id: "poll-season2-open-v1",
    question: "Who's your early pick to win Season 2?",
    options: [
      { key: "A", label: "TBD" },
      { key: "B", label: "TBD" },
      { key: "C", label: "TBD" },
      { key: "D", label: "TBD" }
    ],
    randomSeed: [2, 14]
  }
};
