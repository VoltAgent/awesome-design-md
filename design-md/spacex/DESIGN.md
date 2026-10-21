---
version: alpha
name: Spacex-Inspired-design-analysis
description: An inspired interpretation of Spasex's design language — a mission-oriented aerospace brand built on pure black canvas, full-bleed photographic and video heroes of rockets and Mars landscapes, and uppercase D-DIN display type set in tight vertical leading. UI chrome is intentionally minimal a single ghost outlined pill button per band, all-caps eyebrow microtext, and a fixed top nav over photography. The system is unapologetically austere — black, white, and the imagery itself.

colors:
  primary: "#000000"
  ink: "#000000"
  on-primary: "#ffffff"
  on-primary-mute: "#f0f0fa"
  canvas-night: "#000000"
  canvas-night-soft: "#0a0a0a"
  canvas-light: "#ffffff"
  canvas-cool: "#f0f0fa"
  hairline-on-dark: "#3a3a3f"
  hairline-on-light: "#e0e0e8"
  link-on-dark: "#ffffff"
  link-blue-fallback: "#0000ee"
  ink-mute: "#5a5a5f"

typography:
  display-xxl:
    fontFamily: "D-DIN-Bold, Arial Narrow, Arial, Verdana, sans-serif"
    fontSize: 80px
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: 1.6px
  display-xl:
    fontFamily: "D-DIN-Bold, Arial Narrow, Arial, Verdana, sans-serif"
    fontSize: 60px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 1.2px
  display-lg:
    fontFamily: "D-DIN-Bold, Arial Narrow, Arial, Verdana, sans-serif"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0.96px
  body-lg:
    fontFamily: "D-DIN, Arial, Verdana, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0.32px
  body-md:
    fontFamily: "D-DIN, Arial, Verdana, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.32px
  button-cap:
    fontFamily: "D-DIN, Arial, Verdana, sans-serif"
    fontSize: 13.008px
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: 1.17px
  micro-cap:
    fontFamily: "D-DIN, Arial, Verdana, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 2.0
    letterSpacing: 0.96px
  caption:
    fontFamily: "D-DIN, Arial, Verdana, sans-serif"
    fontSize: 13.008px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 8px
  md: 16px
  pill: 32px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 18px
  xl: 24px
  xxl: 32px
  huge: 48px

components:
  button-ghost-on-dark:
    backgroundColor: "{colors.canvas-night}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-cap}"
    rounded: "{rounded.pill}"
    padding: 18px 24px
  button-ghost-on-light:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.button-cap}"
    rounded: "{rounded.pill}"
    padding: 18px 24px
  button-filled-cool:
    backgroundColor: "{colors.canvas-cool}"
    textColor: "{colors.ink}"
    typography: "{typography.button-cap}"
    rounded: "{rounded.pill}"
    padding: 18px 24px
  text-input:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 12px 16px
  card-photo-band:
    backgroundColor: "{colors.canvas-night}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 0px
  card-shop-product:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 16px
  nav-bar-overlay:
    backgroundColor: "{colors.canvas-night}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-cap}"
    rounded: "{rounded.xs}"
    padding: 24px 32px
  link-on-dark:
    backgroundColor: "{colors.canvas-night}"
    textColor: "{colors.link-on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 0px
  link-on-light:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 0px
  footer-dark:
    backgroundColor: "{colors.canvas-night}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 32px 24px
---

## Overview

Spasex's design language is an exercise in negation: pure black canvas, white display type set in tight vertical leading and uppercase, full-bleed photography or autoplaying rocket-launch video as the only chrome. There is no brand color beyond black-and-white; there are no decorative shapes; there are no card grids or pricing tables on the marketing pages. Every band is a single full-viewport photograph or video paired with one all-caps headline at `{typography.display-xxl}` (80px D-DIN-Bold) and one ghost-outlined pill CTA. The composition is closer to a film title card than a SaaS landing page.

The brand's depth is photographic. Mars landscapes, rocket exhaust plumes, the F9 booster on a launchpad at sunset — these are the design system. Type sits over them at high opacity with no scrim, no gradient overlay; the photographs are graded so the type lands cleanly. When type does need a background, it sits on `{colors.canvas-night-soft}` (a barely-lifted near-black) with a 1px hairline in `{colors.hairline-on-dark}`.

Typography splits between **D-DIN-Bold** for display tiers (uppercase, tight tracking, condensed feel) and **D-DIN** regular for body and button labels. There is no third family — even pricing on the shop site uses the same two cuts. The display sizes are unusually tight in vertical leading (0.95–1.25) and unusually loose in horizontal tracking (1.6px positive at 80px) — the brand feels engineered rather than designed.

**Key Characteristics:**
- Single canvas: pure `{colors.canvas-night}` (`#000000`) for marketing; `{colors.canvas-light}` only on the shop site.
- Display tier in uppercase D-DIN-Bold with positive horizontal tracking (1.6px at 80px) — the brand's typographic signature.
- Full-bleed photography or autoplaying video as the dominant decorative element; type sits directly on imagery with no scrim.
- Single ghost-outlined pill CTA per band, at `{rounded.pill}` 32px radius — never filled, never accent-colored.
- All-caps eyebrow microtext (`{typography.micro-cap}` and `{typography.button-cap}`) with positive 0.96–1.17px tracking — every chrome element shouts in caps.
- Fixed top nav overlaid on photography — no opaque background, just white-on-image.
- Tight 0.95 line-height on the 80px display — vertical compression is the engineering aesthetic.

## Colors

> **Source pages:** home (`/`), `/shop`, `/vehicles/starship`, `/humanspaceflight/overview`, `/mission`.

### Brand & Accent
The brand has no accent colors. Black and white do all the chromatic work; photography supplies every other hue.

### Surface
- **Canvas Night** (`{colors.canvas-night}` — `#000000`): Default marketing canvas. Pure black, no tint.
- **Canvas Night Soft** (`{colors.canvas-night-soft}` — `#0a0a0a`): Barely-lifted near-black for content sections that need a subtle separation from the pure-black hero.
- **Canvas Light** (`{colors.canvas-light}` — `#ffffff`): The shop site's product surface.
- **Canvas Cool** (`{colors.canvas-cool}` — `#f0f0fa`): A pale cool-blue-white used as the secondary surface on the shop site and as the hover-canvas of certain ghost buttons.
- **Hairline on Dark** (`{colors.hairline-on-dark}` — `#3a3a3f`): 1px borders on dark surface chrome.
- **Hairline on Light** (`{colors.hairline-on-light}` — `#e0e0e8`): Borders on shop-site cards.

### Text
- **On Primary** (`{colors.on-primary}` — `#ffffff`): Default text on dark canvas; the dominant text color across the marketing site.
- **On Primary Mute** (`{colors.on-primary-mute}` — `#f0f0fa`): Slightly cooled-white used for secondary text on dark surfaces — barely distinguishable from `{colors.on-primary}` but enough to suggest a hierarchy.
- **Ink** (`{colors.ink}` — `#000000`): Default text on light surfaces (shop site).
- **Ink Mute** (`{colors.ink-mute}` — `#5a5a5f`): Secondary text on light surfaces.

### Link
- **Link on Dark** (`{colors.link-on-dark}` — `#ffffff`): Underlined inline link on dark canvas.
- **Link Blue Fallback** (`{colors.link-blue-fallback}` — `#0000ee`): The browser default that appears in unstyled fallback contexts — documented for completeness, not used as a brand color.

## Typography

### Font Family

The display tier is **D-DIN-Bold** — a condensed industrial sans inspired by the German DIN 1451 standard (used on autobahn road signage and engineering blueprints). When unavailable, fall back to **Arial Narrow**, then Arial, then Verdana — the fallback chain prioritizes width compression over ornament.

The UI tier is **D-DIN** (regular weight) — the same family at standard width — used for body, button labels, and captions.

D-DIN is freely available from the **DIN Type Foundry** (and a free version under the same name is widely distributed). For maximum brand fidelity, use D-DIN directly; as a substitute, **Inter** at heavy weights (700+) with letter-spacing of 1.6px positive tracking approximates the rhythm. Avoid serif or humanist sans alternatives.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xxl}` | 80px | 700 | 0.95 | 1.6px | Hero headline (uppercase) |
| `{typography.display-xl}` | 60px | 700 | 1.2 | 1.2px | Section opener (uppercase) |
| `{typography.display-lg}` | 48px | 700 | 1.25 | 0.96px | Sub-section heading (uppercase) |
| `{typography.body-lg}` | 16px | 400 | 1.7 | 0.32px | Marketing body lead |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0.32px | Default UI body |
| `{typography.button-cap}` | 13.008px | 700 | 0.94 | 1.17px | All-caps button label |
| `{typography.micro-cap}` | 12px | 400 | 2.0 | 0.96px | All-caps eyebrow / nav item |
| `{typography.caption}` | 13.008px | 400 | 1.5 | 0 | Helper / footer text |

### Principles
- **Uppercase across display.** Every display tier renders in uppercase. The brand never uses sentence-case display headlines.
- **Tight vertical leading on display.** 0.95 at 80px and 1.2 at 60px — the type stacks engineer-tight.
- **Wide horizontal tracking.** Positive 0.96–1.6px tracking on display sizes; positive 0.96–1.17px on caps eyebrows. The wide tracking is the brand's signature optical air.
- **No mono.** Code blocks are not part of the brand's typographic system.

### Note on Font Substitutes
**D-DIN** is freely available (the original DIN-style face under that name is widely distributed). When unavailable, use **Inter** at 700 weight with `letter-spacing: 1.6px`, `text-transform: uppercase`, and `line-height: 0.95` for display sizes — this matches the rhythm. Avoid Helvetica or Arial at default weights — the brand needs the condensed industrial cut. Avoid serif fallbacks entirely.

## Layout

### Spacing System
- **Base unit**: 8px (with denser sub-units 4 / 12 / 16 / 18 / 24).
- **Tokens**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 18px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px · `{spacing.huge}` 48px.
- **Section padding**: full-viewport bands on marketing — no internal padding above/below; the photograph IS the section. On the shop site, sections use 48–64px vertical padding.

### Grid & Container
- Marketing pages have no container — every band is full-viewport-width, full-viewport-height (or close to it) with photography filling the entire frame.
- Shop product grid: 4-up at desktop, 2-up at tablet, 1-up at mobile.
- Type sits inside an inner ~1200px reading column centered horizontally over the full-bleed photograph.

### Whitespace Philosophy
The marketing pages have minimal traditional whitespace — the photograph occupies all space. "Whitespace" here means the dark sky in a rocket photograph or the empty stretch of Martian terrain. Negative space is photographic, not a UI choice. On the shop site whitespace returns to standard 32px grid gutters.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat | Default — and the only level on marketing surfaces |
| 1 | Photographic — full-bleed image or video | The primary depth medium; photographs do all the lifting |

The brand does not use drop shadows, blurs, glows, or gradient overlays. Depth is photographic: a rocket launching at twilight has natural atmospheric depth that no CSS shadow could simulate. When type needs separation from imagery, the image is graded darker rather than scrimmed.

### Decorative Depth
Photography and autoplaying rocket-launch video are the only decorative depth. There are no illustrations, no icons beyond a few minimal SVG arrow chevrons in nav and CTA hover states.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Form inputs (shop site) |
| `{rounded.sm}` | 8px | Shop product card chrome, video frames |
| `{rounded.md}` | 16px | Larger surface chrome |
| `{rounded.pill}` | 32px | Ghost outlined pill CTAs (the brand's signature button shape) |
| `{rounded.full}` | 9999px | Circular play-button overlays on video frames |

### Photography Geometry
Every photograph is full-viewport-bleed, edge-to-edge, never inset in a card on the marketing site. On the shop site, product photography sits inside `{rounded.sm}` 8px containers with no shadow. Aspect ratios on marketing photography vary with the source image — there is no enforced ratio; the photograph leads.

## Components

### Buttons

**`button-ghost-on-dark`** — the universal CTA on marketing surfaces.
- Background `{colors.canvas-night}` (transparent against the photographed canvas), 1px solid `{colors.on-primary}` border, text `{colors.on-primary}`, type `{typography.button-cap}` (uppercase, 13px / 700 / 1.17px tracking), padding `{spacing.lg} {spacing.xl}` (18px 24px), rounded `{rounded.pill}` 32px.

**`button-ghost-on-light`** — the same button on shop / light pages.
- Background `{colors.canvas-light}` (transparent against light canvas), 1px solid `{colors.ink}` border, text `{colors.ink}`, otherwise identical.

**`button-filled-cool`** — fill variant on shop product cards.
- Background `{colors.canvas-cool}`, text `{colors.ink}`, same pill geometry. Used as "Add to cart" or similar product CTAs.

### Cards & Containers

**`card-photo-band`** — full-bleed photographic band on marketing pages.
- Background `{colors.canvas-night}`, padding 0, rounded `{rounded.xs}`. The photograph fills the entire band; type and CTA sit overlaid.

**`card-shop-product`** — product card on the shop site.
- Background `{colors.canvas-light}`, padding `{spacing.md}` 16px, rounded `{rounded.sm}` 8px, 1px `{colors.hairline-on-light}` border. Product photo on top, name in `{typography.body-md}`, price in `{typography.body-md}` 700 weight, "Add to cart" button at the bottom.

### Inputs & Forms

**`text-input`** — form input on the shop site.
- Background `{colors.canvas-light}`, text `{colors.ink}`, type `{typography.body-md}`, padding `{spacing.sm} {spacing.md}` (12px 16px), rounded `{rounded.xs}` 4px, 1px `{colors.hairline-on-light}` border.

### Navigation

**`nav-bar-overlay`** — top nav across the marketing site.
- Background `{colors.canvas-night}` (transparent over the hero photo), text `{colors.on-primary}`, type `{typography.button-cap}` (uppercase). Logo wordmark on the left at ~147×19px, nav items horizontal in caps, padding `{spacing.xl} {spacing.xxl}` (24px 32px). The nav is fixed/sticky on scroll, retaining the overlay treatment.

### Signature Components

**Full-Bleed Photo / Video Hero** — every marketing band is a full-viewport photograph or autoplaying rocket-launch video. Type and CTA sit overlaid on the photograph at high opacity with no scrim. The photograph is graded so type lands cleanly without an overlay layer.

**Uppercase Display Headline** — the 80px D-DIN-Bold uppercase headline with 1.6px positive tracking is the brand's most recognizable typographic moment. Always uppercase, always bold-weight, always positively tracked.

**`link-on-dark`** — inline links on dark canvas.
- Text `{colors.link-on-dark}` (white) with persistent underline.

**`link-on-light`** — inline links on light canvas.
- Text `{colors.ink}` with persistent underline.

**`footer-dark`** — site-wide footer.
- Background `{colors.canvas-night}`, text `{colors.on-primary}`, type `{typography.caption}`, padding `{spacing.xxl} {spacing.xl}` (32px 24px). Holds nav columns in `{typography.micro-cap}` (uppercase), and a small legal/copyright row at the bottom.

## Do's and Don'ts

### Do
- Use full-bleed photography or autoplaying video as the dominant decorative element on every marketing band.
- Render display tiers in uppercase D-DIN-Bold with positive 0.96–1.6px letter-spacing — the wide tracking is the signature.
- Use a single `{button-ghost-on-dark}` per band — the brand does NOT show two CTAs side by side on marketing surfaces.
- Pair every photograph with type that respects the imagery — no scrims, no gradients, no overlays. Grade the photo, not the canvas.
- Keep nav overlay-style (transparent, white-on-image) on marketing pages.

### Don't
- Don't introduce brand accent colors — black, white, and photography are the entire palette.
- Don't use drop shadows or gradient overlays on dark canvas — they fight the photography.
- Don't render display tiers in sentence-case or title-case — uppercase is the brand.
- Don't put filled buttons on marketing surfaces — the ghost outlined pill is the only marketing CTA.
- Don't use serif or humanist sans alternatives — the condensed industrial DIN cut is non-negotiable.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | ≥ 1500px | Full hero photograph; max-content type column at 1200px |
| Desktop | 1280–1499px | Default desktop layout |
| Laptop | 961–1279px | Type column tightens; photo crops adjust |
| Tablet | 768–960px | Display drops 80 → 60px; nav compresses |
| Mobile | 600–767px | Display drops to 48px; ghost button retains pill shape |
| Small Mobile | < 600px | Display drops to 40px; nav becomes hamburger |

### Touch Targets
- Ghost pill buttons hit ≥ 50×50px due to the 18px vertical padding × 13px line-height. WCAG AAA compliant.
- Form fields stay at the 44px minimum height.

### Collapsing Strategy
- Display sizes stair-step 80 → 60 → 48 → 40px through the breakpoints.
- Photography re-crops to focal subject on smaller widths (rocket centered, Mars landscape centered).
- Top nav collapses to hamburger below 768px; menu retains the dark overlay treatment.
- Shop product grid stair-steps 4-up → 2-up → 1-up.

### Image Behavior
Marketing photography uses `srcset` for desktop / tablet / mobile with art-direction crops at major breakpoints. Mobile crops favor the central focal subject; wide crops favor environmental context (full launch pad, full Martian horizon).

## Iteration Guide

1. Focus on ONE component at a time.
2. Reference component names and tokens directly (`{colors.canvas-night}`, `{button-ghost-on-dark}`, `{rounded.pill}`).
3. Run `npx @google/design.md lint DESIGN.md` after edits.
4. Add new variants as separate entries.
5. Default body to `{typography.body-md}`; reserve `{typography.body-lg}` for marketing leads.
6. The black-and-white-only rule is load-bearing — adding a brand accent color breaks the system.
7. Ghost pill is the only marketing CTA; filled buttons live exclusively on the shop site.
