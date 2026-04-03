# Design System: Marathon

## 1. Visual Theme & Atmosphere

Marathon's website embodies a dark, industrial-military aesthetic that channels the game's survival extraction FPS DNA. The design system is built on a near-void black canvas (`#0a0a0b`) where content emerges like tactical HUD elements in a combat helmet display. This is "Graphic Realism" — a visual philosophy that blends simplified universal design language with realistic proportions and implied functionality.

The defining visual element is the acid yellow-green brand color (`#c2fe0b`), a hue that reads simultaneously as hazard tape and neon signage. This isn't a playful lime; it's aggressive, toxic, and energetic — a color that signals danger and opportunity in equal measure. The secondary cyan (`#01ffff`) and alert red (`#ff0d1a`) complete a functional color triad that feels at home in a sci-fi military interface.

Typography is industrial and brutalist — heavily condensed letterforms with thick strokes that suggest military stenciling and equipment manifests rather than commercial entertainment. The primary typeface is a custom condensed sans-serif with compressed proportions, paired with a dot-matrix style secondary font and a monospace technical font for data-dense layouts. The effect is reminiscent of a heads-up display or tactical readout — players are scavengers parsing data from a dead civilization.

The overall impression is one of tension and mystery: deep void blacks punctuated by aggressive neon accents, industrial chamfered shapes, and a sense that every UI element serves a tactical purpose. This is design as survival equipment — functional, stark, and quietly threatening.

**Key Characteristics:**
- Void-black background (`#0a0a0b`) — deep space darkness as the native canvas
- Marathon Lime (`#c2fe0b`) — toxic yellow-green as the singular brand accent
- Cyan accent (`#01ffff`) — secondary sci-fi glow color
- Alert Red (`#ff0d1a`) — danger/warning signals
- Deep Navy (`#29324f`) — tertiary dark surface
- Industrial condensed typography — military stencil aesthetic
- Dot-matrix and monospace secondary fonts — technical/data readout feel
- Chamfered corners and angular shapes — industrial hardware aesthetic
- Glitchy UI details — corrupted data, digital decay
- Heavy shadow depth (`rgba(0,0,0,0.5)`) for elevation on dark surfaces

## 2. Color Palette & Roles

### Primary
- **Marathon Lime** (`#c2fe0b`): Primary brand accent — CTAs, highlights, logo, key interactive elements. Toxic yellow-green that functions as both hazard warning and opportunity signal.
- **Marathon Lime Alt** (`#ccff00`): Alternate lime variant for buttons and accents.
- **Cyan** (`#01ffff`): Secondary sci-fi accent — data displays, secondary CTAs, holographic effects.
- **Alert Red** (`#ff0d1a`): Danger/error states, PvP indicators, critical warnings.
- **Tactical Green** (`#59b41d`): Success/positive states, extraction indicators.

### Background Surfaces
- **Void Black** (`#0a0a0b`): Deepest background — the canvas for all content.
- **Deep Space** (`#0d0d0e`): Secondary dark surface — slightly elevated panels.
- **Dark Surface** (`#141415`): Card backgrounds, containers.
- **Mid Dark** (`#1a1a1c`): Elevated surfaces, hover states.
- **Deep Navy** (`#29324f`): Tertiary dark blue-gray for specialized sections.

### Text
- **Primary Text** (`#ffffff`): Headings, important labels — maximum contrast against void.
- **Secondary Text** (`#b3b3b3`): Body text, descriptions — slightly muted for readability.
- **Tertiary Text** (`#737373`): Metadata, timestamps, subtle labels.
- **Muted Text** (`#525252`): Disabled states, placeholder text.
- **Lime Text** (`#c2fe0b`): Branded text, links, highlighted data.
- **Cyan Text** (`#01ffff`): Technical labels, data readouts.

### Border & Divider
- **Border Subtle** (`rgba(255,255,255,0.05)`): Ultra-subtle dividers.
- **Border Standard** (`rgba(255,255,255,0.1)`): Default borders on dark surfaces.
- **Border Lime** (`rgba(194,254,11,0.3)`): Accent borders for highlighted elements.
- **Border Cyan** (`rgba(1,255,255,0.3)`): Secondary accent borders.

### Shadow & Glow
- **Heavy Shadow** (`rgba(0,0,0,0.5) 0px 8px 24px`): Dialogs, modals, elevated panels.
- **Medium Shadow** (`rgba(0,0,0,0.3) 0px 8px 8px`): Cards, dropdowns, hover states.
- **Lime Glow** (`rgba(194,254,11,0.2)`): Subtle lime-tinted glow for active elements.
- **Cyan Glow** (`rgba(1,255,255,0.2)`): Cyan glow for technical elements.

## 3. Typography Rules

### Font Family
- **Primary**: `Marathon Condensed` or `Arial Black`, with fallbacks: `Impact, Helvetica Neue, Helvetica, Arial, sans-serif`
- **Secondary / Dot Matrix**: `Courier New`, with fallbacks: `Courier, monospace`
- **Monospace / Technical**: `JetBrains Mono`, `SF Mono`, or `Consolas`, with fallbacks: `Monaco, monospace`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Marathon Condensed | 72px (4.50rem) | 900 | 0.90 (tight) | -2px | Maximum impact, uppercase |
| Display Large | Marathon Condensed | 56px (3.50rem) | 900 | 0.95 (tight) | -1.5px | Section hero headlines |
| Section Title | Marathon Condensed | 48px (3.00rem) | 800 | 1.00 (tight) | -1px | Major section headers |
| Heading 1 | Marathon Condensed | 36px (2.25rem) | 800 | 1.10 (tight) | -0.5px | Page titles |
| Heading 2 | Marathon Condensed | 28px (1.75rem) | 700 | 1.20 | -0.3px | Sub-sections |
| Heading 3 | Marathon Condensed | 24px (1.50rem) | 700 | 1.30 | normal | Card titles |
| Body Large | Primary Sans | 20px (1.25rem) | 400 | 1.60 | normal | Introduction text |
| Body | Primary Sans | 16px (1.00rem) | 400 | 1.50 | normal | Standard body text |
| Body Small | Primary Sans | 14px (0.88rem) | 400 | 1.50 | normal | Secondary content |
| Caption | Primary Sans | 12px (0.75rem) | 400 | 1.40 | 0.5px | Metadata, labels |
| Technical Label | Monospace | 12px (0.75rem) | 500 | 1.33 | 1px | `text-transform: uppercase` |
| Data Readout | Monospace | 14px (0.88rem) | 400 | 1.50 | normal | Stats, coordinates |
| Dot Matrix | Dot Matrix | 10px (0.63rem) | 400 | 1.00 | 2px | Decorative data, timestamps |

### Principles
- **Compression as aggression**: Display text uses extreme negative letter-spacing (-2px at 72px) creating dense, compressed blocks that feel industrial and aggressive.
- **Uppercase for impact**: Headlines and labels often use `text-transform: uppercase` for military-style command presence.
- **Monospace for data**: Technical information (coordinates, stats, timestamps) always uses monospace fonts to reinforce the "data readout" aesthetic.
- **Wide tracking for small text**: Captions and labels use slight positive letter-spacing (0.5-2px) for readability at small sizes — the inverse of display text.
- **Three font voices**: Condensed (headlines/identity), Sans (body/content), Monospace (data/technical).

## 4. Component Stylings

### Buttons

**Primary Lime Button**
- Background: `#c2fe0b`
- Text: `#0a0a0b` (void black)
- Padding: 12px 32px
- Radius: 0px (sharp corners) or 4px (subtle rounding)
- Font: 14px Marathon Condensed, weight 700, uppercase, letter-spacing 1px
- Border: none
- Hover: background lightens to `#d4ff4d`, subtle lime glow shadow
- Use: Primary CTAs ("EXPLORE", "WATCH TRAILER")

**Secondary Dark Button**
- Background: `#1a1a1c`
- Text: `#ffffff`
- Padding: 12px 24px
- Radius: 4px
- Font: 14px weight 600, uppercase
- Border: `1px solid rgba(255,255,255,0.1)`
- Hover: border color shifts to `#c2fe0b`
- Use: Secondary actions, navigation

**Ghost Button**
- Background: transparent
- Text: `#c2fe0b`
- Padding: 8px 16px
- Border: `1px solid rgba(194,254,11,0.5)`
- Hover: background `rgba(194,254,11,0.1)`
- Use: Tertiary actions, link-style buttons

**Cyan Accent Button**
- Background: `#01ffff`
- Text: `#0a0a0b`
- Padding: 10px 24px
- Font: uppercase, letter-spacing 1px
- Use: Secondary CTAs, data-related actions

### Cards & Containers

**Dark Card**
- Background: `#141415`
- Border: `1px solid rgba(255,255,255,0.05)`
- Radius: 8px
- Padding: 24px
- Shadow: `rgba(0,0,0,0.3) 0px 8px 8px`
- Hover: border color `rgba(194,254,11,0.2)`, slight lift

**Featured Card (Lime Accent)**
- Background: `#0d0d0e`
- Border: `1px solid rgba(194,254,11,0.3)`
- Radius: 12px
- Padding: 32px
- Shadow: `rgba(194,254,11,0.1) 0px 0px 20px`
- Use: Highlighted content, featured news

**Tactical Panel**
- Background: `rgba(20,20,21,0.8)`
- Border-left: `3px solid #c2fe0b`
- Padding: 16px 20px
- Use: Information blocks, quotes, alerts

### Navigation

**Header Navigation**
- Background: transparent or `rgba(10,10,11,0.9)` with backdrop-blur
- Position: fixed, top
- Height: 72px
- Logo: Marathon wordmark in lime (`#c2fe0b`)
- Links: 14px uppercase, weight 600, `#ffffff` text
- Active/Hover: `#c2fe0b` lime color
- Mobile: hamburger menu, full-screen overlay

**Footer Navigation**
- Background: `#0a0a0b`
- Border-top: `1px solid rgba(255,255,255,0.05)`
- Links: 12px, `#737373` text, hover to `#ffffff`
- Social icons: 24px, `#b3b3b3`, hover `#c2fe0b`

### Distinctive Components

**Lime Badge**
- Background: `rgba(194,254,11,0.15)`
- Text: `#c2fe0b`
- Padding: 4px 12px
- Radius: 4px
- Font: 11px monospace, uppercase
- Border: `1px solid rgba(194,254,11,0.3)`
- Use: Status labels, category tags

**Status Badge**
- Background: `rgba(1,255,255,0.1)`
- Text: `#01ffff`
- Padding: 2px 8px
- Radius: 2px
- Font: 10px uppercase
- Use: Status indicators, technical labels

**Alert Badge**
- Background: `rgba(255,13,26,0.1)`
- Text: `#ff0d1a`
- Border: `1px solid rgba(255,13,26,0.3)`
- Use: Warnings, danger states, PvP indicators

**Text Input**
- Background: `#141415`
- Text: `#ffffff`
- Border: `1px solid rgba(255,255,255,0.1)`
- Radius: 4px
- Padding: 12px 16px
- Focus: border color `#c2fe0b`, lime glow shadow
- Placeholder: `#525252`

**Search Input**
- Background: `#1a1a1c`
- Border-radius: 9999px (pill)
- Padding: 12px 48px (icon-aware)
- Icon: search icon, `#737373`

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px, 96px, 128px
- Section padding: 80px–128px vertical
- Content max-width: 1400px (wide), 1200px (standard), 960px (narrow)

### Grid & Container
- Full-width dark sections with constrained inner content
- Asymmetric layouts for featured content
- Grid gaps: 24px–32px
- Responsive: 4-column → 2-column → 1-column

### Whitespace Philosophy
- **Darkness as atmosphere**: The void black background IS the whitespace. Content floats in space like HUD elements.
- **Compressed density**: Unlike airy minimalism, Marathon packs information densely — the darkness provides visual rest.
- **Tactical information hierarchy**: Every element's position implies importance — primary content center/left, metadata subtle and small.

### Border Radius Scale
- Sharp (0px): Primary buttons, industrial elements, image containers
- Micro (2px): Badges, small labels
- Subtle (4px): Buttons, inputs, standard cards
- Standard (8px): Cards, containers
- Comfortable (12px): Featured cards, panels
- Full Pill (9999px): Search inputs, navigation pills

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, `#0a0a0b` bg | Page background, deepest layer |
| Surface (Level 1) | `#141415` bg, subtle border | Cards, panels, containers |
| Elevated (Level 2) | `rgba(0,0,0,0.3) 0px 8px 8px` | Hover cards, dropdowns |
| Dialog (Level 3) | `rgba(0,0,0,0.5) 0px 8px 24px` | Modals, overlays |
| Glow (Level 4) | `rgba(194,254,11,0.1) 0px 0px 20px` | Lime-accented featured elements |

**Shadow Philosophy**: On dark backgrounds, traditional shadows are nearly invisible. Marathon uses heavy black shadows (0.3–0.5 opacity) to create visible elevation, paired with colored glow effects (`rgba(194,254,11,0.1)`) for accent elements. The result is a "floating in space" effect appropriate for the sci-fi military theme.

## 7. Do's and Don'ts

### Do
- Use void black (`#0a0a0b`) as the foundation — the darkness is the canvas
- Apply Marathon Lime (`#c2fe0b`) sparingly but boldly — it's the brand's signature
- Use uppercase with wide letter-spacing for buttons and labels
- Employ negative letter-spacing on display headlines (-1px to -2px)
- Create depth through heavy shadows (0.3+ opacity) on dark backgrounds
- Use monospace fonts for any technical/data content
- Apply sharp corners (0px radius) for industrial/military feel
- Include lime-tinted glows on hover for interactive elements
- Keep information density high — this is a tactical interface, not a magazine

### Don't
- Don't use light backgrounds — the dark immersion is core to the identity
- Don't apply lime to large backgrounds — use it for accents, text, and borders only
- Don't use rounded corners (12px+) on primary buttons — keep them sharp or subtly rounded
- Don't use thin shadows — they disappear on dark backgrounds
- Don't introduce warm colors (oranges, yellows) beyond the lime accent
- Don't use relaxed line-heights — keep typography tight and compressed
- Don't forget the industrial/military aesthetic — no playful rounded elements
- Don't use decorative fonts — stick to condensed, sans-serif, and monospace

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile Small | <480px | Single column, minimal padding, stacked buttons |
| Mobile | 480–640px | Standard mobile layout |
| Tablet | 640–1024px | 2-column grids, expanded nav |
| Desktop | 1024–1400px | Full layout, multi-column grids |
| Large Desktop | >1400px | Maximum content width, generous margins |

### Collapsing Strategy
- Hero: 72px → 48px → 36px display text, tracking adjusts proportionally
- Navigation: horizontal links → hamburger menu at 768px
- Feature grids: 4-column → 2-column → single column
- Section spacing: 128px → 80px → 48px
- Buttons: inline → full-width stacked on mobile

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Marathon Lime (`#c2fe0b`)
- Background: Void Black (`#0a0a0b`)
- Surface: Dark Card (`#141415`)
- Text: White (`#ffffff`)
- Secondary text: Silver (`#b3b3b3`)
- Accent: Cyan (`#01ffff`)
- Danger: Alert Red (`#ff0d1a`)
- Border: `rgba(255,255,255,0.1)`

### Example Component Prompts
- "Create a hero section on `#0a0a0b` background. Headline at 72px Marathon Condensed weight 900, line-height 0.90, letter-spacing -2px, uppercase, `#c2fe0b` text. Subtitle at 16px weight 400, `#b3b3b3` text. Primary CTA button (`#c2fe0b` bg, `#0a0a0b` text, 0px radius, uppercase, letter-spacing 1px)."
- "Design a feature card: `#141415` background, `1px solid rgba(255,255,255,0.05)` border, 8px radius. Title at 24px Marathon Condensed weight 700, `#ffffff` text. Body at 14px weight 400, `#b3b3b3`. Lime accent border on hover."
- "Build a lime badge: `rgba(194,254,11,0.15)` background, `#c2fe0b` text, 4px radius, 11px monospace uppercase. Border `rgba(194,254,11,0.3)`."
- "Create navigation header: transparent background fixed top. Logo in `#c2fe0b`. Links 14px uppercase weight 600, `#ffffff` text, hover `#c2fe0b`. Mobile hamburger menu."
- "Design a tactical panel: `#0d0d0e` background, 3px lime left border. Technical label in 12px monospace uppercase `#01ffff`. Content in `#ffffff`."

### Iteration Guide
1. Start with `#0a0a0b` — the void is the foundation
2. Lime (`#c2fe0b`) is the brand's signature — use it for primary actions and identity
3. Cyan (`#01ffff`) is the secondary sci-fi accent — use for technical/data elements
4. Display text uses extreme negative tracking (-2px) and uppercase
5. Use heavy shadows (0.3+ opacity) — light shadows vanish on dark backgrounds
6. Sharp corners (0px) for industrial feel, 4–8px for cards, 9999px for search only
7. Monospace + uppercase for all technical labels and data readouts
8. Keep density high — this is a tactical HUD, not a marketing brochure
