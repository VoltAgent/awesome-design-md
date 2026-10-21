---
version: alpha
name: Intercom-design-analysis
description: "An editorial customer-service marketing canvas built around a soft cream-white ground, charcoal type set in Saans (Intercom's proprietary geometric sans), and a single confident Fin Orange (#ff5600) reserved for the Fin AI brand. Cards live as floating white tiles with thin hairline borders and minimal radii (8–16px). Display headlines run Saans at weight 500 with measured negative tracking. The system reads as a careful, product-led publication: product screenshots dominate, ornament is rare, and the only place chromatic energy enters is the Fin Orange CTA."

colors:
  primary: "#111111"
  on-primary: "#ffffff"
  ink: "#111111"
  ink-muted: "#626260"
  ink-subtle: "#7b7b78"
  ink-tertiary: "#9c9fa5"
  canvas: "#f5f1ec"
  surface-1: "#ffffff"
  surface-2: "#ebe7e1"
  inverse-canvas: "#000000"
  inverse-surface-1: "#313130"
  inverse-ink: "#ffffff"
  inverse-ink-muted: "#9c9fa5"
  hairline: "#d3cec6"
  hairline-soft: "#ebe7e1"
  fin-orange: "#ff5600"
  report-orange: "#fe4c02"
  report-blue: "#65b5ff"
  report-green: "#0bdf50"
  report-pink: "#ff2067"
  report-lime: "#b3e01c"
  report-cyan: "#03b2cb"
  brand-blue: "#0007cb"
  semantic-error: "#c41c1c"
  semantic-success: "#0bdf50"

typography:
  display-xl:
    fontFamily: Saans
    fontSize: 72px
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: -2.0px
  display-lg:
    fontFamily: Saans
    fontSize: 56px
    fontWeight: 500
    lineHeight: 1.10
    letterSpacing: -1.4px
  display-md:
    fontFamily: Saans
    fontSize: 40px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -0.8px
  headline:
    fontFamily: Saans
    fontSize: 28px
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: -0.5px
  card-title:
    fontFamily: Saans
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: -0.3px
  subhead:
    fontFamily: Saans
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: -0.2px
  body-lg:
    fontFamily: Saans
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: -0.1px
  body:
    fontFamily: Saans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0
  body-sm:
    fontFamily: Saans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0
  caption:
    fontFamily: Saans
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  button:
    fontFamily: Saans
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: 0
  eyebrow:
    fontFamily: Saans
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.30
    letterSpacing: 0
  mono:
    fontFamily: SaansMono
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0

rounded:
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
  section: 96px

components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 18px
  button-primary-pressed:
    backgroundColor: "{colors.inverse-canvas}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 18px
  button-tertiary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 18px
  button-fin:
    backgroundColor: "{colors.fin-orange}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 18px
  pricing-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  pricing-card-featured:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  feature-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  product-mockup-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: 24px
  testimonial-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.lg}"
    padding: 32px
  customer-logo-tile:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 16px
  text-input:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 10px 14px
  text-input-focused:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 10px 14px
  pricing-tab-default:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 8px 16px
  pricing-tab-selected:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 8px 16px
  faq-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 24px
  cta-banner:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.headline}"
    rounded: "{rounded.lg}"
    padding: 48px
  startup-discount-card:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 32px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
    height: 56px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 64px 32px
---

## Overview

Intercom's marketing canvas is a soft cream-white ground (`{colors.canvas}` ≈ #f5f1ec) — not pure white. The warmth is the brand's signal: this is editorial, calm, and product-focused, not bright SaaS. On top of the cream canvas sit white floating cards (`{colors.surface-1}`), thin hairline dividers (`{colors.hairline}`), and charcoal type (`{colors.ink}` #111111).

Display type is **Saans** — Intercom's proprietary geometric sans — set at weight 500 with measured negative letter-spacing (-2.0px on 72px display). Body type is the same family at weight 400. The single proprietary mono is **SaansMono**, used sparingly for code snippets and product UI screenshots embedded in the marketing surface.

The single chromatic accent is **Fin Orange** (`{colors.fin-orange}` #ff5600) — Intercom's AI-product brand color. It surfaces on the Fin product CTA, the Fin badge in pricing, and a few inline emphasis moments. It is NOT a system primary; the system primary is charcoal `{colors.ink}`. Intercom also maintains a small **report palette** (`{colors.report-blue}`, `{colors.report-green}`, `{colors.report-pink}`, `{colors.report-lime}`) used inside in-product analytics surfaces shown in mockups.

The page rhythm is heavy on **product mockups**: every section's payload is a high-fidelity screenshot of Intercom's product UI, framed in white cards with `{rounded.xl}` 16px corners. The marketing chrome is intentionally quiet so the product can be the protagonist.

**Key Characteristics:**
- **Cream canvas** (`{colors.canvas}` #f5f1ec) is the brand's defining surface — neither white nor gray, deliberately warm.
- Product-screenshot-led page rhythm: every section centers a product mockup card, marketing chrome stays minimal.
- **Saans** proprietary sans-serif carries the entire hierarchy; SaansMono for code-only contexts.
- **Charcoal** `{colors.ink}` (#111111) is the system primary — buttons, headlines, body type all sit on charcoal.
- **Fin Orange** (`{colors.fin-orange}` #ff5600) is the AI product color — used on the Fin CTA and Fin badge, never decoratively.
- Display tracking pulls aggressively negative (-2.0px on 72px); body stays at 0.
- Card corners stay modest at `{rounded.lg}` 12px and `{rounded.xl}` 16px — never pill-rounded; never square.

## Colors

> Source pages: intercom.com (home), /pricing, /helpdesk, /customers, /helpdesk/inbox.

### Brand & Accent
- **Charcoal** ({colors.ink}): The system primary surface. Headlines, body type, primary CTA pill background — all charcoal.
- **White** ({colors.on-primary}): Text on charcoal CTAs; canvas of floating cards.
- **Fin Orange** ({colors.fin-orange}): The AI-product accent. Used on the Fin CTA, Fin badge, and a small set of inline emphasis moments.
- **Report Orange** ({colors.report-orange}): A slightly different orange used inside the report / analytics palette for in-product mockups.
- **Brand Blue** ({colors.brand-blue}): Saturated brand blue (#0007cb) — used on a small set of marketing illustrations.

### Surface
- **Canvas** ({colors.canvas}): Default page background — soft cream-white #f5f1ec.
- **Surface 1** ({colors.surface-1}): Pure white — used for floating cards (pricing, feature, product-mockup).
- **Surface 2** ({colors.surface-2}): Slightly darker cream — startup-discount banner, alt-row stripes.
- **Hairline** ({colors.hairline}): 1px borders on cards — soft warm gray (#d3cec6).
- **Hairline Soft** ({colors.hairline-soft}): Even softer dividers between FAQ rows and footer columns.
- **Inverse Canvas** ({colors.inverse-canvas}): Pure black — only on the testimonial / quote callout strip.
- **Inverse Surface 1** ({colors.inverse-surface-1}): One step lighter — hovered footer items in dark contexts.

### Text
- **Ink** ({colors.ink}): All headlines, body type, button labels — charcoal #111111.
- **Ink Muted** ({colors.ink-muted}): Secondary type at #626260 — meta info, deselected pricing tabs.
- **Ink Subtle** ({colors.ink-subtle}): Tertiary type at #7b7b78 — footer columns, helper text.
- **Ink Tertiary** ({colors.ink-tertiary}): Quaternary type at #9c9fa5 — disabled, footnotes.
- **Inverse Ink** ({colors.inverse-ink}): White on black — quote-strip type.
- **Inverse Ink Muted** ({colors.inverse-ink-muted}): Light gray on black — quote-strip meta.

### Semantic & Report Palette (in-product mockups)
- **Error Red** ({colors.semantic-error}): Form validation, destructive states.
- **Success Green** ({colors.semantic-success}): Positive states (also `{colors.report-green}`).
- **Report Blue** ({colors.report-blue}): Analytics chart blue.
- **Report Pink** ({colors.report-pink}): Analytics chart pink.
- **Report Lime** ({colors.report-lime}): Analytics chart lime.
- **Report Cyan** ({colors.report-cyan}): Phone country selector accent.

The report palette appears INSIDE product UI mockups — these are Intercom's in-product chart colors, not marketing surface colors.

## Typography

### Font Family

- **Saans** — Intercom's proprietary geometric sans, fallback `Saans Fallback, ui-sans-serif, system-ui`. Carries display, body, eyebrow, and button.
- **SaansMono** — Proprietary mono, fallback `SaansMono Fallback, ui-monospace`. Used inside code snippets shown in product mockups.

The same family carries the entire hierarchy. Hierarchy is carried by size + weight + tracking, not by family change.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 72px | 500 | 1.05 | -2.0px | Largest hero headline |
| `{typography.display-lg}` | 56px | 500 | 1.10 | -1.4px | Section opener headlines |
| `{typography.display-md}` | 40px | 500 | 1.15 | -0.8px | Sub-section headlines |
| `{typography.headline}` | 28px | 500 | 1.20 | -0.5px | Pricing tier titles, CTA banner |
| `{typography.card-title}` | 22px | 500 | 1.25 | -0.3px | Card title, feature card |
| `{typography.subhead}` | 20px | 400 | 1.40 | -0.2px | Lead body, intro paragraphs |
| `{typography.body-lg}` | 18px | 400 | 1.50 | -0.1px | Hero subhead, lead paragraphs |
| `{typography.body}` | 16px | 400 | 1.50 | 0 | Default body |
| `{typography.body-sm}` | 14px | 400 | 1.50 | 0 | Card body, footer |
| `{typography.caption}` | 12px | 400 | 1.40 | 0 | Captions, meta |
| `{typography.button}` | 15px | 500 | 1.20 | 0 | Pill / square button labels |
| `{typography.eyebrow}` | 14px | 500 | 1.30 | 0 | Section eyebrow (sentence case) |
| `{typography.mono}` | 13px | 400 | 1.50 | 0 | SaansMono for code in mockups |

### Principles

- **Weight 500 carries display.** Saans at 500 reads as confident without bold.
- **Negative letter-spacing scales with size.** -2.0px at 72px (≈3% of size), down to 0 on body.
- **Line-heights tighten on display, relax on body.** 1.05 at display-xl, 1.50 at body.
- **No mono on chrome.** SaansMono lives in product UI; marketing chrome stays in Saans.
- **Eyebrow uses sentence case** at 14px / 500 weight — no all-caps tracking.

### Note on Font Substitutes

If implementing without Saans, suitable substitutes include **Söhne** (paid), **Inter** (free, weight 500), or **Geist Sans** (free). Inter at weight 500 is the closest free substitute; SaansMono can be approximated with **JetBrains Mono** at weight 400.

## Layout

### Spacing System

- **Base unit**: 8px.
- **Tokens (front matter)**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- Card interior padding: `{spacing.lg}` 24px on pricing/feature cards; `{spacing.xl}` 32px on testimonial/discount cards; `{spacing.xxl}` 48px on CTA banners.
- Pill button padding: 10px vertical · 18px horizontal.

### Grid & Container

- Max content width sits around 1280px.
- Card grids are 3-up at desktop, 2-up at tablet, 1-up at mobile.
- Pricing tier grid is 3-up; comparison strip below shows checkmarks per tier.
- Product mockup cards span full content width — they're the protagonist of every section.

### Whitespace Philosophy

The cream canvas does the work white space would in another brand. Sections separate by ample vertical breathing room (`{spacing.section}` 96px) plus the lift-onto-white cards.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow, no border | Default for body type, hero text, footer |
| 1 (lift on cream) | `{colors.surface-1}` white background on `{colors.canvas}` cream | Pricing cards, feature cards, product mockups |
| 2 (hairline lift) | `{colors.surface-1}` + 1px `{colors.hairline}` border | Floating tiles with extra definition |
| 3 (deep accent) | `{colors.inverse-canvas}` true black | Quote / testimonial callout strip |

Intercom resists drop shadows. Depth is communicated by the white-on-cream surface change.

### Decorative Depth

- **Product UI mockups** dominate every section's right column or center band — these are screenshots, not illustrations.
- **No atmospheric gradients, no spotlight cards, no pastel section blocks.** The cream + white system is deliberately restrained.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Small chips, badges |
| `{rounded.sm}` | 6px | Inline tags |
| `{rounded.md}` | 8px | All buttons, form inputs |
| `{rounded.lg}` | 12px | Pricing cards, feature cards, FAQ rows |
| `{rounded.xl}` | 16px | Product mockup cards |
| `{rounded.xxl}` | 24px | Oversized CTA banners |
| `{rounded.pill}` | 9999px | Tab toggles |
| `{rounded.full}` | 9999px | Avatar circles |

### Photography & Illustration Geometry

- Product UI screenshots dominate the marketing surface; they sit in `{rounded.xl}` 16px tiles.
- Customer logo tiles render at small sizes (~24–32px logo height) on `{colors.canvas}` cream with no border.
- Avatar circles in testimonial cards use `{rounded.full}` at 40–48px sizes.

## Components

### Buttons

**`button-primary`** — Charcoal CTA. The default primary CTA across all pages.
- Background `{colors.ink}`, text `{colors.on-primary}`, type `{typography.button}`, padding 10px 18px, rounded `{rounded.md}`.
- Pressed state lives in `button-primary-pressed`.

**`button-secondary`** — White button on cream. Used for secondary CTAs.
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.button}`, padding 10px 18px, rounded `{rounded.md}`. 1px `{colors.hairline}` border.

**`button-tertiary`** — Plain text button.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.button}`, rounded `{rounded.md}`, padding 10px 18px.

**`button-fin`** — Fin Orange CTA — reserved for Fin AI product CTAs.
- Background `{colors.fin-orange}`, text `{colors.on-primary}`, type `{typography.button}`, rounded `{rounded.md}`, padding 10px 18px.

### Pricing Tabs

**`pricing-tab-default`** + **`pricing-tab-selected`** — Pill-toggle on `/pricing`.
- Default: `{colors.canvas}` background, `{colors.ink-muted}` text, rounded `{rounded.pill}`.
- Selected: `{colors.surface-1}` white background, `{colors.ink}` text — selected = lift onto white.

### Cards & Containers

**`pricing-card`** — Each tier on `/pricing`.
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.lg}`, padding 24px.

**`pricing-card-featured`** — Featured / recommended tier — inverts to charcoal.
- Background `{colors.ink}`, text `{colors.on-primary}`, otherwise identical structure.

**`feature-card`** — Generic feature highlight.
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.lg}`, padding 24px.

**`product-mockup-card`** — The dominant card type — frames a high-fidelity product UI screenshot.
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.xl}`, padding 24px.

**`testimonial-card`** — Customer quote with avatar + name + company.
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.body-lg}`, rounded `{rounded.lg}`, padding 32px.

**`startup-discount-card`** — The "Startups get 90% off" tinted card.
- Background `{colors.surface-2}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.lg}`, padding 32px.

**`customer-logo-tile`** — Small tile in the customer marquee.
- Background `{colors.canvas}`, text `{colors.ink-muted}`, type `{typography.caption}`, rounded `{rounded.xs}`, padding 16px.

**`cta-banner`** — Closing CTA panel near page bottom.
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.headline}`, rounded `{rounded.lg}`, padding 48px.

### Inputs & Forms

**`text-input`** + **`text-input-focused`** — Form fields on contact and search overlays.
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.md}`, padding 10px 14px.

### FAQ

**`faq-row`** — Expandable accordion row in the pricing FAQ.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.md}`, padding 24px. 1px `{colors.hairline-soft}` bottom rule.

### Navigation

**`top-nav`** — Sticky cream bar with the Intercom wordmark left, nav links centered, log-in + sign-up pair right.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-sm}`, height 56px.

### Footer

**`footer`** — Dense link grid on `{colors.canvas}` cream with the Intercom wordmark left.
- Background `{colors.canvas}`, text `{colors.ink-muted}`, type `{typography.caption}`, padding 64px 32px.

## Do's and Don'ts

### Do

- Reserve `{colors.canvas}` cream as the system's anchor surface — never replace with pure white.
- Lift cards from cream onto white (`{colors.surface-1}`) for hierarchy.
- Use **`button-fin`** Fin Orange ONLY on Fin AI product CTAs and Fin badges.
- Pair Saans display at weight 500 with body at 400.
- Use product UI screenshots as the protagonist of every section.
- Use `{rounded.lg}` 12px for cards and `{rounded.xl}` 16px for product mockup tiles.
- Apply negative tracking proportionally to display sizes.

### Don't

- Don't use pure white as the canvas.
- Don't use Fin Orange as a section background or as a generic primary CTA.
- Don't add drop shadows to floating cards.
- Don't introduce a second display family.
- Don't pill-round CTAs.
- Don't write all-caps tracked eyebrows.
- Don't promote the report palette colors to brand-level surfaces.
- Don't combine charcoal CTAs and Fin Orange CTAs in the same viewport.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Desktop-XL | 1440px | Default desktop layout |
| Desktop | 1280px | Card grid 3-up maintained |
| Tablet | 1024px | Card grid 3-up → 2-up |
| Mobile-Lg | 768px | Pricing comparison becomes accordion; nav hamburger |
| Mobile | 480px | Single-column; display-xl scales 72px → ~32px |

### Touch Targets

- CTAs hold ≥40px tap height across viewports.
- Pricing tab pills hold ≥40px tap height.
- Form inputs hold ≥44px tap target on touch.

### Collapsing Strategy

- **Top nav**: links collapse to hamburger below 768px; primary CTA stays visible.
- **Card grids**: 3-up → 2-up at 1024px → 1-up below 768px.
- **Pricing comparison**: collapses into per-tier accordion below 768px.
- **Display type**: `{typography.display-xl}` 72px scales toward `{typography.display-md}` 40px on mobile.

### Image Behavior

- Product UI screenshots maintain aspect ratio and never crop.
- Customer logos in the marquee may collapse from 6-up to 3-up below 768px.

## Iteration Guide

1. Focus on ONE component at a time and reference it by its `components:` token name.
2. When introducing a section, decide first whether it sits on `{colors.canvas}` cream (default) or whether it lifts onto a `{colors.surface-1}` white card.
3. Default body to `{typography.body}` at weight 400.
4. Run `npx @google/design.md lint DESIGN.md` after edits.
5. Add new variants as separate component entries.
6. Treat Fin Orange as a product accent: Fin CTA and Fin badge only.
7. Lead every section with a product screenshot.

## Known Gaps

- The **report palette** lives in product analytics dashboards rendered inside marketing mockups; they are documented for completeness but are not brand surface colors.
- Form-field error and validation styling is not visible on the inspected pages.
- Dark mode is not documented because the marketing site does not ship a dark theme.
- The helpdesk / inbox product surfaces show in-product UI states that aren't formal marketing chrome.
- Saans and SaansMono are proprietary; an open-source substitute (Inter, Söhne, Geist) is acceptable.
