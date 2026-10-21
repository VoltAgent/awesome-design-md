---
version: alpha
name: Jobright Analysis
description: An analysis of Jobright's design language — an AI job-hunting platform built on an energetic spring-mint green against black and white, with pale-mint section bands carrying the page rhythm. Bold condensed Titillium Web display headings pair with a clean Inter UI, and the CTA system runs on high-contrast pill buttons — black pills for primary actions, a mint-green pill for the signature accent. Rounded product-mockup cards, a scrolling black job ticker, and generous whitespace give it a friendly, high-energy startup feel.

colors:
  primary: "#00f0a0"
  on-primary: "#000000"
  ink: "#000000"
  on-dark: "#ffffff"
  canvas: "#ffffff"
  canvas-mint: "#ecffe0"
  muted: "#86909c"
  hairline: "#e5e7eb"
  surface-soft: "#f2f4f5"

typography:
  display:
    fontFamily: Titillium Web
    fontSize: 80px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -1px
  heading-1:
    fontFamily: Titillium Web
    fontSize: 60px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.5px
  heading-2:
    fontFamily: Titillium Web
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: 0
  heading-3:
    fontFamily: Titillium Web
    fontSize: 38px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  heading-4:
    fontFamily: Titillium Web
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 300
    lineHeight: 1.6
    letterSpacing: 0
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  button:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0
  nav-link:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  caption:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  none: 0px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 28px
  pill-nav: 18px
  pill: 36px
  card: 40px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    padding: "{spacing.md}"
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.xl}"
    padding: "{spacing.sm} {spacing.section}"
  button-primary-sm:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.pill-nav}"
    padding: "{spacing.xxs} {spacing.md}"
  button-green:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    borderColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "{spacing.sm} {spacing.xxl}"
  button-dark-square:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.md}"
  hero:
    backgroundColor: "{colors.canvas-mint}"
    textColor: "{colors.ink}"
    typography: "{typography.display}"
    padding: "{spacing.section}"
  video-card:
    backgroundColor: "{colors.canvas}"
    borderColor: "{colors.ink}"
    rounded: "{rounded.md}"
  stat-item:
    backgroundColor: "{colors.canvas-mint}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-3}"
  job-ticker:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    padding: "{spacing.md}"
  feature-band:
    backgroundColor: "{colors.canvas-mint}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-2}"
    padding: "{spacing.section}"
  feature-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  score-ring:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.heading-4}"
    rounded: "{rounded.full}"
    size: 64px
  testimonial-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  testimonial-band-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.heading-4}"
    padding: "{spacing.section}"
  faq-item:
    backgroundColor: "{colors.canvas-mint}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  cta-band:
    backgroundColor: "{colors.canvas-mint}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-2}"
    padding: "{spacing.section}"
  job-search-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.md}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.body-sm}"
    padding: "{spacing.section}"

  # ─── Examples (illustrative) — auto-derived; resolve any TO_FILL markers below ───
  ex-pricing-tier:
    description: "Default Pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface."
    backgroundColor: "{colors.canvas}"
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
    description: "What's Included summary card — re-purposed for SaaS / B2B verticals (NOT a literal product gallery)."
    backgroundColor: "{colors.canvas}"
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
    description: "Default data-table th + td chrome. Header uses caption eyebrow typography; body uses body-sm."
    headerBackground: "{colors.canvas}"
    headerTypography: "{typography.caption}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.sm} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: "Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  ex-modal-card:
    description: "Modal dialog surface — same chrome as feature-card with elevated shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  ex-empty-state-card:
    description: "Empty-state illustration frame."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: "Toast notification surface — feature-card shape + medium shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body-sm}"

---


## Overview

Jobright is the marketing site of an AI job-hunting platform, and its design radiates startup energy. The system is anchored by a single electric accent — a spring-mint green (`{colors.primary}` — #00f0a0) — set against crisp black (`{colors.ink}`) and white (`{colors.canvas}`). The signature move is a pale-mint section band (`{colors.canvas-mint}` — #ecffe0) that carries most of the page: heroes, feature blocks, FAQ, and the closing CTA all sit on this soft green wash, punctuated by full-black bands for the scrolling job ticker and a featured testimonial.

The type system pairs a bold, slightly condensed Titillium Web (`{typography.display}`) for big confident headlines with a clean Inter (`{typography.body-md}`) for UI and body copy. Headlines run large and heavy; body stays light and readable. The overall feel is friendly and high-energy rather than corporate — rounded product-mockup cards, emoji accents, and generous whitespace keep it approachable.

The CTA system is built on high-contrast pill buttons. Primary actions use a **black pill** (`{colors.ink}` fill, white label) at a large 28px radius; the brand's signature accent button is a **mint-green pill** (`{colors.primary}` fill, black label, thin black border) at a rounder 36px. Product features are demonstrated in white mockup cards with pronounced 40px asymmetric corners, floating over the mint bands. Elevation is light — a hairline or a whisper-soft shadow, never heavy blur.

**Key Characteristics:**
- A single electric accent: spring-mint `{colors.primary}` owns the logo, links, the signature green pill, and every highlight — used against black and white with conviction.
- Pale-mint section bands (`{colors.canvas-mint}`) carry the page rhythm, alternating with white and full-black bands.
- Dual pill-button system: black pills (`{rounded.lg}`) for primary CTAs, a mint-green pill (`{rounded.pill}`) for the signature accent action.
- Bold Titillium Web display type (`{typography.display}`) over a light, clean Inter body (`{typography.body-lg}`) — confident headlines, quiet copy.
- Rounded product-mockup cards with a distinctive 40px asymmetric corner (`{rounded.card}`), floating over the mint bands to demo AI features.
- Page rhythm: mint hero → mint stats → white job-hub → black scrolling ticker → alternating mint feature bands → white testimonials → black featured quote → mint FAQ → mint CTA → white footer.

## Colors

Source pages analyzed: the homepage, the job-referral page, the employers page, the about page, and the tnt page. The palette is consistent across all five — a tightly controlled mint / black / white system.

### Brand & Accent
- **Spring Mint** (`{colors.primary}` — #00f0a0): the brand's one electric accent. Colors the logo mark, links, the signature green pill button, score highlights, and inline emphasis.
- **On-Primary** (`{colors.on-primary}` — #000000): black label used on top of the mint-green button, where dark-on-mint reads with maximum punch.

### Surface
- **Canvas** (`{colors.canvas}` — #ffffff): default page and card background.
- **Mint Canvas** (`{colors.canvas-mint}` — #ecffe0): the pale spring-mint band that carries the hero, feature blocks, FAQ, and CTA sections — the system's dominant surface.
- **Soft Surface** (`{colors.surface-soft}` — #f2f4f5): light gray utility fill for inset panels and inputs.
- **Hairline** (`{colors.hairline}` — #e5e7eb): 1px card and divider borders.

### Text
- **Ink** (`{colors.ink}` — #000000): headings, body text, and the fill of every black pill button and dark band.
- **Muted** (`{colors.muted}` — #86909c): secondary text, captions, and footer links.
- **On Dark** (`{colors.on-dark}` — #ffffff): text set on the black ticker and testimonial bands.

## Typography

### Font Family
Two families do the work. **Titillium Web** — a bold, slightly condensed humanist sans — carries every display headline and section title, giving the page its confident, high-energy voice. **Inter** handles all body copy, UI labels, buttons, and captions, keeping dense content clean and legible. The contrast between heavy condensed headlines and light, airy body copy is the system's core typographic tension.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display}` | 80px | 700 | 1.05 | -1px | Largest hero / section headline (Titillium Web) |
| `{typography.heading-1}` | 60px | 700 | 1.1 | -0.5px | Primary section headings (Titillium Web) |
| `{typography.heading-2}` | 48px | 700 | 1.15 | 0 | Feature-band headings (Titillium Web) |
| `{typography.heading-3}` | 38px | 700 | 1.2 | 0 | Stat numbers, sub-headings (Titillium Web) |
| `{typography.heading-4}` | 32px | 600 | 1.25 | 0 | Card titles, quotes (Titillium Web) |
| `{typography.body-lg}` | 18px | 300 | 1.6 | 0 | Lead paragraphs (Inter light) |
| `{typography.body-md}` | 16px | 500 | 1.6 | 0 | Default body copy (Inter) |
| `{typography.body-sm}` | 14px | 500 | 1.5 | 0 | Dense body, ticker, footer (Inter) |
| `{typography.button}` | 16px | 600 | 1 | 0 | Button labels (Inter) |
| `{typography.nav-link}` | 14px | 600 | 1.4 | 0 | Top-nav links (Inter) |
| `{typography.caption}` | 13px | 500 | 1.4 | 0 | Fine print, metadata (Inter) |

### Principles
Headlines are big, heavy, and condensed for maximum confidence; body copy stays light (Inter 300) and roomy. The pairing lets marketing headlines shout while product detail stays quiet and scannable.

### Note on Font Substitutes
Both Titillium Web and Inter are open-source Google fonts — use them directly. If a fallback is needed, Titillium Web degrades to a condensed sans (e.g. "Arial Narrow", system-ui) and Inter to Helvetica/Arial with no metric adjustment.

## Layout

### Spacing System
- **Base unit**: 8px.
- **Tokens (front matter)**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- Feature cards sit at `{spacing.lg}`; full-width bands breathe at `{spacing.section}`; the large primary pill uses a wide `{spacing.sm} {spacing.section}` padding.

### Grid & Container
Content is centered in a ~1200px container (the dominant breakpoint in a wide 1600→575px ladder). Feature blocks run as two-column rows — copy + CTA on one side, a product-mockup card on the other — alternating sides down the page and collapsing to stacked single column on narrow screens. Testimonials run 3-up; the footer job-search bar runs as a single horizontal control row.

### Whitespace Philosophy
Whitespace is generous and band-driven. The page groups content by alternating full-width color bands — pale mint for marketing sections, white for neutral content, full black for the ticker and featured quote — with roomy vertical padding that keeps the high-energy type from feeling crowded.

### Responsive Strategy

#### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 576px | Single column; nav → hamburger; feature rows stack; pills go full-width |
| Tablet | 576–991px | Two-column feature rows collapse toward stacked; testimonials drop to 1–2 up |
| Laptop | 992–1199px | Multi-column grids intact; tightened gutters |
| Desktop | ≥ 1200px | Full layout; centered ~1200px column; full-bleed bands |

#### Touch Targets
The primary (`{component.button-primary}`) and green (`{component.button-green}`) pills carry ample padding for a comfortable ≥44px tap height. Nav collapses to a hamburger under 768px while keeping the black "Join Now" pill visible.

#### Collapsing Strategy
The top nav collapses to a hamburger under 768px, keeping the black CTA pill. Two-column feature rows stack image-below-copy; the 3-up testimonial grid reflows to 1–2 up; the footer job-search bar wraps its select controls. The full-width mint and black bands stay full-bleed at every width.

#### Image Behavior
Product-mockup imagery sits inside rounded white cards (`{rounded.card}` / `{rounded.md}`), floating over the mint bands with a soft shadow. The hero leads with a rounded video card. Avatars and score rings are circular (`{rounded.full}`). Images lazy-load below the fold; the job ticker scrolls as a continuous marquee.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | 1px `{colors.hairline}` border or none | Bands, list rows, inputs |
| 1 — Hairline | `rgba(0,0,0,0.5)` 0px 0px 0px 0.5px inset | Bordered chips and outlined controls |
| 2 — Soft float | whisper-soft drop shadow | Product-mockup cards floating over mint bands |

Elevation is deliberately light — the design relies on color-band contrast and rounded card shapes rather than heavy shadow. Depth comes from the mockup cards lifting off the mint bands and the full-black bands punctuating the page.

### Decorative Depth
There is no gradient system; depth is band-and-card based. Playful accents — emoji, a pink heart, hand-drawn illustration marks — add lightweight texture, and the scrolling black job ticker adds motion-based depth between static sections.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.sm}` | 12px | Square dark button, small chips, inputs |
| `{rounded.md}` | 16px | Cards, tab lists, video card |
| `{rounded.lg}` | 24px | Testimonial and content cards |
| `{rounded.lg}` | 28px | Primary black CTA pill (large) |
| `{rounded.pill-nav}` | 18px | Compact nav pill button |
| `{rounded.pill}` | 36px | Signature mint-green pill button |
| `{rounded.card}` | 40px | Product-mockup feature cards (asymmetric 0/40/40 corner) |
| `{rounded.full}` | 9999px | Avatars, score rings, footer search bar |

### Photography Geometry
Product mockups sit inside rounded white cards at 16–40px corners (`{rounded.md}` / `{rounded.card}`), often with one asymmetric sharp corner for a distinctive silhouette. Avatars and circular score rings are fully round (`{rounded.full}`). The hero video is a rounded card (`{rounded.md}`).

## Components

### Buttons

**`button-primary`** — the large black pill CTA ("Try For Free", "Find My Matches", "Start Autofilling")
- Background `{colors.ink}`, white label `{colors.on-dark}`, type `{typography.button}`, rounded `{rounded.lg}`, wide padding `{spacing.sm} {spacing.section}`.

**`button-primary-sm`** — the compact black nav pill ("Join Now")
- Background `{colors.ink}`, white label `{colors.on-dark}`, type `{typography.nav-link}`, rounded `{rounded.pill-nav}`, padding `{spacing.xxs} {spacing.md}`.

**`button-green`** — the signature mint-green pill ("Try For Free" on the closing CTA)
- Background `{colors.primary}`, black label `{colors.on-primary}`, 1px black border `{colors.ink}`, type `{typography.button}`, rounded `{rounded.pill}`, padding `{spacing.sm} {spacing.xxl}`.

**`button-dark-square`** — a squarer black utility button
- Background `{colors.ink}`, white label `{colors.on-dark}`, type `{typography.button}`, rounded `{rounded.sm}`, padding `{spacing.sm} {spacing.md}`.

### Cards & Containers

**`feature-card`** — the white product-mockup card demoing an AI feature
- Background `{colors.canvas}`, type `{typography.body-md}`, rounded `{rounded.card}` (40px, with one asymmetric sharp corner), padding `{spacing.lg}`, floating on a soft shadow over the mint band.

**`video-card`** — the rounded hero video frame
- Background `{colors.canvas}`, 1px `{colors.ink}` border, rounded `{rounded.md}`.

**`testimonial-card`** — a user-love quote card
- Background `{colors.canvas}`, 1px `{colors.hairline}` border, rounded `{rounded.lg}`, padding `{spacing.lg}`, with an avatar, name, and quote.

**`score-ring`** — the circular AI-match score indicator
- White surface `{colors.canvas}`, mint value `{colors.primary}` in `{typography.heading-4}`, rounded `{rounded.full}`, size 64px.

### Inputs & Forms

**`text-input`** — search and form fields
- Background `{colors.canvas}`, 1px `{colors.hairline}` border, text `{colors.ink}`, type `{typography.body-md}`, rounded `{rounded.sm}`, padding `{spacing.sm} {spacing.md}`.

**`job-search-bar`** — the footer job-search control row
- White pill `{colors.canvas}`, 1px `{colors.hairline}` border, rounded `{rounded.full}`, padding `{spacing.xs} {spacing.md}`, holding Work Model / Location / Experience select controls and a submit.

### Navigation

**`nav-bar`** — top navigation (desktop)
- Background `{colors.canvas}`, links `{colors.ink}` in `{typography.nav-link}`, padding `{spacing.md}`. Logo left, link cluster center, "Sign In" plus a persistent black `{component.button-primary-sm}` "Join Now" pill right. Collapses to a hamburger under 768px.

**`footer`** — the site footer
- Background `{colors.canvas}`, muted `{colors.muted}` links in `{typography.body-sm}`, padding `{spacing.section}`. Multi-column link groups, logo, social icons, and the `{component.job-search-bar}` above it.

### Signature Components

**`hero`** — the pale-mint hero band
- Background `{colors.canvas-mint}`, black display headline `{typography.display}`, padding `{spacing.section}`, with a rounded `{component.video-card}` and a black `{component.button-primary}`.

**`stat-item`** — a trust statistic (2,000,000 users, 80%, No.1 Choice)
- On the mint band `{colors.canvas-mint}`, big black number `{typography.heading-3}` over a caption, with a small line icon.

**`job-ticker`** — the scrolling black job-listing marquee
- Full-width black band `{colors.ink}`, white text `{colors.on-dark}` in `{typography.body-sm}`, padding `{spacing.md}`, with continuously scrolling job titles and mint Jobright marks.

**`feature-band`** — an AI-feature section on the mint wash
- Background `{colors.canvas-mint}`, black headline `{typography.heading-2}`, padding `{spacing.section}`; copy + a black `{component.button-primary}` on one side, a `{component.feature-card}` mockup on the other.

**`testimonial-band-dark`** — the featured black testimonial band
- Background `{colors.ink}`, white quote `{colors.on-dark}` in `{typography.heading-4}`, padding `{spacing.section}`, with an author avatar and title.

**`faq-item`** — a question accordion row
- On the mint band `{colors.canvas-mint}`, 1px `{colors.hairline}` divider, question `{colors.ink}` in `{typography.body-md}`, padding `{spacing.md}`, with a plus/expand toggle.

**`cta-band`** — the closing "Let Jobright Take You to..." band
- Background `{colors.canvas-mint}`, black headline `{typography.heading-2}`, padding `{spacing.section}`, with a `{component.button-green}` and a hand-drawn illustration.

### Examples (illustrative)

> Auto-derived kit-mirror demonstration surfaces (`scripts/derive-examples-block.mjs`). Each `ex-*` entry references brand-native primitives so downstream consumers (`/preview-design`, `/generate-kit`) re-skin the same 10 surfaces consistently. `TO_FILL` markers indicate missing primitives — resolve in the LLM judgment pass.

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
- Reserve `{colors.primary}` for the logo, links, the signature green pill, and highlights — the one electric accent that carries the brand.
- Carry section rhythm on the pale-mint band (`{colors.canvas-mint}`), alternating with white and full-black bands.
- Use black pills (`{rounded.lg}`) for primary CTAs and the mint-green pill (`{rounded.pill}`) for the one signature accent action.
- Pair heavy Titillium Web headlines (`{typography.display}`) with light Inter body (`{typography.body-lg}`) for confident-yet-quiet hierarchy.
- Float product-mockup cards (`{rounded.card}`) on soft shadows over the mint bands to demo AI features.
- Keep buttons pill-shaped and high-contrast — black-on-mint or white-on-black.

### Don't
- Don't introduce the product-UI tag/score palette (Ant-style pastels) as brand chrome — the marketing system is mint, black, and white only.
- Don't fill a primary CTA with `{colors.primary}` green as the default — the everyday primary is the black pill; green is the one accent pill.
- Don't set body copy in Titillium Web or headlines in Inter — the display/UI font roles are fixed.
- Don't put heavy shadows on cards — elevation is a hairline or a whisper-soft float.
- Don't cool or blue-shift the mint bands — the section wash is warm spring-mint `{colors.canvas-mint}`.
- Don't square off the pills or the mockup cards — the rounded pill + 40px card silhouette is core to the friendly feel.
