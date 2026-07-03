---
version: alpha
name: Co-Star-Inspired-design-analysis
description: An inspired interpretation of Co–Star's design language — the hyper-personalized astrology app whose web surface is stark ink-on-paper minimalism; a pure white canvas, a near-greyscale ladder of Helvetica Neue set smaller than platform norms, half-bold weight-500 headings, hairline rules instead of shadows, depth pressed into the page rather than lifted off it, and a single ceremonial polarity-flip to void black — the whole system reads as clinical mysticism, a horoscope typeset like a lab report.

colors:
  ink: "#000000"
  ink-body: "#333333"
  ink-soft: "#555555"
  muted: "#777777"
  faint: "#999999"
  canvas: "#ffffff"
  canvas-veil: "#f8f8f8"
  canvas-soft: "#f5f5f5"
  stripe: "#f9f9f9"
  hairline: "#dddddd"
  hairline-soft: "#eeeeee"
  hairline-veil: "#e7e7e7"
  border-input: "#cccccc"
  on-ink: "#ffffff"
  link: "#337ab7"
  link-active: "#23527c"
  focus-halo: "#66afe9"
  success: "#3c763d"
  surface-success: "#dff0d8"
  warning: "#8a6d3b"
  surface-warning: "#fcf8e3"
  danger: "#a94442"
  surface-danger: "#f2dede"
  info: "#31708f"
  surface-info: "#d9edf7"

typography:
  hero-statement:
    fontFamily: Helvetica Neue, Helvetica, Arial, sans-serif
    fontSize: 63px
    fontWeight: 500
    lineHeight: 69.3px
  hero-lead:
    fontFamily: Helvetica Neue, Helvetica, Arial, sans-serif
    fontSize: 21px
    fontWeight: 200
    lineHeight: 30px
  display-xl:
    fontFamily: Helvetica Neue, Helvetica, Arial, sans-serif
    fontSize: 36px
    fontWeight: 500
    lineHeight: 39.6px
  display-lg:
    fontFamily: Helvetica Neue, Helvetica, Arial, sans-serif
    fontSize: 30px
    fontWeight: 500
    lineHeight: 33px
  display-md:
    fontFamily: Helvetica Neue, Helvetica, Arial, sans-serif
    fontSize: 24px
    fontWeight: 500
    lineHeight: 26.4px
  display-sm:
    fontFamily: Helvetica Neue, Helvetica, Arial, sans-serif
    fontSize: 18px
    fontWeight: 500
    lineHeight: 19.8px
  display-xs:
    fontFamily: Helvetica Neue, Helvetica, Arial, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 15.4px
  display-2xs:
    fontFamily: Helvetica Neue, Helvetica, Arial, sans-serif
    fontSize: 12px
    fontWeight: 500
    lineHeight: 13.2px
  lead:
    fontFamily: Helvetica Neue, Helvetica, Arial, sans-serif
    fontSize: 16px
    fontWeight: 300
    lineHeight: 22.4px
  aphorism:
    fontFamily: Helvetica Neue, Helvetica, Arial, sans-serif
    fontSize: 17.5px
    fontWeight: 400
    lineHeight: 25px
  body-md:
    fontFamily: Helvetica Neue, Helvetica, Arial, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  body-strong:
    fontFamily: Helvetica Neue, Helvetica, Arial, sans-serif
    fontSize: 14px
    fontWeight: 700
    lineHeight: 20px
  caption:
    fontFamily: Helvetica Neue, Helvetica, Arial, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 17px
  caption-mono:
    fontFamily: Menlo, Monaco, Consolas, Courier New, monospace
    fontSize: 13px
    fontWeight: 400
    lineHeight: 18.57px
  button-md:
    fontFamily: Helvetica Neue, Helvetica, Arial, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  button-lg:
    fontFamily: Helvetica Neue, Helvetica, Arial, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 24px
  button-sm:
    fontFamily: Helvetica Neue, Helvetica, Arial, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 18px

rounded:
  none: 0px
  xs: 3px
  sm: 4px
  md: 6px
  counter: 10px
  circle: 50%

spacing:
  xxs: 3px
  xs: 5px
  sm: 6px
  md: 8px
  lg: 10px
  xl: 12px
  2xl: 15px
  3xl: 20px
  4xl: 30px
  section: 48px

components:
  nav-bar:
    backgroundColor: "{colors.canvas-veil}"
    textColor: "{colors.muted}"
    borderColor: "{colors.hairline-veil}"
    typography: "{typography.body-md}"
    minHeight: 50px
  nav-link:
    textColor: "{colors.muted}"
    activeTextColor: "{colors.ink-soft}"
    activeBackground: "{colors.hairline-veil}"
    typography: "{typography.body-md}"
    padding: "{spacing.lg} {spacing.2xl}"
  nav-toggle:
    backgroundColor: transparent
    borderColor: "{colors.hairline}"
    rounded: "{rounded.sm}"
    padding: "9px {spacing.lg}"
  button-paper:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-body}"
    borderColor: "{colors.border-input}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.xl}"
  button-paper-pressed:
    backgroundColor: "#e6e6e6"
    textColor: "{colors.ink-body}"
    borderColor: "#adadad"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.xl}"
    shadow: "inset 0 3px 5px rgba(0, 0, 0, 0.125)"
  button-paper-lg:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-body}"
    borderColor: "{colors.border-input}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.md}"
    padding: "10px 16px"
  button-paper-sm:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-body}"
    borderColor: "{colors.border-input}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.xs}"
    padding: "{spacing.xs} {spacing.lg}"
  button-utility:
    backgroundColor: "{colors.link}"
    textColor: "{colors.on-ink}"
    borderColor: "#2e6da4"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.xl}"
  text-link:
    textColor: "{colors.link}"
    activeTextColor: "{colors.link-active}"
    textDecoration: none
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-soft}"
    placeholderColor: "{colors.faint}"
    borderColor: "{colors.border-input}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.xl}"
    height: 34px
    shadow: "inset 0 1px 1px rgba(0, 0, 0, 0.075)"
  text-input-focus:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-soft}"
    borderColor: "{colors.focus-halo}"
    rounded: "{rounded.sm}"
    shadow: "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6)"
  select-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-soft}"
    borderColor: "{colors.border-input}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.xl}"
    height: 34px
    shadow: "inset 0 1px 1px rgba(0, 0, 0, 0.075)"
  form-label:
    textColor: "{colors.ink-body}"
    typography: "{typography.body-strong}"
    marginBottom: "{spacing.xs}"
  alert-plate:
    backgroundColor: "{colors.surface-danger}"
    textColor: "{colors.danger}"
    borderColor: "#ebccd1"
    rounded: "{rounded.sm}"
    padding: "{spacing.2xl}"
    marginBottom: "{spacing.3xl}"
  card-panel:
    backgroundColor: "{colors.canvas}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.sm}"
    shadow: "0 1px 1px rgba(0, 0, 0, 0.05)"
    bodyPadding: "{spacing.2xl}"
    headingBackground: "{colors.canvas-soft}"
    headingPadding: "{spacing.lg} {spacing.2xl}"
  card-well:
    backgroundColor: "{colors.canvas-soft}"
    borderColor: "#e3e3e3"
    rounded: "{rounded.sm}"
    padding: "19px"
    shadow: "inset 0 1px 1px rgba(0, 0, 0, 0.05)"
  specimen-frame:
    backgroundColor: "{colors.canvas}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.sm}"
    padding: "4px"
    transition: "border 0.2s ease-in-out"
  hero-band:
    backgroundColor: "{colors.hairline-soft}"
    textColor: inherit
    headlineTypography: "{typography.hero-statement}"
    leadTypography: "{typography.hero-lead}"
    padding: "{spacing.4xl} {spacing.2xl}"
    paddingDesktop: "{spacing.section} 0"
  aphorism-block:
    typography: "{typography.aphorism}"
    borderLeft: "5px solid {colors.hairline-soft}"
    padding: "{spacing.lg} {spacing.3xl}"
  entry-divider:
    borderBottom: "1px solid {colors.hairline-soft}"
    paddingBottom: "9px"
    margin: "40px 0 {spacing.3xl}"
  void-tooltip:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xxs} {spacing.md}"
    maxWidth: 200px
    opacity: 0.9
  count-badge:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.on-ink}"
    fontSize: 12px
    fontWeight: 700
    rounded: "{rounded.counter}"
    padding: "{spacing.xxs} 7px"
  dropdown-sheet:
    backgroundColor: "{colors.canvas}"
    borderColor: "rgba(0, 0, 0, 0.15)"
    rounded: "{rounded.sm}"
    shadow: "0 6px 12px rgba(0, 0, 0, 0.175)"
    itemTextColor: "{colors.ink-body}"
    itemPadding: "{spacing.xxs} {spacing.3xl}"
  modal-card:
    backgroundColor: "{colors.canvas}"
    borderColor: "rgba(0, 0, 0, 0.2)"
    rounded: "{rounded.md}"
    shadow: "0 3px 9px rgba(0, 0, 0, 0.5)"
    padding: "{spacing.2xl}"
    backdropColor: "{colors.ink}"
    backdropOpacity: 0.5
  breadcrumb-trail:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.muted}"
    separatorColor: "{colors.border-input}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.2xl}"
  ephemeris-table:
    cellPadding: "{spacing.md}"
    rowBorder: "1px solid {colors.hairline}"
    headerBorder: "2px solid {colors.hairline}"
    stripeColor: "{colors.stripe}"
    typography: "{typography.body-md}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    borderTop: "1px solid {colors.hairline-soft}"
    typography: "{typography.body-md}"
    padding: "{spacing.4xl} {spacing.2xl}"
  wordmark:
    textColor: "{colors.ink}"
    fontSize: 18px
    fontWeight: 500
  app-badge-row:
    badgeHeight: 40px
    gap: "{spacing.lg}"
    alignment: center

  # ─── Examples (illustrative) — auto-derived; resolve any TO_FILL markers below ───
  ex-pricing-tier:
    description: "Default reading/tier card. Re-uses card-panel chrome — Paper White surface, Rule Grey hairline, whisper shadow."
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-body}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.sm}"
    padding: "{spacing.2xl}"
  ex-pricing-tier-featured:
    description: "Featured tier — the ceremonial polarity-flip: Void Black fill with Paper text, mirroring the void-tooltip surface."
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    rounded: "{rounded.sm}"
    padding: "{spacing.2xl}"
  ex-product-selector:
    description: "Reading-selector summary card. Re-uses card-well chrome — recessed Pulp surface pressed into the page."
    backgroundColor: "{colors.canvas-soft}"
    borderColor: "#e3e3e3"
    rounded: "{rounded.sm}"
    padding: "19px"
  ex-cart-drawer:
    description: "Order summary — line items separated by Rule Grey hairlines on the Paper canvas (no drawer chrome, just rules)."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.2xl}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: "Shell nav row. List-row chrome — 10 × 15 px padding, hairline-joined rows; active row flips to Void Black."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg} {spacing.2xl}"
  ex-data-table-cell:
    description: "Ephemeris-table th + td chrome. 2 px header rule, 1 px row rules, Lunar Stripe zebra rows."
    headerBackground: "{colors.canvas}"
    headerTypography: "{typography.body-strong}"
    bodyTypography: "{typography.body-md}"
    cellPadding: "{spacing.md}"
    rowBorder: "{colors.hairline}"
    stripe: "{colors.stripe}"
  ex-auth-form-card:
    description: "Sign-in / birth-data card. Re-uses card-well chrome with text-input and bold form-label primitives inside."
    backgroundColor: "{colors.canvas-soft}"
    borderColor: "#e3e3e3"
    rounded: "{rounded.sm}"
    padding: "19px"
  ex-modal-card:
    description: "Modal dialog surface — modal-card chrome over the half-void backdrop."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.2xl}"
  ex-empty-state-card:
    description: "Empty-state plate — specimen-frame chrome around a monochrome line-art illustration with a caption below."
    backgroundColor: "{colors.canvas}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.sm}"
    padding: "{spacing.4xl}"
    captionTypography: "{typography.caption}"
  ex-toast:
    description: "Toast — void-tooltip chrome enlarged: Void Black fill, Paper text, 4 px corners, 90% opacity."
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.2xl}"
    typography: "{typography.body-md}"

---


## Overview

Co–Star is the astrology app that swapped incense for instrumentation — "Hyper-Personalized, Real-Time Horoscopes" computed from NASA JPL data — and its web surface dresses the part: a pure Paper White canvas (`{colors.canvas}` `#ffffff`) carrying Print Ink text (`{colors.ink-body}` `#333333`) at a deliberately small `14 px / 20 px`, structured almost entirely by 1 px grey rules. Founder Banu Guler calls the aesthetic "more like goth than edgy," built against the "touchy, feely, fluffy" astrology mainstream; the interface obliges by refusing decoration. There is no brand accent, no gradient, no hero photograph — the mysticism is carried by words and monochrome line art, and the chrome behaves like a well-set reference book.

Type does the emotional regulation. Headings run a strict six-step encyclopedia ladder (`36 / 30 / 24 / 18 / 14 / 12 px`) at the system's signature half-bold weight 500 with a clipped `1.1` line-height — assertive but never shouting. Body text sits at `14 px` on a `1.42857143` line — smaller than platform norms, which is the point: reading Co–Star feels like leaning into a printed chart. The weight ladder stretches unusually wide (200, 300, 400, 500, 700), with the thin 200 reserved for the `21 px` hero lead — a whisper directly under the statement headline. Letter-spacing is never touched: the stylesheet's only two `letter-spacing` declarations both say `normal`.

Depth is the quietest system in the file. Nothing lifts; things press. Wells, inputs, and pushed buttons all use *inset* shadows — depressions in the paper stock — while outward shadows exist only on true overlays (dropdown sheets, modals). The single ceremonial exception to the white canvas is the void: a solid `#000000` surface with Paper text (the tooltip in the base layer, "Ask the Void" in the brand), used sparingly enough that every polarity flip feels like an occult event.

**Key Characteristics:**
- Paper White `#ffffff` canvas + Print Ink `#333333` text; Void Black `#000000` reserved for ceremonial inversions
- Six-step heading ladder `36 → 12 px`, all weight 500, line-height `1.1` — half-bold is the entire display voice
- Body at `14 px / 20 px` — smaller than average by design; intimacy through print scale
- Five-weight ladder (200 / 300 / 400 / 500 / 700) on a single sans stack; zero letter-spacing anywhere
- Structure by hairline: `#dddddd` working rules, `#eeeeee` whisper rules, `#cccccc` field rules — lines instead of boxes
- Depth pressed into the page: `inset 0 1px 1px rgba(0, 0, 0, 0.05–0.075)` on wells and inputs; outward shadows only on overlays
- Radius vocabulary of barely-there softenings: `3 / 4 / 6 px` (plus the `10 px` counter pill and `50%` chart circle)
- Chroma quarantined: Utility Blue `#337ab7` plumbing plus four alchemical semantic pairs — never brand decoration
- Sentence-case UI copy with terminal punctuation ("Make your own chart."); wordmark set with an en dash — Co–Star

## Colors

### Brand & Accent
- **Void Black** (`{colors.ink}` — `#000000`): The brand's true "color." In the verified layer it fills the tooltip surface and the modal backdrop; in the brand layer it is the wordmark, the line art, and the void the app tells you to ask. It is never a text grey — it is an event.
- **Paper White** (`{colors.canvas}` — `#ffffff`): The other half of the brand. Guler says the product should "feel like paper," and the stylesheet agrees: `body { color: #333; background-color: #fff }` is the whole atmosphere.
- **Utility Blue** (`{colors.link}` — `#337ab7`): The base layer's link and control blue, deepening to **Utility Deep** (`{colors.link-active}` — `#23527c`) on focus/active. Treat it as plumbing — functional link color, progress fill — never as brand accent. Co–Star has no brand accent; that absence is the identity.
- **Focus Halo** (`{colors.focus-halo}` — `#66afe9`): The input focus border, radiating `0 0 8px rgba(102, 175, 233, 0.6)`. The primary glow in an otherwise matte system — its only siblings are the three validation halos (`0 0 6px` in the semantic inks).

### Surface
- **Paper White** (`{colors.canvas}` — `#ffffff`): Default page and card surface. Cards, dropdown sheets, modals, and table cells all share the body's paper — surfaces differentiate by rule, not fill.
- **Vellum** (`{colors.canvas-veil}` — `#f8f8f8`): The navigation bar's near-white, edged with **Veil Rule** (`{colors.hairline-veil}` — `#e7e7e7`). Barely distinguishable from the canvas — the nav is furniture, not fanfare.
- **Pulp** (`{colors.canvas-soft}` — `#f5f5f5`): The recessed grey of wells, panel headings, breadcrumb trails, and code blocks — content pressed slightly into the page.
- **Lunar Stripe** (`{colors.stripe}` — `#f9f9f9`): The faintest surface in the file; zebra striping for ephemeris tables. Visible only in aggregate, like a star field.
- **Whisper Rule** (`{colors.hairline-soft}` — `#eeeeee`): Doubles as the hero band's fill and disabled-input surface — the lightest structural grey.

### Text
- **Print Ink** (`{colors.ink-body}` — `#333333`): Universal body and heading ink. Deliberately not `#000000` — softened black, like ink on stock.
- **Graphite** (`{colors.ink-soft}` — `#555555`): Input and output text — what the user writes back to the oracle.
- **Marginalia Grey** (`{colors.muted}` — `#777777`): Secondary voice — muted text, nav links, heading small-print, the count-badge fill.
- **Ghost Grey** (`{colors.faint}` — `#999999`): Placeholder text. The words that are not yet written.
- **Paper on Void** (`{colors.on-ink}` — `#ffffff`): Text on Void Black surfaces — the polarity flip of the body pairing.

### Semantic
Four calibrated ink-on-wash pairs — an alchemical chart of humors, each a muted, almost medicinal tone rather than a saturated alert:
- **Herbal Green** (`{colors.success}` — `#3c763d`) on **Herbal Wash** (`{colors.surface-success}` — `#dff0d8`): confirmation states; valid-input borders glow `0 0 6px #67b168` on focus.
- **Ochre** (`{colors.warning}` — `#8a6d3b`) on **Parchment Wash** (`{colors.surface-warning}` — `#fcf8e3`): caution states; the wash doubles as the highlight (`mark`) color.
- **Oxblood** (`{colors.danger}` — `#a94442`) on **Rose Wash** (`{colors.surface-danger}` — `#f2dede`): error states — bad birth data, not screaming red.
- **Slate Blue** (`{colors.info}` — `#31708f`) on **Sky Wash** (`{colors.surface-info}` — `#d9edf7`): informational asides.

The base layer also ships saturated contextual variants — green/red/orange button fills, a crimson inline-code accent — and this system excludes them outright: the four muted pairs above are the only sanctioned chroma beyond Utility Blue. No gradients decorate any documented surface either; `linear-gradient` appears in the shipped stylesheet only as the progress bar's 45° `rgba(255, 255, 255, 0.15)` candy-stripe and the carousel controls' black edge scrims — loading and legibility textures, never decoration. A brand this committed to flat ink cannot afford a fade.

## Typography

### Font Family
1. **Helvetica Neue** — fallback: `Helvetica, Arial, sans-serif`. The single system voice: every heading, body paragraph, button, input, and tooltip. Neutral to the point of clinical — the Swiss workhorse playing lab technician to the astrology. Five weights are in play (200 / 300 / 400 / 500 / 700), which is where all the expression lives.
2. **Menlo** — fallback: `Monaco, Consolas, "Courier New", monospace`. The data voice for `code`, `kbd`, and `pre` — `13 px` blocks on Pulp `#f5f5f5` behind a `#cccccc` rule. (The base layer paints inline `code` crimson `#c7254e` on blush `#f9f2f4`; quarantine that with the rest of the contextual chroma — set inline data as Graphite on Pulp instead.) Where the NASA-data posture becomes literal.

The famous serif display voice seen in Co–Star's app and marketing ("elegant serif type," per design press) is loaded by the runtime bundle and is not part of the verified stylesheet layer — see Note on Font Substitutes and Known Gaps.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.hero-statement}` | 63px | 500 | 69.3px (1.1) | normal | Jumbotron/hero headline at ≥ 768px (36px on phones). |
| `{typography.display-xl}` | 36px | 500 | 39.6px (1.1) | normal | h1 — page title, "Make your own chart." scale. |
| `{typography.display-lg}` | 30px | 500 | 33px (1.1) | normal | h2 — major entry headings. |
| `{typography.display-md}` | 24px | 500 | 26.4px (1.1) | normal | h3 — sub-entries, sign names. |
| `{typography.display-sm}` | 18px | 500 | 19.8px (1.1) | normal | h4 — card and panel titles. |
| `{typography.display-xs}` | 14px | 500 | 15.4px (1.1) | normal | h5 — body-size headings; hierarchy by weight alone. |
| `{typography.display-2xs}` | 12px | 500 | 13.2px (1.1) | normal | h6 — the smallest labelled rank. |
| `{typography.hero-lead}` | 21px | 200 | 30px | normal | Hero sub-line — the thin whisper under the statement. |
| `{typography.aphorism}` | 17.5px | 400 | 25px (1.42857143) | normal | Blockquote pull-lines — the blunt oracle voice. |
| `{typography.lead}` | 16px | 300 | 22.4px (1.4) | normal | Lead paragraph; inflates to 21px at ≥ 768px. |
| `{typography.body-md}` | 14px | 400 | 20px (1.42857143) | normal | Default body — the reading voice. |
| `{typography.body-strong}` | 14px | 700 | 20px | normal | Form labels, table headers, inline emphasis. |
| `{typography.caption}` | 12px | 400 | 17px | normal | Small print, tooltip text (85% of parent as `small`). |
| `{typography.caption-mono}` | 13px | 400 | 18.57px (1.42857143) | normal | Menlo data blocks; inline code runs at 90% of parent. |
| `{typography.button-lg}` | 18px | 400 | 24px (1.3333333) | normal | Large CTA label. |
| `{typography.button-md}` | 14px | 400 | 20px | normal | Default button label. |
| `{typography.button-sm}` | 12px | 400 | 18px (1.5) | normal | Compact button label. |

### Principles
- **Weight 500 is the heading voice — never 700.** Every rank from h1 to h6 carries the same half-bold; bold 700 is demoted to labels and table headers. Pushing headings to 700 breaks the clinical calm.
- **The letter-spacing column is a flatline, by design.** The shipped stylesheet declares `letter-spacing` exactly twice, and both say `normal`. Tracking is not part of this voice.
- **Two line-height worlds.** Headings clip at `1.1`; running text breathes at `1.42857143`. The jump between them — dense title, airy prose — is the page rhythm.
- **Small type is the intimacy.** `14 px` body with `12 px` small print reads closer to a printed ephemeris than a marketing site. Resist inflating it; observers consistently note Co–Star's type runs "smaller than average."
- **Thin weights are ceremonial.** 200 exists in exactly one role (the hero lead) and 300 in one more (the lead paragraph). They are the typographic equivalent of the void flip — rare on purpose.
- **Heading small-print** (`small` inside h1–h3) drops to 65% size, weight 400, Marginalia Grey `#777777` — the built-in mechanism for a wry subtitle under a declarative heading.

### Note on Font Substitutes
Helvetica Neue is a licensed face that falls back gracefully: **Helvetica → Arial** ships in the stack itself, and *Inter* or *Roboto* (the substitute a documented Co–Star redesign reached for) are faithful open equivalents — keep weights 200/300/500 available or the hero and heading voices collapse into 400. For Menlo, *Menlo → Monaco → Consolas → Courier New* is the shipped chain; *JetBrains Mono* works as an open stand-in. The brand's serif display layer could not be extracted (bundle-injected, family unverified — the oft-repeated "Akkurat" attribution is also unverified); if you need that press-described "elegant serif" register for hero statements and the wordmark, reach for a quiet transitional serif — *Source Serif 4*, or *Cormorant Garamond* where more romance is wanted — at weight 400, sentence case, untracked, and treat it as a deliberate interpretation, not a documented token. It may dress hero moments only; UI chrome, body text, and forms stay Helvetica Neue.

## Layout

### Spacing System
- **Base rhythm**: not a 4/8 grid — a print-derived control rhythm built on `6 / 12` (button padding), `15 / 30` (column gutters), and `20` (block margins).
- **Tokens**: `{spacing.xxs}` 3 px · `{spacing.xs}` 5 px · `{spacing.sm}` 6 px · `{spacing.md}` 8 px · `{spacing.lg}` 10 px · `{spacing.xl}` 12 px · `{spacing.2xl}` 15 px · `{spacing.3xl}` 20 px · `{spacing.4xl}` 30 px · `{spacing.section}` 48 px.
- **Block cadence**: every text block — paragraphs, lists, tables, blockquotes — carries a `10–20 px` bottom margin; h1–h3 add `20 px` above / `10 px` below, h4–h6 sit at `10 px` both sides. The page reads as stacked typeset paragraphs, not floating cards.
- **Interior padding**: panels `15 px`, wells `19 px` (the one odd number — a recessed surface gets a hair more air), table cells `8 px`, nav links `10px 15px`.
- **Section scale**: hero bands pad `30 px` on phones and `48 px` (`{spacing.section}`) from tablet up.

### Grid & Container
- Centered single container with `15 px` side padding; fixed widths step **750 px → 970 px → 1170 px** at the three breakpoints. Fluid below `768 px`.
- Classic 12-column float grid with a `30 px` gutter (built from `15 px` half-gutters on each column edge).
- The natural Co–Star page is narrow and columnar — one reading column with hairline-separated entries, closer to an encyclopedia page than a dashboard.

### Whitespace Philosophy
Co–Star treats whitespace the way a typesetter does: as leading and margin, not as staging. Nothing floats in dramatic emptiness — instead, modest, even margins (`10 / 15 / 20 px`) repeat down the page like line spacing in a book, and 1 px rules do the separating that other brands buy with `64 px` voids. The restraint keeps the surface quiet enough that a single black tooltip, or one blunt sentence, lands with force.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | The default page; text on paper. |
| Level 1 — Hairline | 1 px solid `{colors.hairline}` / `{colors.hairline-soft}`. | Cards, tables, dividers, nav edge — all working structure. |
| Level 2 — Pressed | `inset 0 1px 1px rgba(0, 0, 0, 0.05)` (wells) · `inset 0 1px 1px rgba(0, 0, 0, 0.075)` (inputs) · `inset 0 3px 5px rgba(0, 0, 0, 0.125)` (active buttons). | Depressions into the paper — fields and pushed states. |
| Level 3 — Whisper lift | `0 1px 1px rgba(0, 0, 0, 0.05)`. | Panel cards — barely off the page. |
| Level 4 — Overlay | `0 6px 12px rgba(0, 0, 0, 0.175)` (dropdown sheet) · `0 3px 9px` to `0 5px 15px rgba(0, 0, 0, 0.5)` (modal) over a `#000000` backdrop at 50% opacity. | True overlays only — the only things allowed to float. |

The shadow philosophy is inverted from the industry default: Co–Star's depth presses *into* the page. Inset shadows outnumber outward ones in the working UI, which is exactly the "tactile richness" of paper Guler describes — a form field is a debossed answer box, an active button physically gives. Outward shadows are quarantined to transient layers, and even the modal's drama comes less from its shadow than from the half-void backdrop behind it.

### Decorative Depth
- The heading small-print pattern (65%, `#777777`) creates typographic depth — two voices on one line — without any surface change.
- `kbd` keys get `inset 0 -1px 0 rgba(0, 0, 0, 0.25)` on a `#333333` fill: a tiny pressed-key skeuomorph in the data voice.
- The close glyph (×) is Void Black at `opacity: 0.2`, sharpened by `text-shadow: 0 1px 0 #fff` — an engraved mark, not a button chrome.
- No decorative glows, no ambient gradients, no layered translucency beyond the tooltip's `0.9` opacity.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Tables, rules, full-bleed bands, list rows. |
| `{rounded.xs}` | 3px | Compact buttons/inputs; `kbd`; inner corners of panel headings. |
| `{rounded.sm}` | 4px | The system default — buttons, inputs, cards, wells, tooltips, dropdown sheets, specimen frames. |
| `{rounded.md}` | 6px | Large buttons/inputs, modal cards, rounded images. |
| `{rounded.counter}` | 10px | The count-badge pill — the only pill in the system. |
| `{rounded.circle}` | 50% | Circular chart figures and avatars (`img-circle`). |

The corner language is a barely-there softening: `3 / 4 / 6 px` reads as square from arm's length, like the rounded corners of a trimmed card deck. No documented component rounds past that — the one true circle (`50%`) belongs to chart geometry, and the counter pill (`10 px`) is the only pill in the working set.

### Photography Geometry
There is no photography in this system — imagery means monochrome line-art plates: encyclopedia-style etchings of constellations, planets, owls, and stones (the press's "encyclopedia-like illustrations"). The verified layer gives them exact framing hardware:
- **Specimen frame** (`{component.specimen-frame}`): `4 px` white mat, 1 px `{colors.hairline}` border, `{rounded.sm}` 4 px corners, caption in Print Ink at `9 px` padding — a museum plate mount. Border transitions `0.2s ease-in-out` (to Utility Blue when the plate is a link target).
- Fluid images: `max-width: 100%; height: auto` — plates scale with the column, never crop.
- `img-rounded` at `{rounded.md}` 6 px; `img-circle` at `{rounded.circle}` 50% for circular chart figures.
- Keep the art single-weight black linework on paper — a color photograph on this canvas would read as a foreign object.

Drawing rules for generated plates (interpretation — stroke-level detail is not in the captures, see Known Gaps): single-weight `1.5–2 px` strokes in pure `{colors.ink}` `#000000`, no fills and no grey tints — shade with stipple dots or fine hatching only. The subject vocabulary is celestial-encyclopedic: constellation dot-and-line figures, planetary and zodiac glyphs (the Unicode set ♈–♓ and ☿ ♀ ♂ ♃ ♄ works as a typographic fallback), engraved hands, eyes, moons, owls, stones, botanicals. Draw on transparent or Paper White ground, size to the reading column, and leave generous internal margin inside the mat.

## Components

> Hover states are deliberately not documented — specs cover Default and Active/Pressed only, per system policy. Variants live as separate `components:` entries in the front matter. Motion values are quoted inline where the stylesheet declares them.

### Buttons

**`button-paper`** — the Co–Star button: paper with a rule around it.
- Background `{colors.canvas}` white, text `{colors.ink-body}` Print Ink, 1 px solid `{colors.border-input}` `#cccccc`, label `{typography.button-md}` (14 px / 400 / 20 px), padding `{spacing.sm} {spacing.xl}` (6 px 12 px), shape `{rounded.sm}` 4 px. Computed height 34 px.
- Active/Pressed in **`button-paper-pressed`**: fill deepens to `#e6e6e6`, border `#adadad`, plus the pressed-in `inset 0 3px 5px rgba(0, 0, 0, 0.125)` — the button physically gives.
- Focus: `outline: 5px auto -webkit-focus-ring-color; outline-offset: -2px` (native ring, kept).
- Disabled: `opacity: 0.65`, `cursor: not-allowed`, shadows stripped.

**`button-paper-lg`** — the emphatic variant, by size not color.
- Same chrome at `{typography.button-lg}` 18 px, padding `10px 16px`, shape `{rounded.md}` 6 px, height 46 px. Emphasis via scale is the monochrome brand's only CTA loudness.

**`button-paper-sm`** — compact utility button.
- Same chrome at `{typography.button-sm}` 12 px, padding `{spacing.xs} {spacing.lg}` (5 px 10 px), shape `{rounded.xs}` 3 px, height 30 px.

**`button-utility`** — the quarantined blue fill.
- Background `{colors.link}` `#337ab7`, text `{colors.on-ink}`, border `#2e6da4`; Active/Pressed deepens to `#286090` / `#204d74` with the same inset press. Base-layer plumbing for confirm actions — never a brand statement, and never adjacent to the void surfaces.

**`text-link`** — inline links.
- `{colors.link}` `#337ab7`, no underline at rest; Active/Focus shifts to `{colors.link-active}` `#23527c` and underlines. In running horoscope text, links whisper — same size, same weight, one hue away.

### Cards & Containers

**`card-panel`** — the encyclopedia entry card.
- Background `{colors.canvas}`, 1 px solid `{colors.hairline}` `#dddddd`, shape `{rounded.sm}` 4 px, whisper shadow `0 1px 1px rgba(0, 0, 0, 0.05)`, body padding `{spacing.2xl}` 15 px. Optional heading strip on `{colors.canvas-soft}` Pulp at `{spacing.lg} {spacing.2xl}` (10 px 15 px) with 3 px inner top corners — a labelled drawer in the archive.

**`card-well`** — the recessed thought.
- Background `{colors.canvas-soft}` `#f5f5f5`, 1 px solid `#e3e3e3`, shape `{rounded.sm}` 4 px, padding `19px`, pressed depth `inset 0 1px 1px rgba(0, 0, 0, 0.05)`. Where `card-panel` sits on the page, `card-well` is pressed into it — use for asides, summaries, quoted chart data.

**`hero-band`** — the statement band.
- Background `{colors.hairline-soft}` `#eeeeee` (a grey breath, not a color moment), padding `{spacing.4xl} {spacing.2xl}` on phones and `{spacing.section}` 48 px vertical from ≥ 768 px (60 px side padding inside a container). Headline in `{typography.hero-statement}` 63 px weight 500; sub-line in `{typography.hero-lead}` 21 px weight **200** — the loudest and thinnest voices in the system, stacked.
- The `#eeeeee` band is the base layer's chrome. The rendered landing page (interpretation — see Known Gaps) sets its statement directly on `{colors.canvas}` Paper White: wordmark, statement, thin lead, then the `app-badge-row` and a line-art plate — no band fill at all. Both variants are sanctioned; the white one is the public face.

**`ephemeris-table`** — data set like planetary tables.
- Cell padding `{spacing.md}` 8 px, rows joined by `1px solid {colors.hairline}` top rules, header anchored by a `2px solid {colors.hairline}` double-weight rule, zebra rows in `{colors.stripe}` `#f9f9f9`, row text `{typography.body-md}`, headers `{typography.body-strong}`. No cell fills, no rounded corners — pure rule-work.

### Inputs & Forms

**`text-input`** — the debossed answer box.
- Background `{colors.canvas}`, text `{colors.ink-soft}` Graphite `#555555`, placeholder `{colors.faint}` Ghost Grey `#999999`, 1 px solid `{colors.border-input}` `#cccccc`, shape `{rounded.sm}` 4 px, padding `{spacing.sm} {spacing.xl}` (6 px 12 px), height 34 px, pressed depth `inset 0 1px 1px rgba(0, 0, 0, 0.075)`.
- Focus in **`text-input-focus`**: border `{colors.focus-halo}` `#66afe9` + halo `0 0 8px rgba(102, 175, 233, 0.6)`, transitioning `border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s`.
- Validation swaps the border and halo to the semantic inks: `#3c763d` / glow `0 0 6px #67b168` (success), `#8a6d3b` / `#c0a16b` (warning), `#a94442` / `0 0 6px #ce8483` (error) — the humors applied to form state.
- Disabled: fill `{colors.hairline-soft}` `#eeeeee`, `cursor: not-allowed`.
- Size variants mirror the buttons: 30 px compact (12 px type, 3 px corners) and 46 px large (18 px type, 6 px corners).

**`form-label`** — labels in `{typography.body-strong}` 700, Print Ink, `{spacing.xs}` 5 px below — the boldest text on any Co–Star screen is the question asking for your birth time.

**`select-input`** — the birth-data picker.
- Identical debossed chrome to `text-input` (34 px, `{colors.border-input}` rule, `{rounded.sm}` corners, inset shadow, Graphite text) as a native select. Date / time / place entry is the brand's one indispensable form — three of these stacked in a `card-well` is the Co–Star sign-up.
- Checkboxes and radios stay native: control inline with a `{typography.body-md}` 14 px / 400 label, `{spacing.lg}` 10 px vertical rhythm between options, the group's question in `form-label` bold above.

**`inline-capture`** — the get-the-app row.
- A `text-input` and a `button-paper` (or `button-utility` confirm) fused into one control: the seam corners square to `0` so the pair shares a single `{rounded.sm}` 4 px outline. Use for the phone-number / email "text me a download link" capture.

**`alert-plate`** — the humor delivered.
- The container for the semantic pairs: wash fill, ink text, 1 px border in a slightly darker wash (`#ebccd1` danger · `#d6e9c6` success · `#faebcc` warning · `#bce8f1` info), `{rounded.sm}` 4 px, padding `{spacing.2xl}` 15 px, `{spacing.3xl}` 20 px below. Links inside carry weight 700 in the same ink. "Bad birth data" arrives as Oxblood on Rose Wash — medicinal, never alarmist.

### Navigation

**`nav-bar`** — furniture, not fanfare.
- 50 px min-height bar on `{colors.canvas-veil}` Vellum `#f8f8f8` with a 1 px `{colors.hairline-veil}` `#e7e7e7` edge — one perceptual step off the paper. The brand block sits at 18 px type in a 15 px-padded 50 px row.
- **`nav-link`** — `{colors.muted}` Marginalia Grey `#777777` at `{typography.body-md}`, padding `{spacing.lg} {spacing.2xl}` (10 px 15 px; 15 px vertical in the desktop bar). Active: `{colors.ink-soft}` `#555555` on a `{colors.hairline-veil}` `#e7e7e7` wash — the current page sits a half-step darker, pressed into the bar. The sparse app precedent (two top-level items) is the spirit: few links, quiet grey, no dividers.
- **`nav-toggle`** — the sub-768 px collapse control: transparent, `9px {spacing.lg}` padding, `{rounded.sm}` 4 px, 1 px `{colors.hairline}` border, carrying three stacked `22 × 2 px` bars in `#888888` with `1 px` radius and `4 px` gaps. The opened sheet stacks the links full-width at `10px 15px` behind a 1 px `{colors.hairline-veil}` top rule (fixed bars cap the sheet at 340 px and scroll); the collapse animates `height 0.35s ease`.

**`breadcrumb-trail`** — path markers on `{colors.canvas-soft}` Pulp, `{rounded.sm}` 4 px, padding `{spacing.md} {spacing.2xl}` (8 px 15 px), items separated by a `/` in `{colors.border-input}` `#cccccc` — a typewritten file path through the zodiac entries (`zodiac-signs / aries-sign`).

**`dropdown-sheet`** — the floating index card.
- Background `{colors.canvas}`, 1 px `rgba(0, 0, 0, 0.15)` border, `{rounded.sm}` 4 px, shadow `0 6px 12px rgba(0, 0, 0, 0.175)`, min-width 160 px. Items in `{colors.ink-body}` at dense `{spacing.xxs} {spacing.3xl}` (3 px 20 px) padding — a tight typeset list, not a menu of pills.
- One override is mandatory: the base layer paints the selected item white on `{colors.link}` `#337ab7` — a chroma-quarantine violation. Re-dress selection as `{colors.canvas-soft}` Pulp with Print Ink text (or the screen's one budgeted void flip).

**`footer`** — the colophon.
- The SPA shell renders the footer client-side; absent overrides it inherits the page itself: `{colors.canvas}` Paper White, `{colors.muted}` Marginalia Grey text at `{typography.body-md}`, opened by a `1px solid {colors.hairline-soft}` rule, padded `{spacing.4xl} {spacing.2xl}`. The footer never inverts — the void is not for boilerplate.
- Contents by convention (client-rendered, unverified): the wordmark in Void Black over a link row — About · FAQ · Press · Terms of Service · Privacy Policy — as Marginalia Grey text-links separated by `{spacing.2xl}` gaps or middots, with social glyphs as ~16 px monochrome line icons, never brand-colored.

### Signature Components

**`void-tooltip`** — the polarity flip; the interface's one black surface.
- Background `{colors.ink}` `#000000` at `opacity: 0.9`, text `{colors.on-ink}` Paper White, `{typography.caption}` 12 px, shape `{rounded.sm}` 4 px, padding `{spacing.xxs} {spacing.md}` (3 px 8 px), max-width 200 px, entering via `opacity 0.15s linear` fade. This tiny component carries the entire "Ask the Void" polarity: white text floating on black, everywhere else black text sitting on white. Scale the same chrome up for toasts and featured cards — but never for whole pages.

**`aphorism-block`** — the blunt-oracle pull quote.
- `{typography.aphorism}` 17.5 px on a 25 px line, padded `{spacing.lg} {spacing.3xl}` (10 px 20 px) behind a `5px solid {colors.hairline-soft}` left rule — the only thick line in the system, reserved for the voice ("Be your own other half."). Attribution line in `{colors.muted}` small print.

**`entry-divider`** — the encyclopedia section rule.
- A heading with `9 px` bottom padding over a `1px solid {colors.hairline-soft}` rule, `40px 0 20px` margins. This heading-plus-hairline unit is how Co–Star's reference pages (zodiac signs, FAQ, readings) chapterize without any card chrome. Free-standing `hr` rules match: 1 px `#eeeeee`, `20 px` margins.

**`count-badge`** — the quiet counter.
- `{colors.muted}` `#777777` fill (not red, not blue — grey), `{colors.on-ink}` text at 12 px weight 700, padding `{spacing.xxs} 7px` (3 px 7 px), shape `{rounded.counter}` 10 px. Even notification counts keep the monochrome vow.

**`modal-card`** — the summoning.
- Background `{colors.canvas}`, 1 px `rgba(0, 0, 0, 0.2)` border, `{rounded.md}` 6 px, shadow `0 3px 9px rgba(0, 0, 0, 0.5)` (deepening to `0 5px 15px` from ≥ 768 px), header/body padding `{spacing.2xl}` 15 px with a `#e5e5e5` header rule, over a `{colors.ink}` backdrop at 50% opacity. Enters by dropping from `translate(0, -25%)` over `transform 0.3s ease-out` — the page dims to half-void and a paper card descends.

**`wordmark`** — the en-dash lockup.
- "Co–Star" set in the system voice at 18 px weight 500, `{colors.ink}` Void Black, never letterspaced — one of the few places full black text is sanctioned. The dash is always an en dash: page titles space it out ("Co – Star", per the shipped `<title>`), running text closes it ("Co–Star"), and the hyphenated "Co-Star" is forbidden everywhere. Nav and footer slots only; the wordmark never inflates into display type.

**`app-badge-row`** — the conversion moment.
- The landing page's primary CTA is not a button — it is the App Store / Google Play badge pair (the shipped shell declares the iOS smart banner: `app-id=1264782561`). Standard black store artwork ~40 px tall, `{spacing.lg}` 10 px gap, centered beneath the hero lead. The badges are pre-rendered artwork and do not count against the void-flip budget — but never seat them adjacent to another `{colors.ink}` surface.

### Examples (illustrative)

> Auto-derived kit-mirror demonstration surfaces (`scripts/derive-examples-block.mjs`). Each `ex-*` entry references brand-native primitives so downstream consumers (`/preview-design`, `/generate-kit`) re-skin the same 10 surfaces consistently. `TO_FILL` markers indicate missing primitives — resolve in the LLM judgment pass.

**`ex-pricing-tier`** — Default reading/tier card. Re-uses card-panel chrome — Paper White surface, Rule Grey hairline, whisper shadow.
- Properties: `backgroundColor`, `textColor`, `borderColor`, `rounded`, `padding`

**`ex-pricing-tier-featured`** — Featured tier — the ceremonial polarity-flip: Void Black fill with Paper text, mirroring the void-tooltip surface.
- Properties: `backgroundColor`, `textColor`, `rounded`, `padding`

**`ex-product-selector`** — Reading-selector summary card. Re-uses card-well chrome — recessed Pulp surface pressed into the page.
- Properties: `backgroundColor`, `borderColor`, `rounded`, `padding`

**`ex-cart-drawer`** — Order summary — line items separated by Rule Grey hairlines on the Paper canvas (no drawer chrome, just rules).
- Properties: `backgroundColor`, `rounded`, `padding`, `item-divider`

**`ex-app-shell-row`** — Shell nav row. List-row chrome — 10 × 15 px padding, hairline-joined rows; active row flips to Void Black.
- Properties: `backgroundColor`, `activeIndicator`, `rounded`, `padding`

**`ex-data-table-cell`** — Ephemeris-table th + td chrome. 2 px header rule, 1 px row rules, Lunar Stripe zebra rows.
- Properties: `headerBackground`, `headerTypography`, `bodyTypography`, `cellPadding`, `rowBorder`, `stripe`

**`ex-auth-form-card`** — Sign-in / birth-data card. Re-uses card-well chrome with text-input and bold form-label primitives inside.
- Properties: `backgroundColor`, `borderColor`, `rounded`, `padding`

**`ex-modal-card`** — Modal dialog surface — modal-card chrome over the half-void backdrop.
- Properties: `backgroundColor`, `rounded`, `padding`

**`ex-empty-state-card`** — Empty-state plate — specimen-frame chrome around a monochrome line-art illustration with a caption below.
- Properties: `backgroundColor`, `borderColor`, `rounded`, `padding`, `captionTypography`

**`ex-toast`** — Toast — void-tooltip chrome enlarged: Void Black fill, Paper text, 4 px corners, 90% opacity.
- Properties: `backgroundColor`, `textColor`, `rounded`, `padding`, `typography`

## Do's and Don'ts

### Do
- Keep the canvas `{colors.canvas}` Paper White with `{colors.ink-body}` `#333333` text — the site reads as a printed chart, and `body { color: #333; background-color: #fff }` IS the atmosphere.
- Set every heading at weight 500 with line-height `1.1`. The half-bold is the clinical-mystic voice; the six-step ladder (36/30/24/18/14/12 px) is the whole display system.
- Keep body at `14 px / 20 px` and small print at `12 px`. The smaller-than-average type is a documented Co–Star trait — intimacy through print scale.
- Carry all structure with hairlines: `{colors.hairline}` `#dddddd` for working rules, `{colors.hairline-soft}` `#eeeeee` for whisper rules and section dividers. Lines, not boxes.
- Press depth into the page — `inset` shadows on wells, inputs, and active buttons. Reserve outward shadows for dropdown sheets and modals only.
- Reserve `{colors.ink}` `#000000` fills for the void surfaces (tooltip, toast, featured flip) and the wordmark. Every polarity flip should feel ceremonial.
- Write UI copy in sentence case with terminal punctuation ("Make your own chart.") and keep the voice blunt and declarative. Set the wordmark with an en dash — Co–Star, never Co-Star.
- Mount illustrations in the `{component.specimen-frame}` (4 px mat, `#dddddd` rule, 4 px corners) and keep them monochrome line art — encyclopedia plates, not photos.

### Don't
- Don't introduce a brand accent. `{colors.link}` `#337ab7` is plumbing (links, progress, confirm buttons), and the four semantic washes are form-state medicine — none of them are decoration. The absence of accent IS the brand.
- Don't add letter-spacing anywhere on the web surface — the shipped stylesheet's only two `letter-spacing` declarations both say `normal`. (The app's occasional all-caps links are a product quirk, not a web token; if you must echo them, keep tracking `normal` and stay at micro-label sizes.)
- Don't bold headings to 700. Weight 700 exists only for labels and table headers; a 700 headline breaks the half-bold calm.
- Don't lift cards with drop shadows — `0 1px 1px rgba(0, 0, 0, 0.05)` is the ceiling for resting surfaces. If it isn't a transient overlay, it doesn't float.
- Don't round past `{rounded.md}` 6 px on rectangles. The 3/4/6 px corners read as trimmed card stock; a 12 px+ radius reads as a consumer app and dissolves the reference-book severity.
- Don't set body text in pure `#000000` — Print Ink `#333333` is the reading color; full black is reserved for the void and the linework.
- Don't add gradients or color washes. The stylesheet's only gradients are the progress bar's white candy-stripe and the carousel's edge scrims — textures and legibility aids, never decoration.
- Don't warm the voice — no exclamation marks, no emoji, no "you're doing great!" The register is blunt, cryptic, faintly nihilistic ("goth, not edgy").

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Phone | < 768px | Fluid container with 15px pads; grid stacks to one column; nav collapses behind the 4px-radius toggle (`height 0.35s ease`); hero pads 30px; hero h1 at 36px |
| Tablet | 768–991px | Container fixes at 750px; nav expands to the 50px horizontal bar; hero h1 inflates 36→63px and band pads to 48px; `.lead` steps 16→21px; modal shadow deepens to `0 5px 15px` |
| Desktop | 992–1199px | Container steps to 970px; grid columns re-flow at md tier |
| Wide | ≥ 1200px | Container caps at 1170px; the type scale does not change — the measure grows, the type does not |

### Touch Targets
- Default controls (buttons and inputs) compute to **34 px** tall (6 px + 6 px padding + 20 px line + 2 px border) — below the WCAG 44 px guideline; use the **46 px** large variants for primary mobile actions.
- Nav links hit 40 px (10 px + 10 px + 20 px) inside a 50 px bar; the collapse toggle is a comfortable ~44 × 34 px hit area padded `9px 10px`.
- List rows and dropdown items rely on full-width hit areas (10 px and 3 px vertical padding respectively) — keep dropdown menus short on touch devices.

### Collapsing Strategy
- **Nav**: horizontal 50 px bar ≥ 768 px; below, links stack vertically behind the toggle and the sheet animates open over `0.35s ease`.
- **Grid**: 12-column floats release to 100%-width stacked blocks below 768 px — the page becomes one long reading column, which is Co–Star's natural state anyway.
- **Definition lists**: the 160 px term column of horizontal definition lists (chart-data pairs; definitions offset 180 px) stacks above its definition below 768 px.
- **Type**: only three sizes respond — hero h1 (36→63 px up), lead (16→21 px up), hero side padding (15→60 px). Body, headings, and captions are breakpoint-invariant: the reading voice never changes register.

### Image Behavior
- All plates are fluid: `max-width: 100%; height: auto` — line art scales with the column and is never cropped or art-directed.
- The 4 px specimen-frame mat and 1 px rule stay fixed at every size; the plate inside scales.
- Circular chart figures hold `{rounded.circle}` 50% at all widths — a natal chart is a circle on every device.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key (`{component.void-tooltip}`, `{component.card-well}`, `{component.entry-divider}`).
2. Use `{token.refs}` everywhere — never inline hex. If a value isn't in the token tables, it probably doesn't belong in this system.
3. Run `npx @google/design.md lint DESIGN.md` after edits — `broken-ref`, `contrast-ratio`, and `orphaned-tokens` warnings flag issues automatically.
4. Add new variants as separate component entries (`-pressed`, `-disabled`, `-focused`) — do not bury them inside prose.
5. Never document hover. Default and Active/Pressed states only; the pressed state should press *in* (`inset 0 3px 5px rgba(0, 0, 0, 0.125)`).
6. Emphasis comes from structure — a hairline rule, a weight-500 heading, 20 px of margin — never from color. If a screen needs to be louder, add a rule, not a hue.
7. Polarity flips (`{colors.ink}` fill + `{colors.on-ink}` text) are budgeted: tooltip, toast, one featured surface per screen at most.
8. Keep type small. If body copy exceeds 14 px it must be one of the three sanctioned large voices: `{typography.lead}`, `{typography.hero-lead}`, or `{typography.aphorism}`.
9. When in doubt about tone: blunter copy and more whitespace before any new chrome. The interface is the quiet part; the words are the product.

## Known Gaps

- costarastrology.com is a client-rendered SPA — the static shell contains only `<div id="app"></div>`, one bundle script, and a single SRI-pinned stylesheet. Everything in this document is grounded in that verified stylesheet layer and the confirmed shell; the runtime bundle injects an additional brand layer (rendered nav labels, footer contents, hero art, any custom faces) that could not be captured from this environment.
- The serif display voice widely visible in Co–Star's app and press coverage ("elegant serif type") is bundle-loaded and its family is unverified — no foundry attribution exists in any credible source, and the commonly repeated "Akkurat" claim is likewise unverified. This document keeps the verified Helvetica Neue system and flags the serif register as interpretation.
- Rendered surface polarity is contested in secondary sources: the founder describes the product as paper-like, while some reviews describe black-background screens. The verified layer is white-canvas (`body { background-color: #fff }`); void-black is documented here as a component-level flip, not a page mode.
- App-only conventions — the all-caps letterspaced links, the Do/Don't daily lists, "Your day at a glance" — are documented product behavior but have no counterpart in the shipped web stylesheet; they are noted for voice, not tokenized.
- Motion beyond the declared transitions (fade `0.15s linear`, input `0.15s ease-in-out`, collapse `0.35s ease`, modal `0.3s ease-out`, frame border `0.2s ease-in-out`, progress `0.6s ease`) — e.g. the app's orbiting-planets loader — is out of scope.
- The confirmed shell dates to a mid-2024 capture; the live site's shell (stylesheet link, analytics tag, SPA architecture) may have changed since.
- Illustration geometry (plate proportions, stroke weights of the line art) is described from convergent press accounts, not measured from captures — treat stroke-level details as interpretation.
