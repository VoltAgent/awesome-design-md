---
version: alpha
name: Sentri-Inspired-design-analysis
description: An inspired interpretation of Sentri's design language — a developer-tools brand built on a deep purple-violet midnight canvas, electric lime accents, and a slightly subversive illustrated personality. The system pairs a custom display sans (chunky, playful, near-condensed) with the open Rubik family for UI copy and Monaco for code, then leans on dark-on-light pricing surfaces, sticker-style mascots, and a single-color CTA hierarchy where black-violet buttons read as the primary action against either polarity.

colors:
  primary: "#150f23"
  ink-deep: "#1f1633"
  on-primary: "#ffffff"
  accent-lime: "#c2ef4e"
  accent-pink: "#fa7faa"
  accent-violet: "#6a5fc1"
  accent-violet-deep: "#422082"
  accent-violet-mid: "#79628c"
  surface-canvas-dark: "#1f1633"
  surface-canvas-light: "#ffffff"
  surface-night: "#150f23"
  surface-press-light: "#f0f0f0"
  surface-press-stronger: "#efefef"
  hairline-violet: "#362d59"
  hairline-cool: "#cfcfdb"
  hairline-cloud: "#e5e7eb"
  ink: "#1f1633"
  ink-press: "#1a1a1a"
  on-dark-muted: "#bdb8c0"
  on-dark-faint: "#3f3849"
  ring-focus: "#9dc1f5"

typography:
  display-hero:
    fontFamily: "Sentri Display, Rubik, system-ui, sans-serif"
    fontSize: 88px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  display-large:
    fontFamily: "Sentri Display, Rubik, system-ui, sans-serif"
    fontSize: 60px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: 0
  heading-xl:
    fontFamily: "Rubik, -apple-system, system-ui, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: 30px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0
  heading-lg:
    fontFamily: "Rubik, -apple-system, system-ui, sans-serif"
    fontSize: 27px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0
  heading-md:
    fontFamily: "Rubik, -apple-system, system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0
  heading-sm:
    fontFamily: "Rubik, -apple-system, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  body-lg:
    fontFamily: "Rubik, -apple-system, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 2.0
    letterSpacing: 0
  body-strong:
    fontFamily: "Rubik, -apple-system, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0
  body-md:
    fontFamily: "Rubik, -apple-system, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  eyebrow:
    fontFamily: "Rubik, -apple-system, system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  button-cap:
    fontFamily: "Rubik, -apple-system, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.14
    letterSpacing: 0.2px
  button-cap-light:
    fontFamily: "Rubik, -apple-system, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.29
    letterSpacing: 0.2px
  caption:
    fontFamily: "Rubik, -apple-system, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0
  micro-cap:
    fontFamily: "Rubik, -apple-system, system-ui, sans-serif"
    fontSize: 10px
    fontWeight: 600
    lineHeight: 1.8
    letterSpacing: 0.25px
  code:
    fontFamily: "Monaco, Menlo, Ubuntu Mono, monospace"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  code-strong:
    fontFamily: "Monaco, Menlo, Ubuntu Mono, monospace"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 10px
  xl: 12px
  xxl: 18px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  section: 96px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-cap}"
    rounded: "{rounded.md}"
    padding: 12px 16px
  button-primary-pressed:
    backgroundColor: "{colors.surface-press-stronger}"
    textColor: "{colors.ink-press}"
    typography: "{typography.button-cap}"
    rounded: "{rounded.md}"
    padding: 12px 16px
  button-inverted:
    backgroundColor: "{colors.on-primary}"
    textColor: "{colors.ink-deep}"
    typography: "{typography.button-cap}"
    rounded: "{rounded.md}"
    padding: 12px 16px
  button-inverted-pressed:
    backgroundColor: "{colors.surface-press-light}"
    textColor: "{colors.ink-press}"
    typography: "{typography.button-cap}"
    rounded: "{rounded.md}"
    padding: 12px 16px
  button-ghost-on-dark:
    backgroundColor: "{colors.on-dark-faint}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-cap}"
    rounded: "{rounded.xl}"
    padding: 8px
  button-violet-token:
    backgroundColor: "{colors.accent-violet-mid}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-cap-light}"
    rounded: "{rounded.xl}"
    padding: 8px 16px
  button-disabled:
    backgroundColor: "{colors.hairline-cloud}"
    textColor: "{colors.on-dark-muted}"
    typography: "{typography.button-cap}"
    rounded: "{rounded.md}"
    padding: 12px 16px
  pill-neutral-dark:
    backgroundColor: "{colors.surface-night}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 4px 8px
  chip-lime-keyword:
    backgroundColor: "{colors.accent-lime}"
    textColor: "{colors.ink-deep}"
    typography: "{typography.display-hero}"
    rounded: "{rounded.xs}"
    padding: 0 12px
  text-input:
    backgroundColor: "{colors.surface-canvas-light}"
    textColor: "{colors.ink-deep}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 8px 12px
  text-input-focused:
    backgroundColor: "{colors.surface-canvas-light}"
    textColor: "{colors.ink-deep}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 8px 12px
  select-violet:
    backgroundColor: "{colors.accent-violet-deep}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 8px 16px
  card-pricing:
    backgroundColor: "{colors.surface-canvas-light}"
    textColor: "{colors.ink-deep}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: 32px
  card-pricing-featured:
    backgroundColor: "{colors.surface-night}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: 32px
  card-feature-dark:
    backgroundColor: "{colors.ink-deep}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.xxl}"
    padding: 32px
  card-spotlight-violet:
    backgroundColor: "{colors.accent-violet-deep}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.xxl}"
    padding: 32px
  code-block:
    backgroundColor: "{colors.surface-night}"
    textColor: "{colors.on-primary}"
    typography: "{typography.code}"
    rounded: "{rounded.md}"
    padding: 16px
  link-on-dark:
    backgroundColor: "{colors.surface-canvas-dark}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 0px
  link-on-light:
    backgroundColor: "{colors.surface-canvas-light}"
    textColor: "{colors.ink-deep}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 0px
  nav-bar-light:
    backgroundColor: "{colors.surface-canvas-light}"
    textColor: "{colors.ink-deep}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 16px 24px
  footer-light:
    backgroundColor: "{colors.surface-canvas-light}"
    textColor: "{colors.ink-deep}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 32px 24px
---

## Overview

Sentri's design language reads like a debugging console wearing a leather jacket. The home and product surfaces sit on a near-black violet midnight (`{colors.surface-canvas-dark}` / `{colors.surface-night}`), strewn with starfield textures and floating sticker-style mascots — astronauts, monsters, traffic cones — that puncture the seriousness of an observability product. Headlines run in a chunky proprietary display sans where the most important keywords are wrapped in lime-green highlight chips (`{colors.accent-lime}`), as if the copy itself has been marked up by a developer redlining their own console output.

The palette is deliberately narrow: deep midnight as the dominant canvas, electric lime as the primary attention-grabber, hot pink (`{colors.accent-pink}`) as a secondary punctuation, and a violet-mid (`{colors.accent-violet-mid}`) for tag chips and hairline strokes. White appears in two roles — as text on dark, and as the canvas for pricing, contact, and content-heavy pages where developers need to scan dense tables. The "single primary CTA" is visually inverted depending on context: filled black-violet (`{colors.primary}`) with white type on light surfaces, or filled white with dark type on dark surfaces. The button always reads as the strongest UI affordance regardless of polarity.

Typography splits cleanly between three families: a custom display sans for hero and section openers (chunky, near-condensed, slightly playful), Rubik for every UI text role (body, captions, eyebrow caps, button labels), and Monaco for code. Buttons and eyebrows almost always run in uppercase with a 0.2px tracking lift to give them the snap of console output.

**Key Characteristics:**
- Two-polarity canvas system: deep violet midnight (`{colors.surface-canvas-dark}`) for marketing hero and product feature pages, white (`{colors.surface-canvas-light}`) for pricing, contact, and dense reference content — the system never tries to blur the two.
- Lime keyword highlight (`{colors.accent-lime}`) treated as a typographic device, not a color swatch — it wraps single words inside the display headline to act as a syntax highlight on the reading flow.
- Sticker illustration system: floating mascot characters with hand-drawn outlines, appearing at section junctions, never inside cards — they create rhythm and personality between dense info blocks.
- Uppercase eyebrow + button caps in `{typography.button-cap}` and `{typography.eyebrow}`, with a consistent 0.2px tracking lift, give the brand its "developer console" cadence.
- Single-primary CTA hierarchy: every page has one filled button reading either `{colors.primary}` on light or `{colors.on-primary}` on dark; outlined and ghost variants are downgraded.
- Card surfaces follow the canvas: dark sections nest dark cards (`{colors.ink-deep}` with subtle hairline) and light sections nest white cards with `{colors.hairline-cloud}` borders — chrome stays consistent, only the polarity flips.
- A pricing-page color rhythm of cream-white tiers with one dark inverted "featured" tier (`{colors.surface-night}`), avoiding the typical accent-bordered featured pattern.

## Colors

> **Source pages:** home (`/welcome/`), product/error-monitoring, contact/enterprise, pricing.

### Brand & Accent
- **Midnight Violet** (`{colors.primary}` — `#150f23`): The system's primary action color and the deepest surface tone. Used for filled primary buttons on light surfaces, code-block backgrounds, and the strongest dark cards.
- **Ink Violet** (`{colors.ink-deep}` — `#1f1633`): Slightly lifted from primary, this is the marketing hero canvas and the default body-text color on light surfaces — a single token doing double duty as background and ink.
- **Electric Lime** (`{colors.accent-lime}` — `#c2ef4e`): The signature highlight color. Wrapped around individual headline keywords as a syntax-highlight chip (`{rounded.xs}` corner, no padding-y, 12px padding-x). Also used as the squiggly footer divider stroke. Never a button background.
- **Hot Pink** (`{colors.accent-pink}` — `#fa7faa`): Secondary punctuation color used for sticker outlines, chart points, and supporting accents — never on buttons, never on type at body size.
- **Violet Link** (`{colors.accent-violet}` — `#6a5fc1`): Inline link color when emphasis is needed beyond underline.
- **Deep Violet** (`{colors.accent-violet-deep}` — `#422082`): The select-dropdown fill on contact forms; also used on spotlight cards inside dark sections.
- **Mid Violet** (`{colors.accent-violet-mid}` — `#79628c`): Tag-chip fill and faint accent on dark surfaces.

### Surface
- **Dark Canvas** (`{colors.surface-canvas-dark}` — `#1f1633`): Hero, product, and feature-page background. Carries the deepest atmospheric weight.
- **Night** (`{colors.surface-night}` — `#150f23`): Cards on dark canvas, code blocks, and the "featured" pricing tier.
- **Light Canvas** (`{colors.surface-canvas-light}` — `#ffffff`): Pricing, contact, and dense-reference page background.
- **Surface Press Light** (`{colors.surface-press-light}` — `#f0f0f0`) and **Press Stronger** (`{colors.surface-press-stronger}` — `#efefef`): The pressed/active fill of inverted buttons on dark surfaces.
- **Hairline Violet** (`{colors.hairline-violet}` — `#362d59`): 1px borders on dark cards.
- **Hairline Cool** (`{colors.hairline-cool}` — `#cfcfdb`): 1px borders on text inputs and form fields.
- **Hairline Cloud** (`{colors.hairline-cloud}` — `#e5e7eb`): Pricing-table dividers and pricing-card borders on light canvas.

### Text
- **On Primary** (`{colors.on-primary}` — `#ffffff`): All text on dark canvas, all CTA labels on filled dark buttons.
- **Ink** (`{colors.ink}` — `#1f1633`): Body text on light canvas; identical hex to the dark canvas, repurposed as type.
- **Ink Press** (`{colors.ink-press}` — `#1a1a1a`): Reserved for the pressed/active state of inverted buttons.
- **On Dark Muted** (`{colors.on-dark-muted}` — `rgba(255,255,255,0.72)`): Secondary text, captions, and table cell values on dark canvas.
- **On Dark Faint** (`{colors.on-dark-faint}` — `rgba(255,255,255,0.18)`): Translucent surface-on-dark — used for ghost button fills and dimmed nav items.

### Semantic
- **Focus Ring** (`{colors.ring-focus}` — `rgba(59,130,246,0.5)`): Translucent blue focus ring — the only blue in the system, reserved for keyboard focus on form fields.

## Typography

### Font Family

The display tier is a proprietary geometric sans with chunky, near-condensed proportions and a slightly subversive personality (closing apertures, optical-stress letterforms). When unavailable, fall back to **Rubik** at heavier weights for visual continuity.

The UI tier is **Rubik** — an open-source Hebrew/Latin sans on Google Fonts — with system fallbacks (`-apple-system, system-ui, Segoe UI, Helvetica, Arial`). Rubik handles every body, caption, button, and eyebrow role.

The code tier is **Monaco** with Menlo and Ubuntu Mono fallbacks — used in code blocks, install snippets, and inline tokens.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-hero}` | 88px | 700 | 1.2 | 0 | Marketing hero headline (single line of attention) |
| `{typography.display-large}` | 60px | 500 | 1.1 | 0 | Section openers on dark surfaces |
| `{typography.heading-xl}` | 30px | 500 | 1.2 | 0 | Page titles on light surfaces (e.g., "Pricing plans for dev teams of all sizes") |
| `{typography.heading-lg}` | 27px | 500 | 1.25 | 0 | Sub-section headings, large card titles |
| `{typography.heading-md}` | 24px | 500 | 1.25 | 0 | Card titles, in-page section headings |
| `{typography.heading-sm}` | 20px | 600 | 1.25 | 0 | Compact card title, list-group title |
| `{typography.body-lg}` | 16px | 400 | 2.0 | 0 | Marketing-paragraph body — the airy, two-line-leading variant used in hero subtext |
| `{typography.body-strong}` | 16px | 600 | 1.5 | 0 | Emphasized body run, lead sentence |
| `{typography.body-md}` | 16px | 500 | 1.5 | 0 | Default UI body, table cells, form labels |
| `{typography.eyebrow}` | 15px | 500 | 1.4 | 0 | Section eyebrow above large headings, all-caps |
| `{typography.button-cap}` | 14px | 700 | 1.14 | 0.2px | Filled button labels (uppercase) |
| `{typography.button-cap-light}` | 14px | 500 | 1.29 | 0.2px | Ghost / outline button labels (uppercase) |
| `{typography.caption}` | 14px | 400 | 1.43 | 0 | Footer text, fine print, helper copy |
| `{typography.micro-cap}` | 10px | 600 | 1.8 | 0.25px | Status labels, badge text, micro-eyebrow |
| `{typography.code}` | 16px | 400 | 1.5 | 0 | Code block content |
| `{typography.code-strong}` | 16px | 700 | 1.5 | 0 | Highlighted code keyword |

### Principles
- **Two leading worlds.** Marketing copy uses 2.0 line-height on `{typography.body-lg}` — extremely airy, generous breathing room. Functional UI copy uses 1.5 line-height on `{typography.body-md}` — denser, closer to console output. The choice is deliberate: marketing reads like prose, the product reads like a log.
- **Caps with tracking.** All button labels and eyebrows are uppercase with 0.2px tracking. This is the brand's typographic signature — a console-prompt cadence applied to UI affordances.
- **Headlines as syntax.** The hero display is structured so a single keyword can be wrapped in a `{colors.accent-lime}` highlight chip without disrupting the reading order. Treat the lime chip as a glyph-level decoration, not a separate component.

### Note on Font Substitutes
Rubik is open-source on Google Fonts and is the safe default for everything except the hero display. For the proprietary display sans, suitable open substitutes are **Space Grotesk** (heavier weights), **Archivo** (semi-condensed weights), or **Hubot Sans** with optical-size axis at heavier ends — all carry the same chunky, near-condensed silhouette. Adjust line-height down by 0.05 when substituting, since the proprietary face has tighter leading at large sizes.

## Layout

### Spacing System
- **Base unit**: 8px
- **Tokens**: `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px · `{spacing.section}` 96px
- **Section padding**: `{spacing.section}` 96px between major page bands on desktop, collapsing to `{spacing.xxl}` 32px–48px on mobile.
- **Card internal padding**: `{spacing.xxl}` 32px on pricing cards and large feature cards; `{spacing.lg}` 16px on compact tag/badge groups.
- **Form field padding**: `{spacing.sm}` 8px vertical, `{spacing.md}` 12px horizontal — matches the text-input token directly.

### Grid & Container
- Marketing pages use a wide centered container with generous outer gutters; max width sits around 1152px (one of the extracted breakpoints), with content inside flexing across 12 conceptual columns.
- Pricing splits into a 4-tier card row at desktop, collapsing to 2-up at mid widths and 1-up on mobile.
- The contact form uses a 2-column field layout (first/last name side-by-side) inside a single light-canvas panel.
- Breakpoints stair-step at 1440 → 1152 → 992 → 768 → 640 → 576 — see Responsive Behavior.

### Whitespace Philosophy
The dark canvas absorbs whitespace differently from light. On dark surfaces the brand stretches `{spacing.section}` generously between bands so floating mascots and starfield textures have room to breathe. On light surfaces (pricing, contact) the whitespace tightens — content density takes priority because users are scanning, comparing, and acting. Rule of thumb: hero and feature surfaces are spacious, transactional surfaces are dense.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat on canvas, no shadow | Default surface, dark or light |
| 1 | `box-shadow: rgba(0,0,0,0.08) 0 2px 8px 0` | Inverted buttons on dark canvas (light fill lifting off dark surface) |
| 2 | `box-shadow: rgba(0,0,0,0.1) 0 10px 15px -3px, rgba(0,0,0,0.1) 0 4px 6px -4px` | Floating cards on light canvas, modals |
| 3 | `box-shadow: rgb(21,15,35) 0 0 8px 6px` | Glow halo around primary CTA on dark hero — the dark color itself becomes the shadow, creating a vignette of canvas around the button |
| 4 | `box-shadow: rgba(0,0,0,0.18) 0 0.5rem 1.5rem` | Pressed inverted button on dark canvas |

### Decorative Depth
Sentri's depth doesn't come from drop shadows — it comes from the **starfield texture** on the hero canvas (subtle white-on-violet pinpricks at low opacity), the **floating sticker mascots** (drawn with hand-rendered outlines and saturated fills, layered above the canvas with no shadow), and the **lime squiggly divider** above the footer. These illustrative elements do the work that shadow stacks do in flatter design systems — they tell the eye where one section ends and another begins.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Badges, status pills, lime keyword highlight chips |
| `{rounded.sm}` | 6px | Text inputs, search boxes |
| `{rounded.md}` | 8px | Primary and inverted buttons, code blocks, select dropdowns |
| `{rounded.lg}` | 10px | Generic divs, container blocks |
| `{rounded.xl}` | 12px | Pricing cards, feature cards, navigation pill chrome |
| `{rounded.xxl}` | 18px | Image containers, large hero illustrations |
| `{rounded.full}` | 9999px | Avatars, circular icon buttons |

### Photography Geometry
The site doesn't use traditional photography — it uses **illustrated stickers and product UI screenshots** in roughly equivalent geometric roles. Product UI mocks sit inside `{rounded.xxl}` 18px containers, often tilted slightly off-axis, against the dark canvas with no border. Sticker mascots have no container at all — they are layered directly on canvas, often overlapping section boundaries to break the grid. Avatar treatments (in customer-logo strips) are simple greyscale wordmarks, not photos.

## Components

> **No hover states documented.** Every spec below shows only Default and Pressed/Active states. Variants are formal entries in the front-matter `components:` block.

### Buttons

**`button-primary`** — the dominant CTA across light surfaces.
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button-cap}` (uppercase, 14px / 700, 0.2px tracking), padding `{spacing.md} {spacing.lg}` (12px 16px), rounded `{rounded.md}`. On dark hero surfaces, add the level-3 glow halo for emphasis.
- Pressed state lives in `button-primary-pressed`: background flips to `{colors.surface-press-stronger}`, text to `{colors.ink-press}`. The button effectively swaps polarities on press.

**`button-inverted`** — the dominant CTA on dark canvas; visually identical hierarchy, polarity-flipped.
- Background `{colors.on-primary}` (white), text `{colors.ink-deep}`, same `{typography.button-cap}`, rounded `{rounded.md}`.
- Pressed in `button-inverted-pressed`: background drops to `{colors.surface-press-light}`, text to `{colors.ink-press}`.

**`button-ghost-on-dark`** — secondary CTA on dark canvas (e.g., "Get Demo" beside "Get Started").
- Translucent fill `{colors.on-dark-faint}`, text `{colors.on-primary}`, type `{typography.button-cap}`, padding `{spacing.sm}` (8px), rounded `{rounded.xl}`. The translucent fill lets the canvas texture show through.

**`button-violet-token`** — pill-shaped tag/category button used inline in product navs.
- Background `{colors.accent-violet-mid}`, text `{colors.on-primary}`, type `{typography.button-cap-light}`, padding `{spacing.sm} {spacing.lg}` (8px 16px), rounded `{rounded.xl}`, 1px hairline border in a slightly deeper violet.

**`button-disabled`**
- Background `{colors.hairline-cloud}`, text `{colors.on-dark-muted}`, otherwise identical to `button-primary`.

### Cards & Containers

**`card-pricing`** — the standard tier card on the pricing page.
- Background `{colors.surface-canvas-light}`, text `{colors.ink-deep}`, padding `{spacing.xxl}` 32px, rounded `{rounded.xl}` 12px, 1px `{colors.hairline-cloud}` border. Headline at top in `{typography.heading-md}`, price in `{typography.display-large}`, feature list in `{typography.body-md}`, primary CTA pinned to the bottom of the card.

**`card-pricing-featured`** — the dark inverted "featured" tier (Sentri uses the Business tier as the featured one).
- Background `{colors.surface-night}`, text `{colors.on-primary}`, otherwise identical structure to `card-pricing`. The inversion (rather than an accent-bordered light card) is the brand's distinctive choice — the featured tier reads as the brand's voice, not as a marketing decoration.

**`card-feature-dark`** — large feature-band card on dark surfaces, used to anchor product feature explanations.
- Background `{colors.ink-deep}`, text `{colors.on-primary}`, padding `{spacing.xxl}` 32px, rounded `{rounded.xxl}` 18px. Often holds a UI mock plus a 27px headline plus 16px body.

**`card-spotlight-violet`** — accent feature card with deeper violet fill, used for "Sentry-only" capability bands.
- Background `{colors.accent-violet-deep}`, text `{colors.on-primary}`, padding `{spacing.xxl}`, rounded `{rounded.xxl}`. The deep violet reads as a feature highlight without breaking out of the brand's purple family.

**`code-block`** — code/install snippets.
- Background `{colors.surface-night}`, text `{colors.on-primary}` rendered in `{typography.code}`. Padding `{spacing.lg}` 16px, rounded `{rounded.md}`. On dark canvas the code block is barely lifted from canvas — only the slightly deeper fill differentiates it.

### Inputs & Forms

**`text-input`** — the contact-form first/last/email/etc. fields.
- Background `{colors.surface-canvas-light}`, text `{colors.ink-deep}`, type `{typography.body-md}`, padding `{spacing.sm} {spacing.md}` (8px 12px), rounded `{rounded.sm}` 6px, 1px `{colors.hairline-cool}` border.
- Focus state in `text-input-focused`: same fill, but adds an inset shadow `rgba(0,0,0,0.15) 0 2px 10px inset` to suggest depth pressed inward.

**`select-violet`** — the dropdown variant used inside dark contact panels.
- Background `{colors.accent-violet-deep}`, text `{colors.on-primary}`, type `{typography.body-md}`, padding `{spacing.sm} {spacing.lg}`, rounded `{rounded.md}`. Distinctive because it doesn't mimic a plain text input — it reads as a deliberate brand surface.

### Navigation

**`nav-bar-light`** — the standard top nav across light pages (pricing, contact, docs).
- Background `{colors.surface-canvas-light}`, text `{colors.ink-deep}`, type `{typography.body-md}`. Logo wordmark on the left at ~145×32px, primary nav items mid-bar with dropdown carets, and a `Get Demo` ghost + `Get Started` filled `button-primary` pair on the right. Padding `{spacing.lg} {spacing.xl}` (16px 24px).

**Top Nav (dark variant)** — used on the home page; same structure but inverted polarity, sitting on `{colors.surface-canvas-dark}`. The right-side button becomes `button-inverted`.

**Mobile nav** — collapses to a hamburger toggle below the 768px breakpoint; dropdown carets become full-width accordion items.

### Pills, Badges, and Highlight Chips

**`pill-neutral-dark`** — small status / category pill on dark surfaces.
- Background `{colors.surface-night}`, text `{colors.on-primary}`, type `{typography.caption}` 12px, padding `{spacing.xs} {spacing.sm}` (4px 8px), rounded `{rounded.xs}` 4px.

**`chip-lime-keyword`** — the signature inline highlight wrapping single words inside the hero display headline.
- Background `{colors.accent-lime}`, text `{colors.ink-deep}`, type matches the surrounding `{typography.display-hero}`, rounded `{rounded.xs}` 4px, padding `0 {spacing.md}` (12px horizontal, 0 vertical so the chip hugs the cap-height).

### Signature Components

**Sticker Mascot Layer** — illustrated characters (astronauts, cartoon monsters, traffic cones, debugging avatars) drawn with hand-rendered outlines and saturated `{colors.accent-pink}` / `{colors.accent-lime}` fills. Mascots are placed at section junctions, often overlapping section boundaries by 30–40% of their height, with no container or shadow. They function as decorative section markers and brand personality carriers — never inside cards, never as buttons.

**Lime Squiggly Footer Divider** — a hand-drawn `{colors.accent-lime}` squiggle line, ~3px stroke, sitting above the footer at full container width. Replaces what would otherwise be a 1px hairline divider with a personality-laden flourish.

**Starfield Hero Texture** — a faint white-on-violet pinprick pattern overlaid on the hero canvas at very low opacity. Adds atmospheric depth to the dark canvas without visible decoration. Implemented as a background image, not as repeating CSS.

**Window-Chrome UI Mock** — product UI screenshots framed in `{rounded.xxl}` containers, often tilted ±2–3 degrees off axis, positioned overlapping section boundaries on the dark feature pages. The chrome itself is just a rounded image with a subtle hairline; the content is the actual product UI.

**`link-on-dark`** — inline links in body copy on dark surfaces. Default text is `{colors.on-primary}` rendered in `{typography.body-md}` with a persistent underline; the underline is the entire affordance, no color change. Sits flush in copy with no padding, no rounded corners beyond the inherited `{rounded.xs}`.

**`link-on-light`** — inline links in body copy on light surfaces. Same shape contract as `link-on-dark`, but text is `{colors.ink-deep}`. Used across pricing, contact, and docs surfaces.

**`footer-light`** — site-wide footer on the light-canvas template (pricing, contact, docs).
- Background `{colors.surface-canvas-light}`, text `{colors.ink-deep}`, type `{typography.caption}`, padding `{spacing.xxl} {spacing.xl}` (32px 24px). Topped by the lime squiggly divider — see Signature Components. Holds three to four columns of link groups, social icons in a horizontal strip at the bottom right, and a small legal/copyright row at the very bottom in `{typography.caption}`.

## Do's and Don'ts

### Do
- Reserve `{colors.accent-lime}` for keyword-highlight chips inside display headlines and the footer squiggle divider — never use it as a button background, never as body text.
- Pair every `button-primary` with `{typography.button-cap}` in uppercase with 0.2px tracking — the cadence is part of the brand, not a stylistic option.
- Treat the dark canvas (`{colors.surface-canvas-dark}`) and light canvas (`{colors.surface-canvas-light}`) as two complete worlds — let one own marketing/feature pages and the other own transactional pages, with no half-measures.
- Use sticker mascots to break section boundaries — let them overlap, tilt, and float; constraining them inside cards drains their personality.
- Use `card-pricing-featured` (dark inverted tier) instead of an accent-bordered light tier for the featured pricing column.
- Default body line-height to 1.5 on functional UI surfaces and 2.0 on marketing surfaces — the difference is intentional.

### Don't
- Don't introduce additional accent colors beyond `{colors.accent-lime}` and `{colors.accent-pink}` — adding teal, orange, or yellow dilutes the violet-and-lime signature.
- Don't apply drop shadows to cards on dark canvas — depth comes from texture and illustration, not from light-on-dark shadows that would muddy the violet.
- Don't use `{typography.display-hero}` (88px) for anything except the marketing hero — even sub-pages cap at `{typography.display-large}` (60px).
- Don't put body text in `{colors.accent-lime}` — it's a chip color, not a type color, and breaks contrast at body sizes.
- Don't soften the `{colors.primary}` button to a brand-violet — the near-black is the point; it reads as the most authoritative action regardless of canvas polarity.
- Don't put illustrated mascots inside cards or constrained containers — their job is to break grid, not occupy it.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| 4K / Wide | ≥ 1440px | Full 4-tier pricing row, hero illustration sits beside headline at full scale |
| Desktop | 1152–1440px | Default content max-width sits at 1152px, all 4-tier patterns hold |
| Laptop | 992–1151px | Pricing collapses to 2-up rows, nav remains horizontal |
| Tablet | 768–991px | 2-column feature grids collapse to 1-up; nav still horizontal but compresses |
| Mobile Large | 640–767px | Hamburger nav appears; hero display drops from 88px to ~56px |
| Mobile | 576–639px | Single-column everything; section padding collapses from 96px to 32–48px |
| Small Mobile | 1–575px | Compact mode; sticker mascots drop in size or hide entirely to preserve content priority |

### Touch Targets
- Primary buttons hit a minimum 44×44px on mobile (12px vertical padding × 16px font + line-height = ~44px). Maintains WCAG AAA touch-target spec.
- Pill tags and badges in nav and feature surfaces stay above 32×32px even at small mobile breakpoints; they enlarge if necessary rather than shrink.
- Form fields stay at the 44px minimum height on mobile contact pages.

### Collapsing Strategy
- **Hero display headline** drops from 88px → 60px → 48px across the breakpoint stair; the lime keyword chip preserves padding and corner radius at every step.
- **Pricing tiers** stair-step from 4-up → 2-up → 1-up. The featured dark tier always remains visually distinguished — it never loses its inversion at any breakpoint.
- **Sticker mascots** are progressively de-emphasized: at desktop they overlap section boundaries; at tablet they shift to inline within section padding; at small mobile most are hidden via `display: none` to keep the content scan-able.
- **Top nav** collapses to a hamburger below 768px; the dropdown menu uses the same canvas polarity as the page (dark on hero, light on pricing).
- **Code blocks** preserve 16px Monaco at every breakpoint — they never scale down — but switch to horizontal scroll on overflow rather than wrap.

### Image Behavior
- Product UI mocks scale proportionally; on small mobile they often anchor to one edge with horizontal overflow rather than shrink to illegibility.
- Sticker mascots scale by 50–70% at mobile breakpoints, preserving their personality but ceding screen space to content.
- The lime footer squiggle scales the SVG to container width while keeping stroke width visually consistent.

## Iteration Guide

1. Focus on ONE component at a time. Don't rebuild the system — extend it.
2. Reference component names and tokens directly (`{colors.accent-lime}`, `{button-primary}-pressed`, `{rounded.xxl}`) — do not paraphrase.
3. Run `npx @google/design.md lint DESIGN.md` after edits — `broken-ref`, `contrast-ratio`, and `orphaned-tokens` warnings flag issues automatically.
4. Add new variants as separate component entries (`-pressed`, `-disabled`, `-focused`) — do not bury them inside prose.
5. Default to `{typography.body-md}` for product UI body and `{typography.body-lg}` for marketing prose — the leading difference is intentional and load-bearing.
6. Keep `{colors.accent-lime}` scarce — one lime element per viewport. The signature only works because it's rare.
7. When polarizing a new surface, choose one canvas (`{colors.surface-canvas-dark}` or `{colors.surface-canvas-light}`) and commit to it; don't blend the two on a single page band.
