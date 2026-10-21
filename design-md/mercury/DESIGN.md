---
version: alpha
name: Mercury Analysis
description: An analysis of Mercury's design language — a fintech system that moves between a deep ink-violet night world on the homepage and a pale, near-white light world on its product and pricing pages, held together by one confident indigo action pill, soft translucent secondary pills, gently rounded cards and a quiet custom sans set at unusually light weights.

colors:
  primary: "#5266eb"
  on-primary: "#ffffff"
  periwinkle: "#9cb4e8"
  canvas: "#fbfcfd"
  surface: "#ffffff"
  surface-tint: "#fbfbff"
  lavender: "#edecfb"
  night: "#171721"
  night-raised: "#1e1e2a"
  ink: "#28253b"
  ink-secondary: "#554e7b"
  on-dark: "#ededf3"
  fog: "#c3c3cc"
  slate: "#70707d"

typography:
  display:
    fontFamily: arcadiaDisplay
    fontSize: 52px
    fontWeight: 480
    lineHeight: 1.1
    letterSpacing: 0
  stat:
    fontFamily: arcadiaDisplay
    fontSize: 60px
    fontWeight: 480
    lineHeight: 1.1
    letterSpacing: 0
  heading-1:
    fontFamily: arcadiaDisplay
    fontSize: 42px
    fontWeight: 480
    lineHeight: 1.15
    letterSpacing: 0.42px
  heading-2:
    fontFamily: arcadiaDisplay
    fontSize: 28px
    fontWeight: 480
    lineHeight: 1.2
    letterSpacing: 0.42px
  lead:
    fontFamily: arcadiaDisplay
    fontSize: 24px
    fontWeight: 480
    lineHeight: 1.2
    letterSpacing: 0.48px
  body-lg:
    fontFamily: arcadia
    fontSize: 18px
    fontWeight: 360
    lineHeight: 1.35
    letterSpacing: 0
  body:
    fontFamily: arcadia
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  ui:
    fontFamily: arcadia
    fontSize: 16px
    fontWeight: 420
    lineHeight: 1
    letterSpacing: 0
  ui-sm:
    fontFamily: arcadia
    fontSize: 14px
    fontWeight: 420
    lineHeight: 1
    letterSpacing: 0.07px
  eyebrow:
    fontFamily: arcadia
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.28px
  legal:
    fontFamily: arcadia
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.24px

rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 32px
  pill: 40px
  full: 9999px

spacing:
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  huge: 40px
  section: 80px
  section-lg: 128px

components:
  # ─── Brand-native components (extracted) ───
  nav-bar:
    backgroundColor: "{colors.night}"
    textColor: "{colors.on-dark}"
    typography: "{typography.ui}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
    height: 72px

  nav-link:
    textColor: "{colors.on-dark}"
    typography: "{typography.ui}"
    rounded: "{rounded.pill}"
    padding: "0px 20px"
    height: 40px

  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.ui}"
    rounded: "{rounded.xl}"
    padding: "0px 20px"
    height: 40px

  button-glass-dark:
    backgroundColor: "rgba(175, 178, 206, 0.2)"
    textColor: "{colors.on-dark}"
    typography: "{typography.ui}"
    rounded: "{rounded.pill}"
    padding: "0px 20px"
    height: 40px

  button-tint-dark:
    backgroundColor: "rgba(156, 180, 232, 0.2)"
    textColor: "{colors.on-dark}"
    typography: "{typography.ui}"
    rounded: "{rounded.pill}"
    padding: "0px 20px"
    height: 40px

  button-tint-light:
    backgroundColor: "rgba(82, 102, 235, 0.1)"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.pill}"
    padding: "0px 20px"
    height: 40px

  button-outline-light:
    backgroundColor: "rgba(112, 115, 147, 0.1)"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.pill}"
    padding: "0px 20px"
    height: 40px

  button-small:
    backgroundColor: "rgba(82, 102, 235, 0.1)"
    textColor: "{colors.ink}"
    typography: "{typography.ui-sm}"
    rounded: "{rounded.pill}"
    padding: "0px 16px"
    height: 32px

  button-icon-round:
    textColor: "{colors.on-dark}"
    rounded: "{rounded.full}"

  text-input:
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.xl}"
    padding: "0px 0px 0px 20px"
    height: 46px

  email-capture:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.full}"

  feature-card-dark:
    backgroundColor: "{colors.night-raised}"
    textColor: "{colors.on-dark}"
    typography: "{typography.heading-2}"
    rounded: "{rounded.md}"
    padding: "{spacing.xxl}"

  feature-card-light:
    backgroundColor: "{colors.lavender}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-2}"
    rounded: "{rounded.md}"
    padding: "{spacing.xxl}"

  pricing-card:
    backgroundColor: "{colors.surface-tint}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-2}"
    rounded: "{rounded.md}"

  pricing-tier-column:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"

  toggle-switch:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink-secondary}"
    typography: "{typography.ui}"
    rounded: "{rounded.full}"

  accordion-row:
    textColor: "{colors.ink}"
    typography: "{typography.ui-sm}"
    rounded: "{rounded.none}"
    padding: "10px 0px"

  eyebrow-label:
    textColor: "{colors.ink-secondary}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.none}"

  stat-block:
    textColor: "{colors.on-dark}"
    typography: "{typography.stat}"
    rounded: "{rounded.none}"

  quote-block:
    textColor: "{colors.ink}"
    typography: "{typography.lead}"
    rounded: "{rounded.none}"

  logo-strip:
    textColor: "{colors.on-dark}"
    rounded: "{rounded.none}"

  site-footer:
    backgroundColor: "{colors.night}"
    textColor: "{colors.on-dark}"
    typography: "{typography.legal}"
    rounded: "{rounded.none}"

  # ─── Examples (illustrative, kit-mirror) ───

  ex-pricing-tier:
    description: "Default Pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface."
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.fog}"
    rounded: "{rounded.md}"
    padding: "{spacing.xxl}"
  ex-pricing-tier-featured:
    description: "Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode)."
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.xxl}"
  ex-product-selector:
    description: "What's Included summary card — re-purposed for SaaS / B2B verticals (NOT a literal product gallery)."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-cart-drawer:
    description: "Subscription summary — re-purposed for SaaS / B2B (line items per add-on, not literal cart)."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
    item-divider: "{colors.fog}"
  ex-app-shell-row:
    description: "Sidebar nav row inside the App Shell example. Active state uses brand primary as the indicator."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  ex-data-table-cell:
    description: "Default data-table th + td chrome. Header uses mono-caps eyebrow typography; body uses body-sm."
    headerBackground: "{colors.surface}"
    headerTypography: "{typography.eyebrow}"
    bodyTypography: "{typography.body}"
    cellPadding: "{spacing.sm} {spacing.md}"
    rowBorder: "{colors.fog}"
  ex-auth-form-card:
    description: "Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.xxl}"
  ex-modal-card:
    description: "Modal dialog surface — same chrome as feature-card with elevated shadow."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.xxl}"
  ex-empty-state-card:
    description: "Empty-state illustration frame."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.huge}"
    captionTypography: "{typography.body}"
  ex-toast:
    description: "Toast notification surface — feature-card shape + medium shadow."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body}"

---


## Overview

Mercury feels like a private bank that happens to be a software company: quiet, precise and slightly nocturnal. The homepage lives in a deep ink-violet night (`{colors.night}` — #171721). Headlines are pale lavender-white (`{colors.on-dark}`), cards sit one shade lifted (`{colors.night-raised}`), and product imagery glows softly out of the dark. Move to the product and pricing pages and the whole system flips to day: a near-white canvas (`{colors.canvas}`), deep plum-ink text (`{colors.ink}`) and pale lavender feature cards (`{colors.lavender}`). The nav bar and footer stay in the night colour on every page, so each light page is bracketed in dark.

One colour carries the actions in both worlds: Mercury Indigo (`{colors.primary}` — #5266eb). It fills the "Open account" pill in the nav and hero, the annual-pricing toggle, and the brand accent in plan names. Everything else that is clickable is softer: translucent secondary pills tinted with lavender-grey, periwinkle or a 10% wash of the indigo, all with generous 40px capsule corners. The effect is calm and confident, with one saturated button and everything around it whispering.

Typography is Mercury's own custom family: arcadiaDisplay for headlines and arcadia for text, set at unusually light variable weights (360 for body copy, 420 for UI, 480 for headlines). Nothing on the page is bold in the usual sense. Headlines get presence from size and a hair of extra tracking, not weight.

**Key Characteristics:**
- Two native surface worlds: a dark homepage (`{colors.night}` / `{colors.night-raised}`) and light product pages (`{colors.canvas}` / `{colors.lavender}`), both framed by the night nav and footer.
- A single saturated action colour, `{colors.primary}`, on a `{rounded.xl}` pill.
- Secondary actions as translucent capsules (`{rounded.pill}`) rather than outlines or grey buttons.
- Custom arcadia / arcadiaDisplay type at light variable weights (360–480).
- Softly rounded cards (`{rounded.md}`) with generous `{spacing.xxl}` padding and no shadows.
- Page rhythm: night nav → dark or light hero → alternating card grids → centered quote → closing CTA → night footer.

## Colors

> Source pages analysed: the homepage, the pricing page, and the business-banking product page.

### Brand & Accent
- **Mercury Indigo** (`{colors.primary}` — #5266eb): "Open account" pills, the annual-pricing toggle, the brand accent in plan names ("Plus", "Pro"), and the 10% tint behind light-world secondary pills.
- **On Primary** (`{colors.on-primary}` — #ffffff): labels on indigo.
- **Periwinkle** (`{colors.periwinkle}` — #9cb4e8): used at 20% opacity as the fill of the "Contact sales" pill on dark sections.

### Surface
- **Canvas** (`{colors.canvas}` — #fbfcfd): light page background for the product and pricing pages.
- **Surface** (`{colors.surface}` — #ffffff): tier columns inside the pricing card, and the email-capture field.
- **Surface Tint** (`{colors.surface-tint}` — #fbfbff): the pricing comparison card wrapper, a whisper cooler than white.
- **Lavender** (`{colors.lavender}` — #edecfb): feature and product cards on light pages.
- **Night** (`{colors.night}` — #171721): nav bar, homepage canvas, and footer on every page.
- **Night Raised** (`{colors.night-raised}` — #1e1e2a): feature and spotlight cards on the dark homepage.

### Text
- **Ink** (`{colors.ink}` — #28253b): headlines and body on light pages.
- **Ink Secondary** (`{colors.ink-secondary}` — #554e7b): descriptions, captions and eyebrows on light pages.
- **On Dark** (`{colors.on-dark}` — #ededf3): headlines and primary text on night surfaces.
- **Fog** (`{colors.fog}` — #c3c3cc): secondary text on night surfaces, nav eyebrows, and 1px rules between accordion rows on light pages.
- **Slate** (`{colors.slate}` — #70707d): 1px dividers between list rows on the dark homepage.

## Typography

### Font Family
- **arcadiaDisplay**: Mercury's custom display face for headlines, stats and large quotes, at weight 480 with slight positive tracking at card sizes.
- **arcadia**: the matching text face for body copy (360–400), UI labels and buttons (420), and small uppercase eyebrows (500).

### Hierarchy

| Token | Family | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|---|
| `{typography.stat}` | arcadiaDisplay | 60px | 480 | 1.1 | 0 | Large stat numerals ("300K+") |
| `{typography.display}` | arcadiaDisplay | 52px | 480 | 1.1 | 0 | Hero headlines |
| `{typography.heading-1}` | arcadiaDisplay | 42px | 480 | 1.15 | 0.42px | Section headlines |
| `{typography.heading-2}` | arcadiaDisplay | 28px | 480 | 1.2 | 0.42px | Card titles, plan names |
| `{typography.lead}` | arcadiaDisplay | 24px | 480 | 1.2 | 0.48px | Lead statements, pull quotes |
| `{typography.body-lg}` | arcadia | 18px | 360 | 1.35 | 0 | Card descriptions, intro copy |
| `{typography.body}` | arcadia | 16px | 400 | 1.4 | 0 | Default body copy |
| `{typography.ui}` | arcadia | 16px | 420 | 1 | 0 | Buttons, nav, inputs |
| `{typography.ui-sm}` | arcadia | 14px | 420 | 1 | 0.07px | Small pills, accordion labels |
| `{typography.eyebrow}` | arcadia | 14px | 500 | 1 | 0.28px | Uppercase eyebrows ("COMPARE PLANS") |
| `{typography.legal}` | arcadia | 12px | 400 | 1.4 | 0.24px | Disclaimers, footer fine print |

### Principles
- Light weights everywhere: body at 360, UI at 420, headlines at 480. Hierarchy comes from size and colour.
- Headlines get a touch of positive tracking at card sizes instead of the usual negative tightening.
- Uppercase is reserved for small eyebrows.

### Note on Font Substitutes
arcadia and arcadiaDisplay are proprietary. Inter (variable, used at 350–480) is the closest open-source match for both. Keep the light weights, and add about 0.01em of tracking at display sizes to match arcadiaDisplay's open fit.

## Layout

### Spacing System
- **Base unit**: 8px.
- **Tokens**: `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 20px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px · `{spacing.huge}` 40px · `{spacing.section}` 80px · `{spacing.section-lg}` 128px.
- Cards pad `{spacing.xxl}` and pills pad 20px horizontally. Sections are separated by `{spacing.section}` to `{spacing.section-lg}` of vertical space on every page.

### Grid & Container
- Content is centered in a column of roughly 1100–1200px. Headlines are narrower (~600px) and centered.
- Feature cards run in 2- and 3-up grids. The pricing card is a 3-column comparison table about 900px wide.
- Split sections pair a text column with a product mockup.

### Whitespace Philosophy
Generous vertical space and centered headlines give every section a calm, gallery-like pace. Cards rely on fill colour rather than borders to separate from the canvas.

### Responsive Strategy

#### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Desktop | ≥ 1200px | Full nav with dropdown pills; 3-up grids; split sections side by side |
| Laptop | 1024–1199px | Narrower container; headlines scale down fluidly |
| Tablet | 768–1023px | Grids go 2-up; split sections stack |
| Mobile | < 768px | Nav collapses to a menu; single-column cards; the pricing table becomes stacked tiers |

#### Touch Targets
Pills are 40px tall and the email capture is 46px. On touch devices, pad hit areas to 44px.

#### Collapsing Strategy
- Nav dropdown pills collapse into a menu. The "Open account" pill stays visible.
- Card grids reflow 3 → 2 → 1 columns.
- Headline sizes are fluid and scale with the viewport.
- The email capture stacks the field above the button on narrow screens.

#### Image Behavior
Product mockups and illustrations sit inside rounded cards (`{rounded.md}`) or float on the canvas. Hero photography on the homepage is full-bleed and fades into the night canvas.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | No shadow; separated by fill colour | Canvas, cards, pills |
| 1 — Soft stack | Very faint layered shadow (≈2–9% ink) | Pricing card and product mockups on light pages |
| 2 — Glow | Photography and luminous illustrations on `{colors.night}` | Homepage hero and feature art |

Depth is almost entirely tonal: cards lift by one step of colour, not by shadow. The only shadows are hair-thin, low-opacity stacks under the pricing card and floating product mockups.

### Decorative Depth
The dark homepage uses luminous, softly-lit 3D illustrations (glowing orbs, light trails, fingerprint patterns) that give the night canvas atmosphere without gradients in the UI chrome itself.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Nav, footer, table columns |
| `{rounded.xs}` | 4px | Small tags, checkboxes |
| `{rounded.sm}` | 8px | Images, small controls, selects |
| `{rounded.md}` | 12px | Feature cards, pricing card, regions |
| `{rounded.lg}` | 16px | Larger panels and media frames |
| `{rounded.xl}` | 32px | Primary "Open account" pill, input left edge |
| `{rounded.pill}` | 40px | Secondary and nav pills |
| `{rounded.full}` | 9999px | Round icon buttons, toggles, email capture |

### Photography Geometry
Product screenshots and illustrations sit in `{rounded.md}` or `{rounded.lg}` frames. Hero photography is full-bleed. Customer logos appear as a flat monochrome strip.

## Components

> Only Default states are documented. Variants live as separate `components:` entries.

### Navigation

**`nav-bar`**: a 72px `{colors.night}` bar on every page, with 16px × 32px padding. It holds the wordmark on the left, dropdown `nav-link` pills in the centre, and "Log in" plus a `button-primary` on the right.

**`nav-link`**: transparent 40px pills (`{rounded.pill}`, 0 × 20px padding) in `{colors.on-dark}` `{typography.ui}` with small chevrons.

### Buttons

**`button-primary`**: a `{colors.primary}` pill with a `{colors.on-primary}` `{typography.ui}` label, `{rounded.xl}` corners, 0 × 20px padding and 40px height. Used for "Open account".

**`button-glass-dark`**: a translucent lavender-grey pill (20% fill, with a 1px border at 36%) holding an `{colors.on-dark}` label. Used on the dark hero ("Launch demo").

**`button-tint-dark`**: a periwinkle pill at 20% opacity with an `{colors.on-dark}` label. Used for "Contact sales" on dark sections.

**`button-tint-light`**: an indigo pill at 10% opacity with an `{colors.ink}` label. Used for "Explore demo" and the in-card "Open account" on light pages.

**`button-outline-light`**: a grey-violet pill at 10% opacity with a 1px border at 22% and an `{colors.ink}` label. Used for "Contact sales" on light heroes.

**`button-small`**: a 32px-tall version of `button-tint-light` in `{typography.ui-sm}` with 0 × 16px padding ("Expand all").

**`button-icon-round`**: circular icon controls (`{rounded.full}`) for play/pause and the "+" affordance on spotlight cards.

### Inputs & Forms

**`text-input`**: an email field with `{typography.ui}` text, 20px left padding, 46px height, and `{rounded.xl}` on the left edge only, so it fuses to the button beside it.

**`email-capture`**: the hero sign-up capsule, a `text-input` joined to a `button-primary` inside one rounded-full shell.

**`toggle-switch`**: a `{colors.primary}` pill switch beside an `{colors.ink-secondary}` `{typography.ui}` label ("Annual Pricing (15% off)").

### Cards & Containers

**`feature-card-dark`**: `{colors.night-raised}` fill, `{rounded.md}` corners, `{spacing.xxl}` padding, a `{typography.heading-2}` title in `{colors.on-dark}` and `{colors.fog}` body copy. Used for homepage spotlight and feature cards.

**`feature-card-light`**: the same shape on `{colors.lavender}`, with `{colors.ink}` titles and `{colors.ink-secondary}` `{typography.body-lg}` descriptions. Used for product-platform cards.

**`pricing-card`**: a `{colors.surface-tint}` wrapper with `{rounded.md}` corners and a very faint shadow. It holds a header row with a `eyebrow-label` and `toggle-switch`, then three `pricing-tier-column`s.

**`pricing-tier-column`**: a white column with the plan name in `{typography.heading-2}` (the plan suffix in `{colors.primary}`), the price, a `{colors.ink-secondary}` description, a `button-tint-light` or `button-primary`, and an icon-led feature list.

**`accordion-row`**: a full-width row with a leading icon, a `{typography.ui-sm}` label, a trailing chevron, 10px vertical padding and a 1px `{colors.fog}` rule between rows. Used for plan comparison and FAQs.

### Signature Components

**`eyebrow-label`**: uppercase `{typography.eyebrow}` in `{colors.ink-secondary}` on light pages and `{colors.fog}` on dark ("COMPARE PLANS").

**`stat-block`**: a `{typography.stat}` numeral in `{colors.on-dark}` over a small `{colors.fog}` caption, set in a row of four on the homepage.

**`quote-block`**: a centered pull quote in `{typography.lead}` with attribution below in `{typography.body}`.

**`logo-strip`**: a single row of monochrome customer wordmarks on the night canvas.

**`site-footer`**: a `{colors.night}` band with multi-column link lists in `{colors.fog}`, column heads in `{colors.on-dark}`, and a long block of `{typography.legal}` disclaimers.

### Examples (illustrative)

> Auto-derived kit-mirror demonstration surfaces (`scripts/derive-examples-block.mjs`). Each `ex-*` entry references brand-native primitives so downstream consumers (`/preview-design`, `/generate-kit`) re-skin the same 10 surfaces consistently.

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
- Use `{colors.primary}` for the single most important action on a view, usually "Open account".
- Make secondary actions translucent pills (`{rounded.pill}`): lavender-grey or periwinkle on dark, indigo or grey-violet tints on light.
- Frame light pages with the `{colors.night}` nav and footer.
- Keep type light: `{typography.body-lg}` at 360, UI at 420, headlines at 480.
- Separate cards from the canvas with fill (`{colors.lavender}`, `{colors.night-raised}`) rather than borders or heavy shadows.
- Center section headlines and give sections `{spacing.section}` or more of vertical space.

### Don't
- Don't use more than one solid `{colors.primary}` button in a group. Everything else stays translucent.
- Don't set text in heavy bold weights. The brand never goes above 500.
- Don't use hard outlined buttons or square corners on actions.
- Don't put light-world ink (`{colors.ink}`) on night surfaces or `{colors.on-dark}` on the light canvas.
- Don't add strong drop shadows. Elevation is tonal.
- Don't introduce status greens or oranges into the chrome. They belong to product mockups, not the interface.
