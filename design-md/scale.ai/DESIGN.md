---
version: alpha
name: Scale-AI-design-analysis
description: "A technical, near-black canvas system (#060708, the deepest practical dark short of true black) where the entire decorative layer is a full-viewport WebGL <canvas> rendering intricate generative LINE-ART — thin hairline wireframe planes, contour fields, and translucent overlapping geometric panels that drift and parallax on scroll. Type is a restrained geometric sans set at 500–600 with measured negative tracking; the brand never letter-spaces positively outside small mono labels. Color is suppressed to ink-on-near-black with one cool blue accent (#3d7fff) reserved for the primary CTA, focus rings, and the brightest gradient stops in the line-art. Cards are translucent charcoal planes (#0e1012) layered with faint warm+cool tints and 1px hairline borders, so they read as overlapping data-viz surfaces rather than solid tiles. The voice is candid and engineering-first ('Reliable AI has no shortcuts'), the layout dense and editorial. The aesthetic: minimal, technical, abstract, layered translucent geometry — premium without atmosphere-blur."

colors:
  primary: "#3d7fff"
  on-primary: "#ffffff"
  primary-hover: "#5e97ff"
  primary-pressed: "#2f63d6"
  primary-focus: "#3d7fff"
  ink: "#f4f5f7"
  ink-muted: "#c2c6cf"
  ink-subtle: "#8a8f9c"
  ink-tertiary: "#5b606c"
  ink-disabled: "#3d4250"
  canvas: "#060708"
  canvas-deep: "#000000"
  surface-1: "#0e1012"
  surface-2: "#141619"
  surface-3: "#1a1d21"
  surface-translucent: "rgba(20,22,25,0.55)"
  hairline: "#1f232a"
  hairline-strong: "#2c313a"
  hairline-bright: "#3a404c"
  line-art-cool: "#2a4a7a"
  line-art-warm: "#5a3a2e"
  line-art-bright: "#6ea0ff"
  line-art-ember: "#c97a52"
  line-art-faint: "rgba(255,255,255,0.06)"
  accent-cool: "#3d7fff"
  accent-warm: "#d98a5a"
  semantic-success: "#3fcf8e"
  semantic-warning: "#e0a83a"
  semantic-error: "#e35d6a"
  selection-bg: "#3d7fff"
  selection-fg: "#ffffff"
  inverse-canvas: "#ffffff"
  inverse-ink: "#0a0b0d"

typography:
  display-xl:
    fontFamily: Scale Sans, Inter, SF Pro Display, system-ui, -apple-system, sans-serif
    fontSize: 76px
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: -2.6px
  display-lg:
    fontFamily: Scale Sans, Inter, SF Pro Display, system-ui, -apple-system, sans-serif
    fontSize: 54px
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: -1.7px
  display-md:
    fontFamily: Scale Sans, Inter, SF Pro Display, system-ui, -apple-system, sans-serif
    fontSize: 38px
    fontWeight: 600
    lineHeight: 1.14
    letterSpacing: -1.0px
  headline:
    fontFamily: Scale Sans, Inter, SF Pro Display, system-ui, -apple-system, sans-serif
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.6px
  card-title:
    fontFamily: Scale Sans, Inter, SF Pro Display, system-ui, -apple-system, sans-serif
    fontSize: 21px
    fontWeight: 500
    lineHeight: 1.28
    letterSpacing: -0.4px
  subhead:
    fontFamily: Scale Sans, Inter, SF Pro Display, system-ui, -apple-system, sans-serif
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: -0.2px
  body-lg:
    fontFamily: Scale Sans, Inter, SF Pro Display, system-ui, -apple-system, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: -0.1px
  body:
    fontFamily: Scale Sans, Inter, SF Pro Display, system-ui, -apple-system, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: -0.05px
  body-sm:
    fontFamily: Scale Sans, Inter, SF Pro Display, system-ui, -apple-system, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
  caption:
    fontFamily: Scale Sans, Inter, SF Pro Display, system-ui, -apple-system, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0px
  button:
    fontFamily: Scale Sans, Inter, SF Pro Display, system-ui, -apple-system, sans-serif
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: -0.1px
  eyebrow:
    fontFamily: Scale Mono, JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 1.2px
  mono:
    fontFamily: Scale Mono, JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px

rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  xxl: 24px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  xxxl: 64px
  section: 120px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 18px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 18px
  button-primary-pressed:
    backgroundColor: "{colors.primary-pressed}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 18px
  button-secondary:
    backgroundColor: "{colors.surface-translucent}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline-strong}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 18px
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 14px
  button-inverse:
    backgroundColor: "{colors.inverse-canvas}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 18px
  nav-bar:
    backgroundColor: "{colors.surface-translucent}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    height: 64px
    padding: "0px {spacing.lg}"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink-muted}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  feature-card:
    backgroundColor: "{colors.surface-translucent}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  line-art-panel:
    backgroundColor: "{colors.surface-translucent}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  product-panel:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: "{spacing.lg}"
  stat-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.display-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  testimonial-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  customer-logo-tile:
    backgroundColor: "transparent"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
  text-input:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline-strong}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 10px 12px
  text-input-focused:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    borderColor: "{colors.primary-focus}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 10px 12px
  eyebrow-label:
    backgroundColor: "transparent"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.none}"
    padding: "0px"
  status-badge:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink-muted}"
    borderColor: "{colors.hairline}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 3px 10px
  cta-banner:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.headline}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xxl}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.section} {spacing.lg}"
  footer:
    backgroundColor: "{colors.canvas-deep}"
    textColor: "{colors.ink-subtle}"
    borderColor: "{colors.hairline}"
    typography: "{typography.caption}"
    padding: "{spacing.xxxl} {spacing.lg}"
---

## Overview

Scale AI's marketing canvas is a near-black technical surface — `{colors.canvas}` is `#060708`, a fraction off pure black with a faint cool tint, sitting one notch above `{colors.canvas-deep}` (`#000000`) which is reserved for the footer and full-bleed section seams. On top sits a three-step surface ladder (`{colors.surface-1}` → `{colors.surface-3}`) plus a critical fourth member, `{colors.surface-translucent}` (`rgba(20,22,25,0.55)`), used for panels that must let the line-art background bleed through. Hairline borders run from `{colors.hairline}` (`#1f232a`) up through `{colors.hairline-bright}`. Light gray text (`{colors.ink}` `#f4f5f7`) carries headlines and body.

The decisive, brand-defining element is the **full-viewport WebGL `<canvas>` background**. It is initialized with `gl: true` at roughly viewport resolution (~1440×900) and paints pure near-black filled with intricate generative **line-art / wireframe data-viz**: thin hairline strokes describing translucent overlapping planes, contour fields, and torus/grid geometry. The strokes carry faint warm-and-cool tints (`{colors.line-art-cool}` `#2a4a7a` and `{colors.line-art-warm}` `#5a3a2e`), brightening at intersections toward `{colors.line-art-bright}` `#6ea0ff`. This is NOT a blurred color blob — it is sharp, technical, geometric, and layered. It parallaxes and drifts on scroll.

Color is suppressed hard. The single chromatic accent is **cool blue** `{colors.primary}` (`#3d7fff`) — used on the primary CTA, focus rings, link emphasis, and the brightest line-art stops. A warm ember (`{colors.accent-warm}` `#d98a5a`) appears only as a secondary tint inside the line-art, never as UI chrome.

Type runs a restrained geometric sans (`Scale Sans`, with `Inter` / `SF Pro Display` fallback) at weight 500–600 for display with measured negative tracking (`-2.6px` at 76px). A monospace face (`Scale Mono`, fallback `JetBrains Mono`) carries section eyebrows and technical labels — eyebrows are the one place the brand letter-spaces *positively* (`+1.2px`), marking them as taxonomy against the negative-tracked display.

The voice is candid and engineering-first: `"Reliable AI has no shortcuts."` and `"Most AI deployments in enterprise and government fail."` — expertise and problem-statement over hype. Social proof is dense: rows of monochrome customer logos (enterprise + government) treated as a quiet marquee, not a hero.

**Key Characteristics:**
- **Near-black canvas marketing system** — `{colors.canvas}` (`#060708`), with `#000000` reserved for footer + section seams.
- **Full-viewport WebGL line-art background** is the entire decorative system — sharp wireframe geometry, NOT atmospheric gradient blobs.
- **Translucent panels** (`{colors.surface-translucent}`) let the line-art bleed through cards, so surfaces read as overlapping data-viz planes.
- **One cool-blue accent** (`{colors.primary}` `#3d7fff`) — primary CTA, focus, link, brightest line-art stops. Nothing else chromatic in the UI.
- **Geometric sans, weight ceiling 600**, with aggressive negative display tracking; mono for eyebrows + technical labels.
- **Eyebrows use positive tracking** (`+1.2px`) in the mono face — the only positive tracking in the system.
- **Restrained, square-ish corners** — CTAs at `{rounded.md}` 8px, panels at `{rounded.lg}`–`{rounded.xl}`. Never pill CTAs.
- No drop-shadow atmosphere. Depth comes from translucency + hairline + the layered canvas, not from blur or material shadow.

## Colors

> Source: scale.com (home), reference-captured dark sections. Hex values are precise extractions where visible and disciplined estimates for the WebGL line-art tints, which are generated, not declared.

### Brand & Accent
- **Cool Blue** (`{colors.primary}` — `#3d7fff`): The signature Scale accent — primary CTA, focus ring, link emphasis, brightest WebGL line-art stops.
- **Cool Blue Hover** (`{colors.primary-hover}` — `#5e97ff`): Lighter blue — hovered primary CTA.
- **Cool Blue Pressed** (`{colors.primary-pressed}` — `#2f63d6`): Deeper blue — pressed primary CTA.
- **Accent Warm** (`{colors.accent-warm}` — `#d98a5a`): Ember tint used ONLY inside the line-art and the rare warm gradient stop — never as UI chrome.

### Surface
- **Canvas** (`{colors.canvas}` — `#060708`): Default page background — near-black with a faint cool tint. The WebGL canvas paints over this.
- **Canvas Deep** (`{colors.canvas-deep}` — `#000000`): Pure black — footer surface and full-bleed section seams only.
- **Surface 1** (`{colors.surface-1}` — `#0e1012`): One step above canvas — solid product panels, stat cards, inputs.
- **Surface 2** (`{colors.surface-2}` — `#141619`): Two steps above — hovered cards, status badges, dropdowns.
- **Surface 3** (`{colors.surface-3}` — `#1a1d21`): Three steps above — nested surfaces, sub-nav.
- **Surface Translucent** (`{colors.surface-translucent}` — `rgba(20,22,25,0.55)`): The signature panel fill — semi-transparent charcoal so the line-art background bleeds through. Used on feature cards, line-art panels, and the nav bar.
- **Hairline** (`{colors.hairline}` — `#1f232a`): 1px borders on cards and dividers.
- **Hairline Strong** (`{colors.hairline-strong}` — `#2c313a`): Stronger 1px borders — input borders, secondary-button edges.
- **Hairline Bright** (`{colors.hairline-bright}` — `#3a404c`): Brightest border tier — top-edge highlight on lifted translucent panels.

### Text
- **Ink** (`{colors.ink}` — `#f4f5f7`): All headlines and emphasized body — light gray.
- **Ink Muted** (`{colors.ink-muted}` — `#c2c6cf`): Secondary type — nav links, lead body, meta on hero.
- **Ink Subtle** (`{colors.ink-subtle}` — `#8a8f9c`): Tertiary type — eyebrows, footer columns, logo-tile labels.
- **Ink Tertiary** (`{colors.ink-tertiary}` — `#5b606c`): Quaternary — captions, fine print.
- **Ink Disabled** (`{colors.ink-disabled}` — `#3d4250`): Disabled controls and placeholder text.

### Semantic
- **Success** (`{colors.semantic-success}` — `#3fcf8e`): Status pills, success indicators (rare on marketing).
- **Warning** (`{colors.semantic-warning}` — `#e0a83a`): Pending / caution status.
- **Error** (`{colors.semantic-error}` — `#e35d6a`): Validation red on forms.

### WebGL Line-Art Palette
The canvas background draws from a constrained generative palette — strokes only, never fills:
- **Line-Art Cool** (`{colors.line-art-cool}` — `#2a4a7a`): The dominant cool-blue hairline stroke tint at low opacity.
- **Line-Art Warm** (`{colors.line-art-warm}` — `#5a3a2e`): A faint warm counter-tint on a subset of strokes, creating the warm+cool tension the reference captured.
- **Line-Art Bright** (`{colors.line-art-bright}` — `#6ea0ff`): Intersection / focal brightening toward the brand blue.
- **Line-Art Ember** (`{colors.line-art-ember}` — `#c97a52`): Rare warm focal brightening (warm counterpart of line-art-bright).
- **Line-Art Faint** (`{colors.line-art-faint}` — `rgba(255,255,255,0.06)`): The baseline near-white hairline at minimum opacity — the "grid hum" behind everything.

Treat the line-art as one generative system: low-opacity hairlines, warm+cool tinting, intersection brightening, and translucent overlapping planes. Do not reduce it to a single solid color or a blurred glow.

## Typography

### Font Family

- **Scale Sans** — a restrained geometric sans (the captured surface uses a custom/premium cut); fallback `Inter, SF Pro Display, system-ui, -apple-system, sans-serif`. Carries display-xl through body and button labels.
- **Scale Mono** — a monospace for technical labels and eyebrows; fallback `JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace`. Carries the eyebrow and mono tokens only.

Display and body are one continuous geometric-sans voice; the family change is silent. Mono is the explicit "technical layer" voice and is visually distinct.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 76px | 600 | 1.04 | -2.6px | Largest hero headline ("Reliable AI has no shortcuts."). |
| `{typography.display-lg}` | 54px | 600 | 1.08 | -1.7px | Section opener headlines. |
| `{typography.display-md}` | 38px | 600 | 1.14 | -1.0px | Sub-section headlines, large stat numbers. |
| `{typography.headline}` | 28px | 600 | 1.2 | -0.6px | CTA-banner heading, panel headlines. |
| `{typography.card-title}` | 21px | 500 | 1.28 | -0.4px | Feature / line-art panel titles. |
| `{typography.subhead}` | 20px | 400 | 1.45 | -0.2px | Lead body, intro paragraphs. |
| `{typography.body-lg}` | 18px | 400 | 1.55 | -0.1px | Hero subhead, testimonial body. |
| `{typography.body}` | 16px | 400 | 1.55 | -0.05px | Default body. |
| `{typography.body-sm}` | 14px | 400 | 1.5 | 0 | Card body, nav links, footer columns. |
| `{typography.caption}` | 12px | 400 | 1.4 | 0 | Captions, meta, badge labels. |
| `{typography.button}` | 15px | 500 | 1.2 | -0.1px | All button labels. |
| `{typography.eyebrow}` | 12px | 500 | 1.3 | +1.2px | Section eyebrows — MONO, positive tracking. |
| `{typography.mono}` | 13px | 400 | 1.5 | 0 | Technical labels, code, metrics tokens. |

### Principles

- **Aggressive negative tracking on display.** `-2.6px` at 76px (≈3.4% of size). Reverting to default tracking breaks the brand.
- **Single sans voice from display to body.** Display 600 → body 400, same family.
- **Eyebrows are the inversion.** Mono face, UPPERCASE-feel, *positive* `+1.2px` tracking — the deliberate counterpoint to the negative-tracked display.
- **Weight ceiling is 600.** The geometric sans never appears at 700+. This keeps the brand calm and technical.
- **Mono is the technical layer only.** Eyebrows, code, metric tokens. Body paragraphs never set in mono.
- **Sentence-case, period-terminated headlines.** "Reliable AI has no shortcuts." — the period is part of the candid, declarative voice.

### Note on Font Substitutes

Scale's display face is not publicly distributed. Closest free substitutes:
- **Geometric sans** — **Inter** (500 / 600) is the closest cross-platform match; `SF Pro Display` on macOS. **Geist Sans** is a viable second choice.
- **Monospace** — **JetBrains Mono** (400 / 500) matches the technical eyebrow voice; **IBM Plex Mono** or **Geist Mono** are second-best.

## Layout

### Spacing System

- **Base unit**: 4px. Every captured value is a multiple of 4.
- **Tokens (front matter)**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.xxxl}` 64px · `{spacing.section}` 120px.
- **Section padding**: marketing bands use `{spacing.xxxl}` to `{spacing.section}` top/bottom — the hero stretches to `{spacing.section}` 120px to give the WebGL canvas room to breathe.
- **Card interior padding**: `{spacing.lg}` 24px on feature / line-art panels; `{spacing.xl}` 32px on testimonial cards; `{spacing.xxl}` 48px on CTA banners.
- **Button padding**: 10px vertical · 18px horizontal — Scale's CTA spec.
- **Form input padding**: 10px vertical · 12px horizontal.

### Grid & Container

- Max content width sits around 1280px; the full-bleed WebGL canvas spans the entire viewport behind it.
- Feature / line-art panel grids are 3-up at desktop, 2-up at tablet, 1-up at mobile.
- Stat rows render 3-up or 4-up.
- Customer-logo marquee runs ~6-up in a single monochrome row.
- Hero text holds left-aligned or centered at the top half of the band; the canvas occupies the full band behind it.

### Whitespace Philosophy

The near-black canvas + WebGL line-art IS the whitespace — sections separate by surface lift onto translucent panels and by generous `{spacing.section}` 120px vertical rhythm, not by gaps in white. Within a panel, `{spacing.lg}` 24px between content blocks; the headline/body stack is tight (`{spacing.xs}` 8px) before a wider gap to the CTA.

### Responsive Strategy

#### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 600px | Hero stacks; nav collapses to hamburger; 3-up grids → 1-up; WebGL canvas downscales resolution / reduces stroke count for perf. |
| Tablet | 600–959px | 3-up grids → 2-up; nav stays horizontal. |
| Desktop | 960–1279px | Full 3-up grids; canvas at full stroke density. |
| Wide | 1280–1439px | Container caps at ~1280px content; canvas full-bleed. |
| Ultra-wide | ≥ 1440px | Content stays centered; canvas stretches edge-to-edge. |

#### Touch Targets

- CTAs hold ≥44px tap height on touch viewports (10px padding + 15px line yields ~40px; inflated to 44px on mobile).
- Nav links inflate to ≥44px via `{spacing.xs}` padding on mobile.
- Form inputs hold ≥44px tap target on touch.

#### Collapsing Strategy

- **Nav**: link row + CTA cluster at desktop; collapses to logo + hamburger below 768px with a full-overlay menu.
- **Hero**: WebGL canvas stays full-bleed; headline + body stack vertically at all breakpoints.
- **Panel grids**: 3-up → 2-up → 1-up; each panel keeps its `{rounded.lg}` shape.
- **Display type**: `{typography.display-xl}` 76px scales toward `{typography.display-md}` 38px on mobile.

#### Image Behavior

- **WebGL canvas**: re-rendered at device pixel ratio (capped at 2×); stroke count and frame rate throttle down on mobile and under `prefers-reduced-motion`.
- **Customer logos**: monochrome SVGs at consistent ~24px height in a flex marquee.
- **Product panels**: screenshots/diagrams sit in `{rounded.xl}` chrome, never cropped.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No border, no shadow. | Hero text, body type, footer. |
| 1 (line-art bleed) | `{colors.surface-translucent}` fill over the live WebGL canvas, 1px `{colors.hairline}`. | Translucent feature / line-art panels — the line-art shows through. |
| 2 (solid lift) | `{colors.surface-1}` fill, 1px `{colors.hairline}`. | Solid product panels, stat cards, inputs. |
| 3 (hover lift) | `{colors.surface-2}` fill, 1px `{colors.hairline-strong}`, top-edge `{colors.hairline-bright}` highlight. | Hovered cards, dropdowns, badges. |
| 4 (focus ring) | 2px `{colors.primary-focus}` outline at ~50% opacity. | Focused input, focused button. |

Scale's depth is carried by **translucency over the live canvas + hairline borders + the layered line-art itself** — not by drop shadows. The signature move is a translucent panel sitting on top of moving wireframe geometry, with a faint bright hairline on the top edge so the panel reads as a pane of glass over data-viz.

### Decorative Depth

- **The WebGL line-art canvas is the entire atmospheric depth system.** Overlapping translucent planes, contour fields, and drifting wireframe geometry create real layered depth.
- **Translucent panels** let lower layers bleed through, reinforcing the "layered translucent geometry" reading.
- **No blurred gradient blobs, no material drop-shadows, no spotlight cards.**

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed hero / footer bands, logo tiles. |
| `{rounded.xs}` | 4px | Small chips, inline tags. |
| `{rounded.sm}` | 6px | Nav-link ghost pills, status chips. |
| `{rounded.md}` | 8px | All buttons, form inputs. |
| `{rounded.lg}` | 12px | Feature cards, line-art panels, stat cards, testimonial cards. |
| `{rounded.xl}` | 16px | Product panels, CTA banners. |
| `{rounded.xxl}` | 24px | Oversized callout containers (rare). |
| `{rounded.pill}` | 9999px | Status badges only — never CTAs. |
| `{rounded.full}` | 9999px | Avatar circles. |

### Geometry & Graphics

- **WebGL line-art**: thin hairline strokes (0.5–1px equivalent), translucent overlapping planes, contour/topographic fields, torus and grid geometry; warm+cool tinting with intersection brightening.
- **Customer logos**: monochrome SVG at ~24px height, no border.
- **Product panels**: high-fidelity diagrams in `{rounded.xl}` 16px tiles.
- **Avatar circles** in testimonial cards use `{rounded.full}` at 32–40px.

## Components

### Buttons

**`button-primary`** — Cool-blue CTA. The default conversion target across all pages.
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button}`, padding 10px 18px, rounded `{rounded.md}`.
- Hover → `button-primary-hover` (`{colors.primary-hover}`). Pressed → `button-primary-pressed` (`{colors.primary-pressed}`).

**`button-secondary`** — Translucent charcoal button paired with the primary ("Book demo" / "Contact sales").
- Background `{colors.surface-translucent}`, text `{colors.ink}`, 1px `{colors.hairline-strong}` border, type `{typography.button}`, padding 10px 18px, rounded `{rounded.md}`.

**`button-ghost`** — Plain text button ("Learn more").
- Transparent background, text `{colors.ink}`, type `{typography.button}`, rounded `{rounded.md}`, padding 10px 14px.

**`button-inverse`** — White-on-dark CTA, used sparingly on section openers.
- Background `{colors.inverse-canvas}`, text `{colors.inverse-ink}`, type `{typography.button}`, rounded `{rounded.md}`, padding 10px 18px.

### Cards & Containers

**`feature-card`** — The canonical translucent feature panel.
- Background `{colors.surface-translucent}` (line-art bleeds through), text `{colors.ink}`, 1px `{colors.hairline}` border, type `{typography.body}`, rounded `{rounded.lg}`, padding `{spacing.lg}`.

**`line-art-panel`** — A feature card positioned over a denser line-art region, used to host the wireframe geometry as foreground content.
- Background `{colors.surface-translucent}`, 1px `{colors.hairline}` border, top-edge `{colors.hairline-bright}` highlight, rounded `{rounded.lg}`, padding `{spacing.lg}`.

**`product-panel`** — Solid panel framing a product diagram / screenshot.
- Background `{colors.surface-1}`, text `{colors.ink}`, 1px `{colors.hairline}` border, type `{typography.body}`, rounded `{rounded.xl}`, padding `{spacing.lg}`.

**`stat-card`** — Large-number metric card ("99% / 10x" style).
- Background `{colors.surface-1}`, text `{colors.ink}`, number set in `{typography.display-md}`, 1px `{colors.hairline}` border, rounded `{rounded.lg}`, padding `{spacing.lg}`.

**`testimonial-card`** — Customer quote with avatar + name + role.
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.body-lg}`, rounded `{rounded.lg}`, padding `{spacing.xl}`.

**`customer-logo-tile`** — Single tile in the customer marquee.
- Transparent background, monochrome logo, label in `{typography.caption}` `{colors.ink-subtle}`, no radius, padding `{spacing.md}`.

**`cta-banner`** — Closing CTA panel near page bottom.
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.headline}`, 1px `{colors.hairline}` border, rounded `{rounded.xl}`, padding `{spacing.xxl}`.

### Inputs & Forms

**`text-input`** + **`text-input-focused`** — Form fields on demo / contact forms.
- Background `{colors.surface-1}`, text `{colors.ink}`, 1px `{colors.hairline-strong}` border, type `{typography.body}`, rounded `{rounded.md}`, padding 10px 12px.
- Focused: border shifts to `{colors.primary-focus}`; a 2px blue ring at ~50% opacity.

### Status

**`status-badge`** — Small status pill ("Beta", "New", "Live").
- Background `{colors.surface-2}`, text `{colors.ink-muted}`, 1px `{colors.hairline}` border, type `{typography.caption}`, rounded `{rounded.pill}`, padding 3px 10px.

**`eyebrow-label`** — Mono section eyebrow above headlines.
- Transparent, text `{colors.ink-subtle}`, type `{typography.eyebrow}` (mono, `+1.2px` tracking, uppercase-feel).

### Navigation

**`nav-bar`** — Sticky translucent top bar.
- Background `{colors.surface-translucent}` with backdrop blur, 1px `{colors.hairline}` bottom border, text `{colors.ink}`, type `{typography.body-sm}`, height 64px, padding `0 {spacing.lg}`. Layout: wordmark left, link row center, `button-ghost` ("Log in") + `button-primary` ("Book demo") cluster right.

**`nav-link`** — Center link row inside `nav-bar`.
- Transparent, text `{colors.ink-muted}` (→ `{colors.ink}` on hover), type `{typography.body-sm}`, rounded `{rounded.sm}`, padding `{spacing.xs} {spacing.sm}`.

### Signature Component

**`hero-band`** — The full-bleed hero hosting the WebGL line-art canvas.
- Background `{colors.canvas}` with the full-viewport `<canvas>` (`gl: true`) painting line-art behind, text `{colors.ink}`, padding `{spacing.section} {spacing.lg}`. Inside: a mono `eyebrow-label`, the headline in `{typography.display-xl}` (sentence-case, period-terminated), a lead in `{typography.body-lg}`, then a CTA row with `button-primary` + `button-secondary`. The canvas occupies the entire band and drifts/parallaxes on scroll.

### Footer

**`footer`** — Dense link grid on `{colors.canvas-deep}` (pure black).
- Background `{colors.canvas-deep}`, text `{colors.ink-subtle}`, 1px `{colors.hairline}` top border, type `{typography.caption}`, padding `{spacing.xxxl} {spacing.lg}`. Eyebrow column labels in `{typography.eyebrow}` (mono).

## Motion

Motion is the brand's centerpiece. The WebGL line-art and scroll choreography ARE the experience. All motion honors `prefers-reduced-motion` (canvas freezes to a static frame; drift/parallax disable).

### The WebGL Line-Art Background (primary motion system)

- **Renderer**: a full-viewport `<canvas>` initialized with `gl: true`, sized to viewport × device pixel ratio (DPR capped at 2 for perf). Painted on pure near-black `{colors.canvas}`.
- **What it draws**: intricate generative line-art — translucent **overlapping planes/panels** filled with thin hairline **wireframe** strokes; **contour / topographic fields**; torus-knot- and grid-like geometry. Strokes only, never solid fills.
- **Color**: low-opacity hairlines tinted from `{colors.line-art-cool}` (`#2a4a7a`) and `{colors.line-art-warm}` (`#5a3a2e`), with a baseline `{colors.line-art-faint}` near-white grid hum. Strokes **brighten at intersections** toward `{colors.line-art-bright}` (`#6ea0ff`) and, rarely, `{colors.line-art-ember}` (`#c97a52`).
- **Idle motion**: a slow continuous **drift** — the line-art rotates / advances on a low-frequency time loop (~0.02–0.05 units/frame), giving the surface a living, computational feel without distraction.
- **Scroll behavior**: the canvas **parallaxes** with scroll — layers move at differing rates (deeper wireframe layers slower, foreground planes faster), and stroke opacity / focal brightening shift with scroll progress. NOTE: in the production embed the page is viewed inside a dashboard iframe, so scroll is tracked via the iframe's scroll position (e.g. a `useScroll` bound to the iframe container), not the window.
- **Performance**: animate compositor-friendly properties only (`transform`, `opacity`); throttle frame rate and reduce stroke count on mobile; pause the render loop when the canvas is offscreen (IntersectionObserver). Landing JS budget is tight — lazy-load the WebGL module and gate it behind reduced-motion.

### Scroll Choreography (foreground content)

- **Reveal-on-enter**: section headlines and panels fade + rise (`opacity` 0→1, `translateY` 16–24px→0) as they enter the viewport, staggered by ~60–90ms within a group.
- **Line-art draw-on**: foreground wireframe accents in `line-art-panel` use an SVG/stroke **draw-on** (`stroke-dashoffset` animating to 0) when the panel enters view — echoing the contour aesthetic of patronus.ai-style topographic line shapes.
- **Panel parallax**: translucent panels translate a few px against the canvas drift, reinforcing the layered-glass depth.

### Micro-interactions

- **Buttons**: background color transition `{colors.primary}` → `{colors.primary-hover}` over ~150ms `ease-out`; pressed → `{colors.primary-pressed}` instantly.
- **Cards**: hover lifts surface tone (`surface-translucent` → slightly more opaque / `surface-2`) and brightens the top-edge hairline over ~200ms.
- **Focus**: 2px blue ring fades in over ~120ms.
- **Links**: `{colors.ink-muted}` → `{colors.ink}` color shift on hover; no underline-slide.

### Timing & Easing

- **Fast** (micro): ~150ms, `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo).
- **Normal** (reveals): ~300ms, ease-out.
- **Drift** (canvas): continuous, linear low-frequency loop.

### Reduced Motion

- Canvas freezes to a single rendered static frame (still shows the line-art, just no drift/parallax).
- Reveal-on-enter, draw-on, and parallax all disable; content renders in final position.

## Voice

- **Candid and engineering-first.** "Reliable AI has no shortcuts." "Most AI deployments in enterprise and government fail." Lead with the hard problem, not the hype.
- **Declarative, sentence-case, period-terminated headlines.** The period is part of the voice — these read as statements of fact, not slogans.
- **Technical taxonomy in mono.** Eyebrows and labels in the mono face signal a platform built by engineers.
- **Proof over adjectives.** Dense enterprise + government logo marquees and hard metrics (stat cards) carry credibility instead of superlatives.
- **Restraint as confidence.** One accent color, weight ceiling 600, no atmosphere-blur. The line-art does the talking.

## Do's and Don'ts

### Do

- Make the **full-viewport WebGL line-art canvas** the entire decorative system — sharp wireframe geometry, translucent overlapping planes, warm+cool hairline tints with intersection brightening.
- Reserve `{colors.canvas}` (`#060708`) as the anchor surface and `#000000` for footer + seams only.
- Use `{colors.primary}` cool-blue ONLY for: primary CTA, focus ring, link emphasis, brightest line-art stops.
- Use `{colors.surface-translucent}` panels so the line-art bleeds through — depth via translucency + hairline, not shadow.
- Pair display weight 600 with body 400; apply aggressive negative display tracking.
- Set eyebrows in the mono face with positive `+1.2px` tracking — the one positive-tracking exception.
- Write candid, declarative, period-terminated headlines.
- Honor `prefers-reduced-motion`: freeze the canvas, disable drift/parallax/reveals.
- Track scroll via the **iframe** scroll position in the dashboard embed, not the window.

### Don't

- **Don't fall back to blurred gradient color blobs / atmospheric orbs.** The whole point is sharp abstract line-art geometry, not soft glow.
- Don't ship a light-mode marketing page (the public marketing pivot notwithstanding — this system is the dark canvas).
- Don't introduce a second chromatic UI accent (pink, green, amber as chrome). Warm tones live ONLY inside the line-art.
- Don't add material drop-shadows or spotlight cards — depth is translucency + hairline + the layered canvas.
- Don't pill-round CTAs — CTAs are `{rounded.md}` 8px. Pill is for status badges only.
- Don't promote the geometric sans to weight 700+.
- Don't set body paragraphs in the mono face — mono is eyebrows + technical labels only.
- Don't let the WebGL render loop run unthrottled on mobile or offscreen — gate it, throttle it, lazy-load it.

## Iteration Guide

1. Focus on ONE component at a time and reference it by its `components:` token name.
2. When introducing a section, decide first whether it sits on a translucent panel (line-art bleeds through) or a solid `surface-1` panel.
3. Default body to `{typography.body}` at weight 400; eyebrows to the mono `{typography.eyebrow}`.
4. Treat the WebGL line-art as the protagonist — build the canvas system first, then layer translucent foreground.
5. Run `npx @google/design.md lint DESIGN.md` after edits.
6. Add new variants as separate component entries.
7. Treat cool-blue as scarce: CTA, focus, link, line-art focal brightening only.

## Known Gaps

- The public scale.com marketing surface has shifted toward a lighter, image-and-logo-heavy layout ("Reliable AI has no shortcuts."); this DESIGN.md documents Scale's signature **dark-canvas WebGL line-art** design language (the captured reference aesthetic and the explicit design target), not the current light marketing skin.
- The WebGL line-art palette (`line-art-*`) is generated at runtime; the hex values are disciplined estimates of the warm+cool tints, not declared CSS variables.
- Exact brand hex for the cool-blue accent and the custom display face are not publicly exposed; `#3d7fff` and `Scale Sans`/`Inter` are best-fit extractions/substitutes.
- Form error/validation styling and full dropdown/menu specs are not visible on the inspected surfaces.
- No CSS custom properties were exposed in the captured markup; tokens here are reconstructed from observed rendering.
```
```

Key notes on what I produced and why:

- **Read both example files** (linear.app, vercel) and matched the awesome-design-md format exactly: YAML frontmatter (`version: alpha`, `name`, rich one-paragraph `description`), then `colors:` / `typography:` / `rounded:` / `spacing:` / `components:` blocks, followed by the prose sections (Overview, Colors, Typography, Layout, Elevation & Depth, Shapes, Components, Do's/Don'ts, Iteration Guide, Known Gaps) plus a dedicated **Motion** and **Voice** section.
- **Live WebFetch on scale.com** returned the *current* public marketing skin, which has pivoted to light/white with logo-heavy social proof and the candid voice ("Reliable AI has no shortcuts.", "Most AI deployments in enterprise and government fail."). I folded the confirmed voice, restrained geometric sans, square-ish buttons, and customer-logo proof into the doc.
- **Grounded the system in the session's REFERENCE FINDINGS** (the dark near-black canvas + full-viewport WebGL `<canvas gl:true>` line-art / wireframe data-viz with translucent overlapping planes and warm+cool hairline tints) since that is the explicit design *target* the user wants to emulate. I flagged the light-skin/dark-language discrepancy transparently in **Known Gaps**.
- **MOTION section is the centerpiece** per the task: detailed the WebGL line-art renderer, idle drift, scroll parallax, draw-on contours, micro-interactions, timing/easing, and reduced-motion fallback — and noted the project-specific constraint that scroll is tracked via the **iframe** (matching the prod-build-in-dashboard context), plus the JS-budget / throttle / lazy-load perf guidance.

The full markdown document is in my response above (starts with the `---` frontmatter). No files were written to disk.