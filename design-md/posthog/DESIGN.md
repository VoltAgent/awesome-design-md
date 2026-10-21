---
version: alpha
name: PostHog-design-analysis
description: |
  A playful developer-tools system rendered on a warm cream canvas with hand-drawn hedgehog mascots dotted across every page like marginalia in a sketchbook. The chrome reads like a friendly engineering blog: olive-gray ink (#4d4f46) for body, deep olive-charcoal (#23251d) for headlines, IBM Plex Sans Variable typography in tight 1.43-line-height paragraphs, and a single saturated yellow-orange CTA pill (#f7a501) carrying every primary action. The system actively rejects the genre's typical somber dark-tech aesthetic in favor of a creamy, textbook-illustration sensibility — bordered cards stack on the cream canvas with 4–6px radii, doc sidebars use rounded outline-icon mini-illustrations, and the home page leans on cartoon characters (hedgehogs in lab coats, hedgehogs at terminals, hedgehogs in lounge chairs) as its signature decoration. Code samples and product analytics charts live inside white-on-cream cards with thin olive borders; the contrast between the playful illustration and the data-dense product imagery is the brand's signature voice.

colors:
  primary: "#f7a501"
  primary-pressed: "#dd9001"
  primary-active: "#b17816"
  on-primary: "#23251d"
  ink: "#23251d"
  body: "#4d4f46"
  charcoal: "#33342d"
  mute: "#6c6e63"
  ash: "#9b9c92"
  stone: "#b6b7af"
  hairline: "#bfc1b7"
  hairline-soft: "#dcdfd2"
  on-dark: "#ffffff"
  canvas: "#eeefe9"
  surface-soft: "#e5e7e0"
  surface-card: "#ffffff"
  surface-doc: "#fcfcfa"
  surface-dark: "#23251d"
  link-blue: "#1d4ed8"
  link-teal: "#1078a3"
  accent-blue: "#2c84e0"
  accent-blue-soft: "#dceaf6"
  accent-red: "#cd4239"
  accent-red-soft: "#f7d6d3"
  accent-green: "#2c8c66"
  accent-green-soft: "#d9eddf"
  accent-purple: "#7c44a6"
  accent-purple-soft: "#e7d8ee"
  focus-ring: "rgba(59,130,246,0.5)"

typography:
  display-xl:
    fontFamily: IBM Plex Sans Variable
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
  display-lg:
    fontFamily: IBM Plex Sans Variable
    fontSize: 24px
    fontWeight: 800
    lineHeight: 1.33
    letterSpacing: -0.6px
  heading-lg:
    fontFamily: IBM Plex Sans Variable
    fontSize: 21px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: -0.5px
  heading-md:
    fontFamily: IBM Plex Sans Variable
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  heading-sm:
    fontFamily: IBM Plex Sans Variable
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
    textTransform: uppercase
  heading-sm-mixed:
    fontFamily: IBM Plex Sans Variable
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.56
    letterSpacing: 0
  body-md:
    fontFamily: IBM Plex Sans Variable
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-strong:
    fontFamily: IBM Plex Sans Variable
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: IBM Plex Sans Variable
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.71
    letterSpacing: 0
  body-sm-strong:
    fontFamily: IBM Plex Sans Variable
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.71
    letterSpacing: 0
  body-xs:
    fontFamily: IBM Plex Sans Variable
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
    letterSpacing: 0
  caption-md:
    fontFamily: IBM Plex Sans Variable
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.71
    letterSpacing: 0
  caption-sm:
    fontFamily: IBM Plex Sans Variable
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  caption-xs:
    fontFamily: IBM Plex Sans Variable
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: 0
    textTransform: uppercase
  utility-xs:
    fontFamily: IBM Plex Sans Variable
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.33
    letterSpacing: 0
    textTransform: uppercase
  link-md:
    fontFamily: IBM Plex Sans Variable
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  button-md:
    fontFamily: IBM Plex Sans Variable
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
  button-sm:
    fontFamily: IBM Plex Sans Variable
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0
  code-sm:
    fontFamily: ui-monospace
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0
  code-xs:
    fontFamily: Source Code Pro
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
    letterSpacing: 0

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 6px
  lg: 8px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  section: 80px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 8px 16px
    height: 40px
  button-primary-pressed:
    backgroundColor: "{colors.primary-pressed}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 8px 16px
    height: 40px
  button-tertiary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 8px 12px
  button-disabled:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ash}"
    rounded: "{rounded.md}"
  text-input:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 8px 12px
    height: 36px
  text-input-focused:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
  search-input:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 8px 12px
    height: 36px
  product-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 24px
  doc-card:
    backgroundColor: "{colors.surface-doc}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 24px
  feature-tile:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-sm-mixed}"
    rounded: "{rounded.md}"
    padding: 20px
  pricing-tier-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 32px
  hedgehog-mascot-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 24px
  product-tab:
    backgroundColor: "transparent"
    textColor: "{colors.body}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.md}"
    padding: 8px 12px
  product-tab-active:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.md}"
  pill-tab:
    backgroundColor: "transparent"
    textColor: "{colors.body}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.full}"
    padding: 6px 14px
  pill-tab-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.full}"
  badge-uppercase:
    backgroundColor: "transparent"
    textColor: "{colors.body}"
    typography: "{typography.utility-xs}"
    rounded: "{rounded.none}"
  badge-promo:
    backgroundColor: "{colors.accent-blue-soft}"
    textColor: "{colors.link-blue}"
    typography: "{typography.caption-xs}"
    rounded: "{rounded.full}"
    padding: 2px 8px
  banner-tip-blue:
    backgroundColor: "{colors.accent-blue-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 16px 20px
  banner-tip-green:
    backgroundColor: "{colors.accent-green-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 16px 20px
  banner-tip-red:
    backgroundColor: "{colors.accent-red-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 16px 20px
  banner-tip-purple:
    backgroundColor: "{colors.accent-purple-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 16px 20px
  code-block:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.code-sm}"
    rounded: "{rounded.md}"
    padding: 16px 20px
  inline-code:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.code-xs}"
    rounded: "{rounded.xs}"
    padding: 2px 6px
  primary-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.none}"
    height: 56px
  sub-nav-strip:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.body}"
    typography: "{typography.body-xs}"
    rounded: "{rounded.none}"
    height: 40px
  doc-sidebar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-xs}"
    rounded: "{rounded.none}"
    width: 240px
  footer-section:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-xs}"
    rounded: "{rounded.none}"
    padding: 32px 24px
  link-inline:
    textColor: "{colors.link-teal}"
    typography: "{typography.link-md}"
---

## Overview

PostHog's marketing system is built on the visual contradiction at the heart of the brand: a serious open-source product analytics platform rendered as if it were a friendly engineering sketchbook. The chrome runs on a warm cream canvas (`{colors.canvas}` — `#eeefe9`) — not white — and every page is dotted with hand-drawn hedgehog mascots in lab coats, lounge chairs, terminals, and reading glasses, scattered across the layout like marginalia in a textbook. Type sits in IBM Plex Sans Variable at olive-gray (`{colors.body}` — `#4d4f46`) for body and deep olive-charcoal (`{colors.ink}` — `#23251d`) for headlines, with weights stepped tightly between 400, 600, 700, and 800 to create hierarchy without color. The single saturated yellow-orange pill (`{colors.primary}` — `#f7a501`) is the brand's only loud chromatic moment; everything else is cream, olive, white card, and the occasional pastel callout band.

The system has a distinctive **two-mode body layout**: marketing pages (home, workflows, pricing) lean on alternating-pastel callout bands and feature tiles in white cards on cream, while documentation pages add a sticky 240px left sidebar with a rounded outline-icon section list. Code samples are full-width dark blocks on `{colors.surface-dark}` (the same olive-charcoal that carries body ink, used inverted) inside white doc cards, creating the system's most distinctive visual moment: a dark-on-dark code island floating inside a white card on a cream canvas, with a hedgehog mascot doodled in the margin.

Sections stack at `{spacing.section}` (80px) rhythm with cream canvas continuing edge-to-edge between them. The only color bands that interrupt the cream are pastel `{component.banner-tip-blue}` / `-green` / `-red` / `-purple` callout panels inside doc articles — soft tinted boxes that carry "💡 Tip", "✅ Success", "⚠️ Warning", "📘 Info" inline annotations. There are no decorative gradients, no atmospheric mesh backgrounds, and no full-bleed dark hero chapters; the cream canvas runs uninterrupted top to bottom and the hedgehogs are the entire visual identity.

**Key Characteristics:**
- Warm cream canvas (`{colors.canvas}` — #eeefe9) end-to-end with no surface alternation between sections — the page is one continuous sheet
- Single yellow-orange CTA pill (`{colors.primary}` — #f7a501) with deep olive text (`{colors.on-primary}`) — the brand's only saturated color
- IBM Plex Sans Variable across every text role with weights 400/500/600/700/800 — no other typeface in the system
- Hand-drawn hedgehog mascots scattered across the layout as the entire decorative system — no gradients, no mesh, no atmospheric backgrounds
- 4–8px radius card vocabulary: `{rounded.md}` (6px) for most components, `{rounded.lg}` (8px) for select containers, fully rounded for pill chips
- Pastel callout banners (`{colors.accent-blue-soft}`, `{colors.accent-green-soft}`, `{colors.accent-red-soft}`, `{colors.accent-purple-soft}`) break up doc article body with soft tinted side rails for tips/warnings/info
- Documentation pages add a sticky 240px `{component.doc-sidebar}` with rounded outline-icon section nav and an "Ask PostHog AI" CTA at the top

## Colors

> **Source pages:** `/` (home), `/pricing` (pricing detail), `/docs/product-analytics` (docs article), `/workflows` (product feature page). The chrome palette is identical across all four pages — only doc-specific accents (callout-banner pastels, code-block dark surface) appear exclusively inside the docs experience.

### Brand & Accent
- **PostHog Yellow** (`{colors.primary}` — `#f7a501`): the universal primary CTA. Sticky "Get started — free" pill in the top-right of every nav, hero CTAs, pricing-tier subscribe buttons, footer signup pill. The system's only saturated chromatic moment.
- **Yellow Pressed** (`{colors.primary-pressed}` — `#dd9001`): pressed state for the primary pill.
- **Yellow Active** (`{colors.primary-active}` — `#b17816`): deeply-pressed yellow + the system's gold-toned border accent (rare 1px gold rule on inline form elements).

### Surface
- **Canvas** (`{colors.canvas}` — `#eeefe9`): the warm cream page background. End-to-end on every page; the brand's most distinctive surface choice.
- **Soft Surface** (`{colors.surface-soft}` — `#e5e7e0`): button-secondary fill, sub-nav strip background, inline-code chip background.
- **Surface Card** (`{colors.surface-card}` — `#ffffff`): true white card and tile background sitting on top of the cream canvas. The dominant card surface.
- **Surface Doc** (`{colors.surface-doc}` — `#fcfcfa`): a faintly cream-warm white used inside doc article body cards — slightly softer than pure white to keep the page tonally unified.
- **Surface Dark** (`{colors.surface-dark}` — `#23251d`): the deep olive-charcoal used inverted as code-block background. The same hex as `{colors.ink}` — the brand uses one olive-near-black for both text and dark code surfaces.
- **Hairline** (`{colors.hairline}` — `#bfc1b7`): 1px card border, table rule, footer column dividers.
- **Hairline Soft** (`{colors.hairline-soft}` — `#dcdfd2`): in-card row divider, soft inset rule.
- **On Dark** (`{colors.on-dark}` — `#ffffff`): primary text on `{colors.surface-dark}` code blocks.

### Text
- **Ink** (`{colors.ink}` — `#23251d`): headlines, button text on light, primary nav links — deep olive-charcoal that reads near-black against cream.
- **Body** (`{colors.body}` — `#4d4f46`): default paragraph text, doc article body, inline link color before hover. The brand's most-used text color.
- **Charcoal** (`{colors.charcoal}` — `#33342d`): emphasized body text where body is too soft.
- **Mute** (`{colors.mute}` — `#6c6e63`): metadata, footer link text, in-list secondary annotations.
- **Ash** (`{colors.ash}` — `#9b9c92`): disabled-state text and lowest-emphasis utility.
- **Stone** (`{colors.stone}` — `#b6b7af`): least-emphasis caption text and disabled icon color.

### Semantic
- **Link Blue** (`{colors.link-blue}` — `#1d4ed8`): inline anchor link inside body prose. The system's primary informational link color.
- **Link Teal** (`{colors.link-teal}` — `#1078a3`): doc-article inline link variant, paired with body text.
- **Accent Blue** (`{colors.accent-blue}` — `#2c84e0`) + **Accent Blue Soft** (`{colors.accent-blue-soft}` — `#dceaf6`): "💡 Tip / Info" callout banner inside docs.
- **Accent Red** (`{colors.accent-red}` — `#cd4239`) + **Accent Red Soft** (`{colors.accent-red-soft}` — `#f7d6d3`): "⚠️ Warning / Caution" callout banner.
- **Accent Green** (`{colors.accent-green}` — `#2c8c66`) + **Accent Green Soft** (`{colors.accent-green-soft}` — `#d9eddf`): "✅ Success / Positive" callout banner.
- **Accent Purple** (`{colors.accent-purple}` — `#7c44a6`) + **Accent Purple Soft** (`{colors.accent-purple-soft}` — `#e7d8ee`): "📘 Note / Reference" callout banner.
- **Focus Ring** (`{colors.focus-ring}` — `rgba(59,130,246,0.5)`): translucent blue browser-default focus ring around interactive elements.

## Typography

### Font Family
**IBM Plex Sans Variable** is the system's primary face — used across every text role on every page at weights 400 (regular), 500 (medium), 600 (semibold), 700 (bold), and 800 (extra-bold). Falls back through `IBM Plex Sans` → `-apple-system` → `system-ui` → broad cross-platform sans stack.

**ui-monospace** + **Source Code Pro** carry code samples and inline-code chips at 14px / 1.43 line-height. Source Code Pro is the explicit display monospace; ui-monospace handles inline `<code>` chips.

The brand-distinctive choice is the **mixed weight ladder** (400 / 500 / 600 / 700 / 800) — most chrome lives in the 400–700 band, with weight 800 reserved exclusively for the larger display headlines on home and pricing. This gives the system its "engineering blog" feel: hierarchy is built from weight contrast much more than from size.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 36px | 700 | 1.5 | 0 | Hero headline ("The new way to build products") |
| `{typography.display-lg}` | 24px | 800 | 1.33 | -0.6px | Section headline, pricing tier name |
| `{typography.heading-lg}` | 21px | 700 | 1.4 | -0.5px | Sub-section heading, doc-article H2 |
| `{typography.heading-md}` | 20px | 700 | 1.4 | 0 | Card group title, in-grid heading |
| `{typography.heading-sm}` | 18px | 700 | 1.5 | 0 (uppercase) | Section eyebrow ("UNDERSTAND PRODUCT USAGE") |
| `{typography.heading-sm-mixed}` | 18px | 600 | 1.56 | 0 | Card title in mixed-case (no uppercase transform) |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Body copy, default paragraph |
| `{typography.body-strong}` | 16px | 600 | 1.5 | 0 | Inline emphasis, primary nav link, in-card label |
| `{typography.body-sm}` | 15px | 400 | 1.71 | 0 | Doc article body, marketing card description |
| `{typography.body-sm-strong}` | 15px | 600 | 1.71 | 0 | Sub-section emphasis inside doc article |
| `{typography.body-xs}` | 14px | 500 | 1.43 | 0 | Doc sidebar item, metadata, in-list caption |
| `{typography.caption-md}` | 14px | 700 | 1.71 | 0 | Card eyebrow, link cluster header |
| `{typography.caption-sm}` | 13px | 500 | 1.5 | 0 | Compact metadata caption |
| `{typography.caption-xs}` | 12px | 600 | 1.33 | 0 (uppercase) | Inline badge label |
| `{typography.utility-xs}` | 12px | 700 | 1.33 | 0 (uppercase) | Section-eyebrow utility text, footer category header |
| `{typography.link-md}` | 16px | 400 | 1.5 | 0 | Inline body anchor link |
| `{typography.button-md}` | 14px | 700 | 1.5 | 0 | Standard primary/secondary button label |
| `{typography.button-sm}` | 13px | 500 | 1 | 0 | Pill chip / compact CTA |
| `{typography.code-sm}` | 14px | 400 | 1.43 | 0 | Code block content |
| `{typography.code-xs}` | 14px | 500 | 1.43 | 0 | Inline code chip |

### Principles
The hierarchy is explicitly built from weight + size + occasional uppercase transform — there is no italic style, no decorative display variant, no proprietary face. The biggest display moments use weight 800 with -0.6px tracking, and the body settles at 400 with 1.5 line-height; everything else fills the band between. Section eyebrows (`{typography.heading-sm}` and `{typography.utility-xs}`) consistently render uppercase, which gives the doc layout its textbook-chapter feel.

### Note on Font Substitutes
IBM Plex Sans Variable is open-source and Google-Fonts-hosted. There is no need for a substitute — load it directly. If a substitute is genuinely needed, **Inter** is the closest geometric match at all five weights; pair with Inter's letter-spacing -0.5 to -0.6px on display sizes to approximate Plex's display tracking. For monospace, **JetBrains Mono** is a near-perfect substitute for Source Code Pro at body sizes.

## Layout

### Spacing System
- **Base unit:** 8px (with finer 2/4/6px steps for tight inline gaps in callout banners and pill buttons).
- **Tokens (front matter):** `{spacing.xxs}` (2px) · `{spacing.xs}` (4px) · `{spacing.sm}` (8px) · `{spacing.md}` (12px) · `{spacing.lg}` (16px) · `{spacing.xl}` (24px) · `{spacing.xxl}` (32px) · `{spacing.section}` (80px).
- **Universal section rhythm:** every page in the set uses `{spacing.section}` (80px) as the vertical gap between major content blocks. Card grids use `{spacing.lg}` (16px) gutters; card internal padding sits at `{spacing.xl}` (24px) for product cards and `{spacing.xxl}` (32px) for pricing tier cards.

### Grid & Container
- **Max width:** ~1280px content area at desktop with 24px gutters (~48px at ultrawide). Doc article body sits at ~720px max width with the 240px sidebar pushing the article column right of center.
- **Marketing card grid:** 4-up at desktop, 3-up at 1024px, 2-up at 768px, 1-up at 480px. Cards preserve a fixed 1:1 or 4:3 ratio.
- **Pricing tier grid:** 3-up at desktop with a left rail of plan info, collapsing to 2-up + 1 at tablet and 1-up at mobile.
- **Doc layout:** desktop 240px sticky left sidebar + ~720px article body + (optional) 200px right TOC rail = ~1160px content width.
- **Footer:** 6-column horizontal link grid at desktop, 3-up at tablet, 2-up at mobile.

### Whitespace Philosophy
Whitespace is generous on marketing pages and tight on doc pages. The home and workflows pages stack feature tiles with `{spacing.lg}` (16px) gutters and 24px internal padding, while doc articles tighten internal spacing to `{spacing.md}` (12px) between paragraphs to maximize information density. The cream canvas runs continuously through every section — there are no decorative dividers, no shaded section bands; only the 1px hairline beneath section eyebrows and footer column rules separate content blocks.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | No border, no shadow | Default for canvas-on-canvas blocks, hero text, body sections |
| 1 — Hairline border | 1px solid `{colors.hairline}` | Marketing cards, pricing tier cards, doc sidebar items, footer column rules |
| 2 — Hairline soft | 1px solid `{colors.hairline-soft}` | In-card row divider between adjacent rows |
| 3 — Inverted dark code block | `{colors.surface-dark}` fill | Code samples inside doc cards — the system's only "elevated" surface uses color, not shadow |

The system has no drop-shadow elevation in marketing or product chrome. Cards sit flat on cream with thin olive borders. The single inverted moment is the dark code-block surface used inside doc article body cards.

### Decorative Depth
Depth comes entirely from illustration and the pastel callout band system, not from CSS effects:
- **Hand-drawn hedgehog mascots** — characters in various costumes (lab coat, terminal, lounge chair, magnifying glass, hammock, hat) scattered across pages as marginalia. Always rendered as flat color illustrations, never photographs.
- **Pastel callout banners** — `{component.banner-tip-blue}` / `-green` / `-red` / `-purple` soft tinted side-rail panels inside doc articles, each prefixed with an emoji icon (💡 ✅ ⚠️ 📘) and carrying tip/warning/note copy.
- **Code blocks** — full-width dark olive-charcoal panels on `{colors.surface-dark}` with white code text. The system's most cinematic surface, used inside white doc cards.
- **Outline product icons** in the doc sidebar — small rounded-square mini-illustrations (chart icon, funnel, session-replay icon) mark each major product section.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Sub-nav strip, footer, doc sidebar, primary nav — flat structural surfaces |
| `{rounded.xs}` | 2px | Inline `<code>` chips, micro-rule highlights |
| `{rounded.sm}` | 4px | Inline buttons, form inputs, micro chips |
| `{rounded.md}` | 6px | Marketing cards, pricing cards, doc cards, code blocks, every standard CTA |
| `{rounded.lg}` | 8px | Tab top corners (`6px 6px 0 0` on active tab) and rare large containers |
| `{rounded.full}` | 9999px | Pill chips and pill-style CTAs ("Get started — free" sticky CTA in nav) |

The radius vocabulary clusters around 4–6px for nearly everything; the only fully-rounded element is the pill-style sticky nav CTA and inline pill chips.

### Photography Geometry
There is no photography. Visual elements are limited to:
- **Hedgehog character illustrations** — flat-color cartoon hedgehogs ranging from ~80px (in-card mascot) to ~240px (hero illustration). Always at native aspect, never cropped to a frame.
- **Outline product icons** in the doc sidebar — 20–24px rounded-square illustrations.
- **Inline emoji** at 14–16px inside callout banners (💡 ✅ ⚠️ 📘) — used as functional iconography rather than decoration.
- **Section illustrations** on the home page — small hedgehog vignettes paired with each "Understand product usage" / "Build sticky habits" / "Test before launch" feature row.

## Components

> **No hover states documented** per system policy. Each spec covers Default and Active/Pressed only.

### Buttons

**`button-primary`** — the universal PostHog CTA
- Background `{colors.primary}` (yellow-orange), text `{colors.on-primary}` (deep olive), type `{typography.button-md}`, padding `8px 16px`, height `40px`, rounded `{rounded.md}`.
- Used for "Get started — free" (sticky top-nav CTA), "Sign up", "Try it free", "Subscribe" — every primary action.
- Pressed state lives in `button-primary-pressed` — background drops to `{colors.primary-pressed}`.

**`button-secondary`** — soft alternative on cream canvas
- Background `{colors.surface-soft}` (`#e5e7e0`), text `{colors.ink}`, type `{typography.button-md}`, padding `8px 16px`, height `40px`, rounded `{rounded.md}`.
- "Talk to sales", "Read docs", "Watch demo" — second-tier actions paired with the yellow primary.

**`button-tertiary`** — ghost text button
- Background transparent, text `{colors.ink}`, type `{typography.button-md}`, padding `8px 12px`, rounded `{rounded.md}`.
- Lowest-emphasis action: "See all docs →", "Browse all features".

**`button-disabled`**
- Background `{colors.surface-soft}`, text `{colors.ash}` — flat soft cream-gray.

### Tabs & Chips

**`product-tab`** + **`product-tab-active`** — major product section tabs
- Default: transparent background, text `{colors.body}`, type `{typography.body-strong}`, padding `8px 12px`, rounded `{rounded.md}`.
- Active: background flips to `{colors.surface-card}` (white), text `{colors.ink}` — the tab card lifts off the cream canvas as the visual signal of selection.

**`pill-tab`** + **`pill-tab-active`** — compact filter pill
- Default: transparent background, text `{colors.body}`, type `{typography.button-sm}`, padding `6px 14px`, rounded `{rounded.full}`.
- Active: background flips to `{colors.ink}`, text `{colors.on-dark}` — the chip flips fully inverted on selection.

**`badge-uppercase`** — text-only utility label
- Background transparent, text `{colors.body}` in `{typography.utility-xs}` (uppercase) — used as in-list category prefix ("FEATURE FLAG", "EXPERIMENT", "HEATMAP").

**`badge-promo`** — small inline pill chip
- Background `{colors.accent-blue-soft}`, text `{colors.link-blue}`, type `{typography.caption-xs}`, padding `2px 8px`, rounded `{rounded.full}`.
- "New", "Beta", "Coming soon" pill labels overlaid on cards.

### Inputs & Forms

**`text-input`** + **`text-input-focused`**
- Default: background `{colors.surface-card}`, text `{colors.ink}`, 1px solid `{colors.hairline}`, type `{typography.body-md}`, padding `8px 12px`, height `36px`, rounded `{rounded.md}`.
- Focused: same surface; 2px solid `{colors.accent-blue}` border replaces the 1px hairline + a translucent `{colors.focus-ring}` outline.

**`search-input`** — utility search field (doc sidebar, "Ask PostHog AI")
- Same dimensions as `text-input` with a magnifier glyph at the left edge in `{colors.mute}`.

### Cards & Containers

**`product-card`** — marketing tile / feature card
- Container: background `{colors.surface-card}` (white), 1px solid `{colors.hairline}`, padding `{spacing.xl}` (24px), rounded `{rounded.md}`.
- Layout: small hedgehog illustration at top-left, `{typography.heading-sm-mixed}` title, `{typography.body-sm}` description, optional `{component.button-tertiary}` "Learn more →" link.

**`doc-card`** — doc article body card
- Container: background `{colors.surface-doc}` (`#fcfcfa` warm-white), 1px solid `{colors.hairline}`, padding `{spacing.xl}` (24px), rounded `{rounded.md}`.
- Carries article body sections, code blocks, callout banners, and tables inside doc pages.

**`feature-tile`** — small marketing feature tile
- Container: background `{colors.surface-card}`, 1px solid `{colors.hairline}`, padding `{spacing.lg}` (20px), rounded `{rounded.md}`.
- Used in 3-up or 4-up grids on home and workflows pages — paired with a small icon and a 1-line description.

**`pricing-tier-card`** — pricing plan card
- Container: background `{colors.surface-card}`, 1px solid `{colors.hairline}`, padding `{spacing.xxl}` (32px), rounded `{rounded.md}`.
- Layout: tier name in `{typography.display-lg}` (24px / 800 / -0.6px), large price + period, feature checklist with check-icon bullets, primary or secondary CTA at bottom.

**`hedgehog-mascot-card`** — feature card with margin-anchored hedgehog
- Same chrome as `{component.product-card}` but with a hand-drawn hedgehog illustration anchored in the right margin or top-right corner — the brand's signature card variant.

### Callout Banners

**`banner-tip-blue`** + **`banner-tip-green`** + **`banner-tip-red`** + **`banner-tip-purple`**
- Background `{colors.accent-blue-soft}` / `{colors.accent-green-soft}` / `{colors.accent-red-soft}` / `{colors.accent-purple-soft}`, text `{colors.ink}`, type `{typography.body-md}`, padding `16px 20px`, rounded `{rounded.md}`.
- Each prefixed with an inline emoji icon (💡 / ✅ / ⚠️ / 📘) followed by an inline label and body copy.
- Only appear inside doc article body. The four-color callout family is the brand's information-architecture vocabulary for inline tips/warnings/info inside long-form documentation.

### Code

**`code-block`** — dark code sample inside doc card
- Container: background `{colors.surface-dark}` (deep olive-charcoal), text `{colors.on-dark}` in `{typography.code-sm}`, padding `16px 20px`, rounded `{rounded.md}`.
- Syntax highlighting uses muted accent colors (blue for keywords, green for strings, purple for numbers) — never the bright accent colors used in callout banners.

**`inline-code`** — small inline `<code>` chip
- Background `{colors.surface-soft}`, text `{colors.ink}` in `{typography.code-xs}`, padding `2px 6px`, rounded `{rounded.xs}` (2px).
- Used inside body prose to mark code snippets and identifiers.

### Navigation

**`primary-nav`**
- Background `{colors.canvas}` (cream — same as the page), text `{colors.ink}`, height `56px`, type `{typography.body-strong}`, rounded `{rounded.none}`.
- Layout (desktop): PostHog wordmark + hedgehog logo at left, nav menu cluster ("Pricing · Docs · Community · Company"), right cluster with a search-glyph, "Login" link, and the always-yellow `{component.button-primary}` "Get started — free" pill anchored to the far right.

**`sub-nav-strip`** — secondary nav bar (under primary)
- Background `{colors.surface-soft}`, text `{colors.body}` in `{typography.body-xs}`, height `40px`, rounded `{rounded.none}`.
- Sits directly below the primary nav on workflows / product pages with section anchor links and a contextual "Get started →" link at the right.

**`doc-sidebar`** — sticky doc-page left sidebar
- Background `{colors.canvas}`, text `{colors.body}` in `{typography.body-xs}`, width `240px`, rounded `{rounded.none}`.
- Layout: search-input "Ask PostHog AI" at top, then a vertical list of section headers each with a small rounded outline-icon mini-illustration, then nested item links indented under the active header.

**Top Nav (Mobile)**
- Hamburger menu icon at left, PostHog wordmark + hedgehog at center, search + sticky yellow "Get started — free" CTA at right. Primary nav collapses into a full-height drawer that slides from the left.

### Footer

**`footer-section`**
- Background `{colors.canvas}`, text `{colors.body}` in `{typography.body-xs}`, padding `32px 24px`, rounded `{rounded.none}`, with a 1px `{colors.hairline}` top rule.
- Layout: 6-column horizontal link grid (Product · Resources · Company · Community · Pricing · Legal), each column with a `{typography.utility-xs}` (uppercase) header and a vertical list of links in `{typography.body-xs}` `{colors.body}`.
- Bottom row: PostHog wordmark + small hedgehog illustration, copyright in `{typography.caption-xs}` `{colors.mute}`, social-icon row at far-right.

### Inline

**`link-inline`** — body-prose anchor link
- `{colors.link-teal}` (`#1078a3`) in body prose with no underline by default; underline appears on focus. The brand's primary inline link color.

## Do's and Don'ts

### Do
- Use `{colors.canvas}` (cream — `#eeefe9`) as the page body. Never substitute pure white as the canvas.
- Reserve `{colors.primary}` (yellow-orange) for the primary CTA pill only. The "Get started — free" treatment is the brand's anchor.
- Render the brand wordmark with the hedgehog illustration alongside it, not as a stand-alone wordmark. The hedgehog IS the brand identity.
- Use IBM Plex Sans Variable across every text role — body 400, emphasis 600/700, display 800.
- Stack content sections at `{spacing.section}` (80px) rhythm with no decorative dividers between them; let the cream canvas continue uninterrupted.
- Use `{component.banner-tip-blue}` / `-green` / `-red` / `-purple` only inside doc article body for tip/warning/note panels — keep marketing chrome out of the four-color callout family.
- Pair every code sample with the dark `{component.code-block}` surface; inline `<code>` chips use `{component.inline-code}` (cream surface-soft chip).
- Anchor a hedgehog mascot illustration in feature tile margins on home and workflows pages — the system's signature decoration.

### Don't
- Don't introduce drop shadows on cards. Cards sit flat on cream with thin olive borders only.
- Don't add a second saturated chromatic CTA. Yellow-orange is the only loud color in the system.
- Don't replace the cream canvas with pure white or full-bleed dark hero bands. The cream is the brand.
- Don't use the four-color callout banner pastels (`{colors.accent-blue-soft}`, `-green`, `-red`, `-purple`) as marketing-card backgrounds. They belong to inline doc content only.
- Don't substitute the hedgehog illustration with a generic icon set. The character system is the brand.
- Don't use uppercase transform outside of `{typography.heading-sm}`, `{typography.utility-xs}`, and `{typography.caption-xs}`. Uppercase is reserved for eyebrows and footer category headers.
- Don't pad cards with 32px+ on all sides except for `{component.pricing-tier-card}`. Standard cards sit at 24px internal padding.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| ultrawide | 1920px+ | Content max-width holds at 1280px; outer gutters grow to ~80px |
| desktop-large | 1440px | Default — 4-up feature tile grid, 240px sticky doc sidebar visible |
| desktop | 1280px | Same layout with narrower outer gutters |
| desktop-small | 1024px | 4-up tiles collapse to 3-up; doc sidebar remains visible |
| tablet | 768px | 3-up tiles collapse to 2-up; doc sidebar collapses into a top accordion; primary nav becomes hamburger |
| mobile | 480px | Single-column everything; hero `{typography.display-xl}` scales 36px → ~28px |
| mobile-narrow | 320px | Section padding tightens to 32px |

### Touch Targets
All interactive elements meet WCAG AA (≥ 40×40px). `{component.button-primary}` and `{component.button-secondary}` sit at 40px height with 16px padding. `{component.text-input}` sits at 36px (just under AAA but above AA at this size). `{component.pill-tab}` is ~32–36px height with 14px padding extending to ~44px tappable via inline padding. Doc-sidebar items use 14px text with ~32px line-height + 6px vertical padding for ~44px tap rows.

### Collapsing Strategy
- **Primary nav:** desktop horizontal cluster → tablet hamburger drawer at 768px. The yellow "Get started — free" CTA stays visible at every breakpoint.
- **Sub-nav strip:** desktop horizontal anchor row → tablet horizontal scroll → mobile select dropdown.
- **Marketing card grid:** 4-up → 3-up → 2-up → 1-up at 1024, 768, and 480px; gutters drop from 16px to 12px on mobile.
- **Pricing grid:** 3-up → 2+1 → 1-up stacked at tablet and below.
- **Doc layout:** desktop 240px sidebar + 720px article → tablet sidebar collapses to a top accordion → mobile fully collapsed accordion.
- **Footer:** 6-up link columns → 3-up at tablet → 2-up at mobile.
- **Section padding:** `{spacing.section}` (80px) desktop → 64px tablet → 48px mobile.
- **Hero headline:** `{typography.display-xl}` (36px) at desktop, scaling to ~28px at mobile, line-height holding at 1.5.

### Image Behavior
The only "imagery" in the system is hand-drawn hedgehog illustrations rendered as inline SVG. They preserve their natural aspect at every breakpoint and scale via CSS `width: auto; max-width: 100%`. There is no responsive art-direction needed because there is no photography.

## Iteration Guide

1. Focus on ONE component at a time. Pull its YAML entry and verify every property resolves.
2. Reference component names and tokens directly (`{colors.primary}`, `{component.button-primary-pressed}`, `{rounded.md}`) — do not paraphrase.
3. Run `npx @google/design.md lint DESIGN.md` after edits — `broken-ref`, `contrast-ratio`, and `orphaned-tokens` warnings flag issues automatically.
4. Add new variants as separate component entries (`-pressed`, `-disabled`, `-focused`) — do not bury them inside prose.
5. Default body to `{typography.body-md}` (16px / 400 / 1.5); reach for `{typography.body-strong}` for emphasis; reserve `{typography.display-lg}` (24px / 800) strictly for marketing display moments.
6. Keep `{colors.primary}` scarce per viewport — at most one yellow-orange pill per fold.
7. When introducing a new component, ask whether it can be expressed with the existing card + 6px-radius + cream-canvas vocabulary before adding new tokens. The system's strength is that it almost never needs new ones.

## Known Gaps

- **Mobile screenshots not captured** — responsive behavior synthesizes PostHog's mobile pattern (hamburger drawer, single-column grid, doc sidebar accordion) from desktop evidence and the breakpoint stack.
- **Hover states not documented** by system policy.
- **In-product app chrome** (PostHog dashboard, charts, session replay player) not in the captured set — the marketing site is documented here, not the in-product analytics interface.
- **Authenticated chrome** (login modal, account dashboard, billing settings) not in the captured pages.
- **Form validation states** beyond the focused-state input not present in the captured surfaces.
- **Marketing illustration set** — the full library of hedgehog character poses is not enumerated here; specific poses (lab coat hedgehog, terminal hedgehog, hammock hedgehog) are noted as visible in screenshots but the full asset library is page-specific.
