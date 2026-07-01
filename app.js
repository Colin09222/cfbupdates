/* ==========================================================================
   CFB UPDATES — RENDERER (app.js)
   Reads CFB_DATA from data.js and renders: story ticker, scores ticker,
   scoreboard tiles, AP Top 25 widget, Latest Scores widget, Fan Poll.
   ⚡ CLAWDBOT: you should almost never need to edit this file. ⚡
   ========================================================================== */
(function () {
  if (typeof CFB_DATA === "undefined") return;

  // path prefix: pages set <body data-root="./"> or "../"
  const ROOT = document.body.dataset.root || "./";
  const url = h => ROOT + h;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- 1. STORY TICKER (dark TOP strip) ---------- */
  const storyTicker = document.querySelector(".ticker");
  if (storyTicker && CFB_DATA.storyTicker && CFB_DATA.storyTicker.length) {
    const items = CFB_DATA.storyTicker.map(i =>
      `<span class="ticker-item"><a href="${url(i.href)}">${esc(i.text)}</a></span>`).join("");
    storyTicker.innerHTML = items + items; // doubled → seamless loop
    storyTicker.classList.add("is-looped");
  }

  /* ---------- 2. SCORES TICKER (white strip, auto-created) ---------- */
  const wrap = document.querySelector(".ticker-wrap");
  if (wrap && CFB_DATA.scores && CFB_DATA.scores.length) {
    const fmt = g => {
      const a = `${esc(g.away.team)}${g.away.score !== "" && g.away.score != null ? " " + g.away.score : ""}`;
      const h = `${esc(g.home.team)}${g.home.score !== "" && g.home.score != null ? " " + g.home.score : ""}`;
      const aw = g.winner === "away" ? `<b>${a}</b>` : a;
      const hw = g.winner === "home" ? `<b>${h}</b>` : h;
      return `<span class="ticker-item tk-score"><a href="${url(g.link || "index.html")}">${aw} <i>@</i> ${hw} <em>${esc(g.status)}</em></a></span>`;
    };
    const items = CFB_DATA.scores.map(fmt).join("");
    const st = document.createElement("div");
    st.className = "ticker-wrap scores-ticker";
    st.innerHTML = `<div class="ticker-bug">Scores</div><div class="ticker-scroll"><div class="ticker ticker-2 is-looped">${items + items}</div></div>`;
    wrap.after(st);
  }

  /* ---------- 3. SCOREBOARD TILES (top strip, every page) ---------- */
  const sbInner = document.querySelector(".scorebar-inner");
  if (sbInner && CFB_DATA.scores && CFB_DATA.scores.length) {
    // remove hand-written story slots; games take over once the season starts
    sbInner.querySelectorAll(".sb-story").forEach(e => e.remove());
    const anchor = sbInner.querySelector(".sb-full");
    CFB_DATA.scores.slice(0, 8).forEach(g => {
      const live = /live/i.test(g.status);
      const row = (t, isWin) =>
        `<span class="sb-row${isWin ? " sb-win" : ""}"><b>${esc(t.team)}</b><i>${t.score !== "" && t.score != null ? t.score : "&nbsp;"}</i></span>`;
      const a = document.createElement("a");
      a.className = "sb-game";
      a.href = url(g.link || "index.html");
      a.innerHTML =
        `<span class="sb-meta">${live ? '<span class="live">● ' + esc(g.status) + "</span>" : esc(g.status)}${g.note ? " · " + esc(g.note) : ""}</span>` +
        row(g.away, g.winner === "away") + row(g.home, g.winner === "home") +
        (g.odds ? `<span class="sb-odds">${esc(g.odds)}</span>` : "");
      sbInner.insertBefore(a, anchor);
    });
  }

  /* ---------- 4. AP TOP 25 WIDGET (homepage) ---------- */
  const rw = document.getElementById("rankings-widget");
  if (rw && CFB_DATA.rankings) {
    const mv = m => {
      if (!m || m === "nc") return '<span class="poll-mv nc">—</span>';
      if (m === "new") return '<span class="poll-mv nc">NEW</span>';
      const [dir, n] = m.split(":");
      return `<span class="poll-mv ${dir === "up" ? "up" : "dn"}">${esc(n || "")}</span>`;
    };
    rw.innerHTML =
      `<h3 class="widget-title">${esc(CFB_DATA.rankings.title || "Top 25")}</h3>` +
      `<div class="poll-scroll"><ul class="poll-list">` +
      CFB_DATA.rankings.teams.map(t =>
        `<li class="poll-item"><span class="poll-rk">${t.rk}</span><span class="poll-team">${esc(t.team)}</span><span class="poll-rec">${esc(t.rec || "")}</span>${mv(t.mv)}</li>`
      ).join("") + `</ul></div>`;
  }

  /* ---------- 5. LATEST SCORES WIDGET (homepage right rail) ---------- */
  const sw = document.getElementById("scores-widget-body");
  if (sw) {
    if (CFB_DATA.scores && CFB_DATA.scores.length) {
      sw.innerHTML = CFB_DATA.scores.slice(0, 6).map(g => {
        const line = (t, w) =>
          `<div class="score-team ${w ? "winner" : (g.winner ? "loser" : "")}">${esc(t.team)} <span>${t.score !== "" && t.score != null ? t.score : ""}</span></div>`;
        return `<a class="score-item" style="display:block" href="${url(g.link || "index.html")}">
          <div class="sb-meta">${esc(g.status)}${g.note ? " · " + esc(g.note) : ""}</div>
          ${line(g.away, g.winner === "away")}${line(g.home, g.winner === "home")}</a>`;
      }).join("");
    } else {
      sw.innerHTML = `<div class="score-item"><div class="score-team">No games yet</div><div class="score-team loser">Season starts soon</div></div>`;
    }
  }

  /* ---------- 6. FAN POLL (randomized seed results) ---------- */
  const fp = document.getElementById("fanpoll");
  if (fp && CFB_DATA.fanPoll) {
    const cfg = CFB_DATA.fanPoll;
    fp.innerHTML =
      `<h3 class="widget-title">Fan Poll</h3><div class="fanpoll-q">${esc(cfg.question)}</div>` +
      `<div class="fanpoll-opts">` +
      cfg.options.map(o =>
        `<button class="fanpoll-opt" data-opt="${esc(o.key)}"><span class="bar"></span><span class="lbl">${esc(o.label)}</span><span class="pct"></span></button>`
      ).join("") + `</div><div class="fanpoll-note">Tap to vote · results are per-device</div>`;

    const key = "cfb-" + cfg.id;
    const opts = [...fp.querySelectorAll(".fanpoll-opt")];
    const [lo, hi] = cfg.randomSeed || [2, 12];
    const rand = () => lo + Math.floor(Math.random() * (hi - lo + 1));
    const load = () => {
      let s = null;
      try { s = JSON.parse(localStorage.getItem(key) || "null"); } catch (e) {}
      if (!s) {
        s = { counts: {}, voted: null };
        cfg.options.forEach(o => s.counts[o.key] = rand());
        save(s);
      }
      return s;
    };
    const save = s => { try { localStorage.setItem(key, JSON.stringify(s)); } catch (e) {} };
    const render = s => {
      const total = Object.values(s.counts).reduce((a, b) => a + b, 0) || 1;
      opts.forEach(btn => {
        const k = btn.dataset.opt, p = Math.round(100 * (s.counts[k] || 0) / total);
        if (s.voted) {
          btn.classList.toggle("voted", s.voted === k);
          btn.querySelector(".pct").textContent = p + "%";
          btn.querySelector(".bar").style.width = p + "%";
          btn.disabled = true;
        }
      });
    };
    opts.forEach(btn => btn.addEventListener("click", () => {
      const s = load();
      if (s.voted) return;
      s.counts[btn.dataset.opt] = (s.counts[btn.dataset.opt] || 0) + 1;
      s.voted = btn.dataset.opt;
      save(s); render(s);
    }));
    render(load());
  }

  /* ---------- 7. MOBILE BOTTOM TAB BAR (auto-injected, shown ≤820px) ---------- */
  (function tabbar() {
    const path = location.pathname;
    const active =
      /\/hall-of-fame/.test(path) ? "hof" :
      /\/historical/.test(path) ? "stats" :
      /\/(archive|articles)\//.test(path) ? "news" : "home";
    const ic = {
      home:  '<svg viewBox="0 0 24 24"><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10.5V20h13v-9.5"/></svg>',
      hof:   '<svg viewBox="0 0 24 24"><path d="M7 4h10v4a5 5 0 0 1-10 0V4z"/><path d="M7 5H4.5a3 3 0 0 0 3 4.6M17 5h2.5a3 3 0 0 1-3 4.6"/><path d="M12 13v4m-3.5 3h7M9.5 17h5"/></svg>',
      stats: '<svg viewBox="0 0 24 24"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
      news:  '<svg viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M7.5 9.5h9M7.5 13h9M7.5 16.5h5.5"/></svg>'
    };
    const tabs = [
      { k: "home",  label: "Home",   href: "index.html" },
      { k: "news",  label: "News",   href: "archive/index.html" },
      { k: "hof",   label: "HOF",    href: "hall-of-fame.html" },
      { k: "stats", label: "Stats",  href: "historical.html" }
    ];
    const bar = document.createElement("nav");
    bar.className = "tabbar";
    bar.setAttribute("aria-label", "Mobile");
    bar.innerHTML = tabs.map(t =>
      `<a href="${url(t.href)}" class="${t.k === active ? "active" : ""}">${ic[t.k]}<span>${t.label}</span></a>`
    ).join("");
    document.body.appendChild(bar);
    document.body.classList.add("has-tabbar");
  })();
})();
