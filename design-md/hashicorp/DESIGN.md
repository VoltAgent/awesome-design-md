---
version: alpha
name: HashiCorp-design-analysis
description: "An enterprise-infrastructure marketing canvas built around a near-black ground (#000000) and a system of per-product accent colors — Terraform purple, Vault yellow, Consul pink, Waypoint cyan, Vagrant blue — that act as identity tokens rather than decorative palette. Display type is hashicorpSans set in 600/700 with tight 1.17–1.21 line-heights; body type runs the same family at 500 weight with relaxed 1.50–1.71 line-heights. Cards live as charcoal surfaces with 1px translucent gray borders; product showcase cards lift into per-product chromatic gradients. The system reads as confident, technical, and intentionally multi-product — every section quietly signals which HashiCorp tool it represents."

colors:
  primary: "#000000"
  on-primary: "#ffffff"
  accent-blue: "#2b89ff"
  ink: "#ffffff"
  ink-muted: "#b2b6bd"
  ink-subtle: "#656a76"
  canvas: "#000000"
  surface-1: "#15181e"
  surface-2: "#1f232b"
  surface-3: "#3b3d45"
  hairline: "#3b3d45"
  hairline-soft: "#252830"
  inverse-canvas: "#ffffff"
  inverse-ink: "#000000"
  product-terraform: "#7b42bc"
  product-terraform-bright: "#911ced"
  product-vault: "#ffcf25"
  product-consul: "#e62b1e"
  product-waypoint: "#14c6cb"
  product-waypoint-deep: "#12b6bb"
  product-vagrant: "#1868f2"
  product-nomad: "#00ca8e"
  product-boundary: "#f24c53"
  amber-100: "#fbeabf"
  amber-200: "#bb5a00"
  blue-7: "#101a59"
  semantic-success: "#00ca8e"
  semantic-warning: "#ffcf25"
  semantic-error: "#e62b1e"
  semantic-visited: "#a737ff"

typography:
  display-xl:
    fontFamily: hashicorpSans
    fontSize: 80px
    fontWeight: 700
    lineHeight: 1.17
    letterSpacing: -2.5px
  display-lg:
    fontFamily: hashicorpSans
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: -1.6px
  display-md:
    fontFamily: hashicorpSans
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.19
    letterSpacing: -1.0px
  headline:
    fontFamily: hashicorpSans
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.21
    letterSpacing: -0.6px
  card-title:
    fontFamily: hashicorpSans
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: -0.4px
  subhead:
    fontFamily: hashicorpSans
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: -0.2px
  body-lg:
    fontFamily: hashicorpSans
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.69
    letterSpacing: 0
  body:
    fontFamily: hashicorpSans
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.50
    letterSpacing: 0
  body-sm:
    fontFamily: hashicorpSans
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.71
    letterSpacing: 0
  caption:
    fontFamily: hashicorpSans
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.38
    letterSpacing: 0.2px
  button:
    fontFamily: hashicorpSans
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.29
    letterSpacing: 0
  eyebrow:
    fontFamily: hashicorpSans
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.23
    letterSpacing: 0.6px

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
  hair: 1px
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
    backgroundColor: "{colors.inverse-canvas}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 18px
  button-primary-pressed:
    backgroundColor: "{colors.inverse-canvas}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.surface-2}"
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
  button-product-terraform:
    backgroundColor: "{colors.product-terraform}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 18px
  button-product-vault:
    backgroundColor: "{colors.product-vault}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 18px
  button-product-waypoint:
    backgroundColor: "{colors.product-waypoint}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 18px
  product-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  product-card-terraform:
    backgroundColor: "{colors.product-terraform}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  product-card-vault:
    backgroundColor: "{colors.product-vault}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  product-card-waypoint:
    backgroundColor: "{colors.product-waypoint}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  feature-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  pricing-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 32px
  pricing-card-featured:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 32px
  resource-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
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
  product-pill:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 10px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
    height: 64px
  comparison-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
  cta-banner:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.subhead}"
    rounded: "{rounded.xxl}"
    padding: 48px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 64px 32px
---

## Overview

HashiCorp's marketing canvas is a near-black ground that serves a multi-product portfolio without ever feeling generic. The dominant surface is `{colors.canvas}` (pure black) layered with `{colors.surface-1}` charcoal cards and 1px translucent gray hairlines. The chrome is monochrome — white pill-rounded buttons (`{components.button-primary}`), white type, gray secondary type — but the system is held together by a **palette of per-product accent colors** that signal which HashiCorp tool a given section belongs to: Terraform purple, Vault yellow, Consul red, Waypoint cyan, Vagrant blue, Nomad green, Boundary coral.

Display type is **hashicorpSans** at weights 600/700 with tight line-heights (1.17–1.21); body type is the same family at 500 weight with deliberately relaxed line-heights (1.50–1.71) — the contrast feels editorial, not enterprise-templated. CTAs use small `{rounded.md}` 8px corners rather than pills, which keeps the system reading as developer-facing rather than consumer-y.

The signature device is the **product-card** family — each HashiCorp product gets its own colored card variant on the home and infrastructure pages, lifting Terraform into a violet ground, Vault into yellow, Waypoint into cyan. These aren't decorative gradients — they're identity surfaces. A reader scrolling the page can tell which product a section is about from the corner of their eye.

**Key Characteristics:**
- Black-canvas marketing system: `{colors.canvas}` is the surface for hero, body, pricing, comparison tables, and footer alike.
- **Per-product color identity**: Terraform `{colors.product-terraform}`, Vault `{colors.product-vault}`, Waypoint `{colors.product-waypoint}`, Vagrant `{colors.product-vagrant}`, Consul `{colors.product-consul}`, Nomad `{colors.product-nomad}`, Boundary `{colors.product-boundary}` — each with its own button + card variant.
- Display headlines run hashicorpSans 600/700 with line-height 1.17–1.21 (tight); body runs the same family at 500 with 1.50–1.71 (relaxed) — the proportional gap is the brand's voice.
- CTA shape is `{rounded.md}` 8px — not a pill — keeping the system reading as developer-tool rather than consumer-app.
- Charcoal surface lift (canvas → surface-1 → surface-2) instead of shadow-driven elevation.
- 1px translucent gray hairlines (`rgba(178,182,189,0.1)`) define cards and dividers — the borders are felt more than seen.
- Eyebrow typography (12–13px, 600 weight, 0.6px positive tracking, uppercase) marks every section as a category label.

## Colors

> Source pages: hashicorp.com/en (home), /en/infrastructure-cloud, /en/products/terraform, /en/pricing, /en/resources?contentType=PDF.

### Brand & Accent
- **Black** ({colors.primary}): The system primary surface. Canvas, footer, comparison tables, hero — all black.
- **White** ({colors.on-primary}): Inverse text on black; canvas of `button-primary`.
- **Accent Blue** ({colors.accent-blue}): Hyperlinks across the marketing surface.
- **Visited Purple** ({colors.semantic-visited}): Visited-link state.

### Surface
- **Canvas** ({colors.canvas}): Default page background.
- **Surface 1** ({colors.surface-1}): Charcoal one step above canvas — feature cards, pricing cards, resource tiles.
- **Surface 2** ({colors.surface-2}): Two steps above — featured pricing card, secondary buttons, hovered product chrome.
- **Surface 3** ({colors.surface-3}): Three steps above — small chips, badges, sub-nav backgrounds.
- **Hairline** ({colors.hairline}): 1px borders on cards and dividers.
- **Hairline Soft** ({colors.hairline-soft}): Subtler dividers — comparison-table rows.
- **Inverse Canvas** ({colors.inverse-canvas}): Pure white — used as the surface of `button-primary` only.

### Text
- **Ink** ({colors.ink}): All headline and emphasized body type — pure white.
- **Ink Muted** ({colors.ink-muted}): Secondary type at #b2b6bd — meta info, footer columns.
- **Ink Subtle** ({colors.ink-subtle}): Tertiary type at #656a76 — form helper text, timestamps, footnotes.

### Per-Product Identity (signature)
HashiCorp's marketing isn't held together by a single accent color — it's held together by a system of product-specific accents, each used to mark which tool a section represents.

- **Terraform Purple** ({colors.product-terraform}): Terraform sections, terraform CTAs, the violet 3D cube on the home hero.
- **Terraform Bright** ({colors.product-terraform-bright}): Saturated highlight — link emphasis on Terraform pages.
- **Vault Yellow** ({colors.product-vault}): Vault sections and CTAs.
- **Consul Red** ({colors.product-consul}): Consul sections.
- **Waypoint Cyan** ({colors.product-waypoint}): Waypoint sections, deep variant `{colors.product-waypoint-deep}` for hover/active.
- **Vagrant Blue** ({colors.product-vagrant}): Vagrant sections.
- **Nomad Green** ({colors.product-nomad}): Nomad sections.
- **Boundary Coral** ({colors.product-boundary}): Boundary sections.

### Semantic
- **Success** ({colors.semantic-success}): Positive states (also reused as Nomad green).
- **Warning** ({colors.semantic-warning}): Warning states (also Vault yellow).
- **Error** ({colors.semantic-error}): Error states (also Consul red).
- **Amber 100** ({colors.amber-100}): Soft warm highlight — extracted but used sparingly.
- **Amber 200** ({colors.amber-200}): Saturated amber for caution badges.
- **Blue 7** ({colors.blue-7}): Deep navy used in unified-core gradients.

## Typography

### Font Family

- **hashicorpSans** — HashiCorp's proprietary marketing typeface. Geometric, clean, slightly humanist. Fallback stack `__hashicorpSans_Fallback_96f0ca` (system font), then `-apple-system, BlinkMacSystemFont, Segoe UI, helvetica, arial`.

The same family carries display, body, button, and caption — no separate display + body pairing. Hierarchy is carried by weight (500 body / 600 emphasis / 700 display) and by a deliberate line-height contrast (tight on display, relaxed on body).

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 80px | 700 | 1.17 | -2.5px | Largest hero headline |
| `{typography.display-lg}` | 56px | 700 | 1.18 | -1.6px | Section opener headlines |
| `{typography.display-md}` | 40px | 600 | 1.19 | -1.0px | Sub-section headlines |
| `{typography.headline}` | 28px | 600 | 1.21 | -0.6px | Pricing tier titles, CTA banner heading |
| `{typography.card-title}` | 22px | 600 | 1.18 | -0.4px | Feature card title |
| `{typography.subhead}` | 20px | 600 | 1.35 | -0.2px | Long-form intro paragraphs |
| `{typography.body-lg}` | 18px | 500 | 1.69 | 0 | Hero subhead, lead body |
| `{typography.body}` | 16px | 500 | 1.50 | 0 | Default body |
| `{typography.body-sm}` | 14px | 500 | 1.71 | 0 | Card body, footer columns |
| `{typography.caption}` | 13px | 500 | 1.38 | 0.2px | Meta, comparison cell labels |
| `{typography.button}` | 14px | 600 | 1.29 | 0 | Pill / square CTA buttons |
| `{typography.eyebrow}` | 12px | 600 | 1.23 | 0.6px | Uppercase section eyebrows |

### Principles

- **Tight on display, relaxed on body.** Display sits at line-height 1.17–1.21; body lifts to 1.50–1.71. The size + line-height contrast carries hierarchy.
- **Weight hierarchy is small.** 500 body / 600 emphasis / 700 display. No light / black extremes — the brand reads as engineered.
- **Eyebrow positive-tracked uppercase 12px is the section header.** Every meaningful section has one above the headline.
- **No mono.** Despite being a developer-tools brand, the marketing surface uses no monospace face — code voice is reserved for in-product surfaces.

### Note on Font Substitutes

If implementing without hashicorpSans, suitable open-source substitutes include **Inter** (closest geometric character set), **Geist Sans**, or **IBM Plex Sans**. Inter at weights 500 / 600 / 700 closely approximates hashicorpSans's proportions; expect to manually adjust line-heights down by ~0.02 to match.

## Layout

### Spacing System

- **Base unit**: 8px (the primary increments are 4 / 8 / 12 / 16 / 24 / 32 / 48).
- **Tokens (front matter)**: `{spacing.hair}` 1px · `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- Card interior padding: `{spacing.lg}` 24px on product cards; `{spacing.xl}` 32px on pricing cards; `{spacing.xxl}` 48px on CTA banners.
- Button padding: 10px vertical · 18px horizontal on `{components.button-primary}`.
- Universal rhythm constant: `{spacing.section}` (96px) vertical gap between major sections.

### Grid & Container

- Max content width sits around 1280px with side gutters scaling from `{spacing.xxl}` on desktop down to `{spacing.lg}` on mobile.
- Product card grids are 3-up on desktop, 2-up at tablet, 1-up on mobile.
- Pricing tier grid is 3-up across desktop; comparison table beneath uses fixed-width left column.
- Resource directory (PDF library) uses 4-up dense thumbnail grid.

### Whitespace Philosophy

The dark canvas IS the whitespace. Sections separate by surface lift (canvas → surface-1) rather than by gaps in white. Within a section, generous `{spacing.xl}` 32px gaps separate cards; `{spacing.lg}` 24px separates rows.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow, no border | Canvas-mounted display type, hero, footer |
| 1 (charcoal lift) | `{colors.surface-1}` background + 1px `rgba(178,182,189,0.1)` border | Default cards, resource tiles, pricing cards |
| 2 (surface-2 lift) | `{colors.surface-2}` background + 1px `{colors.hairline}` border | Featured pricing card, hovered cards, sub-nav |
| 3 (product chromatic) | Per-product accent color background — Terraform purple, Vault yellow, Waypoint cyan | Product showcase cards |

The product chromatic level isn't a "modal lift" — it's an identity device. A Terraform card sits at the same z-plane as a feature-card; the difference is meaning, not depth.

### Decorative Depth

- **3D product visuals** — isometric purple cubes (Terraform), translucent yellow safes (Vault), and similar product-tinted illustrations sit in the right column of hero sections.
- **1px translucent gray hairlines** are the dominant edge — borders are visible without competing.
- **No drop shadows on dark.** Cards lift via surface change, never shadow.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Small chips / badges |
| `{rounded.sm}` | 6px | Inline tag |
| `{rounded.md}` | 8px | All CTA buttons, form inputs, list items |
| `{rounded.lg}` | 12px | Feature cards, product cards, pricing cards |
| `{rounded.xl}` | 16px | Large illustrative tiles |
| `{rounded.xxl}` | 24px | CTA banner panels |
| `{rounded.pill}` | 9999px | Eyebrow-style product pills (small chips) |
| `{rounded.full}` | 9999px | Avatar circles (rare on marketing) |

### Photography & Illustration Geometry

- Product 3D illustrations use full-bleed within their container — no rounded inner mask.
- Logo chips in the customer marquee sit on `{rounded.sm}` 6px tiles with 1px hairline.
- Resource thumbnails use `{rounded.lg}` 12px corners.

## Components

### Buttons

**`button-primary`** — White rounded-rect CTA. Used as primary CTA on all pages.
- Background `{colors.inverse-canvas}`, text `{colors.inverse-ink}`, type `{typography.button}`, padding 10px 18px, rounded `{rounded.md}`.
- Pressed state lives in `button-primary-pressed`.

**`button-secondary`** — Charcoal rounded-rect. Secondary CTA, "Read docs" / "Talk to sales".
- Background `{colors.surface-2}`, text `{colors.ink}`, type `{typography.button}`, rounded `{rounded.md}`, padding 10px 18px.

**`button-tertiary`** — Bare ghost button on canvas with text-only treatment.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.button}`, rounded `{rounded.md}`, padding 10px 18px.

**`button-product-terraform`** — Terraform-tinted CTA on Terraform pages.
- Background `{colors.product-terraform}`, text `{colors.ink}`, type `{typography.button}`, rounded `{rounded.md}`, padding 10px 18px.

**`button-product-vault`** — Vault-yellow CTA.
- Background `{colors.product-vault}`, text `{colors.inverse-ink}` (yellow needs dark text), type `{typography.button}`, rounded `{rounded.md}`, padding 10px 18px.

**`button-product-waypoint`** — Waypoint-cyan CTA.
- Background `{colors.product-waypoint}`, text `{colors.inverse-ink}`, type `{typography.button}`, rounded `{rounded.md}`, padding 10px 18px.

(Vagrant blue, Nomad green, Consul red, Boundary coral follow the same pattern with their respective `{colors.product-*}` token.)

### Cards & Containers

**`product-card`** — Default product showcase card — surface-1 charcoal.
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.lg}`, padding 24px.

**`product-card-terraform`** — Product card with Terraform purple ground (used as identity surface, not modal elevation).
- Background `{colors.product-terraform}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.lg}`, padding 24px.

**`product-card-vault`** — Vault-yellow ground.
- Background `{colors.product-vault}`, text `{colors.inverse-ink}`, otherwise identical structure.

**`product-card-waypoint`** — Waypoint-cyan ground.
- Background `{colors.product-waypoint}`, text `{colors.inverse-ink}`, otherwise identical structure.

(Other product variants follow the same shape with their respective product token.)

**`feature-card`** — Generic feature highlight on surface-1.
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.lg}`, padding 24px.

**`pricing-card`** — Pricing tier on `/en/pricing`.
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.lg}`, padding 32px.

**`pricing-card-featured`** — Recommended tier (visually emphasized via surface lift).
- Background `{colors.surface-2}`, otherwise identical structure.

**`resource-card`** — PDF / whitepaper / guide tile in the resources directory.
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.body-sm}`, rounded `{rounded.lg}`, padding 16px.

### Inputs & Forms

**`text-input`** + **`text-input-focused`** — Form fields on pricing seat-count and contact forms.
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.md}`, padding 10px 14px.
- Focused state retains the same surface; the focus ring is a 1px `{colors.accent-blue}` outline.

### Pills & Chips

**`product-pill`** — Small product-name chip used above hero headlines and on resource cards to label which product a piece of content belongs to.
- Background `{colors.surface-1}`, text `{colors.ink-muted}`, type `{typography.caption}`, rounded `{rounded.pill}`, padding 4px 10px.

### Comparison Table

**`comparison-row`** — Single row inside the pricing comparison table.
- Background `{colors.canvas}`, text `{colors.ink-muted}`, type `{typography.body-sm}`. Row separator is `{colors.hairline-soft}`.

### CTA Banner

**`cta-banner`** — Large rounded panel used at the bottom of long-form pages with a closing CTA.
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.subhead}`, rounded `{rounded.xxl}`, padding 48px.

### Navigation

**`top-nav`** — Sticky black bar with HashiCorp logomark left, primary nav links centered, and a `button-primary` ("Sign up") + `button-secondary` ("Sign in") pair right.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-sm}`, height 64px.
- Mobile: collapses primary links into a hamburger; the primary CTA remains visible.

### Footer

**`footer`** — Dense link grid on `{colors.canvas}` with the wordmark at left and 5–6 columns of caption-sized links.
- Background `{colors.canvas}`, text `{colors.ink-muted}`, type `{typography.caption}`, padding 64px 32px.

## Do's and Don'ts

### Do

- Reserve `{colors.canvas}` (black) and `{colors.surface-1}` (charcoal) as the system's two anchor surfaces. Every band of the page is one or the other.
- When introducing a section about a specific HashiCorp product, use that product's `{colors.product-*}` token consistently — for the section pill, the CTA button, and (where appropriate) the showcase card background.
- Use `{rounded.md}` 8px on CTA buttons; HashiCorp's brand reads as engineered, not consumer.
- Pair tight display line-heights (1.17–1.21) with relaxed body line-heights (1.50–1.71). The contrast IS the brand voice.
- Use the eyebrow typography (`{typography.eyebrow}`, uppercase, 0.6px tracking) above every meaningful section.
- Use surface lift (canvas → surface-1 → surface-2) to express hierarchy on dark.
- Reserve product-chromatic cards for product identity; keep generic feature cards on `{colors.surface-1}`.

### Don't

- Don't ship a light-mode marketing page. HashiCorp's marketing brand IS dark.
- Don't introduce mid-tone gray text outside the documented `ink` / `ink-muted` / `ink-subtle` set.
- Don't square off CTA corners — use `{rounded.md}` 8px, not 0px.
- Don't use a product accent color for a CTA on a page that isn't about that product. Terraform purple on the Vault page is a brand violation.
- Don't combine multiple product accents in the same viewport — the system says "this section is about THIS tool", and mixing accents breaks that signal.
- Don't add drop shadows on dark; surface lift carries elevation.
- Don't replace `hashicorpSans` with a display-only sans for headlines and a different family for body. The brand is held together by one family across the full hierarchy.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Desktop-XL | 1440px | Default desktop layout |
| Desktop | 1280px | Pricing 3-up grid maintained |
| Tablet | 1024px | Product card grid 3-up → 2-up |
| Mobile-Lg | 768px | Pricing comparison becomes per-tier accordion; nav becomes hamburger |
| Mobile | 480px | Single-column everything; display-xl scales 80px → ~36px |

### Touch Targets

- CTA buttons (`button-primary`, `button-secondary`) maintain ≥40px tap height across viewports.
- Product pills are 24px tall on desktop and grow to 28px on touch viewports.
- Form inputs hold ≥44px tap target on touch viewports.

### Collapsing Strategy

- **Nav**: horizontal nav with right-anchored CTAs collapses to a hamburger overlay below 768px. The primary CTA stays visible on the bar.
- **Product card grid**: 3-up → 2-up at 1024px → 1-up below 768px.
- **Pricing comparison table**: collapses into per-tier accordions below 768px to avoid horizontal scroll.
- **Display type**: `{typography.display-xl}` 80px scales toward `{typography.display-md}` 40px on mobile while preserving the negative-tracking percentage.

### Image Behavior

- 3D product illustrations (cubes, safes, etc.) maintain aspect ratio and never crop; below 768px they shrink rather than reflow.
- Customer logo marquee scales horizontally and may wrap to a second row at narrow widths.

## Iteration Guide

1. Focus on ONE component at a time and reference it by its `components:` token name.
2. When introducing a new section, decide first whether it's a generic feature (surface-1) or a product-identity section (product-* color).
3. Default body to `{typography.body}` at 500 weight; reach for `{typography.subhead}` only inside CTA banners and feature cards.
4. Run `npx @google/design.md lint DESIGN.md` after edits.
5. Add new product variants as separate component entries (`product-card-nomad`, `button-product-consul`, etc.).
6. Treat the per-product palette as identity tokens, not decoration. If you reach for a product color outside its product context, the brand is drifting.
7. Eyebrow type is mandatory above every section — skipping it makes sections read as floating.

## Known Gaps

- The exact product-color hex values come from the `--mds-color-*` CSS variable set extracted directly; they are HashiCorp's canonical brand spec.
- Shadow tokens are not extensively documented because the dark surface system uses surface lift instead of shadow elevation.
- Form-field error and validation styling is not visible on the inspected pages.
- Dark mode is the only marketing mode — light-mode adaptation is not documented.
- Product-card variants for Consul, Nomad, Vagrant, and Boundary follow the documented Terraform / Vault / Waypoint pattern but are referenced in prose only; if they need formal entries they can be added as `product-card-consul`, `product-card-nomad`, etc.
