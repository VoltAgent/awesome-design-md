---
version: alpha
name: MongoDB-design-analysis
description: MongoDB carries a strong dual-mode visual identity — dark deep-teal hero bands with bright MongoDB green ({colors.brand-green}) CTAs paired with stark white documentation surfaces. The signature green pill button is unmistakable across product, pricing, learning, and AI use-case surfaces. The system uses Euclid Circular A as its display face, anchors a 3-tier pricing comparison (Free / Flex / Dedicated), and presents extensive course catalogs in card grids with colored category tags. Coverage spans homepage, Atlas product page, Community Edition, MongoDB University, AI use cases, and pricing.

colors:
  primary: "#00ed64"
  primary-deep: "#00b545"
  primary-pressed: "#008c34"
  on-primary: "#001e2b"
  brand-green: "#00ed64"
  brand-green-dark: "#00684a"
  brand-green-mid: "#00a35c"
  brand-green-soft: "#c3f0d2"
  brand-teal-deep: "#001e2b"
  brand-teal: "#003d4f"
  brand-teal-mid: "#00684a"
  accent-purple: "#7b3ff2"
  accent-orange: "#fa6e39"
  accent-pink: "#f06bb8"
  accent-blue: "#3d4f9f"
  semantic-warning-bg: "#fff8e0"
  semantic-warning-text: "#946f3f"
  canvas: "#ffffff"
  canvas-dark: "#001e2b"
  surface: "#f9fbfa"
  surface-soft: "#f4f7f6"
  surface-feature: "#e3fcef"
  hairline: "#e1e5e8"
  hairline-soft: "#eceff1"
  hairline-strong: "#c1ccd6"
  hairline-dark: "#1c2d38"
  ink: "#001e2b"
  charcoal: "#1c2d38"
  slate: "#3d4f5b"
  steel: "#5c6c7a"
  stone: "#7c8c9a"
  muted: "#a8b3bc"
  on-dark: "#ffffff"
  on-dark-muted: "#a8b3bc"

typography:
  hero-display:
    fontFamily: Euclid Circular A
    fontSize: 72px
    fontWeight: 500
    lineHeight: 1.10
    letterSpacing: -1.5px
  display-lg:
    fontFamily: Euclid Circular A
    fontSize: 56px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -1px
  heading-1:
    fontFamily: Euclid Circular A
    fontSize: 48px
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: -0.5px
  heading-2:
    fontFamily: Euclid Circular A
    fontSize: 36px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: -0.5px
  heading-3:
    fontFamily: Euclid Circular A
    fontSize: 28px
    fontWeight: 500
    lineHeight: 1.30
  heading-4:
    fontFamily: Euclid Circular A
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.35
  heading-5:
    fontFamily: Euclid Circular A
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.40
  subtitle:
    fontFamily: Euclid Circular A
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.50
  body-md:
    fontFamily: Euclid Circular A
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
  body-md-medium:
    fontFamily: Euclid Circular A
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.55
  body-sm:
    fontFamily: Euclid Circular A
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.50
  body-sm-medium:
    fontFamily: Euclid Circular A
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.50
  caption:
    fontFamily: Euclid Circular A
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.40
  caption-bold:
    fontFamily: Euclid Circular A
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.40
  micro:
    fontFamily: Euclid Circular A
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.40
  micro-uppercase:
    fontFamily: Euclid Circular A
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1.40
    letterSpacing: 1px
  button-md:
    fontFamily: Euclid Circular A
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.30
  code-md:
    fontFamily: Source Code Pro
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  xxl: 24px
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
    backgroundColor: "{colors.brand-green}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "10px 22px"
  button-primary-pressed:
    backgroundColor: "{colors.primary-pressed}"
    textColor: "{colors.on-primary}"
  button-primary-disabled:
    backgroundColor: "{colors.hairline}"
    textColor: "{colors.muted}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "10px 22px"
    border: "1px solid {colors.hairline-strong}"
  button-on-dark:
    backgroundColor: "{colors.brand-green}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "10px 22px"
  button-secondary-on-dark:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "10px 22px"
    border: "1px solid {colors.hairline-dark}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.brand-green-dark}"
    typography: "{typography.body-sm-medium}"
    padding: "0"
  card-base:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline}"
  card-feature:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xxl}"
    border: "1px solid {colors.hairline}"
  card-product-deploy:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xxl}"
    border: "1px solid {colors.hairline}"
  card-feature-dark:
    backgroundColor: "{colors.brand-teal-deep}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xxl}"
  card-course:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline}"
  card-cert:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline}"
  pricing-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xxl}"
    border: "1px solid {colors.hairline}"
  pricing-card-featured:
    backgroundColor: "{colors.surface-feature}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xxl}"
    border: "2px solid {colors.brand-green}"
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
    border: "2px solid {colors.brand-green-dark}"
  search-pill:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.steel}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
    height: 44px
    border: "1px solid {colors.hairline-strong}"
  search-pill-large:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.steel}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
    height: 56px
    border: "1px solid {colors.hairline-strong}"
  pill-tab:
    backgroundColor: "transparent"
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
    textColor: "{colors.brand-green-dark}"
    typography: "{typography.body-sm-medium}"
    border: "0 0 2px {colors.brand-green-dark} solid"
  badge-green:
    backgroundColor: "{colors.brand-green}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
  badge-green-soft:
    backgroundColor: "{colors.brand-green-soft}"
    textColor: "{colors.brand-green-dark}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  badge-purple:
    backgroundColor: "{colors.accent-purple}"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
  badge-orange:
    backgroundColor: "{colors.accent-orange}"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
  badge-popular:
    backgroundColor: "{colors.brand-teal-deep}"
    textColor: "{colors.brand-green}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  promo-banner:
    backgroundColor: "{colors.brand-teal-deep}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm-medium}"
    padding: "{spacing.sm} {spacing.md}"
  hero-band-dark:
    backgroundColor: "{colors.brand-teal-deep}"
    textColor: "{colors.on-dark}"
    rounded: "0"
    padding: "{spacing.hero}"
  hero-platform-card:
    backgroundColor: "{colors.brand-teal-mid}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xxl}"
  cta-banner-dark:
    backgroundColor: "{colors.brand-teal-deep}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.lg}"
    padding: "{spacing.section}"
  code-block:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.code-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  code-mockup-card:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
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
  service-tile:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline}"
  why-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  customer-testimonial-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xxl}"
    border: "1px solid {colors.hairline}"
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
    backgroundColor: "{colors.brand-teal-deep}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    padding: "{spacing.section} {spacing.xxl}"
  footer-link:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark-muted}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xxs} 0"
---

## Overview

MongoDB carries a strong dual-mode visual identity — dark deep-teal hero bands with the unmistakable bright MongoDB green ({colors.brand-green}) CTA pill paired with stark white documentation and pricing surfaces. The homepage opens with "One data platform. Unlimited AI potential." headline over a deep navy hero, the green pill sitting at the visual center as the primary CTA. Lower on the page, embedded code mockup cards (terminal-aesthetic) sit on the dark hero band, breaking out into white feature cards below. The pricing page renders a 3-tier comparison (Free / Flex / Dedicated) with a featured tier highlighted in soft mint background and bright green border. The MongoDB University page presents a course catalog grid where each tile carries a colored category tag (orange, purple, green, teal) — these are MongoDB's category-encoding accent colors and are the only place outside the brand green where saturated color appears.

The system uses Euclid Circular A as its display face. The face is contemporary geometric — confident but not overly playful — and pairs naturally with both the developer-tool aesthetic of the database product and the educational positioning of the learning surfaces. Cards use `{rounded.lg}` (12px) corners; buttons use `{rounded.full}` pills universally. The brand-teal palette ({colors.brand-teal-deep}) anchors hero bands, footer, code mockups, and the dark CTA banners.

**Key Characteristics:**
- Deep navy/teal hero bands ({colors.brand-teal-deep}) with bright MongoDB green ({colors.brand-green}) CTA pills
- Stark white pricing/documentation surfaces with colored category tags for course tiles (purple, orange, green, teal)
- Euclid Circular A across every UI surface
- Pill-shaped buttons ({rounded.full}) and 12px-rounded cards
- 3-tier pricing comparison (Free / Flex / Dedicated) with featured-mint highlight tier
- Code mockup cards with terminal-aesthetic dark canvas

## Colors

> Source pages: mongodb.com/ (homepage), /products/platform/atlas-database (Atlas product), /products/self-managed/community-edition, learn.mongodb.com/ (MongoDB University), /solutions/use-cases/artificial-intelligence (AI), /pricing (3-tier comparison). Token coverage was identical across all six pages.

### Brand & Accent
- **MongoDB Green** ({colors.brand-green}): The brand's most recognizable signal — bright pill-CTA color
- **Green Dark** ({colors.brand-green-dark}): Inline link color, secondary green
- **Green Mid** ({colors.brand-green-mid}): Mid-spectrum green for atmospheric tints
- **Green Soft** ({colors.brand-green-soft}): Pale-mint background tint for success badges and featured pricing tier
- **Brand Teal Deep** ({colors.brand-teal-deep}): Deep navy-teal for hero bands, footer
- **Brand Teal** ({colors.brand-teal}): Mid-spectrum teal
- **Brand Teal Mid** ({colors.brand-teal-mid}): Lighter teal for hero platform cards

### Category Accent (Course Tags)
- **Accent Purple** ({colors.accent-purple}): Course tag for "Database & Security"
- **Accent Orange** ({colors.accent-orange}): Course tag for "Search"
- **Accent Pink** ({colors.accent-pink}): Course tag variant
- **Accent Blue** ({colors.accent-blue}): Course tag variant for atlas/cloud topics

### Surface
- **Canvas White** ({colors.canvas}): Page background and primary card surface
- **Canvas Dark** ({colors.canvas-dark}): Code-block backgrounds, dark mockup canvas
- **Surface** ({colors.surface}): Subtle section backgrounds, search-pill rest
- **Surface Soft** ({colors.surface-soft}): Quieter section divisions
- **Surface Feature** ({colors.surface-feature}): Pale mint background for featured pricing tier
- **Hairline** ({colors.hairline}): 1px borders and primary dividers
- **Hairline Soft** ({colors.hairline-soft}): Quieter dividers
- **Hairline Strong** ({colors.hairline-strong}): Stronger 1px border for inputs
- **Hairline Dark** ({colors.hairline-dark}): Border on dark surfaces

### Text
- **Ink** ({colors.ink}): Primary headlines and body text (deep navy-teal)
- **Charcoal** ({colors.charcoal}): Body emphasis
- **Slate** ({colors.slate}): Secondary text
- **Steel** ({colors.steel}): Tertiary text, captions
- **Stone** ({colors.stone}): Muted labels
- **Muted** ({colors.muted}): Disabled, placeholders
- **On Dark** ({colors.on-dark}): White text on dark surfaces
- **On Dark Muted** ({colors.on-dark-muted}): Reduced-opacity white

### Semantic
- **Warning Background** ({colors.semantic-warning-bg}): Pale yellow callout bg
- **Warning Text** ({colors.semantic-warning-text}): Warning state copy color

## Typography

### Font Family
**Euclid Circular A** (primary): MongoDB's geometric sans-serif. Fallbacks: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif.
**Source Code Pro** (code): Monospace for code mockups. Fallbacks: 'SF Mono', Menlo, Consolas, monospace.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.hero-display}` | 72px | 500 | 1.10 | -1.5px | Hero ("One data platform") |
| `{typography.display-lg}` | 56px | 500 | 1.15 | -1px | Major section openers |
| `{typography.heading-1}` | 48px | 500 | 1.20 | -0.5px | Page-level headlines |
| `{typography.heading-2}` | 36px | 500 | 1.25 | -0.5px | Subsection headlines |
| `{typography.heading-3}` | 28px | 500 | 1.30 | 0 | Card titles |
| `{typography.heading-4}` | 22px | 500 | 1.35 | 0 | Feature tile titles |
| `{typography.heading-5}` | 18px | 600 | 1.40 | 0 | Smaller card titles, FAQ questions |
| `{typography.subtitle}` | 18px | 400 | 1.50 | 0 | Hero subtitle, lead body |
| `{typography.body-md}` | 16px | 400 | 1.55 | 0 | Primary body text |
| `{typography.body-sm}` | 14px | 400 | 1.50 | 0 | Secondary body, table cells |
| `{typography.body-sm-medium}` | 14px | 500 | 1.50 | 0 | Active sidebar, button labels |
| `{typography.caption-bold}` | 13px | 600 | 1.40 | 0 | Badge labels |
| `{typography.micro-uppercase}` | 11px | 600 | 1.40 | 1px | Section eyebrows, course category tags |
| `{typography.button-md}` | 14px | 600 | 1.30 | 0 | Pill button labels |
| `{typography.code-md}` | 14px | 400 | 1.55 | 0 | Code mockups |

### Principles
- Tight hero leading (1.10) on 72px display
- Negative letter-spacing on display sizes (-1.5px to -0.5px)
- 600 weight reserved for buttons and small emphasis (FAQ headings, badges)
- Generous body leading (1.55) for technical documentation readability

## Layout

### Spacing System
- **Base unit**: 4px (8px primary increment)
- **Tokens**: `{spacing.xxs}` (4px) through `{spacing.hero}` (120px)
- **Section rhythm**: Marketing pages use `{spacing.section-lg}` (96px); pricing tightens to `{spacing.section}` (64px)

### Grid & Container
- 1280px max-width with 32px gutters
- Pricing: 3-tier card row, dense feature comparison table below
- Learn catalog: 3-up course tile grid, 4-up certification grid
- AI use cases: 2-column hero with atmospheric illustration

### Whitespace Philosophy
Marketing surfaces give content generous breathing room — `{spacing.hero}` (120px) hero padding for deep teal bands. Pricing/learn surfaces tighten dramatically.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow; `{colors.hairline}` border | Default cards, table rows |
| 1 (subtle) | `rgba(0, 30, 43, 0.04) 0px 1px 2px 0px` | Hover-elevated tiles |
| 2 (card) | `rgba(0, 30, 43, 0.08) 0px 4px 12px 0px` | Feature cards |
| 3 (mockup) | `rgba(0, 30, 43, 0.12) 0px 12px 24px -4px` | Code mockup over hero |
| 4 (modal) | `rgba(0, 30, 43, 0.16) 0px 16px 48px -8px` | Modals, dropdowns |

### Decorative Depth
- Dark teal hero bands carry atmospheric gradient depth
- Code mockup cards on hero use canvas-dark surface with terminal aesthetic
- Pale-mint pricing-feature tier uses brand-tinted shadow

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Course category tags |
| `{rounded.sm}` | 6px | Type badges, code chips |
| `{rounded.md}` | 8px | Inputs, search-pill, code blocks |
| `{rounded.lg}` | 12px | Cards, pricing tiers, course tiles |
| `{rounded.xl}` | 16px | Larger feature panels |
| `{rounded.xxl}` | 24px | Featured product showcases |
| `{rounded.full}` | 9999px | All buttons, status badges |

### Photography Geometry
- Hero illustrations sit on full-bleed dark backgrounds
- Course tile thumbnails use `{rounded.lg}` corners
- Customer logos wall: wordmarks at consistent 60–80px height

## Components

> Per the no-hover policy, hover states are NOT documented. Default and pressed/active states only.

### Buttons

**`button-primary`** — Bright MongoDB green pill primary CTA, the dominant action.
- Background `{colors.brand-green}`, text `{colors.on-primary}` (deep navy), typography `{typography.button-md}`, padding `10px 22px`, rounded `{rounded.full}`.
- Pressed state `button-primary-pressed` deepens to `{colors.primary-pressed}`.
- Disabled state `button-primary-disabled` uses `{colors.hairline}` background.

**`button-secondary`** — Outlined pill for secondary actions.
- Background transparent, text `{colors.ink}`, border `1px solid {colors.hairline-strong}`, typography `{typography.button-md}`, padding `10px 22px`, rounded `{rounded.full}`.

**`button-on-dark`** — Bright green pill on dark hero bands.
- Background `{colors.brand-green}`, text `{colors.on-primary}`, typography `{typography.button-md}`, padding `10px 22px`, rounded `{rounded.full}`.

**`button-secondary-on-dark`** — Outlined pill on dark backgrounds.
- Background transparent, text `{colors.on-dark}`, border `1px solid {colors.hairline-dark}`, typography `{typography.button-md}`, padding `10px 22px`, rounded `{rounded.full}`.

**`button-ghost`** — Quieter rectangular ghost button.
- Background transparent, text `{colors.ink}`, typography `{typography.button-md}`, padding `8px 12px`, rounded `{rounded.md}`.

**`button-link`** — Inline green text link.
- Background transparent, text `{colors.brand-green-dark}`, typography `{typography.body-sm-medium}`, padding `0`.

### Cards & Containers

**`card-base`** — Standard content card.
- Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.xl}`, border `1px solid {colors.hairline}`.

**`card-feature`** — Feature card with larger padding.
- Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.xxl}`, border `1px solid {colors.hairline}`.

**`card-product-deploy`** — Product deployment card ("MongoDB Atlas / Community").
- Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.xxl}`, border `1px solid {colors.hairline}`.

**`card-feature-dark`** — Dark teal feature card on hero band.
- Background `{colors.brand-teal-deep}`, text `{colors.on-dark}`, rounded `{rounded.lg}`, padding `{spacing.xxl}`.

**`card-course`** — MongoDB University course tile.
- Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.xl}`, border `1px solid {colors.hairline}`.
- Top: colored category tag. Below: title `{typography.heading-5}`, description `{typography.body-sm}`, "Get Started →" link.

**`card-cert`** — Certification card.
- Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.xl}`, border `1px solid {colors.hairline}`.

**`pricing-card`** — Standard pricing tier card.
- Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.xxl}`, border `1px solid {colors.hairline}`.

**`pricing-card-featured`** — Featured pricing tier (Flex tier, mint background + green border).
- Background `{colors.surface-feature}`, rounded `{rounded.lg}`, padding `{spacing.xxl}`, border `2px solid {colors.brand-green}`.

### Inputs & Forms

**`text-input`** — Standard text field.
- Background `{colors.canvas}`, text `{colors.ink}`, border `1px solid {colors.hairline-strong}`, rounded `{rounded.md}`, padding `{spacing.sm} {spacing.md}`, height 44px.

**`text-input-focused`** — Activated state.
- Border switches to `2px solid {colors.brand-green-dark}`.

**`search-pill`** — Standard 44px search bar.
- Background `{colors.surface}`, text `{colors.steel}`, typography `{typography.body-md}`, rounded `{rounded.md}`, height 44px, border `1px solid {colors.hairline-strong}`.

**`search-pill-large`** — Large 56px search bar (top of MongoDB University catalog).
- Background `{colors.canvas}`, text `{colors.steel}`, typography `{typography.body-md}`, rounded `{rounded.md}`, height 56px, border `1px solid {colors.hairline-strong}`.

### Tabs

**`pill-tab`** + **`pill-tab-active`** — Pill-style tab nav (top of pricing: "MongoDB Atlas / Enterprise Advanced").
- Inactive: text `{colors.steel}`, border `1px solid {colors.hairline}`, padding `{spacing.xs} {spacing.md}`, rounded `{rounded.full}`.
- Active: background `{colors.ink}`, text `{colors.on-dark}`.

**`segmented-tab`** + **`segmented-tab-active`** — Underline-style tab navigation.
- Inactive: text `{colors.steel}`, no border. Active: text `{colors.brand-green-dark}`, 2px bottom border in `{colors.brand-green-dark}`.

### Badges & Status

**`badge-green`** — Bright green badge for new product highlights.
- Background `{colors.brand-green}`, text `{colors.on-primary}`, typography `{typography.caption-bold}`, rounded `{rounded.sm}`, padding `2px 8px`.

**`badge-green-soft`** — Pale-mint pill for success/free indicators.
- Background `{colors.brand-green-soft}`, text `{colors.brand-green-dark}`, typography `{typography.caption-bold}`, rounded `{rounded.full}`, padding `4px 10px`.

**`badge-purple`** — Purple course category tag.
- Background `{colors.accent-purple}`, text `{colors.on-dark}`, typography `{typography.caption-bold}`, rounded `{rounded.sm}`, padding `2px 8px`.

**`badge-orange`** — Orange course category tag.
- Background `{colors.accent-orange}`, text `{colors.on-dark}`, typography `{typography.caption-bold}`, rounded `{rounded.sm}`, padding `2px 8px`.

**`badge-popular`** — "Most Popular" tier indicator (dark teal pill with green text).
- Background `{colors.brand-teal-deep}`, text `{colors.brand-green}`, typography `{typography.caption-bold}`, rounded `{rounded.full}`, padding `4px 10px`.

**`promo-banner`** — Dark teal sticky promo strip ABOVE the top nav.
- Background `{colors.brand-teal-deep}`, text `{colors.on-dark}`, typography `{typography.body-sm-medium}`, padding `{spacing.sm} {spacing.md}`.

### Code

**`code-block`** — Code container.
- Background `{colors.canvas-dark}`, text `{colors.on-dark}`, typography `{typography.code-md}`, rounded `{rounded.md}`, padding `{spacing.md}`.

**`code-mockup-card`** — Embedded code mockup on hero band.
- Background `{colors.canvas-dark}`, text `{colors.on-dark}`, rounded `{rounded.lg}`, padding `{spacing.lg}`. Carries terminal-aesthetic code snippet.

### Tables

**`comparison-table`** — Pricing feature comparison table.
- Background `{colors.canvas}`, text `{colors.ink}`, typography `{typography.body-sm}`, rounded `{rounded.md}`, border `1px solid {colors.hairline}`.

**`comparison-row`** — Individual feature row.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.md} {spacing.lg}`, bottom border `1px solid {colors.hairline-soft}`.

### Documentation Components

**`service-tile`** — Tile in "Customize your deployment" 6-up grid.
- Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.xl}`, border `1px solid {colors.hairline}`.

**`why-card`** — "Loved by builders" feature card.
- Background `{colors.surface}`, rounded `{rounded.lg}`, padding `{spacing.xl}`.

**`customer-testimonial-card`** — Customer quote card.
- Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.xxl}`, border `1px solid {colors.hairline}`.

**`logo-wall-item`** — Customer logo wordmark cell.
- Background transparent, text `{colors.steel}`, typography `{typography.body-md-medium}`, padding `{spacing.lg}`.

**`faq-accordion-item`** — FAQ panel.
- Background `{colors.canvas}`, rounded `{rounded.md}`, padding `{spacing.xl}`, bottom border `1px solid {colors.hairline}`.

### Navigation

**Top Navigation (Marketing)** — Sticky white bar.
- Background `{colors.canvas}`, height ~64px, bottom border `1px solid {colors.hairline}`.
- Left: MongoDB leaf logo + "Solutions / Resources / Company / Pricing" links.
- Right: "Sign In" link + bright-green pill "Try Free" CTA.

### Signature Components

**`hero-band-dark`** — Deep teal hero band with embedded code mockup.
- Background `{colors.brand-teal-deep}`, text `{colors.on-dark}`, padding `{spacing.hero}`.
- Layout: centered headline `{typography.hero-display}`, subtitle, button row, `code-mockup-card` below.

**`hero-platform-card`** — Lighter-teal platform showcase card on dark hero.
- Background `{colors.brand-teal-mid}`, text `{colors.on-dark}`, rounded `{rounded.xl}`, padding `{spacing.xxl}`.

**`cta-banner-dark`** — Dark CTA banner at the bottom of feature pages.
- Background `{colors.brand-teal-deep}`, text `{colors.on-dark}`, rounded `{rounded.lg}`, padding `{spacing.section}`.

**`footer-region`** — Dark teal multi-column footer.
- Background `{colors.brand-teal-deep}`, padding `{spacing.section} {spacing.xxl}`.
- 6-column link grid.
- Section headings in `{typography.body-sm-medium}` `{colors.on-dark}`.

**`footer-link`** — Individual footer link.
- Background transparent, text `{colors.on-dark-muted}`, typography `{typography.body-sm}`, padding `{spacing.xxs} 0`.

## Do's and Don'ts

### Do
- Use `{colors.brand-green}` (bright MongoDB green) for primary CTAs everywhere
- Pair dark-teal hero bands with bright green CTA pills
- Apply `{rounded.full}` to every button, every status badge
- Apply `{rounded.lg}` (12px) to cards consistently
- Use category accent colors (purple, orange, green, teal) ONLY for course tags
- Maintain Euclid Circular A across every UI surface
- Use code mockup cards with terminal-aesthetic content for product showcases

### Don't
- Don't use the bright green for body text or large surfaces
- Don't introduce additional accent colors beyond the brand green and category-encoding palette
- Don't soften corners on buttons; the pill is a brand signature
- Don't replace deep teal hero bands with white hero bands
- Don't apply heavy shadows on flat documentation cards; reserve elevation for code mockups
- Don't use Source Code Pro for prose

## Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Mobile (small) | < 480px | Single column. Hero 36px. Pricing 1-up. Course catalog 1-up. |
| Mobile (large) | 480 – 767px | Course tiles 2-up. Hero 48px. |
| Tablet | 768 – 1023px | 2-column feature grids. Hero 56px. |
| Desktop | 1024 – 1279px | 3-tier pricing card row. 3-up course catalog. Hero 64px. |
| Wide Desktop | ≥ 1280px | Full 72px hero presentation. |

### Touch Targets
- Pill buttons render at 40–44px effective height
- Form inputs render at 44px height
- Search pill (large) renders at 56px
- Pill tabs ~32px → 44px on mobile

### Collapsing Strategy
- **Promo banner** stays full-width; truncates at < 480px
- **Top nav** below 1024px collapses to hamburger
- **Hero band**: code mockup card moves below text on mobile
- **Pricing tiers**: 3-column → 2-column tablet → 1-column mobile
- **Course catalog**: 3-up → 2-up tablet → 1-up mobile
- **Hero typography**: 72px → 56px → 48px → 36px
- **Footer**: 6-column desktop → 3-column tablet → accordion mobile

### Image Behavior
- Atmospheric AI imagery uses 16:9 ratio with full-bleed scaling
- Code mockup card content remains readable across breakpoints
- Customer logo wall: wordmarks at consistent 60–80px height

## Iteration Guide

1. Focus on ONE component at a time
2. Reference component names and tokens directly
3. Run `npx @google/design.md lint DESIGN.md` after edits
4. Add new variants as separate `components:` entries
5. Default to `{typography.body-md}` for body
6. Keep `{colors.brand-green}` as the primary CTA across all surfaces
7. Pill-shaped buttons (`{rounded.full}`) always
8. Dark-teal hero bands frame primary CTAs

## Known Gaps

- Specific dark-mode token values for canvas/surface beyond hero bands not surfaced
- Animation/transition timings not extracted; recommend 150–200ms ease
- Form validation success state not explicitly captured
- Course-tile category color mappings are observation-based
