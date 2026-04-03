# Design System: Elastic UI (EUI)

## 1. Visual Theme & Atmosphere

Elastic UI's documentation site is a masterclass in enterprise accessibility — a design system that manages to be simultaneously data-dense and breathable, technical and approachable. Built on the Borealis theme, the visual language centers on a singular brand blue (`#0B64DD`) that anchors every interactive element against a cool blue-gray palette that stretches from near-black (`#07101F`) through a carefully calibrated 15-step neutral scale to pure white.

The typography is unapologetically functional: Inter handles everything from 9px micro-labels to 30px titles, with Roboto Mono reserved exclusively for code. There's no decorative serif, no display font, no typographic drama — just a rigorously structured hierarchy where weight (300–600) and size (14 discrete steps) do all the differentiation work. The font feature settings (`'calt' 1, 'kern' 1, 'liga' 1`) are always enabled, giving Inter its sharpest rendering.

What makes EUI distinctive is its commitment to uniformity as a design principle. Both `border.radius.small` and `border.radius.medium` resolve to the same `4px` — a deliberate choice that says "consistency over variety." The shadow system uses blue-gray tinted shadows (`#2B394F`-based) instead of pure black, keeping even elevated surfaces within the cool color world. The three-tier semantic color system — base (pastel backgrounds), light (medium saturation), and filled (full saturation) — gives every semantic intent (primary, success, danger, warning, risk, accent, assistance) a complete expression vocabulary without ad-hoc color choices.

**Key Characteristics:**
- Brand blue (`#0B64DD`) as the singular primary — every interactive element traces back to this color
- Blue-gray neutral scale: 15 steps from Full Shade (`#07101F`) through Empty Shade (`#FFFFFF`)
- Inter for all text with `'calt' 1, 'kern' 1, 'liga' 1` font features always enabled
- Roboto Mono for code exclusively — no decorative monospace usage
- Uniform 4px border radius — deliberate consistency over graduated scale
- Blue-gray tinted shadows using `#2B394F` — never pure black
- Three-tier semantic colors: base (pastel) → light (medium) → filled (solid)
- Page background `#F6F9FC` (slightly blue-tinted off-white) — never stark white for content areas
- 9 semantic color channels: primary, accent, accentSecondary, success, warning, danger, risk, assistance, neutral
- Body text at 14px weight 400 — compact and readable for documentation density

## 2. Color Palette & Roles

### Brand Primary
- **Elastic Blue** (`#0B64DD`): Primary brand color — buttons, links, active states, filled backgrounds
- **Accent Pink** (`#BC1E70`): Secondary accent — highlights, badges, attention markers
- **Accent Teal** (`#008B87`): Tertiary accent — complementary to pink, secondary highlights

### Semantic
- **Success** (`#008A5E`): Positive outcomes, confirmations, healthy status
- **Warning** (`#FACB3D`): Caution states, pending actions, attention needed
- **Danger** (`#C61E25`): Errors, destructive actions, critical alerts
- **Risk** (`#ED6723`): Elevated concern — between warning and danger
- **Assistance** (`#8144CC`): AI features, help content, guided actions
- **Neutral** (`#1C8CB5`): Informational, default semantic tone

### Neutral Scale
- **Full Shade** (`#07101F`): Deepest background (dark mode base)
- **Darkest Shade** (`#2B394F`): Shadow color, dark borders, heavy text on dark
- **Dark Shade** (`#5A6D8C`): Disabled filled backgrounds, subdued elements
- **Medium Shade** (`#8E9FBC`): Placeholder text, inactive borders
- **Light Shade** (`#CAD3E2`): Default borders, dividers, form borders
- **Lightest Shade** (`#ECF1F9`): Subdued backgrounds, disabled surfaces, input group labels
- **Empty Shade** (`#FFFFFF`): Pure white — cards, panels, form backgrounds

### Text
- **Heading** (`#111C2C`): Title text — nearly black with blue undertone
- **Paragraph** (`#1D2A3E`): Body text — dark but softer than headings
- **Subdued** (`#516381`): Secondary text, captions, metadata
- **Disabled** (`#798EAF`): Inactive text, placeholder
- **Link** (`#0B64DD`): Interactive text (same as primary)
- **Link Text** (`#1750BA`): Contextual text primary — slightly darker than link blue
- **Inverse** (`#FFFFFF`): Text on filled/dark backgrounds

### Backgrounds
- **Page** (`#F6F9FC`): Default page background — blue-tinted off-white
- **Plain** (`#FFFFFF`): Card and panel surfaces
- **Subdued** (`#F6F9FC`): Alternate section backgrounds
- **Highlighted** (`#F6F9FC`): Selected/highlighted row backgrounds
- **Primary Base** (`#F1F6FF`): Light blue wash for primary context
- **Danger Base** (`#FFF3F1`): Light red wash for error context
- **Success Base** (`#E9FFF7`): Light green wash for success context
- **Warning Base** (`#FFF7E2`): Light yellow wash for warning context
- **Interactive Hover** (`rgba(23, 80, 186, 0.04)`): Subtle blue on hover
- **Overlay** (`rgba(72, 89, 117, 0.7)`): Modal/mask backdrop

### Shadows
- **Shadow Color** (`#2B394F`): Base shadow hue — blue-gray, never pure black
- **Focus Ring** (`#1750BA`): Keyboard focus indicator

## 3. Typography Rules

### Font Families
- **Primary**: `Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol`
- **Code**: `Roboto Mono, Consolas, Menlo, Courier, monospace`
- **Serif**: `Georgia, Times, Times New Roman, serif` (blockquotes within EuiText only)
- **Font Features**: `'calt' 1, 'kern' 1, 'liga' 1` — always enabled on Inter

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Title L | Inter | 30px (1.875rem) | 600 | 2.571rem | Largest heading |
| Title M | Inter | 24px (1.5rem) | 600 | 2.000rem | Section heading |
| Title S | Inter | 20px (1.25rem) | 600 | 1.714rem | Sub-section heading |
| Title XS | Inter | 16px (1.0rem) | 600 | 1.714rem | Card/component heading |
| Title XXS | Inter | 14px (0.875rem) | 600 | 1.429rem | Small heading |
| Title XXXS | Inter | 12px (0.75rem) | 600 | 1.143rem | Micro heading, overlines |
| Body | Inter | 14px (0.875rem) | 400 | 1.5× | Default body text |
| Body M | Inter | 16px (1.0rem) | 400 | 1.5× | Large body text |
| Body L | Inter | 20px (1.25rem) | 400 | 1.5× | Lead paragraphs |
| Body S | Inter | 12px (0.75rem) | 400 | 1.5× | Captions, metadata |
| Code | Roboto Mono | 14px | 400 | 1.5× | Inline and block code |
| Code Bold | Roboto Mono | 14px | 600 | 1.5× | Emphasized code |

### Weight Scale
- **Light**: 300 — rarely used, available for large display text
- **Regular**: 400 — body text, descriptions, paragraphs
- **Medium**: 450 — subtle emphasis within body text
- **SemiBold**: 500 — navigation labels, button text, strong emphasis
- **Bold**: 600 — all titles, headings, bold inline text

### Principles
- **Weight over decoration**: Hierarchy is built entirely through size and weight — no italic, no uppercase transforms, no letter-spacing tricks.
- **14px body baseline**: Compact enough for data-dense documentation, large enough for extended reading. The entire component library defaults to 14px/400.
- **600 for all titles**: Every heading level uses the same bold weight, differentiating only by size. This creates a remarkably uniform heading rhythm.
- **Font features always on**: `'calt' 1, 'kern' 1, 'liga' 1` ensures Inter's contextual alternates, kerning, and ligatures are active for optimal rendering.

## 4. Component Stylings

### Buttons

**Primary (Filled)**
- Background: `#0B64DD`
- Text: `#FFFFFF`
- Height: 40px (standard), 32px (small), 24px (xsmall)
- Padding: `8px 24px`
- Radius: 4px
- Border: none
- Transition: `100ms`
- Hover: darkened background
- Disabled: `#ECF1F9` background, `#798EAF` text

**Secondary (Outlined)**
- Background: transparent
- Text: `#0B64DD`
- Border: `1px solid #0B64DD`
- Height/radius/padding: same as primary

**Danger**
- Background: `#C61E25` (filled) or transparent with `#C61E25` border
- Text: `#FFFFFF` (filled) or `#C61E25` (outlined)

**Text/Link Button**
- Background: transparent
- Text: `#0B64DD`
- No border, underline on hover

### Cards / Panels

**Plain Panel**
- Background: `#FFFFFF`
- Border: `1px solid #E3E8F2`
- Radius: 4px
- Padding: 16px (medium)

**Subdued Panel**
- Background: `#F6F9FC`
- Border: `1px solid #E3E8F2`

**Semantic Panels** (primary, success, danger, warning, accent)
- Background: corresponding base color (e.g., `#F1F6FF` for primary)
- Border: corresponding border color (e.g., `#BFDBFF` for primary)

### Forms

**Text Input**
- Height: 40px (standard), 32px (compressed)
- Background: `#FFFFFF`
- Border: `1px solid #CAD3E2`
- Radius: 4px
- Padding: 12px (standard), 8px (compressed)
- Placeholder: `#5A6D8C`
- Focus: bottom border becomes `2px solid #0B64DD`
- Error: border `#C61E25`
- Disabled: background `#ECF1F9`, border `#CAD3E2`
- Max width: 400px

**Select / Dropdown**
- Same dimensions as text input
- Caret icon in `#5A6D8C`

### Navigation

**Header Bar**
- Height: 48px
- Background: `#FFFFFF` (light) or `#0B1628` (dark)
- Border: bottom `1px solid #E3E8F2`
- Child element size: 40px

**Sidebar**
- Min width: 192px
- Collapsible sections with expand/collapse affordance
- Active item: `#F1F6FF` background, `#0B64DD` text
- Hover: `rgba(23, 80, 186, 0.04)` background

### Badges

**Base tier** — pastel background, colored text:
- Primary: `#F1F6FF` bg, `#1750BA` text
- Success: `#E9FFF7` bg, `#09724D` text
- Danger: `#FFF3F1` bg, `#A71627` text
- Warning: `#FFF7E2` bg, `#6A4906` text

**Filled tier** — solid background, white text:
- Primary: `#0B64DD` bg, `#FFFFFF` text
- Danger: `#C61E25` bg, `#FFFFFF` text

## 5. Layout Principles

### Spacing Scale
| Token | Value | Usage |
|-------|-------|-------|
| XS | 4px | Tight inner gaps, icon margins |
| S | 8px | Compact padding, small gaps |
| M | 12px | Form padding, medium gaps |
| Base | 16px | Default spacing unit, panel padding (medium) |
| L | 24px | Section gaps, panel padding (large) |
| XL | 32px | Major section separation |
| XXL | 40px | Page-level vertical rhythm |

### Grid & Container
- Page max width: 1200px
- Sidebar minimum width: 192px
- Form max width: 400px
- Panel padding tiers: 8px (small), 16px (medium), 24px (large)

### Whitespace Philosophy
- Generous but purposeful — every space maps to the 4px base grid
- Content areas use `#F6F9FC` background to differentiate from `#FFFFFF` panels — the subtle contrast replaces the need for heavy borders
- 16px is the base unit: body font size matches the spacing base, creating natural rhythm

## 6. Depth & Elevation

### Shadow System
Shadow color is always `#2B394F` (blue-gray) in light mode, `#000000` in dark mode — never pure black in light theme.

| Level | Shadow | Usage |
|-------|--------|-------|
| Flat | none | Default surface state |
| XS | `0 1px 2px rgba(43, 57, 79, 0.12)` | Subtle lift — dropdowns, tooltips |
| S | `0 2px 4px rgba(43, 57, 79, 0.12)` | Cards at rest |
| M | `0 6px 12px rgba(43, 57, 79, 0.12)` | Popovers, elevated cards |
| L | `0 10px 20px rgba(43, 57, 79, 0.12)` | Modals, flyouts |
| XL | `0 16px 32px rgba(43, 57, 79, 0.16)` | Highest elevation — full-screen overlays |
| Hover | `0px 5px 24px rgba(0, 0, 0, 0.12)` | Interactive card hover state |

### Focus Ring
- Color: `#1750BA`
- Standard: `2px solid` with `2px offset`
- Large: `4px solid` with `4px offset`
- Animation start: transparent → `#1750BA` (keyboard focus reveal)

### Z-Index Layers
| Layer | Z-Index | Usage |
|-------|---------|-------|
| Content | 0 | Default content |
| Header | 1000 | Sticky header, flyouts |
| Content Menu | 2000 | Dropdown menus in content |
| Navigation | 6000 | Primary navigation, masks |
| Modal | 8000 | Modal dialogs |
| Toast | 9000 | Toast notifications (highest) |

## 7. Do's and Don'ts

### Do
- Always enable Inter font features: `font-feature-settings: 'calt' 1, 'kern' 1, 'liga' 1`
- Use the three-tier semantic color system (base → light → filled) for every semantic intent
- Use 4px border radius on all components — buttons, inputs, cards, badges
- Use `#F6F9FC` as page background and `#FFFFFF` for elevated surfaces (cards, panels)
- Apply blue-gray tinted shadows (`#2B394F`) in light mode
- Use 14px as the default body text size with weight 400
- Use weight 600 for all heading levels — differentiate by size only
- Apply focus rings (`#1750BA`, 2px) on all interactive elements for accessibility
- Use the spacing scale (4/8/12/16/24/32/40px) — never arbitrary values

### Don't
- Don't use pill-shaped buttons or large border radius — 4px is the universal radius
- Don't use pure black (`#000000`) shadows in light mode — always `#2B394F`-tinted
- Don't use italic or uppercase transforms for emphasis — rely on weight and size
- Don't apply decorative letter-spacing — Inter's kerning handles spacing
- Don't mix semantic color tiers within the same component (e.g., base background + filled border)
- Don't use `#FFFFFF` as page background — reserve it for cards/panels on the `#F6F9FC` page
- Don't skip the disabled state tier (`#ECF1F9` background, `#798EAF` text) on interactive components
- Don't place more than one primary (filled blue) button per action group

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| XS | 0–574px | Single column, stacked components, full-width inputs |
| S | 575–767px | Small adjustments, 2-column where possible |
| M | 768–991px | Tablet — sidebar may collapse, 2-column grids |
| L | 992–1199px | Desktop — full sidebar, multi-column layouts |
| XL | 1200px+ | Maximum width container, generous margins |

### Animation
| Speed | Duration | Usage |
|-------|----------|-------|
| Extra Fast | 90ms | Micro-interactions, hover color changes |
| Fast | 150ms | Button state transitions, focus rings |
| Normal | 250ms | Panel expand/collapse, sidebar toggle |
| Slow | 350ms | Modal entrance, flyout slide |
| Extra Slow | 500ms | Full-page transitions |

### Easing
- **Slight Bounce**: `cubic-bezier(0.34, 1.61, 0.7, 1)` — playful overshoot for attention-drawing animations
- **Slight Resistance**: `cubic-bezier(0.32, 0.72, 0, 1)` — natural deceleration for content transitions

### Touch Targets
- Buttons: minimum 40px height (standard), 32px (small)
- Form controls: 40px height
- Header: 48px height with 40px child elements
- Checkboxes/radios: 16px with adequate click area

### Collapsing Strategy
- Sidebar navigation: full sidebar → hamburger menu on mobile
- Card grids: multi-column → stacked single column
- Tables: horizontal scroll on narrow viewports
- Header: full navigation → condensed with overflow menu
- Form fields maintain 400px max width, go full-width on mobile

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary blue: `#0B64DD`
- Page background: `#F6F9FC`
- Card/panel surface: `#FFFFFF`
- Heading text: `#111C2C`
- Body text: `#1D2A3E`
- Subdued text: `#516381`
- Default border: `#E3E8F2`
- Strong border: `#CAD3E2`
- Focus ring: `#1750BA`
- Shadow color: `#2B394F`
- Danger: `#C61E25`
- Success: `#008A5E`
- Warning: `#FACB3D`
- Accent pink: `#BC1E70`
- Accent teal: `#008B87`

### Example Component Prompts
- "Create a page header on `#F6F9FC` background. Title at 30px Inter weight 600, color `#111C2C`. Subtitle at 14px weight 400, color `#516381`. Primary button: `#0B64DD` background, white text, 40px height, 4px radius, `8px 24px` padding."
- "Build a data card on `#FFFFFF` surface: `1px solid #E3E8F2` border, 4px radius, 16px padding, shadow `0 2px 4px rgba(43, 57, 79, 0.12)`. Title at 16px Inter weight 600 `#111C2C`. Body at 14px weight 400 `#1D2A3E`. Status badge in base tier: `#E9FFF7` background, `#09724D` text, 4px radius."
- "Design a form section: text inputs at 40px height, `1px solid #CAD3E2` border, 4px radius, 12px padding. Focus state: bottom border `2px solid #0B64DD`. Labels at 12px weight 600 `#111C2C`. Error state: border `#C61E25`, helper text `#A71627`. Max width 400px."
- "Create a sidebar navigation: 192px min width, `#FFFFFF` background. Items at 14px Inter weight 400, `#1D2A3E` text. Active item: `#F1F6FF` background, `#0B64DD` text. Hover: `rgba(23, 80, 186, 0.04)` background. Section headers at 12px weight 600 `#516381` uppercase."
- "Build a semantic alert panel: `#FFF3F1` background (danger base), `1px solid #FFC9C2` border, 4px radius, 16px padding. Icon in `#C61E25`. Title at 14px weight 600 `#A71627`. Body at 14px weight 400 `#1D2A3E`."

### Iteration Guide
1. Start with `#F6F9FC` page background and `#FFFFFF` card surfaces — the contrast between these two is the foundation
2. Apply `#0B64DD` only to interactive elements — buttons, links, active indicators, focus states
3. Use the heading/paragraph/subdued text hierarchy (`#111C2C` → `#1D2A3E` → `#516381`) for all text
4. Keep 4px radius on everything — the uniformity IS the identity
5. Add blue-gray tinted shadows (`#2B394F`) only where elevation is meaningful
6. Use the three-tier semantic colors (base/light/filled) when communicating status or intent
7. Font features `'calt' 1, 'kern' 1, 'liga' 1` on all Inter text for optimal rendering
