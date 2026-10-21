---
version: alpha
name: Oracle Analysis
description: An analysis of Oracle's design language — an enterprise system built on a warm neutral ladder rather than a colour palette. Six numbered greys carry almost every surface, a single dark charcoal carries every action, and the famous red is held back for the wordmark alone. Two display registers coexist, being a very light sans on the corporate index and a Georgia serif across the product pages, and the only chromatic moments are a thin gold rule under a headline and the occasional full-width band of teal or forest green.

colors:
  primary: "#312d2a"
  primary-pressed: "#47423e"
  on-primary: "#ffffff"
  brand-mark: "#c74634"
  ink: "#161513"
  ink-deep: "#211e1c"
  canvas: "#ffffff"
  canvas-soft: "#fbf9f8"
  canvas-tint: "#f5f4f2"
  canvas-warm: "#f1efed"
  hairline: "#e4e1dd"
  divider: "#e9e7e4"
  field-border: "#d4cfca"
  link: "#006b8f"
  accent-gold: "#f0cc71"
  accent-gold-soft: "#f7e0a1"
  band-teal: "#d6e5e5"
  band-forest: "#33553c"
  focus: "#227e9e"
  error: "#d63b25"
  disabled-ink: "#aea8a2"

typography:
  display-serif-xl:
    fontFamily: Georgia
    fontSize: 56px
    fontWeight: 400
    lineHeight: 67.2px
    letterSpacing: 0
  display-serif-lg:
    fontFamily: Georgia
    fontSize: 40px
    fontWeight: 400
    lineHeight: 48px
    letterSpacing: 0
  display-serif-md:
    fontFamily: Georgia
    fontSize: 36px
    fontWeight: 400
    lineHeight: 43.2px
    letterSpacing: 0
  display-sans-lg:
    fontFamily: Oracle Sans
    fontSize: 40px
    fontWeight: 300
    lineHeight: 52px
    letterSpacing: 0
  display-sans-md:
    fontFamily: Oracle Sans
    fontSize: 32px
    fontWeight: 300
    lineHeight: 44px
    letterSpacing: 0
  heading-xl:
    fontFamily: Oracle Sans
    fontSize: 28px
    fontWeight: 800
    lineHeight: 33.6px
    letterSpacing: 0
  heading-lg:
    fontFamily: Oracle Sans
    fontSize: 24px
    fontWeight: 800
    lineHeight: 28.8px
    letterSpacing: 0
  heading-md:
    fontFamily: Oracle Sans
    fontSize: 20px
    fontWeight: 800
    lineHeight: 24px
    letterSpacing: 0
  heading-sm:
    fontFamily: Oracle Sans
    fontSize: 18px
    fontWeight: 800
    lineHeight: 21.6px
    letterSpacing: 0
  heading-card:
    fontFamily: Oracle Sans
    fontSize: 24px
    fontWeight: 600
    lineHeight: 32px
    letterSpacing: 0
  lead:
    fontFamily: Oracle Sans
    fontSize: 24px
    fontWeight: 400
    lineHeight: 33.6px
    letterSpacing: 0
  body:
    fontFamily: Oracle Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 22.4px
    letterSpacing: 0
  body-loose:
    fontFamily: Oracle Sans
    fontSize: 16px
    fontWeight: 350
    lineHeight: 24px
    letterSpacing: 0
  body-strong:
    fontFamily: Oracle Sans
    fontSize: 16px
    fontWeight: 700
    lineHeight: 22.4px
    letterSpacing: 0
  label:
    fontFamily: Oracle Sans
    fontSize: 14px
    fontWeight: 500
    lineHeight: 16.8px
    letterSpacing: 0
  label-strong:
    fontFamily: Oracle Sans
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
    letterSpacing: 0
  caption:
    fontFamily: Oracle Sans
    fontSize: 12px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0

rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 15px
  full: 9999px

spacing:
  xs: 10px
  sm: 12px
  md: 16px
  lg: 18px
  xl: 20px
  xxl: 24px
  xxxl: 32px
  section: 48px
  gutter: 72px

components:
  masthead:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    height: 85px
  logo-wordmark:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.brand-mark}"
    typography: "{typography.heading-lg}"
    rounded: "{rounded.none}"
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    borderColor: "{colors.field-border}"
    rounded: "{rounded.sm}"
    padding: 12px 18px
  product-subnav:
    backgroundColor: "{colors.ink-deep}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    height: 64px
  product-subnav-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    height: 64px
  subnav-active-bar:
    backgroundColor: "{colors.accent-gold-soft}"
    rounded: "{rounded.none}"
    height: 5px
    width: 67px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.xs}"
    padding: 10px 16px
  button-primary-pressed:
    backgroundColor: "{colors.primary-pressed}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.xs}"
    padding: 10px 16px
  button-primary-disabled:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.disabled-ink}"
    typography: "{typography.label}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.xs}"
    padding: 10px 16px
  button-secondary:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    borderColor: "{colors.ink}"
    rounded: "{rounded.xs}"
    padding: 10px 16px
  button-tertiary:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.xs}"
    padding: 10px 16px
  button-primary-inverse:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.xs}"
    padding: 10px 16px
  button-secondary-inverse:
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    borderColor: "{colors.on-primary}"
    rounded: "{rounded.xs}"
    padding: 10px 16px
  hero-band:
    backgroundColor: "{colors.canvas-warm}"
    textColor: "{colors.ink}"
    typography: "{typography.display-serif-md}"
    rounded: "{rounded.none}"
    padding: 48px
  hero-eyebrow-rule:
    backgroundColor: "{colors.accent-gold}"
    rounded: "{rounded.none}"
    width: 40px
    height: 4px
  section-band-white:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 48px
  section-band-soft:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 48px
  section-band-tint:
    backgroundColor: "{colors.canvas-tint}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 48px
  section-band-warm:
    backgroundColor: "{colors.canvas-warm}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 48px
  section-band-teal:
    backgroundColor: "{colors.band-teal}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 48px
  section-band-forest:
    backgroundColor: "{colors.band-forest}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 48px
  content-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-loose}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xxxl}"
  stat-panel:
    backgroundColor: "{colors.canvas-warm}"
    textColor: "{colors.ink}"
    typography: "{typography.body-loose}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  product-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "{spacing.xxl}"
  product-card-warm:
    backgroundColor: "{colors.canvas-warm}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "{spacing.xxl}"
  nav-tile:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.label-strong}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
  media-frame:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
  play-button-circular:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    size: 40px
  channel-column:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-lg}"
    borderColor: "{colors.divider}"
    rounded: "{rounded.none}"
    padding: "{spacing.xxl}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    height: 105px
  footer-link:
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"

  # ─── Examples (illustrative) — kit-mirror demonstration surfaces ───
  ex-pricing-tier:
    description: "Default pricing tier card. Product-card chrome with a hairline border, since the system separates same-rung surfaces with a rule rather than a shadow."
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.xxl}"
  ex-pricing-tier-featured:
    description: "Featured tier — polarity-flipped to the action charcoal with white text, the same inversion the dark bands perform."
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.xxl}"
  ex-product-selector:
    description: "What's-included summary card, one rung up the neutral ladder. Rows borrow the navigation-tile chrome."
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "{spacing.xxl}"
  ex-cart-drawer:
    description: "Subscription summary. Line items are separated by the same warm rule the contact page uses between columns."
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "{spacing.xxl}"
    item-divider: "{colors.divider}"
  ex-app-shell-row:
    description: "Sidebar nav row at the product-card radius. Active state is marked by the action charcoal, the system's only emphasis fill."
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
  ex-data-table-cell:
    description: "Data-table header and body chrome. The header sits one rung up the ladder and rows are divided by a hairline."
    headerBackground: "{colors.canvas-tint}"
    headerTypography: "{typography.caption}"
    bodyTypography: "{typography.body}"
    cellPadding: "{spacing.sm} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: "Sign-in card. Product-card chrome with the masthead search field's input treatment inside."
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.xxl}"
  ex-modal-card:
    description: "Modal dialog surface — product-card chrome with a hairline border and no shadow, because the system has none."
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.xxl}"
  ex-empty-state-card:
    description: "Empty-state frame one rung up the ladder, padded to the section rhythm."
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "{spacing.section}"
    captionTypography: "{typography.body}"
  ex-toast:
    description: "Toast notification — the product-card radius on a white surface, bounded by a hairline instead of an elevation."
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.xl}"
    typography: "{typography.body}"

---


## Overview

Oracle's web system is unusual for an enterprise brand in that it barely uses colour at all. The page ground is a six-step ladder of warm neutrals that runs from pure white through three off-whites to a warm near-black, and that ladder does almost all the structural work. Sections are distinguished from one another not by cards or rules or shadows but by which rung of the ladder they sit on, stacked full-bleed and square-cornered so the page reads as a series of tonal shifts rather than a stack of containers.

The famous Oracle red appears exactly once per page, in the masthead wordmark, and nowhere else. Every action on the site is carried by `{colors.primary}`, a warm dark charcoal, in a small 4px-radius button that never grows louder than its label. The restraint is deliberate and total: there is no coloured CTA, no accent-tinted card, no gradient. When colour does arrive it arrives at full-band scale, a whole section width of `{colors.band-teal}` or `{colors.band-forest}`, and then the page returns to neutral.

What gives the system its character is the type. Two display registers run side by side. The corporate index sets its headings in Oracle Sans at weight 300, very large and very light, while the product pages set theirs in Georgia, a bookish transitional serif that is genuinely surprising on a database landing page. Beneath both, Oracle Sans handles everything else across a wide weight range, dropping to 350 for running copy and jumping all the way to 800 for section headings, so the contrast between a paragraph and the heading above it is enormous without either changing size very much. A single gold rule, 40 by 4 pixels, sits under the hero headline. It is the only decorative mark in the system, and against this much neutral it does a lot of work.

**Key Characteristics:**
- A six-rung warm neutral ladder — `{colors.canvas}` → `{colors.canvas-soft}` → `{colors.canvas-tint}` → `{colors.canvas-warm}` → `{colors.hairline}` → `{colors.ink-deep}` — carrying nearly every surface
- `{colors.brand-mark}` reserved for the wordmark and used nowhere else in the interface
- Every action in one warm charcoal `{colors.primary}` at `{rounded.xs}`, with no coloured CTA anywhere
- Two display registers, being Oracle Sans at weight 300 on the corporate index and Georgia serif across the product pages
- An extreme body-to-heading weight jump, from 350/400 running copy straight to 800 section headings
- Full-bleed square-cornered bands with no shadows — depth comes from tonal steps alone
- A 40 × 4px `{colors.accent-gold}` rule under the hero headline as the system's only ornament
- Chromatic colour deployed only at whole-band scale, never on a control

## Colors

### Brand & Accent
- **Oracle Red** (`{colors.brand-mark}` — #c74634): the wordmark, and only the wordmark. It appears in the masthead at the top of every page and is not used for any button, link, border, band or highlight. Elsewhere on the page red shows up only inside photography and inside logos printed on product hardware.
- **Action Charcoal** (`{colors.primary}` — #312d2a): the fill behind every primary action on the site. Warm rather than neutral, and a clear step lighter than `{colors.ink}` so a filled button reads as an object rather than as a block of text.
- **Action Charcoal Pressed** (`{colors.primary-pressed}` — #47423e): the active state of that button.
- **On Primary** (`{colors.on-primary}` — #ffffff): the label on a filled action, and the text colour on every inverted surface.
- **Gold Rule** (`{colors.accent-gold}` — #f0cc71): a 40 × 4px bar sitting under the hero headline on every product page. The system's one piece of ornament.
- **Gold Tab** (`{colors.accent-gold-soft}` — #f7e0a1): a paler gold, 5px tall, marking the selected item in the dark product sub-navigation.

### Surface
The surface set is a numbered ladder, and its rungs are close enough together that a band change reads as a shift in light rather than as a new panel.

- **Canvas** (`{colors.canvas}` — #ffffff): the masthead, the footer, content cards, and the brightest section bands.
- **Canvas Soft** (`{colors.canvas-soft}` — #fbf9f8): the most common product-page section fill. One barely-perceptible step off white.
- **Canvas Tint** (`{colors.canvas-tint}` — #f5f4f2): the next step, used for supporting sections and the contact hero.
- **Canvas Warm** (`{colors.canvas-warm}` — #f1efed): the warmest and most-used tint, carrying the corporate index page almost end to end and every product hero band.
- **Hairline** (`{colors.hairline}` — #e4e1dd): the tile and disabled-control border, and the last neutral rung before the dark end.
- **Divider** (`{colors.divider}` — #e9e7e4): the 2px vertical rule that separates the contact page's channel columns.
- **Field Border** (`{colors.field-border}` — #d4cfca): the 1px border around the masthead search field, one clear step darker than `{colors.hairline}` so an input reads as interactive against a card that merely reads as a container.
- **Ink Deep** (`{colors.ink-deep}` — #211e1c): the dark end of the ladder, used as a full-width band behind the product sub-navigation.

### Text
- **Ink** (`{colors.ink}` — #161513): every heading and every line of body copy. A warm near-black, never pure black, which keeps the very light 300-weight display sizes from looking harsh.
- **Link** (`{colors.link}` — #006b8f): inline links in body copy and channel columns. A deep teal-blue, set without an underline, at the same size and weight as the text around it — the colour alone carries the affordance.
- On dark bands, text inverts to `{colors.on-primary}` and there is no intermediate tone; the system has one text colour per polarity.

### Semantic
- **Focus** (`{colors.focus}` — #227e9e): the focus indicator, declared once and applied identically on light and dark surfaces, so a keyboard user sees the same ring everywhere.
- **Error** (`{colors.error}` — #d63b25): validation messaging and error field text.
- **Disabled Ink** (`{colors.disabled-ink}` — #aea8a2): the label on a disabled control, paired with a `{colors.canvas-soft}` fill and a `{colors.hairline}` border.

### Band Colours
Chromatic colour enters the system only as a full section band, never as a control, a card or a border.
- **Band Teal** (`{colors.band-teal}` — #d6e5e5): a pale teal strip, roughly 120 to 160px tall, used to break a run of neutral sections.
- **Band Forest** (`{colors.band-forest}` — #33553c): a deep green band carrying white text and a multi-column link list, around 390px tall.

## Typography

### Font Family
Three families, with a clear division of labour.

**Oracle Sans** is the workhorse — a variable humanist sans with open apertures and a slightly squared construction. Its variable axis is exercised hard: the declared base weight is 350, running copy sits at 350 or 400, and section headings jump all the way to 800. It also supplies the corporate index's display sizes at weight 300.

**Georgia** is the display serif on the product pages. It carries h1, h2 and h3 at 36 to 56px in regular weight, with its bracketed serifs and ball terminals reading as distinctly bookish next to the sans beneath it. It is declared as an explicit stack led by Georgia, so it renders as Georgia on virtually every machine rather than falling back.

**Consolas** is declared for monospace and never appears in page chrome.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-serif-xl}` | 56px | 400 | 67.2px | 0 | Product hero headline, Georgia |
| `{typography.display-serif-lg}` | 40px | 400 | 48px | 0 | Major section headline, Georgia |
| `{typography.display-serif-md}` | 36px | 400 | 43.2px | 0 | Product page headline and section headline, Georgia |
| `{typography.display-sans-lg}` | 40px | 300 | 52px | 0 | Corporate index section headline, Oracle Sans Light |
| `{typography.display-sans-md}` | 32px | 300 | 44px | 0 | Corporate index page headline, Oracle Sans Light |
| `{typography.heading-xl}` | 28px | 800 | 33.6px | 0 | Product section heading |
| `{typography.heading-lg}` | 24px | 800 | 28.8px | 0 | Section and channel-column heading |
| `{typography.heading-md}` | 20px | 800 | 24px | 0 | Sub-section heading |
| `{typography.heading-sm}` | 18px | 800 | 21.6px | 0 | Card heading |
| `{typography.heading-card}` | 24px | 600 | 32px | 0 | Corporate index card heading |
| `{typography.lead}` | 24px | 400 | 33.6px | 0 | Standfirst paragraph under a hero |
| `{typography.body}` | 16px | 400 | 22.4px | 0 | Product page running copy and links |
| `{typography.body-loose}` | 16px | 350 | 24px | 0 | Corporate index running copy, at the declared base weight |
| `{typography.body-strong}` | 16px | 700 | 22.4px | 0 | Emphasised list item and inline lead-in |
| `{typography.label}` | 14px | 500 | 16.8px | 0 | Button label |
| `{typography.label-strong}` | 14px | 600 | 20px | 0 | Navigation tile label |
| `{typography.caption}` | 12px | 400 | 20px | 0 | Footer links and fine print |

### Principles
Letter-spacing is zero on every role without exception. There is no tracked-out eyebrow, no tightened display line, no small-caps label — the system leaves the typeface's own fitting alone at every size from 12px to 56px.

Line-height moves in two registers. Display and heading roles run at a tight 1.2 (67.2/56, 48/40, 28.8/24, 21.6/18 all resolve to exactly 1.2), while body roles open up to 1.4 (22.4/16) or 1.5 (24/16). The split is clean: anything that is a heading is set tight, anything that is read in sentences is set loose.

The weight range is the most distinctive thing about the system. Running copy sits at 350 or 400 and section headings sit at 800, with almost nothing in between, so hierarchy is carried by weight far more than by size. A 24px 800-weight heading over 16px 400-weight body is a much sharper break than the 1.5× size ratio alone would suggest. The 300-weight display sizes on the corporate index run in the opposite direction, being lighter than the body text they sit above.

### Note on Font Substitutes
**Oracle Sans** is a proprietary variable face. The closest open substitute is **Inter**, which shares the humanist skeleton and open apertures and offers a full variable weight axis including the 350 and 800 stops this system depends on; **Source Sans 3** is a warmer alternative but tops out lower and needs the 800 roles dropped to 700. **Georgia** ships with virtually every operating system and needs no substitution; if a webfont is required, **Gelasio** is metric-compatible with it. **Consolas** substitutes cleanly with **JetBrains Mono**. Keep the 1.2 heading line-height, the 1.4 body line-height, and zero tracking on any substitute.

## Layout

### Spacing System
- **Base unit**: 8px, though the working steps are finer at the small end and jump hard at the large end.
- **Tokens**: `{spacing.xs}` 10px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 18px · `{spacing.xl}` 20px · `{spacing.xxl}` 24px · `{spacing.xxxl}` 32px · `{spacing.section}` 48px · `{spacing.gutter}` 72px
- `{spacing.section}` is the universal rhythm constant. Every full-width section on every page is padded `48px 0`, which is what gives the band stack its regularity.
- `{spacing.xxxl}` is the grid gutter and the corporate index card interior; `{spacing.xxl}` is the product card interior.
- Button padding is a fixed `10px 16px` everywhere, and headings carry an 18px bottom margin.

### Grid & Container
- **Outer container**: 1744px maximum, with a 72px side gutter.
- **Context container**: 1600px maximum for content that sits inside a band.
- **Minimum container**: 272px, which is the floor the layout collapses toward on the narrowest phones.
- **Grid gap**: 32px between columns, used by the corporate index tile row, the channel columns and the product card grids.
- **Masthead**: 85px tall, full width, white. **Product sub-navigation**: 64px, full width, sticky. **Footer**: 105px, full width, white.
- Sections are full-bleed and square-cornered; the container only constrains the content inside them, never the band itself.

### Whitespace Philosophy
Space is used to make the tonal ladder legible. Because adjacent bands can differ by as little as four or five points of lightness, each one needs enough vertical room for the eye to register it as a separate region — hence the uniform 48px section padding and the willingness to give a 160px teal strip an entire band to itself. Inside a band the opposite applies: content is packed into a 1600px column with 32px gutters and relatively tight card padding, so the generous outer rhythm reads as structure rather than emptiness.

### Responsive Strategy

#### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Small mobile | ≤ 450px | Single column throughout; masthead collapses to hamburger, wordmark and icons; tile row stacks |
| Mobile | 451–600px | The system's heaviest breakpoint — sub-navigation becomes a scrolling strip, card grids go 1-up, hero type drops to its floor |
| Tablet | 601–770px | The second heaviest — grids go 2-up, the search field collapses to an icon, channel columns stack and lose their dividers |
| Laptop | 771–974px | 2-up and 3-up grids, side gutters tighten from 72px toward the container minimum |
| Desktop | 975–1344px | Full multi-column grids, sub-navigation shows all items inline |
| Wide | 1345–1744px | Content reaches the 1600px context cap; bands continue full-bleed |
| Ultra-wide | ≥ 1744px | Outer container caps; surplus width is absorbed by the band fills on either side |

#### Touch Targets
`{components.button-primary}` stands 37px tall at its 10px vertical padding and 14px label, which is under the 44×44 WCAG AAA minimum and relies on surrounding margin for comfortable tapping. `{components.text-input}` and `{components.product-subnav}` both clear it comfortably, at roughly 46px and 64px respectively, as does `{components.nav-tile}`. For rebuilds, raising the button's vertical padding to 14px brings it to 45px without changing any other value in the system.

#### Collapsing Strategy
The masthead is the element that changes most: at desktop it carries a hamburger, the wordmark, a wide search field and three utility icons, and below tablet the search field collapses to an icon while the rest holds position. The product sub-navigation keeps its full-bleed band at every width and turns into a horizontally scrolling strip rather than wrapping, so the active `{components.subnav-active-bar}` stays visible. Card grids step 4-up to 3-up to 2-up to 1-up across the ladder. The channel columns on the contact page drop their `{colors.divider}` vertical rules when they stack, since a vertical rule between stacked blocks reads as a mistake. Section padding holds at `{spacing.section}` far longer than most systems would keep it, compressing only at the mobile breakpoints.

#### Image Behavior
Photography is full-bleed inside its container and square-cornered when it fills a band, but takes `{rounded.md}` when it sits inside a product card and `{rounded.xl}` when it fills half of a corporate index content card. Video thumbnails carry a circular `{components.play-button-circular}` overlay. The contact hero uses a cut-out photographic strip with a soft feathered lower edge rather than a hard crop. Decorative pattern overlays — fine topographic contour lines, large open swirls — sit behind hero content at very low contrast and are treated as part of the band fill rather than as images.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat fill on the neutral ladder | Every band, section, nav and footer — the default |
| 1 | One rung up or down the ladder | Cards on a tinted band, the dark sub-navigation strip |
| 2 | 1px `{colors.hairline}` border | Navigation tiles and disabled controls |

The system carries **no shadows at all**. Not on cards, not on the sticky sub-navigation, not on the masthead, not on modals. Depth is produced entirely by position on the neutral ladder: a white card on a `{colors.canvas-warm}` band reads as raised because it is lighter, and a `{colors.ink-deep}` sub-navigation reads as a distinct plane because it is far darker. Where two surfaces sit on the same rung, a 1px `{colors.hairline}` border does the separating instead.

There are no gradients in the page chrome. The only tonal transitions in the system are the feathered lower edge of a cut-out hero photograph and the angled diagonal that ends some hero bands, and both belong to the image, not to the surface.

### Decorative Depth
Hero bands carry very low-contrast pattern overlays — dense topographic contour lines on one product page, large open swirls on another — drawn a point or two off the band fill. They read as texture rather than as image, and they are the reason a large area of `{colors.canvas-warm}` does not feel empty. Some hero bands end on an angled diagonal rather than a horizontal edge, letting the following band cut up into them.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Every band, section, masthead, sub-navigation and footer |
| `{rounded.xs}` | 4px | Every button, and every anchor styled as a button |
| `{rounded.sm}` | 6px | The masthead search field and small column items |
| `{rounded.md}` | 8px | Product page cards and media frames |
| `{rounded.lg}` | 12px | Corporate index navigation tiles |
| `{rounded.xl}` | 15px | Corporate index content cards and their inner stat panels |
| `{rounded.full}` | 9999px | The circular video play control |

The scale is unusually fine-grained at the small end, with 4, 6 and 8 all in active use and each assigned to a different control family — buttons, fields, cards. The two large steps are template-specific rather than interchangeable: the corporate index uses 15px throughout while the product pages use 8px, so a card's radius tells you which template you are on. The 15px value is worth noting as a deliberate oddity, since 16px would be the conventional choice and the system consistently uses 15.

### Photography Geometry
Images inside product cards take `{rounded.md}`; images filling half a corporate index card take `{rounded.xl}`. Full-band photography is square-cornered. Aspect ratios are not fixed — video thumbnails run roughly 16:9, hero photography is a wide strip, and card imagery fills whatever the card gives it. The system never crops to a circle except for the play control.

## Components

> Every component below documents its Default state. Variants live as separate entries in the `components:` front matter.

### Masthead & Navigation

**`masthead`**
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.none}`, 85px tall
- Full width and identical on every page. Carries a hamburger, the wordmark, a wide search field and three utility icons

**`logo-wordmark`**
- Text `{colors.brand-mark}`, type `{typography.heading-lg}`, rounded `{rounded.none}`
- The only appearance of red in the interface

**`text-input`**
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body}`, 1px `{colors.field-border}` border, rounded `{rounded.sm}`, padding `12px 18px`
- The masthead search field. A leading icon is inset with 48px of left padding

**`product-subnav`**
- Background `{colors.ink-deep}`, text `{colors.on-primary}`, type `{typography.body}`, rounded `{rounded.none}`, 64px tall
- A sticky full-bleed strip below the masthead on a product page, holding the section links for that product

**`product-subnav-light`**
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.none}`, 64px tall
- The same strip in its light polarity, where the active item is marked by an ink underline instead of a gold bar

**`subnav-active-bar`**
- Background `{colors.accent-gold-soft}`, rounded `{rounded.none}`, 67 × 5px
- Marks the selected item in the dark sub-navigation

### Buttons

Every button in the system is `{rounded.xs}` with `10px 16px` padding and a `{typography.label}` label. Only the fill and border change between variants.

**`button-primary`**
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.label}`, rounded `{rounded.xs}`, padding `10px 16px`
- The primary action everywhere. Frequently markup'd as an anchor rather than a button element

**`button-primary-pressed`**
- Background `{colors.primary-pressed}`, otherwise identical

**`button-primary-disabled`**
- Background `{colors.canvas-soft}`, text `{colors.disabled-ink}`, 1px `{colors.hairline}` border, rounded `{rounded.xs}`, padding `10px 16px`

**`button-secondary`**
- Transparent fill, text `{colors.ink}`, 1px `{colors.ink}` border, rounded `{rounded.xs}`, padding `10px 16px`
- The outlined companion, always paired to the right of a primary

**`button-tertiary`**
- Text `{colors.ink}`, rounded `{rounded.xs}`, padding `10px 16px`
- A borderless tonal variant whose fill is an 8% wash of `{colors.ink}` over whatever surface it sits on, so it reads as a soft block rather than a defined edge

**`button-primary-inverse`**
- Background `{colors.canvas}`, text `{colors.ink}`, rounded `{rounded.xs}`, padding `10px 16px`
- The primary action on a dark band — the polarity flips rather than the colour changing

**`button-secondary-inverse`**
- Transparent fill, text `{colors.on-primary}`, 1px `{colors.on-primary}` border, rounded `{rounded.xs}`, padding `10px 16px`

### Bands & Sections

All six band variants are full-bleed, square-cornered and padded `48px 0`. They differ only in fill.

**`hero-band`**
- Background `{colors.canvas-warm}`, text `{colors.ink}`, type `{typography.display-serif-md}`, rounded `{rounded.none}`, padding `48px`
- Opens every product page. Carries a low-contrast pattern overlay and frequently ends on an angled diagonal

**`hero-eyebrow-rule`**
- Background `{colors.accent-gold}`, rounded `{rounded.none}`, 40 × 4px
- Sits directly under the hero headline. The system's only ornament

**`section-band-white`** · **`section-band-soft`** · **`section-band-tint`** · **`section-band-warm`**
- Backgrounds `{colors.canvas}`, `{colors.canvas-soft}`, `{colors.canvas-tint}` and `{colors.canvas-warm}` respectively
- All text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.none}`, padding `48px`
- The four neutral rungs. A page is built by alternating them; the shift between adjacent rungs is deliberately small

**`section-band-teal`**
- Background `{colors.band-teal}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.none}`, padding `48px`
- A short chromatic strip, around 120 to 160px tall, used to interrupt a long neutral run

**`section-band-forest`**
- Background `{colors.band-forest}`, text `{colors.on-primary}`, type `{typography.body}`, rounded `{rounded.none}`, padding `48px`
- The one deep colour band, carrying white text and a multi-column link list

### Cards & Media

**`content-card`**
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-loose}`, rounded `{rounded.xl}`, padding `{spacing.xxxl}`
- The corporate index workhorse. A wide card holding a headline, copy, a primary action and a half-width image

**`stat-panel`**
- Background `{colors.canvas-warm}`, text `{colors.ink}`, type `{typography.body-loose}`, rounded `{rounded.xl}`, padding `{spacing.xl}`
- A tinted block nested inside a content card, holding a short bulleted list of figures

**`product-card`** and **`product-card-warm`**
- Backgrounds `{colors.canvas}` and `{colors.canvas-warm}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.md}`, padding `{spacing.xxl}`
- The product page equivalent, at the smaller radius. The warm variant is used when the card sits on a white band

**`nav-tile`**
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.label-strong}`, 1px `{colors.hairline}` border, rounded `{rounded.lg}`, padding `{spacing.md}`
- The row of eight product entry tiles below the corporate index masthead, grouped under two light sans labels

**`media-frame`**
- Background `{colors.canvas}`, rounded `{rounded.md}`
- The frame around an embedded video or product screenshot

**`play-button-circular`**
- Background `{colors.ink}`, icon `{colors.on-primary}`, rounded `{rounded.full}`, 40px
- The only circular element in the system

### Content & Links

**`channel-column`**
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.heading-lg}`, 2px `{colors.divider}` rule, rounded `{rounded.none}`, padding `{spacing.xxl}`
- A three-up group on the contact page. Each column holds a thin outline icon, an 800-weight heading, a short paragraph and a `{components.link-inline}`, separated by full-height vertical rules

**`link-inline`**
- Text `{colors.link}`, type `{typography.body}`, rounded `{rounded.none}`
- Set with no underline and at the same size and weight as the surrounding copy

### Footer

**`footer`**
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.caption}`, rounded `{rounded.none}`, 105px tall
- A single horizontal row of fine-print links above a row of social icons. No rule, no fill change, no column structure

**`footer-link`**
- Text `{colors.ink}`, type `{typography.caption}`, rounded `{rounded.none}`
- Set in ink rather than `{colors.link}`, which is what keeps the footer quiet

### Examples (illustrative)

> These ten surfaces are kit-mirror demonstrations, not components found on the brand's own pages. Each is composed from the primitives above so downstream consumers re-skin the shapes this system actually uses — the square `{rounded.none}` band, the `{rounded.xs}` button, the `{rounded.md}` card, and a neutral ladder that separates surfaces by tone and a hairline rule instead of by shadow.

**`ex-pricing-tier`** — default tier card
- Background `{colors.canvas}`, text `{colors.ink}`, 1px `{colors.hairline}` border, rounded `{rounded.md}`, padding `{spacing.xxl}`
- CTA from `{components.button-secondary}`

**`ex-pricing-tier-featured`** — the highlighted tier
- Background `{colors.primary}`, text `{colors.on-primary}`, rounded `{rounded.md}`, padding `{spacing.xxl}`
- Polarity-flipped to the action charcoal, the same inversion `{components.section-band-forest}` performs, with its CTA from `{components.button-primary-inverse}`

**`ex-product-selector`** — what's-included summary card
- Background `{colors.canvas-soft}`, text `{colors.ink}`, rounded `{rounded.md}`, padding `{spacing.xxl}`
- One rung up the ladder, with rows borrowing `{components.nav-tile}` chrome

**`ex-cart-drawer`** — subscription summary
- Background `{colors.canvas}`, text `{colors.ink}`, rounded `{rounded.md}`, padding `{spacing.xxl}`, line items separated by `{colors.divider}`
- The same warm rule `{components.channel-column}` uses between columns

**`ex-app-shell-row`** — sidebar nav row
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.md}`, padding `{spacing.sm} {spacing.md}`, active indicator `{colors.primary}`

**`ex-data-table-cell`** — table header and body chrome
- Header background `{colors.canvas-tint}` in `{typography.caption}`, body cells `{typography.body}`, cell padding `{spacing.sm} {spacing.md}`, row border `{colors.hairline}`

**`ex-auth-form-card`** — sign-in card
- Background `{colors.canvas}`, text `{colors.ink}`, 1px `{colors.hairline}` border, rounded `{rounded.md}`, padding `{spacing.xxl}`
- Inputs take the `{components.text-input}` treatment

**`ex-modal-card`** — modal dialog surface
- Background `{colors.canvas}`, text `{colors.ink}`, 1px `{colors.hairline}` border, rounded `{rounded.md}`, padding `{spacing.xxl}`
- No shadow, since the system has none — the modal is bounded by its rule alone

**`ex-empty-state-card`** — empty-state frame
- Background `{colors.canvas-soft}`, text `{colors.ink}`, rounded `{rounded.md}`, padding `{spacing.section}`, caption in `{typography.body}`

**`ex-toast`** — toast notification surface
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body}`, 1px `{colors.hairline}` border, rounded `{rounded.md}`, padding `{spacing.sm} {spacing.xl}`

## Do's and Don'ts

### Do
- Build page structure from the neutral ladder. Moving a section one rung is the system's way of saying "new region".
- Keep `{colors.brand-mark}` on the wordmark and nowhere else. Its scarcity is what gives it weight.
- Run every action through `{colors.primary}` at `{rounded.xs}` with `10px 16px` padding, whatever the context.
- Flip polarity rather than changing colour when an action lands on a dark band — use `{components.button-primary-inverse}`.
- Hold `{spacing.section}` at 48px on every full-width band; the uniform rhythm is what makes the small tonal steps legible.
- Let weight carry hierarchy. The 400-to-800 jump between body and heading is the system's main structural signal.
- Keep letter-spacing at zero on every role, at every size.
- Deploy chromatic colour only at whole-band scale, as `{components.section-band-teal}` or `{components.section-band-forest}`.

### Don't
- Don't add shadows. The system has none, and elevation is expressed by position on the neutral ladder.
- Don't use pure black. `{colors.ink}` is warm and deliberately a few points off it.
- Don't round a band, a section, a masthead or a footer — `{rounded.none}` on full-width chrome is the rule.
- Don't mix the two card radii. `{rounded.xl}` belongs to the corporate index and `{rounded.md}` to the product pages; using both on one page breaks the template read.
- Don't set a headline in Oracle Sans on a product page or in Georgia on the corporate index — the two registers do not cross templates.
- Don't underline `{components.link-inline}`; `{colors.link}` alone carries the affordance.
- Don't add a fourth or fifth tint between the ladder rungs. They are already close enough that another step would be invisible.
- Don't give `{components.hero-eyebrow-rule}` a second colour or a second instance per page; one 40 × 4px gold bar is the whole ornament budget.
