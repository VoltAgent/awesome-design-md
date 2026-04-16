# Portfolio Sites Design Spec
**Date:** 2026-04-16
**Status:** Approved

---

## Overview

Two single-page portfolio hero sites for the same fictional persona — **Jordan Ellis, Creative Director & Design Engineer** — each rendered in a distinct brand-inspired visual system taken from this repo's DESIGN.md collection.

| Site | Design system | Output file |
|------|--------------|-------------|
| Figma-inspired | `design-md/figma/DESIGN.md` | `sites/figma/index.html` |
| Lovable-inspired | `design-md/lovable/DESIGN.md` | `sites/lovable/index.html` |

Both sites are **self-contained single HTML files** with all CSS inlined in a `<style>` block. No external frameworks, no JS dependencies, no build step.

---

## Persona

- **Name:** Jordan Ellis
- **Title:** Creative Director & Design Engineer
- **Tagline:** "I design systems that think and build interfaces that feel inevitable."
- **Nav links:** Work · About · Writing
- **CTA buttons:** View Work (primary) · Get in Touch (secondary)
- **Project thumbnails (2×2 grid):** Design Systems · Motion UI · Brand Identity · Engineering
- **Footer links:** GitHub · Dribbble · LinkedIn
- **Footer copy:** Jordan Ellis — 2026

---

## Layout (both sites)

**Split hero** — full-viewport-height section, two columns:
- Left column (flex 1.1): monospace role label → display name → tagline → button row
- Right column (flex 1): 2×2 grid of project thumbnail cards

**Nav bar:** logo mark (JE) left · three text links centre · CTA button right

**Footer:** dark full-width bar · name/year left · social links right

No scroll. No JS. Pure CSS, one viewport.

---

## Figma Site

### Visual tone
Strict black-and-white chrome. Color lives only in the project thumbnails (vibrant gradients). Gallery-wall feeling — the work is the art, the interface is the frame.

### Colors
| Token | Value | Use |
|-------|-------|-----|
| Black | `#000000` | All text, nav, footer bg, primary button bg |
| White | `#ffffff` | Page background, primary button text |
| Glass dark | `rgba(0,0,0,0.08)` | Secondary button background |
| Gradient 1 | `#1a1a2e → #0f3460` | Thumbnail: Design Systems |
| Gradient 2 | `#2d1b69 → #11998e` | Thumbnail: Motion UI |
| Gradient 3 | `#fc466b → #3f5efb` | Thumbnail: Brand Identity |
| Gradient 4 | `#f7971e → #ffd200` | Thumbnail: Engineering |

### Typography
Custom `figmaSans` is not publicly available; use **Inter** as the closest web-safe equivalent with manual weight and tracking adjustments.

| Element | Size | Weight | Letter-spacing | Notes |
|---------|------|--------|----------------|-------|
| Display name | 72px | 400 | -1.72px | Two lines: Jordan / Ellis |
| Role label | 12px | 400 | 0.54px | Uppercase, `font-family: monospace` |
| Tagline | 18px | 300 | -0.26px | Max-width ~320px |
| Nav links | 14px | 400 | -0.14px | |
| Button | 14px | 400 | -0.14px | |
| Footer | 12px | 300 | 0 | |

### Components
- **Primary button:** `#000` bg · `#fff` text · `border-radius: 50px` (pill) · `padding: 10px 22px`
- **Secondary button:** `rgba(0,0,0,0.08)` bg · `#000` text · `border-radius: 50px` · same padding
- **Nav CTA:** `#000` bg · `#fff` text · pill
- **Focus outlines:** `outline: dashed 2px #000`
- **Thumbnail cards:** `border-radius: 8px`, gradient bg, label text `rgba(255,255,255,0.9)` 10px monospace
- **Footer:** `background: #000` · full-width · `padding: 20px 32px`

### Responsive
- Below 768px: stack columns vertically (text above, grid below)
- Name scales: 72px → 48px
- Grid: 2×2 → 2×2 (smaller) → 1×2 stacked on very small screens

---

## Lovable Site

### Visual tone
Warm parchment foundation. Organic, humanist, analog-feeling. Every gray is derived from `#1c1c1c` at opacity. Borders contain, shadows don't float. The inset shadow on the dark button is the signature detail.

### Colors
| Token | Value | Use |
|-------|-------|-----|
| Cream | `#f7f4ed` | Page background, card surfaces |
| Charcoal | `#1c1c1c` | All headings, dark button bg |
| Off-white | `#fcfbf8` | Button text on dark |
| Muted gray | `#5f5f5d` | Tagline, role label, footer links |
| Border light | `#eceae4` | Card borders, nav border |
| Border interactive | `rgba(28,28,28,0.4)` | Ghost button border |
| Thumbnail 1 | `#e8e0d5 → #d4c9ba` | Design Systems (warm sand) |
| Thumbnail 2 | `#dde8e0 → #c4d9ca` | Motion UI (sage) |
| Thumbnail 3 | `#e0dde8 → #cac4d9` | Brand Identity (lavender) |
| Thumbnail 4 | `#e8ddd5 → #d9c4ba` | Engineering (terracotta) |

### Typography
`Camera Plain Variable` is not publicly available; use **system-ui / -apple-system** with matching weight and tracking.

| Element | Size | Weight | Letter-spacing | Notes |
|---------|------|--------|----------------|-------|
| Display name | 60px | 600 | -1.5px | Two lines: Jordan / Ellis |
| Role label | 13px | 400 | 0 | `color: #5f5f5d` |
| Tagline | 17px | 400 | 0 | `line-height: 1.5`, `color: #5f5f5d` |
| Nav links | 14px | 400 | 0 | |
| Button | 14px | 400 | 0 | |
| Footer | 12px | 400 | 0 | `color: rgba(252,251,248,0.5)` |

### Components
- **Primary button:** `#1c1c1c` bg · `#fcfbf8` text · `border-radius: 6px` · `padding: 9px 18px` · inset shadow: `rgba(255,255,255,0.2) 0px 0.5px 0px 0px inset, rgba(0,0,0,0.2) 0px 0px 0px 0.5px inset, rgba(0,0,0,0.05) 0px 1px 2px 0px`
- **Ghost button:** transparent bg · `#1c1c1c` text · `border: 1px solid rgba(28,28,28,0.4)` · `border-radius: 6px`
- **Nav CTA:** same as primary button
- **Thumbnail cards:** `border-radius: 12px` · `border: 1px solid #eceae4` · warm gradient bg · label `rgba(28,28,28,0.6)` 10px
- **Footer:** `background: #1c1c1c` · `border-radius: 12px` · `margin: 0 16px 16px` · not full-bleed
- **Focus:** `box-shadow: rgba(0,0,0,0.1) 0px 4px 12px`

### Responsive
- Below 768px: stack columns vertically
- Name scales: 60px → 42px
- Footer border-radius preserved on mobile

---

## File Structure

```
sites/
  figma/
    index.html     ← self-contained, all CSS inline
  lovable/
    index.html     ← self-contained, all CSS inline
```

Both files live at the root of the `awesome` repo.

---

## Out of Scope

- No JavaScript interactions
- No animations or transitions (except hover states via CSS)
- No real project images — gradient placeholder cards only
- No actual contact form
- No dark mode toggle
- No additional pages beyond the hero

---

## Success Criteria

1. Each site is a single `.html` file, opens in browser with no server
2. Figma site: visually passes as Figma-brand — strict B&W chrome, vibrant thumbnail gradients, pill buttons, tight tracking
3. Lovable site: visually passes as Lovable-brand — cream background, warm borders, inset-shadow button, humanist type feel
4. Both are responsive down to 375px
5. No shared CSS — each file is fully self-contained
