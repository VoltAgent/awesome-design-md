# Design System: Tabbit

## 1. Visual Theme & Atmosphere

Tabbit is an AI-native desktop browser built by Lumina Lab (Meituan's GN06 team). Its marketing site reads as a warm, friendly, product-forward pitch for an agentic web -- not a cold developer-tool chrome. The canvas is a clean white (`#ffffff`) that warms into cream surfaces (`#fffdf9`, `#FBF1EC`) the moment content needs to feel like a surface rather than a page. Text is a soft near-black (`#1d1d1f`) -- the same Apple-system gray-black used across premium consumer hardware sites -- never pure `#000`. The overall mood is bright, optimistic, and tactile: rounded corners are generous (12-28px on cards, full-pill on tags), and the hero typography leans into a single warm accent.

That accent is Tabbit Orange (`#F3A04C`), a warm amber-orange that does almost all the brand work. A deeper sibling (`#E58522`) handles pressed/active states and gradient endpoints. Two secondary accents appear in feature pills and category tags: a violet `#8B5CF6` (for "taste" / editorial skills) and an emerald `#10B981` (for "utility" / success). The category system -- `utility` vs `taste` -- is itself a design language: every agentic Skill card carries one of the two tags, giving the dense skills grid a readable rhythm.

Typography is Montserrat -- a geometric sans with a wide weight range (100-700) -- paired with the native system stack (`-apple-system, BlinkMacSystemFont, SF Pro Display, Inter, Helvetica Neue`). Display sizes go large (80px hero, 48px section, 38/34px sub-heads) with tight negative tracking (`-0.025em`) for engineered precision, while small labels flip to positive tracking (`1px`, `2px`) and uppercase for micro-labels. Code and technical strings use the platform monospace stack. The result: a consumer-grade, Apple-adjacent polish with a single confident accent color and a dense, card-driven layout built to showcase 2000+ agentic skills.

**Key Characteristics:**
- Warm white-to-cream canvas (`#ffffff` → `#fffdf9` → `#FBF1EC`), never cold gray
- Soft near-black text (`#1d1d1f`), Apple-system gray-black
- Single dominant accent: Tabbit Orange `#F3A04C` (with `#E58522` for depth)
- Secondary accents: violet `#8B5CF6` (taste), emerald `#10B981` (utility/success)
- Montserrat across the full weight range (100-700), system stack fallback
- Generous radii: 12-28px on cards, full-pill (`9999px`) on tags and pills
- Category-tagged skill cards (`utility` / `taste`) for a readable dense grid
- Tailwind-driven utility CSS, Next.js generated

## 2. Color Palette & Roles

### Primary
- **Tabbit Black** (`#1d1d1f`): Primary text, headings, dark UI surfaces. Apple-system soft near-black -- the defining text color.
- **Tabbit White** (`#ffffff`): Page background, primary light surface. Clean, bright, the base canvas.
- **Tabbit Ink** (`#111111`): Deep dark surface, dark-mode background, footer. Near-black with a hair of warmth.
- **Warm Cream** (`#fffdf9`): Secondary surface, gradient endpoint. A barely-warm off-white.
- **Blush Cream** (`#FBF1EC`): Card / section surface on light theme. A warmer peach-cream for content surfaces.

### Accent
- **Tabbit Orange** (`#F3A04C`): Brand accent, primary CTA, links, highlights. A warm amber-orange -- the signature color.
- **Deep Orange** (`#E58522`): Pressed/active states, gradient endpoints. A richer, more saturated orange.
- **Violet** (`#8B5CF6`): Secondary accent for "taste" category skills, editorial highlights.
- **Emerald** (`#10B981`): "Utility" category accent, success states, positive indicators.

### Semantic
- **Success** (`#10B981` / `#40B43E`): Emerald-to-leaf green for success and utility tags.
- **Info Blue** (`rgb(59 130 246)`): Links and informational accents at 50% opacity for rings.
- **Teal** (`#00AA90`): Niche accent for select feature pills.
- **Coral** (`#F17C67` / `#E65C53`): Warm coral for select highlight pills.

### Surface Scale (Light)
- **Surface 0** (`#ffffff`): Page background.
- **Surface 50** (`#fffdf9`): Warm off-white, gradient endpoint, subtle fills.
- **Surface 100** (`#FBF1EC`): Blush cream, card surfaces.
- **Surface 200** (`#f2f2f2`): Neutral light gray, secondary fills.
- **Surface 300** (`rgba(17,17,17,0.05)`): 5% ink overlay for hover/subtle emphasis.
- **Surface 400** (`rgba(17,17,17,0.08)`): 8% ink overlay for pressed states.

### Surface Scale (Dark)
- **Dark Surface 0** (`#111111`): Dark mode background.
- **Dark Surface 100** (`rgba(255,255,255,0.04)`): 4% white overlay for dark cards.
- **Dark Surface 200** (`rgba(255,255,255,0.12)`): Frosted button background on dark.

### Border Colors
- **Border Subtle** (`rgba(17,17,17,0.06)`): Default light border, 6% ink.
- **Border Default** (`rgba(17,17,17,0.10)`): Standard light border, 10% ink.
- **Border Strong** (`rgba(17,17,17,0.14)`): Emphasized light border.
- **Border Dark** (`rgba(255,255,255,0.10)`): Dark mode border, 10% white.
- **Border Accent** (`rgba(243,160,76,0.30)`): Orange-tinted border for active accent states.

### Tinted Accent Fills (for pills / tags)
- **Orange Fill** (`rgba(243,160,76,0.08)` to `0.30`): Orange-tinted backgrounds for orange pills.
- **Violet Fill** (`rgba(139,92,246,0.20)`): Violet-tinted pill background.
- **Emerald Fill** (`rgba(16,185,129,0.20)`): Emerald-tinted pill background.
- **Coral Fill** (`rgba(241,124,103,0.30)`): Coral-tinted pill background.

### Shadows & Depth
- **Card Shadow** (`rgba(0,0,0,0.08) 0px 8px 24px`): Soft elevated card lift.
- **Ambient Shadow** (`rgba(0,0,0,0.04) 0px 2px 8px`): Subtle ambient for floating elements.
- **Heavy Shadow** (`rgba(0,0,0,0.35) 0px 24px 60px`): Modal / hero product screenshot depth.

## 3. Typography Rules

### Font Family
- **Display / Headlines / UI**: `Montserrat`, with fallbacks: `-apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", "Helvetica Neue", sans-serif`
- **Body / Editorial**: `Montserrat` (same family, lighter weights for body)
- **Code / Technical**: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace`
- **System fallback**: `system-ui` chain via `-apple-system` for native rendering on macOS/iOS

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Montserrat | 80px (5.00rem) | 700 | 1.05 (tight) | -0.025em | Maximum impact, hero statements |
| Display Large | Montserrat | 48px (3.00rem) | 700 | 1.10 (tight) | -0.025em | Major section heroes |
| Section Heading | Montserrat | 38px (2.38rem) | 600 | 1.15 (tight) | -0.025em | Feature section titles |
| Sub-heading | Montserrat | 34px (2.13rem) | 600 | 1.20 | -0.025em | Sub-section titles |
| Title Large | Montserrat | 24px (1.50rem) | 600 | 1.25 | -0.025em | Card titles, prominent labels |
| Title | Montserrat | 22px (1.38rem) | 600 | 1.30 | normal | Card headings |
| Body Large | Montserrat | 20px (1.25rem) | 400 | 1.50 | normal | Lead paragraphs |
| Body | Montserrat | 17px (1.06rem) | 400 | 1.50 | normal | Standard body text |
| Body Small | Montserrat | 16px (1.00rem) | 400 | 1.50 | normal | Default UI text |
| Caption | Montserrat | 15px (0.94rem) | 400 | 1.50 | normal | Secondary descriptions |
| Label | Montserrat | 14px (0.88rem) | 500 | 1.40 | normal | UI labels, button text |
| Label Small | Montserrat | 13px (0.81rem) | 500 | 1.40 | normal | Small UI labels |
| Micro | Montserrat | 12px (0.75rem) | 500 | 1.40 | normal | Metadata, helper text |
| Micro Mono | ui-monospace | 11px (0.69rem) | 400 | 1.40 | normal | Inline code, technical micro |
| Eyebrow | Montserrat | 12px (0.75rem) | 600 | 1.20 | 2px | Uppercase section eyebrows |
| Eyebrow Tight | Montserrat | 11px (0.69rem) | 600 | 1.20 | 1px | Uppercase micro eyebrows |

### Principles
- **One family, full range**: Montserrat carries display through body. Hierarchy comes from size and weight (100-700), not from switching families.
- **Tight tracking on display**: Negative `-0.025em` on headings 24px+ creates engineered precision; positive tracking (`1px`, `2px`) on uppercase eyebrows for airy labels.
- **Weight as hierarchy**: 700 for hero, 600 for section/card titles, 500 for labels, 400 for body. Weight 100 reserved for the lightest decorative moments.
- **Monospace for the technical voice**: Code snippets, model names, and `@skill` handles use the platform mono stack to signal "this is a real thing you can type."

## 4. Component Stylings

### Buttons

**Primary (Orange)**
- Background: `#F3A04C` (Tabbit Orange)
- Text: `#ffffff`
- Padding: 12px 24px
- Radius: 9999px (full pill)
- Font: Montserrat 15px / 600
- Hover: background shifts to `#E58522` (Deep Orange)
- Use: Primary CTAs ("Try Tabbit for Free", "Download")

**Secondary (Ink)**
- Background: `#111111` (Tabbit Ink)
- Text: `#ffffff`
- Padding: 12px 24px
- Radius: 9999px
- Font: Montserrat 15px / 600
- Hover: opacity 0.88
- Use: Secondary CTAs, dark contrast buttons

**Surface (Cream)**
- Background: `#FBF1EC` (Blush Cream) or `#fffdf9`
- Text: `#1d1d1f`
- Padding: 10px 20px
- Radius: 9999px
- Border: `1px solid rgba(17,17,17,0.06)`
- Use: Tertiary actions, "Learn more" links

**Ghost (Transparent)**
- Background: transparent
- Text: `#1d1d1f` or `rgba(17,17,17,0.76)`
- Padding: 8px 16px
- Use: Inline actions, dismiss, nav links

**Frosted (Dark mode)**
- Background: `rgba(255,255,255,0.12)`
- Text: `#ffffff`
- Border: `1px solid rgba(255,255,255,0.10)`
- Radius: 9999px
- Use: Dark-surface buttons, glass overlays

### Pills & Tags

**Category Pill (Utility)**
- Background: `rgba(16,185,129,0.20)` (emerald tint)
- Text: `#10B981` or darker emerald
- Padding: 4px 10px
- Radius: 9999px
- Font: Montserrat 12px / 600, uppercase, letter-spacing 1px
- Use: "utility" skill category marker

**Category Pill (Taste)**
- Background: `rgba(139,92,246,0.20)` (violet tint)
- Text: `#8B5CF6`
- Padding: 4px 10px
- Radius: 9999px
- Font: Montserrat 12px / 600, uppercase, letter-spacing 1px
- Use: "taste" skill category marker

**Skill Handle Pill**
- Background: `rgba(243,160,76,0.08)` (orange tint)
- Text: `#E58522` (Deep Orange)
- Padding: 3px 10px
- Radius: 9999px
- Font: ui-monospace 12px / 500
- Use: `@skill-handle` labels under each skill card

### Cards & Containers

**Skill Card**
- Background: `#FBF1EC` (Blush Cream) on light, `rgba(255,255,255,0.04)` on dark
- Border: `1px solid rgba(17,17,17,0.06)`
- Radius: 20px (featured) or 16px (standard)
- Padding: 24px
- Shadow on hover: `rgba(0,0,0,0.08) 0px 8px 24px`
- Layout: category pill (top) + title + description + `@handle` pill (bottom)
- Use: The dense skills grid -- the signature component of the site

**Feature Card**
- Background: `#ffffff` or `#fffdf9`
- Border: `1px solid rgba(17,17,17,0.06)`
- Radius: 24px
- Padding: 32px
- Use: Hero feature blocks, "Context" / "Multi-agent" sections

**Product Screenshot Card**
- Background: gradient `#ffffff` → `#fffdf9`
- Border: `1px solid rgba(17,17,17,0.06)`
- Radius: 28px
- Shadow: `rgba(0,0,0,0.35) 0px 24px 60px`
- Use: Large hero product shots, browser window mockups

### Inputs & Forms
- Background: `#ffffff`
- Text: `#1d1d1f`
- Border: `1px solid rgba(17,17,17,0.10)`
- Radius: 12px
- Padding: 12px 16px
- Focus: border shifts to `rgba(243,160,76,0.30)` with orange ring
- Use: Email capture, search omnibox mockups

### Navigation
- Sticky top nav on `#ffffff` with `backdrop-filter: blur(12px)`
- Brand logotype left-aligned
- Links: Montserrat 15px / 500, color `#1d1d1f` or `rgba(17,17,17,0.76)`
- CTA: orange pill button right-aligned
- Border-bottom: `1px solid rgba(17,17,17,0.06)` on scroll

### Distinctive Components

**Skills Grid**
- Multi-column responsive grid of skill cards (3-4 columns desktop, 1-2 mobile)
- Each card: category pill (utility/taste) + title + 1-line description + `@handle` mono pill
- The defining visual metaphor: "2000 Agentic Skills" made tangible as a browsable wall

**Browser Window Mockup**
- Rounded 28px outer frame, `1px solid rgba(17,17,17,0.06)`
- Traffic-light dots top-left, omnibox center
- Tab strip showing AI-aware tabs
- Used in hero and feature sections to ground the product

**Model Logo Strip**
- Horizontal row of AI model logos (GPT, Claude, Gemini, Grok, DeepSeek, Kimi, Qwen)
- Grayscale by default, full color on hover
- Caption: "Every SOTA model. Day one."

**Privacy Checklist**
- Three crossed-out items ("Selling your data", "Training on your reads", "Deciding what you see")
- Strikethrough in `#9ca3af`, checkmark in emerald
- SOC 2 badge as a pill

## 5. Layout Principles

### Spacing System
- Base unit: 4px (Tailwind default)
- Fine scale: 4px, 8px, 12px, 16px, 20px, 24px
- Standard scale: 32px, 40px, 48px, 64px
- Section scale: 80px, 96px, 120px, 160px (vertical section padding)
- Notable: Tailwind's 4px base gives precise 4/8/12 increments throughout

### Grid & Container
- Max content width: ~1200px (centered, generous gutters)
- Hero: centered single-column with large top padding (96-160px)
- Feature sections: 2-3 column grids for cards
- Skills grid: 3-4 column auto-fill (`minmax(280px, 1fr)`) for dense skill walls
- Full-width sections with white → cream → white tone shifts

### Whitespace Philosophy
- **Bright negative space**: White and cream backgrounds make whitespace feel airy and premium, like an Apple product page. Empty areas breathe rather than recede.
- **Pill everything**: Buttons, tags, category markers, and badges are all full-pill (9999px). Only cards and inputs use rectangular radii (12-28px). This creates a soft, approachable rhythm.
- **Section rhythm**: Vertical padding of 80-160px between major sections gives the long marketing page a calm, scrollable cadence.

### Border Radius Scale
- Small (4px): Inline micro elements
- Compact (6px): Small chips, inline badges
- Input (12px): Form inputs, search fields
- Card (16px): Standard skill cards
- Featured (20px): Highlighted skill cards
- Large (24px): Feature cards
- Hero (28px): Product screenshot frames, browser mockups
- Full Pill (9999px): All buttons, tags, pills, badges

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, text blocks |
| Border (Level 1) | `1px solid rgba(17,17,17,0.06)` | Standard card border |
| Border Emphasis (Level 1b) | `1px solid rgba(17,17,17,0.10)` | Emphasized borders, inputs |
| Ambient (Level 2) | `rgba(0,0,0,0.04) 0px 2px 8px` | Subtle floating elements |
| Card (Level 3) | `rgba(0,0,0,0.08) 0px 8px 24px` | Elevated cards on hover |
| Heavy (Level 4) | `rgba(0,0,0,0.35) 0px 24px 60px` | Hero product screenshots, modals |
| Focus | `0 0 0 3px rgba(243,160,76,0.30)` | Orange focus ring on inputs |

**Shadow Philosophy**: Tabbit's depth is restrained and warm. Borders do most of the separation work (6-10% ink overlays), while shadows are reserved for moments that need real lift -- card hover and hero product shots. The heavy shadow uses a large 60px blur at 35% opacity to give browser-window mockups a floating, premium quality without harsh edges. Focus states use a 3px orange ring rather than a cold blue outline, keeping the warm accent consistent into interaction states.

### Decorative Depth
- Cream surface variations (`#ffffff` → `#fffdf9` → `#FBF1EC`) create tonal depth without shadows
- Tinted accent fills (orange/violet/emerald at 8-20% opacity) give pills and tags a soft chromatic depth
- No harsh divider lines -- section separation through background tone and spacing

## 7. Do's and Don'ts

### Do's
- **Do** use Tabbit Orange (`#F3A04C`) as the single dominant accent -- it carries the brand
- **Do** warm the white canvas with cream surfaces (`#fffdf9`, `#FBF1EC`) for cards
- **Do** use full-pill (9999px) for all buttons, tags, and badges
- **Do** tag every skill card with a `utility` (emerald) or `taste` (violet) category pill
- **Do** render `@skill-handles` in monospace inside an orange-tinted pill
- **Do** use Montserrat across the full weight range for hierarchy
- **Do** apply tight `-0.025em` tracking on headings 24px and above
- **Do** keep text on the soft near-black `#1d1d1f`, never pure `#000`

### Don'ts
- **Don't** introduce a second dominant accent color -- orange is the hero
- **Don't** use cold gray backgrounds (`#f3f4f6`, `#e5e7eb`) -- warm the canvas instead
- **Don't** use sharp rectangular buttons -- pills are the language
- **Don't** use pure black (`#000000`) for text or surfaces -- use `#1d1d1f` / `#111111`
- **Don't** mix many font families -- Montserrat + system mono is the whole system
- **Don't** use heavy drop shadows on small cards -- reserve heavy shadows for hero mockups
- **Don't** use cold blue focus rings -- use the 3px orange ring

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, stacked nav, reduced hero (80px → 38px) |
| Tablet Small | 640-768px | 2-column skill grid, condensed hero |
| Tablet | 768-1024px | 2-3 column grids, sidebar appears |
| Desktop Small | 1024-1280px | 3-column skill grid, full layout forming |
| Desktop | >1280px | 4-column skill grid, maximum content width |

### Touch Targets
- All buttons are full-pill with 12px vertical / 24px horizontal padding -- comfortably tappable
- Skill cards have 24px internal padding and 16-20px gaps between -- touch-friendly
- Nav links at 15px / 500 with 24px gaps

### Collapsing Strategy
- Hero: 80px Montserrat → 48px → 38px on mobile, maintaining -0.025em tracking
- Navigation: horizontal links → hamburger menu on mobile
- Skills grid: 4-column → 3 → 2 → 1 stacked
- Browser mockup: maintains 28px radius, scales proportionally
- Section spacing: 120-160px → 80px → 48px on mobile

### Image Behavior
- Product screenshots maintain 28px radius and heavy shadow at all sizes
- Model logo strip wraps and centers on narrow screens
- Skill cards maintain pill + title + handle structure, only the grid count changes

## 9. Agent Prompt Guide

### Quick Color Reference
- Page background: `#ffffff` (white) warming to `#fffdf9` / `#FBF1EC` for surfaces
- Text color: `#1d1d1f` (soft near-black)
- Secondary text: `rgba(17,17,17,0.76)` or `#9ca3af`
- Primary accent: `#F3A04C` (Tabbit Orange), deepening to `#E58522` on hover
- Utility tag: `rgba(16,185,129,0.20)` bg with `#10B981` text
- Taste tag: `rgba(139,92,246,0.20)` bg with `#8B5CF6` text
- Border: `rgba(17,17,17,0.06)` (light) or `rgba(255,255,255,0.10)` (dark)
- Dark surface: `#111111`

### Example Component Prompts
- "Create a hero on `#ffffff` with a centered headline at 80px Montserrat weight 700, line-height 1.05, letter-spacing -0.025em, color `#1d1d1f`. Subtitle at 17px Montserrat 400, color `rgba(17,17,17,0.76)`. Primary CTA: full-pill button, `#F3A04C` bg, white text, 12px 24px padding, 15px/600, hover shifts to `#E58522`."
- "Build a skill card: `#FBF1EC` background, `1px solid rgba(17,17,17,0.06)` border, 20px radius, 24px padding. Top: a utility category pill (`rgba(16,185,129,0.20)` bg, `#10B981` text, 12px/600 uppercase, 1px tracking, 4px 10px padding, 9999px radius). Title at 22px Montserrat 600. Description at 16px/400. Bottom: `@handle` pill in ui-monospace 12px, `rgba(243,160,76,0.08)` bg, `#E58522` text."
- "Design a browser window mockup: 28px outer radius, `1px solid rgba(17,17,17,0.06)` border, `rgba(0,0,0,0.35) 0px 24px 60px` shadow. Top bar with three traffic-light dots left, an omnibox pill center. Tab strip showing AI-aware tab titles in Montserrat 14px/500."
- "Create a model logo strip: horizontal row of 7 AI model logos in grayscale, full color on hover, centered. Caption below in Montserrat 15px/500 `rgba(17,17,17,0.76)`: 'Every SOTA model. Day one.'"
- "Build a privacy checklist: three items with strikethrough in `#9ca3af` ('Selling your data', 'Training on your reads', 'Deciding what you see'), each with an emerald `#10B981` checkmark. Below: a SOC 2 pill badge."

### Iteration Guide
1. Always warm the canvas -- `#ffffff` base, `#fffdf9` / `#FBF1EC` for surfaces, never cold gray
2. Tabbit Orange `#F3A04C` is the only dominant accent; violet and emerald are for category tags only
3. Everything interactive is a full pill (9999px); cards and inputs use 12-28px rectangular radii
4. Montserrat carries all text; ui-monospace only for `@handles`, code, and model names
5. Apply `-0.025em` tracking on headings 24px+, positive 1-2px tracking on uppercase eyebrows
6. Text is `#1d1d1f` (light) or `#ffffff` (dark) -- never pure `#000`
7. Borders are 6-10% ink overlays; reserve shadows for card hover and hero mockups
8. Tag every skill with `utility` (emerald) or `taste` (violet) -- it is the site's organizing principle
