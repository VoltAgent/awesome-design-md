---
version: alpha
name: Coinbase-design-analysis
description: An institutional-grade crypto exchange whose marketing surfaces read like a quietly-confident financial-services brand. The base canvas is pure white; Coinbase Blue (`#0052ff`) is the single brand voltage, used scarcely on primary CTAs, signature glyphs, and inline accent moments. Type runs Coinbase's licensed CoinbaseDisplay (display) and CoinbaseSans (body) at modest weights — display sits at weight 400 not 700, signaling editorial calm rather than fintech-bombastic. Page rhythm rotates between bright white sections, soft gray elevation bands, and full-bleed dark editorial heroes (`#0a0b0d`) carrying product-ui mockup cards. Iconography is geometric and minimal; depth comes from card-on-card layering, never decorative shadows.

colors:
  primary: "#0052ff"
  primary-active: "#003ecc"
  primary-disabled: "#a8b8cc"
  ink: "#0a0b0d"
  body: "#5b616e"
  body-strong: "#0a0b0d"
  muted: "#7c828a"
  muted-soft: "#a8acb3"
  hairline: "#dee1e6"
  hairline-soft: "#eef0f3"
  canvas: "#ffffff"
  surface-soft: "#f7f7f7"
  surface-card: "#ffffff"
  surface-strong: "#eef0f3"
  surface-dark: "#0a0b0d"
  surface-dark-elevated: "#16181c"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  on-dark-soft: "#a8acb3"
  semantic-up: "#05b169"
  semantic-down: "#cf202f"
  accent-yellow: "#f4b000"

typography:
  display-mega:
    fontFamily: "'Coinbase Display', -apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: 80px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -2px
  display-xl:
    fontFamily: "'Coinbase Display', sans-serif"
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -1.6px
  display-lg:
    fontFamily: "'Coinbase Display', sans-serif"
    fontSize: 52px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -1.3px
  display-md:
    fontFamily: "'Coinbase Display', sans-serif"
    fontSize: 44px
    fontWeight: 400
    lineHeight: 1.09
    letterSpacing: -1px
  display-sm:
    fontFamily: "'Coinbase Sans', sans-serif"
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.11
    letterSpacing: -0.5px
  title-lg:
    fontFamily: "'Coinbase Sans', sans-serif"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.13
    letterSpacing: -0.4px
  title-md:
    fontFamily: "'Coinbase Sans', sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: 0
  title-sm:
    fontFamily: "'Coinbase Sans', sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  body-md:
    fontFamily: "'Coinbase Sans', sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-strong:
    fontFamily: "'Coinbase Sans', sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "'Coinbase Sans', sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "'Coinbase Sans', sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption-strong:
    fontFamily: "'Coinbase Sans', sans-serif"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0
  number-display:
    fontFamily: "'Coinbase Mono', 'Coinbase Sans', monospace"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  button:
    fontFamily: "'Coinbase Sans', sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: 0
  nav-link:
    fontFamily: "'Coinbase Sans', sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  pill: 100px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  base: 16px
  md: 20px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px

components:
  top-nav-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: 64px
  top-nav-on-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.nav-link}"
    height: 64px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 12px 20px
    height: 44px
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.pill}"
  button-primary-disabled:
    backgroundColor: "{colors.primary-disabled}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.pill}"
  button-secondary-light:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 12px 20px
    height: 44px
  button-secondary-dark:
    backgroundColor: "{colors.surface-dark-elevated}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 12px 20px
    height: 44px
  button-outline-on-dark:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 11px 19px
    height: 44px
  button-tertiary-text:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.button}"
  button-pill-cta:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 16px 32px
    height: 56px
  hero-band-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-mega}"
    padding: 96px
  hero-band-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-mega}"
    padding: 96px
  product-ui-card-dark:
    backgroundColor: "{colors.surface-dark-elevated}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.xl}"
    padding: 32px
  product-ui-card-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: 32px
  feature-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.xl}"
    padding: 32px
  asset-row:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    padding: 16px 0
  price-up-cell:
    backgroundColor: transparent
    textColor: "{colors.semantic-up}"
    typography: "{typography.number-display}"
  price-down-cell:
    backgroundColor: transparent
    textColor: "{colors.semantic-down}"
    typography: "{typography.number-display}"
  pricing-tier-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: 32px
  pricing-tier-featured:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: 32px
  cta-band-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-lg}"
    padding: 96px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 14px 16px
    height: 48px
  search-input-pill:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.pill}"
    padding: 12px 20px
    height: 44px
  badge-pill:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.ink}"
    typography: "{typography.caption-strong}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  asset-icon-circular:
    backgroundColor: "{colors.surface-strong}"
    rounded: "{rounded.full}"
    size: 32px
  footer-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: 64px 48px
  footer-link:
    backgroundColor: transparent
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
  legal-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
---

## Overview

Coinbase reads like an institutional financial brand that happens to trade crypto — the marketing surfaces are quiet, white-canvas, editorially-spaced, and almost monochromatic. The single brand voltage is **Coinbase Blue** (`{colors.primary}` — #0052ff), used scarcely: every primary CTA pill, the brand wordmark, and inline emphasis links. Beyond that one blue, the system is white canvas + ink + soft gray elevation bands + a deep near-black editorial canvas (`{colors.surface-dark}` — #0a0b0d) for full-bleed product-mockup heroes.

Type pairs **CoinbaseDisplay** for hero headlines with **CoinbaseSans** for body, captions, and navigation. Display sits at **weight 400** — not the 700+ typical of trading platforms. The choice signals editorial calm and institutional trust rather than fintech urgency.

The page rhythm rotates three modes: bright white editorial sections, soft-gray elevation bands, and **full-bleed dark editorial heroes** carrying layered product-UI mockup cards. The dark hero with floating dashboard mockups is the single most distinctive component.

**Key Characteristics:**
- Single accent color: `{colors.primary}` (#0052ff Coinbase Blue) carries every primary CTA, wordmark, and inline brand link. Used scarcely.
- Modest display weights — CoinbaseDisplay at weight 400, never 700+.
- Editorial pill geometry: every CTA is `{rounded.pill}` (100px), every asset glyph is `{rounded.full}`, every card is `{rounded.xl}` (24px). Sharp corners absent.
- Full-bleed dark heroes with floating product-UI cards: `{component.hero-band-dark}` plus inline `{component.product-ui-card-dark}` mockups is the brand's strongest signature pattern.
- Trading semantics: `{colors.semantic-up}` (#05b169) and `{colors.semantic-down}` (#cf202f) — text color only, never background fills.
- 96px section rhythm — generous editorial pacing.

## Colors

### Brand & Accent
- **Coinbase Blue** (`{colors.primary}` — #0052ff): The single brand color. Every primary CTA pill, the Coinbase wordmark, and inline brand links.
- **Coinbase Blue Active** (`{colors.primary-active}` — #003ecc): Press-state darken on the primary pill.
- **Coinbase Blue Disabled** (`{colors.primary-disabled}` — #a8b8cc): Faded-blue tint for disabled CTAs.
- **Accent Yellow** (`{colors.accent-yellow}` — #f4b000): A small sub-brand accent used very sparingly on Bitcoin/asset glyph fills inside feature cards. Illustrative-only, not an action color.

### Surface
- **Canvas** (`{colors.canvas}` — #ffffff): The default page floor.
- **Surface Soft** (`{colors.surface-soft}` — #f7f7f7): Subtle alternating band surface.
- **Surface Strong** (`{colors.surface-strong}` — #eef0f3): The light-gray fill behind secondary buttons, search pills, asset-icon plates.
- **Surface Dark** (`{colors.surface-dark}` — #0a0b0d): Deep near-black canvas for full-bleed dark heroes, CTA bands. Same hex as `{colors.ink}` — page-floor and text-color share the value.
- **Surface Dark Elevated** (`{colors.surface-dark-elevated}` — #16181c): One step lighter, used for floating product-UI mockup cards inside dark heroes.

### Hairlines
- **Hairline** (`{colors.hairline}` — #dee1e6): Default 1px divider on white surfaces.
- **Hairline Soft** (`{colors.hairline-soft}` — #eef0f3): Lighter divider — same hex as `{colors.surface-strong}`.

### Text
- **Ink** (`{colors.ink}` — #0a0b0d): Display headings, primary nav, body emphasis.
- **Body** (`{colors.body}` — #5b616e): Default running-text — slightly cool gray.
- **Body Strong** (`{colors.body-strong}` — #0a0b0d): Same as ink, used for stronger emphasis.
- **Muted** (`{colors.muted}` — #7c828a): Sub-titles, breadcrumbs, footer secondary.
- **Muted Soft** (`{colors.muted-soft}` — #a8acb3): Disabled link text.
- **On Primary** (`{colors.on-primary}` — #ffffff): White text on Coinbase Blue CTAs.
- **On Dark** (`{colors.on-dark}` — #ffffff): White text on dark heroes.
- **On Dark Soft** (`{colors.on-dark-soft}` — #a8acb3): Muted off-white for secondary text on dark.

### Trading Semantics
- **Semantic Up** (`{colors.semantic-up}` — #05b169): "Price up" green, text color only.
- **Semantic Down** (`{colors.semantic-down}` — #cf202f): "Price down" red, text color only.

## Typography

### Font Family
The system runs **CoinbaseDisplay** (display headlines), **CoinbaseSans** (body, navigation, captions, buttons), **CoinbaseIcons** (icon font), and **CoinbaseMono** for tabular numerical data. Fallback stack: `-apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`.

The display/body split is functional: CoinbaseDisplay carries hero headlines only; CoinbaseSans carries everything else.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-mega}` | 80px | 400 | 1.0 | -2px | Homepage hero h1 |
| `{typography.display-xl}` | 64px | 400 | 1.0 | -1.6px | Subsidiary heroes |
| `{typography.display-lg}` | 52px | 400 | 1.0 | -1.3px | Section heads |
| `{typography.display-md}` | 44px | 400 | 1.09 | -1px | CTA-band headlines |
| `{typography.display-sm}` | 36px | 400 | 1.11 | -0.5px | Sub-section heads — CoinbaseSans |
| `{typography.title-lg}` | 32px | 400 | 1.13 | -0.4px | Card group titles |
| `{typography.title-md}` | 18px | 600 | 1.33 | 0 | Component titles, asset row primary |
| `{typography.title-sm}` | 16px | 600 | 1.25 | 0 | List labels |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Default body |
| `{typography.body-strong}` | 16px | 700 | 1.5 | 0 | Emphasized body |
| `{typography.body-sm}` | 14px | 400 | 1.5 | 0 | Footer body |
| `{typography.caption}` | 13px | 400 | 1.5 | 0 | Photo captions |
| `{typography.caption-strong}` | 12px | 600 | 1.5 | 0 | Badge pill labels |
| `{typography.number-display}` | 18px | 500 | 1.4 | 0 | Asset prices, percent changes — CoinbaseMono |
| `{typography.button}` | 16px | 600 | 1.15 | 0 | Standard CTA pill |
| `{typography.nav-link}` | 14px | 500 | 1.4 | 0 | Top-nav menu items |

### Principles
- **Display weight stays at 400.** The single most distinctive typographic choice — signals "calm institutional brand" rather than "trading-platform urgency."
- **Negative letter-spacing on display only.** Display uses -1px to -2px tracking; body stays at 0.
- **CoinbaseMono on every number.** Asset prices, percent changes — anything tabular renders in CoinbaseMono.

### Note on Font Substitutes
CoinbaseDisplay, CoinbaseSans, and CoinbaseMono are licensed Coinbase typefaces.
- **CoinbaseDisplay → Inter** at weight 400, letter-spacing -1.5%.
- **CoinbaseSans → Inter** at weight 400/600.
- **CoinbaseMono → JetBrains Mono** or **Geist Mono** at weight 500.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.base}` 16px · `{spacing.md}` 20px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- **Section padding:** `{spacing.section}` (96px) for every major editorial band.
- **Card internal padding:** `{spacing.xl}` (32px) for feature cards and product-UI mockups.

### Grid & Container
- **Max content width:** ~1200px centered. Hero photography full-bleed.
- **Editorial body:** Single 12-column grid.
- **Feature card grids:** 2-up at desktop for hero splits, 3-up for benefit grids.
- **Footer:** 6-column link list at desktop.

### Whitespace Philosophy
Generous editorial pacing — closer to Bloomberg or the Financial Times than to a trading dashboard. 96px between bands; cards inside bands sit 24px apart. Density lives behind login walls, not on marketing.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | 80% of surfaces |
| Hairline border | 1px `{colors.hairline}` | Feature card outlines on white |
| Soft drop | `0 4px 12px rgba(0, 0, 0, 0.04)` | Single shadow tier — hovered cards |
| Photographic | Full-bleed product-UI mockups | Hero depth |

### Decorative Depth
- **Layered product-UI cards inside dark heroes** is the most distinctive decorative pattern — a `{component.product-ui-card-dark}` floats above a darker base canvas, often with a second smaller card overlapping at an angle.
- **Geometric brand illustrations** carry illustrative depth where shadows would otherwise.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Reserved (essentially unused) |
| `{rounded.xs}` | 4px | Inline tags |
| `{rounded.sm}` | 8px | Compact rows |
| `{rounded.md}` | 12px | Form inputs |
| `{rounded.lg}` | 16px | Mid-size cards |
| `{rounded.xl}` | 24px | Feature cards, product-UI mockups, pricing tiers |
| `{rounded.pill}` | 100px | All CTA buttons, search pills, badges |
| `{rounded.full}` | 9999px | Asset icon circles, avatars |

Pill for interactive, card-radius (24px) for containers, full circle for icons. Sharp corners absent.

## Components

### Top Navigation

**`top-nav-light`** — Default top nav on white pages. Background `{colors.canvas}`, text `{colors.ink}`, height 64px. Layout: Coinbase wordmark left, primary horizontal menu (Cryptocurrencies / Individuals / Businesses / Institutions / Developers / Company), search-icon + globe + Sign In + Sign Up CTAs right.

**`top-nav-on-dark`** — Top nav over a dark hero band. Background `{colors.surface-dark}`, text `{colors.on-dark}`. Same layout.

### Buttons

**`button-primary`** — The signature Coinbase Blue pill. Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button}` (16px / 600), padding 12px × 20px, height 44px, rounded `{rounded.pill}` (100px).

**`button-primary-active`** — Press state. Background `{colors.primary-active}`, deeper blue.

**`button-primary-disabled`** — Faded blue tint. Background `{colors.primary-disabled}`. Cursor not-allowed.

**`button-secondary-light`** — Soft-gray secondary on white surfaces. Background `{colors.surface-strong}`, text `{colors.ink}`, same pill geometry.

**`button-secondary-dark`** — Used on dark heroes. Background `{colors.surface-dark-elevated}`, text `{colors.on-dark}`, same pill geometry.

**`button-outline-on-dark`** — Transparent pill with white outline. Background transparent, text `{colors.on-dark}`, 1px white border.

**`button-tertiary-text`** — Inline text link. Background transparent, text `{colors.primary}`, type `{typography.button}`.

**`button-pill-cta`** — Larger pill CTA used on the homepage hero ("Get started"). Same Coinbase Blue palette but with 56px height and 16px × 32px padding for a prouder stance.

### Hero Bands

**`hero-band-dark`** — The signature full-bleed dark hero. Background `{colors.surface-dark}`, text `{colors.on-dark}`, full-bleed layered product-UI mockup cards. Display headline left in `{typography.display-mega}` (80px / 400), subhead in `{typography.body-md}`, two CTAs.

**`hero-band-light`** — White-canvas variant used on Wealth and Explore. Background `{colors.canvas}`, text `{colors.ink}`. Same skeleton, light palette.

### Cards

**`product-ui-card-dark`** — The floating product-UI mockup. Background `{colors.surface-dark-elevated}`, text `{colors.on-dark}`, rounded `{rounded.xl}` (24px), padding 32px. Often shown as 2-3 stacked cards at slight rotation, mimicking a layered dashboard.

**`product-ui-card-light`** — Light-canvas variant used on Explore for asset cards. Background `{colors.canvas}`, text `{colors.ink}`, same geometry, 1px hairline border.

**`feature-card`** — Used in 3-up and 2-up grids. Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.title-md}`, rounded `{rounded.xl}`, padding 32px.

### Trading Surfaces

**`asset-row`** — Horizontal row in asset lists (Explore, Wealth). Background transparent, 1px hairline divider. Layout: 32px circular asset icon left, asset name + ticker, price column in `{typography.number-display}`, 24h change column with `{component.price-up-cell}` or `{component.price-down-cell}`.

**`price-up-cell`** + **`price-down-cell`** — Inline price-change cells. Color only — green or red text in `{typography.number-display}`, no background fill.

**`asset-icon-circular`** — Circular plate behind asset glyphs. Background `{colors.surface-strong}`, rounded `{rounded.full}`, 32px diameter.

### Pricing

**`pricing-tier-card`** — Standard pricing tier on Developer Platform. Background `{colors.canvas}`, rounded `{rounded.xl}`, padding 32px, 1px hairline border. Layout: tier name + price + feature checklist + CTA pill.

**`pricing-tier-featured`** — The featured tier. Background `{colors.surface-dark}`, text `{colors.on-dark}`. Same skeleton, dark palette — visual inversion signals "highlighted choice" without colored ribbons.

### Forms

**`text-input`** — Standard text input. Background `{colors.canvas}`, text `{colors.ink}`, rounded `{rounded.md}` (12px), padding 14px × 16px, height 48px, 1px hairline border. On focus, border thickens to 2px Coinbase Blue.

**`search-input-pill`** — Pill-shaped search bar. Background `{colors.surface-strong}`, rounded `{rounded.pill}`, padding 12px × 20px, height 44px.

### Tags & Badges

**`badge-pill`** — Small uppercase pill used as section labels ("INSTITUTIONAL", "REGULATED"). Background `{colors.surface-strong}`, text `{colors.ink}`, type `{typography.caption-strong}`, rounded `{rounded.pill}`.

### CTA / Footer

**`cta-band-dark`** — Pre-footer "Take control of your money" band. Background `{colors.surface-dark}`, text `{colors.on-dark}`, vertical padding 96px. Centered headline + two CTAs.

**`footer-light`** — Closing white-canvas footer. Background `{colors.canvas}`, text `{colors.body}`. 6-column link list.

**`footer-link`** — Individual footer link. Background transparent, text `{colors.body}`.

**`legal-band`** — Bottom strip beneath footer columns. All text `{colors.muted}` at `{typography.caption}`.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (Coinbase Blue) for primary CTAs, wordmark, brand-glyph illustrations, inline accent links.
- Set every CTA as `{rounded.pill}` (100px); every asset glyph as `{rounded.full}`.
- Keep CoinbaseDisplay headlines at weight 400.
- Use the dark/light band rotation as page rhythm.
- Render every numerical value in CoinbaseMono via `{typography.number-display}`.
- Pair every dark hero with a layered product-UI mockup card stack.

### Don't
- Don't introduce a secondary brand color. Coinbase Blue is the only action color; trading green/red are semantic-only.
- Don't bold display copy — display sits at weight 400; bolding shifts the brand voice.
- Don't add drop shadow tiers — system has one shadow tier.
- Don't use sharp `{rounded.none}` (0px) on CTAs.
- Don't mix CoinbaseDisplay and CoinbaseSans inside the same headline.
- Don't use trading green/red as a button background.
- Don't extract a CTA color from a third-party widget (cookie consent, OneTrust). The brand's CTA color is what appears on actual product CTAs, not on injected modals.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 640px | Hero h1 80→40px; feature card grid 1-up; asset row stacks; nav collapses to hamburger; layered product-UI cards collapse to single card. |
| Tablet | 640–1024px | Hero h1 64px; feature card grid 2-up; asset rows stay horizontal but compress columns. |
| Desktop | 1024–1280px | Full hero h1 80px; feature card grid 3-up; full asset row layout. |
| Wide | > 1280px | Content caps at 1200px; hero photography full-bleed. |

### Touch Targets
- Primary CTA pill at 44px height — at WCAG AAA.
- Larger hero pill (`{component.button-pill-cta}`) at 56px — well above AAA.
- Asset icon circles at 32px — borderline; padded 8px row creates effective 48px tap zone.
- Search pill at 44px height — at AAA.

### Collapsing Strategy
- Top nav switches to hamburger sheet below 768px. Sign Up CTA stays visible.
- Hero h1 steps down: 80 → 64 → 52 → 44 → 36px on smallest screens.
- Layered product-UI mockup cards collapse from 2-3 stacked into a single card on mobile.
- Pricing tier rows: 3-up → 2-up → 1-up.
- Asset rows on mobile stack vertically: ticker line on top, price + change line beneath.

## Iteration Guide

1. Focus on a single component at a time. Reference YAML keys directly.
2. New CTAs default to `{rounded.pill}` (100px); new icon plates default to `{rounded.full}`. Cards use `{rounded.xl}`.
3. Variants live as separate entries inside the `components:` block.
4. Use `{token.refs}` everywhere — never inline hex.
5. Hover state never documented. Only Default and Active/Pressed.
6. CoinbaseDisplay 400 for display, CoinbaseSans 400/600/700 for body. CoinbaseMono on every number.
7. Coinbase Blue stays scarce — one or two blue moments per band.

## Known Gaps

- CoinbaseDisplay, CoinbaseSans, CoinbaseMono are licensed; Inter and JetBrains Mono are documented substitutes.
- In-product trading surfaces (order book, charts, order forms) are behind login walls — this document covers marketing only.
- Animation timings out of scope.
- Form validation states beyond focus not visible on captured surfaces.
- Accent yellow appears only inside Bitcoin asset glyph illustrations; documented as illustrative-only.
