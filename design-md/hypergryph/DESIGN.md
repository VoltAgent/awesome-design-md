---
version: alpha
name: Hypergryph-inspired-design-analysis
description: |
  A cross-brand analysis of Hypergryph's corporate, game, music, and comic sites. The shared language is industrial and cinematic rather than uniformly dark: full-viewport media, hard rules, mechanical Latin display faces, CJK-first text, and compact interface labels remain constant while each property owns a signal palette — corporate lime, Arknights cyan, Endfield hazard yellow, Monster Siren ice cyan, and Terra Historicus crimson or yellow.

colors:
  canvas-black: "#000000"
  canvas-ink: "#09090b"
  canvas-graphite: "#191919"
  panel-arknights: "#1d1f20"
  panel-raised: "#242424"
  steel-dark: "#35373c"
  steel-mid: "#585858"
  steel-text: "#c6c9ce"
  paper: "#ffffff"
  paper-soft: "#f7f7f7"
  paper-muted: "#e5e5e5"
  ink-dark: "#191919"
  ink-light: "#ffffff"
  ink-muted-dark: "#999999"
  corporate-lime: "#f3ff00"
  arknights-cyan: "#18d1ff"
  arknights-cyan-deep: "#06bbff"
  siren-ice: "#a0edff"
  endfield-yellow: "#fffa00"
  endfield-green: "#00ffa2"
  endfield-magenta: "#ff1aac"
  comic-crimson: "#b0243b"

typography:
  display-mechanical:
    fontFamily: "Novecentosanswide-Bold, Bender-Bold, Geometos, sans-serif"
    fontSize: 112px
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: -0.04em
  display-cinematic:
    fontFamily: "Gilroy-Light, Oswald-Medium, Novecentosanswide-Medium, sans-serif"
    fontSize: 96px
    fontWeight: 300
    lineHeight: 1
    letterSpacing: -0.03em
  display-editorial:
    fontFamily: "SourceHanSerifCN-Heavy, 'Source Han Serif SC', serif"
    fontSize: 64px
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: -0.04em
  heading-xl:
    fontFamily: "SourceHanSans-Bold, SansBold, 'Noto Sans CJK SC', sans-serif"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.02em
  heading-lg:
    fontFamily: "SourceHanSans-Bold, SansBold, 'Noto Sans CJK SC', sans-serif"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: 0
  heading-md:
    fontFamily: "SourceHanSans-Bold, SansBold, 'Noto Sans CJK SC', sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  body-lg:
    fontFamily: "SourceHanSans-Regular, SansRegular, 'Noto Sans CJK SC', sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body-md:
    fontFamily: "SourceHanSans-Regular, SansRegular, 'Noto Sans CJK SC', sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  label-industrial:
    fontFamily: "Bender-Regular, Gilroy-Medium, Novecentosanswide-Medium, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.06em
  label-condensed:
    fontFamily: "Oswald-Medium, Novecentosanswide-DemiBold, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0.04em
  caption:
    fontFamily: "Bender-Regular, SourceHanSans-Regular, 'Noto Sans CJK SC', sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.02em

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 6px
  lg: 8px
  full: 9999px
  circle: 50%

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  3xl: 48px
  4xl: 64px
  5xl: 80px
  section: 96px

components:
  page-shell-dark:
    backgroundColor: "{colors.canvas-black}"
    textColor: "{colors.ink-light}"
    typography: "{typography.body-md}"
  page-shell-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-dark}"
    typography: "{typography.body-md}"
  header-glass:
    backgroundColor: "rgba(51,51,51,0.88)"
    textColor: "{colors.ink-light}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    height: 72px
    padding: "{spacing.md} {spacing.xl}"
  nav-link:
    backgroundColor: transparent
    textColor: "{colors.ink-light}"
    typography: "{typography.label-condensed}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.md}"
  panel-overlay-black:
    backgroundColor: "rgba(0,0,0,0.88)"
    textColor: "{colors.ink-light}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  button-arknights:
    backgroundColor: "{colors.arknights-cyan}"
    textColor: "{colors.canvas-black}"
    typography: "{typography.label-industrial}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.xl}"
  button-endfield:
    backgroundColor: "{colors.canvas-graphite}"
    textColor: "{colors.ink-light}"
    borderColor: "{colors.endfield-yellow}"
    typography: "{typography.label-industrial}"
    rounded: "{rounded.xs}"
    padding: "{spacing.md} {spacing.xl}"
  section-title-rail:
    backgroundColor: "{colors.endfield-yellow}"
    textColor: "{colors.ink-dark}"
    typography: "{typography.heading-xl}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.xl}"
  loading-rail:
    backgroundColor: "{colors.canvas-graphite}"
    textColor: "{colors.steel-text}"
    borderColor: "{colors.steel-mid}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} 0"
  cinematic-hero:
    backgroundColor: "{colors.canvas-black}"
    textColor: "{colors.ink-light}"
    typography: "{typography.display-mechanical}"
    rounded: "{rounded.none}"
    padding: "{spacing.section} {spacing.xl}"
  operator-profile:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-dark}"
    borderColor: "{colors.endfield-yellow}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  music-track-row:
    backgroundColor: "{colors.canvas-ink}"
    textColor: "{colors.steel-text}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.lg}"
    activeColor: "{colors.siren-ice}"
  comic-franchise-card:
    backgroundColor: "{colors.canvas-graphite}"
    textColor: "{colors.ink-light}"
    typography: "{typography.heading-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm}"
    accentColor: "{colors.comic-crimson}"
  metadata-tag-dark:
    backgroundColor: "{colors.canvas-graphite}"
    textColor: "{colors.ink-light}"
    typography: "{typography.label-industrial}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.sm}"
  metadata-tag-signal:
    backgroundColor: "{colors.endfield-yellow}"
    textColor: "{colors.ink-dark}"
    typography: "{typography.label-industrial}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.sm}"
  footer-technical:
    backgroundColor: "{colors.canvas-graphite}"
    textColor: "{colors.ink-muted-dark}"
    borderColor: "{colors.steel-dark}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "{spacing.xxl} {spacing.xl}"

---

## Overview

Hypergryph's public web presence is a family of art-directed properties rather than a single reusable website theme:

- Corporate: `https://www.hypergryph.com/`
- Arknights CN: `https://ak.hypergryph.com/`
- Arknights: Endfield: `https://endfield.hypergryph.com/`
- Monster Siren Records: `https://monster-siren.hypergryph.com/`
- Terra Historicus: `https://comic.hypergryph.com/`
- Arknights Global: `https://www.arknights.global/`

The common system is **industrial composition**: full-viewport artwork or video, thin rules, loading rails, compact metadata, hard-edged panels, and a deliberate mix of CJK text with mechanical Latin display faces. Darkness is an important shared medium, but not an absolute rule. Endfield alternates black cinematic states with white editorial sections and large yellow structures; comic detail surfaces also introduce light reading areas.

Color works as a **sub-brand slot**, not one universal accent. Lime identifies the corporate site, cyan identifies Arknights, ice cyan identifies Monster Siren, yellow drives Endfield, and crimson/yellow distinguish the two Historicus properties. Preserve that separation when adapting the system.

## Observed Property Variants

| Property | Surface and accent | Type and composition |
|---|---|---|
| Hypergryph Corporate | Charcoal and black overlays; lime `#f3ff00` for hover and short rules | Source Han Sans with Geometos/Bender; 72px blurred desktop header; floating information plates over a monochrome full-viewport carousel |
| Arknights CN | Black, `#1d1f20`, `#242424`; cyan `#18d1ff` for active controls and progress | Source Han Sans, Bender, Oswald, Novecento; oversized numeric/display layers, thin grid lines, operator profiles, modular media navigation |
| Arknights: Endfield | White and `#191919`; hazard yellow `#fffa00`; controlled magenta/green strips | Sans aliases for localized CJK, Gilroy, Novecento, Space Grotesk; clipped blocks, striped technical fills, giant hollow type, 4K-class video media |
| Monster Siren Records | Near-black `#09090b`, steel gray, ice cyan `#a0edff` | Geometos/Bender and Source Han Sans **plus Source Han Serif** for editorial titles; waveform/loading motifs and persistent player controls |
| Terra Historicus | Dark gateway with large image cards; crimson `#b0243b` and yellow franchise accents; light detail surfaces | Source Han Sans, Geometos, Gilroy ExtraBold; image-first navigation, hard color corners, separate portrait/landscape compositions |
| Arknights Global | Black-and-white HUD grid with restrained cyan branding | Oswald, Noto Sans CJK, Bender, and Novecento; condensed navigation, thin white rules, fixed edge utilities |

The Global site shares the franchise vocabulary, but it is not a pixel-for-pixel localization of the current CN implementation. Treat it as a sibling surface with the same typographic and tactical ingredients.

## Colors

### Structural Surfaces

- Use `{colors.canvas-black}`, `{colors.canvas-ink}`, and `{colors.canvas-graphite}` for cinematic shells, loaders, and media-first chapters.
- Use `{colors.paper}` and `{colors.paper-soft}` for Endfield information sections and comic reading surfaces.
- Build depth with hard value steps and opacity overlays before adding shadows.
- Keep primary text binary: white on dark, near-black on light. Steel grays carry metadata and secondary controls.

### Sub-brand Signals

- **Corporate lime** (`{colors.corporate-lime}`): hover states, tiny grids, and short underline rules.
- **Arknights cyan** (`{colors.arknights-cyan}`): selected navigation, progress, active tabs, and key actions.
- **Monster Siren ice** (`{colors.siren-ice}`): playback state, waveform progress, active tracks, and loading feedback.
- **Endfield yellow** (`{colors.endfield-yellow}`): structural bands, active navigation, clipped button edges, and section transitions.
- **Endfield magenta/green** (`{colors.endfield-magenta}`, `{colors.endfield-green}`): paired data stripes and operator markers, not general-purpose success/error colors.
- **Comic crimson** (`{colors.comic-crimson}`): Terra Historicus identity and card framing; the Talos-II sibling uses yellow.

Do not combine every accent on one screen. The exception is Endfield's intentional magenta–green–yellow stripe sequence, used as a narrow technical marker rather than ambient decoration.

## Typography

### Pairing Logic

1. Use Source Han Sans or Noto Sans CJK for functional CJK copy and dense interface text.
2. Use Bender, Oswald, Geometos, Novecento, or Gilroy for Latin labels, chapter numbers, URLs, and display layers.
3. Use Source Han Serif only for Monster Siren's editorial titles and descriptive passages; it is a deliberate tonal exception.
4. Keep display text compact and graphic. Very large words often act as background structure, not conventional headings.

### Scale

- `{typography.display-mechanical}` represents Arknights' 7rem display tier and the ecosystem's oversized industrial lettering.
- `{typography.display-cinematic}` suits Endfield character codes and scene titles.
- `{typography.display-editorial}` is reserved for Monster Siren's literary title moments.
- `{typography.heading-xl}` through `{typography.body-md}` carry readable localized content.
- `{typography.label-industrial}` and `{typography.caption}` carry indices, dates, URLs, progress, and system-like metadata.

The live sites often scale the root font with viewport or orientation. Preserve the hierarchy rather than freezing desktop display values on smaller screens.

## Layout

### Viewport Staging

- Treat the viewport as a composed scene. Corporate and the entertainment gateways fit major states into one screen instead of relying on a conventional long marketing page.
- Anchor controls to rails, corners, and image edges. Avoid arbitrary floating pills.
- Let artwork dominate, but constrain text inside opaque or high-contrast overlays.
- Use asymmetry deliberately: a large media field can be balanced by a narrow operator panel, project card, or metadata column.

### Grid and Rules

- Use 1px lines to establish axes, progress, and alignment.
- Prefer rectangular panels and clipped corners over soft cards.
- Build hierarchy through scale jumps: micro metadata beside very large titles or character art.
- Use stripes, dot fields, waveform marks, and oversized type only when they support navigation, loading, audio, or world-building.

## Components

### Navigation

- **`header-glass`** mirrors the corporate desktop bar: 72px tall, blurred charcoal, white text. Reduce it to roughly 56px on narrow screens.
- **`nav-link`** is condensed or mechanical. Give active states the current property's signal color rather than a universal brand color.
- Fixed side utilities and edge rails are appropriate for game marketing surfaces; standard centered nav is not mandatory.

### Media and State

- **`cinematic-hero`** is a full-bleed image or video stage with content-aware overlays.
- **`loading-rail`** exposes progress as part of the experience. It combines a thin line, percentage, property name, and URL/technical metadata.
- Video should use a poster or designed loading state, preserve crop intent, and offer a motion-reduced fallback.

### Content Modules

- **`panel-overlay-black`** places compact corporate information over artwork without softening the composition.
- **`operator-profile`** combines character art, large names/codes, technical tags, and readable descriptive copy.
- **`music-track-row`** uses ice cyan only for the active track or playback control.
- **`comic-franchise-card`** is image-forward; title art overlaps the image and a narrow color edge identifies the franchise.
- **`metadata-tag-dark`** and **`metadata-tag-signal`** create hard contrast for category labels and selected state.

Avoid adding pricing cards, carts, dashboard tables, generic toasts, or SaaS authentication surfaces unless the product genuinely needs them. They are not defining patterns in the reference sites.

## Motion

- Use restrained transitions for navigation and content controls, generally around 200–500ms.
- Reserve long cinematic sequences for initial loading, hero playback, and chapter changes.
- Favor horizontal carousel movement, line growth, mask/clip reveals, and subtle scale over springy card motion.
- Current Endfield assets include 4K-class desktop video. Treat resolution as media quality, not permission to autoplay large files without adaptive delivery.
- Respect `prefers-reduced-motion`: replace autoplay or layered reveals with a strong poster frame and immediate readable content.

## Responsive Behavior

The ecosystem is strongly **orientation-driven**. Several sites use portrait/landscape branches rather than only conventional width breakpoints.

### Portrait

- Stack Corporate's overlay panels and project media into a vertical reading sequence.
- Move corner metadata into inline rails beneath media.
- Crop artwork intentionally; do not squeeze a desktop composition into the viewport.
- Reduce giant display layers aggressively while keeping labels and body copy readable.
- Use property-specific portrait assets where available.

### Landscape

- Preserve full-viewport staging, side utilities, and asymmetrical media/text balance.
- Keep thin alignment rules visible across the composition.
- Allow large display type and character art to overlap structural regions without covering controls.

Monster Siren's current mobile presentation retains a wide, art-directed canvas in places. Do not copy that overflow by default; use a dedicated portrait composition unless deliberate horizontal exploration is part of the experience.

## Accessibility

- Keep body copy at 16px or larger even when metadata becomes very small.
- Never rely on accent color alone; pair active states with a rule, fill, icon, index, or text change.
- Supply text alternatives for image-based title art and labels.
- Ensure black overlay panels remain readable over changing video and carousel frames.
- Keep essential navigation available before heavy media has loaded.
- Provide keyboard focus with the current sub-brand accent and sufficient contrast.

## Do's and Don'ts

### Do

1. Start with industrial structure: rails, hard panels, image crops, and typographic contrast.
2. Select exactly one sub-brand signal palette for the surface being designed.
3. Pair mechanical Latin display type with a CJK-capable text family.
4. Make loading, playback, progress, and selection states part of the visual language.
5. Art-direct portrait and landscape separately.

### Don't

1. Don't describe the entire ecosystem as a single cyan-and-yellow dark theme.
2. Don't turn the system into rounded, shadow-heavy SaaS cards.
3. Don't scatter neon accents as decoration without state or identity meaning.
4. Don't place fine white text directly on uncontrolled media.
5. Don't reproduce cinematic motion without performance and reduced-motion fallbacks.

## Adaptation Recipe

1. Choose a surface mode: cinematic dark, editorial light, or an intentional alternation of both.
2. Choose one identity accent: lime, cyan, ice cyan, yellow, or crimson.
3. Establish a multilingual type pair plus one mechanical display face.
4. Build a full-viewport hero, loading/progress rail, active navigation state, media/content module, and technical footer.
5. Design landscape and portrait compositions independently, then validate intermediate widths.
6. Add texture and motion only after hierarchy, contrast, and media loading behavior work.

Prompt seed for coding and design agents:

> Build a Hypergryph-inspired entertainment surface with full-viewport art direction, hard industrial geometry, thin alignment rails, mechanical Latin display type paired with CJK-ready body text, compact technical metadata, and one sub-brand signal accent. Use cinematic dark and editorial light surfaces intentionally; avoid generic rounded SaaS cards and decorative neon overload.
