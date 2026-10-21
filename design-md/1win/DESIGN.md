---
version: alpha
name: 1win Analysis
description: An analysis of 1win's design language — a near-black crypto casino and sportsbook built on Inter at heavy weights, where a vivid green action color and an electric blue secondary carry every CTA across dense, full-bleed game-tile rails, promo cards, and live betting panels on a flat dark-grey surface ladder.

colors:
  primary: "#00b24b"
  secondary: "#0075ff"
  on-primary: "#ffffff"
  canvas: "#141415"
  surface: "#2e3035"
  hairline: "#2d2f33"
  ink: "#f0f2f5"
  muted: "#9aa1b1"
  faint: "#53575f"
  black: "#000000"

typography:
  display:
    fontFamily: Inter
    fontSize: 33px
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: 0
  heading:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: 0
  title:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  body:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  ui:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 10px
  xl: 12px
  card: 16px
  full: 999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  xxl: 24px
  xxxl: 32px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "8px 12px"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "8px 12px"
  button-tertiary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: "8px 12px"
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "0px 8px"
  pill-badge:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: "0px 4px"
  pill-outline:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.full}"
    padding: "0px 8px"
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    padding: "8px 16px"
  sidebar-rail:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    padding: "8px"
  game-tile:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
  hero-banner:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "24px"
  promo-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "16px"
  feature-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "16px"
  feature-card-elevated:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "16px"
  bet-odds-button:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
  betslip-panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "16px"
  text-input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    padding: "24px"

  # ─── Examples (illustrative) — kit-mirror surfaces ───
  ex-pricing-tier:
    description: "Default Pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface."
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-pricing-tier-featured:
    description: "Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode)."
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-product-selector:
    description: "What's Included summary card — re-purposed for SaaS / B2B verticals (NOT a literal product gallery)."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    description: "Subscription summary — re-purposed for SaaS / B2B (line items per add-on, not literal cart)."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
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
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-modal-card:
    description: "Modal dialog surface — same chrome as feature-card with elevated shadow."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-empty-state-card:
    description: "Empty-state illustration frame."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "{spacing.xxl}"
    captionTypography: "{typography.body}"
  ex-toast:
    description: "Toast notification surface — feature-card shape + medium shadow."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "{spacing.md} {spacing.lg}"
    typography: "{typography.body}"

---


## Overview

1win is a crypto casino and sportsbook that runs almost entirely on a near-black canvas (`{colors.canvas}` — #141415), a flat, slightly cool dark field that lets thousands of vibrant game thumbnails do the shouting. The chrome around the content is deliberately quiet: dark-grey surfaces (`{colors.surface}` — #2e3035), faint translucent hairlines, and off-white text (`{colors.ink}` — #f0f2f5). Against that restraint, two action colors carry the entire interactive layer — a vivid green (`{colors.primary}` — #00b24b) on the "Registration" CTA and every primary confirm, and an electric blue (`{colors.secondary}` — #0075ff) on "Log In", links, the "Show more" pill, active tabs, and bet highlights.

The layout is a high-density product surface, not a marketing page. A fixed left icon rail holds category navigation; the main column is a long stack of horizontally-scrolling rails — "Top games", "Slots", "Originals", game providers — each a row of full-bleed, brightly-illustrated `game-tile` thumbnails. Promotional bonuses ride in gradient-rich `hero-banner` cards at the top, and the sportsbook adds match rows with `bet-odds-button` chips and a right-hand `betslip-panel`. Typography is Inter set at heavy weights only (600 and 800) — even body copy is semibold — which gives the dense UI a punchy, app-like confidence rather than an editorial calm.

Color discipline is the key to reading this brand correctly: the loud purples, reds, ambers, and violets that fill the screen all live *inside* game artwork and bonus-card illustrations — they are content, not chrome. The system itself is monochrome dark plus exactly two signals: green for "go / win / register" and blue for "secondary / navigate / live". Everything structural is built from the dark surface ladder and those two accents.

**Key Characteristics:**
- Near-black `{colors.canvas}` foundation with a flat `{colors.surface}` card/tile ladder — depth comes from surface shifts and faint `{colors.hairline}` borders, not heavy shadow.
- Two-signal action system: green `{colors.primary}` for primary CTAs (Registration, confirm) and blue `{colors.secondary}` for secondary actions, links, and live/betting highlights.
- Inter at heavy weights only (600 / 800) — even `{typography.body}` is semibold, giving the dense UI an app-like punch.
- Content-forward game rails — full-bleed `game-tile` artwork supplies all the saturation; the surrounding frame stays monochrome dark.
- Pill language for badges and status (`{rounded.full}`), modest `{rounded.lg}`–`{rounded.xl}` on buttons, and `{rounded.card}` (16px) on tiles, promo cards, and panels.
- A left icon `sidebar-rail` + dense horizontally-scrolling rails define the shell, closer to a native app than a website.

## Colors

> Source pages analyzed: home, promotions, betting, vip-club.

### Brand & Accent
- **Action Green** (`{colors.primary}` — #00b24b): The primary action color — the "Registration" CTA, primary confirms, betslip place-bet, and section accent icons. The brand's "go / win" signal.
- **Electric Blue** (`{colors.secondary}` — #0075ff): The secondary action — "Log In", text links, the "Show more" pill, active tabs, badges, and live/betting highlights.
- **On Primary** (`{colors.on-primary}` — #ffffff): White text/icons on the green and blue fills.

### Surface
- **Canvas** (`{colors.canvas}` — #141415): The page background and the fill of the nav and `sidebar-rail` — a flat near-black.
- **Surface** (`{colors.surface}` — #2e3035): Cards, game tiles, promo cards, betslip panels, utility buttons, and input fields — the single elevated dark step.
- **Hairline** (`{colors.hairline}` — #2d2f33): The faint 1px divider/card border, a translucent cool-grey edge that reads against both canvas and surface.

### Text
- **Ink** (`{colors.ink}` — #f0f2f5): Primary text, the wordmark, and headings — a soft off-white.
- **Muted** (`{colors.muted}` — #9aa1b1): Secondary labels, inactive nav glyphs, footer text.
- **Faint** (`{colors.faint}` — #53575f): Tertiary/placeholder text and disabled labels.
- **Black** (`{colors.black}` — #000000): Maximum-contrast text used on the brightest accent fills and light promo surfaces.

## Typography

### Font Family
The entire system is set in **Inter** (`Inter, sans-serif`), and only at heavy weights — **600 (semibold)** and **800 (extrabold)**. There is no regular-weight body text; even running copy is semibold, which is what gives the dense, data-heavy interface its punchy, native-app feel. Headlines and bonus figures use 800; everything functional uses 600.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display}` | 33px | 800 | 1.1 | 0 | Hero / page headlines (bonus figures, "Promotions") |
| `{typography.heading}` | 20px | 800 | 1.2 | 0 | Section + card titles |
| `{typography.title}` | 16px | 600 | 1.3 | 0 | Game titles, row headers, outlined pills |
| `{typography.body}` | 14px | 600 | 1.4 | 0 | Default body, button labels |
| `{typography.ui}` | 13px | 600 | 1.3 | 0 | Inline UI text, odds, metadata |
| `{typography.caption}` | 12px | 600 | 1.3 | 0 | Badges, chips, micro-labels |

### Principles
Hierarchy is built from size and the 600↔800 weight jump, never from a light/regular contrast. The heavy floor keeps small UI text legible against the dark, busy backdrop and matches the high-energy gambling context.

### Note on Font Substitutes
Inter is an open-source Google Font, so no substitution is needed. If a fallback is required, any grotesque with a strong semibold (e.g. Manrope, Geist) preserves the heavy-weight character; keep body at 600+ to retain the app-like density.

## Layout

### Spacing System
- **Base unit**: 8px.
- **Tokens (front matter)**: `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 20px · `{spacing.xxl}` 24px · `{spacing.xxxl}` 32px
- Controls run tight — `{spacing.sm}`×`{spacing.md}` (8×12px) is the recurring button padding; cards and panels use `{spacing.lg}`–`{spacing.xxl}` (16–24px) interiors.

### Grid & Container
The shell is a fixed left icon `sidebar-rail` plus a fluid content column. Discovery uses horizontally-scrolling rails (carousels) of `game-tile` thumbnails rather than wrapping grids; the promotions page uses a 2-up card grid, and the sportsbook uses full-width match rows with a docked right-hand `betslip-panel`.

### Whitespace Philosophy
Density is the point — tiles pack close together to maximize the number of games in view, and the dark canvas itself does the separating between rails. Vertical gaps between labeled rails are modest; the brightness step between a tile and the canvas, plus a faint `{colors.hairline}`, supplies most of the structure.

### Responsive Strategy

#### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Left rail collapses to a bottom/hamburger nav; rails shorten; betslip becomes a bottom sheet |
| Tablet | 768–1023px | Condensed rail; fewer tiles per rail; 2-up promo grid retained |
| Laptop | 1024–1439px | Full rail + multi-tile rails |
| Desktop | ≥ 1440px (up to 1920px) | Widest rails + persistent betslip panel |

#### Touch Targets
Buttons carry `{spacing.sm}`×`{spacing.md}` padding and pills clear comfortable tap sizes; the green `button-primary` is the largest, highest-priority tap surface. Aim for 44×44px minimum on the dense rails.

#### Collapsing Strategy
The left `sidebar-rail` collapses first (to a hamburger or bottom bar). Category tab strips and `bet-odds-button` rows become horizontally scrollable rather than wrapping. Game rails keep their carousel behavior at every width, simply showing fewer tiles. The `betslip-panel` docks to the right on desktop and becomes a bottom sheet on mobile.

#### Image Behavior
Game thumbnails are full-bleed inside `{rounded.card}` corners (no internal padding) in portrait-leaning and square ratios; the artwork supplies all the color. Promo cards carry edge-to-edge photography behind an `{colors.ink}` title. Tiles lazy-load as rails scroll into view, with the `{colors.surface}` tile color as the placeholder.

## Elevation & Depth

Depth is mostly tonal — a flat two-step surface ladder rather than layered shadows.

| Level | Treatment | Use |
|---|---|---|
| 0 | `{colors.canvas}` flat | Page background, nav, sidebar rail |
| 1 | `{colors.surface}` + `{colors.hairline}` border | Cards, tiles, promo cards, betslip, buttons, inputs |
| Floating | `{colors.surface}` + soft `rgba(0,0,0,0.4)` shadow | Modals, dropdowns, the docked betslip lifted above content |

### Decorative Depth
The brand's visual richness comes from the game and promo artwork (radial-gradient bonus banners, illustrated tiles) layered on the flat dark canvas — not from UI shadows. Selected/active states use the green or blue accent as a glow-like emphasis rather than elevation.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Small chips, inner elements |
| `{rounded.sm}` | 6px | Compact cards, small media |
| `{rounded.md}` | 8px | Inputs, odds buttons, medium elements |
| `{rounded.lg}` | 10px | Primary / secondary / ghost buttons |
| `{rounded.xl}` | 12px | Utility buttons |
| `{rounded.card}` | 16px | Game tiles, promo cards, hero banners, panels |
| `{rounded.full}` | 999px | Pills, badges, avatars, circular controls |

### Photography Geometry
Game artwork is framed at `{rounded.card}` (16px) and runs full-bleed inside the tile. Promo cards use the same 16px frame with edge-to-edge imagery. Avatars, status badges, and provider chips use `{rounded.full}`. There is no exposed photography outside the gaming/promo content — the structural chrome stays geometric and flat.

## Components

> **No hover states documented.** Each spec covers Default and Active/Pressed only. Variants live as separate `components:` entries.

### Buttons

**`button-primary`** — the green "Registration" / primary-confirm CTA, the highest-visibility control.
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.body}`, rounded `{rounded.lg}`, padding `{spacing.sm}` `{spacing.md}` (8×12px).

**`button-secondary`** — the blue "Log In" / secondary action and the "Show more" pill.
- Background `{colors.secondary}`, text `{colors.on-primary}`, type `{typography.body}`, rounded `{rounded.lg}`, padding 8×12px.

**`button-tertiary`** — the dark-grey utility button ("More events", "Read more").
- Background `{colors.surface}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.xl}`, padding 8×12px.

**`button-ghost`** — a low-emphasis grey control on dense rows.
- Background `{colors.surface}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.lg}`, padding `0` `{spacing.sm}` (0×8px).

### Navigation

**`top-nav`** — the sticky header carrying the 1win wordmark, search, balance, and the green Registration + blue Log In CTAs.
- Background `{colors.canvas}`, text `{colors.ink}`, padding 8×16px, with a `{colors.hairline}` base edge.

**`sidebar-rail`** — the fixed left icon rail (Casino, Sports, categories).
- Background `{colors.canvas}`, glyphs `{colors.muted}`, padding `{spacing.sm}`. Active item marked in `{colors.primary}`.

### Inputs & Forms

**`text-input`** — search and betslip amount fields.
- Background `{colors.surface}`, text `{colors.ink}`, placeholder `{colors.faint}`, border `{colors.hairline}`, type `{typography.body}`, rounded `{rounded.md}`, padding 8×12px.

**`bet-odds-button`** — the odds chip in sportsbook match rows.
- Background `{colors.surface}`, text `{colors.ink}`, type `{typography.ui}`, rounded `{rounded.md}`, padding 8×12px. Selected state highlights in `{colors.secondary}`.

### Pills & Badges

**`pill-badge`** — the solid blue status/count badge.
- Background `{colors.secondary}`, text `{colors.on-primary}`, type `{typography.caption}`, rounded `{rounded.full}`, padding `0` `{spacing.xs}` (0×4px).

**`pill-outline`** — the bordered filter/category pill.
- Text `{colors.ink}`, type `{typography.title}`, rounded `{rounded.full}`, padding 0×8px, with a `{colors.hairline}` border.

### Cards & Containers

**`game-tile`** — the core discovery unit: a full-bleed game thumbnail.
- Background `{colors.surface}` (placeholder), rounded `{rounded.card}`. Artwork fills edge-to-edge with no padding.

**`hero-banner`** — the top welcome-bonus / promo banner.
- Background `{colors.surface}` with edge-to-edge gradient imagery, headline `{colors.ink}` in `{typography.display}`, rounded `{rounded.card}`, padding `{spacing.xxl}`.

**`promo-card`** — a promotions-page card (full-bleed photo + title + chips).
- Background `{colors.surface}`, title `{colors.ink}`, rounded `{rounded.card}`, padding `{spacing.lg}`.

**`feature-card`** — generic dark content card.
- Background `{colors.surface}`, text `{colors.ink}`, border `{colors.hairline}`, rounded `{rounded.card}`, padding `{spacing.lg}`.

**`feature-card-elevated`** — a feature card lifted above the page (floating shadow), base for modal/toast surfaces.
- Background `{colors.surface}`, text `{colors.ink}`, rounded `{rounded.card}`, padding `{spacing.lg}`, soft `rgba(0,0,0,0.4)` shadow.

**`betslip-panel`** — the docked sportsbook betslip / wheel-of-fortune panel.
- Background `{colors.surface}`, text `{colors.ink}`, rounded `{rounded.card}`, padding `{spacing.lg}`. Confirm action uses `button-primary`.

**`footer`** — the page footer (support, information, categories columns).
- Background `{colors.canvas}`, text `{colors.muted}`, headings `{colors.ink}`, padding `{spacing.xxl}`.

### Examples (illustrative)

> Kit-mirror demonstration surfaces. Each `ex-*` entry references 1win's brand-native primitives (`{colors.surface}`, `{colors.primary}`, `{rounded.card}`, the spacing scale) so downstream consumers re-skin the same 10 illustrative surfaces consistently. These are not extracted brand components.

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
- Reserve `{colors.primary}` (green) for primary actions — Registration, confirm, place-bet — and `{colors.secondary}` (blue) for secondary actions, links, and live/betting highlights.
- Build depth with the surface ladder (`{colors.canvas}` → `{colors.surface}`) plus a faint `{colors.hairline}` edge; avoid heavy shadows.
- Set every label in Inter 600+ (`{typography.body}` / `{typography.caption}`); use the 800 weight for headlines and bonus figures.
- Let game and promo artwork supply the color — keep the surrounding chrome monochrome dark.
- Use `{rounded.lg}`–`{rounded.xl}` on buttons, `{rounded.card}` (16px) on tiles/cards/panels, and `{rounded.full}` on pills and badges.
- Pair accent fills with `{colors.on-primary}` (white) text for legibility.

### Don't
- Don't promote game-tile or bonus-banner gradient colors (the purples, reds, violets, ambers) into the UI palette — they are content, not chrome.
- Don't add a third structural accent; the system is green + blue only.
- Don't use pure-regular weights — there is no Inter 400 here; body copy is semibold.
- Don't pad game tiles — artwork is full-bleed inside `{rounded.card}` corners.
- Don't rely on drop shadows for elevation; the surface brightness step is the elevation language.
