#!/usr/bin/env bash
# validate.sh — checks collection integrity for awesome-design-md
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DESIGN_DIR="$REPO_ROOT/design-md"
README="$REPO_ROOT/README.md"

errors=0
warnings=0

red()    { printf '\033[31m%s\033[0m\n' "$*"; }
yellow() { printf '\033[33m%s\033[0m\n' "$*"; }
green()  { printf '\033[32m%s\033[0m\n' "$*"; }

# ── 1. Check design-md directory exists ───────────────────────────────────────
if [[ ! -d "$DESIGN_DIR" ]]; then
  red "ERROR: design-md/ directory not found"
  exit 1
fi

# ── 2. Entry completeness ─────────────────────────────────────────────────────
echo "Checking entry completeness..."
while IFS= read -r -d '' dir; do
  site=$(basename "$dir")
  for required in DESIGN.md preview.html preview-dark.html; do
    if [[ ! -f "$dir/$required" ]]; then
      red "  MISSING: design-md/$site/$required"
      ((errors++)) || true
    fi
  done
done < <(find "$DESIGN_DIR" -mindepth 1 -maxdepth 1 -type d -print0 | sort -z)

# ── 3. DESIGN.md schema — all 9 sections present ──────────────────────────────
echo "Checking DESIGN.md section schema..."
while IFS= read -r -d '' file; do
  site=$(basename "$(dirname "$file")")
  for i in $(seq 1 9); do
    if ! grep -q "^## $i\." "$file" 2>/dev/null; then
      red "  MISSING section ## $i. in design-md/$site/DESIGN.md"
      ((errors++)) || true
    fi
  done
done < <(find "$DESIGN_DIR" -name "DESIGN.md" -print0 | sort -z)

# ── 4. README badge count vs actual entry count ───────────────────────────────
echo "Checking README badge count..."
actual_count=$(find "$DESIGN_DIR" -mindepth 1 -maxdepth 1 -type d | wc -l | tr -d ' ')
badge_count=$(grep -oP 'DESIGN\.md%20count-\K[0-9]+' "$README" || echo "0")

if [[ "$badge_count" != "$actual_count" ]]; then
  red "  MISMATCH: README badge shows $badge_count but $actual_count directories exist"
  ((errors++)) || true
else
  green "  Badge count OK: $actual_count"
fi

# ── 5. README collection index vs directories ─────────────────────────────────
echo "Checking README index sync..."
while IFS= read -r -d '' dir; do
  site=$(basename "$dir")
  if ! grep -q "design-md/$site/" "$README"; then
    yellow "  WARNING: design-md/$site/ not listed in README"
    ((warnings++)) || true
  fi
done < <(find "$DESIGN_DIR" -mindepth 1 -maxdepth 1 -type d -print0 | sort -z)

# ── 6. Preview HTML structure ─────────────────────────────────────────────────
echo "Checking preview HTML structure..."
for html_file in preview.html preview-dark.html; do
  while IFS= read -r -d '' file; do
    site=$(basename "$(dirname "$file")")
    if ! grep -qi "<!DOCTYPE" "$file"; then
      yellow "  WARNING: missing DOCTYPE in design-md/$site/$html_file"
      ((warnings++)) || true
    fi
    if ! grep -qi 'charset' "$file"; then
      yellow "  WARNING: missing charset in design-md/$site/$html_file"
      ((warnings++)) || true
    fi
    if ! grep -qi 'viewport' "$file"; then
      yellow "  WARNING: missing viewport in design-md/$site/$html_file"
      ((warnings++)) || true
    fi
  done < <(find "$DESIGN_DIR" -name "$html_file" -print0 | sort -z)
done

# ── Summary ───────────────────────────────────────────────────────────────────
echo ""
if [[ $errors -gt 0 ]]; then
  red "Validation failed: $errors error(s), $warnings warning(s)"
  exit 1
else
  green "Validation passed: 0 errors, $warnings warning(s)"
fi
