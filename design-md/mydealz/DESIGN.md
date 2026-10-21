---
version: alpha
name: mydealz Analysis
description: An analysis of mydealz's design language — a high-density German deals-community system built on a confident brand green, where a stacked white-card feed carries thousands of deals and every card wears the signature hot/cold temperature control that turns pricing into a crowd vote. Fully-round 540px pill buttons, Averta CY at two weights, cool-gray page canvas, and a compact red/blue/orange status vocabulary keep the information-dense feed scannable and playful at once.

colors:
  primary: "#30a83c"
  on-primary: "#ffffff"
  green-strong: "#197e25"
  discount-surface: "#defde4"
  hot: "#ce1736"
  cold: "#034eb1"
  warm: "#fb6001"
  premium: "#7457dd"
  canvas: "#f3f5f7"
  surface: "#ffffff"
  ink: "#000000"
  body: "#6b6d70"
  muted: "#a7a9ac"
  hairline: "#dfe1e4"
  warning-surface: "#faf9ca"
  warning-text: "#9f5c0c"

typography:
  display:
    fontFamily: Averta CY
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: 0
  heading-lg:
    fontFamily: Averta CY
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  heading:
    fontFamily: Averta CY
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  lead:
    fontFamily: Averta CY
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  body:
    fontFamily: Averta CY
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  ui:
    fontFamily: Averta CY
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0
  caption:
    fontFamily: Averta CY
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0
  micro:
    fontFamily: Averta CY
    fontSize: 10px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  mono:
    fontFamily: monospace
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  xs: 2px
  sm: 4px
  md: 8px
  full: 540px
  circle: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 40px

components:
  nav-bar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    borderColor: "{colors.hairline}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.ui}"
    rounded: "{rounded.full}"
    padding: "0px 14px"
  button-outline-green:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.ui}"
    rounded: "{rounded.full}"
    padding: "0px 14px"
    borderColor: "{colors.primary}"
  button-outline-neutral:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.full}"
    padding: "0px 12px"
    borderColor: "{colors.hairline}"
  button-muted:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body}"
    typography: "{typography.ui}"
    rounded: "{rounded.full}"
    padding: "0px 14px"
    borderColor: "{colors.hairline}"
  button-tag:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "0px 4px"
  search-pill:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body}"
    typography: "{typography.body}"
    rounded: "{rounded.full}"
    borderColor: "{colors.hairline}"
  deal-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "16px"
  temperature-control:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.hot}"
    typography: "{typography.ui}"
    rounded: "{rounded.full}"
    borderColor: "{colors.hairline}"
  temperature-up:
    textColor: "{colors.hot}"
    typography: "{typography.ui}"
  temperature-down:
    textColor: "{colors.cold}"
    typography: "{typography.ui}"
  price-lockup:
    textColor: "{colors.primary}"
    typography: "{typography.heading-lg}"
  discount-badge:
    backgroundColor: "{colors.discount-surface}"
    textColor: "{colors.green-strong}"
    typography: "{typography.ui}"
    rounded: "{rounded.sm}"
    padding: "4px 8px"
  badge-neutral-subtle:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "0px 4px"
  badge-filled:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "4px 8px"
    borderColor: "{colors.surface}"
  premium-badge:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.premium}"
    typography: "{typography.ui}"
    rounded: "{rounded.sm}"
  warning-badge:
    backgroundColor: "{colors.warning-surface}"
    textColor: "{colors.warning-text}"
    typography: "{typography.ui}"
    rounded: "{rounded.sm}"
    padding: "4px 8px"
  text-input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.full}"
    padding: "9px 35px"
  email-input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "9px 16px"
  timestamp-pill:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.caption}"
    rounded: "{rounded.md}"
  sidebar-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "16px"
  avatar:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.circle}"
    borderColor: "{colors.surface}"
  country-selector:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    borderColor: "{colors.hairline}"
  footer:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body}"
    borderColor: "{colors.hairline}"

  # ─── Examples (illustrative) — kit-mirror surfaces ───
  ex-pricing-tier:
    description: "Default Pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface."
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  ex-pricing-tier-featured:
    description: "Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode)."
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  ex-product-selector:
    description: "What's Included summary card — re-purposed for SaaS / B2B verticals (NOT a literal product gallery)."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    description: "Subscription summary — re-purposed for SaaS / B2B (line items per add-on, not literal cart)."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
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
    headerTypography: "{typography.caption}"
    bodyTypography: "{typography.body}"
    cellPadding: "{spacing.sm} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: "Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  ex-modal-card:
    description: "Modal dialog surface — same chrome as feature-card with elevated shadow."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  ex-empty-state-card:
    description: "Empty-state illustration frame."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
    captionTypography: "{typography.body}"
  ex-toast:
    description: "Toast notification surface — feature-card shape + medium shadow."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body}"

---


## Overview

mydealz is a deals-community feed running at maximum density: a single cool-gray canvas (`{colors.canvas}`) stacked with hundreds of white deal cards (`{colors.surface}`), each one a compact bundle of thumbnail, title, price, and social signals. The design's whole job is to make that firehose scannable, and it does it with one confident brand green (`{colors.primary}`) — the color of every price, every "Zum Deal" pill, every submit action — plus a tight status vocabulary that keeps the eye moving.

The signature move is the **temperature control**: every deal carries a pill showing a cold-blue down-arrow (`{colors.cold}`), the deal's crowd-voted temperature in hot-red (`{colors.hot}`), and a hot-red up-arrow — pricing turned into a live vote. That red/blue pairing, extended by a warm orange (`{colors.warm}`) for rising deals and a premium violet (`{colors.premium}`) for highlighted content, is the brand's playful counterweight to an otherwise businesslike grid. Discount percentages sit in soft mint pills (`{colors.discount-surface}`), so a card reads at a glance: green price, red-hot temperature, mint saving.

Geometrically the system is defined by the **fully-round 540px pill** — buttons, the search field, the temperature control, filter chips all curve to a complete radius, while content cards settle at a friendly 8px. Averta CY carries everything at just two weights (medium 500, bold 700), keeping headlines punchy and the dense body legible. Depth is minimal: cards separate with a hairline (`{colors.hairline}`) and lift on the softest shadow only when they matter.

**Key Characteristics:**
- One brand green (`{colors.primary}`) owns every action and every price — the single unifying signal across a chaotic feed
- Signature hot/cold **temperature control**: `{colors.cold}` down-vote, `{colors.hot}` up-vote and temperature reading, on every deal card
- Fully-round `{rounded.full}` (540px) pills for buttons, search, chips, and the temperature control; 8px cards
- Mint discount pills (`{colors.discount-surface}`) pairing green savings against the red-hot temperature
- Averta CY at two weights (500/700) driving a punchy, high-density type system
- Cool-gray canvas (`{colors.canvas}`) behind stacked white cards (`{colors.surface}`) — a scannable card feed, not a marketing page
- A compact accent set — `{colors.warm}` orange for rising, `{colors.premium}` violet for highlighted — kept strictly functional

## Colors

### Brand & Accent
- **Deal Green** (`{colors.primary}` — #30a83c): The brand's core. Fills every primary CTA pill, every deal price, submit actions, active links, and highlighted stats. On-color content is `{colors.on-primary}`.
- **Strong Green** (`{colors.green-strong}`): A darker green for green text on light surfaces (discount-badge label, outline-button glyphs) where the fill green would be too light.
- **Hot Red** (`{colors.hot}`): The temperature "hot" signal — the deal's degree reading and the up-vote arrow. The brand's excitement color.
- **Cold Blue** (`{colors.cold}`): The temperature "cold" signal — the down-vote arrow. Always paired against `{colors.hot}` in the temperature control.
- **Rising Orange** (`{colors.warm}`): A warm accent for rising/trending deals, sitting between cold and hot on the temperature spectrum.
- **Premium Violet** (`{colors.premium}`): Highlight accent for premium / featured content markers.
- **Discount Mint** (`{colors.discount-surface}`): The soft green pill behind a saving percentage.

### Surface
- **Canvas** (`{colors.canvas}`): The cool light-gray page ground that stacked white cards sit on.
- **Surface** (`{colors.surface}`): Pure white — every card, the nav, the footer, buttons.
- **Hairline** (`{colors.hairline}`): The 1px border on cards, buttons, and dividers.

### Text
- **Ink** (`{colors.ink}`): True black for deal titles, headings, and primary text.
- **Body** (`{colors.body}`): Mid gray for secondary copy, metadata, muted button labels.
- **Muted** (`{colors.muted}`): Light gray for the quietest captions and placeholder text.

### Semantic
- **Warning Surface / Text** (`{colors.warning-surface}` / `{colors.warning-text}`): The soft-yellow pill and amber-brown text used for expiring / caution deal states.

## Typography

### Font Family

**Averta CY** — a humanist geometric sans — carries the entire system at two weights: medium (500) for body and lead copy, bold (700) for headings, UI labels, prices, and micro-labels. A **monospace** face appears in rare technical contexts (voucher codes). There is no light or black weight; the two-weight discipline keeps the dense feed consistent.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display}` | 48px | 700 | 1.1 | 0 | Page hero headline |
| `{typography.heading-lg}` | 24px | 700 | 1.2 | 0 | Section titles, deal price |
| `{typography.heading}` | 20px | 700 | 1.25 | 0 | Card / block headings |
| `{typography.lead}` | 18px | 500 | 1.4 | 0 | Lead paragraphs, prominent links |
| `{typography.body}` | 16px | 500 | 1.5 | 0 | Body copy, deal descriptions |
| `{typography.ui}` | 14px | 700 | 1.3 | 0 | Button labels, temperature, badges |
| `{typography.caption}` | 12px | 500 | 1.3 | 0 | Metadata, timestamps |
| `{typography.micro}` | 10px | 700 | 1.2 | 0 | Micro-labels, counts |
| `{typography.mono}` | 16px | 500 | 1.4 | 0 | Voucher codes |

### Principles
- Two weights only — 500 for reading, 700 for everything that signals or acts.
- Prices and temperatures are always bold; they're the two numbers that matter most on a card.
- The dense feed leans on size and weight, never on color, for text hierarchy (color is reserved for status).

### Note on Font Substitutes
Averta CY is a commercial face. For open-source builds, **Mulish** or **Nunito Sans** (500/700) reproduce the humanist-geometric warmth with near-identical metrics; keep the two-weight split. Any system monospace substitutes for the voucher-code face.

## Layout

### Spacing System
- **Base unit**: 8px
- **Tokens (front matter)**: `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 24px · `{spacing.xxl}` 40px
- Cards pad `{spacing.lg}`; card rows stack with `{spacing.sm}`–`{spacing.md}` gaps for maximum density.

### Grid & Container
A two-column shell above ~768px: the main deal feed (single stacked column of full-width cards) plus a right sidebar of coupon, news, and discussion cards. Below the breakpoint the sidebar drops and the feed goes full-width. The container is wide and content-dense rather than a narrow reading column.

### Whitespace Philosophy
Whitespace is rationed — this is an information product, not a marketing page. Cards sit close together with tight internal padding; the cool-gray canvas gutters between white cards do the separating work, and the hairline borders keep each card crisp against its neighbors.

### Responsive Strategy

#### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Single-column feed; sidebar drops; nav collapses to the "Menü" pill; temperature control and CTA stack under the card body |
| Desktop | ≥ 768px | Feed + right sidebar two-column shell; full nav row with search pill and category strip |

#### Touch Targets
Pill buttons (`{components.button-primary}`) and the temperature control clear a comfortable tap height; vote arrows, comment, share, and bookmark icons carry generous hit areas on the card foot.

#### Collapsing Strategy
The category strip and right sidebar collapse first; the nav condenses to the "Menü" pill + search + submit; deal cards reflow from a media-left row into a stacked thumbnail-over-body layout on narrow screens.

#### Image Behavior
Deal thumbnails are contained in `{rounded.md}` frames on the card's media side, never full-bleed; avatars are perfect circles (`{rounded.circle}`). Merchant logos and app-store badges render inline at fixed heights.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat on `{colors.canvas}` | Page ground, footer |
| 1 | 1px `{colors.hairline}` border | Deal cards, sidebar cards, buttons, inputs |
| 2 | Soft shadow `rgba(11,22,44,0.09) 0 4px 12px` | Elevated / hovered cards, dropdowns |
| 3 | Deeper drop `rgba(0,0,0,0.38) -1px 11px 15px -11px` | Overlays, sticky bars |

Depth is hairline-first. Cards separate by border and canvas gutter; the soft 4–12px shadow is reserved for elements that lift (menus, sticky bars, elevated cards). There are no heavy shadow stacks in the resting feed.

### Decorative Depth
The brand's playfulness lives in illustration, not gradients — a green cartoon frog mascot and companion characters appear in the consent and empty-state surfaces. The palette itself is flat; there are no brand gradients.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 2px | Tightest inline chips |
| `{rounded.sm}` | 4px | Discount / filled badges, small tags |
| `{rounded.md}` | 8px | Deal cards, sidebar cards, thumbnails, tag buttons |
| `{rounded.full}` | 540px | Buttons, search pill, temperature control, filter chips — the pill signature |
| `{rounded.circle}` | 9999px | Avatars, icon buttons |

### Photography Geometry
Deal thumbnails sit in `{rounded.md}` frames on the card's media column; author and community avatars are circles (`{rounded.circle}`). There is no hero photography — the product IS the card grid.

## Components

### Buttons

**`button-primary`** — the green action ("Zum Deal", "Deal-Alarm anlegen", "Hinzufügen")
- Fill `{colors.primary}`, label `{colors.on-primary}` in `{typography.ui}`, shape `{rounded.full}`, padding `0px 14px`, often with a trailing external-link or plus glyph

**`button-outline-green`** — brand-tinted secondary ("+ Beitrag")
- `{colors.surface}` fill, `{colors.primary}` label + border, `{rounded.full}`, padding `0px 14px`

**`button-outline-neutral`** — quiet chrome ("Menü")
- `{colors.surface}` fill, `{colors.ink}` label, `{colors.hairline}` border, `{rounded.full}`, padding `0px 12px`

**`button-muted`** — de-emphasized action ("Ohne Zustimmung weiter")
- `{colors.surface}` fill, `{colors.body}` label, `{colors.hairline}` border, `{rounded.full}`

**`button-tag`** — compact utility control
- `{colors.surface}` fill, `{colors.ink}` label, `{rounded.md}`, tight `0px 4px` padding

### Cards & Containers

**`deal-card`** — the feed's atom
- `{colors.surface}` on `{colors.hairline}`, `{rounded.md}`, `{spacing.lg}` padding; media-left thumbnail, bold black title, a `price-lockup`, a `temperature-control`, merchant + author line, and a `button-primary` foot with comment/share/bookmark icons

**`sidebar-card`** — coupon / news / discussion tiles
- Same white-on-hairline `{rounded.md}` chrome as `deal-card`, in the right rail

**`timestamp-pill`** — "Gepostet vor …" marker
- `{colors.canvas}` fill, `{colors.body}` `{typography.caption}`, `{rounded.md}`, pinned top-right on a card

### Inputs & Forms

**`search-pill`** — the header search
- `{colors.surface}` pill at `{rounded.full}`, `{colors.hairline}` border, `{colors.body}` placeholder in `{typography.body}`, magnifier glyph left

**`text-input`**
- `{colors.surface}` field, `{colors.ink}` text, navy-translucent border, fully-round `{rounded.full}`, padding `9px 35px`

**`email-input`**
- `{colors.surface}` field at `{rounded.md}` (square-cornered against the pill search), padding `9px 16px`

### Navigation

**`nav-bar`**
- `{colors.surface}` bar with `{colors.hairline}` bottom rule: mydealz frog logo, `button-outline-neutral` "Menü", `search-pill`, "Deal-Alarm anlegen" and "Einloggen" text links, `button-outline-green` "+ Beitrag"; a category strip (Kategorien, Gutscheine, Freebies, Deals, Diskussionen, Club) sits below

**`footer`**
- `{colors.surface}` over a `{colors.hairline}` top rule; link columns (Firma, Community, Rechtliches) in `{colors.body}` with green links, social circle icons, app-store badges, and a `country-selector`

**`country-selector`**
- `{colors.surface}` `{rounded.md}` dropdown with flag + label, `{colors.hairline}` border

### Signature Components

**`temperature-control`** — the brand's defining component
- A fully-round `{rounded.full}` pill: `temperature-down` cold-blue (`{colors.cold}`) down-arrow, the deal's temperature reading in hot-red (`{colors.hot}`), and a `temperature-up` hot-red up-arrow — the crowd's price vote made visible

**`temperature-up`** / **`temperature-down`** — the vote arrows
- Up in `{colors.hot}`, down in `{colors.cold}`, both in `{typography.ui}`

**`price-lockup`** — the deal's number
- `{colors.primary}` green current price in `{typography.heading-lg}`, a struck-through `{colors.muted}` original, and a `discount-badge`

**`discount-badge`** — the saving
- `{colors.discount-surface}` mint pill with `{colors.green-strong}` label in `{typography.ui}`, `{rounded.sm}`, `4px 8px`

**`badge-neutral-subtle`** / **`badge-filled`** — status chips
- Subtle: white / black / `{rounded.md}`. Filled: `{colors.canvas}` fill, `{colors.body}` text, `{rounded.sm}` with a white hairline

**`premium-badge`** — highlighted-content marker
- `{colors.premium}` violet label on `{colors.surface}`, `{rounded.sm}`

**`warning-badge`** — expiring / caution state
- `{colors.warning-surface}` soft-yellow pill, `{colors.warning-text}` amber-brown label, `{rounded.sm}`

**`avatar`** — author / community
- Circle (`{rounded.circle}`) on `{colors.canvas}` with a white ring

### Examples (illustrative)

> Kit-mirror demonstration surfaces. These are not brand-native components — each `ex-*` entry references the brand primitives above so every example surface is shaped by this spec rather than template defaults.

**`ex-pricing-tier`** — Default Pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface.
- Properties: `backgroundColor`, `textColor`, `borderColor`, `rounded`, `padding`

**`ex-pricing-tier-featured`** — Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode).
- Properties: `backgroundColor`, `textColor`, `rounded`, `padding`

**`ex-product-selector`** — What's Included summary card — re-purposed for SaaS / B2B verticals (NOT a literal product gallery).
- Properties: `backgroundColor`, `rounded`, `padding`

**`ex-cart-drawer`** — Subscription summary — re-purposed for SaaS / B2B (line items per add-on, not literal cart).
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
- Reserve `{colors.primary}` green for actions and prices — it is the single thread tying the feed together.
- Keep the `temperature-control` pairing intact: `{colors.cold}` down, `{colors.hot}` up and temperature — it's the brand's signature.
- Pill every button, chip, search, and the temperature control to `{rounded.full}`; keep content cards at `{rounded.md}`.
- Put savings in the `{colors.discount-surface}` mint badge beside the green price.
- Hold typography to Averta CY 500 / 700; bold every price and temperature.
- Separate cards with `{colors.hairline}` borders and the `{colors.canvas}` gutter, not heavy shadows.

### Don't
- Don't recolor prices or primary actions away from `{colors.primary}` green.
- Don't split the temperature pairing or recolor the vote arrows — cold is blue, hot is red, always.
- Don't introduce shadows on resting feed cards; the soft 4–12px shadow is for elements that lift.
- Don't use a third or fourth type weight — the system is 500 and 700 only.
- Don't let `{colors.warm}` orange or `{colors.premium}` violet drift into decorative use; they are functional status colors.
- Don't square off the pills — the fully-round `{rounded.full}` button is the brand's shape signature.
