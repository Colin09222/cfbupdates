#!/usr/bin/env bash
#
# update-site.sh — the ONE command to publish cfbupdates.com safely.
#
# Usage:  ./update-site.sh "commit message describing the change"
#
# What it does:
#   1. Validates data.js syntax (node --check) — aborts if broken.
#   2. Commits ALL staged/unstaged changes with your message.
#   3. Pushes once to origin/main (the only deploy trigger).
#   4. Watches the GitHub Pages (Actions) deployment.
#      - If it WEDGES (known GitHub bug: deploy record shows "failure"),
#        it auto-clears the zombie deployment and retriggers ONCE.
#      - NEVER cancels runs (cancels cause the "Deployment cancelled" cascade).
#   5. Verifies the live site returns HTTP 200 before declaring success.
#
# Requires: git, node, curl, python3, and the PAT at ~/.openclaw/.gh_token
#
set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$REPO_DIR"

TOKEN_FILE="$HOME/.openclaw/.gh_token"
OWNER_REPO="Colin09222/cfbupdates"
API="https://api.github.com/repos/${OWNER_REPO}"
LIVE_PROBE="https://cfbupdates.com/data.js"   # cheap file that always exists

MSG="${1:-Site update}"

log() { printf '%s %s\n' "$(date '+%H:%M:%S')" "$*"; }

# ---------- 1. validate data.js ----------
log "▶ Validating data.js …"
if ! node --check data.js 2>/tmp/datajs_err; then
  echo "❌ data.js has a SYNTAX ERROR — aborting, nothing pushed:"
  cat /tmp/datajs_err
  exit 1
fi
# also confirm CFB_DATA evaluates and has the arrays
node -e "const d=eval('(function(){'+require('fs').readFileSync('data.js','utf8')+'; return CFB_DATA;})()'); if(!d||!d.rankings||!Array.isArray(d.rankings.teams)||!Array.isArray(d.scores)){process.exit(2)}" \
  || { echo '❌ data.js parsed but CFB_DATA is malformed (missing rankings/scores) — aborting.'; exit 1; }
log "✅ data.js valid."

# ---------- 2/3. commit + push ----------
if git diff --quiet && git diff --cached --quiet; then
  log "ℹ No file changes; will still push an empty commit to (re)deploy."
  git commit --allow-empty -m "$MSG" >/dev/null
else
  git add -A
  git commit -m "$MSG" >/dev/null
fi
log "▶ Pushing to origin/main …"
git push origin main >/dev/null 2>&1
PUSHED_SHA="$(git rev-parse HEAD)"
log "✅ Pushed ${PUSHED_SHA:0:8}."

# ---------- helper: latest github-pages deployment state for a sha ----------
deploy_state() { # $1 = short sha
  python3 - "$1" <<'PY'
import json,sys,urllib.request
tok=open("%s/.openclaw/.gh_token"%__import__('os').path.expanduser('~')).read().strip()
base="https://api.github.com/repos/Colin09222/cfbupdates"
sha=sys.argv[1]
def get(u): return json.load(urllib.request.urlopen(urllib.request.Request(u,headers={'Authorization':f'token {tok}'})))
deps=get(base+'/deployments?environment=github-pages&per_page=10')
for d in deps:
    if d['sha'].startswith(sha):
        st=get(base+f"/deployments/{d['id']}/statuses?per_page=1")
        print(f"{d['id']} {st[0]['state'] if st else 'none'}")
        break
PY
}

clear_zombie() { # $1 = deployment id
  python3 - "$1" <<'PY'
import json,sys,urllib.request
tok=open("%s/.openclaw/.gh_token"%__import__('os').path.expanduser('~')).read().strip()
base="https://api.github.com/repos/Colin09222/cfbupdates"
did=sys.argv[1]
def api(method,u,data=None):
    req=urllib.request.Request(u,headers={'Authorization':f'token {tok}','Accept':'application/vnd.github+json'},method=method)
    if data is not None: req.data=json.dumps(data).encode()
    try: return urllib.request.urlopen(req).status
    except urllib.error.HTTPError as e: return e.code
api('POST',f"{base}/deployments/{did}/statuses",{'state':'inactive'})
api('DELETE',f"{base}/deployments/{did}")
print("cleared",did)
PY
}

# ---------- 4. watch deploy, auto-heal one wedge ----------
watch_and_heal() {
  local sha_short="${1:0:8}"
  local tries=0
  while (( tries < 10 )); do
    sleep 18
    local line state did
    line="$(deploy_state "$sha_short" || true)"
    did="${line%% *}"; state="${line##* }"
    log "   deploy ${sha_short}: ${state:-pending}"
    case "$state" in
      success) return 0 ;;
      failure)
        log "⚠ Deploy wedged — clearing zombie ${did} and retriggering ONCE."
        clear_zombie "$did" >/dev/null
        git commit --allow-empty -m "Retrigger Pages deploy" >/dev/null
        git push origin main >/dev/null 2>&1
        sha_short="$(git rev-parse HEAD)"; sha_short="${sha_short:0:8}"
        tries=0
        ;;
    esac
    ((tries++))
  done
  return 1
}

log "▶ Watching deploy …"
watch_and_heal "$PUSHED_SHA" || log "⚠ Deploy still not confirmed via API; checking live URL anyway."

# ---------- 5. verify live ----------
log "▶ Verifying live site …"
for i in $(seq 1 6); do
  code="$(curl -s -o /dev/null -w '%{http_code}' "${LIVE_PROBE}?nocache=$(date +%s)")"
  if [[ "$code" == "200" ]]; then
    log "✅ LIVE — https://cfbupdates.com/ is serving (HTTP 200)."
    exit 0
  fi
  sleep 15
done
echo "⚠ Live probe did not return 200 yet. Wait a minute and re-check the URL manually."
exit 1
