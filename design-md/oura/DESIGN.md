---
version: alpha
name: Oura Analysis
description: An analysis of Oura's design language — a warm-paper wellness system that pairs a high-contrast Editorial serif with a quiet grotesque sans, wraps every surface in a cream-and-earth palette drawn from mustard, clay and olive, and drives conversion with a single decisive action blue against otherwise calm, photography-led layouts.

colors:
  primary: "#2a72de"
  on-primary: "#ffffff"
  stone: "#4a4741"
  on-stone: "#ffffff"
  clay: "#6b443d"
  espresso: "#39221e"
  gold: "#af751b"
  ochre: "#bc924c"
  gold-soft: "#ddaa61"
  gold-pale: "#ddbe78"
  gold-deep: "#684d07"
  forest: "#224228"
  olive: "#5c6f5d"
  sage: "#849671"
  sage-mute: "#7b886d"
  sage-pale: "#ced4b8"
  canvas: "#f7f1e8"
  surface: "#ffffff"
  surface-grey: "#ececec"
  silver: "#cccac7"
  ink-band: "#000000"
  ink-band-soft: "#19191c"
  ink: "#1c1b1a"
  ash: "#838280"
  mute: "#a8a5a0"
  on-dark: "#ffffff"
  hairline: "#e1dcd3"
  error: "#e33a22"

typography:
  display:
    fontFamily: Editorial New
    fontSize: 110px
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: 0
  display-2:
    fontFamily: Editorial New
    fontSize: 80px
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: 0
  heading-1:
    fontFamily: Editorial New
    fontSize: 68px
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: 0
  heading-2:
    fontFamily: Editorial New
    fontSize: 40px
    fontWeight: 300
    lineHeight: 1.15
    letterSpacing: 0
  heading-3:
    fontFamily: AkkuratLL
    fontSize: 40px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0
  title:
    fontFamily: AkkuratLL
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0
  lead:
    fontFamily: Editorial New
    fontSize: 24px
    fontWeight: 100
    lineHeight: 1.25
    letterSpacing: 0
  body-lg:
    fontFamily: AkkuratLL
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body:
    fontFamily: AkkuratLL
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: AkkuratLL
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  button:
    fontFamily: AkkuratLL
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0
  ui:
    fontFamily: AkkuratLL
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  caption:
    fontFamily: AkkuratLL
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  eyebrow:
    fontFamily: AkkuratLL
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 1px

rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 24px
  xl: 40px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px

components:
  # ─── Brand-native components (extracted) ───
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.stone}"
    typography: "{typography.ui}"
    rounded: "{rounded.none}"

  announcement-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.none}"

  hero:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display}"
    rounded: "{rounded.none}"

  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"

  button-secondary:
    backgroundColor: "{colors.stone}"
    textColor: "{colors.on-stone}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"

  button-on-dark:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.stone}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"

  button-outline:
    backgroundColor: "{colors.ink-band}"
    textColor: "{colors.on-dark}"
    borderColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"

  button-outline-stone:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.stone}"
    borderColor: "{colors.stone}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"

  button-icon-circular:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.stone}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.full}"

  text-input:
    backgroundColor: "{colors.stone}"
    textColor: "{colors.on-stone}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"

  text-input-focused:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.error}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"

  feature-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"

  feature-card-elevated:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"

  product-card:
    backgroundColor: "{colors.surface-grey}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"

  person-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"

  stat-badge:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.stone}"
    typography: "{typography.title}"
    rounded: "{rounded.full}"

  pill-tab:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.stone}"
    borderColor: "{colors.silver}"
    typography: "{typography.ui}"
    rounded: "{rounded.full}"

  eyebrow-label:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.none}"

  news-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"

  footer:
    backgroundColor: "{colors.ink-band-soft}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"

  # ─── Examples (illustrative, kit-mirror) ───
  # (derived in Step 7.5 by scripts/derive-examples-block.mjs)

  ex-pricing-tier:
    description: "Default Pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface."
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  ex-pricing-tier-featured:
    description: "Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode)."
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  ex-product-selector:
    description: "Color/size picker chrome — fashion / DTC variant selector."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
  ex-cart-drawer:
    description: "Shopping cart drawer — DTC / fashion brand actual cart chrome."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: "Sidebar nav row inside the App Shell example. Active state uses brand primary as the indicator."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
  ex-data-table-cell:
    description: "Default data-table th + td chrome. Header uses mono-caps eyebrow typography; body uses body-sm."
    headerBackground: "{colors.surface}"
    headerTypography: "{typography.eyebrow}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.sm} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: "Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  ex-modal-card:
    description: "Modal dialog surface — same chrome as feature-card with elevated shadow."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  ex-empty-state-card:
    description: "Empty-state illustration frame."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    captionTypography: "{typography.body}"
  ex-toast:
    description: "Toast notification surface — feature-card shape + medium shadow."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body-sm}"

---


## Overview

Oura's web presence reads like a printed field journal that learned to breathe. The default surface is a warm paper cream (`{colors.canvas}` — #f7f1e8) rather than white, and everything sits on it with generous air: a light, high-contrast serif for the big statements, a calm grotesque sans for everything you actually read, and full-bleed lifestyle photography that carries most of the emotional weight. Where a typical wellness-tech site would reach for gradients and glassmorphism, Oura reaches for restraint — flat fills, hairline rules, and long vertical silences between sections.

The system runs three surface "worlds." The **cream world** (`{colors.canvas}`) is home base for marketing and editorial content. The **ink world** (`{colors.ink-band}` / `{colors.ink-band-soft}`) is a near-black stage reserved for the footer and the "In the News" band, where cream cards float like clippings on a dark table. The **silver world** (`{colors.surface-grey}` → `{colors.silver}`) is a cool, machined grey gradient used only on the product-showcase pages, where the ring is photographed like jewellery.

Color discipline is the signature move. The whole palette is earth-toned — mustard and gold (`{colors.gold}`, `{colors.ochre}`), clay and espresso (`{colors.clay}`, `{colors.espresso}`), olive and sage (`{colors.forest}`, `{colors.sage}`) — and these appear as accent bands, illustration, and score/data-visualisation, never as buttons. Buttons carry a single, deliberate exception: **action blue** (`{colors.primary}` — #2a72de), used only for the decisive conversion moments ("Explore", "Shop All Products"). The warm brand neutral `{colors.stone}` (#4a4741) does the quieter work — the wordmark, editorial pills, form fields, outlines, and links — so the blue never has to compete.

**Key Characteristics:**
- Warm-paper canvas (`{colors.canvas}`) as the default surface, not white — cream is the brand's resting state.
- A two-typeface voice: `{typography.display}` (Editorial New, a light high-contrast serif) for headlines, `{typography.body}` (AkkuratLL, a neutral grotesque) for reading.
- One decisive **action blue** (`{colors.primary}`) reserved strictly for primary CTAs; every other button is warm-neutral `{colors.stone}` or cream.
- An earth-tone accent family — mustard, clay, olive — used for bands, illustration and data-viz, deliberately kept off buttons.
- Fully-rounded pill buttons (`{rounded.full}`) against softly-rounded cards (`{rounded.lg}`) and large-radius product images (`{rounded.xl}`).
- Three surface worlds cycling in a predictable rhythm: cream editorial → black news/footer band → silver product stage.
- Photography-first hierarchy: full-bleed imagery leads, UI recedes to hairlines and quiet labels.

## Colors

> Source pages analysed: the homepage, the Oura Ring 5 store page, the Activity & Movement page, and the Clinical & Science Experts page. The palette below reconciles all four into one system.

### Brand & Accent
- **Action Blue** (`{colors.primary}` — #2a72de): the single conversion color. Fills the primary CTA pill ("Explore", "Shop All Products") with `{colors.on-primary}` text. Used nowhere else — not for links, not for accents.
- **Stone** (`{colors.stone}` — #4a4741): the warm taupe-brown brand neutral. Carries the wordmark, secondary/editorial pill buttons, form-field fills, circular-icon outlines, and default link color. This is the color that makes Oura feel "Oura."
- **Clay** (`{colors.clay}` — #6b443d): a warm reddish-brown used for accent bands and content cards (e.g., the Activity page's "Your Oura Activity Score" band).
- **Espresso** (`{colors.espresso}` — #39221e): the darkest brown, for deep accent fills and rich text on gold surfaces.
- **Gold** (`{colors.gold}` — #af751b) / **Ochre** (`{colors.ochre}` — #bc924c) / **Gold Soft** (`{colors.gold-soft}` — #ddaa61) / **Gold Pale** (`{colors.gold-pale}` — #ddbe78) / **Gold Deep** (`{colors.gold-deep}` — #684d07): the mustard ramp. Powers warm illustration, the activity-ring dashboard card, and score data-visualisation.
- **Forest** (`{colors.forest}` — #224228) / **Olive** (`{colors.olive}` — #5c6f5d) / **Sage** (`{colors.sage}` — #849671) / **Sage Mute** (`{colors.sage-mute}` — #7b886d) / **Sage Pale** (`{colors.sage-pale}` — #ced4b8): the olive ramp, used for calm accent bands, illustration, and secondary data-visualisation.

### Surface
- **Canvas** (`{colors.canvas}` — #f7f1e8): the signature warm-paper background for all editorial and marketing surfaces.
- **Surface** (`{colors.surface}` — #ffffff): pure white, for elevated cards, inputs-on-cream, and the circular "+" overlay buttons on person cards.
- **Surface Grey** (`{colors.surface-grey}` — #ececec): the light end of the product-page gradient and light utility fills.
- **Silver** (`{colors.silver}` — #cccac7): the cool grey used on product-showcase pages and as the selected-tab border.
- **Ink Band** (`{colors.ink-band}` — #000000): the true-black stage for the footer / news band.
- **Ink Band Soft** (`{colors.ink-band-soft}` — #19191c): the near-black used for the footer surface, a hair warmer than pure black.
- **Hairline** (`{colors.hairline}` — #e1dcd3): the warm 1px divider on cream (a low-opacity ink wash blended onto canvas).

### Text
- **Ink** (`{colors.ink}` — #1c1b1a): primary heading and body text on cream.
- **Stone** (`{colors.stone}` — #4a4741): secondary text and editorial emphasis on cream.
- **Ash** (`{colors.ash}` — #838280): muted grey for meta text, titles-under-names, and utility captions.
- **Mute** (`{colors.mute}` — #a8a5a0): warm grey for the quietest captions and for secondary text on dark bands.
- **On Dark** (`{colors.on-dark}` — #ffffff): text and icons on the ink and silver worlds.

### Semantic
- **Error** (`{colors.error}` — #e33a22): validation and focus-error state on form fields (the focused email field border).

## Typography

### Font Family
Two families carry the entire system, and the tension between them is the point.

- **Editorial New** (`{typography.display}`, `{typography.heading-1}`, `{typography.heading-2}`, `{typography.lead}`): a light, high-contrast transitional serif used for display headlines, section titles, and the occasional light-serif lead paragraph. Weights run thin — 100 and 300 — so the large sizes read as elegant, not heavy. The Activity page shows it in italic ("move *count*") for a hand-set editorial flourish.
- **AkkuratLL** (`{typography.heading-3}` through `{typography.caption}`): a neutral Swiss grotesque that does all the real reading work — subheads, body, UI labels, buttons, captions. Weights 300 / 400 / 600 / 700.

### Hierarchy

| Token | Family | Size | Weight | Line Height | Use |
|---|---|---|---|---|---|
| `{typography.display}` | Editorial New | 110px | 300 | 1.05 | Homepage hero headline ("Subtle. Power.") |
| `{typography.display-2}` | Editorial New | 80px | 300 | 1.1 | Secondary-page display headlines |
| `{typography.heading-1}` | Editorial New | 68px | 300 | 1.1 | Large page titles |
| `{typography.heading-2}` | Editorial New | 40px | 300 | 1.15 | Section headlines |
| `{typography.heading-3}` | AkkuratLL | 40px | 400 | 1.25 | Sans section headings / large stats |
| `{typography.title}` | AkkuratLL | 32px | 400 | 1.25 | Card titles, sub-section titles |
| `{typography.lead}` | Editorial New | 24px | 100 | 1.25 | Light-serif intro / lead paragraphs |
| `{typography.body-lg}` | AkkuratLL | 20px | 400 | 1.5 | Emphasised body copy |
| `{typography.body}` | AkkuratLL | 18px | 400 | 1.5 | Default body text |
| `{typography.body-sm}` | AkkuratLL | 16px | 400 | 1.5 | Dense body, links, form text |
| `{typography.button}` | AkkuratLL | 16px | 600 | 1 | Button labels |
| `{typography.ui}` | AkkuratLL | 14px | 400 | 1.4 | Nav links, tabs, utility UI |
| `{typography.caption}` | AkkuratLL | 13px | 400 | 1.4 | Captions, footnotes |
| `{typography.eyebrow}` | AkkuratLL | 12px | 700 | 1.2 | Small-caps overlines ("IN THE NEWS", "FEATURED ARTICLE") |

### Principles
- Serif for feeling, sans for facts. `{typography.display}` and its siblings appear only at large sizes where the high stroke contrast is legible and expressive; everything at reading scale is `{typography.body}`.
- Thin display weights. Big serif headlines lean on weight 100–300, so scale — not boldness — creates hierarchy.
- Quiet overlines. Section context is set with `{typography.eyebrow}` (uppercase, lightly tracked) rather than heavy kickers.

### Note on Font Substitutes
Both faces are proprietary. For open-source builds, substitute **Editorial New** with **Fraunces** or **Newsreader** (both high-contrast serifs — set optical size high and weight low to match the thin display feel), and **AkkuratLL** with **Inter** or **Hanken Grotesk** (neutral grotesques with similar x-height). When substituting, nudge display line-height up slightly (Fraunces runs a touch taller than Editorial New) and keep body tracking at 0.

## Layout

### Spacing System
- **Base unit**: 8px.
- **Tokens**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px.
- Card interiors sit at `{spacing.lg}`; tight utility groupings (form padding, chip padding) at `{spacing.sm}`–`{spacing.md}`. Section-to-section rhythm is deliberately large — long vertical gaps of blank cream separate content blocks, letting photography and headlines breathe.

### Grid & Container
- Content is center-constrained within a wide max-width, with full-bleed photography breaking out to the viewport edges.
- Card grids run 3-up (person cards, benefit trios) and 4-up (news / expert carousels), collapsing toward 1-up on narrow screens.
- The product page alternates centered single-column showcases with edge-to-edge media.

### Whitespace Philosophy
Empty cream is a design element, not leftover space. Large silences between sections group related content and pace the scroll like chapters. UI chrome stays minimal so the eye rests on imagery and headlines.

### Responsive Strategy

#### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Desktop | ≥ 1280px | Full multi-column grids, horizontal nav, large display type |
| Laptop | 1024–1279px | Slightly tightened gutters, same structure |
| Tablet | 768–1023px | 4-up grids → 2-up, nav begins to condense |
| Mobile | ≤ 767px | Single-column stacks, hamburger nav, display type scales down (110px → ~48px), pill CTAs go full-width-ish |

(Breakpoint ladder observed in the extracted media-query data spans 1280 → 1024 → 896 → 768 → 600 → 480 → 320px.)

#### Touch Targets
Pill buttons (`button-primary`, `button-secondary`) and circular icon buttons (`button-icon-circular`) are sized for comfortable tapping; keep interactive controls at a minimum 44×44px on touch. Carousel arrows and the "+" person-card buttons are circular and finger-sized.

#### Collapsing Strategy
- Horizontal nav collapses to a hamburger below the tablet breakpoint; the cart and wordmark persist.
- Multi-column card grids collapse 4-up → 2-up → 1-up.
- The silver product showcase keeps its centered single-column media on all sizes and simply scales the imagery.
- Footer link columns reflow from a 4-column row into stacked groups.

#### Image Behavior
Photography is full-bleed and art-directed, often edge-to-edge on mobile. Product imagery uses large-radius rounded frames (`{rounded.xl}`); editorial imagery is frequently un-rounded full-bleed. Images lazy-load as sections enter the viewport.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | No shadow; separation by color-world shift or `{colors.hairline}` rule | Default on cream; most sections |
| 1 — Resting card | Very soft, low-opacity drop shadow | News cards on the black band, the Technical Specifications card |
| 2 — Floating | Slightly deeper, more diffuse soft shadow | Product-showcase media cards, elevated content cards |
| 3 — Overlay | Strong diffuse shadow + scrim | Modals / dialogs (rare) |

Depth is understated. On cream, sections separate through the surface-world shift (cream → black → silver) and hairline dividers rather than heavy elevation. Where shadows appear, they are soft, warm, and low-opacity — never hard or high-contrast.

### Decorative Depth
Depth mostly comes from **photography** (full-bleed lifestyle imagery, machined product renders on the silver stage) and from **warm accent bands** (`{colors.clay}`, `{colors.gold}` families) that recede or advance a section. Subtle radial glows appear behind product imagery on the store page to lift the ring off its grey backdrop.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed imagery, bands, nav |
| `{rounded.xs}` | 4px | Small utility chips, tight controls |
| `{rounded.sm}` | 8px | Small cards, badges, list items |
| `{rounded.md}` | 12px | Form fields (email input) |
| `{rounded.lg}` | 24px | Content cards, person cards, news cards |
| `{rounded.xl}` | 40px | Large product-image cards on the store page |
| `{rounded.full}` | 9999px | Pill buttons, tabs, circular icon buttons, stat badges |

### Photography Geometry
Product and lifestyle imagery is generous and soft-cornered: product cards use `{rounded.xl}`, editorial and person imagery uses `{rounded.lg}` or runs full-bleed with no radius. Person cards are near-portrait rectangles with a small circular "+" affordance in the corner. Stat readouts ("99%", "95%", "90%") sit in perfect circles (`{rounded.full}`).

## Components

> Only Default and (where genuinely extracted) Active/Pressed states are documented. Variants live as separate `components:` entries in the front matter.

### Navigation

**`nav-bar`** — Top navigation on cream
- Background `{colors.canvas}`, links in `{colors.stone}` at `{typography.ui}`, no radius. Slots: OURA wordmark (left, `{colors.stone}`), center dropdown links (Shop, Your Health, Why Oura, For Organizations), cart icon (right). Sits flush on the cream canvas with no divider until scrolled.

**`announcement-bar`** — Top promo strip
- Full-width cream strip above the nav, centered `{typography.eyebrow}` text in `{colors.ink}` (e.g. free-trial offer copy). No radius, no background shift — it reads as the top edge of the paper.

### Hero

**`hero`** — Page-opening statement
- Cream background, `{typography.display}` serif headline in `{colors.ink}` (homepage: "Subtle. Power."), a small serif eyebrow label above, and a single `button-primary` blue pill CTA. Often paired with full-bleed product/lifestyle photography directly beneath the headline.

### Buttons

**`button-primary`** — Primary conversion CTA
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button}`, fully rounded (`{rounded.full}`). The only blue in the interface. Used for "Explore" and "Shop All Products".

**`button-secondary`** — Editorial / secondary action
- Background `{colors.stone}`, text `{colors.on-stone}`, `{typography.button}`, `{rounded.full}`. The warm-neutral pill for content actions ("Why Oura", "How It Works").

**`button-on-dark`** — Cream pill on dark surfaces
- Background `{colors.canvas}`, text `{colors.stone}`, `{typography.button}`, `{rounded.full}`. Used for "Read More" and card actions floating on the black news band. (Extracted button variant: cream fill, stone text, full radius.)

**`button-outline`** — Outline pill on dark/photo
- Transparent over `{colors.ink-band}`, 1px `{colors.on-dark}` border, white text, `{rounded.full}`. For low-emphasis actions over dark imagery.

**`button-outline-stone`** — Outline pill on cream
- Cream background, 1px `{colors.stone}` border, `{colors.stone}` text, `{rounded.full}`. Low-emphasis action on the paper canvas.

**`button-icon-circular`** — Circular icon control
- Circular (`{rounded.full}`) control for carousel arrows and the person-card "+" affordance. Two flavours: a white surface circle (`{colors.surface}`) with a hairline edge for the "+" overlays, and a stone-outlined circle for the carousel arrows.

### Inputs & Forms

**`text-input`** — Newsletter / email field
- Background `{colors.stone}`, text `{colors.on-stone}`, `{typography.body-sm}`, radius `{rounded.md}` (12px), padding roughly 8px vertical / 20px left with a trailing submit affordance on the right. The dark taupe fill makes the field feel like part of the footer rather than a bright form box.

**`text-input-focused`** — Focused / error field
- On focus the field lifts to a light surface (`{colors.surface}`) with `{colors.ink}` text and a `{colors.error}` border for the validation-error state. Radius stays `{rounded.md}`.

### Cards & Containers

**`feature-card`** — Content / benefit card
- White surface (`{colors.surface}`), `{colors.hairline}` border, `{colors.ink}` text, `{typography.body}`, radius `{rounded.lg}`, padding `{spacing.lg}`. The default soft-cornered content container on cream.

**`feature-card-elevated`** — Floating content card
- Cream surface (`{colors.canvas}`) with a soft Level-1/2 shadow, `{rounded.lg}`, padding `{spacing.lg}`. Used where a card floats over imagery or the black band (news clippings, spec card).

**`product-card`** — Product-showcase media card
- Cool grey surface (`{colors.surface-grey}`), large radius `{rounded.xl}` (40px), holds a machined product render on the silver stage, often with a subtle radial glow behind the ring.

**`person-card`** — Expert / leadership card
- Cream background, portrait photo with radius `{rounded.lg}`, a white circular `button-icon-circular` "+" in the corner, name in `{typography.body}`/`{typography.title}` and role in `{colors.ash}` `{typography.caption}`. Appears in horizontal carousels.

**`news-card`** — News clipping on the dark band
- Cream card (`{colors.canvas}`) floating on `{colors.ink-band}`, `{colors.ink}` text, `{typography.body}`, `{rounded.lg}`, padding `{spacing.lg}`. Carries a publication quote plus a circular arrow link.

### Signature Components

**`stat-badge`** — Circular stat readout
- Perfect circle (`{rounded.full}`) on cream with a large `{typography.title}`/`{typography.heading-3}` number in `{colors.stone}` and a small caption beneath (e.g. "99% / 95% / 90%" accuracy figures on the product page).

**`pill-tab`** — Product selector tab
- Fully-rounded (`{rounded.full}`) tab in a horizontal selector row; selected state gets a `{colors.silver}` (2px) border, label in `{typography.ui}`, `{colors.stone}` text on cream. Used for the "Everyday health sensing" category switcher.

**`eyebrow-label`** — Section overline
- Uppercase `{typography.eyebrow}` label in `{colors.ink}` on cream, no background, marking section context ("ACTIVITY & MOVEMENT", "FROM THE PULSE BLOG", "FEATURED ARTICLE" as a small pill on imagery).

**`footer`** — Site footer
- Near-black surface (`{colors.ink-band-soft}`), `{colors.on-dark}` text and `{colors.mute}` secondary text, `{typography.body-sm}`. Contains the OURA wordmark, a newsletter `text-input`, payment-method icons, a 4-column link grid, and a language pill.

### Examples (illustrative)

> Auto-derived kit-mirror demonstration surfaces (`scripts/derive-examples-block.mjs`). Each `ex-*` entry references brand-native primitives so downstream consumers (`/preview-design`, `/generate-kit`) re-skin the same 10 surfaces consistently.

**`ex-pricing-tier`** — Default Pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface.
- Properties: `backgroundColor`, `textColor`, `borderColor`, `rounded`, `padding`

**`ex-pricing-tier-featured`** — Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode).
- Properties: `backgroundColor`, `textColor`, `rounded`, `padding`

**`ex-product-selector`** — Color/size picker chrome — fashion / DTC variant selector.
- Properties: `backgroundColor`, `rounded`, `padding`

**`ex-cart-drawer`** — Shopping cart drawer — DTC / fashion brand actual cart chrome.
- Properties: `backgroundColor`, `rounded`, `padding`, `item-divider`

**`ex-app-shell-row`** — Sidebar nav row inside the App Shell example. Active state uses brand primary as the indicator.
- Properties: `backgroundColor`, `activeIndicator`, `rounded`, `padding`

**`ex-data-table-cell`** — Default data-table th + td chrome. Header uses mono-caps eyebrow typography; body uses body-sm.
- Properties: `headerBackground`, `headerTypography`, `bodyTypography`, `cellPadding`, `rowBorder`

**`ex-auth-form-card`** — Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside.
- Properties: `backgroundColor`, `rounded`, `padding`

**`ex-modal-card`** — Modal dialog surface — same chrome as feature-card with elevated shadow.
- Properties: `backgroundColor`, `rounded`, `padding`

**`ex-empty-state-card`** — Empty-state illustration frame.
- Properties: `backgroundColor`, `rounded`, `padding`, `captionTypography`

**`ex-toast`** — Toast notification surface — feature-card shape + medium shadow.
- Properties: `backgroundColor`, `rounded`, `padding`, `typography`


## Do's and Don'ts

### Do
- Reserve `{colors.primary}` strictly for the primary conversion CTA — one blue moment per view, maximum.
- Default every surface to `{colors.canvas}` (warm paper), not white. White (`{colors.surface}`) is for elevated cards and inputs, not backgrounds.
- Use `{colors.stone}` for the wordmark, secondary pills, outlines, form fills, and links — it is the workhorse neutral.
- Pair `{typography.display}` (thin serif) at large sizes with `{typography.body}` (grotesque) for reading; let scale create hierarchy.
- Keep pills fully rounded (`{rounded.full}`) and cards softly rounded (`{rounded.lg}`); use `{rounded.xl}` only for large product imagery.
- Let the earth-tone ramps (gold, clay, olive) live in bands, illustration, and data-viz — as color-blocked sections that pace the scroll.
- Give sections large vertical breathing room; treat empty cream as structure.

### Don't
- Don't use `{colors.primary}` for links, accents, icons, or decorative fills — it must stay unique to the primary CTA.
- Don't put the mustard/olive accent colors on buttons — they are surfaces and illustration, never actions.
- Don't set body copy in `{typography.display}`; the thin serif is display-only and gets illegible at small sizes.
- Don't default backgrounds to white — it breaks the warm-paper identity.
- Don't add heavy or hard-edged shadows; elevation here is soft, warm, and low-opacity.
- Don't crowd sections — compressing the vertical rhythm collapses the calm, editorial pacing that defines the brand.
