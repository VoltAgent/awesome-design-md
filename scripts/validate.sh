#!/usr/bin/env bash
#
# Validate the structural integrity of the awesome-design-md collection.
#
# Checks:
#   1. Every design-md/<site>/ has the 4 required files
#   2. Every DESIGN.md has 9 numbered sections (## 1. through ## 9.)
#   3. README badge count matches the actual number of entries
#   4. Every directory under design-md/ is listed in the README Collection
#   5. Every entry linked in the README Collection exists on disk
#   6. Preview HTML files have required structural elements

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DESIGN_DIR="$REPO_ROOT/design-md"
README="$REPO_ROOT/README.md"

REQUIRED_FILES=("DESIGN.md" "preview.html" "preview-dark.html" "README.md")
REQUIRED_SECTIONS=(
  "## 1."
  "## 2."
  "## 3."
  "## 4."
  "## 5."
  "## 6."
  "## 7."
  "## 8."
  "## 9."
)

errors=0
warnings=0

error() {
  echo "  ERROR: $1"
  errors=$((errors + 1))
}

warn() {
  echo "  WARN:  $1"
  warnings=$((warnings + 1))
}

# ── 1. Entry completeness ────────────────────────────────────────────────────

echo "=== Check 1: Entry completeness ==="

for dir in "$DESIGN_DIR"/*/; do
  site="$(basename "$dir")"
  for file in "${REQUIRED_FILES[@]}"; do
    if [[ ! -f "$dir$file" ]]; then
      error "$site/ is missing $file"
    fi
  done
done

echo ""

# ── 2. DESIGN.md section schema ──────────────────────────────────────────────

echo "=== Check 2: DESIGN.md section schema ==="

for dir in "$DESIGN_DIR"/*/; do
  site="$(basename "$dir")"
  design="$dir/DESIGN.md"
  [[ ! -f "$design" ]] && continue

  for section in "${REQUIRED_SECTIONS[@]}"; do
    if ! grep -q "^$section" "$design"; then
      error "$site/DESIGN.md is missing section heading starting with '$section'"
    fi
  done
done

echo ""

# ── 3. README badge count ────────────────────────────────────────────────────

echo "=== Check 3: README badge count ==="

actual_count=$(find "$DESIGN_DIR" -mindepth 1 -maxdepth 1 -type d | wc -l)
badge_count=$(grep -oP 'DESIGN\.md%20count-\K[0-9]+' "$README" || echo "0")

if [[ "$badge_count" != "$actual_count" ]]; then
  error "README badge says $badge_count but there are $actual_count entries on disk"
else
  echo "  OK: Badge count ($badge_count) matches directory count"
fi

echo ""

# ── 4. README ↔ directory sync ────────────────────────────────────────────────

echo "=== Check 4: README <-> directory sync ==="

# Extract site names from Collection bullet links: - [**Name**](...design-md/<site>/...)
readme_sites=$(grep -oP '^\- \[.*?\]\(.*?/design-md/\K[^/]+' "$README" | sort -u)
disk_sites=$(ls -1 "$DESIGN_DIR" | sort)

# Directories on disk but not in README
while IFS= read -r site; do
  if ! echo "$readme_sites" | grep -qx "$site"; then
    error "$site/ exists on disk but is not listed in README Collection"
  fi
done <<< "$disk_sites"

# Sites in README but no directory on disk
while IFS= read -r site; do
  [[ -z "$site" ]] && continue
  if [[ ! -d "$DESIGN_DIR/$site" ]]; then
    error "$site is listed in README Collection but has no directory on disk"
  fi
done <<< "$readme_sites"

echo ""

# ── 5. Preview HTML structure ─────────────────────────────────────────────────

echo "=== Check 5: Preview HTML structure ==="

for dir in "$DESIGN_DIR"/*/; do
  site="$(basename "$dir")"
  for variant in "preview.html" "preview-dark.html"; do
    html="$dir$variant"
    [[ ! -f "$html" ]] && continue

    if ! grep -qi '<!DOCTYPE html>' "$html"; then
      error "$site/$variant is missing <!DOCTYPE html>"
    fi
    if ! grep -qi '<html.*lang=' "$html"; then
      warn "$site/$variant is missing lang attribute on <html>"
    fi
    if ! grep -qi 'charset=' "$html"; then
      error "$site/$variant is missing charset declaration"
    fi
    if ! grep -qi 'viewport' "$html"; then
      warn "$site/$variant is missing viewport meta tag"
    fi
  done
done

echo ""

# ── Summary ───────────────────────────────────────────────────────────────────

echo "==========================================="
echo "  Errors:   $errors"
echo "  Warnings: $warnings"
echo "==========================================="

if [[ "$errors" -gt 0 ]]; then
  echo "FAILED: $errors error(s) found"
  exit 1
else
  echo "PASSED: All checks passed ($warnings warning(s))"
  exit 0
fi
