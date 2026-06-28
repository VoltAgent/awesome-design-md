---
version: alpha
name: Patronus-AI-design-analysis
description: "Patronus AI's web system is an elegant, research-lab dark interface built on a near-flat charcoal canvas (#181818), high-contrast off-white type, and a single electric periwinkle-violet accent (#7c6df2). The defining gesture is not color but line: abstract GSAP + ScrollTrigger CONTOUR / WIREFRAME shapes — concentric rounded-rectangle and torus-knot-like topographic line drawings — drawn in thin monochrome strokes that sit in section corners and draw-on, drift, and rotate as the page scrolls. Display type runs a bold, tightly-tracked geometric sans at large sizes; body settles into a measured neutral sans. The system reads as quiet, technical, and premium: minimal chrome, generous black space, line-based abstract geometry as the only decoration, and violet reserved for the brand mark, links, and the primary CTA. No gradient blobs, no atmospheric color washes — depth comes from layered translucent line art and scroll choreography."

colors:
  primary: "#7c6df2"
  on-primary: "#ffffff"
  primary-hover: "#9387f6"
  primary-pressed: "#6a5ae0"
  primary-soft: "#332f68"
  violet-tint: "#b3aaf9"
  canvas: "#181818"
  canvas-deep: "#0e0e0e"
  surface-1: "#1f1f1f"
  surface-2: "#262626"
  surface-3: "#2e2e2e"
  hairline: "#2a2a2a"
  hairline-strong: "#3a3a3a"
  line-art: "#4a4a4a"
  line-art-faint: "#303030"
  line-art-accent: "#5a4fb0"
  ink: "#f5f5f4"
  ink-muted: "#b8b8b6"
  ink-subtle: "#8a8a88"
  ink-tertiary: "#5e5e5c"
  inverse-canvas: "#ffffff"
  inverse-ink: "#181818"
  semantic-success: "#4fe3a1"
  semantic-overlay: "#000000"

typography:
  display-xl:
    fontFamily: Patronus Display
    fontSize: 88px
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: -2.6px
  display-lg:
    fontFamily: Patronus Display
    fontSize: 64px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -1.8px
  display-md:
    fontFamily: Patronus Display
    fontSize: 44px
    fontWeight: 600
    lineHeight: 1.10
    letterSpacing: -1.0px
  headline:
    fontFamily: Patronus Display
    fontSize: 30px
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: -0.6px
  card-title:
    fontFamily: Patronus Display
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: -0.3px
  subhead:
    fontFamily: Patronus Text
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: -0.1px
  body-lg:
    fontFamily: Patronus Text
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body:
    fontFamily: Patronus Text
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body-sm:
    fontFamily: Patronus Text
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0
  caption:
    fontFamily: Patronus Text
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  button:
    fontFamily: Patronus Text
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: 0
  eyebrow:
    fontFamily: Patronus Mono
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.30
    letterSpacing: 1.4px
  mono:
    fontFamily: Patronus Mono
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 6px
  md: 10px
  lg: 14px
  xl: 20px
  xxl: 28px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 64px
  section: 120px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 12px 22px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 12px 22px
  button-primary-pressed:
    backgroundColor: "{colors.primary-pressed}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 12px 22px
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 12px 22px
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.ink-muted}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 10px 16px
  announcement-bar:
    backgroundColor: "{colors.canvas-deep}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.caption}"
    height: 40px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
    height: 64px
  nav-dropdown:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    padding: 16px
  feature-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 32px
  product-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: 40px
  research-paper-row:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xs}"
    padding: 24px 0
  model-spec-card:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.mono}"
    rounded: "{rounded.md}"
    padding: 20px
  metric-callout:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.display-md}"
    rounded: "{rounded.xs}"
    padding: 0
  contour-shape:
    backgroundColor: transparent
    textColor: "{colors.line-art}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 0
  trust-logo-strip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 24px 0
  testimonial-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.lg}"
    padding: 40px
  pricing-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: 32px
  pricing-card-featured:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: 32px
  text-input:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 12px 14px
  text-input-focused:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 12px 14px
  cta-banner:
    backgroundColor: "{colors.canvas-deep}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    rounded: "{rounded.xxl}"
    padding: 80px
  footer:
    backgroundColor: "{colors.canvas-deep}"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 80px 32px
---

## Overview

Patronus AI's web presence is a research-lab dark interface that trades atmosphere for line work. The canvas is a near-flat charcoal `{colors.canvas}` (#181818) — not pure black, slightly warm — with off-white type (`{colors.ink}` #f5f5f4) carrying both display and body. The single chromatic accent is an electric periwinkle-violet, `{colors.primary}` (#7c6df2), reserved for the brand mark, link emphasis, the primary CTA, and the occasional metric callout. There is no second accent, no gradient blob, and no atmospheric color wash.

What makes the system distinctive is **motion-driven line geometry**. Patronus builds its backgrounds with **GSAP + ScrollTrigger** (no full-viewport WebGL canvas, no video) and decorates sections with **abstract contour / wireframe shapes** — concentric rounded-rectangle outlines and torus-knot-like topographic line drawings rendered in thin monochrome strokes (`{colors.line-art}` #4a4a4a, fading to `{colors.line-art-faint}` #303030). These shapes live in section corners and edges, and they animate on scroll: stroke draw-on (SVG `stroke-dashoffset`), slow parallax drift, and gentle rotation. They behave like topographic survey lines or signal-field contours — technical, elegant, never busy.

Display type runs a bold, tightly-tracked geometric sans at large sizes (88px hero, tracking -2.6px), settling into a measured neutral sans for body and a mono for eyebrows, model specs, and code. The page rhythm leans on generous black space, restrained card use, and scroll choreography rather than dense chrome. The current site framing — "**Simulating the World's Intelligence**", world models, generative simulators — pushes a frontier-research voice, but the visual language is the same disciplined dark + violet + line-art system.

**Key Characteristics:**
- **Warm-charcoal dark canvas** — `{colors.canvas}` (#181818), flat, no gradient wash.
- **Single periwinkle-violet accent** (`{colors.primary}` #7c6df2) — brand mark, links, primary CTA, metric numbers only.
- **GSAP + ScrollTrigger contour/wireframe line shapes** — concentric rounded forms and torus-knot topographic line art in section corners; draw-on + drift + rotate on scroll. This is the signature.
- Bold, tightly-tracked geometric-sans display (tracking pulls to -2.6px at 88px); neutral sans body.
- Mono used for eyebrows (uppercase, +1.4px tracking), model spec cards, and metrics.
- Pill-shaped CTAs in solid violet; secondary actions are outlined pills or plain links.
- Restrained card use; sections often separate by black space and a corner line-shape rather than panel boxing.
- Research-lab IA: products, models, papers, metrics, benchmarks — proof through numbers, not decoration.

## Colors

> Source pages: patronus.ai (home), /products, /research, /pricing, /about. Hex values are reconstructed from live captures (dark #181818 canvas, ~#7c6df2 violet accent); exact in-house tokens are proprietary.

### Brand & Accent
- **Periwinkle-Violet** (`{colors.primary}` #7c6df2): The signature Patronus accent — brand mark, primary CTA, link emphasis, active nav, metric numbers.
- **Violet Hover** (`{colors.primary-hover}` #9387f6): Lighter violet — hovered primary CTA.
- **Violet Pressed** (`{colors.primary-pressed}` #6a5ae0): Deeper violet — pressed/active CTA.
- **Violet Soft** (`{colors.primary-soft}` #332f68): Muted indigo — soft accent fills, selected chips, faint glow behind line art.
- **Violet Tint** (`{colors.violet-tint}` #b3aaf9): Pale lavender — small inline highlights, focus tints.
- **Line-Art Accent** (`{colors.line-art-accent}` #5a4fb0): Violet-tinted stroke for the rare highlighted contour shape near a CTA.

### Surface
- **Canvas** (`{colors.canvas}` #181818): Default page background — warm near-black, the system anchor.
- **Canvas Deep** (`{colors.canvas-deep}` #0e0e0e): Deeper black — announcement bar, footer, CTA banner.
- **Surface 1** (`{colors.surface-1}` #1f1f1f): One step above canvas — feature cards, product cards, nav dropdowns.
- **Surface 2** (`{colors.surface-2}` #262626): Two steps above — featured pricing card, model spec cards, hovered cards.
- **Surface 3** (`{colors.surface-3}` #2e2e2e): Three steps above — nested panels, inset code blocks.
- **Hairline** (`{colors.hairline}` #2a2a2a): 1px borders on cards and dividers.
- **Hairline Strong** (`{colors.hairline-strong}` #3a3a3a): Stronger 1px borders — input focus, hovered card edges.

### Line Art
- **Line Art** (`{colors.line-art}` #4a4a4a): Default stroke for contour/wireframe shapes.
- **Line Art Faint** (`{colors.line-art-faint}` #303030): Fading inner/outer rings, far-parallax contours.
- **Line Art Accent** (`{colors.line-art-accent}` #5a4fb0): Violet-tinted highlight stroke near focal CTAs.

### Text
- **Ink** (`{colors.ink}` #f5f5f4): Headlines and emphasized body — warm off-white.
- **Ink Muted** (`{colors.ink-muted}` #b8b8b6): Secondary type — lead paragraphs, nav links.
- **Ink Subtle** (`{colors.ink-subtle}` #8a8a88): Tertiary — captions, footer links, deselected items.
- **Ink Tertiary** (`{colors.ink-tertiary}` #5e5e5c): Quaternary — disabled, footnotes, watermark labels.

### Inverse
- **Inverse Canvas** (`{colors.inverse-canvas}` #ffffff): White — the rare light section or inverse CTA pill.
- **Inverse Ink** (`{colors.inverse-ink}` #181818): Dark text on the inverse surface.

### Semantic
- **Success Green** (`{colors.semantic-success}` #4fe3a1): Pass/verified indicators on evaluation results and status chips. The only non-violet chromatic.
- **Overlay** (`{colors.semantic-overlay}` #000000): Pure black scrim for modals and the menu overlay.

### Gradient System

Patronus deliberately avoids gradient blobs and atmospheric color fields — this is the brand's anti-template stance. Where any glow exists, it is a faint radial `{colors.primary-soft}` (#332f68) bloom behind a focal contour shape at very low opacity (≤12%), never a hero background wash. Keep UI surfaces flat; let the line art and scroll motion carry visual energy.

## Typography

### Font Family

- **Patronus Display** — bold geometric sans for headlines; recommended fallback `"Söhne", "Neue Haas Grotesk Display", "Inter", system-ui, -apple-system, "Segoe UI", sans-serif`. Carries display-xl through card-title.
- **Patronus Text** — neutral sans for body, subheads, buttons; fallback `"Inter", "Söhne", system-ui, -apple-system, "Segoe UI", sans-serif`. Carries subhead through body-sm, buttons, captions.
- **Patronus Mono** — monospace for eyebrows, model spec cards, metrics, and code; fallback `"Berkeley Mono", "JetBrains Mono", "Roboto Mono", ui-monospace, "SF Mono", Menlo, monospace`.

The display and text cuts read as one continuous voice; the family change between headline and body is silent. Mono is the deliberate counter-voice — it signals "system / research / measured value."

### Hierarchy

| Token | Font | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---:|---:|---:|---:|---|
| `{typography.display-xl}` | Patronus Display | 88px | 600 | 1.02 | -2.6px | Hero declaration ("Simulating the World's Intelligence") |
| `{typography.display-lg}` | Patronus Display | 64px | 600 | 1.05 | -1.8px | Section opener headlines |
| `{typography.display-md}` | Patronus Display | 44px | 600 | 1.10 | -1.0px | Sub-section headlines, CTA banner heading |
| `{typography.headline}` | Patronus Display | 30px | 600 | 1.18 | -0.6px | Product titles, pricing tier names |
| `{typography.card-title}` | Patronus Display | 22px | 500 | 1.25 | -0.3px | Feature card titles |
| `{typography.subhead}` | Patronus Text | 20px | 400 | 1.45 | -0.1px | Hero subhead, lead intro paragraphs |
| `{typography.body-lg}` | Patronus Text | 18px | 400 | 1.55 | 0 | Lead paragraphs, testimonial quotes |
| `{typography.body}` | Patronus Text | 16px | 400 | 1.55 | 0 | Default body |
| `{typography.body-sm}` | Patronus Text | 14px | 400 | 1.50 | 0 | Nav links, card body, footer columns |
| `{typography.caption}` | Patronus Text | 13px | 400 | 1.40 | 0 | Captions, meta, legal |
| `{typography.button}` | Patronus Text | 15px | 500 | 1.20 | 0 | All button labels |
| `{typography.eyebrow}` | Patronus Mono | 12px | 500 | 1.30 | 1.4px | Uppercase section eyebrows / kickers |
| `{typography.mono}` | Patronus Mono | 13px | 400 | 1.50 | 0 | Model spec cards, code, metric labels |

### Principles

- **Tight negative tracking on display** (-2.6px at 88px ≈ 3% of size) — headlines feel carved and confident.
- **Bold display, regular body.** Display sits at weight 600; body holds at 400. Patronus resists 700+ except in rare hero emphasis.
- **Mono is taxonomy.** Eyebrows render uppercase Patronus Mono with +1.4px positive tracking — the deliberate opposite of the negative-tracked display, marking labels as system metadata.
- **Numbers as headlines.** Benchmark metrics ("SOTA", "30–40% model lift", "20+ failure modes") are set large in display or violet metric callouts — the proof IS the typography.
- **Restraint at body scale.** Pages run one oversized declaration, then settle into 16–20px measured copy with generous leading.

### Note on Font Substitutes

Patronus's in-house cuts are not publicly distributed. For external implementation, **Inter** (weights 400 / 500 / 600) is the closest free substitute for both display and text; **Söhne** or **Neue Haas Grotesk** are the premium paid matches for the display voice. For mono, **JetBrains Mono** or **Berkeley Mono** at 400 closely approximate the spec cadence.

## Layout

### Spacing System

- **Base unit**: 4px.
- **Tokens (front matter)**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 40px · `{spacing.xxl}` 64px · `{spacing.section}` 120px.
- Feature/product card interior padding: `{spacing.xl}` 40px (product), 32px (feature).
- Section rhythm is large: `{spacing.section}` 120px between major sections — Patronus uses black space as a trust signal.
- Pill button padding: 12px vertical · 22px horizontal.
- Form input padding: 12px vertical · 14px horizontal.

### Grid & Container

- Max content width sits around 1200–1280px, centered.
- Top nav uses a three-zone layout: wordmark left, dropdown menu (Products · Research · Use Cases · News · Resources · About) centered, "Login" / "Contact us" CTA right.
- Hero is centered: oversized display declaration, a single subhead line, one or two CTAs, with a contour line-shape anchored to a corner of the viewport behind/beside the text.
- Product sections alternate centered hero blocks, single large feature bands, and 2–3-up card grids.
- Research pages use full-width rule-separated paper rows (title left, venue/date right, "View paper" link).
- Metrics appear as inline violet callouts or 3–4-up stat rows.

### Whitespace Philosophy

The dark canvas IS the whitespace. Sections separate by large vertical intervals (120px) and a single corner contour shape rather than by boxed panels. Dense content appears only where the information architecture demands it: model spec cards, research paper lists, pricing comparison rows. The hero often holds one declaration in a field of near-empty charcoal, with line art drifting at the edges.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow, no border, on `{colors.canvas}` | Hero text, body copy, footer, research rows |
| 1 (line-art depth) | Translucent contour/wireframe SVG strokes at section edges | The signature depth layer — corner shapes, drifting parallax |
| 2 (surface lift) | `{colors.surface-1}` background, 1px `{colors.hairline}` | Feature cards, product cards, nav dropdowns |
| 3 (surface-2 lift) | `{colors.surface-2}` background, 1px `{colors.hairline-strong}` | Featured pricing card, model spec cards, hovered cards |
| 4 (focus ring) | 2px `{colors.primary}` outline at ~60% opacity | Focused input, focused button |

Patronus's depth is carried by **layered translucent line art + surface ladder**, not drop shadows. Shadows are essentially absent on the dark canvas. A focal contour shape may sit on top of, behind, and partly clipped by a card — the overlap of strokes and surfaces creates the sense of layered planes.

### Decorative Depth

- **Contour / wireframe line shapes** are the entire decorative-depth system. They are SVG line drawings — concentric rounded-rectangles, nested ovals, and torus-knot / topographic forms — stroked at 1–1.5px in `{colors.line-art}`, with inner/outer rings fading to `{colors.line-art-faint}`.
- A faint `{colors.primary-soft}` radial bloom may sit behind a focal shape at ≤12% opacity — the only "glow."
- **No gradient blobs, no atmospheric washes, no spotlight cards.** The corner line art replaces all of them.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| `{rounded.xs}` | 4px | Chips, status pills body, small inset elements |
| `{rounded.sm}` | 6px | Inline tags, code tokens |
| `{rounded.md}` | 10px | Form inputs, model spec cards |
| `{rounded.lg}` | 14px | Feature cards, nav dropdowns, testimonial cards |
| `{rounded.xl}` | 20px | Product cards, pricing cards |
| `{rounded.xxl}` | 28px | Oversized CTA banner |
| `{rounded.pill}` | 9999px | All CTAs, toggle pills, status chips |
| `{rounded.full}` | 9999px | Avatar circles, dot indicators |

### Line-Art & Illustration Geometry

- **Contour shapes** are the dominant illustration. Their geometry echoes the radius scale: concentric *rounded-rectangle* contours (radius stepping outward in `{rounded.lg}`→`{rounded.xxl}` increments) and *torus-knot / topographic* closed loops. Strokes are thin (1–1.5px), monochrome, evenly nested like a survey map or a signal-field plot.
- Buttons and chips are fully pill-shaped (`{rounded.pill}`) — a soft, modern counterpoint to the precise line art.
- Cards use `{rounded.lg}` 14px (feature) and `{rounded.xl}` 20px (product/pricing) — generous but not cute.
- Avatars and dot indicators use `{rounded.full}`.

## Motion

> Motion is the heart of the Patronus aesthetic. The engine is **GSAP + ScrollTrigger** (no WebGL canvas, no video background). The protagonist is abstract **contour / wireframe line art** that draws on, drifts, and rotates as the page scrolls. Honor `prefers-reduced-motion` — when reduced, render every shape in its final drawn state, disable scroll-tied transforms, and keep only instant opacity.

### Motion Principles

- **Line art, not color, is the moving element.** Sections are anchored by topographic contour shapes (concentric rounded-rectangles, nested ovals, torus-knot loops) that respond to scroll. This replaces gradient parallax entirely.
- **Scroll-choreographed, not loop-animated.** Almost all motion is tied to scroll progress via ScrollTrigger `scrub`, not autonomous loops. Motion clarifies position in the page; it does not distract.
- **Compositor-friendly only.** Animate `transform` (translate / rotate / scale) and `opacity`; animate SVG `stroke-dashoffset` for draw-on. Never animate layout-bound properties.
- **Slow and restrained.** Drifts are subtle (tens of pixels over a full section), rotations are small (a few degrees), durations long. Premium = unhurried.

### Signature Motions

| Name | Trigger | Behavior |
|---|---|---|
| `contourDrawOn` | Section enters viewport | SVG contour strokes animate `stroke-dashoffset` from full length to 0 — the topographic shape "draws itself" over ~0.8–1.2s ease-out. |
| `contourDrift` | Scroll progress (scrub) | The corner shape parallax-drifts (translateX/Y by 20–60px) at a slower rate than the foreground content, creating layered depth. |
| `contourRotate` | Scroll progress (scrub) | Torus-knot / concentric loops rotate slowly (±4–8°) across the section's scroll range. |
| `contourFade` | Section enter/exit | Inner/outer rings cross-fade between `{colors.line-art}` and `{colors.line-art-faint}` as the shape moves toward/away from focus. |
| `headlineRise` | Hero/section enter | Display headline rises ~16px with opacity 0→1, words/lines staggered ~40–60ms; ease `cubic-bezier(0.16,1,0.3,1)`. |
| `metricCount` | Stat row enters | Violet metric numbers count up to their final value (e.g. 0 → 20+ failure modes) over ~1s, paired with a faint `{colors.primary-soft}` bloom. |
| `ctaGlowPulse` | Primary CTA hover | Background shifts `{colors.primary}` → `{colors.primary-hover}`; a very subtle violet ring expands once (≤200ms). |

### Implementation Notes

- Register `gsap.registerPlugin(ScrollTrigger)`. Use `scrub: true` (or a small number for smoothing) for drift/rotate; use one-shot `toggleActions` for draw-on and headline rise.
- Author contour shapes as inline SVG `<path>`s; set `pathLength` normalization and animate `stroke-dashoffset` for the draw-on. Keep stroke widths in `{colors.line-art}` / `{colors.line-art-faint}`.
- Pin sparingly. Most sections use scrub transforms without `pin`; reserve pinning for a single hero or a one-feature showcase.
- Gate everything behind `window.matchMedia('(prefers-reduced-motion: reduce)')` — if reduced, kill ScrollTriggers, show final states, and skip the metric count-up (render final value directly).
- Keep the JS budget lean: dynamically import GSAP/ScrollTrigger, and limit concurrent ScrollTriggers to the shapes actually in view.

## Components

### Buttons

**`button-primary`** — Solid violet pill CTA. The default primary action ("Contact us", "Get started", "Book a call").
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button}`, padding 12px 22px, rounded `{rounded.pill}`.
- Hover → `button-primary-hover` (`{colors.primary-hover}` + faint ring); pressed → `button-primary-pressed` (`{colors.primary-pressed}`).

**`button-secondary`** — Outlined pill. Secondary CTAs ("Read more", "Login in App").
- Transparent background, text `{colors.ink}`, 1px `{colors.hairline-strong}` border, type `{typography.button}`, padding 12px 22px, rounded `{rounded.pill}`. Hover lifts border to `{colors.primary}`.

**`button-ghost`** — Plain text/link action ("View paper", "Learn more"), often with a chevron.
- Transparent, text `{colors.ink-muted}` → `{colors.ink}` on hover, type `{typography.button}`, padding 10px 16px, rounded `{rounded.pill}`.

### Navigation

**`top-nav`** — Sticky dark bar: Patronus wordmark left, centered dropdown menu (Products · Research · Use Cases · News · Resources · About Us), `button-ghost` ("Login") + `button-primary` ("Contact us") right.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-sm}`, height 64px. Chevron indicators on dropdown items.

**`nav-dropdown`** — Mega-dropdown for Products (Core Platform · Percival · RL Envs) and Resources.
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.body-sm}`, rounded `{rounded.lg}`, padding 16px. 1px `{colors.hairline}` border; each item has an icon, label, and one-line description.

**`announcement-bar`** — Full-width strip above the nav for launches/news.
- Background `{colors.canvas-deep}`, text `{colors.ink-muted}`, type `{typography.caption}`, height 40px, with an underlined "Learn more" link.

### Cards & Containers

**`feature-card`** — Generic feature/capability tile.
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.lg}`, padding 32px. 1px `{colors.hairline}` border; often paired with a small corner contour fragment.

**`product-card`** — Larger tile for products (Platform, Percival, World Models).
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.xl}`, padding 40px. Title in `{typography.headline}`, a `button-ghost` link, and a contour shape anchored to a corner.

**`model-spec-card`** — Mono-typed card for model details (Lynx, Glider, Percival, GLIDER, BLUR, FinanceBench).
- Background `{colors.surface-2}`, text `{colors.ink}`, type `{typography.mono}`, rounded `{rounded.md}`, padding 20px. Lists params ("3B evaluator LLM"), task ("hallucination detection"), and a metric.

**`testimonial-card`** — Quote with attribution.
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.body-lg}`, rounded `{rounded.lg}`, padding 40px. Avatar circle (`{rounded.full}`) + name + role.

**`cta-banner`** — Closing CTA panel near page bottom.
- Background `{colors.canvas-deep}`, text `{colors.ink}`, type `{typography.display-md}`, rounded `{rounded.xxl}`, padding 80px. Houses a large contour shape and the primary CTA.

### Research & Metrics

**`research-paper-row`** — Each row on /research: paper title left, venue/date right, "View paper" `button-ghost`.
- Transparent background, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.xs}`, padding 24px 0. 1px `{colors.hairline}` bottom rule.

**`metric-callout`** — Oversized violet number for benchmark proof ("20+ failure modes", "30–40% model lift", "SOTA").
- Transparent, text `{colors.primary}`, type `{typography.display-md}`, with a `{typography.eyebrow}` mono label beneath. Animated by `metricCount`.

**`contour-shape`** — The signature decorative SVG line drawing.
- Transparent fill, stroke `{colors.line-art}` (fading to `{colors.line-art-faint}`), 1–1.5px. Concentric rounded-rectangle / torus-knot geometry. Animated by `contourDrawOn` / `contourDrift` / `contourRotate`. Placed in section corners and edges, never centered behind text at full opacity.

### Social Proof

**`trust-logo-strip`** — Quiet row of monochrome customer/partner logos.
- Background `{colors.canvas}`, text `{colors.ink-subtle}`, type `{typography.caption}`, padding 24px 0. No cards, no borders — wide horizontal spacing, logos at ~24px height in `{colors.ink-subtle}`.

### Pricing

**`pricing-card`** — Each tier (Developer · Enterprise; legacy Individual / Base / Enterprise).
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.xl}`, padding 32px. Tier name in `{typography.headline}`, price emphasized, checkmark rows in `{colors.semantic-success}`, a `button-primary` ("Get started" / "Book a call").

**`pricing-card-featured`** — Recommended tier — surface lift to surface-2.
- Background `{colors.surface-2}`, 1px `{colors.primary}` border at ~40% opacity, otherwise identical structure.

### Inputs & Forms

**`text-input`** + **`text-input-focused`** — Contact/demo form fields.
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.md}`, padding 12px 14px. 1px `{colors.hairline}` border.
- Focused: border lifts to `{colors.hairline-strong}` with a 2px `{colors.primary}` outline at ~60% opacity.

### Footer

**`footer`** — Dense link grid on `{colors.canvas-deep}` with the Patronus wordmark and two decorative corner line shapes (footer_left-shape / footer_right-shape).
- Background `{colors.canvas-deep}`, text `{colors.ink-subtle}`, type `{typography.caption}`, padding 80px 32px. Column labels in `{colors.ink}`; links in `{colors.ink-subtle}` → `{colors.ink}` on hover.

## Voice

Patronus writes like a frontier research lab that ships infrastructure, not a SaaS vendor. The register is confident, scientific, and forward-looking.

- **Declarative and visionary at the top.** Hero copy makes a single large claim: "Simulating the World's Intelligence" / "Patronus AI develops simulation research and infrastructure to accelerate progress toward human-aligned AGI." Quotes from frontier figures (e.g. Tim Sweeney on simulating reality) frame ambition.
- **Proof through numbers.** Body copy leans on quantified, peer-reviewed credibility: "SOTA hallucination detection model," "20+ failure modes," "3B evaluator LLM," "30–40% model lift." Metrics carry the persuasion.
- **Product-precise.** Named products and models (Platform, Percival, World Models, Lynx, Glider, GLIDER, BLUR, FinanceBench) are described in exact functional terms ("evaluation copilot for agentic systems," "centralized solution for experiments, logging, comparisons, and traces").
- **Restrained CTAs.** Actions are plain and few: "Contact us," "Get started," "Book a call," "Read more," "View paper," "Login."
- **No hype filler.** Avoid exclamation, marketing superlatives, and emoji. Let the line art, the numbers, and the named research do the work.

## Do's and Don'ts

### Do

- Anchor the system on `{colors.canvas}` (#181818) warm charcoal — flat, never washed.
- Reserve `{colors.primary}` violet (#7c6df2) for: brand mark, primary CTA, links, focus rings, metric numbers.
- Make abstract **contour / wireframe line shapes** the signature decoration — concentric rounded forms and topographic loops in section corners.
- Drive motion with **GSAP + ScrollTrigger**, scrubbed to scroll: draw-on, drift, rotate.
- Animate only `transform`, `opacity`, and SVG `stroke-dashoffset`.
- Set display large and tightly tracked (-2.6px at 88px); use mono for eyebrows and specs.
- Use pill CTAs; let secondary actions be outlined pills or plain links.
- Separate sections with black space and a corner line-shape, not heavy panels.
- Honor `prefers-reduced-motion`: show final drawn states, disable scroll transforms.

### Don't

- Don't ship gradient blobs or atmospheric color washes — that is the explicitly rejected pattern.
- Don't introduce a second chromatic accent (orange, pink, teal) beyond the success green.
- Don't use violet as a large surface fill or section background.
- Don't add drop shadows on the dark canvas.
- Don't animate layout-bound properties (width, height, top, margin) on scroll.
- Don't loop-animate the line art autonomously — tie it to scroll.
- Don't center a contour shape at full opacity behind body text (it competes with reading).
- Don't replace the display/text/mono split with one generic sans.
- Don't ship a light-mode marketing page as default.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Desktop-XL | 1440px+ | Full layout; large corner contour shapes; full section spacing |
| Desktop | 1280px | Card grids 3-up; centered nav menu maintained |
| Tablet | 1024px | Card grids 3-up → 2-up; contour shapes scale down and move toward edges |
| Mobile-Lg | 768px | Nav collapses to hamburger; pricing comparison becomes accordion; 2-up → 1-up |
| Mobile | 480px | Single column; `display-xl` 88px scales toward ~40px; contour shapes reduce to a single small corner accent |

### Touch Targets

- Pill CTAs hold ≥44px tap height across viewports (12px vertical padding + 15px line).
- Nav dropdown items hold ≥44px tap rows on touch.
- Form inputs hold ≥44px tap target.

### Collapsing Strategy

- **Top nav**: centered dropdown menu collapses to a full-screen overlay menu below 768px.
- **Card grids**: 3-up → 2-up at 1024px → 1-up below 768px.
- **Contour shapes**: reduce in count and size as width drops; on mobile, keep at most one small corner shape per section to protect the JS budget and avoid clutter.
- **Display type**: `{typography.display-xl}` 88px scales toward `{typography.display-md}` 44px on mobile.
- **Pricing comparison**: per-tier accordion below 768px.

### Image / Motion Behavior

- Contour SVGs are resolution-independent; scale them down rather than cropping.
- On mobile, prefer `contourDrawOn` (one-shot) over `contourDrift`/`contourRotate` (scrub) to reduce scroll-jank on lower-powered devices.
- Reduce concurrent ScrollTriggers on narrow viewports; lazy-init shapes only when their section nears the viewport.

## Iteration Guide

1. Focus on ONE component at a time and reference it by its `components:` token name.
2. Start every section from `{colors.canvas}` (#181818); decide which corner gets a `contour-shape` before adding content.
3. Default body to `{typography.body}` at weight 400; reserve display for the single section headline.
4. Treat violet as scarce: brand mark, primary CTA, links, focus, metric numbers — nothing else.
5. Author motion with GSAP + ScrollTrigger; default contour shapes to `contourDrawOn` + `contourDrift`, and always wire the `prefers-reduced-motion` fallback.
6. Use `metric-callout` for benchmark proof instead of decorative graphics — the numbers are the design.
7. Add new variants as separate component entries; keep examples structurally honest (placeholder model frames over invented product data).
8. Run `npx @google/design.md lint DESIGN.md` after edits.

## Known Gaps

- Exact in-house token values (hex, font names) are proprietary; colors here are reconstructed from live captures — `{colors.canvas}` #181818 and `{colors.primary}` ~#7c6df2 are confirmed by inspection, the surface ladder and line-art grays are interpolated to match the observed dark system.
- The site is mid-evolution toward a "world models / simulation" framing ("Simulating the World's Intelligence"); product names (Platform, Percival, World Models, RL Envs) and research models (Lynx, Glider, GLIDER, BLUR, FinanceBench) are current as captured, but the IA shifts frequently.
- Form error/validation styling is not visible on the inspected pages and is documented from the dark-system focus pattern.
- Display, text, and mono families are proprietary; the documented fallbacks (Inter / Söhne / JetBrains Mono) are recommended open or paid substitutes.
- Light mode is not documented because the marketing site ships dark by default.
- GSAP + ScrollTrigger usage and the contour/wireframe motion vocabulary are captured from live runtime behavior; exact easing curves and durations are inferred to match the observed restrained, scroll-scrubbed feel.