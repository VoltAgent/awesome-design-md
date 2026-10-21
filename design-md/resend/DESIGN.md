---
version: alpha
name: Resend-design-analysis
description: |
  Resend's marketing surfaces sit on a near-pure black canvas with off-white
  text and a single signature color — the deep editorial-serif Domaine
  Display headline mark — that gives an otherwise utilitarian developer-tool
  brand its print-magazine confidence. The system pairs Domaine Display
  (oversized 76px–96px serif, ss01/ss04/ss11 features on) with ABC Favorit
  for body and Inter for UI. Surfaces rely on subtle 6–9% opacity gradient
  glows, hairline 1px borders made from translucent white, and a strict
  rounded-12px container vocabulary. There is no decorative chrome — just
  type, code, and atmospheric depth.

colors:
  primary: "#fcfdff"
  primary-on: "#000000"
  ink: "#fcfdff"
  body: "rgba(252,253,255,0.86)"
  charcoal: "rgba(252,253,255,0.7)"
  mute: "#a1a4a5"
  ash: "#888e90"
  stone: "#464a4d"
  on-light: "#000000"
  on-light-mute: "rgba(0,0,51,0.7)"
  canvas: "#000000"
  surface-card: "#0a0a0c"
  surface-elevated: "#101012"
  surface-deep: "#06060a"
  hairline: "rgba(255,255,255,0.06)"
  hairline-strong: "rgba(255,255,255,0.14)"
  divider-soft: "rgba(255,255,255,0.04)"
  accent-orange: "#ff801f"
  accent-orange-glow: "rgba(255,89,0,0.22)"
  accent-yellow: "#ffc53d"
  accent-blue: "#3b9eff"
  accent-blue-glow: "rgba(0,117,255,0.34)"
  accent-green: "#11ff99"
  accent-green-glow: "rgba(34,255,153,0.18)"
  accent-red: "#ff2047"
  accent-red-glow: "rgba(255,32,71,0.34)"
  link: "#3b9eff"
  surface-light: "#f1f7fe"

typography:
  display-xxl:
    fontFamily: Domaine Display
    fontSize: 96px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -0.96px
    fontFeature: "ss01, ss04, ss11"
  display-xl:
    fontFamily: Domaine Display
    fontSize: 76.8px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -0.768px
    fontFeature: "ss01, ss04, ss11"
  display-lg:
    fontFamily: ABC Favorit
    fontSize: 56px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -2.8px
    fontFeature: "ss01, ss04, ss11"
  heading-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: -0.4px
  heading-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: -0.3px
  subtitle:
    fontFamily: ABC Favorit
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.3
    fontFeature: "ss01, ss04, ss11"
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
  body-md:
    fontFamily: ABC Favorit
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: -0.8px
    fontFeature: "ss01, ss04, ss11"
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
  button-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
  button-sm:
    fontFamily: ABC Favorit
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
    letterSpacing: 0.35px
    fontFeature: "ss01, ss03, ss04"
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
  caption-emph:
    fontFamily: Helvetica
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.0
  code-md:
    fontFamily: Geist Mono
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.6

rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  xxxl: 48px
  section: 96px
  band: 128px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-on}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 8px 16px
    height: 36px
  button-primary-pressed:
    backgroundColor: "{colors.surface-light}"
    textColor: "{colors.primary-on}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
  button-ghost:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 8px 16px
    height: 36px
  button-outline:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 7px 15px
    height: 36px
  text-input:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 10px 14px
    height: 40px
  hero-stripe:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xxl}"
    rounded: "{rounded.none}"
    padding: 96px 32px
  feature-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  feature-card-bordered:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  pricing-tier:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  pricing-tier-featured:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  code-window:
    backgroundColor: "{colors.surface-deep}"
    textColor: "{colors.body}"
    typography: "{typography.code-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  code-tab:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.charcoal}"
    typography: "{typography.code-md}"
    rounded: "{rounded.sm}"
    padding: 6px 12px
  email-mockup:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 0
  badge-pill:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.body}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: 4px 10px
  status-dot:
    backgroundColor: "{colors.accent-green}"
    rounded: "{rounded.full}"
    size: 8px
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.none}"
    height: 64px
  sub-nav-pill:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.body}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.full}"
    padding: 6px 14px
  contributor-avatar:
    backgroundColor: "{colors.surface-card}"
    rounded: "{rounded.full}"
    size: 32px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.charcoal}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 64px 32px
---

## Overview

Resend looks like a developer tool with the typography of an editorial.
Every page opens on `{colors.canvas}` (`#000000`), and the loudest element on
the canvas is not a button or a brand stamp — it's a 96px Domaine Display
serif headline ("Email for developers", "Email reimagined") with the
`ss01 / ss04 / ss11` stylistic alternates engaged. That single typographic
decision sets the brand tone: confident, considered, slightly literary, and
priced on quality rather than novelty.

The supporting cast is technical. Body copy switches to **ABC Favorit** for
marketing prose and **Inter** for UI labels, while code blocks render in
**Geist Mono** inside `{component.code-window}` shells with hairline traffic-
light dots. Surface depth is built almost entirely from translucent white —
6% borders, 14% strong borders, 4% dividers — over a deep `{colors.surface-deep}`
layer that sits just below the canvas black. There are no gradients painted
across full bands, just **soft atmospheric glows** (orange, blue, green, red,
yellow) anchored at the top of select sections, all at low opacity.

Page rhythm cycles in a single dark register: hero stripe → atmospheric
section → code window section → email mockup section → pricing or feature
grid → black footer. The brand never warms to a light surface; even
secondary email mockups are rendered as compact white cards inside the dark
canvas, framed like print insets in a black-bordered magazine page.

**Key Characteristics:**
- Pure black canvas (`{colors.canvas}` — `#000000`) on every public page; off-white text (`{colors.ink}` — `#fcfdff`) carries the full read.
- A serif-led type system: **Domaine Display** at 76–96px for hero headlines, **ABC Favorit** for marketing body, **Inter** for UI, **Geist Mono** for code.
- Six accent glow colours used only as low-opacity atmospheric washes (`{colors.accent-orange}`, `{colors.accent-blue}`, `{colors.accent-green}`, `{colors.accent-red}`, `{colors.accent-yellow}`) — never as buttons or solid surfaces.
- Strict container vocabulary: `{rounded.lg}` (12px) for feature cards, code wells, and email mockups; `{rounded.md}` (8px) for buttons; `{rounded.full}` for pills and avatars.
- Translucent white borders (`{colors.hairline}` 6% / `{colors.hairline-strong}` 14%) replace shadows entirely — the system has no traditional drop-shadow elevation language.
- `{component.button-primary}` is a small white rectangle with black text — counterintuitive contrast that becomes the page's brightest pixel and works as a single visual anchor.

## Colors

### Brand & Accent
- **Primary White** (`{colors.primary}` — `#fcfdff`): the brand's de facto accent. Reserved for `{component.button-primary}` (white pill on black canvas), Domaine display headlines, and the active text colour. White is the loudest possible colour on this canvas — that's the signature.
- **Primary On** (`{colors.primary-on}` — `#000000`): label colour on top of `{colors.primary}` surfaces. Black text on white pill is the brand's CTA pattern.
- **Surface Light** (`{colors.surface-light}` — `#f1f7fe`): a subtle blue-tinted off-white used as the active/pressed state of `{component.button-primary}`.

### Surface
- **Canvas** (`{colors.canvas}` — `#000000`): the default page background. True black, never near-black.
- **Surface Card** (`{colors.surface-card}` — `#0a0a0c`): the standard inset card surface, just lighter than canvas to register a step up in elevation.
- **Surface Elevated** (`{colors.surface-elevated}` — `#101012`): a second elevation step used on featured pricing tiers and ghost button surfaces.
- **Surface Deep** (`{colors.surface-deep}` — `#06060a`): code window background — slightly cooler and darker than the canvas itself, suggesting depth via temperature.
- **Hairline** (`{colors.hairline}` — `rgba(255,255,255,0.06)`): the soft 1px translucent-white divider used between rows and around feature cards.
- **Hairline Strong** (`{colors.hairline-strong}` — `rgba(255,255,255,0.14)`): the structural 1px border on cards, code wells, and form inputs.
- **Divider Soft** (`{colors.divider-soft}` — `rgba(255,255,255,0.04)`): low-contrast dividers between footer columns.

### Text
- **Ink** (`{colors.ink}` — `#fcfdff`): primary text colour on the dark canvas. Faintly blue-cool to feel like printed paper rather than pure white pop.
- **Body** (`{colors.body}` — `rgba(252,253,255,0.86)`): long-form body text where pure ink would feel too sharp.
- **Charcoal** (`{colors.charcoal}` — `rgba(252,253,255,0.7)`): captions, secondary nav labels.
- **Mute** (`{colors.mute}` — `#a1a4a5`): supporting text and inactive labels.
- **Ash** (`{colors.ash}` — `#888e90`): tertiary text, footer copy.
- **Stone** (`{colors.stone}` — `#464a4d`): disabled foreground.
- **On-Light** (`{colors.on-light}` — `#000000`): label colour inside the rare email-mockup white cards.
- **On-Light Mute** (`{colors.on-light-mute}` — `rgba(0,0,51,0.7)`): secondary text inside email mockups.

### Semantic
- **Accent Orange** (`{colors.accent-orange}` — `#ff801f`) + glow (`{colors.accent-orange-glow}` — `rgba(255,89,0,0.22)`): atmospheric warm wash anchored to "Email reimagined" / customer story sections. Solid orange never appears as a button or surface — only the glow.
- **Accent Yellow** (`{colors.accent-yellow}` — `#ffc53d`): used in inline highlight strokes and "first-class developer experience" key callouts.
- **Accent Blue** (`{colors.accent-blue}` — `#3b9eff`) + glow (`{colors.accent-blue-glow}` — `rgba(0,117,255,0.34)`): inline link colour and the cool atmospheric wash on the "Integrate this weekend" section.
- **Accent Green** (`{colors.accent-green}` — `#11ff99`) + glow (`{colors.accent-green-glow}` — `rgba(34,255,153,0.18)`): success status dots and the "delivery confirmed" feature glow.
- **Accent Red** (`{colors.accent-red}` — `#ff2047`) + glow (`{colors.accent-red-glow}` — `rgba(255,32,71,0.34)`): inline error red and the "reach humans, not spam folders" attention wash.
- **Link** (`{colors.link}` — `#3b9eff`): inline link colour — same as accent blue.

## Typography

### Font Family

Resend ships a four-family stack:

- **Domaine Display** — proprietary editorial serif used exclusively for hero headlines at 76px+, with `ss01 / ss04 / ss11` stylistic sets engaged for a slightly tighter, more print-magazine look.
- **ABC Favorit** — proprietary humanist sans-serif used for marketing body copy, hero subtitles, and pill labels. Carries `ss01 / ss03 / ss04` features for tabular figures and alternate glyphs.
- **Inter** — open-source sans-serif used for UI: button labels, captions, card body text, nav links.
- **Geist Mono** — open-source monospace used in code wells.

When proprietary families cannot be licensed, **Söhne** or **Tiempos Headline** stand in for Domaine Display, and **Geist** or **Inter Tight** can replace ABC Favorit. Inter and Geist Mono are open-source and should be used directly.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xxl}` | 96px | 400 | 1.0 | -0.96px | Home hero ("Email for developers"). One per page. |
| `{typography.display-xl}` | 76.8px | 400 | 1.0 | -0.768px | Section openers ("Email reimagined", "Available today"). |
| `{typography.display-lg}` | 56px | 400 | 1.2 | -2.8px | ABC Favorit display sub-titles. |
| `{typography.heading-md}` | 24px | 500 | 1.5 | -0.4px | Card titles, section sub-titles. |
| `{typography.heading-sm}` | 20px | 500 | 1.3 | -0.3px | List headers. |
| `{typography.subtitle}` | 20px | 400 | 1.3 | 0 | Hero subtitles. |
| `{typography.body-lg}` | 18px | 400 | 1.5 | 0 | Marketing prose. |
| `{typography.body-md}` | 16px | 400 | 1.5 | -0.8px | ABC Favorit body. |
| `{typography.body-sm}` | 14px | 400 | 1.43 | 0 | Captions, metadata. |
| `{typography.button-md}` | 14px | 500 | 1.43 | 0 | Default button label. |
| `{typography.button-sm}` | 14px | 500 | 1.43 | 0.35px | Pill labels, inline links. |
| `{typography.caption}` | 12px | 400 | 1.5 | 0 | Footer disclosure, copyright. |
| `{typography.caption-emph}` | 14px | 600 | 1.0 | 0 | Emphatic small caption — Helvetica fallback. |
| `{typography.code-md}` | 13px | 400 | 1.6 | 0 | Code blocks, inline code. |

### Principles
- Display sizes always run at `lineHeight: 1.0` with negative letter-spacing — the Domaine Display headlines pack into solid typographic blocks rather than open prose lines.
- Body weight stays at 400 across `{typography.body-lg}` and `{typography.body-md}`. The serif/sans family change carries hierarchy, not weight bumps.
- ABC Favorit always runs with `ss01 / ss04 / ss11` engaged; Inter never carries OpenType features. Code in Geist Mono never carries ligatures.
- Inline links use `{typography.button-sm}` with positive letter-spacing (`0.35px`) and ABC Favorit — the small spacing nudge gives interactive prose its precision.

### Note on Font Substitutes

When Domaine Display is unavailable, clamp `lineHeight` to 1.0 explicitly and apply `font-feature-settings: "ss01", "liga"` on the substitute serif to mimic the alternate glyphs. Söhne or Tiempos Headline will read closest. ABC Favorit substitutes (Geist, Inter Tight) typically default to looser tracking — apply -0.5% letter-spacing on body sizes to compensate.

## Layout

### Spacing System
- **Base unit**: 4px, with the working scale on multiples of 4 / 8 / 16.
- **Tokens**: `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px · `{spacing.xxxl}` 48px · `{spacing.section}` 96px · `{spacing.band}` 128px.
- Section padding: `{spacing.section}` (96px) vertical between bands; `{spacing.band}` (128px) on the hero stripe and closing footer transition.
- Card internal padding: `{spacing.xxl}` (32px) on `{component.feature-card}`, `{component.pricing-tier}`, and `{component.code-window}`.

### Grid & Container
- **Max content width** ≈ 1200px on body sections.
- **Feature grid**: 3 columns at desktop, 2 at tablet, 1 at mobile.
- **Pricing**: 3-tier grid centred at desktop; centre tier promotes to `{component.pricing-tier-featured}` (one-step-elevated surface).
- **Code-story splits**: a 2-up split — narrative copy left, `{component.code-window}` right — collapsing to stacked at < 1024px.
- **Email mockup band**: a single white card (640px max width) centred in the dark canvas with generous vertical padding to read like a print magazine inset.

### Whitespace Philosophy
- Whitespace is editorial and generous — full-bleed sections breathe at 96–128px so Domaine Display headlines have room to register at scale.
- Inside cards, padding stays at 32px so feature copy and code wells have a consistent rhythm with the outer grid.
- Hairline `{colors.hairline}` and `{colors.hairline-strong}` carry the role drop shadows would in a brighter system; the dark canvas suppresses traditional shadow depth entirely.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 — flat | No shadow, no border | Default canvas, full-bleed bands. |
| 1 — surface card | `{colors.surface-card}` (`#0a0a0c`) + 1px `{colors.hairline-strong}` | Feature cards, pricing tiers, form inputs. |
| 2 — elevated | `{colors.surface-elevated}` (`#101012`) + 1px `{colors.hairline-strong}` | Featured pricing tier, ghost button. |
| 3 — code well | `{colors.surface-deep}` (`#06060a`) + 1px `{colors.hairline-strong}` | Code window, terminal shells. |
| 4 — atmospheric glow | Low-opacity radial gradient (`{colors.accent-*-glow}`) anchored at section top | Section openers ("Integrate this weekend", "Email reimagined"). |

The system has **no traditional drop shadow language**. Every surface either gets a translucent-white hairline border or sits inside an atmospheric glow. The dark canvas absorbs shadow naturally; surfaces register depth via temperature and luminance shifts rather than blur.

### Decorative Depth
- **Atmospheric section glows** — six accent colours each with a paired glow token (orange, yellow, blue, green, red, plus a deep slate for "everything in your context"). Each section opens with a single radial wash anchored at the top edge of the section, falling off to canvas black within ~600px vertical distance. Never two glows in the same section.
- **Email card insets** — the "Beyond experience" mockup band lifts a single white email card off the black canvas, giving it the only true light-on-dark contrast in the system. The card uses no shadow; the contrast itself is the elevation.
- **Code window traffic lights** — `{component.code-window}` shells include a row of three coloured dots (red `{colors.accent-red}`, yellow `{colors.accent-yellow}`, green `{colors.accent-green}`) at the top — the only place all three semantic colours appear together as solid surfaces.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Hero stripe, full-bleed bands, footer. |
| `{rounded.xs}` | 4px | Inline tags inside code wells. |
| `{rounded.sm}` | 6px | Code tabs, mid-size chips. |
| `{rounded.md}` | 8px | Buttons, form inputs. |
| `{rounded.lg}` | 12px | Feature cards, pricing tiers, code wells, email mockups. |
| `{rounded.xl}` | 16px | Larger feature panels. |
| `{rounded.full}` | 9999px | Pills, status dots, contributor avatars. |

### Photography Geometry
- The system uses almost no photography. Visual interest comes from typography + atmospheric glows + code wells + the white email-card insets.
- When portraits appear (testimonial avatars), they are circular (`{rounded.full}`) at 32px, sitting inline with body copy.
- Email mockup cards run at 4:5 portrait aspect with `{rounded.lg}` corners.

## Components

### Buttons

**`button-primary`** — white CTA
- Background `{colors.primary}`, label `{colors.primary-on}`, type `{typography.button-md}`, padding `8px 16px`, `rounded: {rounded.md}`, height 36px.
- The brightest pixel on the canvas. Used for "Get started", "Sign up", "Try Resend".
- Pressed state lives in `button-primary-pressed` (background `{colors.surface-light}`).

**`button-ghost`** — translucent CTA
- Background `{colors.surface-elevated}`, label `{colors.ink}`, 1px `{colors.hairline-strong}`, type `{typography.button-md}`, `rounded: {rounded.md}`, height 36px.
- Equal-weight secondary action paired with `{component.button-primary}`.

**`button-outline`** — outlined CTA
- Background `{colors.canvas}`, label `{colors.ink}`, 1px `{colors.hairline-strong}`, type `{typography.button-md}`, `rounded: {rounded.md}`, height 36px.
- Tertiary action; appears on its own next to inline links.

### Cards & Containers

**`hero-stripe`** — full-bleed hero
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.display-xxl}` for the headline, padding `96px 32px`, `rounded: {rounded.none}`.
- Used only on the home page hero band; carries the 96px Domaine Display headline and a single `{component.button-primary}` CTA. No photography, no atmospheric glow inside the hero itself — the glow appears on the section that follows.

**`feature-card`** — feature highlight card
- Background `{colors.surface-card}`, text `{colors.ink}`, type `{typography.body-md}`, `rounded: {rounded.lg}`, padding `{spacing.xxl}` (32px).
- Used in the home grid: "Despite emails using React", "So beyond editing", etc. No outline by default — relies on canvas black contrast.

**`feature-card-bordered`** — outlined feature card
- Background `{colors.surface-card}`, text `{colors.ink}`, 1px `{colors.hairline-strong}`, type `{typography.body-md}`, `rounded: {rounded.lg}`, padding `{spacing.xxl}`.
- Used when feature cards sit close together and need explicit separation.

**`pricing-tier`** — pricing tier card
- Background `{colors.surface-card}`, text `{colors.ink}`, 1px `{colors.hairline-strong}`, type `{typography.body-md}`, `rounded: {rounded.lg}`, padding `{spacing.xxl}` (32px).
- Tier name in `{typography.heading-md}` + price in `{typography.display-lg}` (ABC Favorit, 56px).

**`pricing-tier-featured`** — recommended tier
- Background `{colors.surface-elevated}`, text `{colors.ink}`, 1px `{colors.hairline-strong}`, type `{typography.body-md}`, `rounded: {rounded.lg}`, padding `{spacing.xxl}`.
- Centre tier elevated by surface luminance, not by colour.

**`code-window`** — code well
- Background `{colors.surface-deep}`, text `{colors.body}`, type `{typography.code-md}`, 1px `{colors.hairline-strong}`, `rounded: {rounded.lg}`, padding `{spacing.xl}` (24px).
- Includes a 3-dot traffic-light row at top using `{colors.accent-red}` / `{colors.accent-yellow}` / `{colors.accent-green}` for chrome, plus a tab strip below it.

**`code-tab`** — code language tab
- Background `{colors.surface-card}`, text `{colors.charcoal}`, type `{typography.code-md}`, `rounded: {rounded.sm}`, padding `6px 12px`.
- Active tab bumps text to `{colors.ink}` and adds a subtle `{colors.hairline-strong}` underline.

**`email-mockup`** — email-card inset
- Background `{colors.surface-card}` (or the rare `#ffffff` when rendered as a light-island inset), text `{colors.ink}` (or `{colors.on-light}` for white insets), type `{typography.body-md}`, `rounded: {rounded.lg}`, padding 0.
- Used in the "Beyond experience" band to demonstrate rendered email output.

### Inputs & Forms

**`text-input`** — default input
- Background `{colors.surface-card}`, text `{colors.ink}`, type `{typography.body-sm}`, 1px `{colors.hairline-strong}`, `rounded: {rounded.md}`, padding `10px 14px`, height 40px.
- Sign-up and waitlist email fields. Focus state thickens the border to `{colors.ink}` (no separate ring colour).

### Navigation

**`nav-bar`** — top nav (desktop)
- Background `{colors.canvas}`, text `{colors.body}`, type `{typography.button-sm}`, height 64px, single hairline `{colors.hairline}` bottom border.
- Left: wordmark logo. Centre: top-level nav ("Features", "Pricing", "Docs", "Customers"). Right: "Sign in" link + `{component.button-primary}`.

**`nav-bar`** (mobile)
- Same height 64px, collapses centre nav into a hamburger icon. Logo stays left, sign-in CTA stays right.

**`sub-nav-pill`** — pill-style sub-nav
- Pill chips set in a horizontal row above content (e.g. on the customers index), `{component.sub-nav-pill}` styling.

### Signature Components

**`badge-pill`** — neutral pill
- Background `{colors.surface-elevated}`, text `{colors.body}`, type `{typography.caption}`, `rounded: {rounded.full}`, padding `4px 10px`.
- Inline tags ("New", "Beta", "v3.0") inside hero copy and customer story headers.

**`status-dot`** — status indicator
- Background `{colors.accent-green}`, `rounded: {rounded.full}`, 8px square.
- Inline indicator next to "Status: Operational" in the footer or system status references.

**`contributor-avatar`** — testimonial avatar
- Background `{colors.surface-card}` placeholder, `rounded: {rounded.full}`, 32×32px.
- Used inline with customer testimonials.

**`footer`** — global footer
- Background `{colors.canvas}`, text `{colors.charcoal}`, type `{typography.body-sm}`, `rounded: {rounded.none}`, padding `64px 32px`.
- Multi-column quick-links grid above a single-line copyright row separated by `{colors.divider-soft}`.

## Do's and Don'ts

### Do
- Use `{colors.canvas}` (true black) as the default page background. Every public page lives here.
- Reserve `{component.button-primary}` (white pill) as the only solid bright surface. One per viewport at most.
- Set hero headlines in **Domaine Display** at 76–96px with `lineHeight: 1.0` and `ss01 / ss04 / ss11` features engaged.
- Use **ABC Favorit** for marketing body, **Inter** for UI labels, **Geist Mono** for code. Keep the lanes strict.
- Build elevation from translucent-white hairlines, not drop shadows.
- Use `{colors.accent-*-glow}` tokens as low-opacity radial atmospheric washes — never as solid surfaces.
- Set buttons and inputs to `{rounded.md}` (8px); cards and code wells to `{rounded.lg}` (12px); pills and avatars to `{rounded.full}`.
- Use the white email-mockup inset sparingly — it's the only deliberately-light surface and should feel like a print pull-quote.

### Don't
- Don't use a near-black canvas. The brand sits on `#000000`, not `#0a0a0a`.
- Don't apply solid colour to atmospheric accent tokens. `{colors.accent-orange}` is for inline highlights only — its glow form is for backdrops.
- Don't add drop shadows to feature cards or code wells. Translucent white borders carry depth on this canvas.
- Don't bump body weight to 600 for emphasis. Use family change (Inter → ABC Favorit → Domaine Display) instead.
- Don't render code outside `{component.code-window}` — even small inline code uses Geist Mono and a `{colors.surface-card}` background.
- Don't loosen Domaine Display `lineHeight` past 1.0. Tight stacking is structural to the brand.
- Don't introduce a secondary brand accent. White is the brand on black — accents are atmospheric only.
- Don't bring photography front-and-centre. The brand reads as type-and-code, not photography-led.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Desktop XL | ≥ 1440px | Full max-width 1200 body, 3-up feature grid, side-by-side code-story splits. |
| Desktop | 1280–1439px | Container shrinks; xl side padding. |
| Tablet Large | 1024–1279px | Feature grid stays 3-up, code-story remains 2-up. |
| Tablet | 768–1023px | Feature grid 2-up, code-story stacks (narrative on top), pricing stacks vertically. |
| Mobile Large | 426–767px | Feature grid 1-up; nav collapses to hamburger; hero `{typography.display-xxl}` clamps to 56px. |
| Mobile | ≤ 425px | All grids 1-up, hero clamps to 44px, section padding `{spacing.section}` collapses to 64px. |

### Touch Targets
- All buttons ship at minimum 36px tall on desktop, scaling to 44px on mobile via padding adjustment. WCAG AAA met on mobile.
- `{component.text-input}` is 40px tall — comfortable but not large. Mobile scales to 48px via padding.
- `{component.sub-nav-pill}` stays at 36px on desktop, 40px on mobile.

### Collapsing Strategy
- Top-level nav collapses to hamburger at < 1024px; the wordmark and `{component.button-primary}` stay anchored.
- Hero `{typography.display-xxl}` clamps: 96px → 76px → 56px → 44px across the breakpoint ladder.
- Pricing 3-up stacks vertically at < 1024px with the featured tier remaining centre-stacked.
- Code-story splits switch from side-by-side to stacked at < 1024px, code well always second.
- Atmospheric glows scale with section width but maintain the same opacity — they fade naturally at small viewports.

### Image Behavior
- Email mockup cards reflow at 1:1 aspect on mobile to remain readable.
- Atmospheric glows are CSS gradients — no asset cost, no breakpoint variation.
- Customer testimonial avatars stay 32px circular regardless of breakpoint.

## Iteration Guide

1. Focus on ONE component at a time. Most surfaces share `{colors.surface-card}` or `{colors.surface-elevated}` with `{rounded.lg}` — only the role-specific tokens (`{colors.primary}`, `{component.code-window}`) shift between variants.
2. Reference component names and tokens directly (`{colors.primary}`, `{component.button-primary-pressed}`, `{rounded.lg}`) — do not paraphrase.
3. Run `npx @google/design.md lint DESIGN.md` after edits; orphaned-tokens warnings will catch unused entries.
4. Add new variants as separate entries (`-pressed`, `-featured`, `-disabled`) — do not bury them in prose.
5. Default body type to `{typography.body-md}`; reach for `{typography.subtitle}` only on hero subtitles.
6. Keep `{colors.primary}` (white) scarce — if more than one solid white surface appears per viewport, ask whether one should drop to `{component.button-ghost}` instead.

## Known Gaps

- Pressed/active visual states are documented only for `button-primary-pressed`; other components rely on the default focus-ring (browser default) for interactive feedback.
- Logged-in dashboard surfaces (API keys, sending logs, audience management) are out of scope; only the public marketing canvas is documented.
- Email-template editor surfaces (a key product feature) are not extracted — those live behind authentication.
- The atmospheric glow rendering uses CSS radial gradients; exact stops and angles vary per section and are not standardised as tokens — render per section-specific design judgment.
