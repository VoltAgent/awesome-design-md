#!/bin/bash
# Install the awesome-design-md skill for Claude Code
# This script copies the SKILL.md to your global Claude Code skills directory

set -e

SKILL_NAME="design-md"
SKILL_DIR="$HOME/.claude/skills/$SKILL_NAME"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
SKILL_SOURCE="$SCRIPT_DIR/skills/claude-code/SKILL.md"

# Check if the source file exists
if [ ! -f "$SKILL_SOURCE" ]; then
  echo "Error: SKILL.md not found at $SKILL_SOURCE"
  echo "Make sure you're running this script from the repo root."
  exit 1
fi

# Create the skill directory
mkdir -p "$SKILL_DIR"

# Copy the skill file
cp "$SKILL_SOURCE" "$SKILL_DIR/SKILL.md"

echo "Installed '$SKILL_NAME' skill to $SKILL_DIR"
echo ""
echo "You can now use it in Claude Code:"
echo "  /design-md          — browse and pick a style interactively"
echo "  /design-md vercel   — apply a specific style directly"
