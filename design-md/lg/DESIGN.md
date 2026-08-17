---
version: alpha
name: LG-Electronics-design-analysis
description: >-
  An analysis of LG Electronics' Emotionally Intelligent Design language and
  current consumer-commerce patterns: official Active Red anchors a warm,
  human technology identity, while rounded forms, focused imagery, and a
  restrained live retail system support the Life's Good promise.

colors:
  primary: "#FD312E"
  official-heritage-red: "#A50034"
  official-warm-gray: "#F0ECE4"
  official-white: "#FFFFFF"
  official-black: "#000000"
  observed-commerce-action-red: "#EA1917"
  observed-text-primary: "#111111"
  observed-text-secondary: "#333333"
  observed-text-muted: "#666666"
  observed-text-disabled: "#8F8F8F"
  observed-border: "#DDDDDD"
  observed-divider: "#EFF0F2"
  observed-surface: "#FFFFFF"
  observed-surface-soft: "#F9F9F9"
  observed-surface-muted: "#F3F3F3"
  on-red: "#FFFFFF"

typography:
  observed-commerce-caption:
    fontFamily: "'Pretendard', 'Malgun Gothic', Dotum, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  observed-commerce-label:
    fontFamily: "'Pretendard', 'Malgun Gothic', Dotum, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 18px
  observed-commerce-body-sm:
    fontFamily: "'Pretendard', 'Malgun Gothic', Dotum, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  observed-commerce-body:
    fontFamily: "'Pretendard', 'Malgun Gothic', Dotum, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  observed-commerce-body-lg:
    fontFamily: "'Pretendard', 'Malgun Gothic', Dotum, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  observed-commerce-title-sm:
    fontFamily: "'Pretendard', 'Malgun Gothic', Dotum, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 28px
  observed-commerce-title:
    fontFamily: "'Pretendard', 'Malgun Gothic', Dotum, sans-serif"
    fontSize: 28px
    fontWeight: 600
    lineHeight: 38px
  observed-commerce-display-mobile:
    fontFamily: "'Pretendard', 'Malgun Gothic', Dotum, sans-serif"
    fontSize: 32px
    fontWeight: 600
    lineHeight: 38px
  observed-commerce-display-desktop:
    fontFamily: "'Pretendard', 'Malgun Gothic', Dotum, sans-serif"
    fontSize: 36px
    fontWeight: 600
    lineHeight: 50px
  observed-editorial-display:
    fontFamily: "'Pretendard', 'Malgun Gothic', Dotum, sans-serif"
    fontSize: 40px
    fontWeight: 700
    lineHeight: 56px
  observed-promo-title-desktop:
    fontFamily: "'Pretendard', 'Malgun Gothic', Dotum, sans-serif"
    fontSize: 22px
    fontWeight: 600
    lineHeight: 30px
  observed-promo-title-mobile:
    fontFamily: "'Pretendard', 'Malgun Gothic', Dotum, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 22px
  observed-commerce-button:
    fontFamily: "'Pretendard', 'Malgun Gothic', Dotum, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 22px
  observed-commerce-button-mobile:
    fontFamily: "'Pretendard', 'Malgun Gothic', Dotum, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  observed-filter-label:
    fontFamily: "'Pretendard', 'Malgun Gothic', Dotum, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 14px

rounded:
  observed-control: 6px
  observed-compact-card: 8px
  observed-card: 12px
  observed-panel: 16px
  observed-campaign-card: 20px
  observed-feature: 24px
  observed-pill: 999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  xxxl: 40px
  section-sm: 56px
  section-md: 80px
  section-lg: 120px

components:
  official-identity-field-light:
    backgroundColor: "{colors.official-white}"
    textColor: "{colors.official-black}"
  official-identity-field-warm:
    backgroundColor: "{colors.official-warm-gray}"
    textColor: "{colors.official-black}"
  official-identity-field-active-red:
    backgroundColor: "{colors.primary}"
  official-identity-field-heritage-red:
    backgroundColor: "{colors.official-heritage-red}"
  accessible-commerce-primary-desktop-button:
    backgroundColor: "{colors.observed-commerce-action-red}"
    textColor: "{colors.on-red}"
    typography: "{typography.observed-commerce-button}"
    rounded: "{rounded.observed-control}"
    padding: 0 20px
    height: 56px
  accessible-commerce-primary-mobile-button:
    backgroundColor: "{colors.observed-commerce-action-red}"
    textColor: "{colors.on-red}"
    typography: "{typography.observed-commerce-button-mobile}"
    rounded: "{rounded.observed-control}"
    padding: 0 12px
    height: 48px
  accessible-commerce-primary-button-focus:
    outline: "3px solid {colors.official-black}"
    outlineOffset: 2px
  accessible-commerce-primary-button-disabled:
    backgroundColor: "{colors.observed-surface-muted}"
    textColor: "{colors.observed-text-muted}"
  observed-more-button:
    backgroundColor: "{colors.observed-surface}"
    textColor: "{colors.observed-text-primary}"
    typography: "{typography.observed-commerce-body-sm}"
    rounded: "{rounded.observed-pill}"
    padding: 0 20px
    height: 48px
    border: "1px solid {colors.observed-border}"
  observed-plp-filter-input:
    backgroundColor: "{colors.observed-surface}"
    textColor: "{colors.observed-text-primary}"
    typography: "{typography.observed-filter-label}"
    rounded: "{rounded.observed-control}"
    padding: 8px
    height: 32px
    border: "1px solid {colors.observed-text-disabled}"
  observed-product-grid-cell:
    backgroundColor: "{colors.observed-surface}"
    textColor: "{colors.observed-text-primary}"
    typography: "{typography.observed-commerce-body}"
    padding: 32px
    border: "1px solid {colors.observed-border}"
  observed-lineup-panel:
    backgroundColor: "{colors.observed-surface-muted}"
    textColor: "{colors.observed-text-primary}"
    typography: "{typography.observed-commerce-title}"
    rounded: "{rounded.observed-feature}"
    padding: 24px
  observed-lineup-campaign-card:
    backgroundColor: "{colors.observed-surface-soft}"
    textColor: "{colors.observed-text-primary}"
    typography: "{typography.observed-commerce-body}"
    rounded: "{rounded.observed-campaign-card}"
    padding: 24px
  observed-desktop-nav:
    backgroundColor: "{colors.observed-surface}"
    textColor: "{colors.observed-text-primary}"
    typography: "{typography.observed-commerce-body-sm}"
    height: 59px
  observed-pill-nav:
    backgroundColor: "{colors.observed-surface-muted}"
    textColor: "{colors.observed-text-primary}"
    typography: "{typography.observed-commerce-body-sm}"
    rounded: "{rounded.observed-pill}"
    height: 40px
  observed-mobile-nav-item:
    backgroundColor: "{colors.observed-surface}"
    textColor: "{colors.observed-text-primary}"
    typography: "{typography.observed-commerce-body-sm}"
    padding: 0 14px
    height: 48px
  observed-hero-desktop:
    backgroundColor: "{colors.observed-surface-muted}"
    textColor: "{colors.observed-text-primary}"
    typography: "{typography.observed-commerce-display-desktop}"
    height: 500px
    padding: 40px
  observed-hero-mobile:
    backgroundColor: "{colors.observed-surface-muted}"
    textColor: "{colors.observed-text-primary}"
    typography: "{typography.observed-commerce-display-mobile}"
    padding: 20px
    aspect-ratio: "1 / 1"
  observed-promo-banner-desktop:
    backgroundColor: "{colors.observed-surface-muted}"
    textColor: "{colors.observed-text-primary}"
    typography: "{typography.observed-promo-title-desktop}"
    rounded: "{rounded.observed-panel}"
    height: 180px
    padding: 24px
  observed-promo-banner-mobile:
    backgroundColor: "{colors.observed-surface-muted}"
    textColor: "{colors.observed-text-primary}"
    typography: "{typography.observed-promo-title-mobile}"
    rounded: "{rounded.observed-compact-card}"
    height: 110px
    padding: 16px
  observed-editorial-tab-active:
    backgroundColor: "{colors.observed-commerce-action-red}"
    textColor: "{colors.on-red}"
    typography: "{typography.observed-commerce-body-sm}"
    rounded: "{rounded.observed-pill}"
    padding: 8px 16px
  observed-mobile-bottom-cta:
    backgroundColor: "{colors.observed-surface}"
    textColor: "{colors.observed-text-primary}"
    typography: "{typography.observed-commerce-button-mobile}"
    padding: 12px 20px
---

## Overview

This file is an independent design-system analysis inspired by public LG Electronics identity material and observable LGE.COM interfaces. It is not an official LG asset pack, endorsement, or replacement for current brand guidelines. It does not reproduce logos, proprietary font files, slogan artwork, or other protected assets.

LG's official philosophy is **Emotionally Intelligent Design (EI)**. EI balances innovative technology with warmth and emotional value, translating the **Life's Good** promise into an identity that should feel capable without feeling cold. Geometric discipline communicates technology; softened forms, human movement, and warm color keep that discipline approachable.

Two evidence layers are deliberately separated:

- **Official identity** includes the five brand colors, EI typography families, Basic and Connected EI Forms, Hero / Connection / Focus layouts, the EI Lens, gradients described without recipes, and digital logo play.
- **Observed commerce** records current consumer-interface values such as the Pretendard stack, `#EA1917` actions, retail dimensions, radii, shadows, and responsive breakpoints. These are implementation observations, not universal LG brand mandates.

### Core Character

- **Intelligent:** Use clear hierarchy, purposeful focus, and controlled geometry rather than ornamental complexity.
- **Emotional:** Introduce warmth through rounded inner contours, human flow, generous imagery, and moments of responsive motion.
- **Optimistic:** Let Active Red create energy against White, Warm Gray, or Black while preserving legibility.
- **Connected:** Allow forms and content to relate, overlap, frame, or move together rather than appearing as isolated decoration.
- **Focused:** Direct attention through composition first; selective sharpness, blur, and framing belong to the EI Lens, not to indiscriminate effects.

The primary token is official **Active Red** (`{colors.primary}`), not the different red observed on current commerce controls. Any implementation should make that distinction explicit before choosing a red for a specific context.

### Default Consumer Web Profile

When no narrower route or identity context is specified, generate a consumer
commerce interface with the observed Pretendard stack, White or soft-gray
surfaces, `{colors.observed-text-primary}` text, the 1380px desktop content
grid, and flat, border-separated product cells. Use
`{component.accessible-commerce-primary-desktop-button}` or its mobile variant
for the main CTA. Reserve official Active Red for identity expression unless
the rendered text treatment independently meets contrast requirements.

## Colors

### Official Identity Palette

| Token | Value | Role |
|---|---:|---|
| `{colors.primary}` | `#FD312E` | Official Active Red; energetic lead color and canonical primary |
| `{colors.official-heritage-red}` | `#A50034` | Official Heritage Red; deeper brand continuity |
| `{colors.official-warm-gray}` | `#F0ECE4` | Official Warm Gray; humane neutral field |
| `{colors.official-white}` | `#FFFFFF` | Official White; open, clear field |
| `{colors.official-black}` | `#000000` | Official Black; maximum contrast and authority |

Active Red has published print specifications of RGB `253 / 49 / 46`, CMYK `0 / 97 / 95 / 0`, and PMS `2034 C`. Heritage Red has published specifications of RGB `165 / 0 / 52`, CMYK `0 / 100 / 62 / 22`, and PMS `207 C`. These print references are production guidance, not additional digital color tokens.

### Official Gradient Families

LG describes four identity gradients from light to dark:

1. White into pale pink.
2. White into pale red.
3. Red into white.
4. Dark red into black.

No official stops, angles, interpolation space, or opacity values are published in the source basis used here. Treat these as art-direction families, not copy-ready CSS. Do not reverse-engineer a precise recipe from the descriptions.

### Observed Commerce Palette

| Token | Value | Observed use |
|---|---:|---|
| `{colors.observed-commerce-action-red}` | `#EA1917` | Base/legacy actions and active editorial tabs |
| `{colors.observed-text-primary}` | `#111111` | Primary UI text |
| `{colors.observed-text-secondary}` | `#333333` | Secondary strong text |
| `{colors.observed-text-muted}` | `#666666` | Supporting text |
| `{colors.observed-text-disabled}` | `#8F8F8F` | Disabled text and PLP input border |
| `{colors.observed-border}` | `#DDDDDD` | Controls and product-cell boundaries |
| `{colors.observed-divider}` | `#EFF0F2` | Low-emphasis separators |
| `{colors.observed-surface}` | `#FFFFFF` | Main commerce surface |
| `{colors.observed-surface-soft}` | `#F9F9F9` | Soft alternate surface |
| `{colors.observed-surface-muted}` | `#F3F3F3` | Stronger neutral surface |

`{colors.observed-commerce-action-red}` is not a substitute name for Active Red. Current V3 primary buttons use official Active Red, while base/legacy controls and editorial states may use the separate commerce red. Preserve that distinction instead of normalizing both reds into one value.

### Contrast

- Pair red fields with `{colors.on-red}` only after verifying contrast at the rendered size and weight.
- The observed V3 Active Red and White button pair has a contrast ratio of
  approximately 3.71:1. It does not meet WCAG AA for normal-size text, so do
  not reuse it without an accessible color, size, or treatment adjustment.
- Keep the Life's Good slogan at sufficient contrast against every image, gradient, or color field.
- Use `{colors.observed-text-disabled}` to communicate state only in combination with semantics or native disabled behavior; color alone is insufficient.
- Do not place thin red text over photography where local contrast can change.

## Typography

### Official EI Typography

The official proprietary families are **LG EI Headline** and **LG EI Text**. Each is published in Light, Regular, Semibold, and Bold styles. The available source material does not publish type sizes, line heights, tracking, font metrics, or numeric weight mappings, so this analysis does not invent them.

EI typography combines two ideas:

- Geometric overall forms and firm outer circles express innovative technology.
- Rounded inner edges and a handwriting-derived flow introduce warmth and emotional character.

The **Life's Good slogan lettering is a separate asset** inspired by product silhouettes. It is not a text style, font substitute, or license to recreate the slogan with LG EI Headline. Preserve the supplied artwork and sufficient contrast when authorized assets are available.

### Observed Consumer UI Typography

Current consumer pages use the stack `Pretendard`, `Malgun Gothic`, `Dotum`, `sans-serif`, with weights 400, 500, 600, and 700. These tokens document that live implementation and do not redefine official EI typography.

| Token | Size / line height | Weight | Typical observed role |
|---|---:|---:|---|
| `{typography.observed-commerce-caption}` | 12 / 16px | 400 | Captions and compact metadata |
| `{typography.observed-commerce-label}` | 13 / 18px | 500 | Labels |
| `{typography.observed-commerce-body-sm}` | 14 / 20px | 400 | Compact body and navigation |
| `{typography.observed-commerce-body}` | 16 / 24px | 400 | Default body |
| `{typography.observed-commerce-body-lg}` | 18 / 28px | 400 | Emphasized body |
| `{typography.observed-commerce-title-sm}` | 20 / 28px | 600 | Small titles |
| `{typography.observed-commerce-title}` | 28 / 38px | 600 | Section titles |
| `{typography.observed-commerce-display-mobile}` | 32 / 38px | 600 | Mobile hero headline |
| `{typography.observed-commerce-display-desktop}` | 36 / 50px | 600 | Desktop hero headline |
| `{typography.observed-editorial-display}` | 40 / 56px | 700 | Editorial display |
| `{typography.observed-promo-title-desktop}` | 22 / 30px | 600 | Desktop promotion title |
| `{typography.observed-promo-title-mobile}` | 16 / 22px | 600 | Mobile promotion title |
| `{typography.observed-commerce-button}` | 16 / 22px | 600 | Desktop V3 button label |
| `{typography.observed-commerce-button-mobile}` | 14 / 20px | 500 | Mobile V3 button label |
| `{typography.observed-filter-label}` | 12 / 14px | 400 | PLP-specific filter input |

### Implementation Fallback

When proprietary LG EI fonts are unavailable, use the observed consumer stack only as a plainly labeled implementation fallback. Do not claim Pretendard is an official identity replacement, and do not fabricate LG EI font files, metrics, or numeric weight mappings.

## Layout

### Official EI Modes

LG identifies three layout modes:

- **Hero:** Give one dominant idea, product, image, or message the visual lead. Supporting content should reinforce rather than compete.
- **Connection:** Build visible relationships among forms, products, people, or messages. Alignment, proximity, overlap, and motion can express interaction.
- **Focus:** Isolate the essential subject using framing and the EI Lens. Reduce surrounding competition without erasing useful context.

Choose one mode as the governing composition. Combining all three at equal strength creates ambiguity rather than emotional intelligence.

### EI Lens

The EI Lens creates focus through selective sharpness, blur, and framing. No exact blur radius, opacity, mask geometry, or transition value is published. Use the treatment to clarify a subject, not as a generic frosted-glass style. Keep text and essential controls outside blurred regions unless their legibility is independently preserved.

### Observed Commerce Grid

- Desktop shell: 1460px.
- Desktop content area: 1380px with 40px gutters.
- Mobile commerce: up to 767px with 20px gutters.
- Repeated spacing: `{spacing.xxs}` 4, `{spacing.xs}` 8,
  `{spacing.sm}` 12, `{spacing.md}` 16, `{spacing.lg}` 20,
  `{spacing.xl}` 24, `{spacing.xxl}` 32, `{spacing.xxxl}` 40,
  `{spacing.section-sm}` 56, `{spacing.section-md}` 80, and
  `{spacing.section-lg}` 120px.

The 1460px shell and 1380px content width describe the same desktop system:
40px outer gutters on each side. Preserve those gutters before widening
internal modules.

### Product Listing Geometry

The observed desktop product grid is a field of border-separated cells, not a
collection of floating cards. Each item has a minimum width of 376px. Product
imagery is contained within a maximum 230px square rather than filling the
cell. Use `{colors.observed-border}` between cells and avoid adding card shadows
or isolated rounded containers to standard listing items.

Use three columns within the 1380px desktop content area. At narrower desktop
and tablet widths, use two columns while each cell can retain its 376px
minimum. At the current mobile breakpoint, use one column and remove duplicated
interior borders. Keep product imagery contained and centered rather than
scaling it to fill the cell.

### Hero And Promotion Geometry

- Desktop homepage hero: a 500px strip with
  `{typography.observed-commerce-display-desktop}`.
- Mobile homepage hero: a square crop with
  `{typography.observed-commerce-display-mobile}`.
- Desktop promotion banner: 1380 × 180px, `{rounded.observed-panel}`, title
  22 / 30px.
- Mobile promotion banner: 110px high, `{rounded.observed-compact-card}`, title
  16 / 22px.

Crop imagery around the product or human subject rather than mechanically
centering the desktop frame on mobile.

## Elevation & Depth

The official identity relies on color, composition, focus, and connected form;
the research basis does not establish an official universal shadow scale.
Current commerce pages use two observed shadow treatments:

| Level | Value | Observed role |
|---|---|---|
| Base | `2px 4px 12px rgba(0,0,0,.16)` | Raised commerce surface |
| Floating | `0 2px 8px rgba(33,39,49,.078), 0 0 1px rgba(33,39,49,.361)` | Light floating utility surface |

Use elevation sparingly. Product-grid cells stay border-separated and flat.
Do not turn them into shadowed cards simply because a base shadow exists.

An observed lineup campaign treatment uses a 24px outer panel radius, internal
translucent cards with 20px radii, and `blur(8px)`. This is a scoped campaign
treatment, not the official EI Lens recipe and not a universal commerce card.
The similarity between campaign blur and the EI focus principle does not make
their numeric values interchangeable.

The observed mobile bottom CTA is fixed with 20px side insets and a 32px blur
behind its surface. Maintain separation from page content and account for the
device safe area; never let the fixed region hide the final actionable content.

## Shapes

### Official EI Forms

**Basic EI Forms** are simple and rounded. **Connected EI Forms** interact,
especially through motion. The exact corner radius, circle diameter, connection
distance, and motion geometry are not published in the source basis.

Rounded does not mean every object becomes a pill. A Basic EI Form should be
immediately understandable; a Connected EI Form should make a relationship
clear. Prefer a small number of legible forms over decorative blobs.

### Observed Commerce Radius Scale

| Token | Value | Observed use |
|---|---:|---|
| `{rounded.observed-control}` | 6px | Standard controls |
| `{rounded.observed-compact-card}` | 8px | Compact cards and mobile promo |
| `{rounded.observed-card}` | 12px | General cards |
| `{rounded.observed-panel}` | 16px | Panels and desktop promo |
| `{rounded.observed-campaign-card}` | 20px | Internal lineup campaign cards |
| `{rounded.observed-feature}` | 24px | Feature and lineup outer panels |
| `{rounded.observed-pill}` | 999px | Pills and more button |

These radii describe observed retail UI, not official measurements for Basic
or Connected EI Forms. Keep that distinction visible in component names and
documentation.

## Components

### Official Identity Fields

The four `official-identity-field-*` components are minimal color fields, not
complete UI recipes. They preserve official palette values without inventing
dimensions or unsupported foreground rules:

- `official-identity-field-light` uses White and Black.
- `official-identity-field-warm` uses Warm Gray and Black.
- `official-identity-field-active-red` establishes an Active Red field without
  prescribing a foreground color.
- `official-identity-field-heritage-red` establishes a Heritage Red field
  without prescribing a foreground color.

Always select and test text or slogan artwork at its actual size and
background. A field token does not prescribe a foreground color or guarantee
contrast for every weight or image.

### Buttons

**`accessible-commerce-primary-desktop-button`** is 56px high with 20px
horizontal padding, `{typography.observed-commerce-button}`, and
`{rounded.observed-control}`. It uses the observed commerce action red with
White text, which reaches approximately 4.52:1 contrast.

**`accessible-commerce-primary-mobile-button`** reduces height to 48px and
horizontal padding to 12px. Its label changes to 14 / 20px at weight 500
through `{typography.observed-commerce-button-mobile}` while retaining the 6px
radius.

The observed V3 variant instead uses official Active Red with White text. Keep
that pairing as a reference, not the default implementation for normal-size
button labels, because it reaches only approximately 3.71:1 contrast. The
shared focus state uses a 3px Black outline with 2px separation; the disabled
state uses the muted surface and text tokens without relying on color alone.

**`observed-more-button`** is 48px high, at least 140px wide, outlined with 1px
`{colors.observed-border}`, and fully rounded with
`{rounded.observed-pill}`. It is a disclosure or pagination action, not a
replacement for the primary purchase CTA.

Preserve visible `:focus-visible` treatment and native button semantics. Hover
must not be the only indication of interactivity.

### PLP Filter Input

**`observed-plp-filter-input`** is explicitly product-listing-page specific:
32px high, 8px padding, a `{colors.observed-text-disabled}` border,
`{rounded.observed-control}`, and 12 / 14px type. Do not generalize this compact
density to account forms, checkout fields, or other high-stakes inputs.

### Product Grid

**`observed-product-grid-cell`** represents a desktop listing cell. Keep its
minimum 376px width, contained maximum 230px-square product image, and shared
border structure. The frontmatter radius is available for internal controls;
the grid itself should read as contiguous cells rather than floating cards.

### Lineup Panel

**`observed-lineup-panel`** uses `{rounded.observed-feature}` for its 24px outer
radius. **`observed-lineup-campaign-card`** uses a translucent treatment,
20px radius, and observed 8px backdrop blur. Keep both scoped to the campaign
lineup treatment instead of promoting glass effects across the site.

### Navigation

**`observed-desktop-nav`** is 59px high. The active destination uses a 2px black
underline. Keep the underline aligned with the label and do not use red merely
to add emphasis.

**`observed-pill-nav`** is a 40px-high variant with a 100px-equivalent pill
radius, represented by `{rounded.observed-pill}`.

**`observed-mobile-nav-item`** participates in a horizontally overflowing row.
Labels use 14px type and a 48–52px line box. Preserve intentional horizontal
scroll, the selected item, and enough end padding to reveal that more items
exist.

### Hero

**`observed-hero-desktop`** is a 500px homepage strip with a 36 / 50px,
weight-600 headline. **`observed-hero-mobile`** becomes a square crop with a
32 / 38px, weight-600 headline. Recompose the focal point; do not simply scale
the desktop artwork down.

### Promotion Banner

**`observed-promo-banner-desktop`** spans the 1380px content width at 180px
high, with 16px corners and a 22 / 30px title. The mobile counterpart is 110px
high with 8px corners and a 16 / 22px title.

### Editorial Tabs

**`observed-editorial-tab-active`** uses
`{colors.observed-commerce-action-red}` with white text. This is an observed
editorial state, not evidence that all official brand tabs must use that red.
Pair color with an active-state semantic such as `aria-selected`.

### Mobile Bottom CTA

**`observed-mobile-bottom-cta`** is fixed with 20px side insets and an observed
32px background blur. Include safe-area padding, retain keyboard access, and
reserve layout space so the final page content remains reachable.

### Digital Logo Play

Official digital logo behaviors include **appear, dance, greet, look around,
surprise, rotate, nod, and wink**. No timing, duration, easing, sequence, or
trigger is published in the research basis. Use authorized logo assets only;
do not reconstruct the mark from this document.

Logo motion should feel responsive and characterful, not continuous or
distracting. Provide a pause control when motion persists or repeats, and a
static outcome when reduced motion is requested.

## Do's and Don'ts

### Do

- Use `{colors.primary}` for official Active Red and name the context clearly.
- Label live-site implementation values with `observed-`.
- Balance precise geometry with rounded inner detail and human flow.
- Choose Hero, Connection, or Focus as the dominant layout mode.
- Use the EI Lens selectively to direct attention.
- Preserve the square mobile hero crop through intentional art direction.
- Keep standard product listings flat and border-separated.
- Default consumer-commerce CTAs to the accessible commerce-red variants.
- Preserve focus-visible states, play/pause controls, and semantic state.
- Ensure the Life's Good slogan has sufficient contrast.
- Respect safe areas and unobscured content around the fixed mobile CTA.

### Don't

- Don't conflate `#EA1917` commerce red with official Active Red `#FD312E`.
- Don't use White normal-size button text on Active Red without an accessible
  adjustment.
- Don't invent gradient stops, angles, opacities, or CSS recipes.
- Don't assign unpublished metrics or numeric mappings to LG EI fonts.
- Don't recreate slogan lettering as normal text or a substitute font.
- Don't infer an official EI radius from observed commerce cards.
- Don't apply the campaign's translucent blur treatment to every surface.
- Don't convert the product grid into floating, shadowed cards.
- Don't generalize the 32px PLP filter input to all forms.
- Don't animate an LG logo without authorized assets and motion controls.
- Don't remove horizontal mobile navigation overflow if it hides destinations.

## Responsive Behavior

### Breakpoint Context

The observed systems do not share one universal breakpoint:

| Context | Switch | Interpretation |
|---|---:|---|
| Current commerce | Mobile at `<= 767px` | 20px gutters, mobile controls, square hero |
| Older company content | Around `768px` | Separate legacy/content convention |
| Editorial main layout | Around `1023px` | Wider editorial composition switch |

These values differ because routes and publishing systems differ. Do not merge
them into a fictional global LG breakpoint. Start with the breakpoint belonging
to the route being reproduced, then test the content between thresholds.

### Mobile Adaptation

- Reduce outer gutters from 40px desktop to 20px mobile.
- Reduce the product grid from three columns to two, then one, while preserving
  the 376px minimum cell width.
- Change the homepage hero from a 500px strip to a square crop.
- Reduce the standard button from 56px to 48px high.
- Allow navigation labels to overflow horizontally instead of wrapping.
- Keep mobile nav line boxes between 48 and 52px.
- Reduce the promo banner from 180px to 110px high and 16px to 8px corners.
- Preserve 20px side insets and safe-area clearance for the fixed bottom CTA.

### Motion

Observed transitions commonly use 0.3s and 0.5s durations. The mobile header
uses `cubic-bezier(.16,1,.3,1)`. These are observations, not a universal LG
motion specification and not defaults for official digital logo play.

One observed company animation supports reduced motion, but no global policy
was established. Implement `prefers-reduced-motion` for every nonessential
animation anyway: remove or simplify transforms, retain state communication,
and show a stable final frame. Keep play/pause available for user-controlled
media and persistent motion.

## Iteration Guide

1. Identify whether the work is official identity, observed commerce, or a
   plainly labeled hybrid before selecting tokens.
2. Start with one layout mode: Hero, Connection, or Focus.
3. Use official colors for identity expression; use observed colors only when
   matching the documented live-commerce context.
4. Use LG EI Headline and LG EI Text only with licensed assets and approved
   metrics. Otherwise declare the observed commerce stack as a fallback.
5. Build mobile from the route-specific threshold, not from a universal grid.
6. Keep the product listing contiguous and border-separated.
7. Add campaign glass, EI Lens focus, or logo motion only when the concept
   requires it and accessibility remains intact.
8. Verify contrast, focus visibility, keyboard operation, safe areas, and
   reduced motion before visual polish.

## Known Gaps

### Source Basis

This analysis is based only on public LG Electronics identity descriptions, published EI brand information, and observation of current LGE.COM consumer, company, and editorial surfaces. No private brand portal, design file, source code, licensed font package, or logo asset was used.

### Unpublished Values

- Official gradient stops, angles, interpolation, and opacity are unpublished.
- LG EI Headline and LG EI Text metrics and numeric weight mappings are unpublished.
- Exact Basic and Connected EI Form radii and construction geometry are unpublished.
- EI Lens blur, opacity, masks, and framing measurements are unpublished.
- Digital logo play timing, easing, triggers, and sequence are unpublished.

### Scope Limits

- Observed commerce values may vary by market, locale, route, campaign, or release and should be checked against the target experience.
- The 767px, 768px, and 1023px switches belong to different route contexts, not one unified responsive specification.
- Reduced-motion support was observed in one company animation, but a global policy was not established from public behavior.
- This document intentionally contains no logos, slogan artwork, font files, gradient recipes, or inferred official measurements.
