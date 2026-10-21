---
version: alpha
name: Mistral-AI-design-analysis
description: Mistral AI brands itself with a singular signature — atmospheric sunset gradients (mustard, orange, deep red) layered over photography of mountains, plus a horizontal "sunset stripe" bar that closes every page. The system pairs warm cream-yellow surfaces ({colors.cream}) with a saturated orange primary CTA ({colors.primary}) and uses an elegant near-serif voice for hero displays. Coverage spans homepage (Frontier AI hero), Le Studio product page, Coding solutions, news article surfaces, contact form, and services tier page — all anchored by the signature gradient closing band.

colors:
  primary: "#fa520f"
  primary-deep: "#cc3a05"
  on-primary: "#ffffff"
  sunshine-300: "#ffd06a"
  sunshine-500: "#ffb83e"
  sunshine-700: "#ffa110"
  sunshine-800: "#ff8105"
  sunshine-900: "#ff8a00"
  yellow-saturated: "#ffd900"
  cream: "#fff8e0"
  cream-light: "#fffaeb"
  cream-deeper: "#fff0c2"
  beige-deep: "#e6d5a8"
  block-5: "#ffe295"
  block-6: "#ffd900"
  block-7: "#ff8105"
  ink: "#1f1f1f"
  ink-tint: "#3d3d3d"
  charcoal: "#2c2c2c"
  slate: "#4a4a4a"
  steel: "#6a6a6a"
  stone: "#8a8a8a"
  muted: "#a8a8a8"
  hairline: "#e5e5e5"
  hairline-soft: "#ededed"
  hairline-strong: "#c7c7c7"
  canvas: "#ffffff"
  surface: "#fafafa"
  surface-cream: "#fff8e0"
  surface-cream-soft: "#fffaeb"
  surface-code: "#1c1c1e"
  on-dark: "#ffffff"
  on-dark-muted: "#a8a8a8"
  on-cream: "#1f1f1f"
  footer-cream: "#fff8e0"
  link: "#fa520f"

typography:
  hero-display:
    fontFamily: PP Editorial Old
    fontSize: 84px
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -1.5px
  display-lg:
    fontFamily: PP Editorial Old
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1.10
    letterSpacing: -1px
  heading-1:
    fontFamily: PP Editorial Old
    fontSize: 52px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: -0.5px
  heading-2:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: -0.5px
  heading-3:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: 500
    lineHeight: 1.25
  heading-4:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.30
  heading-5:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.40
  subtitle:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.50
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
  body-md-medium:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.55
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.50
  body-sm-medium:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.50
  caption:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.40
  caption-bold:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.40
  micro:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.40
  micro-uppercase:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1.40
    letterSpacing: 1px
  button-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.30
  stat-display:
    fontFamily: PP Editorial Old
    fontSize: 56px
    fontWeight: 400
    lineHeight: 1.10
    letterSpacing: -1px
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.50

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  xxl: 20px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  xxxl: 40px
  section-sm: 48px
  section: 64px
  section-lg: 96px
  hero: 120px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
  button-primary-pressed:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-primary}"
  button-primary-disabled:
    backgroundColor: "{colors.hairline}"
    textColor: "{colors.muted}"
  button-cream:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
    border: "1px solid {colors.beige-deep}"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
    border: "1px solid {colors.hairline-strong}"
  button-on-cream:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
    border: "1px solid {colors.beige-deep}"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.body-sm-medium}"
    padding: "0"
  card-base:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline-soft}"
  card-feature:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xxl}"
    border: "1px solid {colors.hairline-soft}"
  card-cream:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xxl}"
    border: "1px solid {colors.beige-deep}"
  card-cream-soft:
    backgroundColor: "{colors.surface-cream-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xxl}"
  card-feature-product:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xxl}"
    border: "1px solid {colors.hairline-soft}"
    shadow: "rgba(0, 0, 0, 0.04) 0px 4px 12px"
  card-photographic:
    backgroundColor: "{colors.surface-code}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.lg}"
    padding: "0"
  pricing-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xxl}"
    border: "1px solid {colors.hairline-soft}"
  pricing-card-featured:
    backgroundColor: "{colors.cream}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xxl}"
    border: "2px solid {colors.primary}"
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
    border: "1px solid {colors.hairline-strong}"
    height: 44px
  text-input-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    border: "2px solid {colors.primary}"
  text-area:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
    border: "1px solid {colors.hairline-strong}"
  contact-form-panel:
    backgroundColor: "{colors.cream}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xxl}"
    border: "1px solid {colors.beige-deep}"
  pill-tab:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.steel}"
    typography: "{typography.body-sm-medium}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.md}"
    border: "1px solid {colors.hairline}"
  pill-tab-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.full}"
    border: "1px solid {colors.ink}"
  segmented-tab:
    backgroundColor: "transparent"
    textColor: "{colors.steel}"
    typography: "{typography.body-sm-medium}"
    padding: "{spacing.sm} {spacing.md}"
    border: "0 0 2px transparent solid"
  segmented-tab-active:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.body-sm-medium}"
    border: "0 0 2px {colors.primary} solid"
  badge-orange:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  badge-cream:
    backgroundColor: "{colors.cream-deeper}"
    textColor: "{colors.ink}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  badge-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  promo-banner:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm-medium}"
    padding: "{spacing.sm} {spacing.md}"
  hero-band-sunset:
    backgroundColor: "{colors.sunshine-700}"
    textColor: "{colors.ink}"
    rounded: "0"
    padding: "{spacing.hero}"
  sunset-stripe-band:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "0"
    padding: "{spacing.lg} 0"
  cta-banner-cream:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "{spacing.section}"
  code-block:
    backgroundColor: "{colors.surface-code}"
    textColor: "{colors.on-dark}"
    typography: "{typography.code-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  code-block-header:
    backgroundColor: "{colors.surface-code}"
    textColor: "{colors.on-dark-muted}"
    typography: "{typography.caption}"
    padding: "{spacing.xs} {spacing.md}"
    border: "0 0 1px rgba(255,255,255,0.08) solid"
  feature-icon-tile:
    backgroundColor: "{colors.cream}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
    border: "1px solid {colors.beige-deep}"
  industry-tile:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline-soft}"
  stat-cell:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.stat-display}"
    padding: "{spacing.lg}"
  customer-testimonial-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xxl}"
    border: "1px solid {colors.hairline-soft}"
  logo-wall-item:
    backgroundColor: "transparent"
    textColor: "{colors.steel}"
    typography: "{typography.body-md-medium}"
    padding: "{spacing.lg}"
  faq-accordion-item:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
    border: "0 0 1px {colors.hairline} solid"
  footer-region:
    backgroundColor: "{colors.footer-cream}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.section} {spacing.xxl}"
  footer-link:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xxs} 0"
  app-store-badge:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
---

## Overview

Mistral AI carries itself with a singular, almost cinematographic visual signature — the homepage opens with "Frontier AI. In your hands." rendered in elegant near-serif display type over a photographic mountain landscape bathed in mustard-orange sunset light. Below the hero, every page closes with the same recognizable element: a horizontal "sunset stripe" gradient band running red→orange→yellow→cream that wraps the foot of the page just above the footer. This stripe is THE brand recognizer — it appears on the homepage, products/studio, solutions/coding, news articles, contact form, and services tier page without exception.

The system pairs PP Editorial Old (a near-serif elegant display face) for hero displays with Inter for everything else (body, headings, UI). Cream-yellow surfaces ({colors.cream}, {colors.surface-cream-soft}) anchor form panels and feature cards; saturated orange ({colors.primary}) carries primary CTAs; the deep mountain photography on the homepage and the dark code mockups inside Le Studio create photographic depth. Cards are rectangular with `{rounded.lg}` (12px) corners — distinctly less playful than Miro's or Mintlify's pill-buttons-everywhere approach. Buttons are also `{rounded.md}` (8px), not pills — Mistral's geometry is more sober and editorial than its peers.

**Key Characteristics:**
- Atmospheric mountain-sunset hero photography (orange-red-yellow gradient sky)
- Horizontal "sunset stripe" band ({colors.primary} → {colors.sunshine-700} → {colors.yellow-saturated} → {colors.cream}) at every page bottom
- Cream-yellow surfaces ({colors.cream}, {colors.cream-soft}) for form panels and feature cards
- PP Editorial Old (or similar near-serif) for hero displays; Inter for everything else
- `{rounded.md}` (8px) buttons and `{rounded.lg}` (12px) cards — less playful, more editorial geometry
- Saturated orange primary CTA ({colors.primary}) carries every action call

## Colors

> Source pages: mistral.ai/ (homepage), /products/studio (Le Studio product), /solutions/coding (coding solution), /news/vibe-remote-agents-mistral-medium-3-5 (news), /contact (contact form), /services (services tiers). Token coverage was identical across all six pages.

### Brand & Accent
- **Mistral Orange** ({colors.primary}): Primary CTA color, brand orange
- **Orange Deep** ({colors.primary-deep}): Pressed-state and emphasis variant
- **Sunshine 300** ({colors.sunshine-300}): Atmospheric light orange-yellow
- **Sunshine 500** ({colors.sunshine-500}): Mid-spectrum sunset orange
- **Sunshine 700** ({colors.sunshine-700}): Saturated mid sunset gradient stop
- **Sunshine 800** ({colors.sunshine-800}): Deep sunset gradient stop
- **Sunshine 900** ({colors.sunshine-900}): Deepest sunset orange
- **Yellow Saturated** ({colors.yellow-saturated}): Pure brand yellow used in the sunset stripe gradient
- **Block 5/6/7** ({colors.block-5}, {colors.block-6}, {colors.block-7}): Spectrum stops along the sunset gradient (light-yellow → mid-yellow → deep-orange)

### Cream / Neutral Warm
- **Cream** ({colors.cream}): Warm yellow-cream surface for form panels, feature cards, footer
- **Cream Soft** ({colors.cream-soft}): Lighter cream variant
- **Cream Deeper** ({colors.cream-deeper}): More-saturated cream for badge/tag chips
- **Beige Deep** ({colors.beige-deep}): Cream surface 1px border color

### Surface
- **Canvas White** ({colors.canvas}): Page background and card surface
- **Surface** ({colors.surface}): Subtle quieter background
- **Surface Cream** ({colors.surface-cream}): Cream-yellow tinted surface
- **Surface Code** ({colors.surface-code}): Dark code-block / IDE mockup surface
- **Hairline** ({colors.hairline}): 1px borders
- **Hairline Soft** ({colors.hairline-soft}): Quieter dividers
- **Hairline Strong** ({colors.hairline-strong}): Stronger 1px border for inputs

### Text
- **Ink** ({colors.ink}): Primary headlines and body text
- **Ink Tint** ({colors.ink-tint}): Slightly softer black for hero overlay text
- **Charcoal** ({colors.charcoal}): Body emphasis
- **Slate** ({colors.slate}): Secondary text
- **Steel** ({colors.steel}): Tertiary text, captions
- **Stone** ({colors.stone}): Muted labels
- **Muted** ({colors.muted}): Disabled, placeholders
- **On Dark** ({colors.on-dark}): White text on dark surfaces
- **On Dark Muted** ({colors.on-dark-muted}): Reduced-opacity white
- **On Cream** ({colors.on-cream}): Ink text on cream surfaces

### Semantic
- **Link** ({colors.link}): Inline link color (matches primary orange)

## Typography

### Font Family
**PP Editorial Old** (display): Mistral's signature near-serif elegant display typeface used for hero displays, large numbers, and editorial section openers. Carries a slightly classical, intelligent character that contrasts the contemporary product positioning. Fallbacks: 'Times New Roman', Georgia, serif.

**Inter** (UI prose): Variable typeface for body, navigation, buttons, labels, captions. Fallbacks: ui-sans-serif, system-ui, -apple-system, sans-serif.

**JetBrains Mono** (code): Monospace for code blocks and IDE mockups. Fallbacks: 'SF Mono', Menlo, Consolas, monospace.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Family | Use |
|---|---|---|---|---|---|---|
| `{typography.hero-display}` | 84px | 400 | 1.05 | -1.5px | PP Editorial Old | Hero ("Frontier AI. In your hands.") |
| `{typography.display-lg}` | 64px | 400 | 1.10 | -1px | PP Editorial Old | Section openers |
| `{typography.heading-1}` | 52px | 400 | 1.15 | -0.5px | PP Editorial Old | Page headlines ("Get in touch with the team.") |
| `{typography.stat-display}` | 56px | 400 | 1.10 | -1px | PP Editorial Old | Stat callouts ("75%") |
| `{typography.heading-2}` | 36px | 500 | 1.20 | -0.5px | Inter | Subsection headlines |
| `{typography.heading-3}` | 28px | 500 | 1.25 | 0 | Inter | Card titles |
| `{typography.heading-4}` | 22px | 500 | 1.30 | 0 | Inter | Feature tile titles |
| `{typography.heading-5}` | 18px | 500 | 1.40 | 0 | Inter | Smaller card titles |
| `{typography.subtitle}` | 18px | 400 | 1.50 | 0 | Inter | Hero subtitle, lead body |
| `{typography.body-md}` | 16px | 400 | 1.55 | 0 | Inter | Primary body text |
| `{typography.body-md-medium}` | 16px | 500 | 1.55 | 0 | Inter | Body emphasis |
| `{typography.body-sm}` | 14px | 400 | 1.50 | 0 | Inter | Secondary body |
| `{typography.body-sm-medium}` | 14px | 500 | 1.50 | 0 | Inter | Active sidebar, button labels |
| `{typography.caption}` | 13px | 400 | 1.40 | 0 | Inter | Helper text |
| `{typography.caption-bold}` | 13px | 600 | 1.40 | 0 | Inter | Badge labels |
| `{typography.micro}` | 12px | 500 | 1.40 | 0 | Inter | Footer microcopy |
| `{typography.micro-uppercase}` | 11px | 600 | 1.40 | 1px | Inter | Section eyebrows |
| `{typography.button-md}` | 14px | 500 | 1.30 | 0 | Inter | Button labels |
| `{typography.code-md}` | 14px | 400 | 1.50 | 0 | JetBrains Mono | Code blocks |

### Principles
- **Editorial / sans pairing** — PP Editorial Old (near-serif, classical) anchors hero displays; Inter (geometric sans) carries everything else. The contrast IS the brand voice.
- **Generous body leading** (1.55 on body-md) for editorial readability across long-form pages
- **Tight hero leading** (1.05 on 84px display) creates magazine-grade typographic display
- **Negative letter-spacing** progresses with size — display sizes use -1.5px to -0.5px; smaller heads relax to 0
- **Stat-display token** (56px Editorial) for marketing stat callouts ("75% / 80% / 100%")

## Layout

### Spacing System
- **Base unit**: 4px (8px primary increment)
- **Tokens**: `{spacing.xxs}` (4px) · `{spacing.xs}` (8px) · `{spacing.sm}` (12px) · `{spacing.md}` (16px) · `{spacing.lg}` (20px) · `{spacing.xl}` (24px) · `{spacing.xxl}` (32px) · `{spacing.xxxl}` (40px) · `{spacing.section-sm}` (48px) · `{spacing.section}` (64px) · `{spacing.section-lg}` (96px) · `{spacing.hero}` (120px)
- **Section rhythm**: Marketing pages use `{spacing.section-lg}` (96px); content pages tighten to `{spacing.section}` (64px)
- **Card internal padding**: `{spacing.xl}` (24px) for compact cards; `{spacing.xxl}` (32px) for feature panels and form panels

### Grid & Container
- Marketing pages use 1280px max-width with 32px gutters
- Hero band uses 2-column split (text left, sunset photography right) on desktop
- Le Studio product page uses 3-up feature grid below the hero
- Contact page uses 1-column layout with cream form panel centered (~520px max-width)
- Services page uses 4-tier card layout with cream feature panel separator strip

### Whitespace Philosophy
Marketing surfaces give content generous breathing room — `{spacing.hero}` (120px) hero padding lets the mountain-sunset photography fill the frame. Form pages tighten dramatically: contact form panel uses `{spacing.xxl}` (32px) internal padding, fields stack on `{spacing.md}` (16px) gap.

## Elevation & Depth

The system runs predominantly flat with strategic atmospheric depth from photography.

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow; `{colors.hairline-soft}` border | Default cards, table rows, form inputs |
| 1 (subtle) | `rgba(0, 0, 0, 0.04) 0px 1px 2px 0px` | Hover-elevated tiles |
| 2 (card) | `rgba(0, 0, 0, 0.04) 0px 4px 12px 0px` | Standard feature cards |
| 3 (mockup) | `rgba(0, 0, 0, 0.08) 0px 12px 24px -4px` | IDE mockup, code editor frames |
| 4 (modal) | `rgba(0, 0, 0, 0.12) 0px 16px 48px -8px` | Modals, dropdowns |

### Decorative Depth
- The atmospheric depth on Mistral's hero comes from the photographic mountain-sunset imagery — natural light gradient does the work
- The "sunset stripe" closing band carries depth via its multi-stop gradient (red → orange → yellow → cream)
- IDE / code mockups use dark-canvas backgrounds with subtle drop shadow

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Small chips, micro-controls |
| `{rounded.sm}` | 6px | Discount badges, compact UI |
| `{rounded.md}` | 8px | Buttons, inputs, search-pill, code blocks |
| `{rounded.lg}` | 12px | Cards, modals, panels (the dominant card radius) |
| `{rounded.xl}` | 16px | Larger feature panels |
| `{rounded.xxl}` | 20px | Featured emphasis cards |
| `{rounded.full}` | 9999px | Status badges, pill tabs (used sparingly — most buttons are NOT pills) |

The radius scale is sober and editorial — Mistral does NOT use pill buttons. `{rounded.md}` (8px) for buttons, `{rounded.lg}` (12px) for cards, `{rounded.full}` reserved for badges and the rare pill tab.

### Photography Geometry
- Hero photography is full-bleed atmospheric mountain-sunset imagery with no internal framing
- IDE/code mockups render with `{rounded.lg}` (12px) corners on dark canvas
- Customer logos wall presents wordmarks inline at consistent 60–80px height
- Product imagery (Le Studio mockup, agent UI mockups) sits in `{rounded.lg}` panels with subtle border

## Components

> Per the no-hover policy, hover states are NOT documented. Default and pressed/active states only.

### Buttons

**`button-primary`** — Saturated-orange primary CTA, the dominant action.
- Background `{colors.primary}`, text `{colors.on-primary}`, typography `{typography.button-md}`, padding `10px 20px`, rounded `{rounded.md}`.
- Pressed state `button-primary-pressed` deepens to `{colors.primary-deep}`.
- Disabled state `button-primary-disabled` uses `{colors.hairline}` background and `{colors.muted}` text.

**`button-cream`** — Warm cream-yellow secondary action, common on cream-surface sections.
- Background `{colors.cream}`, text `{colors.ink}`, border `1px solid {colors.beige-deep}`, typography `{typography.button-md}`, padding `10px 20px`, rounded `{rounded.md}`.

**`button-dark`** — Dark/black primary CTA on cream surfaces.
- Background `{colors.ink}`, text `{colors.on-dark}`, typography `{typography.button-md}`, padding `10px 20px`, rounded `{rounded.md}`.

**`button-secondary`** — Outlined secondary action.
- Background transparent, text `{colors.ink}`, border `1px solid {colors.hairline-strong}`, typography `{typography.button-md}`, padding `10px 20px`, rounded `{rounded.md}`.

**`button-on-cream`** — White button on cream-tinted backgrounds.
- Background `{colors.canvas}`, text `{colors.ink}`, border `1px solid {colors.beige-deep}`, typography `{typography.button-md}`, padding `10px 20px`, rounded `{rounded.md}`.

**`button-link`** — Inline orange text link.
- Background transparent, text `{colors.primary}`, typography `{typography.body-sm-medium}`, padding `0`. Underline on activation.

### Cards & Containers

**`card-base`** — Standard content card.
- Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.xl}`, border `1px solid {colors.hairline-soft}`.

**`card-feature`** — White feature card with larger padding.
- Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.xxl}`, border `1px solid `{colors.hairline-soft}`.

**`card-cream`** — Warm cream-yellow feature card (services tiers, perk callouts).
- Background `{colors.cream}`, text `{colors.ink}`, rounded `{rounded.lg}`, padding `{spacing.xxl}`, border `1px solid {colors.beige-deep}`.

**`card-cream-soft`** — Lighter cream variant.
- Background `{colors.surface-cream-soft}`, text `{colors.ink}`, rounded `{rounded.lg}`, padding `{spacing.xxl}`.

**`card-feature-product`** — Product showcase card with subtle elevation.
- Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.xxl}`, border `1px solid {colors.hairline-soft}`, shadow `rgba(0, 0, 0, 0.04) 0px 4px 12px`.

**`card-photographic`** — Photographic product card with dark background.
- Background `{colors.surface-code}`, text `{colors.on-dark}`, rounded `{rounded.lg}`, padding `0` (image fills the card).

**`pricing-card`** — Standard pricing tier card.
- Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.xxl}`, border `1px solid {colors.hairline-soft}`.

**`pricing-card-featured`** — Featured pricing tier (cream background + orange border).
- Background `{colors.cream}`, rounded `{rounded.lg}`, padding `{spacing.xxl}`, border `2px solid {colors.primary}`.

### Inputs & Forms

**`text-input`** — Standard text field.
- Background `{colors.canvas}`, text `{colors.ink}`, border `1px solid {colors.hairline-strong}`, rounded `{rounded.md}`, padding `{spacing.sm} {spacing.md}`, height 44px.

**`text-input-focused`** — Activated state.
- Border switches to `2px solid {colors.primary}`.

**`text-area`** — Multi-line text area for contact form.
- Background `{colors.canvas}`, text `{colors.ink}`, border `1px solid {colors.hairline-strong}`, rounded `{rounded.md}`, padding `{spacing.md}`.

**`contact-form-panel`** — Cream-tinted form container on the contact page.
- Background `{colors.cream}`, rounded `{rounded.lg}`, padding `{spacing.xxl}`, border `1px solid {colors.beige-deep}`. Hosts text-inputs, text-area, submit `button-dark`.

### Tabs

**`pill-tab`** + **`pill-tab-active`** — Pill-style tab nav (used sparingly on product pages).
- Inactive: background `{colors.canvas}`, text `{colors.steel}`, border `1px solid {colors.hairline}`, padding `{spacing.xs} {spacing.md}`, rounded `{rounded.full}`.
- Active: background `{colors.ink}`, text `{colors.on-dark}`.

**`segmented-tab`** + **`segmented-tab-active`** — Underline-style tab navigation.
- Inactive: text `{colors.steel}`, transparent background, padding `{spacing.sm} {spacing.md}`, no bottom border.
- Active: text `{colors.primary}`, 2px bottom border in `{colors.primary}`.

### Badges & Status

**`badge-orange`** — Saturated orange badge.
- Background `{colors.primary}`, text `{colors.on-primary}`, typography `{typography.caption-bold}`, rounded `{rounded.full}`, padding `4px 10px`.

**`badge-cream`** — Cream-tinted tag chip.
- Background `{colors.cream-deeper}`, text `{colors.ink}`, typography `{typography.caption-bold}`, rounded `{rounded.full}`, padding `4px 10px`.

**`badge-dark`** — Dark/black status badge.
- Background `{colors.ink}`, text `{colors.on-dark}`, typography `{typography.caption-bold}`, rounded `{rounded.full}`, padding `4px 10px`.

**`promo-banner`** — Sticky black promo strip ABOVE the top nav.
- Background `{colors.ink}`, text `{colors.on-dark}`, typography `{typography.body-sm-medium}`, padding `{spacing.sm} {spacing.md}`. Carries one-line copy + inline CTA.

### Code

**`code-block`** — Syntax-highlighted IDE-style code block (Le Studio page mockup, agent demos).
- Background `{colors.surface-code}`, text `{colors.on-dark}`, typography `{typography.code-md}`, rounded `{rounded.md}`, padding `{spacing.md}`.

**`code-block-header`** — Header bar above the code block.
- Background `{colors.surface-code}`, text `{colors.on-dark-muted}`, typography `{typography.caption}`, padding `{spacing.xs} {spacing.md}`, bottom border `1px solid rgba(255,255,255,0.08)`.

### Documentation Components

**`feature-icon-tile`** — Cream-yellow feature icon callout.
- Background `{colors.cream}`, rounded `{rounded.md}`, padding `{spacing.md}`, border `1px solid {colors.beige-deep}`.

**`industry-tile`** — Industry-vertical tile in solutions page grid.
- Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.xl}`, border `1px solid {colors.hairline-soft}`.

**`stat-cell`** — Stat-row cell ("75% more / 80% better").
- Background transparent, text `{colors.ink}`, typography `{typography.stat-display}`, padding `{spacing.lg}`.

**`customer-testimonial-card`** — Customer quote card (used inside Le Studio and Solutions pages).
- Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.xxl}`, border `1px solid {colors.hairline-soft}`. Quote in `{typography.body-md}`, attribution in `{typography.body-sm}` `{colors.steel}`.

**`logo-wall-item`** — Customer logo wordmark cell.
- Background transparent, text `{colors.steel}`, typography `{typography.body-md-medium}`, padding `{spacing.lg}`.

**`faq-accordion-item`** — FAQ panel.
- Background `{colors.canvas}`, rounded `{rounded.md}`, padding `{spacing.xl}`, bottom border `1px solid {colors.hairline}`.

**`app-store-badge`** — App Store / Google Play download badge.
- Background `{colors.ink}`, text `{colors.on-dark}`, typography `{typography.caption-bold}`, rounded `{rounded.md}`, padding `{spacing.sm} {spacing.md}`.

### Navigation

**Top Navigation (Marketing)** — Sticky white bar.
- Background `{colors.canvas}`, height ~64px, bottom border `1px solid {colors.hairline-soft}`.
- Left: Mistral M-mark logo + "MISTRAL AI_" wordmark + horizontal link list (Products, Solutions, Research, Blog, Customers, Company).
- Right: "Contact Sales" link + black-pill "Try Studio" CTA.

### Signature Components

**`hero-band-sunset`** — Atmospheric sunset hero band.
- Background gradient `linear-gradient(135deg, {colors.sunshine-700} 0%, {colors.sunshine-900} 60%, {colors.primary} 100%)` overlaid on photographic mountain landscape.
- Layout: hero headline left in `{typography.hero-display}` ({colors.ink}), subtitle in `{typography.subtitle}` ({colors.ink-tint}), button row (`button-dark` + `button-secondary`), atmospheric mountain photography right.

**`sunset-stripe-band`** — Horizontal closing band at the foot of every page.
- Multi-stop gradient: `{colors.primary}` → `{colors.sunshine-700}` → `{colors.sunshine-500}` → `{colors.yellow-saturated}` → `{colors.cream}`.
- Padding `{spacing.lg} 0`. Spans full width, sits above the footer. THIS IS THE BRAND'S MOST RECOGNIZABLE SIGNATURE ELEMENT.

**`cta-banner-cream`** — Page-bottom CTA band on cream surface.
- Background `{colors.cream}`, text `{colors.ink}`, rounded `{rounded.lg}`, padding `{spacing.section}`. "The next chapter of AI is yours." headline in `{typography.heading-1}` (PP Editorial Old), button row below.

**`footer-region`** — Cream-tinted multi-column footer.
- Background `{colors.footer-cream}`, padding `{spacing.section} {spacing.xxl}`.
- 5-column link grid (Why Mistral / Explore / Build / Legal + brand mark column).
- Bottom: language picker + social icons.

**`footer-link`** — Individual footer link.
- Background transparent, text `{colors.primary}`, typography `{typography.body-sm}`, padding `{spacing.xxs} 0`.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (saturated orange) for primary CTAs and active states only
- Use the **sunset stripe band** at the foot of every page — it's the brand's most recognizable signature
- Pair PP Editorial Old (display) with Inter (UI) — never substitute either with a generic alternative
- Apply `{rounded.md}` (8px) to buttons and `{rounded.lg}` (12px) to cards consistently
- Use cream-yellow surfaces ({colors.cream}) for form panels, feature cards, and footer
- Anchor heroes with photographic mountain-sunset imagery (or its visual equivalent — atmospheric gradient sky)
- Use stat-display token (PP Editorial 56px) for stat callouts to maintain editorial character

### Don't
- Don't use pill-shaped buttons (`{rounded.full}`) — Mistral's geometry is sober and editorial, not playful
- Don't introduce additional accent colors beyond the orange/yellow/cream sunset palette
- Don't reduce hero leading below 1.05 — the editorial display needs that magazine-grade tightness
- Don't replace PP Editorial Old hero displays with Inter — the editorial / sans contrast IS the brand
- Don't apply heavy shadows on flat documentation cards; reserve elevation for IDE mockups
- Don't drop the sunset stripe band from any page bottom — it's the brand's continuity element

## Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Mobile (small) | < 480px | Single column. Hero scales to 40px (PP Editorial). Pill nav collapses to hamburger. Pricing tiers stack 1-up. |
| Mobile (large) | 480 – 767px | Feature tiles 2-up. Hero scales to 52px. |
| Tablet | 768 – 1023px | 2-column feature grids. Pill-tab nav returns. Hero 64px. |
| Desktop | 1024 – 1279px | Multi-column layouts. Hero 76px. Stat row at full width. |
| Wide Desktop | ≥ 1280px | Full 84px hero presentation. |

### Touch Targets
- Buttons render at 40–44px effective height — at WCAG AAA floor with `10px 20px` padding
- Form inputs render at 44px height
- Pill tabs render at ~32px tall — bumps to 44px on mobile

### Collapsing Strategy
- **Promo banner** stays full-width; truncates at < 480px
- **Top nav** below 1024px collapses to hamburger
- **Hero band**: 2-column hero (text + photography) collapses to stacked at < 1024px
- **Pricing tiers**: 4-column desktop → 2-column tablet → 1-column mobile
- **Stat row**: 3-column → stacked at < 768px
- **Hero typography**: 84px → 64px → 52px → 40px
- **Footer**: 5-column desktop → 3-column tablet → 1-column accordion mobile
- **Sunset stripe band** stays full-width on all breakpoints

### Image Behavior
- Mountain-sunset photography uses 16:9 ratio with full-bleed scaling
- IDE mockup images maintain aspect ratio across breakpoints
- Customer logo wall presents wordmarks at consistent 60–80px height

## Iteration Guide

1. Focus on ONE component at a time
2. Reference component names and tokens directly (`{colors.primary}`, `{component-name}-pressed`)
3. Run `npx @google/design.md lint DESIGN.md` after edits
4. Add new variants as separate `components:` entries
5. Default to `{typography.body-md}` for body and `{typography.subtitle}` for emphasis. Hero displays use `{typography.hero-display}` (PP Editorial Old).
6. Keep `{colors.primary}` confined to primary CTAs, active states, and the sunset stripe band
7. Cards use `{rounded.lg}` (12px), buttons use `{rounded.md}` (8px). Pills (`{rounded.full}`) reserved for badges only.
8. Always include the sunset-stripe-band component at the foot of every page mockup.

## Known Gaps

- Specific dark-mode token values not surfaced; the brand has not shipped a published dark-mode palette
- Animation/transition timings not extracted; recommend 150–200ms ease for hover/focus state transitions
- Form validation success state not explicitly captured beyond defaults
- Sunset stripe band gradient stops are approximations — the actual values may vary slightly across pages but the visual rhythm is consistent
