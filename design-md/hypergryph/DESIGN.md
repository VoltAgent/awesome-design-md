---
version: alpha
name: Hypergryph-Inspired-design-analysis
description: An inspired interpretation of Hypergryph's cross-site design language (hypergryph.com, Arknights CN/Global, Endfield, Monster Siren Records, Terra Historicus) — a dark-industrial system where black and gunmetal carry structure, cyan and hazard-yellow carry state and intent, and cinematic media surfaces are constrained by strict modular geometry.

colors:
  primary-cyan: "#18d1ff"
  primary-cyan-deep: "#06bbff"
  primary-cyan-soft: "#a0edff"
  signal-yellow: "#fffa00"
  signal-yellow-soft: "#f3ff00"
  signal-neon-green: "#00ffa2"
  signal-magenta: "#ff1aac"
  signal-crimson: "#b0243b"
  canvas: "#000000"
  canvas-deep: "#0b0d10"
  canvas-soft: "#191919"
  canvas-panel: "#1d1f20"
  surface-elev: "#242424"
  surface-muted: "#35373c"
  steel-600: "#585858"
  steel-500: "#696969"
  steel-400: "#929292"
  steel-300: "#ababab"
  steel-200: "#c6c9ce"
  steel-100: "#d4d8dd"
  ink: "#ffffff"
  ink-soft: "#e6e6e6"
  ink-muted: "#b2b2b2"
  hairline: "#2e3238"
  hairline-soft: "#434343"
  on-primary: "#000000"

typography:
  display-xxl:
    fontFamily: "Bender-Bold, Geometos, 'Source Han Sans', 'Noto Sans CJK SC', system-ui, sans-serif"
    fontSize: 112px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0
  display-xl:
    fontFamily: "Bender-Bold, Geometos, 'Source Han Sans', 'Noto Sans CJK SC', system-ui, sans-serif"
    fontSize: 80px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0
  display-lg:
    fontFamily: "Bender-Bold, Novecentosanswide-Bold, 'Source Han Sans', system-ui, sans-serif"
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: 0
  display-md:
    fontFamily: "SourceHanSans-Bold, 'Source Han Sans', 'Noto Sans CJK SC', system-ui, sans-serif"
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: 0
  heading-lg:
    fontFamily: "SourceHanSans-Bold, 'Source Han Sans', 'Noto Sans CJK SC', system-ui, sans-serif"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: 0
  heading-md:
    fontFamily: "SansBold, SourceHanSans-Bold, 'Source Han Sans', system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  heading-sm:
    fontFamily: "SansMedium, SourceHanSans-Medium, 'Source Han Sans', system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0
  body-lg:
    fontFamily: "SansRegular, SourceHanSans-Regular, 'Source Han Sans', 'Noto Sans CJK SC', system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body-md:
    fontFamily: "SansRegular, SourceHanSans-Regular, 'Source Han Sans', 'Noto Sans CJK SC', system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: "SansRegular, SourceHanSans-Regular, 'Source Han Sans', 'Noto Sans CJK SC', system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  label-ui:
    fontFamily: "Oswald-Medium, Novecentosanswide-DemiBold, SourceHanSans-Medium, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.08em
  button-md:
    fontFamily: "SansMedium, SourceHanSans-Medium, 'Source Han Sans', system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: 0.02em
  caption:
    fontFamily: "SansRegular, SourceHanSans-Regular, 'Source Han Sans', system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 6px
  lg: 8px
  xl: 12px
  xxl: 16px
  pill: 9999px
  circle: 50%

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  3xl: 40px
  4xl: 48px
  5xl: 64px
  6xl: 80px
  7xl: 112px

components:
  page-shell:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    padding: "{spacing.4xl} {spacing.xl}"
  section-industrial:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    padding: "{spacing.5xl} {spacing.xl}"
  nav-bar-dark:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.label-ui}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.xl}"
  nav-link:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-soft}"
    typography: "{typography.label-ui}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.sm}"
  nav-link-active:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary-cyan}"
    typography: "{typography.label-ui}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.sm}"
  button-primary-cyan:
    backgroundColor: "{colors.primary-cyan}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.xl}"
  button-primary-yellow:
    backgroundColor: "{colors.signal-yellow}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.xl}"
  button-outline-dark:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.steel-500}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.xl}"
  button-ghost:
    backgroundColor: "rgba(255,255,255,0.04)"
    textColor: "{colors.ink-soft}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.xl}"
  hero-cinematic:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: "{spacing.6xl} {spacing.xl}"
  hero-video-frame:
    backgroundColor: "{colors.canvas-panel}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline-soft}"
    typography: "{typography.caption}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  tactical-overlay-chip:
    backgroundColor: "rgba(0,0,0,0.68)"
    textColor: "{colors.primary-cyan-soft}"
    borderColor: "{colors.primary-cyan}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.sm}"
  card-ops:
    backgroundColor: "{colors.surface-elev}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  card-lore:
    backgroundColor: "{colors.canvas-panel}"
    textColor: "{colors.ink-soft}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  card-music:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.steel-100}"
    borderColor: "{colors.steel-500}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  card-comic-cover:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.signal-crimson}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xl}"
    padding: "{spacing.sm}"
  modal-sheet:
    backgroundColor: "{colors.surface-elev}"
    textColor: "{colors.ink}"
    borderColor: "{colors.steel-500}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xxl}"
    padding: "{spacing.xl}"
  form-input-dark:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.steel-500}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"
  status-pill-live:
    backgroundColor: "{colors.signal-neon-green}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  status-pill-alert:
    backgroundColor: "{colors.signal-magenta}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  footer-dark:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-muted}"
    borderColor: "{colors.hairline}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "{spacing.3xl} {spacing.xl}"

  # ─── Examples (illustrative) — kit-mirror demonstration surfaces ───
  ex-pricing-tier:
    description: "Default pricing tier uses tactical dark card chrome with cyan metadata."
    backgroundColor: "{colors.surface-elev}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: "Featured pricing tier receives signal-yellow action strip and stronger border."
    backgroundColor: "{colors.canvas-panel}"
    textColor: "{colors.ink}"
    borderColor: "{colors.signal-yellow}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-product-selector:
    description: "Game mode selector: segmented tabs with cyan-active rule and low-contrast inactive text."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  ex-cart-drawer:
    description: "Purchase/pack summary panel with hard dark surfaces and compact utility rows."
    backgroundColor: "{colors.canvas-panel}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: "In-app sidebar row with active cyan edge marker and muted baseline text."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary-cyan}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
  ex-data-table-cell:
    description: "Tactical data table cell with compressed labels and steel dividers."
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.label-ui}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.sm} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: "Login/register surface in dark shell with subtle steel edge."
    backgroundColor: "{colors.surface-elev}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: "System modal with rounded frame and heavy backdrop."
    backgroundColor: "{colors.surface-elev}"
    rounded: "{rounded.xxl}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: "Lore-empty state with muted copy and optional cyan action button."
    backgroundColor: "{colors.canvas-panel}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xxl}"
    captionTypography: "{typography.body-sm}"
  ex-toast:
    description: "Compact toast with colored state strip and high readability."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body-sm}"

---

## Overview

Hypergryph's public web ecosystem is not one site but a coherent **franchise design platform** spanning corporate, game, music, and comic surfaces:

- Corporate: `https://www.hypergryph.com/`
- Arknights CN: `https://ak.hypergryph.com/`
- Arknights Endfield: `https://endfield.hypergryph.com/`
- Monster Siren Records: `https://monster-siren.hypergryph.com/`
- Terra Historicus: `https://comic.hypergryph.com/`
- Arknights Global: `https://www.arknights.global/`

The core system is dark-native. Black (`{colors.canvas}`) and deep graphite (`{colors.canvas-soft}` / `{colors.canvas-panel}`) are treated as the default medium rather than a "dark mode variant". Accent color is semantic: cyan for tactical interaction and information (`{colors.primary-cyan}`), yellow for urgency and major calls-to-action (`{colors.signal-yellow}`), and occasional high-energy pink/green for event states (`{colors.signal-magenta}`, `{colors.signal-neon-green}`).

Visual language fuses game HUD grammar with premium cinematic marketing: segmented frames, dense overlays, label-first navigation, hard surface boundaries, and high-resolution media heroes. The result feels engineered and narrative at the same time: interface chrome from tactical UI, pacing from film trailer landing pages.

**Key Characteristics:**
- Dark industrial shells are default and persistent across all sub-brands.
- Cyan/yellow are functional signals, not decoration.
- Type system is multilingual and utility-heavy (`Source Han Sans` + `Bender`/`Geometos`/`Novecento` families).
- Geometry stays strict: low radius, angular composition, modular blocks.
- Media is hero-grade (large banners, cinematic video, character art) but framed by disciplined UI scaffolding.

## Colors

### Core Structural Palette
- **Canvas Black** (`{colors.canvas}` — `#000000`): global base.
- **Deep Charcoal** (`{colors.canvas-deep}` — `#0b0d10`): section underlayer.
- **Panel Charcoal** (`{colors.canvas-panel}` — `#1d1f20`): card and shell interiors.
- **Elevated Dark** (`{colors.surface-elev}` — `#242424`): raised utility surfaces.
- **Industrial Gray** (`{colors.surface-muted}` — `#35373c`): muted rails and control strips.

### Signal Palette
- **Tactical Cyan** (`{colors.primary-cyan}` — `#18d1ff`): active nav, interaction focus, data highlight.
- **Deep Cyan** (`{colors.primary-cyan-deep}` — `#06bbff`): pressed/hover states and denser callouts.
- **Cyan Soft** (`{colors.primary-cyan-soft}` — `#a0edff`): overlays and readable thin labels.
- **Hazard Yellow** (`{colors.signal-yellow}` — `#fffa00`): key CTA, chapter callouts, urgency.
- **Signal Lime** (`{colors.signal-yellow-soft}` — `#f3ff00`): supporting yellow highlight.
- **Neon Green** (`{colors.signal-neon-green}` — `#00ffa2`): success/live marker.
- **Signal Magenta** (`{colors.signal-magenta}` — `#ff1aac`): event/special state.
- **Crimson Story Accent** (`{colors.signal-crimson}` — `#b0243b`): comic/arc branding cue.

### Text + Lines
- **White Ink** (`{colors.ink}` — `#ffffff`): high-contrast headline and controls.
- **Soft White** (`{colors.ink-soft}` — `#e6e6e6`): body text on dark surfaces.
- **Muted Ink** (`{colors.ink-muted}` — `#b2b2b2`): supporting metadata.
- **Steel Scale** (`{colors.steel-100}` to `{colors.steel-600}`): separators, labels, secondary controls.
- **Hairline** (`{colors.hairline}` — `#2e3238`): primary border logic.

## Typography

Hypergryph's typography is a **hybrid multilingual utility stack**:

1. **CJK body backbone**: Source Han Sans variants (`Regular/Medium/Bold`) for dense Chinese UI copy and stable cross-device legibility.
2. **Display/mechanical layer**: Bender, Geometos, and Novecento-style families for tactical, game-facing, and chapter headings.
3. **Localized alternates**: Oswald/Gilroy style utility faces in English and Endfield event surfaces.

| Token | Size | Weight | Line Height | Role |
|---|---:|---:|---:|---|
| `{typography.display-xxl}` | 112px | 700 | 1.0 | Hero cinematic title frames. |
| `{typography.display-xl}` | 80px | 700 | 1.0 | Main launch title tier. |
| `{typography.display-lg}` | 56px | 700 | 1.05 | Page chapter headlines. |
| `{typography.display-md}` | 40px | 700 | 1.1 | Feature section landmarks. |
| `{typography.heading-lg}` | 32px | 700 | 1.15 | Card group headers. |
| `{typography.heading-md}` | 24px | 700 | 1.2 | Content block titles. |
| `{typography.heading-sm}` | 20px | 500 | 1.25 | Subheaders. |
| `{typography.body-lg}` | 18px | 400 | 1.55 | Intro copy. |
| `{typography.body-md}` | 16px | 400 | 1.6 | Standard body text. |
| `{typography.body-sm}` | 14px | 400 | 1.55 | Secondary detail. |
| `{typography.label-ui}` | 14px | 500 | 1.2 | Upper-utility labels/nav tags. |
| `{typography.caption}` | 12px | 400 | 1.4 | Meta/time/state details. |

### Typographic Principles
- Keep display families for **titles and tactical markers only**.
- Use Source Han Sans variants for all paragraph and functional UI text.
- Avoid decorative italics and script behavior; voice is **precise, mission-like, cinematic**.
- Let spacing and contrast create hierarchy before color overload.

## Layout

### Spatial Grammar
- Grid is modular, with strong horizontal bands and card clusters.
- Common shell density: 1200–1440 px centered content zone with dark full-bleed background.
- Vertical rhythm uses larger jumps (`{spacing.4xl}` to `{spacing.7xl}`) between narrative chapters.
- Utility rows and metadata lanes stay compact (`{spacing.xs}` to `{spacing.md}`).

### Media-First Framing
- Hero regions reserve substantial viewport depth for artwork/video.
- Interactive overlays are anchored to corners or baseline rails instead of free-floating.
- Decorative noise is controlled: lines, dots, and markers should explain structure, not just decorate.

### Composition Behavior
- Desktop: cinematic hero + tactical side modules.
- Tablet: modules reflow into stacked chapter blocks while preserving priority order.
- Mobile: simplified overlays, tighter card spacing, larger tap areas, retained dark contrast.

## Elevation & Depth

| Level | Treatment | Usage |
|---|---|---|
| Level 0 | Flat black/charcoal fill | Page shell and chapter backdrops. |
| Level 1 | 1px hairline border | Default card and nav segmentation. |
| Level 2 | Low-contrast shadow + brighter edge | Active cards and modals. |
| Level 3 | Heavy cinematic overlay (`rgba(0,0,0,0.65+)`) | Video hero captions and tactical HUD overlays. |

Depth in this system is less about soft shadows and more about **layer contracts**: hard borders, overlay opacity, and selective accent edges.

## Shapes

| Token | Value | Role |
|---|---:|---|
| `{rounded.none}` | 0px | Rails, tactical slabs, chapter strips. |
| `{rounded.xs}` | 2px | Micro chips and icon housings. |
| `{rounded.sm}` | 4px | Buttons and compact controls. |
| `{rounded.md}` | 6px | Inputs and compact media frames. |
| `{rounded.lg}` | 8px | Standard cards. |
| `{rounded.xl}` | 12px | Feature/media cards. |
| `{rounded.xxl}` | 16px | Dialog and high-elevation surfaces. |
| `{rounded.pill}` | 9999px | Status pills only. |
| `{rounded.circle}` | 50% | Circular icon treatment. |

Default profile is angular-to-tight. Large rounding should be rare and purposeful.

## Components

### Navigation
- **`nav-bar-dark`**: black shell + thin divider + uppercase utility label style.
- **`nav-link-active`**: cyan emphasis, no noisy underline stacks.

### Actions
- **`button-primary-cyan`**: tactical primary for information paths.
- **`button-primary-yellow`**: major progression and event promotion.
- **`button-outline-dark`**: neutral route with steel border.

### Surfaces
- **`card-ops`**: functional information card with tight hierarchy.
- **`card-lore`**: narrative panel with slightly softer text contrast.
- **`card-music`**: restrained gallery card (Monster Siren style).
- **`card-comic-cover`**: image-forward frame with crimson edge signal.

### Media + Overlays
- **`hero-video-frame`**: cinematic viewport with bounded frame.
- **`tactical-overlay-chip`**: compact HUD-like metadata chip.

### Form + Feedback
- **`form-input-dark`**: muted dark input with solid readability.
- **`status-pill-live`** and **`status-pill-alert`**: event-state micro signals.

### Footer
- **`footer-dark`**: low-energy closing band with muted metadata tone.

## Do's and Don'ts

### Do
1. Keep dark surfaces as the baseline medium, not an alternate mode.
2. Use cyan and yellow for clear interaction semantics.
3. Preserve multilingual readability with Source Han Sans for body/interface copy.
4. Frame cinematic assets with strong structure (borders, overlays, rails).
5. Maintain card modularity and strict vertical rhythm between story chapters.

### Don't
1. Don't convert the system into bright SaaS-white layouts.
2. Don't introduce soft pastel gradients as default background language.
3. Don't over-round controls; this language is mechanical, not bubbly.
4. Don't use accent colors as ambient decoration across every element.
5. Don't let hero media obscure action labels or navigation clarity.

## Responsive Behavior

### Breakpoints

| Range | Behavior |
|---|---|
| `< 768px` | Single-column flow, compressed overlays, 16px+ body text, larger touch targets. |
| `768px – 1199px` | Two-column modular blocks, reduced hero crop depth, preserved chapter order. |
| `>= 1200px` | Full cinematic composition: hero + tactical side/support modules. |

### Mobile-Specific Rules
- Keep title scale dramatic but bounded (`display-xxl` should downshift to `display-md/lg` tiers).
- Convert corner overlays into inline chips under hero media.
- Preserve contrast between card boundaries and background at all times.

### Interaction Density
- Buttons and action strips should remain easy to identify against dark surfaces.
- Meta text can shrink, but active state affordances (cyan/yellow) must stay visually obvious.

## Iteration Guide

When adapting this system for another product:

1. **Lock the shell first**: establish black/charcoal hierarchy before introducing any accent.
2. **Map accent semantics**: cyan = tactical interaction, yellow = major action, magenta/green = event status.
3. **Choose one display family + one body family** with multilingual support.
4. **Build five primitives early**: nav bar, CTA button, tactical card, cinematic hero frame, status chip.
5. **Stress-test with three content modes**: data-heavy panel, narrative longform section, and media-first hero.

Prompt seed for coding/design agents:

> "Build a dark-industrial game-studio marketing page inspired by Hypergryph: black and graphite base, cyan tactical interaction accents, hazard-yellow primary moments, modular card rails, multilingual Source Han Sans body text, and cinematic media sections framed by strict geometric UI overlays."
