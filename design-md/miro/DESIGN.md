---
version: alpha
name: Miro-design-analysis
description: Miro presents itself as the AI-powered visual workspace through a confident, almost playful brand voice — anchored by its signature canary yellow ({colors.brand-yellow}) wordmark over white canvas, broken open by colorful pastel feature tints (rose, teal, coral, orange, mint) that echo the actual sticky-note color palette used on the live whiteboard. Black-pill primary buttons dominate marketing, real Miro-board mockups serve as feature illustrations, and a 4-tier pricing grid leads into a dense comparison table. Roobert PRO carries display headlines; the system supports homepage, pricing, AI Workflows product page, agile vertical, and customer stories surfaces.

colors:
  primary: "#1c1c1e"
  on-primary: "#ffffff"
  brand-yellow: "#ffd02f"
  brand-yellow-deep: "#fcb900"
  yellow-light: "#fff4c4"
  yellow-dark: "#746019"
  brand-blue: "#4262ff"
  blue-450: "#5b76fe"
  blue-pressed: "#2a41b6"
  brand-coral: "#ff9999"
  coral-light: "#ffc6c6"
  coral-dark: "#600000"
  brand-rose: "#ffd8f4"
  rose-light: "#fde0f0"
  brand-pink: "#fde0f0"
  brand-teal: "#0fbcb0"
  teal-light: "#c3faf5"
  moss-dark: "#187574"
  brand-orange-light: "#ffe6cd"
  brand-red: "#fbd4d4"
  brand-red-dark: "#e3c5c5"
  success-accent: "#00b473"
  canvas: "#ffffff"
  surface: "#f7f8fa"
  surface-soft: "#fafbfc"
  surface-yellow: "#fff8e0"
  surface-pricing-featured: "#f5f3ff"
  hairline: "#e0e2e8"
  hairline-soft: "#eef0f3"
  hairline-strong: "#c7cad5"
  ink-deep: "#050038"
  ink: "#1c1c1e"
  charcoal: "#2c2c34"
  slate: "#555a6a"
  steel: "#6b6f7e"
  stone: "#8e91a0"
  muted: "#a5a8b5"
  on-dark: "#ffffff"
  on-dark-muted: "#a5a8b5"
  footer-bg: "#1c1c1e"

typography:
  hero-display:
    fontFamily: Roobert PRO
    fontSize: 80px
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: -2px
  display-lg:
    fontFamily: Roobert PRO
    fontSize: 60px
    fontWeight: 500
    lineHeight: 1.10
    letterSpacing: -1.5px
  heading-1:
    fontFamily: Roobert PRO
    fontSize: 48px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -1px
  heading-2:
    fontFamily: Roobert PRO
    fontSize: 36px
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: -0.5px
  heading-3:
    fontFamily: Roobert PRO
    fontSize: 28px
    fontWeight: 500
    lineHeight: 1.25
  heading-4:
    fontFamily: Roobert PRO
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.30
  heading-5:
    fontFamily: Roobert PRO
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.40
  subtitle:
    fontFamily: Roobert PRO
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.50
  body-md:
    fontFamily: Roobert PRO
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.50
  body-md-medium:
    fontFamily: Roobert PRO
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.50
  body-sm:
    fontFamily: Roobert PRO
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.50
  body-sm-medium:
    fontFamily: Roobert PRO
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.50
  caption:
    fontFamily: Roobert PRO
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.40
  caption-bold:
    fontFamily: Roobert PRO
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.40
  micro:
    fontFamily: Roobert PRO
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.40
  micro-uppercase:
    fontFamily: Roobert PRO
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1.40
    letterSpacing: 0.5px
  button-md:
    fontFamily: Roobert PRO
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.30
  stat-display:
    fontFamily: Roobert PRO
    fontSize: 64px
    fontWeight: 500
    lineHeight: 1.10
    letterSpacing: -1.5px

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  xxl: 20px
  xxxl: 28px
  feature: 32px
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
    rounded: "{rounded.full}"
    padding: "12px 24px"
  button-primary-pressed:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.on-primary}"
  button-primary-disabled:
    backgroundColor: "{colors.hairline}"
    textColor: "{colors.muted}"
  button-yellow:
    backgroundColor: "{colors.brand-yellow}"
    textColor: "{colors.primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  button-blue:
    backgroundColor: "{colors.brand-blue}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
    border: "1px solid {colors.hairline-strong}"
  button-on-dark:
    backgroundColor: "{colors.on-dark}"
    textColor: "{colors.primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.brand-blue}"
    typography: "{typography.body-sm-medium}"
    padding: "0"
  button-icon-circular:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 36px
    border: "1px solid {colors.hairline}"
  card-base:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline-soft}"
  card-feature:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xxxl}"
    padding: "{spacing.xxl}"
    border: "1px solid {colors.hairline-soft}"
  card-feature-yellow:
    backgroundColor: "{colors.brand-yellow}"
    textColor: "{colors.primary}"
    rounded: "{rounded.xxxl}"
    padding: "{spacing.xxl}"
  card-feature-coral:
    backgroundColor: "{colors.coral-light}"
    textColor: "{colors.primary}"
    rounded: "{rounded.xxxl}"
    padding: "{spacing.xxl}"
  card-feature-teal:
    backgroundColor: "{colors.teal-light}"
    textColor: "{colors.primary}"
    rounded: "{rounded.xxxl}"
    padding: "{spacing.xxl}"
  card-feature-rose:
    backgroundColor: "{colors.rose-light}"
    textColor: "{colors.primary}"
    rounded: "{rounded.xxxl}"
    padding: "{spacing.xxl}"
  card-customer-story:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xxxl}"
    padding: "0"
    border: "1px solid {colors.hairline-soft}"
  card-stat:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.stat-display}"
    padding: "{spacing.lg}"
  pricing-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xxl}"
    border: "1px solid {colors.hairline}"
  pricing-card-featured:
    backgroundColor: "{colors.surface-pricing-featured}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xxl}"
    border: "2px solid {colors.brand-blue}"
  pricing-card-enterprise:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xxl}"
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
    border: "2px solid {colors.brand-blue}"
  search-pill:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.steel}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.xs} {spacing.md}"
    height: 40px
    border: "1px solid {colors.hairline}"
  filter-dropdown:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-medium}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.md}"
    border: "1px solid {colors.hairline-strong}"
  pill-tab:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.steel}"
    typography: "{typography.body-sm-medium}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.md}"
    border: "1px solid {colors.hairline}"
  pill-tab-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    border: "1px solid {colors.primary}"
  toggle-monthly-yearly:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "4px"
  badge-promo:
    backgroundColor: "{colors.brand-yellow}"
    textColor: "{colors.primary}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  badge-tag-yellow:
    backgroundColor: "{colors.surface-yellow}"
    textColor: "{colors.yellow-dark}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  badge-tag-purple:
    backgroundColor: "{colors.surface-pricing-featured}"
    textColor: "{colors.brand-blue}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  badge-tag-coral:
    backgroundColor: "{colors.coral-light}"
    textColor: "{colors.coral-dark}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  badge-success:
    backgroundColor: "{colors.success-accent}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  badge-discount:
    backgroundColor: "{colors.brand-yellow}"
    textColor: "{colors.primary}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.sm}"
    padding: "2px 6px"
  promo-banner:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm-medium}"
    padding: "{spacing.sm} {spacing.md}"
  comparison-table:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    border: "1px solid {colors.hairline}"
  comparison-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    padding: "{spacing.md} {spacing.lg}"
    border: "0 0 1px {colors.hairline-soft} solid"
  template-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xl}"
    padding: "{spacing.md}"
    border: "1px solid {colors.hairline}"
  whiteboard-mockup:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xl}"
    padding: "0"
    border: "1px solid {colors.hairline-soft}"
    shadow: "rgba(5, 0, 56, 0.08) 0px 12px 32px -4px"
  faq-accordion-item:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
    border: "0 0 1px {colors.hairline} solid"
  logo-wall-item:
    backgroundColor: "transparent"
    textColor: "{colors.steel}"
    typography: "{typography.body-md-medium}"
    padding: "{spacing.lg}"
  hero-band-marketing:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.hero-display}"
    rounded: "0"
    padding: "{spacing.hero}"
  cta-banner-dark:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.feature}"
    padding: "{spacing.section}"
  industry-tile:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline-soft}"
  capterra-badge:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
    border: "1px solid {colors.hairline}"
  footer-region:
    backgroundColor: "{colors.footer-bg}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    padding: "{spacing.section} {spacing.xxl}"
  footer-link:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark-muted}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xxs} 0"
  app-store-badge:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
---

## Overview

Miro positions itself as the AI-powered visual workspace through a confident, slightly playful brand voice. The homepage opens with a stark white canvas anchored by a small canary-yellow Miro wordmark in the top-left, a black-pill primary CTA "Get started free" and a secondary "Book a demo" outline pill — then dramatic real-Miro-board mockup imagery (sticky notes, kanban, mind maps) carries the visual weight. Across deeper surfaces, the system breaks open: pastel feature cards (rose, teal, coral, yellow) echo the actual sticky-note color palette of the live whiteboard product, and customer story cards reuse those tints to differentiate brand vignettes.

Roobert PRO — Miro's custom display face — anchors every typographic surface, from the 80px hero display down to 11px micro labels. The face's slightly rounded, geometric character pairs naturally with the playful product photography and the friendly product positioning. Black-pill primary buttons (`{rounded.full}`) dominate marketing CTAs; the brand color, signature canary yellow ({colors.brand-yellow}), is reserved for the wordmark, top promo banners, and "yellow tag" feature pills — never as a primary CTA. The 4-tier pricing comparison (Free / Starter / Business / Enterprise) leads into the densest surface in the system: a feature comparison table that runs ~80 rows deep across multiple section dividers.

**Key Characteristics:**
- Stark white canvas + Miro wordmark in canary yellow ({colors.brand-yellow}) as the recognizable opening signature
- Black-pill primary CTAs ({colors.primary} + `{rounded.full}`) as the dominant interactive element
- Pastel feature cards (yellow, rose, coral, teal, mint) that echo the actual sticky-note palette
- Roobert PRO across every UI surface; geometric, slightly rounded character
- Real Miro-board mockup imagery used as feature illustrations
- 4-tier pricing card grid + dense feature comparison table
- Massive dark footer ({colors.footer-bg}) with multi-column links + app-store badges

## Colors

> Source pages: miro.com/ (homepage), /pricing/ (4-tier comparison), /products/ai-workflows/ (AI product), /agile/ (vertical landing), /customers/ (story directory). Token coverage was identical across all five pages.

### Brand & Accent
- **Miro Yellow** ({colors.brand-yellow}): The brand's recognizable canary yellow — wordmark color, top promo banner, "yellow tag" pills
- **Yellow Deep** ({colors.brand-yellow-deep}): Darker variant for hover states and emphasis
- **Yellow Light** ({colors.yellow-light}): Pale yellow background tint for tag chips
- **Yellow Dark** ({colors.yellow-dark}): Yellow-tag text color (dark olive) for chip foreground
- **Brand Blue** ({colors.brand-blue}): Action blue for inline links and featured-pricing-tier border
- **Blue Pressed** ({colors.blue-pressed}): Pressed-state blue
- **Brand Coral** ({colors.brand-coral}): Coral accent for warm callouts
- **Coral Light** ({colors.coral-light}): Pale coral for feature card backgrounds
- **Coral Dark** ({colors.coral-dark}): Coral-tag text color (deep wine)
- **Brand Rose** ({colors.brand-rose}): Soft rose-pink for feature card variants
- **Brand Teal** ({colors.brand-teal}): Brand teal
- **Teal Light** ({colors.teal-light}): Pale teal for feature card backgrounds
- **Moss Dark** ({colors.moss-dark}): Deep teal-green text color
- **Brand Pink** ({colors.brand-pink}): Pale pink for soft callouts
- **Brand Orange Light** ({colors.brand-orange-light}): Soft orange for feature card backgrounds

### Surface
- **Canvas White** ({colors.canvas}): Page background and primary card surface
- **Surface** ({colors.surface}): Subtle section backgrounds, search-pill rest
- **Surface Soft** ({colors.surface-soft}): Quieter section divisions
- **Surface Yellow** ({colors.surface-yellow}): Pale yellow-tinted surface for tag chip
- **Surface Pricing Featured** ({colors.surface-pricing-featured}): Pale lavender for featured pricing tier
- **Hairline** ({colors.hairline}): 1px borders and primary dividers
- **Hairline Soft** ({colors.hairline-soft}): Quieter table-row dividers
- **Hairline Strong** ({colors.hairline-strong}): Stronger 1px border for inputs

### Text
- **Ink Deep** ({colors.ink-deep}): Headlines on lighter feature cards
- **Ink** ({colors.ink}): Primary headlines and body text
- **Charcoal** ({colors.charcoal}): Body emphasis text
- **Slate** ({colors.slate}): Secondary text, metadata
- **Steel** ({colors.steel}): Tertiary text, footer links
- **Stone** ({colors.stone}): Captions, muted labels
- **Muted** ({colors.muted}): Disabled labels, input placeholders
- **On Dark** ({colors.on-dark}): White text on dark surfaces
- **On Dark Muted** ({colors.on-dark-muted}): Reduced-opacity white on dark

### Semantic
- **Success Accent** ({colors.success-accent}): Confirmation/success indicator green
- **Brand Red** ({colors.brand-red}): Soft red for error backgrounds
- **Brand Red Dark** ({colors.brand-red-dark}): Stronger red for error borders

## Typography

### Font Family
**Roobert PRO** (primary): Miro's custom geometric sans-serif typeface. Used across every UI surface from oversized 80px hero displays to 11px micro labels. The face has a slightly rounded, friendly character that matches the brand's playful product positioning. Fallbacks: Noto Sans, -apple-system, BlinkMacSystemFont, sans-serif.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.hero-display}` | 80px | 500 | 1.05 | -2px | Marketing hero ("See how teams get great done with Miro") |
| `{typography.display-lg}` | 60px | 500 | 1.10 | -1.5px | Major section openers |
| `{typography.heading-1}` | 48px | 500 | 1.15 | -1px | Page-level headlines |
| `{typography.heading-2}` | 36px | 500 | 1.20 | -0.5px | Subsection headlines |
| `{typography.heading-3}` | 28px | 500 | 1.25 | 0 | Card titles |
| `{typography.heading-4}` | 22px | 500 | 1.30 | 0 | Feature tile titles |
| `{typography.heading-5}` | 18px | 500 | 1.40 | 0 | FAQ questions, smaller cards |
| `{typography.subtitle}` | 18px | 400 | 1.50 | 0 | Hero subtitle |
| `{typography.body-md}` | 16px | 400 | 1.50 | 0 | Primary body text |
| `{typography.body-md-medium}` | 16px | 500 | 1.50 | 0 | Logo wall labels |
| `{typography.body-sm}` | 14px | 400 | 1.50 | 0 | Secondary body, table cells |
| `{typography.body-sm-medium}` | 14px | 500 | 1.50 | 0 | Filter dropdowns, button labels |
| `{typography.caption}` | 13px | 400 | 1.40 | 0 | Helper text |
| `{typography.caption-bold}` | 13px | 600 | 1.40 | 0 | Badge labels, tag chips |
| `{typography.micro}` | 12px | 500 | 1.40 | 0 | Footer microcopy |
| `{typography.micro-uppercase}` | 11px | 600 | 1.40 | 0.5px | Section dividers in tables |
| `{typography.button-md}` | 14px | 500 | 1.30 | 0 | Pill button labels |
| `{typography.stat-display}` | 64px | 500 | 1.10 | -1.5px | "100M+ users" stat callouts |

### Principles
- **Tight hero leading** (1.05) creates magazine-grade display headlines on the 80px hero
- **Negative letter-spacing progression** — display sizes use -2px to -1.5px; smaller headings relax to 0
- **Stat-display token** (64px / 500) for marketing stat callouts
- **Single weight scale** — 400 (body), 500 (medium emphasis + headings), 600 (badges and uppercase). Roobert PRO does not use 700 in this system.

## Layout

### Spacing System
- **Base unit**: 4px (8px primary increment)
- **Tokens**: `{spacing.xxs}` (4px) · `{spacing.xs}` (8px) · `{spacing.sm}` (12px) · `{spacing.md}` (16px) · `{spacing.lg}` (20px) · `{spacing.xl}` (24px) · `{spacing.xxl}` (32px) · `{spacing.xxxl}` (40px) · `{spacing.section-sm}` (48px) · `{spacing.section}` (64px) · `{spacing.section-lg}` (96px) · `{spacing.hero}` (120px)
- **Section rhythm**: Marketing pages use `{spacing.section-lg}` (96px); pricing comparison tightens to `{spacing.section}` (64px); customer story stack uses `{spacing.xxl}` (32px)
- **Card internal padding**: `{spacing.xl}` (24px) for compact cards; `{spacing.xxl}` (32px) for feature panels

### Grid & Container
- Marketing pages use 1280px max-width with 32px gutters
- Pricing page renders 4-tier card row at desktop (Free / Starter / Business / Enterprise)
- Customer stories page uses 2-column grid with filter dropdowns
- AI Workflows page uses 2-column hero, then 3-up feature grid

### Whitespace Philosophy
Marketing surfaces give content generous breathing room — `{spacing.hero}` (120px) hero padding gives the small wordmark room to breathe. Pricing surfaces tighten dramatically.

## Elevation & Depth

The system runs predominantly flat with strategic depth on hero mockups.

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow; `{colors.hairline-soft}` border | Default cards, table rows, form inputs |
| 1 (subtle) | `rgba(5, 0, 56, 0.04) 0px 1px 2px 0px` | Subtle hover-elevated tiles |
| 2 (card) | `rgba(5, 0, 56, 0.06) 0px 4px 12px 0px` | Standard feature cards |
| 3 (mockup) | `rgba(5, 0, 56, 0.08) 0px 12px 32px -4px` | Hero whiteboard mockup framing |
| 4 (modal) | `rgba(5, 0, 56, 0.12) 0px 16px 48px -8px` | Modals, dropdowns |

### Decorative Depth
- The atmospheric depth on Miro's hero comes from the live-product-board mockup illustrations — sticky notes layered at z-offsets, color-block tints behind whiteboard frames
- Pastel feature cards carry their own visual weight via saturated background color
- Customer-story cards layer dark photographic content with overlay scrims

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Small chips, micro-controls |
| `{rounded.sm}` | 6px | Discount badges |
| `{rounded.md}` | 8px | Inputs, search-pill |
| `{rounded.lg}` | 12px | Standard cards, table containers |
| `{rounded.xl}` | 16px | Pricing cards, feature panels |
| `{rounded.xxl}` | 20px | Larger feature cards |
| `{rounded.xxxl}` | 28px | Pastel feature cards (yellow, rose, coral, teal) |
| `{rounded.feature}` | 32px | Hero CTA banner cards |
| `{rounded.full}` | 9999px | All buttons, pill tabs, badges |

### Photography Geometry
- Real Miro board mockups render with `{rounded.xl}` (16px) corners and a subtle drop shadow
- Customer story cards use `{rounded.xxxl}` (28px) corners with full-bleed photography
- Template card thumbnails use `{rounded.xl}` (16px) with photographic content
- Customer logos wall presents wordmarks inline at consistent 100px height

## Components

> Per the no-hover policy, hover states are NOT documented. Default and pressed/active states only.

### Buttons

**`button-primary`** — Black pill primary CTA, the dominant action ("Get started free").
- Background `{colors.primary}`, text `{colors.on-primary}`, typography `{typography.button-md}`, padding `12px 24px`, rounded `{rounded.full}`.
- Pressed state `button-primary-pressed` lifts to `{colors.charcoal}`.
- Disabled state `button-primary-disabled` uses `{colors.hairline}` background and `{colors.muted}` text.

**`button-yellow`** — Brand-yellow pill for moments of brand emphasis.
- Background `{colors.brand-yellow}`, text `{colors.primary}`, typography `{typography.button-md}`, padding `12px 24px`, rounded `{rounded.full}`.

**`button-blue`** — Brand-blue pill for inline action callouts.
- Background `{colors.brand-blue}`, text `{colors.on-primary}`, typography `{typography.button-md}`, padding `12px 24px`, rounded `{rounded.full}`.

**`button-secondary`** — Outlined pill for secondary actions ("Book a demo").
- Background transparent, text `{colors.ink}`, border `1px solid {colors.hairline-strong}`, typography `{typography.button-md}`, padding `12px 24px`, rounded `{rounded.full}`.

**`button-on-dark`** — White pill for dark CTA banners.
- Background `{colors.on-dark}`, text `{colors.primary}`, typography `{typography.button-md}`, padding `12px 24px`, rounded `{rounded.full}`.

**`button-ghost`** — Quieter rectangular ghost button.
- Background transparent, text `{colors.ink}`, typography `{typography.button-md}`, padding `8px 12px`, rounded `{rounded.md}`.

**`button-link`** — Inline text link.
- Background transparent, text `{colors.brand-blue}`, typography `{typography.body-sm-medium}`, padding `0`.

**`button-icon-circular`** — 36×36px circular utility button.
- Background `{colors.canvas}`, text `{colors.ink}`, border `1px solid {colors.hairline}`, rounded `{rounded.full}`.

### Cards & Containers

**`card-base`** — Standard content card.
- Background `{colors.canvas}`, rounded `{rounded.xl}`, padding `{spacing.xl}`, border `1px solid {colors.hairline-soft}`.

**`card-feature`** — White feature card with larger 28px corners.
- Background `{colors.canvas}`, rounded `{rounded.xxxl}`, padding `{spacing.xxl}`, border `1px solid {colors.hairline-soft}`.

**`card-feature-yellow`** — Pastel-yellow feature card.
- Background `{colors.brand-yellow}`, text `{colors.primary}`, rounded `{rounded.xxxl}`, padding `{spacing.xxl}`.

**`card-feature-coral`** — Pastel-coral feature card variant.
- Background `{colors.coral-light}`, text `{colors.primary}`, rounded `{rounded.xxxl}`, padding `{spacing.xxl}`.

**`card-feature-teal`** — Pastel-teal feature card variant.
- Background `{colors.teal-light}`, text `{colors.primary}`, rounded `{rounded.xxxl}`, padding `{spacing.xxl}`.

**`card-feature-rose`** — Pastel-rose feature card variant.
- Background `{colors.rose-light}`, text `{colors.primary}`, rounded `{rounded.xxxl}`, padding `{spacing.xxl}`.

**`card-customer-story`** — Customer story card.
- Background `{colors.canvas}`, rounded `{rounded.xxxl}`, padding `0` (image fills the card), border `1px solid {colors.hairline-soft}`.

**`card-stat`** — Stat-row cell for "100M+ users".
- Background transparent, text `{colors.ink}`, typography `{typography.stat-display}`, padding `{spacing.lg}`.

**`pricing-card`** — Standard pricing tier card.
- Background `{colors.canvas}`, rounded `{rounded.xl}`, padding `{spacing.xxl}`, border `1px solid {colors.hairline}`.

**`pricing-card-featured`** — Featured pricing tier (Business — lavender background + blue border).
- Background `{colors.surface-pricing-featured}`, rounded `{rounded.xl}`, padding `{spacing.xxl}`, border `2px solid {colors.brand-blue}`.

**`pricing-card-enterprise`** — Dark-canvas enterprise tier card.
- Background `{colors.primary}`, text `{colors.on-primary}`, rounded `{rounded.xl}`, padding `{spacing.xxl}`.

### Inputs & Forms

**`text-input`** — Standard text field.
- Background `{colors.canvas}`, text `{colors.ink}`, border `1px solid {colors.hairline-strong}`, rounded `{rounded.md}`, padding `{spacing.sm} {spacing.md}`, height 44px.

**`text-input-focused`** — Activated state.
- Border switches to `2px solid {colors.brand-blue}`.

**`search-pill`** — Search bar.
- Background `{colors.surface}`, text `{colors.steel}`, typography `{typography.body-sm}`, rounded `{rounded.md}`, height 40px, border `1px solid {colors.hairline}`.

**`filter-dropdown`** — Pill-shaped filter dropdown ("Company use" / "Industry" / "Use case").
- Background `{colors.canvas}`, text `{colors.ink}`, typography `{typography.body-sm-medium}`, rounded `{rounded.full}`, padding `{spacing.xs} {spacing.md}`, border `1px solid {colors.hairline-strong}`.

### Tabs

**`pill-tab`** + **`pill-tab-active`** — Pill-style tab nav.
- Inactive: background `{colors.canvas}`, text `{colors.steel}`, border `1px solid {colors.hairline}`, padding `{spacing.xs} {spacing.md}`, rounded `{rounded.full}`.
- Active: background `{colors.primary}`, text `{colors.on-primary}`.

**`toggle-monthly-yearly`** — Two-state pill toggle (Monthly / Annual on pricing).
- Background `{colors.surface}`, rounded `{rounded.full}`, padding `4px`.

### Badges & Status

**`badge-promo`** — Yellow promo banner badge.
- Background `{colors.brand-yellow}`, text `{colors.primary}`, typography `{typography.caption-bold}`, rounded `{rounded.full}`, padding `4px 10px`.

**`badge-tag-yellow`** — Soft-yellow feature tag chip ("Yellow" tag on AI Workflows page).
- Background `{colors.surface-yellow}`, text `{colors.yellow-dark}`, typography `{typography.caption-bold}`, rounded `{rounded.full}`, padding `4px 10px`.

**`badge-tag-purple`** — Lavender feature tag chip ("AI agent" tag).
- Background `{colors.surface-pricing-featured}`, text `{colors.brand-blue}`, typography `{typography.caption-bold}`, rounded `{rounded.full}`, padding `4px 10px`.

**`badge-tag-coral`** — Coral feature tag chip variant.
- Background `{colors.coral-light}`, text `{colors.coral-dark}`, typography `{typography.caption-bold}`, rounded `{rounded.full}`, padding `4px 10px`.

**`badge-success`** — Green success indicator.
- Background `{colors.success-accent}`, text `{colors.on-primary}`, typography `{typography.caption-bold}`, rounded `{rounded.full}`, padding `4px 10px`.

**`badge-discount`** — Yellow rectangular discount pill ("Save 15%").
- Background `{colors.brand-yellow}`, text `{colors.primary}`, typography `{typography.caption-bold}`, rounded `{rounded.sm}`, padding `2px 6px`.

**`promo-banner`** — Sticky black promo strip ABOVE the top nav.
- Background `{colors.primary}`, text `{colors.on-primary}`, typography `{typography.body-sm-medium}`, padding `{spacing.sm} {spacing.md}`. Carries inline yellow "GET YOUR SPOT" pill.

### Tables

**`comparison-table`** — Pricing feature comparison table.
- Background `{colors.canvas}`, text `{colors.ink}`, typography `{typography.body-sm}`, rounded `{rounded.md}`, border `1px solid {colors.hairline}`.

**`comparison-row`** — Individual feature row.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.md} {spacing.lg}`, bottom border `1px solid {colors.hairline-soft}`.

### Documentation Components

**`whiteboard-mockup`** — Real Miro-board UI rendered as feature illustration.
- Background `{colors.canvas}`, rounded `{rounded.xl}`, border `1px solid {colors.hairline-soft}`, shadow `rgba(5, 0, 56, 0.08) 0px 12px 32px -4px`.

**`template-card`** — Template thumbnail card.
- Background `{colors.canvas}`, rounded `{rounded.xl}`, padding `{spacing.md}`, border `1px solid {colors.hairline}`.

**`industry-tile`** — Industry-vertical tile.
- Background `{colors.canvas}`, rounded `{rounded.xl}`, padding `{spacing.xl}`, border `1px solid {colors.hairline-soft}`.

**`faq-accordion-item`** — FAQ panel item.
- Background `{colors.canvas}`, rounded `{rounded.md}`, padding `{spacing.xl}`, bottom border `1px solid {colors.hairline}`.

**`logo-wall-item`** — Customer logo wordmark cell.
- Background transparent, text `{colors.steel}`, typography `{typography.body-md-medium}`, padding `{spacing.lg}`.

**`capterra-badge`** — Review/rating badge in the footer.
- Background `{colors.canvas}`, text `{colors.ink}`, typography `{typography.caption}`, rounded `{rounded.md}`, padding `{spacing.sm} {spacing.md}`, border `1px solid {colors.hairline}`.

**`app-store-badge`** — App store / Google Play download pill.
- Background `{colors.canvas}`, text `{colors.primary}`, typography `{typography.caption-bold}`, rounded `{rounded.md}`, padding `{spacing.sm} {spacing.md}`.

### Navigation

**Top Navigation (Marketing)** — Sticky white bar with yellow Miro wordmark + horizontal links + right-side CTAs.
- Background `{colors.canvas}`, height ~64px.
- Left: Yellow square Miro wordmark + horizontal link list (Product, Solutions, Resources).
- Right: "Login / Pricing / Contact sales" links + black-pill "Get started free".

### Signature Components

**`hero-band-marketing`** — Marketing hero band.
- Background `{colors.canvas}`, padding `{spacing.hero}`.
- Layout: centered headline in `{typography.hero-display}`, centered subtitle, centered button row, then whiteboard mockup illustration below.

**`cta-banner-dark`** — Dark CTA banner at the bottom of feature pages.
- Background `{colors.primary}`, text `{colors.on-primary}`, rounded `{rounded.feature}`, padding `{spacing.section}`. Centered headline + subtitle + `button-on-dark` "Get started free".

**`footer-region`** — Massive multi-column dark footer.
- Background `{colors.footer-bg}`, padding `{spacing.section} {spacing.xxl}`.
- 6-column link grid (Product / Solutions / Tools / Resources / Company / Plans & Pricing).
- Section headings in `{typography.body-md-medium}` `{colors.on-dark}`.

**`footer-link`** — Individual link in the footer.
- Background transparent, text `{colors.on-dark-muted}`, typography `{typography.body-sm}`, padding `{spacing.xxs} 0`.

## Do's and Don'ts

### Do
- Reserve `{colors.brand-yellow}` for the wordmark, top promo banner, and "yellow tag" chips
- Use `{colors.primary}` (black) as the dominant CTA on all surfaces
- Pair pastel feature cards (yellow, rose, coral, teal) with white feature cards in the same viewport
- Apply `{rounded.full}` to every button, every pill tab, every status badge
- Apply `{rounded.xxxl}` (28px) to pastel feature cards
- Use real Miro-board mockups as feature illustrations
- Maintain Roobert PRO across every UI surface

### Don't
- Don't use `{colors.brand-yellow}` on standard CTAs or large background surfaces
- Don't introduce additional accent colors beyond yellow + brand pastels
- Don't soften corners on buttons; the pill is a brand signature
- Don't reduce hero leading below 1.05
- Don't apply heavy shadows on flat documentation cards; reserve elevation for whiteboard mockups
- Don't use stock photography — show the live product board UI

## Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Mobile (small) | < 480px | Single column. Hero scales to 36px. Pill nav collapses to hamburger. Pricing tiers stack 1-up. |
| Mobile (large) | 480 – 767px | Feature tiles 2-up. Hero scales to 48px. |
| Tablet | 768 – 1023px | 2-column feature grids. Pill-tab nav returns. |
| Desktop | 1024 – 1279px | 4-tier pricing card row. Customer story grid 2-up. Hero at 64px. |
| Wide Desktop | ≥ 1280px | Full hero presentation, 80px hero display. |

### Touch Targets
- Pill buttons render at 40–44px effective height — at WCAG AAA floor
- Circular icon buttons: 36×36px desktop → 44×44px mobile
- Form inputs render at 44px height
- Filter dropdowns render at ~36px tall — bumps to 44px on mobile

### Collapsing Strategy
- **Promo banner** stays full-width; truncates at < 480px
- **Top nav** below 1024px collapses to hamburger
- **Hero band**: 2-column hero collapses to stacked at < 1024px
- **Pricing comparison**: 4-column tiers → 2-column tablet → 1-column mobile; comparison table becomes horizontal-scroll
- **Customer story grid**: 2-up → 1-up at < 768px
- **Hero typography**: 80px → 60px tablet → 48px mobile-large → 36px mobile-small
- **Footer**: 6-column desktop → 3-column tablet → 2-column mobile → accordion at small mobile

### Image Behavior
- Whiteboard mockups maintain aspect ratio; lazy-loaded below the fold
- Customer story photography uses 16:9 ratio with full-bleed scaling
- Logo wall presents wordmarks at consistent 100px height

## Iteration Guide

1. Focus on ONE component at a time
2. Reference component names and tokens directly
3. Run `npx @google/design.md lint DESIGN.md` after edits
4. Add new variants as separate `components:` entries
5. Default to `{typography.body-md}` for body and `{typography.subtitle}` for emphasis
6. Keep `{colors.brand-yellow}` confined to wordmark, promo banner, and yellow-tag chips
7. Pill-shaped buttons (`{rounded.full}`) always
8. When showing the product, use a real Miro-board mockup with sticky-note color tints

## Known Gaps

- Specific dark-mode token values not surfaced
- Animation/transition timings not extracted; recommend 150–200ms ease
- Form validation success state not explicitly captured beyond defaults
- Sticky note color tints inside the actual whiteboard product are richer than what marketing surfaces capture
