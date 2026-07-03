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
    title: "AP Top 25 · Week 6",
    teams: [
      { rk: 1,  team: "Oregon",        rec: "4-0", mv: "nc" },
      { rk: 2,  team: "Ohio State",    rec: "5-0", mv: "nc" },
      { rk: 3,  team: "Miami",         rec: "6-0", mv: "nc" },
      { rk: 4,  team: "Texas A&M",     rec: "5-0", mv: "nc" },
      { rk: 5,  team: "Oklahoma",      rec: "4-0", mv: "nc" },
      { rk: 6,  team: "Indiana",       rec: "5-0", mv: "nc" },
      { rk: 7,  team: "Notre Dame",    rec: "5-1", mv: "nc" },
      { rk: 8,  team: "Georgia",       rec: "4-1", mv: "up:2" },
      { rk: 9,  team: "LSU",           rec: "4-1", mv: "up:2" },
      { rk: 10, team: "SMU",           rec: "5-0", mv: "up:3" },
      { rk: 11, team: "Michigan",      rec: "4-1", mv: "up:3" },
      { rk: 12, team: "Missouri",      rec: "5-0", mv: "up:5" },
      { rk: 13, team: "USC",           rec: "4-1", mv: "up:2" },
      { rk: 14, team: "Virginia",      rec: "5-0", mv: "up:2" },
      { rk: 15, team: "Alabama",       rec: "4-1", mv: "up:3" },
      { rk: 16, team: "Tennessee",     rec: "4-1", mv: "dn:8" },
      { rk: 17, team: "Texas Tech",    rec: "4-1", mv: "up:3" },
      { rk: 18, team: "Penn State",    rec: "4-1", mv: "dn:9" },
      { rk: 19, team: "Florida",       rec: "4-1", mv: "dn:7" },
      { rk: 20, team: "Texas",         rec: "2-2", mv: "up:1" },
      { rk: 21, team: "Ole Miss",      rec: "2-2", mv: "up:1" },
      { rk: 22, team: "Virginia Tech", rec: "5-0", mv: "up:2" },
      { rk: 23, team: "Arizona",       rec: "5-1", mv: "new" },
      { rk: 24, team: "South Carolina",rec: "4-1", mv: "new" },
      { rk: 25, team: "Memphis",       rec: "5-0", mv: "new" }
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
    { status: "Final", note: "Week 3", away: { team: "SAC", score: 7 },
      home: { team: "NDSU", score: 28 }, winner: "home", link: "articles/kirk-ndsu-3-0-sacramento-state.html", odds: "" },
    { status: "Final", note: "Wk 5", away: { team: "OSU", score: 37 }, home: { team: "IOWA", score: 17 }, winner: "away", link: "index.html", odds: "" },
    { status: "Final", note: "Wk 5", away: { team: "MIA", score: 31 }, home: { team: "CLEM", score: 23 }, winner: "away", link: "index.html", odds: "" },
    { status: "Final", note: "Wk 5", away: { team: "ARK", score: 14 }, home: { team: "TA&M", score: 35 }, winner: "home", link: "index.html", odds: "" },
    { status: "Final", note: "Wk 5", away: { team: "IND", score: 41 }, home: { team: "RUTG", score: 24 }, winner: "away", link: "index.html", odds: "" },
    { status: "Final", note: "Wk 5", away: { team: "ND", score: 42 }, home: { team: "UNC", score: 14 }, winner: "away", link: "index.html", odds: "" },
    { status: "Final", note: "Wk 5", away: { team: "VAN", score: 17 }, home: { team: "UGA", score: 38 }, winner: "home", link: "index.html", odds: "" },
    { status: "Final", note: "Wk 5", away: { team: "FCS", score: 0 }, home: { team: "LSU", score: 56 }, winner: "home", link: "index.html", odds: "" },
    { status: "Final", note: "Wk 5", away: { team: "BC", score: 31 }, home: { team: "SMU", score: 52 }, winner: "home", link: "index.html", odds: "" },
    { status: "Final", note: "Wk 5", away: { team: "MICH", score: 31 }, home: { team: "MINN", score: 14 }, winner: "away", link: "index.html", odds: "" },
    { status: "Final", note: "Wk 5", away: { team: "FLA", score: 23 }, home: { team: "MIZ", score: 38 }, winner: "home", link: "index.html", odds: "" },
    { status: "Final", note: "Wk 5", away: { team: "WASH", score: 24 }, home: { team: "USC", score: 35 }, winner: "home", link: "index.html", odds: "" },
    { status: "Final", note: "Wk 5", away: { team: "UVA", score: 34 }, home: { team: "FSU", score: 33 }, winner: "away", link: "index.html", odds: "" },
    { status: "Final", note: "Wk 5", away: { team: "BAMA", score: 41 }, home: { team: "MSST", score: 30 }, winner: "away", link: "index.html", odds: "" },
    { status: "Final", note: "Wk 5", away: { team: "AUB", score: 38 }, home: { team: "TENN", score: 27 }, winner: "away", link: "index.html", odds: "" },
    { status: "Final", note: "Wk 5", away: { team: "TTU", score: 40 }, home: { team: "COLO", score: 21 }, winner: "away", link: "index.html", odds: "" },
    { status: "Final", note: "Wk 5", away: { team: "PSU", score: 35 }, home: { team: "NW", score: 38 }, winner: "home", link: "index.html", odds: "" },
    { status: "Final", note: "Wk 5", away: { team: "PITT", score: 26 }, home: { team: "VT", score: 35 }, winner: "home", link: "index.html", odds: "" },
    { status: "Final", note: "Wk 5", away: { team: "ARIZ", score: 38 }, home: { team: "CIN", score: 10 }, winner: "away", link: "index.html", odds: "" },
    { status: "Final", note: "Wk 5", away: { team: "UK", score: 3 }, home: { team: "SCAR", score: 59 }, winner: "home", link: "index.html", odds: "" },
    { status: "Final", note: "Wk 5", away: { team: "MEM", score: 24 }, home: { team: "CLT", score: 8 }, winner: "away", link: "index.html", odds: "" }
  ],

  /* ---------- STORY TICKER (dark "TOP" strip, every page) ---------- */
  storyTicker: [
    { text: "BISON UNBEATEN: NDSU rolls Sacramento State 28-7 to move to 3-0", href: "articles/kirk-ndsu-3-0-sacramento-state.html" },
    { text: "Charlie Kirk commits to NDSU, names Kim Jong Un assistant coach", href: "articles/kirk-ndsu-kim-jong-un.html" },
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
