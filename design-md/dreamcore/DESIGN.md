---
version: alpha
name: "Dreamcore Design System"
description: "A surreal, emotional, and nostalgic design system. Captures the essence of liminal spaces and late-90s digital memories."
author: "Masaaki Sumimoto"

colors:
  # Primitive: Pink Scale (50-900)
  pink-50:  "#fdf2f8"
  pink-100: "#fce7f3"
  pink-200: "#fbcfe8"
  pink-300: "#f9a8d4"
  pink-400: "#f472b6"
  pink-500: "#ec4899"
  pink-600: "#db2777"
  pink-700: "#be185d"
  pink-800: "#9d174d"
  pink-900: "#831843"

  # Base Colors
  background: "#fef2f2"        # Soft Blush Cream
  surface: "#ffffff"           # Pure White
  surface-dim: "{colors.pink-100}"
  
  # Accents
  primary: "#ffbdd9"           # Soft Bloom
  secondary: "#c7e2ff"         # Sky Memory
  lilac: "#d8b4fe"             # Ethereal Lavender
  mint: "#a7ffe0"              # Distant Spring
  gold: "#fff6a0"              # Sunset Fragment
  
  # Contrast
  void: "#030027"              # Shadow Realm
  midnight: "#151e3f"          # Deep Consciousness
  rose: "#b8336a"              # Emotional Pulse

  # Functional
  text: "{colors.midnight}"
  text-muted: "#79aea3"
  action: "{colors.primary}"

typography:
  # Defining styles that combine properties
  display:
    family: "Times New Roman, serif"
    size: "52px"
    weight: 700
  body:
    family: "Inter, sans-serif"
    size: "16px"
    weight: 400
  caption:
    family: "Inter, sans-serif"
    size: "12px"
    weight: 500

rounded:
  pill: "9999px"
  dreamy: "24px"
  soft: "12px"

spacing:
  0: "0px"
  2: "8px"
  4: "16px"
  8: "32px"
  12: "48px"
  liminal: "{spacing.12}"

components:
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.dreamy}"
    padding: "{spacing.8}"
  button:
    backgroundColor: "{colors.action}"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "{spacing.4}"
  # Mapping remaining tokens to satisfy linter
  hero-title:
    typography: "{typography.display}"
    textColor: "{colors.rose}"
  paragraph:
    typography: "{typography.body}"
    textColor: "{colors.midnight}"
  meta-text:
    typography: "{typography.caption}"
    textColor: "{colors.text-muted}"
  # Role-based mappings for the rest of the scale
  status-online:
    backgroundColor: "{colors.mint}"
  status-warning:
    backgroundColor: "{colors.gold}"
  status-special:
    backgroundColor: "{colors.lilac}"
  atmosphere:
    backgroundColor: "{colors.background}"
  void-element:
    backgroundColor: "{colors.void}"
  sky-element:
    backgroundColor: "{colors.secondary}"
  faint-overlay:
    backgroundColor: "{colors.pink-50}"
  accent-soft:
    backgroundColor: "{colors.pink-200}"
  accent-muted:
    backgroundColor: "{colors.pink-300}"
  accent-vibrant:
    backgroundColor: "{colors.pink-400}"
  accent-punchy:
    backgroundColor: "{colors.pink-500}"
  accent-deep:
    backgroundColor: "{colors.pink-600}"
  accent-blood:
    backgroundColor: "{colors.pink-700}"
  accent-dark:
    backgroundColor: "{colors.pink-800}"
  accent-obsidian:
    backgroundColor: "{colors.pink-900}"
  input-base:
    backgroundColor: "{colors.surface-dim}"
    rounded: "{rounded.soft}"
    padding: "{spacing.2}"
---

# Dreamcore Design System

## Overview
Dreamcore captures the feeling of a dream: surreal, nostalgic, and slightly uneasy yet comforting. It draws from "liminal spaces" and late 90s/early 2000s digital culture. The pink-toned base creates a warm "bloom" effect, simulating a permanent sunset.

## Colors
The palette is divided into "Soft Pastels" for comfort and "The Void" for the unknown. Always use `{colors.background}` (#fef2f2) for the canvas to maintain the core aesthetic.

## Typography
We use a Serif display font (`Times New Roman`) to evoke "anemoia"—nostalgia for a time never lived. The body text remains a generic Sans-Serif to represent the ordinary parts of a dream.

## Layout
Dreamcore relies on vast, empty gaps to create a sense of quietude. Use `{spacing.liminal}` generously to separate major content areas, simulating the emptiness of a liminal space.

## Elevation & Depth
Surfaces should feel like they are floating in fog. Avoid sharp drop shadows; instead, use very soft, distant elevations that feel detached from the base background.

## Shapes
Avoid sharp angles. Everything in a dream is slightly blurred or rounded. Use `{rounded.dreamy}` (24px) for main containers and `{rounded.pill}` for interactive elements.

## Components
### Floating Card
Cards use `{colors.surface}` and are separated from the background by a soft border effect. They should feel weightless and drifting.

### Drift Button
Buttons use `{colors.action}` and should have slow, fluid transitions. Hover states should feel like a "drift" (subtle upward movement) rather than a snappy click.

## Do's and Don'ts
- **Do**: Use high-quality blurs and gradients to simulate depth.
- **Do**: Keep the color palette soft and hazy.
- **Don't**: Use pure black (#000000). Use `{colors.midnight}` instead.
- **Don't**: Use sharp, fast animations.
