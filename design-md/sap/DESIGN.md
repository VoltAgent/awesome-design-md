---
version: alpha
name: SAP Analysis
description: An analysis of SAP's design language — an enterprise system that keeps almost everything on white and spends its structure on two greys and one blue. The chrome is deliberately quiet, a 60px light-grey bar over a product tab rail, so the page reads as an application frame rather than a marketing surface. Depth comes from broad flat bands rather than shadow, corners stay at 8px on controls and 12px on media, and the brand's own variable typeface carries a 350-to-700 weight range that lets a 15px list item and a 15px nav link read as different classes of text at the same size.

colors:
  primary: "#0057d2"
  primary-deep: "#0040b0"
  on-primary: "#ffffff"
  navy: "#022879"
  sky: "#6bc0ff"
  canvas: "#ffffff"
  chrome: "#f5f6f7"
  band: "#eaecee"
  band-blue: "#ebf8ff"
  band-lavender: "#f7f4ff"
  ink: "#000000"
  ink-lead: "#3c3c3c"
  ink-body: "#223548"
  ink-list: "#354a5f"
  ink-meta: "#475e75"
  ink-nav: "#545454"
  hairline: "#475e75"

typography:
  display:
    fontFamily: 72 Brand Variable
    fontSize: 57px
    fontWeight: 700
    lineHeight: 62.7px
    letterSpacing: 0
  hero-title:
    fontFamily: 72 Brand Variable
    fontSize: 36px
    fontWeight: 500
    lineHeight: 39.6px
    letterSpacing: 0
  section-title:
    fontFamily: 72 Brand Variable
    fontSize: 32px
    fontWeight: 500
    lineHeight: 35.2px
    letterSpacing: 0
  lead:
    fontFamily: 72 Brand Variable
    fontSize: 28px
    fontWeight: 400
    lineHeight: 30.8px
    letterSpacing: 0
  subhead:
    fontFamily: 72 Brand Variable
    fontSize: 20px
    fontWeight: 500
    lineHeight: 22px
    letterSpacing: 0
  body-lg:
    fontFamily: 72 Brand Variable
    fontSize: 20px
    fontWeight: 400
    lineHeight: 30px
    letterSpacing: 0
  body:
    fontFamily: 72 Brand Variable
    fontSize: 18px
    fontWeight: 400
    lineHeight: 27px
    letterSpacing: 0
  button:
    fontFamily: 72 Brand Variable
    fontSize: 16px
    fontWeight: 500
    lineHeight: 17.6px
    letterSpacing: 0
  link:
    fontFamily: 72 Brand Variable
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0
  nav-link:
    fontFamily: 72 Brand Variable
    fontSize: 15px
    fontWeight: 400
    lineHeight: 21px
    letterSpacing: 0
  list-item:
    fontFamily: 72 Brand Variable
    fontSize: 15px
    fontWeight: 350
    lineHeight: 21px
    letterSpacing: 0
  caption:
    fontFamily: 72 Brand Variable
    fontSize: 14px
    fontWeight: 400
    lineHeight: 21px
    letterSpacing: 0

rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px

spacing:
  xxs: 2px
  xs: 3px
  sm: 8px
  md: 9px
  lg: 10px
  xl: 12px
  xxl: 15px
  wide: 16px
  section: 20px
  giant: 24px
  max: 32px
  huge: 40px
  hero: 48px
  band: 56px
  page: 72px

components:
  nav-bar:
    backgroundColor: "{colors.chrome}"
    textColor: "{colors.ink-nav}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.none}"
    height: 60

  nav-link:
    backgroundColor: "{colors.chrome}"
    textColor: "{colors.ink-nav}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.none}"

  product-tab:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-nav}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    height: 32

  product-tab-active:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.subhead}"
    rounded: "{rounded.none}"
    height: 44

  breadcrumb:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-nav}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.none}"
    height: 17

  hero-band:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    height: 450

  hero-title:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-primary}"
    typography: "{typography.hero-title}"
    rounded: "{rounded.none}"
    height: 40

  hero-display:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display}"
    rounded: "{rounded.none}"
    height: 188

  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 14px
    height: 44

  button-outline:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary-deep}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 8px 9px

  button-floating:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.md}"
    padding: 16px 20px
    height: 58

  section-heading:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.section-title}"
    rounded: "{rounded.none}"
    height: 35

  lead-paragraph:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-lead}"
    typography: "{typography.lead}"
    rounded: "{rounded.none}"

  body-copy:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-body}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"

  feature-title:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.subhead}"
    rounded: "{rounded.none}"
    height: 22

  list-item:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-list}"
    typography: "{typography.list-item}"
    rounded: "{rounded.none}"
    height: 38

  meta-note:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-meta}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"

  text-link:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.link}"
    rounded: "{rounded.none}"

  media-frame:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.lg}"

  inline-anchor:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"

  band-neutral:
    backgroundColor: "{colors.chrome}"
    textColor: "{colors.ink-body}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"

  band-blue:
    backgroundColor: "{colors.band-blue}"
    textColor: "{colors.ink-body}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"

  band-lavender:
    backgroundColor: "{colors.band-lavender}"
    textColor: "{colors.ink-body}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"

  footer:
    backgroundColor: "{colors.band}"
    textColor: "{colors.ink-nav}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.none}"

  sky-panel:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"

  navy-hero:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"

  # ─── Examples (illustrative) ───
  ex-pricing-tier:
    description: "Tier card on the canvas ground with a hairline rule and an 8px corner."
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.giant}"
  ex-pricing-tier-featured:
    description: "Promoted tier, polarity-flipped onto the ink fill."
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.giant}"
  ex-product-selector:
    description: "What's-included summary card, since the brand sells enterprise software rather than configurable goods."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.giant}"
  ex-cart-drawer:
    description: "Subscription summary with hairline-ruled line items, echoing the services feature grid."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.giant}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: "Sidebar nav row; the active state is marked by the same blue the active product tab uses."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl} {spacing.wide}"
  ex-data-table-cell:
    description: "Table chrome with subhead headers over caption cells and hairline row rules."
    headerBackground: "{colors.canvas}"
    headerTypography: "{typography.caption}"
    bodyTypography: "{typography.body}"
    cellPadding: "{spacing.xl} {spacing.wide}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: "Sign-in card on the canvas ground with the brand's control chrome inside."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.giant}"
  ex-modal-card:
    description: "Modal dialog surface at the media frame's 12px corner."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.max}"
  ex-empty-state-card:
    description: "Empty-state frame on the canvas ground."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.huge}"
    captionTypography: "{typography.body}"
  ex-toast:
    description: "Toast surface close to the primary button's own proportions."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl} {spacing.wide}"
    typography: "{typography.body}"

---
## Overview

SAP's web surface is built like an application frame rather than a marketing site. A 60px bar in `{colors.chrome}` sits across the top, and on any product or services page a second rail drops beneath it carrying a breadcrumb and a row of tabs. That two-storey chrome is the first thing the design commits to: before a visitor reads a headline they have been told where they are in a very large catalogue, and the page below behaves like the content pane of that catalogue.

What fills the pane is mostly `{colors.canvas}`. White covers between 57 and 69 percent of every page, and the design separates content by dropping in **broad flat bands** rather than by bordering or elevating anything. There are four of them and each does a different job: `{colors.chrome}` for a neutral section, `{colors.band}` for the footer, `{colors.band-blue}` for a highlighted strip, and `{colors.band-lavender}` for a softer one. They run edge to edge with square corners, so the page reads as a stack of full-width horizontal zones.

Blue is the only colour that acts. `{colors.primary}` fills every button and every inline link; `{colors.primary-deep}` fills the solid hero band on interior pages and is also the label colour inside an outline button. The home page hero departs from both, running a deep navy gradient anchored on `{colors.navy}` behind a product lockup, which makes it the one surface on the site that is atmospheric rather than flat. Corners stay tight throughout: `{rounded.md}` on every control, `{rounded.lg}` on media, and nothing rounder anywhere.

**Key Characteristics:**
- A two-storey chrome — a `{colors.chrome}` global bar above a product tab rail — that frames the page like an application.
- White canvas broken by four full-width flat bands (`{colors.chrome}`, `{colors.band}`, `{colors.band-blue}`, `{colors.band-lavender}`) with square edges.
- One acting colour: `{colors.primary}` for controls and links, `{colors.primary-deep}` for the interior hero band.
- A five-tier text ladder (`{colors.ink}` → `{colors.ink-lead}` → `{colors.ink-body}` → `{colors.ink-list}` → `{colors.ink-meta}`) that shifts hue as it descends, from pure black through warm grey into slate.
- The brand's own variable typeface across a 350-to-700 weight range, so a 15px list item and a 15px nav link read as different classes at identical size.
- Depth carried by band and gradient rather than by shadow; controls sit flat on their ground.
- Corners capped at `{rounded.md}` for controls and `{rounded.lg}` for media — nothing on the site is a pill.

## Colors

### Brand & Accent
- **SAP Blue** (`{colors.primary}` — #0057d2): the acting colour. Every filled button, every inline text link, and the active product tab.
- **Deep Blue** (`{colors.primary-deep}` — #0040b0): the solid hero band on interior pages, and the label colour inside an outline button placed on white.
- **On Primary** (`{colors.on-primary}` — #ffffff): the label on every blue fill and all type inside the hero band.
- **Navy** (`{colors.navy}` — #022879): the anchor of the home page's hero gradient, the one atmospheric surface in the system.
- **Sky** (`{colors.sky}` — #6bc0ff): a light blue panel used inside the services layout.

### Surface
- **Canvas** (`{colors.canvas}` — #ffffff): the working ground. Content panes, cards and most sections sit on it unchanged.
- **Chrome** (`{colors.chrome}` — #f5f6f7): the global navigation bar, and the neutral band used to set a section apart.
- **Band** (`{colors.band}` — #eaecee): the footer ground, and the largest single non-white surface on the home page.
- **Band Blue** (`{colors.band-blue}` — #ebf8ff): a pale blue strip used to lift a section out of the white run.
- **Band Lavender** (`{colors.band-lavender}` — #f7f4ff): a softer wash serving the same role on product pages, with a curved upper edge rather than a square one.

### Text
- **Ink** (`{colors.ink}` — #000000): headings at every level. SAP sets its headlines in true black, not a softened near-black.
- **Ink Lead** (`{colors.ink-lead}` — #3c3c3c): the 28px lead paragraph that follows a display headline.
- **Ink Body** (`{colors.ink-body}` — #223548): body copy. A slate rather than a grey, which is what separates the paragraph tier from the lead tier.
- **Ink List** (`{colors.ink-list}` — #354a5f): list items, set one step lighter than body.
- **Ink Meta** (`{colors.ink-meta}` — #475e75): captions and footnotes, the quietest legible tier.
- **Ink Nav** (`{colors.ink-nav}` — #545454): navigation links, breadcrumbs and tab labels. The only text colour that is a neutral grey rather than a slate, which is how the chrome stays visually separate from the content.

### Semantic
- **Hairline** (`{colors.hairline}` — #475e75): the rule on an outline button. The same value as `{colors.ink-meta}`, used as a border rather than as type.

## Typography

### Font Family
The whole system is set in SAP's own variable typeface, 72 Brand Variable. There is no second family and no monospace. What the variable axis buys is a weight range wider than most corporate systems use — 350, 400, 500 and 700 all appear — and the design leans on it hardest at the small end, where three roles share the 14–16px range and are separated by weight alone.

The clearest example is at 15px. `{typography.nav-link}` is 400 in `{colors.ink-nav}` grey; `{typography.list-item}` is 350 in `{colors.ink-list}` slate. Same size, same family, and yet a reader parses one as chrome and the other as content. A system without a sub-400 weight could not make that distinction without changing size or colour.

Line height splits cleanly by role. Headings are set tight at roughly 1.1 — `{typography.display}` runs 57px on 62.7px, `{typography.section-title}` 32px on 35.2px — while body roles open to 1.5, with `{typography.body-lg}` at 20px on 30px. `{typography.button}` is set solid at 16px on 17.6px, which is what lets a 44px button hold its label without vertical drift.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display}` | 57px | 700 | 62.7px | 0 | Home page display headline |
| `{typography.hero-title}` | 36px | 500 | 39.6px | 0 | Interior page hero title |
| `{typography.section-title}` | 32px | 500 | 35.2px | 0 | Section headings |
| `{typography.lead}` | 28px | 400 | 30.8px | 0 | Lead paragraph |
| `{typography.subhead}` | 20px | 500 | 22px | 0 | Feature titles, active tab |
| `{typography.body-lg}` | 20px | 400 | 30px | 0 | Large body copy |
| `{typography.body}` | 18px | 400 | 27px | 0 | Body copy |
| `{typography.button}` | 16px | 500 | 17.6px | 0 | Button labels |
| `{typography.link}` | 16px | 400 | 24px | 0 | Inline text links |
| `{typography.nav-link}` | 15px | 400 | 21px | 0 | Navigation, breadcrumb |
| `{typography.list-item}` | 15px | 350 | 21px | 0 | List items |
| `{typography.caption}` | 14px | 400 | 21px | 0 | Captions, tab labels, footnotes |

### Principles
Headings are black and tight; everything below them is slate and open. That single contrast does most of the hierarchy work, and it is why the system needs so few sizes — twelve roles cover three page templates.

Tracking is left at zero everywhere. For a typeface designed in-house that is a statement of confidence: the metrics are already tuned for the sizes the system uses, so nothing needs correcting.

### Note on Font Substitutes
72 Brand Variable is proprietary. A substitute needs a genuine variable weight axis reaching below 400, because the 350 list-item weight is load-bearing — collapsing it to 400 erases the distinction between a list item and a nav link at 15px. Among open faces, Inter Variable or Source Sans 3 Variable come closest in width and x-height; whichever is used, carry the line heights in the table across verbatim rather than accepting the substitute's defaults, since the tight heading leading is what keeps the display sizes from feeling loose.

## Layout

### Spacing System
- **Base unit**: 8px, with a fine sub-step at the small end for control padding.
- **Tokens**: `{spacing.xxs}` 2px · `{spacing.xs}` 3px · `{spacing.sm}` 8px · `{spacing.md}` 9px · `{spacing.lg}` 10px · `{spacing.xl}` 12px · `{spacing.xxl}` 15px · `{spacing.wide}` 16px · `{spacing.section}` 20px · `{spacing.giant}` 24px · `{spacing.max}` 32px · `{spacing.huge}` 40px · `{spacing.hero}` 48px · `{spacing.band}` 56px · `{spacing.page}` 72px
- Controls sit at the tight end: `{component.button-primary}` pads `12px 14px` and `{component.button-outline}` `8px 9px`. The large steps from `{spacing.max}` upward are reserved for the vertical rhythm between bands.

### Grid & Container
The content column is centred and capped, with the chrome running full-bleed above it. Product pages centre their hero — headline, subcopy and a single button stacked on the axis — while the services hero splits left-text against a right-hand image. Feature content resolves into two columns; the services page runs a 2×2 grid separated by hairlines rather than by card edges. The footer divides into link columns above a legal strip.

Hero treatment is the clearest per-template difference. The home page runs a full-bleed navy gradient, the services page a flat `{colors.primary-deep}` band at 450px, and the product page no band at all — just centred type on `{colors.canvas}` above an illustration. Three templates, three hero strategies, one chrome.

### Whitespace Philosophy
Because nothing is bordered and nothing is elevated, the gap between blocks is what groups them. Sections are separated by large vertical intervals and, where a stronger break is needed, by switching the band colour. The bands are the punctuation of the page: a run of white, a grey interval, more white, a pale blue strip. Within a band the spacing tightens considerably, which is what keeps a dense feature grid readable directly beneath an open hero.

### Responsive Strategy

#### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Small mobile | < 480px | Single column; tab rail scrolls horizontally; hero type drops to the 36px tier |
| Mobile | 480–767px | Single column; nav collapses to a menu; two-column features stack |
| Tablet | 768–1023px | Two-column features hold; breadcrumb truncates; hero image moves below its text |
| Laptop | 1024–1279px | Full grid; tab rail shows all tabs; hero returns to side-by-side |
| Desktop | 1280–1439px | Centred content column at full width |
| Wide | ≥ 1440px | Gutters absorb the extra width; bands stay full-bleed |

The system declares an unusually dense set of media queries — well over thirty across the three templates — which is what a catalogue this large needs when the same chrome has to host very different page bodies.

#### Touch Targets
`{component.button-floating}` clears 44×44 WCAG-AAA comfortably at 58px, and `{component.button-primary}` meets it exactly at 44px. `{component.product-tab-active}` reaches 44px while the inactive `{component.product-tab}` sits at 32px, and `{component.breadcrumb}` at 17px is a wayfinding label rather than a primary target. On touch widths the inactive tabs are the first thing that should grow.

#### Collapsing Strategy
The global bar collapses its links behind a menu but keeps the logo, search and account affordances at every width. The product tab rail becomes a horizontal scroller rather than wrapping, so the active tab stays anchored. Two-column feature blocks stack, the 2×2 grid becomes a single column with its hairlines retained, and the hero image moves below its text rather than shrinking beside it. Bands keep their full-bleed width at every size; only their inner padding compresses.

#### Image Behavior
Product imagery is composited rather than photographic-only: a photograph sits inside a `{rounded.lg}` frame with floating UI cards and dotted connector lines arranged around it, so the illustration explains a workflow rather than decorating the section. Video thumbnails carry a centred round play affordance. Partner and customer logos appear as small monochrome lockups inside the imagery itself. Nothing is cropped to a uniform ratio; each frame is sized to its composition.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Canvas, no border | Content panes, most sections |
| 1 | Flat band — `{colors.chrome}`, `{colors.band}`, `{colors.band-blue}` or `{colors.band-lavender}` | Section separation, footer |
| 2 | Solid colour band — `{colors.primary-deep}` | Interior page hero |
| 3 | Gradient — navy anchored on `{colors.navy}`, or the purple-to-blue promo strip | Home hero, event strip |
| 4 | Soft drop shadow | Floating UI cards inside product illustrations |

The system is flat by default. Buttons carry no elevation, cards carry no border, and sections carry no rule. The only genuine shadow in the design lives inside the product illustrations, where small white cards float above a photograph — and that is precisely the point: shadow is reserved for depicting an interface, not for building one.

### Decorative Depth
Two gradients do the atmospheric work. The home hero runs a deep navy field anchored on `{colors.navy}`, dark at the left edge and opening toward blue behind the product lockup. The event promo strip runs violet into blue across a short full-width bar. Beyond those, the `{colors.band-lavender}` section on product pages carries a curved upper edge rather than a straight one, the single place where the system's otherwise square band geometry softens.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Every band, the chrome, the tab rail, the footer |
| `{rounded.sm}` | 4px | Inline anchor surfaces |
| `{rounded.md}` | 8px | Every button and control |
| `{rounded.lg}` | 12px | Media frames and illustration surfaces |

The scale is short and it stops early. Nothing on this site is a pill, and nothing is a circle except the play affordance on a video thumbnail. Controls get 8px, media gets 12px, and full-width regions get nothing at all — which is the rule that gives the page its horizontal, banded character. A rounded band would read as a card; a square one reads as a zone, and zones are what this layout is made of.

### Photography Geometry
Photographs appear inside `{rounded.lg}` frames, never full-bleed and never cropped to a fixed ratio. The signature treatment surrounds a photograph with small white UI cards on dotted connector lines, so the image and the interface elements together describe a task. Logos are small monochrome lockups placed inside the frame rather than in a separate strip.

## Components

> **No hover states documented.** Every component below documents its default state only. Variants live as separate entries in the `components:` front matter and are described in their own sub-blocks.

### Chrome

**`nav-bar`** — The global bar.
- Background `{colors.chrome}`, text `{colors.ink-nav}`, type `{typography.nav-link}`, rounded `{rounded.none}`, height 60. Full-bleed, square, and the same on every template.

**`nav-link`** — An item within it.
- Background `{colors.chrome}`, text `{colors.ink-nav}`, type `{typography.nav-link}`, rounded `{rounded.none}`.

**`breadcrumb`** — The trail above a product tab rail.
- Background `{colors.canvas}`, text `{colors.ink-nav}`, type `{typography.nav-link}`, rounded `{rounded.none}`, height 17.

**`product-tab`** — An inactive tab in the product rail.
- Background `{colors.canvas}`, text `{colors.ink-nav}`, type `{typography.caption}`, rounded `{rounded.none}`, height 32.

**`product-tab-active`** — The selected tab.
- Background `{colors.canvas}`, text `{colors.primary}`, type `{typography.subhead}`, rounded `{rounded.none}`, height 44. Marked by a blue underline and a step up in both size and weight, which is why it reads as selected without any fill.

### Heroes

**`hero-band`** — The solid interior hero.
- Background `{colors.primary-deep}`, text `{colors.on-primary}`, type `{typography.body}`, rounded `{rounded.none}`, height 450. Full-bleed and square.

**`hero-title`** — Its headline.
- Background `{colors.primary-deep}`, text `{colors.on-primary}`, type `{typography.hero-title}`, rounded `{rounded.none}`, height 40.

**`hero-display`** — The home page headline, set on white rather than in a band.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.display}`, rounded `{rounded.none}`, height 188. The largest type in the system and the only role at weight 700.

**`navy-hero`** — The home page hero field.
- Background `{colors.navy}`, text `{colors.on-primary}`, type `{typography.body}`, rounded `{rounded.none}`. A gradient anchored on navy rather than a flat fill, carrying a product lockup on its right.

### Buttons

**`button-primary`** — The standard filled action.
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button}`, rounded `{rounded.md}`, padding `12px 14px`, height 44.

**`button-outline`** — Its quiet partner, used beside a filled button in a hero.
- Background `{colors.canvas}`, text `{colors.primary-deep}`, type `{typography.button}`, rounded `{rounded.md}`, padding `8px 9px`. Bounded by a `{colors.hairline}` rule; the label is the deeper blue rather than the standard one.

**`button-floating`** — The persistent contact affordance pinned to the lower right.
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.caption}`, rounded `{rounded.md}`, padding `16px 20px`, height 58. The tallest control in the system and the only one that follows the page.

### Content

**`section-heading`** — A section title.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.section-title}`, rounded `{rounded.none}`, height 35.

**`lead-paragraph`** — The paragraph that follows a display headline.
- Background `{colors.canvas}`, text `{colors.ink-lead}`, type `{typography.lead}`, rounded `{rounded.none}`. Set at 28px in the one grey that appears nowhere else.

**`body-copy`** — Standard prose.
- Background `{colors.canvas}`, text `{colors.ink-body}`, type `{typography.body}`, rounded `{rounded.none}`.

**`feature-title`** — The heading inside a feature block.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.subhead}`, rounded `{rounded.none}`, height 22.

**`list-item`** — An entry in a linked list.
- Background `{colors.canvas}`, text `{colors.ink-list}`, type `{typography.list-item}`, rounded `{rounded.none}`, height 38. Weight 350, the lightest setting in the system.

**`meta-note`** — Captions and footnotes.
- Background `{colors.canvas}`, text `{colors.ink-meta}`, type `{typography.caption}`, rounded `{rounded.none}`.

**`text-link`** — An inline link.
- Background `{colors.canvas}`, text `{colors.primary}`, type `{typography.link}`, rounded `{rounded.none}`. Usually trailed by a chevron.

**`inline-anchor`** — A small anchored surface within running content.
- Background `{colors.canvas}`, text `{colors.primary}`, type `{typography.caption}`, rounded `{rounded.sm}`. The only place the 4px corner is used.

**`media-frame`** — The container around a photograph or illustration.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.caption}`, rounded `{rounded.lg}`.

### Bands

**`band-neutral`** — A section set apart on the chrome grey.
- Background `{colors.chrome}`, text `{colors.ink-body}`, type `{typography.body}`, rounded `{rounded.none}`.

**`band-blue`** — The pale blue variant.
- Background `{colors.band-blue}`, text `{colors.ink-body}`, type `{typography.body}`, rounded `{rounded.none}`.

**`band-lavender`** — The softest variant, used on product pages.
- Background `{colors.band-lavender}`, text `{colors.ink-body}`, type `{typography.body}`, rounded `{rounded.none}`. The one band whose upper edge curves.

**`sky-panel`** — A light blue panel inside the services layout.
- Background `{colors.sky}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.none}`.

**`footer`** — The link columns and legal strip.
- Background `{colors.band}`, text `{colors.ink-nav}`, type `{typography.nav-link}`, rounded `{rounded.none}`. The largest single non-white surface on the home page.

### Examples (illustrative)

> Kit-mirror demonstration surfaces. These are not brand-native components — they are the ten SaaS UI patterns downstream consumers re-skin, stamped here with this brand's own primitives so every example surface resolves against the documented spec rather than a template default.

**`ex-pricing-tier`** — A tier card on the canvas ground with a `{colors.hairline}` rule, `{rounded.md}` corner and `{spacing.giant}` interior.

**`ex-pricing-tier-featured`** — The promoted tier, polarity-flipped onto `{colors.ink}` with `{colors.on-primary}` text.

**`ex-product-selector`** — A what's-included summary card, since the brand sells enterprise software rather than configurable goods. `{rounded.md}` at `{spacing.giant}`.

**`ex-cart-drawer`** — A subscription summary with `{colors.hairline}` rules between line items, echoing the services page's hairline-separated feature grid.

**`ex-app-shell-row`** — A sidebar nav row at `{rounded.md}`, marked active by `{colors.primary}` — the same blue the active product tab uses.

**`ex-data-table-cell`** — Table chrome with `{typography.subhead}` headers over `{typography.caption}` cells and `{colors.hairline}` row rules, padded `{spacing.xl} {spacing.wide}`.

**`ex-auth-form-card`** — A sign-in card on the canvas ground at `{rounded.md}` with `{spacing.giant}` of interior room.

**`ex-modal-card`** — A modal surface at `{rounded.lg}`, the media frame's corner, with `{spacing.max}` interior.

**`ex-empty-state-card`** — An empty-state frame at `{rounded.lg}` with `{spacing.huge}` of room.

**`ex-toast`** — A toast at `{rounded.md}` padded `{spacing.xl} {spacing.wide}`, close to the primary button's own proportions.

## Do's and Don'ts

### Do
- Keep `{colors.primary}` for things that act — buttons, inline links, the active tab — and let everything else stay neutral.
- Separate sections with a full-width band rather than a border or a shadow. The bands are this layout's punctuation.
- Run every band square. `{rounded.none}` at full width is what makes a zone read as a zone.
- Use the weight axis at small sizes. `{typography.list-item}` at 350 and `{typography.nav-link}` at 400 are the same size on purpose.
- Set headings in true `{colors.ink}` black and step body copy down into `{colors.ink-body}` slate. The hue shift carries the hierarchy.
- Keep the chrome in `{colors.ink-nav}` grey so navigation stays visually distinct from content text.
- Cap controls at `{rounded.md}` and media at `{rounded.lg}`.
- Let the product illustrations carry the shadows. Floating UI cards inside an image are depicting an interface, not decorating a section.

### Don't
- Don't elevate a button or a card. Depth in this system is band and gradient, not shadow.
- Don't round a full-width region. It becomes a card and the banded rhythm collapses.
- Don't introduce a second accent hue. `{colors.sky}` and `{colors.navy}` are scoped to specific surfaces and are not general-purpose.
- Don't set body copy in `{colors.ink-nav}`. That grey belongs to the chrome; content uses the slate tiers.
- Don't flatten the weight range to 400 and 700. Losing 350 and 500 collapses three distinct roles in the 14–16px band.
- Don't add letter-spacing. The typeface is metrically tuned for these sizes and needs no correction.
- Don't crop the product illustrations to a uniform ratio. Each composition is sized to what it explains.
- Don't let a hero band and a content band sit adjacent without a white interval. The rhythm depends on white returning between coloured zones.
