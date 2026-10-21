---
version: alpha
name: MiniMax-design-analysis
description: MiniMax presents itself as a premium AI infrastructure brand through a striking duality — bold black-pill CTAs and stark white canvas for marketing, paired with vibrant gradient product cards (orange-red, magenta-pink, purple, blue) that turn each model release into a distinctive visual identity. The system uses DM Sans across all surfaces, employs an oversized 80px hero display, anchors major actions in deep near-black pills, and layers content density via a 3-column documentation grid with sidebar nav, prose body, and TOC. Coverage spans the marketing homepage, model showcase pages, developer documentation, and platform pricing surfaces.

colors:
  primary: "#0a0a0a"
  on-primary: "#ffffff"
  primary-soft: "#181e25"
  brand-coral: "#ff5530"
  brand-magenta: "#ea5ec1"
  brand-blue: "#1456f0"
  brand-blue-mid: "#3b82f6"
  brand-blue-deep: "#1d4ed8"
  brand-blue-700: "#17437d"
  brand-cyan: "#3daeff"
  brand-blue-200: "#bfdbfe"
  brand-purple: "#a855f7"
  canvas: "#ffffff"
  surface: "#f7f8fa"
  surface-soft: "#f2f3f5"
  hairline: "#e5e7eb"
  hairline-soft: "#eaecf0"
  ink: "#0a0a0a"
  ink-strong: "#000000"
  charcoal: "#222222"
  slate: "#45515e"
  steel: "#5f5f5f"
  stone: "#8e8e93"
  muted: "#a8aab2"
  success-bg: "#e8ffea"
  success-text: "#1ba673"
  on-dark: "#ffffff"
  footer-bg: "#0a0a0a"

typography:
  hero-display:
    fontFamily: DM Sans
    fontSize: 80px
    fontWeight: 600
    lineHeight: 1.10
    letterSpacing: -2px
  display-lg:
    fontFamily: DM Sans
    fontSize: 56px
    fontWeight: 600
    lineHeight: 1.10
    letterSpacing: -1.5px
  heading-lg:
    fontFamily: DM Sans
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: -1px
  heading-md:
    fontFamily: DM Sans
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.5px
  heading-sm:
    fontFamily: DM Sans
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.30
  card-title:
    fontFamily: DM Sans
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.40
  subtitle:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.50
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.50
  body-md-bold:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.50
  body-sm:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.50
  body-sm-medium:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.50
  caption:
    fontFamily: DM Sans
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.70
  caption-bold:
    fontFamily: DM Sans
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.50
  micro:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.50
  button-md:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.40

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  xxl: 20px
  xxxl: 24px
  hero: 32px
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
  section-lg: 80px
  hero: 96px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "11px 24px"
  button-primary-pressed:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.on-primary}"
  button-primary-disabled:
    backgroundColor: "{colors.hairline}"
    textColor: "{colors.muted}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "11px 24px"
    border: "1px solid {colors.ink}"
  button-tertiary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "11px 24px"
    border: "1px solid {colors.hairline}"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-medium}"
    padding: "8px 0"
  button-icon-circular:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 36px
    border: "1px solid {colors.hairline}"
  product-card-coral:
    backgroundColor: "{colors.brand-coral}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.hero}"
    padding: "{spacing.xxl}"
  product-card-magenta:
    backgroundColor: "{colors.brand-magenta}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.hero}"
    padding: "{spacing.xxl}"
  product-card-blue:
    backgroundColor: "{colors.brand-blue}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.hero}"
    padding: "{spacing.xxl}"
  product-card-purple:
    backgroundColor: "{colors.brand-purple}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.hero}"
    padding: "{spacing.xxl}"
  product-card-photo:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.hero}"
    padding: "{spacing.xxl}"
  card-base:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline}"
  card-feature:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xxl}"
  card-recommendation:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    border: "1px solid {colors.hairline}"
  promo-cta-card:
    backgroundColor: "{colors.brand-coral}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.hero}"
    padding: "{spacing.section}"
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
    border: "1px solid {colors.hairline}"
    height: 40px
  text-input-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    border: "2px solid {colors.brand-blue-deep}"
  text-input-error:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    border: "1px solid #d45656"
  search-pill:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.steel}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.xs} {spacing.md}"
    height: 36px
    border: "1px solid {colors.hairline}"
  segmented-tab:
    backgroundColor: "transparent"
    textColor: "{colors.steel}"
    typography: "{typography.button-md}"
    rounded: "0"
    padding: "{spacing.md} {spacing.lg}"
    border: "0 0 2px transparent solid"
  segmented-tab-active:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    border: "0 0 2px {colors.ink} solid"
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
  badge-success:
    backgroundColor: "{colors.success-bg}"
    textColor: "{colors.success-text}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  badge-new:
    backgroundColor: "{colors.brand-coral}"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  badge-beta:
    backgroundColor: "{colors.brand-blue-200}"
    textColor: "{colors.brand-blue-deep}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  badge-code:
    backgroundColor: "{colors.brand-blue-200}"
    textColor: "{colors.brand-blue-deep}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.sm}"
    padding: "2px 6px"
  promo-banner:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm-medium}"
    padding: "{spacing.sm} {spacing.lg}"
  data-table:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    border: "1px solid {colors.hairline}"
  data-table-header:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.steel}"
    typography: "{typography.caption-bold}"
    padding: "{spacing.sm} {spacing.md}"
  data-table-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.md}"
    border: "0 0 1px {colors.hairline-soft} solid"
  sidebar-nav-item:
    backgroundColor: "transparent"
    textColor: "{colors.charcoal}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.md}"
  sidebar-nav-item-active:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-medium}"
  doc-toc-item:
    backgroundColor: "transparent"
    textColor: "{colors.steel}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xs} 0"
  ai-product-tile:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xxxl}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline}"
  footer-region:
    backgroundColor: "{colors.footer-bg}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    padding: "{spacing.section} {spacing.xxl}"
  footer-link:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xxs} 0"
  hero-band-marketing:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.hero-display}"
    rounded: "{rounded.lg}"
    padding: "{spacing.hero}"
  product-matrix-grid:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.hero}"
    padding: "{spacing.xxl}"
  ai-product-matrix:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xxxl}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline}"
  docs-prose-block:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.charcoal}"
    typography: "{typography.body-md}"
    padding: "{spacing.xxl}"
  models-comparison-table:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    border: "1px solid {colors.hairline}"
  testimonial-stat-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-lg}"
    padding: "{spacing.xl}"
---

## Overview

MiniMax stages itself as a Chinese AI infrastructure brand with a sophisticated dual identity. Marketing surfaces and platform pages anchor in stark white canvas with deep-black typographic emphasis — the brand voice is confident, technical, almost editorial. But each model release gets its own vibrant gradient identity card: M2.7 in volcanic coral-red, Music 2.6 in magenta-pink, Hailuo in deep blue, Speech 2.8 in saturated orange-purple. Together these vibrant tiles read like album covers laid out on the homepage — each one declaring its own product personality.

DM Sans anchors every surface from oversized 80px hero displays down to 12px micro labels. The geometric, slightly humanist character of the face suits both the dense documentation surfaces (where 14px body type carries 1.5 line-height for long-form prose) and the high-impact marketing displays (where -2px letter-spacing tightens 80px headlines). Buttons are universally pill-shaped (`rounded-full`) with a sharp two-tier system: black-pill primary (the dominant CTA) and outline-pill secondary. Cards split into two distinct families: vibrant gradient product showcases (32px corner softening) and quiet white documentation cards (16px corner softening).

**Key Characteristics:**
- Stark monochrome palette — black ({colors.primary}) and white ({colors.canvas}) — broken open by saturated brand-color gradient cards
- Distinct product-color encoding: each model line has its own vibrant brand color (coral M2.7, magenta Music 2.6, blue Hailuo, orange Speech 2.8)
- DM Sans across the entire system; Inter as fallback
- Pill-shaped buttons ({rounded.full}) and pill-shaped tabs everywhere; rectangular forms only inside data tables and dense docs
- Hero typography uses tight 1.10 line-height with -2px letter-spacing for impact
- Documentation surfaces use a 3-column layout: left sidebar nav, center prose body, right table-of-contents
- Black promo banners ({colors.primary}) above the nav for time-bound brand moments

## Colors

> Source pages: minimax.io/ (homepage), /models/text/m27 (product showcase), platform.minimax.io/docs/guides/models-intro (documentation), /subscribe/token-plan (pricing). Token coverage was identical across all four pages.

### Brand & Accent
- **Brand Coral** ({colors.brand-coral}): Signature high-impact accent. Used on M2.7 product card, "Token Plan" hero band, promo CTA strips, and "NEW" badges. Carries the brand's most attention-grabbing energy.
- **Brand Magenta** ({colors.brand-magenta}): Secondary product-card identity (Music 2.6); used for music/audio product encoding.
- **Brand Blue** ({colors.brand-blue}): Hailuo video product identity; primary blue accent across the system.
- **Brand Blue Deep** ({colors.brand-blue-deep}): Form-control activation, link emphasis.
- **Brand Blue 700** ({colors.brand-blue-700}): Documentation tag and reference text color.
- **Brand Cyan** ({colors.brand-cyan}): Atmospheric blue for product gradients and decorative wash.
- **Brand Blue 200** ({colors.brand-blue-200}): Code badges, info-tag backgrounds.
- **Brand Purple** ({colors.brand-purple}): Speech 2.8 and minor purple-product identity; gradient mate for magenta cards.

### Surface
- **Canvas White** ({colors.canvas}): Primary page background and card surface.
- **Surface** ({colors.surface}): Subtle section backgrounds, search-pill rest, sidebar-nav active state.
- **Surface Soft** ({colors.surface-soft}): Quieter section divisions.
- **Hairline** ({colors.hairline}): 1px input border and primary divider.
- **Hairline Soft** ({colors.hairline-soft}): Quieter table-row divider and secondary section break.

### Text
- **Ink** ({colors.ink}): Primary headline and CTA text — the brand's near-black anchor.
- **Ink Strong** ({colors.ink-strong}): Pure black used in promo banners and hero displays for maximum contrast.
- **Charcoal** ({colors.charcoal}): Body text on light surfaces.
- **Slate** ({colors.slate}): Secondary text, metadata.
- **Steel** ({colors.steel}): Tertiary text, table headers, sidebar inactive items.
- **Stone** ({colors.stone}): Muted captions and tab inactive labels.
- **Muted** ({colors.muted}): Footer link text and de-emphasized labels.

### Semantic
- **Success Background** ({colors.success-bg}): Pale-green wash for success badges and confirmations.
- **Success Text** ({colors.success-text}): Deep-green ink for success badge labels.
- Error tones derive from a `#d45656` red used in input border error states (not extracted as a top-level system token).

## Typography

### Font Family
**DM Sans** (primary): Geometric variable sans-serif. Used across every surface, every role. Fallbacks: Inter, Helvetica Neue, Helvetica, Arial.

DM Sans was chosen for its dual fluency: it scales cleanly from 80px hero displays (where -2px letter-spacing creates magazine-grade tightness) down to 12px micro labels (where the slightly humanist counters maintain legibility). The face has no italic variant in the brand's deployment — emphasis comes from weight (500/600/700) instead.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.hero-display}` | 80px | 600 | 1.10 | -2px | Homepage hero ("MiniMax Music 2.6") |
| `{typography.display-lg}` | 56px | 600 | 1.10 | -1.5px | Section openers, major page heroes |
| `{typography.heading-lg}` | 40px | 600 | 1.20 | -1px | Sub-page headlines ("Token Plan", "Models Overview") |
| `{typography.heading-md}` | 32px | 600 | 1.25 | -0.5px | Subsection headers ("Full-Stack Model Matrix") |
| `{typography.heading-sm}` | 24px | 600 | 1.30 | 0 | Card titles, feature headers |
| `{typography.card-title}` | 20px | 600 | 1.40 | 0 | Product-card titles, feature-tile headers |
| `{typography.subtitle}` | 18px | 500 | 1.50 | 0 | Section subtitles, lead body |
| `{typography.body-md}` | 16px | 400 | 1.50 | 0 | Primary body text |
| `{typography.body-md-bold}` | 16px | 700 | 1.50 | 0 | Body emphasis |
| `{typography.body-sm}` | 14px | 400 | 1.50 | 0 | Secondary body, table cells, navigation |
| `{typography.body-sm-medium}` | 14px | 500 | 1.50 | 0 | Active sidebar nav, button labels |
| `{typography.caption}` | 13px | 400 | 1.70 | 0 | Documentation captions, fine print |
| `{typography.caption-bold}` | 13px | 600 | 1.50 | 0 | Badge labels, table-header text |
| `{typography.micro}` | 12px | 400 | 1.50 | 0 | Footer microcopy, chip labels |
| `{typography.button-md}` | 14px | 600 | 1.40 | 0 | Pill button labels |

### Principles
- **Tight hero leading** (1.10) and aggressive negative letter-spacing on display sizes create a magazine-quality typographic display unique to MiniMax.
- **Generous body leading** (1.50) keeps long-form documentation comfortable; captions push to 1.70 for scientific-paper-grade clarity.
- **Weight discipline:** 400 (body), 500 (medium emphasis), 600 (headings/buttons), 700 (strong inline emphasis). Heavier weights are not used.
- **Single typeface** strategy — never mix DM Sans with another sans-serif. Code samples (when shown) use a system monospace fallback, but no second typeface enters the brand canvas.

## Layout

### Spacing System
- **Base unit**: 4px (8px primary increment).
- **Tokens**: `{spacing.xxs}` (4px) · `{spacing.xs}` (8px) · `{spacing.sm}` (12px) · `{spacing.md}` (16px) · `{spacing.lg}` (20px) · `{spacing.xl}` (24px) · `{spacing.xxl}` (32px) · `{spacing.xxxl}` (40px) · `{spacing.section-sm}` (48px) · `{spacing.section}` (64px) · `{spacing.section-lg}` (80px) · `{spacing.hero}` (96px).
- **Section rhythm**: Marketing pages separate at `{spacing.hero}` (96px) above-fold, then `{spacing.section-lg}` (80px) below; documentation tightens to `{spacing.section}` (64px); table rows compress to `{spacing.md}` (16px).
- **Card internal padding**: Vibrant product cards use `{spacing.xxl}` (32px); documentation cards use `{spacing.lg}–{spacing.xl}` (20–24px); promo strips expand to `{spacing.section}` (64px).

### Grid & Container
- Marketing pages use a 1280px max-width with 32px gutters.
- Homepage product matrix renders as a 4-column row of 32px-rounded gradient cards, each ~280–320px wide.
- AI Product Matrix below uses a 4-column grid with 16px-rounded white cards.
- Documentation surfaces use a 3-column layout: left sidebar nav (~220px), center prose body (~720px max-width), right TOC (~180px). Sidebar persists on desktop; collapses to drawer below 1024px.
- Token Plan / pricing pages use 2-column tabs above a 3-column tier card grid.

### Whitespace Philosophy
Marketing pages give product photography and color cards generous breathing room — `{spacing.hero}` (96px) above-the-fold creates visual oxygen for the 80px hero display. Inside documentation, whitespace tightens dramatically: section gaps drop to `{spacing.xxl}` (32px), table rows pack down to `{spacing.md}` (16px), and the sidebar nav uses `{spacing.xs}` (8px) vertical rhythm.

## Elevation & Depth

The system runs predominantly flat. Elevation is reserved for sticky panels, dropdowns, and the rare floating CTA.

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow; `{colors.hairline}` border | Default cards, table rows, form inputs |
| 1 (subtle) | `rgba(0, 0, 0, 0.04) 0px 1px 2px 0px` | Card-recommendation, hover-elevated tiles |
| 2 (card) | `rgba(0, 0, 0, 0.08) 0px 4px 6px 0px` | Standard feature cards, dropdowns |
| 3 (atmospheric) | `rgba(0, 0, 0, 0.08) 0px 0px 22px 0px` | Diffuse glow on featured product cards |
| 4 (modal) | `rgba(36, 36, 36, 0.08) 0px 12px 16px -4px` | Modals, confirmation dialogs, sticky panels |

### Decorative Depth
- The vibrant gradient product cards carry their own atmospheric depth via internal radial gradients and silhouette imagery — no shadow needed; the color does the work.
- Brand-tinted shadows (`rgba(44, 30, 116, 0.16) 0px 0px 15px`) appear under purple-themed cards for subtle ambient lift.
- Dotted/grain textures occasionally appear inside product cards as photographic-content decoration; these are not formalized as system tokens.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Code chips, micro-controls |
| `{rounded.sm}` | 6px | Compact controls, table cells |
| `{rounded.md}` | 8px | Inputs, secondary buttons, search pill |
| `{rounded.lg}` | 12px | Documentation cards, recommendation tiles |
| `{rounded.xl}` | 16px | Standard feature cards, AI product tiles |
| `{rounded.xxl}` | 20px | Larger feature panels |
| `{rounded.xxxl}` | 24px | AI product tile feature variants |
| `{rounded.hero}` | 32px | Vibrant gradient product cards, promo CTA strip |
| `{rounded.full}` | 9999px | All buttons, all pill tabs, badges |

### Photography Geometry
- Vibrant product cards use 32px corner softening — distinct from the 16px used on quiet white cards. The doubled radius is the visual signature of "this is a featured product moment."
- Product imagery inside cards is treated as photographic content (silhouettes, dark portrait studio lighting) without rounded internal frames.
- Avatar circles (rare, in testimonials) are `{rounded.full}` — perfect circles.

## Components

> Per the no-hover policy, hover states are NOT documented. Default and pressed/active states only.

### Buttons

**`button-primary`** — Black pill primary CTA, the dominant action across all surfaces.
- Background `{colors.primary}`, text `{colors.on-primary}`, typography `{typography.button-md}`, padding `11px 24px`, rounded `{rounded.full}`.
- Pressed state `button-primary-pressed` lifts to `{colors.charcoal}`.
- Disabled state `button-primary-disabled` uses `{colors.hairline}` background and `{colors.muted}` text.

**`button-secondary`** — Outlined pill secondary action, paired with primary in dual-CTA hero patterns.
- Background transparent, text `{colors.ink}`, border `1px solid {colors.ink}`, typography `{typography.button-md}`, padding `11px 24px`, rounded `{rounded.full}`.

**`button-tertiary`** — White-fill quieter pill, used for tertiary nav and informational CTAs.
- Background `{colors.canvas}`, text `{colors.ink}`, border `1px solid {colors.hairline}`, typography `{typography.button-md}`, padding `11px 24px`, rounded `{rounded.full}`.

**`button-link`** — Inline text link styled as a subtle button.
- Background transparent, text `{colors.ink}`, typography `{typography.body-sm-medium}`, padding `8px 0`. Underline appears on activation.

**`button-icon-circular`** — 36×36px circular utility button (carousel arrows, share, copy).
- Background `{colors.canvas}`, text `{colors.ink}`, border `1px solid {colors.hairline}`, rounded `{rounded.full}`.

### Vibrant Product Cards

**`product-card-coral`** — M2.7 / Token Plan signature card.
- Background `{colors.brand-coral}`, text `{colors.on-dark}`, rounded `{rounded.hero}` (32px), padding `{spacing.xxl}`.
- Hosts the M2.7 wordmark in massive `{typography.display-lg}` with white tagline.

**`product-card-magenta`** — Music 2.6 product showcase.
- Background `{colors.brand-magenta}`, text `{colors.on-dark}`, rounded `{rounded.hero}`, padding `{spacing.xxl}`.

**`product-card-blue`** — Hailuo Video product showcase.
- Background `{colors.brand-blue}`, text `{colors.on-dark}`, rounded `{rounded.hero}`, padding `{spacing.xxl}`.

**`product-card-purple`** — Speech 2.8 / variant product showcase.
- Background `{colors.brand-purple}`, text `{colors.on-dark}`, rounded `{rounded.hero}`, padding `{spacing.xxl}`.

**`product-card-photo`** — Dark portrait product card (homepage S2 placement, video-emotion product).
- Background `{colors.primary}` (black with overlaid product photo), text `{colors.on-dark}`, rounded `{rounded.hero}`, padding `{spacing.xxl}`.

### Cards & Containers

**`card-base`** — Standard documentation/feature card.
- Background `{colors.canvas}`, rounded `{rounded.xl}`, padding `{spacing.xl}`, border `1px solid {colors.hairline}`.

**`card-feature`** — Quieter feature panel on light gray.
- Background `{colors.surface}`, rounded `{rounded.xl}`, padding `{spacing.xxl}`.

**`card-recommendation`** — "Recommended Reading" tile in documentation footer.
- Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.lg}`, border `1px solid {colors.hairline}`.

**`promo-cta-card`** — Bright orange "Refunds of 10%..." promo strip with embedded CTA pill.
- Background `{colors.brand-coral}`, text `{colors.on-dark}`, rounded `{rounded.hero}`, padding `{spacing.section}`. Embedded button uses `button-tertiary` (white pill on coral) for the "Join Now" action.

**`ai-product-tile`** — White card in the AI Product Matrix grid (Agent, Hailuo Video, MiniMax Audio).
- Background `{colors.canvas}`, rounded `{rounded.xxxl}`, padding `{spacing.xl}`, border `1px solid {colors.hairline}`. Carries an icon/illustration top, title `{typography.card-title}`, description `{typography.body-sm}`.

### Inputs & Forms

**`text-input`** — Standard text field.
- Background `{colors.canvas}`, text `{colors.ink}`, border `1px solid {colors.hairline}`, rounded `{rounded.md}`, padding `{spacing.sm} {spacing.md}`, height 40px.

**`text-input-focused`** — Activated state.
- Border switches to `2px solid {colors.brand-blue-deep}`.

**`text-input-error`** — Validation error state.
- Border switches to `1px solid #d45656`; error label below in matching red `{typography.body-sm}`.

**`search-pill`** — Documentation top-bar search field.
- Background `{colors.surface}`, text `{colors.steel}`, typography `{typography.body-sm}`, rounded `{rounded.md}`, height 36px, border `1px solid {colors.hairline}`.

### Tabs

**`segmented-tab`** + **`segmented-tab-active`** — Underline-style tab navigation (Benchmark / Self-Evaluation / Multi-Agent Collaboration on the M2.7 page).
- Inactive: text `{colors.steel}`, transparent background, padding `{spacing.md} {spacing.lg}`. Active: text shifts to `{colors.ink}`, 2px bottom border in `{colors.ink}`.

**`pill-tab`** + **`pill-tab-active`** — Pricing-page tab nav (Token Plan / Audio Subscription / Video Package).
- Inactive: background `{colors.canvas}`, text `{colors.steel}`, border `1px solid {colors.hairline}`, padding `{spacing.xs} {spacing.md}`, rounded `{rounded.full}`.
- Active: background `{colors.primary}`, text `{colors.on-primary}`, no border (or matching black border).

### Badges & Status

**`badge-success`** — Pale-green confirmation badge ("Available", "Active").
- Background `{colors.success-bg}`, text `{colors.success-text}`, typography `{typography.caption-bold}`, rounded `{rounded.full}`, padding `4px 10px`.

**`badge-new`** — Coral "NEW" / "Live" pill for fresh releases.
- Background `{colors.brand-coral}`, text `{colors.on-dark}`, typography `{typography.caption-bold}`, rounded `{rounded.full}`, padding `4px 10px`.

**`badge-beta`** — Pale-blue "BETA" / informational pill.
- Background `{colors.brand-blue-200}`, text `{colors.brand-blue-deep}`, typography `{typography.caption-bold}`, rounded `{rounded.full}`, padding `4px 10px`.

**`badge-code`** — Inline code-style chip ("Code", "API").
- Background `{colors.brand-blue-200}`, text `{colors.brand-blue-deep}`, typography `{typography.caption-bold}`, rounded `{rounded.sm}`, padding `2px 6px`.

**`promo-banner`** — Sticky black promotional strip ABOVE the top nav ("Invite & Earn — Rewards for Both!").
- Background `{colors.primary}`, text `{colors.on-primary}`, typography `{typography.body-sm-medium}`, padding `{spacing.sm} {spacing.lg}`. Carries one-line copy with optional inline link.

### Data Tables

**`data-table`** — Documentation models comparison table.
- Background `{colors.canvas}`, text `{colors.ink}`, typography `{typography.body-sm}`, rounded `{rounded.md}`, border `1px solid {colors.hairline}`.

**`data-table-header`** — Top header row of the data table.
- Background `{colors.surface}`, text `{colors.steel}`, typography `{typography.caption-bold}`, padding `{spacing.sm} {spacing.md}`.

**`data-table-row`** — Body rows.
- Background `{colors.canvas}`, text `{colors.ink}`, typography `{typography.body-sm}`, padding `{spacing.md}`, bottom border `1px solid {colors.hairline-soft}`.

### Navigation

**Top Navigation (Marketing)** — Sticky white bar with logo, link list, and right-side CTAs.
- Background `{colors.canvas}`, height ~64px, bottom border `1px solid {colors.hairline-soft}`.
- Left: MiniMax wordmark + horizontal link list (Models, Product, API, Company).
- Right: black-pill "Contact Us" + outlined-pill "Login".

**Top Navigation (Documentation/Platform)** — Compressed nav with center search-pill and right-side account/upgrade CTAs.
- Background `{colors.canvas}`, height ~56px, with search-pill at center and "Documentation / Account / Subscribe" links + black-pill "Sign Up" right.

**`sidebar-nav-item`** + **`sidebar-nav-item-active`** — Documentation left rail link entries.
- Inactive: background transparent, text `{colors.charcoal}`, typography `{typography.body-sm}`, rounded `{rounded.sm}`, padding `{spacing.xs} {spacing.md}`.
- Active: background `{colors.surface}`, text `{colors.ink}`, typography `{typography.body-sm-medium}`.

**`doc-toc-item`** — Right-rail table-of-contents links.
- Background transparent, text `{colors.steel}`, typography `{typography.body-sm}`, padding `{spacing.xs} 0`. Active item color shifts to `{colors.ink}`.

### Signature Components

**`hero-band-marketing`** — Centered hero with massive 80px display + dual-CTA pair.
- Layout: centered headline in `{typography.hero-display}` ({colors.ink}), centered subtitle in `{typography.subtitle}` ({colors.steel}), centered button row (`button-primary` + `button-secondary`).

**`product-matrix-grid`** — 4-column horizontal scroll of vibrant gradient product cards (homepage "Full-Stack Model Matrix").
- Each tile uses one of the `product-card-*` variants (coral, magenta, blue, purple, photo).
- Card title in `{typography.display-lg}` (M2.7 wordmark) or `{typography.heading-lg}` (Music 2.6).
- Below the wordmark: thin tagline in `{typography.body-sm}` 80% white opacity.
- Optional badge top-right: `badge-new`.
- Card heights are uniform (~360–400px); the row scrolls horizontally on mobile.

**`ai-product-matrix`** — 4-column grid of white product tiles below the vibrant matrix (Agent / Hailuo Video / Audio / Video).
- Each tile is `ai-product-tile` chrome.
- Top: 100px-tall illustration zone (often line-art icon or 3D mark).
- Below: title in `{typography.card-title}`, description in `{typography.body-sm}` `{colors.steel}`.

**`docs-prose-block`** — Documentation main content area.
- Max-width ~720px, centered. Body in `{typography.body-md}` `{colors.charcoal}` line-height 1.6.
- Inline code in `{typography.body-md}` monospace fallback with `{colors.surface}` background and `{rounded.xs}` corners.

**`models-comparison-table`** — Documentation table comparing model sizes and features.
- Uses `data-table` chrome. Each row carries a model name (linkified, in `{colors.ink}` body-sm-medium), a description column (`{colors.charcoal}`), and a features bullet list column.

**`testimonial-stat-row`** — Stats strip ("214,000+ Enterprise Clients & Developers", "0+ Countries Served").
- Horizontal row of 4 stat cells, each cell with a large number in `{typography.heading-lg}` `{colors.ink}` and a label below in `{typography.body-sm}` `{colors.steel}`.

**`footer-region`** — Dense black-canvas multi-column footer.
- Background `{colors.footer-bg}`, padding `{spacing.section} {spacing.xxl}`.
- Top row: MiniMax wordmark ("intelligence with everyone" tagline) and social icons (X, Twitter, GitHub, etc.).
- Body: 4-column link grid (Research / Product / API / Company / News).
- Section headers in `{typography.body-sm-medium}` `{colors.on-dark}`.

**`footer-link`** — Individual link entry inside the footer column.
- Background transparent, text `{colors.muted}`, typography `{typography.body-sm}`, padding `{spacing.xxs} 0`. Active/visited states do not change color — only opacity shifts on activation.

## Do's and Don'ts

### Do
- Use `{colors.primary}` (black) as the dominant CTA — it's the brand's most recognizable interactive element.
- Reserve product brand colors (`{colors.brand-coral}`, `{colors.brand-magenta}`, `{colors.brand-blue}`, `{colors.brand-purple}`) ONLY for product-identity moments — never for general buttons or text.
- Pair `{rounded.hero}` (32px) gradient cards with `{rounded.xl}` (16px) white cards in the same viewport — the radius contrast is the visual signature.
- Apply `{rounded.full}` to every button, every pill tab, every badge.
- Use `{typography.hero-display}` (80px) with -2px letter-spacing for hero displays — never compromise the leading or letter-spacing.
- Treat each model/product line as a distinct color identity. M2.7 is coral, Music is magenta, Hailuo is blue. These are brand assignments, not free choices.

### Don't
- Don't use brand-coral or brand-magenta on body text or large surfaces — they lose meaning when overused.
- Don't soften corners on buttons (anything less than `{rounded.full}`); the pill is a brand signature.
- Don't introduce a second display typeface; DM Sans handles every role.
- Don't reduce hero leading below 1.10 — the brand needs that breathing room on the 80px display.
- Don't apply heavy shadows on white cards; flat-with-borders is the documentation default.
- Don't put gradient backgrounds on standard buttons; gradients are reserved for product-card identity moments.

## Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Mobile (small) | < 480px | Single column. Hero drops to 40px. Pill nav collapses to hamburger. Product matrix horizontal-scroll. Footer 1-column accordion. |
| Mobile (large) | 480 – 767px | Same as small but AI product matrix renders 2-up. |
| Tablet | 768 – 1023px | 2-column AI product matrix. Pill-tab nav returns. Documentation sidebar collapses to drawer. |
| Desktop | 1024 – 1279px | Full 4-column product matrix; 3-column docs grid (sidebar / body / TOC). |
| Wide Desktop | ≥ 1280px | Wider hero gutters, larger product photography, fixed 220px sidebar. |

### Touch Targets
- Pill buttons render at 38–40px effective height — bumps to 44px on mobile via padding override.
- Circular icon buttons: 36×36px desktop → 44×44px on mobile.
- Form inputs render at 40px height; bumps to 44px on mobile.
- Sidebar nav items render at ~32px tall — bumps to 44px on mobile drawers.

### Collapsing Strategy
- **Promo banner** stays full-width; collapses to single line at < 480px with truncation.
- **Top nav** below 1024px collapses to hamburger; horizontal links move into drawer.
- **Documentation grid**: 3-column desktop → sidebar-drawer at < 1024px → single-column with collapsible sidebar at < 768px.
- **Product matrix**: 4-column desktop → horizontal-scroll at < 1024px (carousel-style with snap points).
- **AI Product Matrix**: 4-column → 2-column at tablet → 1-column at mobile.
- **Hero typography**: `{typography.hero-display}` (80px) → 56px at < 1024px → 40px at < 768px → 32px at < 480px.
- **Stats strip**: 4-column → 2×2 at < 768px → 1-column at < 480px.

### Image Behavior
- Product card imagery uses photographic content with internal gradient overlays; lazy-loaded below the fold.
- AI product tile illustrations are SVG-based; remain crisp at all breakpoints.
- Avatar imagery in testimonials uses 1:1 aspect ratio with `{rounded.full}` masking.

## Iteration Guide

1. Focus on ONE component at a time. The system has high internal consistency.
2. Reference component names and tokens directly (`{colors.primary}`, `{component-name}-pressed`, `{rounded.full}`) — do not paraphrase.
3. Run `npx @google/design.md lint DESIGN.md` after edits to catch broken refs and contrast issues.
4. Add new variants as separate `components:` entries (`-pressed`, `-disabled`, `-active`).
5. Default to `{typography.body-md}` for body and `{typography.subtitle}` for emphasis. Headlines step down `hero-display → display-lg → heading-lg → heading-md → heading-sm`.
6. Keep brand colors (coral, magenta, blue, purple) confined to product-card identity. If a brand color appears on a standard button or generic surface, ask whether it earned that surface.
7. Pill-shaped buttons (`{rounded.full}`) always; squared buttons signal "third-party widget" in this language.

## Known Gaps

- Specific dark-mode token values (canvas, surface, ink, hairline) are not surfaced on these pages; the brand has not yet shipped a published dark-mode palette.
- Animation/transition timings are not extracted; recommend 150–200ms ease for hover/focus state transitions.
- Form validation success state is not explicitly captured beyond defaults — implement following standard green-border + success badge patterns.
- Code syntax highlighting palette inside docs is not formalized; documentation samples appear with system-default monospace and minimal coloring.
