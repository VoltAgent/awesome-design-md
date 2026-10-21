---
version: alpha
name: NVIDIA-design-analysis
description: |
  An engineering-grade marketing system organized around two surface modes — a deep black canvas for hero and footer chapters and a flat paper-white canvas for body content — connected by a single, almost violently saturated NVIDIA Green accent that carries every CTA, every active tab, and the small decorative corner squares that mark out cards. The system is unapologetically angular: 2px radius across every surface, tight bold sans-serif typography in NVIDIA's proprietary EMEA cut, and a hairline gray rule that separates dense multi-column technical content. There is no decorative gradient, no atmospheric mesh, no soft drop shadow — just black, white, gray, and green stacked into a structured editorial grid that scales from product cards to massive industry landing pages without bending its rules.

colors:
  primary: "#76b900"
  on-primary: "#000000"
  primary-dark: "#5a8d00"
  ink: "#000000"
  canvas: "#ffffff"
  surface-dark: "#000000"
  surface-soft: "#f7f7f7"
  surface-elevated: "#1a1a1a"
  hairline: "#cccccc"
  hairline-strong: "#5e5e5e"
  body: "#1a1a1a"
  mute: "#757575"
  stone: "#898989"
  ash: "#a7a7a7"
  on-dark: "#ffffff"
  on-dark-mute: "rgba(255,255,255,0.7)"
  link-blue: "#0046a4"
  blue-700: "#0046a4"
  error: "#e52020"
  error-deep: "#650b0b"
  warning: "#df6500"
  warning-bright: "#ef9100"
  success-deep: "#3f8500"
  accent-yellow-pale: "#feeeb2"
  accent-purple: "#952fc6"
  accent-purple-deep: "#4d1368"
  accent-purple-pale: "#f9d4ff"
  accent-green-pale: "#bff230"

typography:
  display-xl:
    fontFamily: NVIDIA-EMEA
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  display-lg:
    fontFamily: NVIDIA-EMEA
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  heading-xl:
    fontFamily: NVIDIA-EMEA
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  heading-lg:
    fontFamily: NVIDIA-EMEA
    fontSize: 22px
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: 0
  heading-md:
    fontFamily: NVIDIA-EMEA
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  heading-sm:
    fontFamily: NVIDIA-EMEA
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  card-title:
    fontFamily: NVIDIA-EMEA
    fontSize: 17px
    fontWeight: 700
    lineHeight: 1.47
    letterSpacing: 0
  body-md:
    fontFamily: NVIDIA-EMEA
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-strong:
    fontFamily: NVIDIA-EMEA
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: NVIDIA-EMEA
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.67
    letterSpacing: 0
  button-lg:
    fontFamily: NVIDIA-EMEA
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  button-md:
    fontFamily: NVIDIA-EMEA
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  button-sm:
    fontFamily: NVIDIA-EMEA
    fontSize: 14.4px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0.144px
  link-md:
    fontFamily: NVIDIA-EMEA
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption-md:
    fontFamily: NVIDIA-EMEA
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.43
    letterSpacing: 0
    textTransform: uppercase
  caption-sm:
    fontFamily: NVIDIA-EMEA
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0
  caption-xs:
    fontFamily: NVIDIA-EMEA
    fontSize: 11px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0
  utility-xs:
    fontFamily: NVIDIA-EMEA
    fontSize: 10px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
    textTransform: uppercase

rounded:
  none: 0px
  xs: 1px
  sm: 2px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  section: 64px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: 11px 24px
    height: 44px
  button-primary-active:
    backgroundColor: "{colors.primary-dark}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: 11px 13px
  button-outline-on-dark:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
  button-ghost-link:
    textColor: "{colors.primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
  button-disabled:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ash}"
    rounded: "{rounded.sm}"
  pill-tab:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.sm}"
    padding: 10px 18px
  pill-tab-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.sm}"
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 12px 16px
    height: 44px
  text-input-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
  search-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 10px 16px
    height: 40px
  product-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.card-title}"
    rounded: "{rounded.sm}"
    padding: 24px
  feature-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 32px
  resource-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.card-title}"
    rounded: "{rounded.sm}"
    padding: 24px
  hero-card-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: 80px 48px
  cta-strip-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.heading-xl}"
    rounded: "{rounded.none}"
    padding: 64px 48px
  callout-stat:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.sm}"
    padding: 32px
  corner-square:
    backgroundColor: "{colors.primary}"
    rounded: "{rounded.none}"
    size: 12px
  utility-bar:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption-sm}"
    rounded: "{rounded.none}"
    height: 32px
  primary-nav:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.none}"
    height: 64px
  breadcrumb-bar:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.body}"
    typography: "{typography.caption-md}"
    rounded: "{rounded.none}"
    height: 48px
  sub-nav-strip:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    height: 56px
  footer-section:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark-mute}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 64px 48px
  link-inline:
    textColor: "{colors.link-blue}"
    typography: "{typography.link-md}"
  badge-tag:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.body}"
    typography: "{typography.caption-md}"
    rounded: "{rounded.sm}"
    padding: 4px 10px
---

## Overview

NVIDIA's marketing system is built like a piece of engineering documentation that learned graphic design — every page is a structured cascade of dense, factual information arranged on a paper-white grid, framed top and bottom by deep black hero/footer chapters. There is exactly one accent color in the entire system, and it is doing all the work: NVIDIA Green (`{colors.primary}` — `#76b900`), used for every primary CTA, every active tab, every link affordance on dark surfaces, and the small decorative corner squares that mark out card containers. Nothing else competes for attention.

The system's character comes from extreme typographic restraint and an almost punishingly angular geometry. Every container, button, and image uses `{rounded.sm}` (2px) — a token that's barely-there but never zero, giving the system the precise, technical feel of CAD output rather than warm consumer software. Cards sit on plain `{colors.canvas}` with a hairline `{colors.hairline}` border (no shadow, no elevation), separated by tight 8px-base spacing rhythm. Long-form pages stack 6–10 of these cards into multi-column technical grids without ever introducing decorative breaks.

The black-canvas hero and footer chapters are the system's "headline moments" — a single full-bleed photographic or 3D-rendered image with `{typography.display-xl}` headline copy laid in white, a single green CTA button, and a small green corner square as the only ornamentation. Everything else is subordinate.

**Key Characteristics:**
- Single-accent system: `{colors.primary}` carries every CTA, active state, and decorative motif. The rest is monochrome black/white/gray.
- Two-mode surface architecture: `{colors.surface-dark}` for hero/footer chapters; `{colors.canvas}` for body — alternating in a predictable rhythm down the page
- Hyper-angular geometry: `{rounded.sm}` (2px) on every interactive element. There are no pill buttons, no rounded cards, no soft chrome.
- NVIDIA-EMEA proprietary sans-serif at weights 400 and 700, scaled across a 12-tier hierarchy from `{typography.utility-xs}` (10px) up to `{typography.display-xl}` (48px)
- Card library leans on hairline `{colors.hairline}` borders and `{colors.surface-soft}` backgrounds rather than shadows for separation
- Signature decorative element: the small `{component.corner-square}` (~12px green square) anchored to one corner of resource and feature cards
- Dense multi-column footer with 4–6 link columns on `{colors.surface-dark}` — every page closes with the same structured global navigation

## Colors

> **Source pages:** `/tr-tr/` (primary homepage), `/en-eu/industries/healthcare-life-sciences/`, `/en-eu/solutions/ai/`, `/en-eu/ai/foundry/`. The chrome palette is identical across all four — only photography and copy vary.

### Brand & Accent
- **NVIDIA Green** (`{colors.primary}` — `#76b900`): the brand. Every primary CTA, every active state, every link affordance on dark surfaces, every corner square, and the brand wordmark itself.
- **NVIDIA Green Dark** (`{colors.primary-dark}` — `#5a8d00`): pressed state for the primary button — a single notch deeper than the brand green.
- **Accent Green Pale** (`{colors.accent-green-pale}` — `#bff230`): rare highlight tint used in editorial callouts and decorative micro-blocks; never on chrome.

### Surface
- **Page Canvas** (`{colors.canvas}` — `#ffffff`): the body of every page. Cards sit directly on it with hairline rules.
- **Soft Surface** (`{colors.surface-soft}` — `#f7f7f7`): breadcrumb strip, sub-nav, side-by-side comparison panels, alternating row backgrounds.
- **Black Canvas** (`{colors.surface-dark}` — `#000000`): hero chapter, dark CTA strips, footer, primary nav. The system's "frame" color.
- **Surface Elevated** (`{colors.surface-elevated}` — `#1a1a1a`): nested dark panels inside the footer (column dividers, fine-print bar).
- **Hairline** (`{colors.hairline}` — `#cccccc`): 1px card border, table rule, divider between footer link sections.
- **Hairline Strong** (`{colors.hairline-strong}` — `#5e5e5e`): 1px divider on dark surfaces (footer column rules, dark-mode card edges).

### Text
- **Ink** (`{colors.ink}` — `#000000`): headlines and body text on `{colors.canvas}`.
- **Body** (`{colors.body}` — `#1a1a1a`): long-form paragraph text where pure black is too heavy.
- **Mute** (`{colors.mute}` — `#757575`): metadata, breadcrumb separators, footer copyright.
- **Stone** (`{colors.stone}` — `#898989`): least-emphasis text and disabled state.
- **Ash** (`{colors.ash}` — `#a7a7a7`): disabled icon color and faint utility text.
- **On Dark** (`{colors.on-dark}` — `#ffffff`): primary text on `{colors.surface-dark}`.
- **On Dark Mute** (`{colors.on-dark-mute}` — `rgba(255,255,255,0.7)`): secondary footer link text and dark-canvas body copy.

### Semantic
- **Error** (`{colors.error}` — `#e52020`): validation messages, destructive confirmation.
- **Error Deep** (`{colors.error-deep}` — `#650b0b`): pressed state for error buttons; hover-pressed validation icons.
- **Warning** (`{colors.warning}` — `#df6500`): caution callouts, deprecated documentation banners.
- **Warning Bright** (`{colors.warning-bright}` — `#ef9100`): inverse warning on dark canvas.
- **Success Deep** (`{colors.success-deep}` — `#3f8500`): positive confirmation where NVIDIA Green's saturation would clash.
- **Link Blue** (`{colors.link-blue}` — `#0046a4`): inline anchor link color on light canvas — the only blue in the system, reserved for prose-embedded hyperlinks.

### Editorial Accents (used sparingly inside long-form content)
- **Accent Purple** (`{colors.accent-purple}` — `#952fc6`): research / scientific computing editorial accent.
- **Accent Purple Deep** (`{colors.accent-purple-deep}` — `#4d1368`): paired dark for purple lockups.
- **Accent Purple Pale** (`{colors.accent-purple-pale}` — `#f9d4ff`): wash background for editorial callouts.
- **Accent Yellow Pale** (`{colors.accent-yellow-pale}` — `#feeeb2`): documentation tip / soft callout fill.

## Typography

### Font Family
- **NVIDIA-EMEA** is the proprietary brand sans-serif used across every text role on the site. It carries weights 400 (regular) and 700 (bold) and falls back to Arial → Helvetica.
- **Font Awesome 6 Pro** and **Font Awesome 6 Sharp** are used exclusively for iconography (chevrons, social glyphs, breadcrumb separators, search/menu icons) at sizes 14–22px.

NVIDIA's type system is unusually flat: most chrome and body roles render at the same line-height (1.25–1.5) with the only meaningful variation coming from weight (400 vs 700) and size. The system relies on weight contrast — not size jumps and not color tinting — to establish hierarchy, which gives marketing copy and technical documentation an editorial newspaper feel.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 48px | 700 | 1.25 | 0 | Hero headline on `{component.hero-card-dark}` |
| `{typography.display-lg}` | 36px | 700 | 1.25 | 0 | Section headline ("Explore Our AI Solutions"), large stat callouts |
| `{typography.heading-xl}` | 24px | 700 | 1.25 | 0 | Sub-section title, dark CTA-strip headline |
| `{typography.heading-lg}` | 22px | 400 | 1.75 | 0 | Long-form intro paragraph that doubles as a heading |
| `{typography.heading-md}` | 20px | 700 | 1.25 | 0 | Card group title, sub-nav anchor heading |
| `{typography.heading-sm}` | 18px | 700 | 1.4 | 0 | Side-rail filter group, small section label |
| `{typography.card-title}` | 17px | 700 | 1.47 | 0 | Resource card title, product card title |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Body copy, default paragraph |
| `{typography.body-strong}` | 16px | 700 | 1.5 | 0 | Inline emphasis, primary nav link, label |
| `{typography.body-sm}` | 15px | 400 | 1.67 | 0 | Card description, secondary copy |
| `{typography.button-lg}` | 18px | 700 | 1.25 | 0 | Hero primary CTA |
| `{typography.button-md}` | 16px | 700 | 1.25 | 0 | Standard primary/secondary buttons |
| `{typography.button-sm}` | 14.4px | 700 | 1 | 0.144px | Compact pill tab, in-card secondary CTA |
| `{typography.link-md}` | 15px | 400 | 1.5 | 0 | Inline anchor link in body prose |
| `{typography.caption-md}` | 14px | 700 | 1.43 | 0 | Eyebrow over section heading, breadcrumb (uppercase) |
| `{typography.caption-sm}` | 12px | 400 | 1.25 | 0 | Footnote copy, metadata, table caption |
| `{typography.caption-xs}` | 11px | 700 | 1 | 0 | Pill chip label, utility-bar text |
| `{typography.utility-xs}` | 10px | 700 | 1.5 | 0 | Legal fine-print bar at the very bottom (uppercase) |

### Principles
The typography is brand-locked: NVIDIA-EMEA is used at every level, no serif, no display variant, no monospace, no italic. Hierarchy is built almost entirely from size and weight — color is reserved for emphasis (`{colors.primary}` on links over dark, `{colors.link-blue}` on light) and never used to separate type tiers.

### Note on Font Substitutes
NVIDIA-EMEA is proprietary. The closest open-source pairing is **Inter** (weights 400/700) — its x-height and stroke contrast match NVIDIA-EMEA's optical metrics within ~2% at body sizes. **Arial** is the official documented fallback and is acceptable for any system where Inter is unavailable. Avoid Helvetica Now or Helvetica Neue substitutes; their slightly tighter cap heights drift away from the brand's geometry.

## Layout

### Spacing System
- **Base unit:** 8px
- **Tokens (front matter):** `{spacing.xxs}` (2px) · `{spacing.xs}` (4px) · `{spacing.sm}` (8px) · `{spacing.md}` (12px) · `{spacing.lg}` (16px) · `{spacing.xl}` (24px) · `{spacing.xxl}` (32px) · `{spacing.section}` (64px)
- **Universal section rhythm:** every page in the set uses `{spacing.section}` (64px) as the vertical gap between major content blocks. Card grids use `{spacing.xl}` (24px) gutters; in-card padding sits at `{spacing.xl}` to `{spacing.xxl}` depending on density.
- **Hero chapter padding:** 80px vertical / 48px horizontal — the largest spacing in the system, reserved for `{component.hero-card-dark}`.

### Grid & Container
- **Max width:** ~1280px content area at desktop, with 24px gutters that grow to ~48px at ultrawide.
- **Column patterns:**
  - Card grids: 4-up at desktop, 3-up at 1024px, 2-up at 768px, 1-up at 480px.
  - Long-form text: 2-column 60/40 split (body + sidebar) at desktop, single-column at < 960px.
  - Footer: 6-up link columns at desktop, collapsing to 2-up on tablet, full accordion on mobile.
- **Card aspect:** product cards lean to 1:1 or 4:3 with 16:9 imagery on top + 1–2 lines of metadata below. Resource cards are 3:2 imagery with a longer description block.

### Whitespace Philosophy
Whitespace is structural, not atmospheric. Sections butt against each other with `{spacing.section}` rhythm — there are no decorative dividers, no empty "breathing room" bands, no gradient transitions between sections. The sense of air comes from `{colors.canvas}` body sections sandwiched between `{colors.surface-dark}` chapter blocks, not from generous padding inside any one component.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | No border, no shadow | Canvas-on-canvas blocks, hero chapter content, footer column body |
| 1 — Hairline border | 1px solid `{colors.hairline}` | All cards on `{colors.canvas}`, table cells, comparison panels |
| 2 — Hairline strong | 1px solid `{colors.hairline-strong}` | Dividers on `{colors.surface-dark}` (footer column rules, dark-card edges) |
| 3 — Soft shadow | `0 0 5px 0 rgba(0,0,0,0.3)` | Sticky nav bottom edge when scrolled, sticky CTA bar — used very sparingly |

NVIDIA's system has effectively no drop-shadow elevation in card or content surfaces. The only "shadow" in the extracted tokens is a subtle 5px ambient on sticky chrome bars. Cards do not lift; cards are flat rectangles with hairline borders.

### Decorative Depth
Depth in NVIDIA's system comes from photography and 3D-rendered hero imagery rather than from CSS effects:
- **Hero imagery:** full-bleed photographic or rendered scenes (data-center hardware, neural-net visualizations, life-sciences microscopy) sit behind hero copy with a dark gradient overlay for legibility.
- **Decorative corner squares:** the small `{component.corner-square}` (~12px solid `{colors.primary}` square) anchored to the top-left or bottom-right corner of resource and feature cards — the system's only consistent ornamental device.
- **Editorial 3D accents:** isometric or wireframe 3D renderings appear as illustration-style fills inside long-form articles, never as chrome.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Hero chapter, footer, dark CTA strips, primary nav |
| `{rounded.xs}` | 1px | Decorative micro-rules and inset accent strips |
| `{rounded.sm}` | 2px | Every interactive element — buttons, cards, inputs, pill tabs, badges |
| `{rounded.full}` | 9999px / 50% | Avatar circles, social-icon dots, brand wordmark icon |

The system is aggressively angular. Outside of avatar/icon circles, no element exceeds 2px radius. The 2px is enough to soften the optical aliasing on a sharp edge but small enough that the system reads as engineering-grade rather than consumer-friendly.

### Photography Geometry
- **Hero imagery:** full-bleed 16:9 (desktop) cropping to 4:5 portrait on mobile.
- **Card imagery:** 16:9 thumbnail at the top of resource cards; 1:1 square for product/SKU cards; 3:2 for editorial article cards.
- **Decorative corner squares:** 12×12px on standard cards, scaled to 16×16 on hero callouts.
- **Avatar/social icons:** 32–40px circles with 1px hairline.

## Components

> **No hover states documented** per system policy. Each spec covers Default and Active/Pressed only; variants live as separate `components:` entries in the front matter.

### Buttons

**`button-primary`** — the universal NVIDIA CTA
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button-md}`, padding `11px 24px`, height `44px`, rounded `{rounded.sm}`.
- The single most-repeated component in the system: hero CTA, dark CTA strip, "Learn More" on every card group, "Sign Up" / "Get Started" on every long-form page bottom.
- Pressed state lives in `button-primary-active` — background drops to `{colors.primary-dark}` (`#5a8d00`) with the same text color.

**`button-outline`** — secondary on light canvas
- Background transparent, text `{colors.ink}`, 2px solid `{colors.primary}` border, type `{typography.button-md}`, padding `11px 13px`, rounded `{rounded.sm}`.
- The system's most distinctive secondary CTA: a clear pane bordered in NVIDIA Green. Used for "Read the Documentation", "Watch the Video", "Compare Products" — second-tier actions that still earn the brand color.

**`button-outline-on-dark`** — outline on `{colors.surface-dark}`
- Background transparent, text `{colors.on-dark}`, 1px solid `{colors.on-dark}`, type `{typography.button-md}`, rounded `{rounded.sm}`.
- White-on-black variant used in dark hero/footer CTA strips paired with a primary green button.

**`button-ghost-link`** — inline arrow link
- Text `{colors.primary}` with a small right-arrow icon, type `{typography.button-md}`, no background, no border, rounded `{rounded.none}`.
- "Learn More →" affordance sitting at the bottom of resource cards and long-form section blocks. The arrow is uppercase and bold per `{typography.caption-md}`-equivalent treatment.

**`button-disabled`**
- Background `{colors.surface-soft}`, text `{colors.ash}`, rounded `{rounded.sm}` — flat gray.

### Tabs & Chips

**`pill-tab`** + **`pill-tab-active`**
- Default: transparent background, text `{colors.ink}`, type `{typography.button-sm}`, padding `10px 18px`, rounded `{rounded.sm}`.
- Active: background `{colors.ink}`, text `{colors.on-dark}` — the tab flips inverted on selection. Used in the "Latest in AI Resources" filter strip and similar segmented controls.

**`badge-tag`**
- Background `{colors.surface-soft}`, text `{colors.body}`, type `{typography.caption-md}`, padding `4px 10px`, rounded `{rounded.sm}` (uppercase).
- Document type / category labels at the top of resource cards ("WHITE PAPER", "WEBINAR", "BLOG").

### Inputs & Forms

**`text-input`** + **`text-input-focused`**
- Default: background `{colors.canvas}`, text `{colors.ink}`, 1px solid `{colors.hairline}`, type `{typography.body-md}`, padding `12px 16px`, height `44px`, rounded `{rounded.sm}`.
- Focused: same surface, border becomes 2px solid `{colors.primary}` — the green border is the only focus signal in the system.

**`search-input`**
- Used in the global search overlay — same treatment as `text-input` but at 40px height with a magnifier glyph at left.

### Cards

**`product-card`**
- Container: background `{colors.canvas}`, 1px solid `{colors.hairline}`, padding `{spacing.xl}` (24px), rounded `{rounded.sm}`.
- Layout: 16:9 product image at top, `{typography.card-title}` title, `{typography.body-sm}` description, `{component.button-ghost-link}` "Learn More →" affordance at bottom.
- The `{component.corner-square}` sits at the top-left corner.

**`feature-card`**
- Container: background `{colors.canvas}`, 1px solid `{colors.hairline}`, padding `{spacing.xxl}` (32px), rounded `{rounded.sm}`.
- Layout: icon (Font Awesome at 22–24px) at top in `{colors.primary}` followed by `{typography.heading-md}` title and `{typography.body-md}` body.
- Used in 3-up or 4-up grids that explain product capabilities ("Agentic AI", "Data Science", "Inference", "Conversational AI").

**`resource-card`**
- Container: background `{colors.canvas}`, 1px solid `{colors.hairline}`, padding `{spacing.xl}`, rounded `{rounded.sm}`.
- Header strip: `{component.badge-tag}` document-type label.
- Body: 3:2 thumbnail, `{typography.card-title}` title, `{typography.body-sm}` description.
- Footer: ghost-link "Read More →" with right-pointing chevron in `{colors.primary}`.

**`callout-stat`**
- Background `{colors.canvas}` with 1px hairline `{colors.hairline}`, padding `{spacing.xxl}`, rounded `{rounded.sm}`.
- Massive `{typography.display-lg}` (36px) numeric in `{colors.primary}` followed by `{typography.body-md}` caption underneath ("4× faster training", "60% lower cost", etc.). Used inside long-form industry pages.

### Hero & CTA Strips

**`hero-card-dark`**
- Background `{colors.surface-dark}` with full-bleed 16:9 photographic/3D image and dark gradient overlay; copy slot at left.
- `{typography.display-xl}` headline `{colors.on-dark}`, `{typography.heading-lg}` subhead, single `{component.button-primary}` CTA (sometimes paired with `{component.button-outline-on-dark}`).
- Anchors the top of every primary landing page.

**`cta-strip-dark`**
- Same surface as hero but compressed to a 1-row band with `{typography.heading-xl}` headline + single CTA.
- Sits between content sections as a "Ready to get started?" bridge.

### Decorative

**`corner-square`**
- 12×12px solid `{colors.primary}` square anchored to a card corner. The brand's signature ornamental motif.
- Used on resource cards, feature cards, and editorial callouts. Position varies (top-left, bottom-right) but the size and color are constant.

### Navigation

**`utility-bar`**
- Background `{colors.surface-dark}`, text `{colors.on-dark}`, height 32px, type `{typography.caption-sm}`, rounded `{rounded.none}`.
- Right-aligned cluster: locale selector / "Login" / "Account". Always present at the very top of the page.

**`primary-nav`**
- Background `{colors.surface-dark}`, text `{colors.on-dark}`, height 64px, type `{typography.body-strong}`, rounded `{rounded.none}`.
- Layout: NVIDIA wordmark at left, centered nav row ("Products / Solutions / Industries / Resources / Support / Company"), right cluster (search-glyph + "Login" button + green CTA "Get Started").

**`breadcrumb-bar`**
- Background `{colors.surface-soft}`, text `{colors.body}`, height 48px, type `{typography.caption-md}` (uppercase).
- Sits directly under the primary nav on every interior page; chevron separators in `{colors.mute}`.

**`sub-nav-strip`**
- Background `{colors.surface-soft}`, text `{colors.ink}`, height 56px, type `{typography.button-md}`, rounded `{rounded.none}`.
- Section-specific nav anchored above content (e.g., "Healthcare → Drug Discovery / Medical Imaging / Genomics / Patient Care").

**Top Nav (Mobile)**
- Hamburger menu icon (left), NVIDIA wordmark (center), search + locale icons (right). Primary nav collapses into a full-screen drawer that slides in from the right.

### Footer

**`footer-section`**
- Background `{colors.surface-dark}`, text `{colors.on-dark-mute}`, padding `{spacing.section}` (64px) vertical / 48px horizontal, rounded `{rounded.none}`.
- Layout: 6-column link grid (Products / Software / Resources / Company Info / Solutions / Support) with column headers in `{typography.body-strong}` `{colors.on-dark}` and link lists in `{typography.body-sm}` `{colors.on-dark-mute}`.
- Below the columns: social-icon strip + locale selector + legal/privacy fine-print row in `{typography.utility-xs}` (uppercase) `{colors.mute}`.

### Inline

**`link-inline`**
- Body-prose anchor link: `{colors.link-blue}` text with underline. The ONLY blue in the system — appears nowhere except inline links inside `{typography.body-md}` paragraphs.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` for primary CTAs, active states, decorative corner squares, and the NVIDIA wordmark itself. Treat it as a precious resource.
- Stack hero/footer chapters in `{colors.surface-dark}` and body sections in `{colors.canvas}` — alternate them in a predictable rhythm down the page.
- Anchor a `{component.corner-square}` to one corner of every reusable card. It is the system's identity tag.
- Use `{rounded.sm}` (2px) on every interactive element. Never go to 0, never go past 4.
- Build hierarchy from font weight (400 vs 700) and size, not from color tinting. Body text stays `{colors.ink}` or `{colors.body}` regardless of context.
- Stack content sections at `{spacing.section}` (64px) rhythm with no decorative dividers between them.
- Pair `{component.button-primary}` (green fill) with `{component.button-outline}` (green border) for primary + secondary action pairs.

### Don't
- Don't introduce drop shadows on cards or content surfaces. The only allowed shadow is the 5px ambient on sticky chrome.
- Don't substitute `{colors.success-deep}`, `{colors.accent-green-pale}`, or any other green for `{colors.primary}` in CTAs. The brand green is precise.
- Don't use `{colors.link-blue}` outside of inline body-prose links. It is not a button color, not a chrome color.
- Don't soften the geometry. No pill buttons, no rounded cards, no `{rounded.lg}` or higher anywhere except avatars and social icons.
- Don't pad the hero `{component.hero-card-dark}` symmetrically. Copy hugs the left third; imagery fills the right.
- Don't add a second accent color for variety. The system is intentionally one-color.
- Don't put `{component.button-primary}` on a `{colors.canvas}` background where green-on-white would clash with photo content — use `{component.button-outline}` instead and reserve fill for dark surfaces.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| ultrawide | 1920px+ | Content max-width holds at 1280px; outer gutters grow to ~80px |
| desktop-large | 1440px | Default desktop layout — 4-up card grid, 6-col footer |
| desktop | 1280px | Same as large with slightly narrower outer gutters |
| desktop-small | 1024px | 4-up cards collapse to 3-up; sub-nav remains horizontal |
| tablet | 768px | 3-up cards collapse to 2-up; primary nav becomes hamburger drawer |
| mobile | 480px | Single-column everything; footer columns collapse to accordion |
| mobile-narrow | 320px | Hero `{typography.display-xl}` scales from 48px → 32px |

### Touch Targets
All interactive elements meet WCAG AA (≥ 44×44px). `{component.button-primary}` sits at 44px height with 24px horizontal padding. `{component.text-input}` sits at 44px. `{component.pill-tab}` sits at ~40px height with extended hit-target padding to 44px. `{component.button-outline}` matches the 44px standard. Footer links are 18–20px line-height with 8–12px vertical padding to keep tap targets at ~36–44px depending on link length.

### Collapsing Strategy
- **Primary nav:** desktop center cluster → tablet hamburger drawer at 768px.
- **Card grid:** 4-up → 3-up → 2-up → 1-up at 1024, 768, and 480px; gutters drop from 24px to 16px on mobile.
- **Footer:** 6-up link columns → 2-up at tablet → full accordion at mobile (each column header becomes a tap-to-expand row).
- **Hero copy:** desktop `{typography.display-xl}` (48px) → tablet 36px → mobile 32px; line-height holds at 1.25.
- **Sub-nav strip:** desktop horizontal anchor row → tablet horizontal scroll → mobile collapses into a select dropdown.
- **Section padding:** `{spacing.section}` (64px) desktop → 48px tablet → 32px mobile.
- **Long-form text:** desktop 60/40 body+sidebar → tablet/mobile single-column with sidebar pushed to the bottom.

### Image Behavior
- Hero imagery uses art-direction crops: 16:9 wide hero on desktop swaps to 4:5 portrait on mobile so the subject stays centered and headline text still has overlay space.
- Card imagery is a fixed aspect (16:9 for resource, 1:1 for product) that scales rather than re-crops between breakpoints.
- All non-critical imagery is lazy-loaded as the user scrolls into the next grid row.

## Iteration Guide

1. Focus on ONE component at a time. Pull its YAML entry from the front matter and verify every property resolves.
2. Reference component names and tokens directly (`{colors.primary}`, `{component.button-primary-active}`, `{rounded.sm}`) — do not paraphrase.
3. Run `npx @google/design.md lint DESIGN.md` after edits — `broken-ref`, `contrast-ratio`, and `orphaned-tokens` warnings flag issues automatically.
4. Add new variants as separate component entries (`-active`, `-disabled`, `-focused`) — do not bury them inside prose.
5. Default body to `{typography.body-md}`; reach for `{typography.body-strong}` for emphasis; reserve `{typography.display-xl}` strictly for hero chapter headlines.
6. Keep `{colors.primary}` scarce per viewport — if more than one solid-green CTA appears in the same fold, neutralize one to `{component.button-outline}`.
7. When introducing a new component, ask whether it can be expressed with the existing card + 2px-radius + corner-square + green-CTA vocabulary before adding new tokens. The system's strength is that it almost never needs new ones.

## Known Gaps

- **Mobile screenshots not captured** — responsive behavior synthesizes NVIDIA's known mobile pattern (hamburger drawer, accordion footer, 1-up card grid, hero downscale) from desktop evidence and the documented breakpoint stack.
- **Hover states not documented** by system policy.
- **Dialog / modal styling** beyond the locale-selector overlay not visible in the captured surfaces.
- **Form field styling** for full sign-up / contact forms is not present in the captured surfaces — only inline search and basic text inputs are documented.
- **Login / authenticated chrome** not in the captured pages.
