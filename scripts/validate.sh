#!/usr/bin/env bash
#
# validate.sh — Validate the awesome-design-md collection integrity.
# No external dependencies required.
#
# Checks:
#   1. Entry completeness   — each directory has DESIGN.md, README.md, preview.html, preview-dark.html
#   2. Schema validation    — each DESIGN.md contains all 9 required sections
#   3. Badge accuracy       — README badge count matches actual entry count
#   4. Index synchronization — README listings match actual directories
#   5. HTML structure        — preview files include DOCTYPE, charset, lang, viewport

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DESIGN_DIR="$REPO_ROOT/design-md"
README="$REPO_ROOT/README.md"

errors=0
warnings=0

pass() { printf "  \033[32m✓\033[0m %s\n" "$1"; }
fail() { printf "  \033[31m✗\033[0m %s\n" "$1"; errors=$((errors + 1)); }
warn() { printf "  \033[33m!\033[0m %s\n" "$1"; warnings=$((warnings + 1)); }

header() { printf "\n\033[1m%s\033[0m\n" "$1"; }

# Collect all entry directories
entries=()
for dir in "$DESIGN_DIR"/*/; do
  [ -d "$dir" ] && entries+=("$(basename "$dir")")
done
entry_count=${#entries[@]}

echo "========================================"
echo " awesome-design-md collection validator"
echo "========================================"
echo ""
echo "Found $entry_count entries in design-md/"

# ─────────────────────────────────────────────
# 1. Entry completeness
# ─────────────────────────────────────────────
header "1. Entry completeness"

REQUIRED_FILES=("DESIGN.md" "README.md" "preview.html" "preview-dark.html")

for entry in "${entries[@]}"; do
  missing=()
  for file in "${REQUIRED_FILES[@]}"; do
    [ ! -f "$DESIGN_DIR/$entry/$file" ] && missing+=("$file")
  done
  if [ ${#missing[@]} -eq 0 ]; then
    pass "$entry — all 4 files present"
  else
    fail "$entry — missing: ${missing[*]}"
  fi
done

# ─────────────────────────────────────────────
# 2. Schema validation (9 sections in DESIGN.md)
# ─────────────────────────────────────────────
header "2. DESIGN.md schema validation"

for entry in "${entries[@]}"; do
  design_file="$DESIGN_DIR/$entry/DESIGN.md"
  [ ! -f "$design_file" ] && continue

  missing_sections=()
  for i in 1 2 3 4 5 6 7 8 9; do
    if ! grep -q "^## ${i}\." "$design_file"; then
      missing_sections+=("$i")
    fi
  done

  if [ ${#missing_sections[@]} -eq 0 ]; then
    pass "$entry — all 9 sections present"
  else
    fail "$entry — missing numbered sections: ${missing_sections[*]}"
  fi
done

# ─────────────────────────────────────────────
# 3. Badge accuracy
# ─────────────────────────────────────────────
header "3. Badge accuracy"

badge_count=$(sed -n 's/.*DESIGN\.md%20count-\([0-9]*\).*/\1/p' "$README" | head -1)
badge_count=${badge_count:-0}

if [ "$badge_count" -eq "$entry_count" ]; then
  pass "Badge count ($badge_count) matches actual entries ($entry_count)"
else
  fail "Badge count ($badge_count) does not match actual entries ($entry_count)"
fi

# ─────────────────────────────────────────────
# 4. Index synchronization
# ─────────────────────────────────────────────
header "4. Index synchronization"

# Extract directory names from README collection links (VoltAgent GitHub URLs only)
readme_entries=()
while IFS= read -r line; do
  readme_entries+=("$line")
done < <(grep 'VoltAgent/awesome-design-md/tree/main/design-md/' "$README" \
  | sed 's|.*design-md/\([^/)]*\).*|\1|' | sort -u)

# Check directories listed in README but not on disk
for re in "${readme_entries[@]}"; do
  if [ ! -d "$DESIGN_DIR/$re" ]; then
    fail "Listed in README but directory missing: $re"
  fi
done

# Check directories on disk but not listed in README
for entry in "${entries[@]}"; do
  found=false
  for re in "${readme_entries[@]}"; do
    if [ "$re" = "$entry" ]; then
      found=true
      break
    fi
  done
  if [ "$found" = false ]; then
    fail "Directory exists but not listed in README: $entry"
  fi
done

# Count check
readme_count=${#readme_entries[@]}
if [ "$readme_count" -eq "$entry_count" ]; then
  pass "README lists $readme_count entries, $entry_count directories exist — in sync"
else
  fail "README lists $readme_count entries but $entry_count directories exist"
fi

# ─────────────────────────────────────────────
# 5. HTML structure
# ─────────────────────────────────────────────
header "5. HTML structure"

HTML_FILES=("preview.html" "preview-dark.html")

for entry in "${entries[@]}"; do
  for html_file in "${HTML_FILES[@]}"; do
    filepath="$DESIGN_DIR/$entry/$html_file"
    [ ! -f "$filepath" ] && continue

    html_errors=()

    # DOCTYPE
    if ! head -5 "$filepath" | grep -qi '<!DOCTYPE html>'; then
      html_errors+=("missing DOCTYPE")
    fi

    # charset
    if ! grep -qi 'charset' "$filepath"; then
      html_errors+=("missing charset")
    fi

    # lang attribute
    if ! grep -qi '<html.*lang=' "$filepath"; then
      html_errors+=("missing lang attribute")
    fi

    # viewport
    if ! grep -qi 'viewport' "$filepath"; then
      html_errors+=("missing viewport meta")
    fi

    if [ ${#html_errors[@]} -eq 0 ]; then
      pass "$entry/$html_file — valid structure"
    else
      fail "$entry/$html_file — ${html_errors[*]}"
    fi
  done
done

# ─────────────────────────────────────────────
# Summary
# ─────────────────────────────────────────────
echo ""
echo "========================================"
if [ "$errors" -eq 0 ]; then
  printf "\033[32mAll checks passed!\033[0m"
  [ "$warnings" -gt 0 ] && printf " (%d warnings)" "$warnings"
  echo ""
  echo "========================================"
  exit 0
else
  printf "\033[31m%d error(s) found\033[0m" "$errors"
  [ "$warnings" -gt 0 ] && printf ", %d warning(s)" "$warnings"
  echo ""
  echo "========================================"
  exit 1
fi
