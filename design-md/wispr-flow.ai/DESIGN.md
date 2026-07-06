---
version: alpha
name: WisprFlow-Inspired-design-analysis
description: An inspired interpretation of Wispr Flow's design language — the "Voice in Motion" system built for an AI voice-dictation product. A warm cream-paper canvas (`#ffffeb`) hosts an editorial duotone of deep forest teal and soft lavender, with pages alternating between bright open chambers and near-black dramatic ones. The signature move is typographic: an oversized EB Garamond serif (64–120px, weight 400) carries every headline like a magazine masthead, while Figtree, a geometric grotesque, runs every interactive surface. Corners are generously rounded (14px controls, 32px cards, fully circular decorative orbs), borders replace shadows as the primary depth device, and a recurring "flowing" motion language — waveforms, orbiting circular text, curved app-icon arcs — visualizes the brand's core metaphor: speech becoming shape.

colors:
  canvas: "#ffffeb"
  canvas-alt: "#ffffff"
  surface-muted: "#e4e4d0"
  ink: "#1a1a1a"
  ink-pure: "#000000"
  ink-mute: "#5f5f59"
  ink-faint: "#8a8a80"
  on-dark: "#ffffff"
  hairline: "#e4e4d0"
  hairline-dark: "#222222"
  hairline-dark-mid: "#333333"
  surface-teal-deep: "#034f46"
  surface-lavender: "#f0d7ff"
  surface-amber: "#ffa946"

typography:
  display-xxl:
    fontFamily: "'EB Garamond', 'Cormorant Garamond', 'Playfair Display', Georgia, serif"
    fontSize: 120px
    fontWeight: 400
    lineHeight: 0.85
    letterSpacing: -0.13em
  display-xl:
    fontFamily: "'EB Garamond', 'Cormorant Garamond', 'Playfair Display', Georgia, serif"
    fontSize: 64px
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: -0.05em
  display-lg:
    fontFamily: "'EB Garamond', 'Cormorant Garamond', 'Playfair Display', Georgia, serif"
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -0.07em
  display-sm:
    fontFamily: "'EB Garamond', 'Cormorant Garamond', 'Playfair Display', Georgia, serif"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.03em
  heading:
    fontFamily: "'Figtree', 'Inter', 'DM Sans', system-ui, sans-serif"
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: 0
  heading-sm:
    fontFamily: "'Figtree', 'Inter', 'DM Sans', system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: 0
  subheading:
    fontFamily: "'Figtree', 'Inter', 'DM Sans', system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0
  body-lg:
    fontFamily: "'Figtree', 'Inter', 'DM Sans', system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  body:
    fontFamily: "'Figtree', 'Inter', 'DM Sans', system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 0
  button:
    fontFamily: "'Figtree', 'Inter', 'DM Sans', system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: 0
  nav-link:
    fontFamily: "'Figtree', 'Inter', 'DM Sans', system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0
  caption:
    fontFamily: "'Figtree', 'Inter', 'DM Sans', system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 0
  micro:
    fontFamily: "'Figtree', 'Inter', 'DM Sans', system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0

rounded:
  xs: 8px
  sm: 14px
  md: 24px
  lg: 32px
  xl: 40px
  pill: 1000px
  orb: 1600px

spacing:
  xxs: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 48px
  xxl: 64px
  huge: 80px
  section: 96px
  massive: 128px

components:
  button-primary-lavender:
    backgroundColor: "{colors.surface-lavender}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 10px 18px
  button-ghost-outline:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 10px 18px
  button-ghost-on-dark:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 10px 18px
  nav-pill:
    backgroundColor: "{colors.canvas-alt}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.sm}"
    padding: 8px 12px
  platform-pill:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.pill}"
    padding: 8px 16px
  banner-teal:
    backgroundColor: "{colors.surface-teal-deep}"
    textColor: "{colors.on-dark}"
    typography: "{typography.nav-link}"
    rounded: 0px
    padding: 12px 24px
  card-feature:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 32px
  card-pricing:
    backgroundColor: "{colors.canvas-alt}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 32px
  card-pricing-featured:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 32px
  section-dark-feature:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body}"
    rounded: 0px
    padding: 80px 24px
  testimonial-band:
    backgroundColor: "{colors.surface-teal-deep}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-lg}"
    rounded: 0px
    padding: 64px 24px
  decorative-orb:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption}"
    rounded: "{rounded.orb}"
    padding: 0px
  badge-pill:
    backgroundColor: "{colors.surface-teal-deep}"
    textColor: "{colors.on-dark}"
    typography: "{typography.micro}"
    rounded: "{rounded.pill}"
    padding: 8px 14px
  badge-square:
    backgroundColor: "{colors.surface-amber}"
    textColor: "{colors.ink}"
    typography: "{typography.micro}"
    rounded: "{rounded.xs}"
    padding: 6px 10px
  text-input:
    backgroundColor: "{colors.canvas-alt}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 12px 16px
---

## Overview

Wispr Flow's marketing surface reads like a design magazine that happens to sell software. Every page rests on a warm, slightly-yellowed **cream paper** canvas — `{colors.canvas}` (`#ffffeb`) — never pure white, which gives the whole brand a paper-and-ink warmth instead of the clinical glow most AI products default to. Headlines are set in **EB Garamond**, a Renaissance-style serif with calligraphic terminals, blown up to `{typography.display-xl}` (64px) or, on the biggest hero moments, `{typography.display-xxl}` (120px) — always at weight 400, never bold, with aggressively negative letter-spacing (down to -0.13em) that compresses the classical letterforms into a tight, modern headline block. This serif never appears below 32px and never touches a button, a nav item, or a caption — that entire functional layer belongs to **Figtree**, a warm geometric grotesque that runs body copy, navigation, labels, and every button at compact, controlled line-heights (0.95–1.3).

The palette is deliberately restrained: cream `{colors.canvas}` for the dominant light surface, near-black `{colors.ink}` (`#1a1a1a` — never `#000000`) for the dominant dark surface, and exactly two accent colors layered on top — **Deep Forest Teal** (`{colors.surface-teal-deep}`, `#034f46`) for social-proof and announcement bands, and **Lavender Whisper** (`{colors.surface-lavender}`, `#f0d7ff`) reserved almost exclusively for the single primary call-to-action on any given screen. A dash of **Amber Pulse** (`{colors.surface-amber}`, `#ffa946`) shows up only as a small illustrative or badge accent — never as a surface, never as a CTA. This is a duotone-plus-amber system, not a rainbow: adding a fourth chromatic hue anywhere breaks the brand.

Structurally, the page alternates in a deliberate rhythm — **cream → dark → cream → teal-band → cream** — so that every full-bleed color change is a breathing moment. Cream sections carry editorial headlines and feature explanations; near-black sections stage the actual product (a phone or desktop mockup, usually flanked by a sweeping arc of 15–25 colorful third-party app icons — Slack, Notion, Linear, Gmail, VS Code, GitHub — visualizing "Flow works everywhere you already type"); teal sections are reserved for testimonials and client-logo strips. Corners are soft everywhere: 14px on buttons and nav, 32px on cards, 40px on product-shot frames, and fully circular on the brand's signature "decorative orb" — a floating circular waveform or rotating circular-text badge that recurs across hero sections as a literal visualization of "voice, in motion."

**Key Characteristics:**
- **Cream-and-ink duotone with two accent colors.** `#ffffeb` cream, `#1a1a1a` ink, `#034f46` teal, `#f0d7ff` lavender — and nothing else chromatic except a sparing amber.
- **Editorial serif for story, geometric sans for interface.** EB Garamond owns 32px+; Figtree owns everything functional. The split is absolute, never merged.
- **Border-driven depth, not shadow-driven.** Hairline 1–2px borders in ink or stone-mist define cards, buttons, and the floating nav pill; box-shadow is reserved for one subtle lift on the sticky nav.
- **Generously rounded, never sharp.** 14px is the system's control radius; nothing in the interface uses a 0–8px corner except small square badges.
- **Section-level color rhythm as a layout primitive.** Cream, dark, and teal bands are structural chapters, not decoration — a fourth color state doesn't exist.
- **Motion as metaphor.** Waveforms, orbiting circular text, and curved icon arcs are the recurring visual language for "speech turning into structured output" — the brand's founding idea, *Voice in Motion*.
- **Illustration over screenshots.** Flat, warm-toned character illustrations (a woman with binoculars, mid-gesture figures) sit beside real product UI — the brand treats illustration as editorial punctuation, not explanatory diagramming.

## Brand Concept — "Voice in Motion"

Wispr Flow's design system is not palette-first; it is concept-first. The team's own account of their 2025 rebrand names the anchoring idea explicitly: ***Voice in Motion*** — the belief that speech is not raw material to be cleaned up, but a fluid, intuitive form of expression that becomes shape, structure, and action in real time. Every visual decision downstream of this concept should trace back to one of three qualities:

1. **Fluid, not rigid.** Rounded corners everywhere, soft curves in illustration, waveforms instead of straight bars, orbiting circular text instead of static labels.
2. **Human, not clinical.** Warm cream instead of clinical white or corporate navy; near-black `#1a1a1a` instead of true `#000000`; a classical serif instead of an engineered geometric display face; illustrated people mid-gesture instead of stock photography or abstract 3D blobs.
3. **Editorial, not dashboard-dense.** Wide margins, two-column spacious layouts, one idea per section, typography carrying the meaning rather than charts, tabs, or dense UI chrome competing for attention. The brand explicitly rejects "coffee-shop syndrome" — the sameness of cool-blue, gradient-heavy, UI-screenshot-crowded AI-startup marketing pages — in favor of something closer to a lifestyle magazine or a quiet, well-typeset newspaper.

When extending this system (new pages, new components, AI-generated UI), treat every new element as a small instance of "voice becoming shape": a waveform is more on-brand than a bar chart; a hand-drawn or organic illustrated figure is more on-brand than an isometric 3D render; a slow, confident fade is more on-brand than a snappy bounce. If a new component's motion or form doesn't visibly echo fluidity, warmth, or editorial restraint, it is off-brand regardless of how well its colors match the palette.

## Colors

> **Source pages:** home (`/`), `/pricing`, `/rebrand`, `/media-kit`, `/features`.

### Canvas & Surface
- **Cream Paper** (`{colors.canvas}` — `#ffffeb`): The default page background across almost every light section — hero, feature grid, pricing cards, footer. This is the brand's signature surface: a warm, barely-yellow ivory, deliberately not pure white.
- **White Nav Surface** (`{colors.canvas-alt}` — `#ffffff`): Reserved for the floating navigation pill and any card that needs to visually lift a half-step off the cream beneath it.
- **Stone Mist** (`{colors.surface-muted}` — `#e4e4d0`): A barely-there warm gray used for hairline borders on cream, muted panel tints, and the nav's own outline. It separates without contrasting.
- **Midnight Ink** (`{colors.ink}` — `#1a1a1a`): The default dark surface for full-bleed dark sections (the "Flow works everywhere" product showcase), plus the default text color on light surfaces. Deliberately near-black rather than `#000000` — the brand treats true black as too cold and reserves it for decorative SVG fills and drop-shadow color only.

### Accent
- **Deep Forest Teal** (`{colors.surface-teal-deep}` — `#034f46`): The brand's social-proof color. Announcement banners, testimonial bands, client-logo strips, and badge fills. Rich, almost-black green — never used for a button.
- **Lavender Whisper** (`{colors.surface-lavender}` — `#f0d7ff`): The single primary-action color across the entire site. Reserved for exactly one CTA per view (download / get started / upgrade) — pairs only with ink text, never white text, since contrast against pale lavender is too low.
- **Amber Pulse** (`{colors.surface-amber}` — `#ffa946`): A minor illustrative and badge-highlight color. Used in small doses — an icon fill, a highlighted list marker, a "NEW" tag — never as a section background or button fill.

### Text
- **Ink** (`{colors.ink}` — `#1a1a1a`): Primary text on cream and white surfaces.
- **Smoke** (`{colors.ink-mute}` — `#5f5f59`): Tertiary text, low-emphasis captions, footnotes.
- **Graphite Veil** (`{colors.ink-faint}` — `#8a8a80`): Secondary text, and — distinctively — one half of the two-tone headline treatment (see Typography below).
- **On Dark** (`{colors.on-dark}` — `#ffffff`): Text and icon color on ink, teal, or any dark surface.

### Borders
- **Hairline** (`{colors.hairline}` — `#e4e4d0`): 1px borders on cream — card outlines, nav outline.
- **Hairline Dark** (`{colors.hairline-dark}` — `#222222`) and **Hairline Dark Mid** (`{colors.hairline-dark-mid}` — `#333333`): 1px borders used on inverted / dark UI chrome, buttons, and nav dividers when the surface beneath is ink rather than cream.

## Typography

### Font Family

The display tier is **EB Garamond** — a classical, high-contrast old-style serif with calligraphic terminals — used exclusively at 32px and above. It is the single most identifying decision in the entire system: an editorial, almost literary voice dropped into an AI product's marketing pages, where competitors reach for engineered geometric sans faces. Substitute with **Cormorant Garamond**, **Playfair Display**, or **Lora** if EB Garamond is unavailable; enable ligatures and discretionary ligatures (`"liga" on, "dlig" on`) for the full effect.

The interface tier is **Figtree** — a warm, rounded-terminal geometric grotesque — used for every functional surface: navigation, buttons, body copy, captions, badges, and footer. Substitute with **Inter**, **DM Sans**, or **Manrope**.

**These two families are never merged.** Display sizes require the serif; anything functional requires the sans. This mirrors how a magazine separates "story" typography from "interface" typography (mastheads and pull-quotes versus captions and folios).

### Hierarchy

| Token | Size | Family | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|---|
| `{typography.display-xxl}` | 120px | EB Garamond | 400 | 0.85 | -0.13em | Largest hero statement headlines |
| `{typography.display-xl}` | 64px | EB Garamond | 400 | 0.95 | -0.05em | Primary section headline ("Don't type, just speak") |
| `{typography.display-lg}` | 48px | EB Garamond | 400 | 1.1 | -0.07em | Secondary section headline |
| `{typography.display-sm}` | 32px | EB Garamond | 400 | 1.2 | -0.03em | Sub-display / smaller editorial statement |
| `{typography.heading}` | 32px | Figtree | 600 | 1.0 | 0 | UI section heading inside dark feature sections |
| `{typography.heading-sm}` | 24px | Figtree | 600 | 1.0 | 0 | Card title |
| `{typography.subheading}` | 20px | Figtree | 500 | 1.3 | 0 | Lead paragraph under a display headline |
| `{typography.body-lg}` | 18px | Figtree | 400 | 1.4 | 0 | Marketing lead body copy |
| `{typography.body}` | 16px | Figtree | 400 | 1.3 | 0 | Default UI and paragraph text |
| `{typography.button}` | 14px | Figtree | 600 | 1.0 | 0 | Button and CTA label |
| `{typography.nav-link}` | 14px | Figtree | 500 | 1.0 | 0 | Navigation links, pill labels |
| `{typography.caption}` | 14px | Figtree | 400 | 1.3 | 0 | Helper text, footnotes |
| `{typography.micro}` | 12px | Figtree | 500 | 1.3 | 0 | Badge and tag text |

### The Two-Tone Headline

The brand's most distinctive typographic habit: display headlines are frequently split into **two color tones within a single line** — the setup half rendered in `{colors.ink-faint}` (Graphite Veil, `#8a8a80`) and the punch half in `{colors.ink}` (Midnight Ink, `#1a1a1a`). For example, in "**4x faster** than typing," the words "than typing" might sit in the muted tone while "4x faster" carries full ink weight — a second axis of hierarchy layered on top of size and weight alone. A **Lavender Whisper underline** (a soft rounded-rectangle stroke, 4–6px tall, extending slightly past the word) is sometimes applied beneath the single most important word in a headline (e.g., "faster") as a highlighter-style accent — never a full underline across the whole line.

### Principles
- **Serif above 32px, sans below.** This threshold is a hard rule, not a preference — never render body copy, labels, or captions in EB Garamond, and never render a 64px+ hero in Figtree.
- **Negative tracking scales with size.** -0.13em at 120px, -0.07em at 48px, -0.05em at 64px, -0.03em at 32px — the bigger the serif gets, the more it needs compressing to avoid looking loose.
- **Weight 400 only for display.** The serif is never bolded; its visual weight comes from scale, not boldness. Figtree carries the weight axis instead (500 for nav/labels, 600 for buttons and headings, 700 reserved for rare emphasized inline text).
- **Compact line-heights throughout.** Even body copy sits at 1.3 rather than a looser 1.5–1.6 — part of the system's dense, editorial-column feel.

## Layout

### Spacing System
- **Base unit:** 8px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 16px · `{spacing.md}` 24px · `{spacing.lg}` 32px · `{spacing.xl}` 48px · `{spacing.xxl}` 64px · `{spacing.huge}` 80px · `{spacing.section}` 96px · `{spacing.massive}` 128px.
- **Section vertical padding:** 64–80px is the default gap between major sections, giving the oversized serif headlines room to breathe; dark feature sections and teal testimonial bands can extend to 96–128px for extra editorial weight.
- **Card padding:** 32px is the standard internal padding for feature cards, pricing cards, and testimonial cards.

### Grid & Container
- Page content centers in a **1200px max-width** column; full-bleed color bands (dark sections, teal bands, the top announcement strip) break out to the full viewport width while their inner content still respects the 1200px column.
- The hero is single-column and centered, flanked on either side by decorative orb elements (waveform circles, rotating circular-text badges) rather than a second content column.
- The product-showcase dark section uses an **asymmetric two-column layout**: text block on the left, a device mockup on the right, connected visually by a diagonal or arcing sweep of app icons.
- Pricing collapses from a 3-up grid (desktop) to 1-up (mobile), matching the Basic / Pro / Enterprise tiers.

### Whitespace Philosophy
The system deliberately avoids "SaaS dashboard density." Two-column layouts stay spacious rather than packed; one idea, one headline, one CTA per section is the norm. This is a page meant to be *read*, like a magazine spread, rather than *scanned* like a product dashboard — whitespace is doing narrative work, pacing the reader from statement to statement.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat, border-only | Default surface for cards, buttons, and sections |
| 1 | `box-shadow: 0 2px 8px rgba(0,0,0,0.08)` | The single elevation exception: the floating sticky navigation pill, which needs to visually separate from whatever cream, dark, or teal section scrolls beneath it |
| 2 | Full-bleed color-band contrast | Depth is communicated by *changing the entire section's background color* (cream → ink → teal) rather than by stacking shadows |

### Decorative Depth
Rather than gradients or drop shadows, depth and atmosphere are carried by the **decorative orb** — a large, fully circular element (radius token `{rounded.orb}`, 1600px) that floats near hero headlines. It typically contains an animated waveform, a rotating ring of circular text, or a small app icon, and functions purely as a brand-mark moment rather than a functional UI control. A second depth device is the **curved app-icon arc** inside dark feature sections: 15–25 small colorful third-party app icons arranged along a sweeping curved path connecting the headline to the device mockup, visually implying motion and reach ("Flow works everywhere").

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 8px | Small square badges, tags |
| `{rounded.sm}` | 14px | Buttons, nav pill, form inputs — the system's signature control radius |
| `{rounded.md}` | 24px | Mid-sized illustrative containers |
| `{rounded.lg}` | 32px | Feature cards, pricing cards |
| `{rounded.xl}` | 40px | Product-screenshot and image frames |
| `{rounded.pill}` | 1000px | Platform pills, pill-shaped badges, toggle switches |
| `{rounded.orb}` | 1600px | Fully circular decorative orbs, avatar frames |

### Iconography & Illustration Geometry
Illustration is **flat, warm-toned, and organic** — soft curved outlines rather than sharp geometric vector art, depicting people mid-gesture or mid-thought (a figure with oversized binoculars, a person speaking with visible sound-wave lines). Product photography is minimal; when it appears, it favors real, tactile, "lived-in" settings — a desk, a hand near a laptop — over sterile studio product shots or browser-chrome screenshots. Icons throughout the interactive layer (checkmarks in pricing tables, platform glyphs for Mac/Windows/iPhone/Android, the bar-chart wordmark glyph beside the "Flow" logotype) are simple, single-weight, and monochrome in ink or white, never multi-color except for the third-party app-icon arc, which is intentionally colorful because those are external brand marks, not Wispr's own iconography.

## Components

### Buttons

**`button-primary-lavender`** — the one true call-to-action.
- Background `{colors.surface-lavender}`, text `{colors.ink}`, type `{typography.button}`, padding 10px 18px, rounded `{rounded.sm}` (14px), 1px solid `{colors.ink}` border for definition against the cream backdrop. Often prefixed with a small platform glyph (the Apple logo for "Download for macOS").
- **Rule of one:** never place two lavender buttons in the same viewport — Lavender Whisper signals *the* action, not *an* action.

**`button-ghost-outline`** — secondary action on light surfaces.
- Transparent fill, 1px solid `{colors.ink}` border, text `{colors.ink}` in `{typography.button}`, same 14px radius and padding as the primary button. Used for "Watch in action," "Try Flow," "Talk to sales."

**`button-ghost-on-dark`** — secondary action inside dark or teal sections.
- Transparent fill, 1px solid `{colors.on-dark}` border, text `{colors.on-dark}`, otherwise identical geometry to `button-ghost-outline`.

### Navigation

**`nav-pill`** — the sticky top navigation.
- A floating white (`{colors.canvas-alt}`) pill-shaped bar, rounded `{rounded.sm}` (14px, not fully pill-rounded — a soft rectangle), 1px `{colors.hairline}` border, subtle elevation shadow (Level 1 above), internal padding 8–12px. Contains the "Flow" wordmark with a small bar-chart glyph on the left, center navigation links in `{typography.nav-link}`, and two right-aligned CTAs — typically one `button-ghost-outline` ("Flow for Android") and one `button-primary-lavender` ("Download for macOS"). The nav floats with margin above the page edge rather than spanning full-bleed, and it re-appears with the same treatment regardless of which color section scrolls beneath it.

**`platform-pill`** — inline platform indicator.
- Transparent fill, 1px border (ink on light backgrounds, white on dark), fully rounded `{rounded.pill}`, `{typography.nav-link}` text, containing a small platform glyph plus label ("Mac," "Windows," "iPhone," "Android"). Appears just above hero headlines and above dark feature sections to indicate device availability.

### Bands & Sections

**`banner-teal`** — top-of-page announcement strip.
- Full-bleed `{colors.surface-teal-deep}` background, no border, no radius, white `{typography.nav-link}` centered text with a right-arrow affordance, linking to a case study or launch post. This is the very first thing a visitor sees, above the nav pill itself.

**`section-dark-feature`** — the product-in-context showcase.
- Full-bleed `{colors.ink}` background. Two-column: left side carries a `{typography.heading}` headline in white plus `{typography.body}` copy in `{colors.ink-faint}`-on-dark, with a `button-ghost-on-dark` CTA; right side floats a device mockup (phone or desktop) with the actual product UI rendered inside, encircled by the curved multi-app icon arc described above.

**`testimonial-band`** — social-proof strip.
- Full-bleed `{colors.surface-teal-deep}` background, white centered headline in `{typography.body-lg}`, a row of monochrome-white client logos beneath (Vercel, Notion, Replit, Warp, Amazon, Nvidia, and similar recognizable names), generous 48–64px vertical padding. A flat character illustration frequently anchors one edge of the band.

### Cards

**`card-feature`** — feature-grid card on cream.
- Background `{colors.canvas}` (or white for slight lift), padding `{spacing.lg}` (32px), rounded `{rounded.lg}` (32px), 1px `{colors.hairline}` border, headline in `{typography.heading-sm}`, body in `{typography.body}`. May embed a product screenshot or illustration at `{rounded.xl}` (40px) radius.

**`card-pricing`** — standard pricing tier (Basic / Pro).
- Background `{colors.canvas-alt}`, padding 32px, rounded `{rounded.lg}`, 1px hairline border, plan name in `{typography.heading-sm}`, price in `{typography.display-sm}` (still Figtree-weight for numerals, not full serif treatment), a bulleted checkmark feature list in `{typography.body}`, and a full-width CTA button at the base of the card.

**`card-pricing-featured`** — the inverted "Pro" or most-recommended tier.
- Background `{colors.ink}`, text `{colors.on-dark}`, otherwise identical structure to `card-pricing` — the brand's binary cream/ink polarity extended into pricing to draw the eye to the recommended plan.

### Badges & Tags

**`badge-pill`** — status or category pill.
- Background `{colors.surface-teal-deep}`, text `{colors.on-dark}`, `{typography.micro}`, fully rounded `{rounded.pill}`, 8px vertical / 14px horizontal padding. Used for "NEW" tags on case studies and small category labels.

**`badge-square`** — small warm accent tag.
- Background `{colors.surface-amber}`, text `{colors.ink}`, `{typography.micro}`, rounded `{rounded.xs}` (8px). Used sparingly for highlight callouts, never for primary navigation or status.

### Decorative / Signature Components

**Decorative Orb** — the brand's literal "voice becoming shape" motif. A fully circular (`{rounded.orb}`) element floating beside or behind hero copy, containing either an animated waveform, a rotating ring of small circular text, or a single app/brand icon. Purely atmospheric — never a functional click target — and the closest thing the system has to a mascot.

**Curved App-Icon Arc** — inside every dark product-showcase section, a sweeping curved path of 15–25 small colorful third-party app icons (Slack, Notion, Gmail, GitHub, Linear, VS Code, Figma, Superhuman, and similar) arcs between the headline and the device mockup, visually proving "Flow already lives inside the tools you use."

**Underline Accent** — a soft lavender rounded-rectangle stroke (4–6px tall) placed beneath a single emphasized word within a display headline, functioning like a highlighter mark rather than a full-width underline.

**Savings Calculator Widget** — an inline, lightly interactive component on the pricing page: a slider or numeric stepper for "hours spent typing per day" and "hourly value," rendered on a `card-feature`-style container, producing a live-updating result ("Monthly, you'll save $1,088/mo") in `{typography.heading-sm}` numerals. Demonstrates the brand's willingness to embed small utility tools directly into otherwise editorial marketing pages.

**Personal Dictionary / Snippet Library Cards** — small two-column feature cards showing a scrollable list of user-added words or voice-triggered text snippets, each row a compact pill with a "+" affordance to add a new entry; visually these use the same `card-feature` container and `{rounded.sm}` pill rows internally.

## Motion & Animation

Motion in the Wispr Flow system is never decorative for its own sake — it exists to visualize the product's core promise: *speech, in real time, becoming clear, structured output.* Animation is slow, confident, and legato rather than snappy or bouncy; the brand's own account of its rebrand explicitly favors "subtle microinteractions and slow fades" that create "emotional pacing" over attention-grabbing motion.

### Signature Motion Patterns

- **Waveform pulse.** The most recurring animated element on the marketing site and inside the product itself: a small horizontal or circular waveform that pulses in sync with (or in simulation of) live audio input. In the decorative orb, this waveform loops continuously at a slow, breathing cadence — never a sharp spike pattern. Inside the actual product's floating **Flow Bar** and **Flow Bubble**, the waveform is literal: it animates in real time as the user speaks, replacing a static microphone glyph the instant dictation begins, and reverting to the static mic icon the instant it stops (a deliberate, documented state distinction — the product intentionally avoids showing an animated waveform when the mic is idle, since that would misrepresent listening state).
- **Rotating circular text.** A ring of small caption-sized text rotates slowly around the decorative orb or around a badge, evoking the sense of continuous, ambient motion without demanding attention — the visual equivalent of a low hum.
- **Scroll-triggered fades and rises.** Section headlines and feature cards fade in and rise a short distance (roughly 16–24px) as they enter the viewport, staggered slightly across sibling elements (each card or list item delayed ~60–100ms after the previous) so that a feature grid animates in like a slow cascade rather than all at once.
- **Hover lifts, not hover glows.** Interactive cards and buttons respond to hover with a very subtle vertical lift (1–2px translateY) and a barely perceptible border-color deepening, rather than a glow, scale-pop, or color-inversion — consistent with the border-driven, shadow-light depth philosophy.
- **Curved-arc reveal.** The app-icon arc inside dark feature sections tends to animate in as a continuous sweep — icons appearing in sequence along the curve from one end to the other — reinforcing the sense of a path or flow rather than a static grid of logos.
- **Tab-content crossfade.** In the "Made for the way you work" persona selector (Teams / Students / Developers / Creators / Sales / Support / Lawyers / Leaders / Accessibility), switching the active tab crossfades the associated headline, description, and illustration rather than hard-cutting — active and inactive tab states are visually distinguished by weight and an ink underline rather than a color change, keeping the transition calm.
- **Typing-speed comparison animation.** The "4x faster than typing" section animates two parallel text blocks appearing at different simulated speeds (45 WPM vs. 220 WPM) — a rare instance of the brand using literal motion *speed* as the demonstration itself, letting the pacing of the animation communicate the claim without extra copy.

### Motion Principles

- **Easing:** favor gentle ease-out curves (e.g., `cubic-bezier(0.16, 1, 0.3, 1)`) for entrances — quick acceleration, long gentle settle — rather than linear or bouncy/elastic easing. Nothing in this system should overshoot or bounce.
- **Duration:** entrance fades and rises run 400–600ms; hover states run fast, 120–180ms; the waveform and rotating-text loops run on long, seamless multi-second cycles with no visible seam or restart snap.
- **Reduced motion:** because the brand's core audience includes accessibility-focused users (Flow markets directly to people who find keyboards difficult), respect `prefers-reduced-motion` rigorously — replace loops and parallax with static end-states rather than disabling animation into an abrupt jump-cut.
- **Motion should always trace back to voice.** When adding a new animation to a Wispr-Flow-styled interface, ask whether it evokes *sound becoming shape* (a waveform, a pulse, a flowing curve) or *calm editorial pacing* (a slow fade, a gentle rise). Motion that reads as "corporate SaaS transition" — hard slides, aggressive parallax, spinning 3D cards — is off-brand regardless of timing.

## Voice-Product Interaction Patterns

Because Wispr Flow is a voice-input product that lives as an overlay on top of *other* applications, its DESIGN.md must also cover a small set of always-on, cross-platform interaction components that don't exist in typical marketing-site design systems:

- **Flow Bar (desktop):** A slim, floating, pill-shaped bar that appears near the active text field on macOS and Windows whenever dictation starts. It shows a live waveform while recording, a static microphone glyph while idle, and a copy-affordance once transcription completes. It repositions automatically relative to system UI (e.g., the macOS Dock) and hides gracefully in full-screen contexts rather than breaking layout.
- **Flow Bubble (mobile/Android):** A floating circular overlay button, available in four size steps (0.70×, 0.85× default, 1.00×, 1.15×) with adjustable opacity, that sits above whatever app currently has keyboard focus. Tap-to-toggle or long-press-for-push-to-talk are both supported; the bubble can be configured to shrink to a dot when idle, reinforcing the system-wide preference for quiet, receding UI chrome over persistent visual noise.
- **State-correct iconography:** The system deliberately never shows an animated waveform in a static (non-listening) state, and never shows a static mic glyph while actively recording — the icon state is a functional signal, not just decoration, and should be treated as a hard rule in any faithful rebuild.
- **Inline correction affordances:** Because Flow supports "edit by voice" (e.g., saying "make this more concise" over highlighted text), any component library built from this system should include a lightweight selection-toolbar affordance — small, pill-shaped, ink-on-cream or ink-on-white — that appears near selected text, echoing the button-ghost-outline treatment at a smaller scale.
- **Personal Dictionary & Snippets as living lists:** These are presented as simple, scrollable pill-lists with an unobtrusive "+" add affordance (`{colors.surface-teal-deep}`-tinted plus icon) — deliberately low-ceremony, reinforcing that personalization in this product is incremental and ambient rather than a heavyweight settings screen.

## Do's and Don'ts

### Do
- Reserve EB Garamond exclusively for display headlines at 32px and above; treat it as sacred to the brand's identity.
- Apply Lavender Whisper to exactly one primary action per screen — never two.
- Alternate full-bleed cream, ink, and teal section backgrounds as a structural rhythm, not a decorative afterthought.
- Round every button, input, and nav element at 14px; round cards at 32px; keep decorative circular elements fully round.
- Use borders and hairlines as the primary depth device; reserve shadow for the single floating nav pill.
- Treat every animation as a metaphor for voice — waveforms, slow fades, gentle rises, curved reveals.
- Keep near-black `#1a1a1a` as the "black" of the system; never introduce pure `#000000` as a text or surface color.
- Give sections 64–96px of vertical breathing room so oversized serif headlines never feel cramped.

### Don't
- Don't apply the serif to body copy, buttons, navigation, or anything below 32px.
- Don't use Lavender Whisper as a section background, banner, or large fill — it is an accent, not a canvas color.
- Don't place white or light text on Lavender Whisper; contrast is insufficient — lavender always pairs with ink text.
- Don't introduce a third or fourth chromatic accent (blue, red, additional greens) — the system is duotone-plus-amber and stays that way.
- Don't use sharp 0–8px corners on cards, buttons, or nav; the system's floor is 14px for controls.
- Don't stack two dark or two teal sections back-to-back without a cream section between them — the light/dark/teal rhythm is structural.
- Don't animate with bounce, overshoot, or hard linear motion — every transition should read as calm and legato.
- Don't show an animated waveform on an idle microphone, or a static mic glyph while actively recording — these icon states are functional signals, not stylistic choices.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | ≥ 1440px | Full 1200px content column with generous side margins; display-xxl (120px) headlines appear at full scale |
| Desktop | 1024–1440px | Default max-width column; pricing grid 3-up; dark feature section stays two-column |
| Tablet | 768–1023px | Pricing grid 2-up; dark feature section may stack to a single column with the device mockup below the text |
| Mobile | < 768px | Pricing grid 1-up; nav pill collapses to a hamburger/menu icon; display sizes stair-step down (120 → 64 → 40px); decorative orbs shrink or are hidden to avoid crowding |

### Touch Targets
- Buttons maintain a minimum 44×44px hit area on mobile via 10–12px vertical padding plus the 14–16px line-height text.
- The mobile Flow Bubble equivalent ships with explicit user-adjustable size steps (0.70×–1.15×) specifically to accommodate different touch-accuracy needs — a rare case of a marketing-adjacent design system explicitly documenting accessibility-driven sizing controls.

### Collapsing Strategy
- Display tiers stair-step: 120 → 64 → 48 → 32px as viewport narrows.
- The two-tone headline treatment persists at every breakpoint; the underline accent may be dropped below 480px if it causes wrapping issues.
- The curved app-icon arc simplifies to a shorter, tighter curve or a straight row on narrow viewports rather than disappearing entirely.
- Pricing cards stair-step 3-up → 2-up → 1-up; the featured/inverted card always renders first in the mobile stack order regardless of its desktop position.
- The floating nav pill collapses its center links into a hamburger menu below 768px while keeping the primary lavender CTA visible.

### Image & Device-Mockup Behavior
Device mockups (phone/desktop frames showing the live product UI) use responsive `srcset` crops — the desktop treatment favors the full asymmetric two-column composition with the surrounding icon arc, while mobile crops tighter on the device itself and either simplifies or removes the icon arc to preserve legibility at small sizes.

## Iteration Guide

1. Focus on one component at a time — cards, buttons, and section bands are independent tokens; don't restyle several simultaneously.
2. Reference tokens directly (`{colors.surface-lavender}`, `{typography.display-xl}`, `{rounded.sm}`) rather than hardcoding hex values or pixel sizes, so future palette or scale adjustments propagate everywhere.
3. Default all body and UI text to `{typography.body}` (16px/1.3 Figtree); reserve `{typography.body-lg}` for marketing lead paragraphs directly beneath a display headline.
4. Preserve the cream → ink → teal section rhythm when adding new page sections — assign every new section to one of these three states rather than inventing a fourth.
5. When adding interactive or animated elements, check them against the Motion & Animation section first: does this motion evoke voice, fluidity, or calm editorial pacing? If not, reconsider the easing, duration, or concept before shipping it.
6. The EB Garamond / Figtree split and the cream/ink/teal-plus-lavender palette are the two non-negotiable pillars of this system — every other decision (radius, spacing, motion) exists to support them, not compete with them.
