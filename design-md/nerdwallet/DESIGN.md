---
version: alpha
name: NerdWallet Analysis
description: An analysis of NerdWallet's design language — a personal-finance comparison platform built almost entirely from one deep green and a ladder of mints beneath it. Editorial pages open on a green gradient band, then drop to near-white where dense comparison tables do the real work. Corners are almost square, shadows are nearly absent, and the whole system separates content with hairlines and pale mint washes rather than elevation.

colors:
  primary: "#008254"
  primary-deep: "#006642"
  forest: "#00482f"
  on-primary: "#ffffff"
  lime-hero: "#9ae600"
  lime-panel: "#e8fdac"
  lime-accent: "#ddfa88"
  lime-ribbon: "#a8ea4c"
  logo-lime: "#8dc63f"
  canvas: "#ffffff"
  canvas-soft: "#f7f7f7"
  mint-50: "#effcf8"
  mint-100: "#e3faf2"
  mint-200: "#b7ecda"
  hairline: "#ebebec"
  hairline-strong: "#d8d9da"
  ink: "#000000"
  body: "#3d4045"
  muted: "#64666a"
  faint: "#b1b3b5"
  link: "#005fb9"
  info: "#4b99e6"
  error: "#de2828"

typography:
  display-xl:
    fontFamily: Gotham
    fontSize: 52px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: 0
  display-lg:
    fontFamily: GothamDisplay
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  heading-1:
    fontFamily: GothamDisplay
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  heading-2:
    fontFamily: Gotham
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  heading-3:
    fontFamily: GothamDisplay
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0
  heading-4:
    fontFamily: Gotham
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0
  stat-value:
    fontFamily: Gotham
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  body-lg:
    fontFamily: Gotham
    fontSize: 18px
    fontWeight: 300
    lineHeight: 1.5
    letterSpacing: 0
  body-md:
    fontFamily: Gotham
    fontSize: 16px
    fontWeight: 300
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: Gotham
    fontSize: 14px
    fontWeight: 300
    lineHeight: 1.5
    letterSpacing: 0
  ui-label:
    fontFamily: Gotham
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  ui-sm:
    fontFamily: Gotham
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0
  caption:
    fontFamily: Gotham
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  eyebrow:
    fontFamily: Gotham
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  micro:
    fontFamily: Gotham
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  none: 0px
  xxs: 1px
  xs: 2px
  sm: 4px
  md: 6px
  lg: 8px
  xl: 10px
  xxl: 12px
  xxxl: 16px
  tooltip: 20px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  section: 40px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.ui-label}"

  logo-wordmark:
    textColor: "{colors.primary}"
    typography: "{typography.heading-4}"

  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.ui-label}"
    rounded: "{rounded.xs}"
    padding: "{spacing.md}"

  button-secondary:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.primary}"
    typography: "{typography.ui-label}"
    rounded: "{rounded.xs}"
    padding: "{spacing.md}"

  button-outline:
    textColor: "{colors.primary}"
    typography: "{typography.ui-label}"
    rounded: "{rounded.lg}"
    padding: "8px 16px"
    borderColor: "{colors.hairline-strong}"

  text-input:
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"

  hero-band:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"

  breadcrumb:
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"

  editorial-badge:
    textColor: "{colors.lime-panel}"
    typography: "{typography.micro}"

  expert-tip-panel:
    backgroundColor: "{colors.lime-panel}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"

  stat-block-dark:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-primary}"
    typography: "{typography.stat-value}"
    rounded: "{rounded.lg}"

  stat-chip-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.lg}"

  product-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    borderColor: "{colors.hairline-strong}"

  category-tile:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xxl}"

  section-panel-mint:
    backgroundColor: "{colors.mint-50}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xxxl}"

  media-frame-mint:
    backgroundColor: "{colors.mint-100}"
    rounded: "{rounded.xxxl}"

  award-ribbon-pill:
    backgroundColor: "{colors.mint-100}"
    textColor: "{colors.primary}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.none}"

  icon-circle-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"

  icon-circle-inactive:
    backgroundColor: "{colors.mint-50}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"

  comparison-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"

  spec-cell:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.caption}"

  accordion-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.ui-label}"
    rounded: "{rounded.lg}"

  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-sm}"

  link-green:
    textColor: "{colors.primary}"
    typography: "{typography.body-sm}"

  eyebrow-label:
    textColor: "{colors.muted}"
    typography: "{typography.eyebrow}"

  footer:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"

  rate-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xxl}"

  badge-compare:
    backgroundColor: "{colors.lime-panel}"
    textColor: "{colors.primary}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.xl}"

  carousel-control:
    backgroundColor: "{colors.mint-50}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"

  marquee-ribbon:
    backgroundColor: "{colors.lime-ribbon}"
    textColor: "{colors.primary}"
    typography: "{typography.ui-label}"

  # ─── Examples (illustrative) ───
  ex-pricing-tier:
    description: "Default Pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface."
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: "Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode)."
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-product-selector:
    description: "What's Included summary card — re-purposed for SaaS / B2B verticals (NOT a literal product gallery)."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    description: "Subscription summary — re-purposed for SaaS / B2B (line items per add-on, not literal cart)."
    backgroundColor: "{colors.canvas}"
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
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.eyebrow}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.sm} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: "Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: "Modal dialog surface — same chrome as feature-card with elevated shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: "Empty-state illustration frame."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xxl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: "Toast notification surface — feature-card shape + medium shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.sm} {spacing.lg}"
    typography: "{typography.body-sm}"

---


## Overview

NerdWallet is a comparison engine wearing an editorial coat, and the design reflects both halves. Article pages open on a wide `{colors.primary}` gradient band carrying a white headline, a byline row and a set of trust badges — the only place the brand raises its voice. Everything below that band drops to `{colors.canvas}` and `{colors.canvas-soft}`, where dense rate tables and product cards do the actual work. The transition is abrupt by design: one saturated green rectangle, then a very long, very quiet document.

The palette is almost monochromatic in hue. `{colors.primary}` is a deep spruce green that fills every button, every active tab and every rating star, and beneath it sits a full ladder of mints — `{colors.mint-50}`, `{colors.mint-100}`, `{colors.mint-200}` — that wash section panels, icon tiles and photo frames. Those mints carry enormous surface area, far more than any accent, which is what keeps a page of financial tables from reading as a spreadsheet. The only colours outside the green family are `{colors.link}` for inline links and a lime family used for emphasis.

The shape language is the surprise. For a consumer product this heavily illustrated, the corners are nearly square: the primary button sits at `{rounded.xs}` — two pixels — and cards rarely exceed `{rounded.lg}`. There is essentially no elevation; the single shadow in the system is a very wide, very faint double-layer stack. Separation is done with `{colors.hairline}` rules and mint fills instead. The result reads as trustworthy and utilitarian rather than soft.

**Key Characteristics:**
- One deep green, `{colors.primary}`, fills every action and every active state across all page types.
- A three-step mint ladder (`{colors.mint-50}` → `{colors.mint-100}` → `{colors.mint-200}`) carries the largest surfaces in the system.
- Buttons are nearly square at `{rounded.xs}`; the shape language stays tight even where illustration is playful.
- Almost shadowless — `{colors.hairline}` rules and mint washes replace elevation.
- Editorial pages follow a fixed rhythm: green gradient band → white body → mint callout → white comparison table.
- A lime family (`{colors.lime-hero}`, `{colors.lime-panel}`, `{colors.lime-accent}`) supplies emphasis that green cannot, since green is spent on controls.
- Headings sit in pure `{colors.ink}` black, not a softened near-black.

## Colors

Source pages: the homepage, the high-yield savings comparison page, and the best-credit-cards page.

### Brand & Accent

- **Spruce** (`{colors.primary}` — #008254): the brand. It fills `{button-primary}`, `{icon-circle-active}`, rating stars and every in-body green link, and it is the base of the editorial hero gradient. By pixel volume it is the single most-used non-neutral in the system.
- **Deep Spruce** (`{colors.primary-deep}` — #006642): the fill of `{stat-block-dark}`, the dark statistic panel that sits inside the mint expert-tip callout.
- **Forest** (`{colors.forest}` — #00482f): the deepest green, used where the hero gradient lands darkest and on dense editorial chrome.
- **Logo Lime** (`{colors.logo-lime}` — #8dc63f): the lime inside the wordmark's leading mark. It appears at small scale on every page and nowhere else.
- **Hero Lime** (`{colors.lime-hero}` — #9ae600): the vivid lime that sets the brand name inside the homepage hero headline — one word, once per page.
- **Panel Lime** (`{colors.lime-panel}` — #e8fdac): the fill of `{expert-tip-panel}` and the colour of `{editorial-badge}` text on the green band.
- **Accent Lime** (`{colors.lime-accent}` — #ddfa88): a brighter lime used for highlight marks on the comparison pages.
- **Ribbon Lime** (`{colors.lime-ribbon}` — #a8ea4c): the lime end of the `{marquee-ribbon}` gradient — the only place the lime family covers a large surface.

### Surface

- **Canvas** (`{colors.canvas}` — #ffffff): the page, the nav bar and every card.
- **Soft Canvas** (`{colors.canvas-soft}` — #f7f7f7): the page tint behind long comparison pages and the fill of `{button-secondary}`. It carries more area than any other surface on the savings page.
- **Mint 50** (`{colors.mint-50}` — #effcf8): the palest wash, used for `{section-panel-mint}` and `{icon-circle-inactive}`.
- **Mint 100** (`{colors.mint-100}` — #e3faf2): one step up, used for `{media-frame-mint}` and `{award-ribbon-pill}`.
- **Mint 200** (`{colors.mint-200}` — #b7ecda): the most saturated mint, reserved for small emphasis fills.
- **Hairline** (`{colors.hairline}` — #ebebec): rules between table rows and inside cards.
- **Strong Hairline** (`{colors.hairline-strong}` — #d8d9da): the visible border on `{product-card}` and `{button-outline}`.

### Text

- **Ink** (`{colors.ink}` — #000000): every heading and product name. Pure black, not softened.
- **Body** (`{colors.body}` — #3d4045): running copy and `{spec-cell}` labels.
- **Muted** (`{colors.muted}` — #64666a): captions, disclosure lines and `{eyebrow-label}`.
- **Faint** (`{colors.faint}` — #b1b3b5): the quietest tier, used for de-emphasised metadata.

### Semantic

- **Link** (`{colors.link}` — #005fb9): inline links inside tables and cards, always underlined.
- **Info** (`{colors.info}` — #4b99e6): a lighter blue used for supporting informational marks.
- **Error** (`{colors.error}` — #de2828): the system's validation and destructive red, reserved for form errors and removal actions.

## Typography

### Font Family

**Gotham** and **GothamDisplay** carry the entire system. Gotham handles body copy, UI labels, captions and the largest homepage headline; GothamDisplay — the tighter-fitting display cut — takes most editorial headings between 14 and 40px. The pairing is unusual in that the display cut is used at *smaller* sizes than the text cut's maximum, so the two overlap through the middle of the scale rather than splitting cleanly at a size boundary.

The weight range is wide and genuinely used: 300 for body copy, 500 and 600 for interface text, 700 for headings and labels, and 900 available at the top. Body copy at weight 300 against 700 headings is what gives the long editorial pages their airy feel despite very tight corner radii. A serif, **Chronicle Display**, appears on the long-form editorial pages as a secondary face.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 52px | 700 | 1.15 | 0 | Homepage hero headline |
| `{typography.display-lg}` | 40px | 700 | 1.2 | 0 | Editorial page headline |
| `{typography.heading-1}` | 36px | 700 | 1.2 | 0 | Section headline |
| `{typography.heading-2}` | 28px | 700 | 1.25 | 0 | Sub-section headline |
| `{typography.stat-value}` | 24px | 700 | 1.2 | 0 | Statistic figure |
| `{typography.heading-3}` | 20px | 700 | 1.3 | 0 | Card title |
| `{typography.heading-4}` | 20px | 500 | 1.3 | 0 | Light sub-heading |
| `{typography.body-lg}` | 18px | 300 | 1.5 | 0 | Lead paragraph |
| `{typography.body-md}` | 16px | 300 | 1.5 | 0 | Body copy |
| `{typography.body-sm}` | 14px | 300 | 1.5 | 0 | Table copy, captions |
| `{typography.ui-label}` | 14px | 700 | 1.2 | 0 | Button and nav labels |
| `{typography.ui-sm}` | 13px | 500 | 1.3 | 0 | Dense interface text |
| `{typography.caption}` | 12px | 500 | 1.4 | 0 | Field labels, disclosures |
| `{typography.eyebrow}` | 12px | 700 | 1.2 | 0 | Uppercase section labels |
| `{typography.micro}` | 11px | 500 | 1.4 | 0 | Trust badges, fine print |

### Principles

Hierarchy is carried by weight contrast more than by size. The gap between weight-300 body and weight-700 headings is wide enough that adjacent sizes (20px heading against 18px lead) still read as distinct levels. Uppercase is reserved for two roles — `{typography.eyebrow}` section labels and button text — and never used for headings.

### Note on Font Substitutes

Gotham and GothamDisplay are licensed faces. **Montserrat** is the closest widely-available geometric substitute for Gotham, though it runs slightly wider and needs a small negative tracking at display sizes; **Proxima Nova** or **Jost** are nearer in proportion if available. Keep the 300 weight for body copy — dropping to 400 collapses the weight contrast the hierarchy depends on. Substitute the editorial serif with **Playfair Display** or **Source Serif 4**.

## Layout

### Spacing System

- **Base unit**: 8px.
- **Tokens**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 20px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px · `{spacing.section}` 40px.
- `{spacing.md}` is the universal control padding — both `{button-primary}` and `{button-secondary}` use a flat 16px on all sides, which is what gives the buttons their square, chunky proportion.
- `{button-outline}` breaks that pattern with `8px 16px`, making it visibly shorter than the filled buttons beside it.

### Grid & Container

Content centres in a container of roughly 1200px inside the 1280px viewport. The homepage runs a 5-up category tile grid that steps down to 4-up and 2-up. Editorial pages use a single wide column for the hero band and then a full-width comparison table with five semantic columns — institution, rating, headline rate, bonus, and action. Product cards on the credit-cards page are full-width blocks stacked vertically, each subdivided into a spec grid of three to four cells.

### Whitespace Philosophy

Whitespace is tight inside components and generous between them. Table rows sit close together with only a hairline separating them, but the gap between one comparison block and the next is large. The mint panels act as breathing room that still carries content — rather than leaving empty space, the system drops in a pale `{colors.mint-50}` band and lets the density fall instead.

### Responsive Strategy

#### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small mobile | < 425px | Single column; comparison tables become stacked cards; nav reduces to logo plus menu |
| Mobile | 425–599px | Single column; spec grids collapse to one-per-row |
| Large mobile | 600–767px | Two-up category tiles; table columns begin to drop |
| Tablet | 768–1023px | Category rail scrolls horizontally; product cards keep their action column |
| Laptop | 1024–1279px | Full table layout with tightened gutters |
| Desktop | ≥ 1280px | Full layout at container width |

#### Touch Targets

`{button-primary}` and `{button-secondary}` clear 44×44 comfortably at their flat `{spacing.md}` padding. `{button-outline}` at `8px 16px` sits close to the minimum and needs its hit area extended on touch widths. `{icon-circle-active}` and `{icon-circle-inactive}` render near 44px in the category rail.

#### Collapsing Strategy

The nav keeps the wordmark, search and both account controls as long as possible, dropping the category links first. The horizontal category rail on comparison pages becomes a scrolling strip rather than wrapping. Comparison tables are the main responsive event: below the tablet breakpoint each row reflows into a stacked card where the institution logo, rating and rate become vertical fields and the action button goes full-width. `{expert-tip-panel}` keeps its mint fill but drops `{stat-block-dark}` beneath the copy instead of beside it.

#### Image Behavior

Institution logos are supplied as fixed-height greyscale-friendly marks and never crop. Editorial illustration sits inside `{media-frame-mint}` at `{rounded.xxxl}`. Product art — credit-card faces — renders at a fixed small aspect inside `{product-card}` and is never full-bleed. Author avatars are circular at `{rounded.full}` in a small overlapping stack.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat on `{colors.canvas}` | Body copy, table rows, headings |
| 1 | 1px `{colors.hairline}` rule | Row dividers, spec-cell separators |
| 2 | 1px `{colors.hairline-strong}` border | `{product-card}`, `{button-outline}`, `{accordion-row}` |
| 3 | `rgba(100,102,106,0.05) 0 4px 16px` plus `rgba(100,102,104,0.05) 0 16px 40px` | `{button-primary}` and the few floating surfaces |
| 4 | `oklab(0 0 0 / 0.04) 0 20px 25px -5px` plus `0 8px 10px -6px` | Overlay surfaces |

The system is deliberately flat. Both shadow definitions sit at 4–5% opacity and spread very wide, so they register as a faint settling rather than a lift. On a page of financial data this reads as precision: nothing floats, everything is ruled.

### Decorative Depth

Depth comes from colour blocking and illustration, not from shadow. The green hero band is the only saturated plane; beneath it the mint ladder creates shallow steps between sections. Illustration is flat-vector — coin stacks, piggy banks, houses — sitting directly on white or mint with no drop shadow. The one genuinely dimensional element is the arrow motif inside `{stat-block-dark}`, which reads as a chart line breaking out of its container.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | `{text-input}`, `{award-ribbon-pill}`, table edges |
| `{rounded.xxs}` | 1px | Inline marks |
| `{rounded.xs}` | 2px | `{button-primary}`, `{button-secondary}`, search field |
| `{rounded.sm}` | 4px | Small containers and inline blocks |
| `{rounded.md}` | 6px | App-store badges |
| `{rounded.lg}` | 8px | `{product-card}`, `{button-outline}`, `{accordion-row}`, `{expert-tip-panel}`, `{stat-block-dark}` |
| `{rounded.xl}` | 10px | Labels and small spans |
| `{rounded.xxl}` | 12px | `{category-tile}` |
| `{rounded.xxxl}` | 16px | `{section-panel-mint}`, `{media-frame-mint}` |
| `{rounded.tooltip}` | 20px | Tooltip surfaces |
| `{rounded.full}` | 9999px | Avatars, `{icon-circle-active}`, `{icon-circle-inactive}` |

The scale is broad but the weight of usage sits at the small end. Controls live at `{rounded.xs}`, cards at `{rounded.lg}`, and only decorative surfaces — mint panels and photo frames — reach `{rounded.xxxl}`. Several components use asymmetric radii, rounding only their top or leading corners where they butt against an adjacent block.

### Photography Geometry

Editorial photography sits inside `{media-frame-mint}` at `{rounded.xxxl}`, typically at a portrait or square crop. Author avatars are `{rounded.full}` at roughly 32px, overlapped in threes. Institution logos are placed on white at their native aspect with generous padding so competing brand marks never touch. Illustration is used at roughly 64px square inside `{category-tile}`.

## Components

> Every spec below documents Default and, where extracted, Active states only.

### Buttons

**`button-primary`** — the green action ("SIGN UP", "APPLY NOW", "LEARN MORE")
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.ui-label}`, rounded `{rounded.xs}`, padding `{spacing.md}`, Elevation Level 3.
- Uppercase label. The flat 16px padding on all four sides is what gives it its blocky proportion, and the 2px radius keeps it reading as a rectangle rather than a pill.

**`button-secondary`** — the quiet companion ("SIGN IN")
- Background `{colors.canvas-soft}`, text `{colors.primary}`, type `{typography.ui-label}`, rounded `{rounded.xs}`, padding `{spacing.md}`.
- Same geometry as `{button-primary}` with the fill and text roles swapped, so the pair reads as one control with two weights.

**`button-outline`** — the compact utility control
- Text `{colors.primary}`, type `{typography.ui-label}`, rounded `{rounded.lg}`, padding `8px 16px`, 1px `{colors.hairline-strong}` border, no fill.
- The only button that departs from both the square radius and the flat padding — noticeably shorter and softer than the filled pair.

### Cards & Containers

**`product-card`**
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-md}`, rounded `{rounded.lg}`, 1px `{colors.hairline-strong}` border, Elevation Level 2.
- The workhorse of the comparison pages: product name, star rating, a `{button-primary}` action column on the right, then a spec grid of `{spec-cell}` blocks and a stack of `{accordion-row}` disclosures.

**`category-tile`**
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-sm}`, rounded `{rounded.xxl}`.
- Flat illustration on top, bold title, two lines of `{colors.muted}` description, with a small diagonal arrow pinned to the upper-right corner.

**`section-panel-mint`**
- Background `{colors.mint-50}`, text `{colors.ink}`, rounded `{rounded.xxxl}`.
- The pale wash that holds the homepage category grid, providing separation without a border or shadow.

**`media-frame-mint`**
- Background `{colors.mint-100}`, rounded `{rounded.xxxl}`. Holds editorial photography with the mint visible as a border-like margin around the image.

**`expert-tip-panel`**
- Background `{colors.lime-panel}`, text `{colors.ink}`, type `{typography.body-md}`, rounded `{rounded.lg}`.
- A signature editorial component: a wide pale-lime band opened by a bold arrow-prefixed label, carrying advisory copy and hosting `{stat-block-dark}` and `{stat-chip-light}` inside it.

**`stat-block-dark`**
- Background `{colors.primary-deep}`, text `{colors.on-primary}`, type `{typography.stat-value}`, rounded `{rounded.lg}`.
- Sits inside `{expert-tip-panel}`, stacking a multiplier and a rate with small `{typography.caption}` labels beneath each, over an outline arrow motif.

**`stat-chip-light`**
- Background `{colors.canvas}`, label `{colors.muted}` at `{typography.caption}`, rounded `{rounded.lg}`.
- The white counterpart that carries the comparison figure beside `{stat-block-dark}`.

**`accordion-row`**
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.ui-label}`, rounded `{rounded.lg}`.
- A leading glyph, a label and a trailing chevron, separated from its neighbours by a `{colors.hairline}` rule.

### Inputs & Forms

**`text-input`**
- Text `{colors.ink}`, type `{typography.body-md}`, rounded `{rounded.none}`.
- Square-cornered. The system gives inputs no fill and no border of their own — they sit inside a bordered container that supplies the chrome, which is why the input itself carries almost no styling.

### Navigation

**`nav-bar`** (Desktop)
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.ui-label}`.
- Wordmark left, eight category links centre, then search, `{button-secondary}` and `{button-primary}` right. White on every page regardless of the band beneath it.

**`nav-bar`** (Mobile)
- Retains wordmark, search and both account controls; category links move behind a menu.

**`icon-circle-active`** / **`icon-circle-inactive`**
- Active fills `{colors.primary}` with an `{colors.on-primary}` glyph; inactive fills `{colors.mint-50}` with a `{colors.primary}` glyph. Both `{rounded.full}`.
- Form the horizontal category rail above comparison pages, each with a label beneath and an underline marking the active item.

**`breadcrumb`**
- Text `{colors.on-primary}` at `{typography.caption}`, set on the green hero band with chevron separators.

**`footer`**
- Background `{colors.canvas-soft}`, text `{colors.body}`, type `{typography.body-sm}`.

### Signature Components

**`hero-band`**
- Background `{colors.primary}` running as a horizontal gradient toward a lighter green, text `{colors.on-primary}`, type `{typography.body-md}`.
- Opens every editorial page. Carries `{breadcrumb}`, the `{typography.display-lg}` headline, a byline row with circular avatars, `{editorial-badge}` trust marks and a lead paragraph. Full-bleed, square-cornered, and the only saturated plane on the page.

**`editorial-badge`**
- Text `{colors.lime-panel}` at `{typography.micro}`, uppercase, with a leading verification glyph. Sits on the green band and is the reason a lime tier exists — green-on-green would vanish.

**`award-ribbon-pill`**
- Background `{colors.mint-100}`, text `{colors.primary}`, type `{typography.eyebrow}`, rounded `{rounded.none}`.
- A square-ended mint banner introduced by a folded green flag mark, pinned to the top-left of a winning `{product-card}`.

**`comparison-row`**
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-sm}`.
- Five columns — institution, rating, rate, bonus, action — separated from adjacent rows by a `{colors.hairline}` rule with no vertical dividers.

**`spec-cell`**
- Background `{colors.canvas}`, label `{colors.body}` at `{typography.caption}`, value `{colors.ink}`.
- The label-above-value block that tiles inside `{product-card}`, ruled on its leading edge by `{colors.hairline}`.

**`link-inline`** / **`link-green`**
- `{link-inline}` uses `{colors.link}` with an underline for supporting references; `{link-green}` uses `{colors.primary}` with a heavier underline for in-body navigation. The two coexist on the same card and carry different intent.

**`eyebrow-label`**
- Text `{colors.muted}` at `{typography.eyebrow}`, uppercase, opening partner and resource sections.

**`logo-wordmark`**
- Text `{colors.primary}` at `{typography.heading-4}`, preceded by a mark carrying `{colors.logo-lime}`.

**`rate-card`**
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-sm}`, rounded `{rounded.xxl}`.
- A clickable comparison tile inside the mint rates panel: product name, a `{colors.primary}` circular arrow pinned right, then two rate rows pairing a `{colors.muted}` label with a large `{colors.primary}` figure and a trend glyph.

**`badge-compare`**
- Background `{colors.lime-panel}`, text `{colors.primary}`, type `{typography.eyebrow}`, rounded `{rounded.xl}`.
- A pale-lime pill pinned to the top-left corner of the leading `{rate-card}`, marking the recommended comparison.

**`carousel-control`**
- Background `{colors.mint-50}`, glyph `{colors.primary}`, rounded `{rounded.full}`.
- Paired previous/next circles flanking a dot pagination strip whose active dot fills `{colors.primary}`.

**`marquee-ribbon`**
- Background `{colors.lime-ribbon}` running as a gradient into `{colors.primary}`, text `{colors.primary}`, type `{typography.ui-label}`.
- A full-bleed diagonal band of repeated uppercase slogans separated by small sparkle glyphs, tilted a few degrees off horizontal and bleeding past both viewport edges. It is the loudest element in the system and the only place the lime family fills a large surface.

### Examples (illustrative)

> Kit-mirror demonstration surfaces. These are not extracted from NerdWallet — they are the standard SaaS UI patterns re-skinned with NerdWallet's primitives, so every consumer of this document shapes the same ten surfaces against the brand rather than against a template default.

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

- Spend `{colors.primary}` on actions and active states only — buttons, rating stars, active tabs, in-body links.
- Reach for the mint ladder (`{colors.mint-50}` → `{colors.mint-200}`) when a section needs separation; it is the system's substitute for elevation.
- Keep controls at `{rounded.xs}` and cards at `{rounded.lg}`; save `{rounded.xxxl}` for decorative panels and photo frames.
- Separate table rows with a single `{colors.hairline}` rule and no vertical dividers.
- Use the lime family for emphasis that has to survive on a green ground, where `{colors.primary}` would disappear.
- Set headings in `{colors.ink}` pure black and body copy at weight 300 — the weight gap is the hierarchy.
- Give every comparison figure a `{typography.caption}` label above it in `{colors.body}`, never inline.
- Open editorial pages with `{hero-band}` and then drop immediately to a light canvas; do not carry the green further down.

### Don't

- Don't round the filled buttons. `{rounded.xs}` is a deliberate choice against the softness of the illustration style.
- Don't add drop shadows to cards — use the `{colors.hairline-strong}` border instead. The system's only shadows sit at 4–5% opacity.
- Don't use `{colors.link}` blue and `{colors.primary}` green interchangeably; blue is a supporting reference, green is navigation the reader is meant to follow.
- Don't extend `{hero-band}` green into body sections or use it as a card fill.
- Don't introduce a warm accent. The palette runs green through mint with blue as the only outside hue.
- Don't set body copy above weight 300 or headings below 700 — collapsing the gap flattens the hierarchy.
- Don't place `{colors.lime-panel}` on white as a text colour; the lime tier only works as a fill on white or as type on green.
- Don't give `{text-input}` a radius or a border of its own; the containing chrome supplies both.
