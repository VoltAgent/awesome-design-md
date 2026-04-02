# Design System: LenderIQ

## 1. Visual Theme & Atmosphere

LenderIQ is a mortgage analytics SaaS platform that pairs deep navy authority with clean, data-forward report surfaces. The design language communicates institutional trust — the kind of polished confidence a loan officer expects from a financial intelligence tool. Dark navy hero sections (`#000A4E` → `#000731`) ground the brand in gravitas, while the report interface opens into airy white cards on pale blue-gray backgrounds (`#F4F8F9`, `#EDF6FF`), creating a clinical clarity suited for scanning numbers and charts.

The typography is built entirely on Figtree — a geometric sans-serif from Google Fonts with open, humanist proportions that soften the data-heavy interface. At 64px/800 weight with -1.5px letter-spacing, hero headlines hit hard, compressing into dense, billboard-like statements. The extrabold weight (800) is reserved exclusively for headings, creating a sharp contrast against the 400-weight body text — hierarchy through weight, not decoration.

The dual-accent system is distinctive: golden yellow (`#FFC124`) for primary CTAs and calls to action — warm, urgent, impossible to miss against navy — and blue (`#0B69F5`, `#0389FF`) for informational actions, links, and data highlights. This warm/cool pairing prevents the monotony of single-accent systems while maintaining clear semantic meaning: yellow means "act now," blue means "explore this."

Cards are the fundamental unit of the report interface — white surfaces with subtle composite shadows (`box-shadow: 0px 0px 0px 1px rgba(33,33,38,0.07), 0px 1px 1px rgba(0,0,0,0.05), 0px 5px 11px rgba(34,42,53,0.08)`) and generous 16px border-radius that create a soft, lifted, almost paper-like feel. The shadow system uses multiple layers at low opacity rather than a single heavy shadow, producing a refined, barely-there elevation.

**Key Characteristics:**
- Dark navy hero/navigation (`#000A4E`, `#000731`) transitioning to white report surfaces
- Figtree font — geometric sans-serif, 800 weight for headings, 400 for body
- Dual accent: golden yellow (`#FFC124`) for CTAs, blue (`#0B69F5`) for information
- White card-based report layout on pale blue-gray (`#F4F8F9`) backgrounds
- Multi-layer composite shadows for soft, paper-like card elevation
- 8px-based spacing scale from 4px to 120px
- Border radius scale: 4px (tight) → 8px (standard) → 16px (cards) → 9999px (pills/badges)
- Semantic color system: green for success, red for danger, amber for warning
- CSS custom properties (design tokens) for all values
- Staggered entrance animations with translateY reveals

## 2. Color Palette & Roles

### Brand Primary
- **Navy Deep** (`#000A4E`): Hero backgrounds, navigation, footer, primary dark surface
- **Navy Darker** (`#000731`): Gradient endpoint, deepest brand surface
- **Navy Deepest** (`#030224`): Badge labels, darkest accent
- **Blue Main** (`#0389FF`): Links, data highlights, interactive blue
- **Blue 5** (`#0B69F5`): Primary blue buttons, focus rings, link alt
- **Blue Light** (`#7BBDFF`): Hover borders, selection highlight, soft blue accent

### Accent
- **Yellow Gold** (`#FFC124`): Primary CTA buttons, urgency, call-to-action
- **Yellow Hover** (`#FFCE4A`): Yellow button hover state

### Neutral Scale
- **White** (`#FFFFFF`): Card backgrounds, primary surface, button text on dark
- **Off-White** (`#F4F8F9`): Page background, secondary surface
- **Ice Blue** (`#EDF6FF`): Tertiary background, feature section wash
- **Pale Green** (`#EDF1E6`): Neutral accent surface
- **Pale Sky Blue** (`#DAE1E6`): Soft border, decorative neutral
- **Silver Blue** (`#BBC5D8`): Disabled text, neutral mid-tone
- **Grey Blue** (`#8194AA`): Placeholder icons, muted elements
- **Steel** (`#78899C`): Helper text, captions, secondary metadata
- **Slate** (`#536880`): Tertiary text, de-emphasized labels

### Text
- **Primary** (`#17191C`): Headings, body text, high-emphasis content
- **Primary 90** (`#0D121A`): Near-black, maximum contrast text
- **Secondary** (`#303841`): Subtitles, descriptions, medium-emphasis
- **Tertiary** (`#18173B`): Dark blue-tinted text, special labels
- **Reverse Primary** (`#FFFFFF`): Text on dark backgrounds
- **Reverse Secondary** (`rgba(255, 255, 255, 0.8)`): Muted text on dark backgrounds

### Semantic
- **Success** (`#009D5C`): Positive indicators, score badges
- **Success Dark** (`#005B35`): High-score badge text
- **Success Light** (`rgba(21, 216, 93, 0.4)`): High-score badge background
- **Success Medium** (`rgba(93, 216, 21, 0.4)`): Medium-score badge background
- **Danger** (`#FF1010`): Error states, critical alerts
- **Warning** (`#B87203`): Low-score badge text, caution indicators
- **Warning Light** (`rgba(244, 195, 18, 0.32)`): Low-score badge background

### Purchase/Premium
- **Lost Red** (`#EF4444`): Lost deals accent
- **Lost Red BG** (`#FEF2F2`): Lost deals background wash
- **Refi Green** (`#10B981`): Refinance opportunity accent
- **Refi Green BG** (`#ECFDF5`): Refinance opportunity background wash
- **Bundle Gold** (`#F59E0B`): Premium bundle accent
- **Bundle Gold BG** (`#FFFBEB`): Premium bundle background wash
- **Timer Urgent** (`#DC2626`): Countdown urgency

### Borders
- **Light** (`rgba(156, 172, 190, 0.15)`): Default card/section borders
- **Darker** (`rgba(156, 172, 190, 0.3)`): Section dividers, table borders
- **Darker 2** (`rgba(83, 104, 128, 0.32)`): Input borders, prominent dividers
- **Subtle** (`rgba(0, 0, 0, 0.06)`): Barely-visible separators
- **Premium** (`rgba(11, 105, 245, 0.12)`): Blue-tinted premium borders

### Gradients
- **Hero** (`linear-gradient(180deg, #000A4E 0%, #000731 100%)`): Landing page hero
- **Feature BG** (`linear-gradient(180deg, #FFFFFF 1.65%, #EDF6FF 100%)`): Feature section wash
- **Card Premover** (`linear-gradient(180deg, #F4F9FF 76%, #D6D7FA 100%)`): Purple-tinted card
- **Card Refi** (`linear-gradient(180deg, #F4F9FF 76%, #D8F3EA 100%)`): Green-tinted card
- **Card Buyer** (`linear-gradient(180deg, #F4F9FF 76%, #F7E6CF 100%)`): Warm-tinted card
- **Savings** (`linear-gradient(120deg, #EBFFDA 7%, #D6EBFF 93%)`): Value proposition highlight

## 3. Typography Rules

### Font Families
- **Primary**: `Figtree`, with fallbacks: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif`
- **No monospace**: The system uses Figtree exclusively — no code font in the public-facing UI

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|--------|-------------|----------------|-------|
| Display H1 | 64px | 800 (extrabold) | 110% | -1.5px | Hero headlines, maximum impact |
| H2 | 56px | 800 | 110% | -1px | Section headings |
| H3 | 38px | 800 | 130% | -1px | Feature titles, report section titles |
| H4 | 24px | 800 | 140% | -0.5px | Card headings, sub-section titles |
| H5 | 16px | 600 (semibold) | 24px | 0 | Small headings, label-like emphasis |
| Body Large | 20px | 400 | 1.6 | 0 | Hero subtext, lead paragraphs |
| Body Medium | 16px | 400 | 28px | 0 | Standard body, descriptions |
| Body Small | 14px | 400 | 20px | 0 | Metadata, captions, helper text |
| Body XS | 12px | 400 | 18px | 0 | Fine print, timestamps |
| Label | 14px | 700 (bold) | 20px | 0 | `text-transform: uppercase` — section labels |
| Label Small | 12px | 500 | 16px | 0 | Subtle metadata labels |
| Report Title | 36px | 700 | 44px | 0 | Report section headings |
| Button | 14–18px | 600 | 20–24px | 0 | Button labels, size-dependent |

### Responsive Scale (< 768px)
| Role | Desktop | Mobile |
|------|---------|--------|
| H1 | 64px / -1.5px | 40px / -1px |
| H2 | 56px / -1px | 36px / -0.75px |
| H3 | 38px / -1px | 28px / -0.5px |
| H4 | 24px / -0.5px | 20px / -0.25px |
| Body Large | 20px | 18px |

### Principles
- **Extrabold for authority**: 800 weight on all headings creates a commanding, institutional presence. The mortgage industry demands confidence — lightweight headings would feel tentative.
- **Tight negative tracking**: -1.5px on H1, -1px on H2/H3 — the headlines are compressed, creating dense, impactful blocks of text that scan quickly.
- **Single font family**: Figtree carries the entire typographic load. No serif companion, no monospace accent — the design trusts one font to do all the work.
- **Line-height compression**: Hero text at 110% is tightly packed. Body text at 28px line-height (1.75 ratio at 16px) is generously spaced for readability in data contexts.

## 4. Component Stylings

### Buttons

**Primary (Yellow CTA)**
- Background: `#FFC124`
- Text: `#000A4E` (navy — high contrast on gold)
- Padding: 12px 24px (md), 16px 32px (lg)
- Radius: 8px
- Font-weight: 600
- Hover: `#FFCE4A`
- Active: `scale(0.98)`
- Transition: `all 150ms ease`
- Use: Primary CTA — "Get Your Report", "Book Demo"

**Primary Blue**
- Background: `#0B69F5`
- Text: `#FFFFFF`
- Padding: 12px 24px (md), 16px 32px (lg)
- Radius: 8px
- Hover: `#0389FF`
- Active: `scale(0.98)`
- Use: Informational primary actions — "View Report", "Share"

**Secondary Light**
- Background: `#FFFFFF`
- Text: `#17191C`
- Border: `1px solid rgba(83, 104, 128, 0.32)`
- Radius: 8px
- Hover BG: `#F4F8F9`
- Use: Secondary actions on light backgrounds

**Secondary Dark**
- Background: transparent
- Text: `#FFFFFF`
- Border: `1px solid rgba(255, 255, 255, 0.3)`
- Radius: 8px
- Hover BG: `rgba(255, 255, 255, 0.1)`
- Hover Border: `rgba(255, 255, 255, 0.5)`
- Use: Secondary actions on navy backgrounds

**Ghost**
- Background: transparent
- Text: `#0B69F5`
- No padding, no border
- Hover: underline
- Use: Tertiary actions, inline links

**Disabled (all variants)**
- Opacity: 0.5
- Cursor: not-allowed

### Cards

**Report Card (Elevated)**
- Background: `#FFFFFF`
- Radius: 16px
- Shadow: `0px 0px 0px 1px rgba(33,33,38,0.07), 0px 1px 1px rgba(0,0,0,0.05), 0px 5px 11px rgba(34,42,53,0.08)`
- Header padding: 32px 40px 0
- Content padding: 0 40px 40px
- Section title: 36px / 700 weight

**Feature Card**
- Background: `#FFFFFF`
- Radius: 16px
- Shadow: `0px 3px 20px rgba(2,36,71,0.06), 0px 0px 3px rgba(2,36,71,0.04)`
- Gradient headers for opportunity types (premover/refi/buyer)

**Default Card**
- Background: `#FFFFFF`
- Radius: 16px
- Shadow: `0px 1px 2px rgba(0,5,40,0.04)`
- Padding: 16px (sm), 32px (md), 48px (lg)

### Inputs

**Default**
- Background: `#FFFFFF`
- Border: `1px solid rgba(83, 104, 128, 0.32)`
- Radius: 8px
- Height: 40px (sm), 48px (md), 56px (lg)
- Padding: 0 12px (sm), 0 16px (md), 0 20px (lg)
- Font: 16px Figtree
- Placeholder: `#303841` at 60% opacity

**Hover**: border-color → `#7BBDFF`
**Focus**: border-color → `#0389FF`, box-shadow → `0 0 0 3px rgba(11, 105, 245, 0.15)`
**Error**: border-color → `#FF1010`, focus shadow → `0 0 0 3px rgba(228, 37, 39, 0.15)`
**Disabled**: background → `#F4F8F9`, cursor → not-allowed

### Badges

**Score High**
- Background: `rgba(21, 216, 93, 0.4)`
- Text: `#005B35`
- Radius: 9999px (pill)
- Font: 11px / bold
- Min-width: 28px

**Score Medium**
- Background: `rgba(93, 216, 21, 0.4)`
- Text: `#127C01`

**Score Low**
- Background: `rgba(244, 195, 18, 0.32)`
- Text: `#B87203`

**Label Dark**
- Background: `#030224`
- Text: `#FFFFFF`
- Padding: 8px 12px
- Font: 11px / semibold

### Navigation
- Background: `#000A4E` (navy)
- Height: 70px
- Sticky, z-index: 100
- Border-bottom: `1px solid rgba(255, 255, 255, 0.1)`
- Container max-width: 1408px
- Logo left-aligned, CTA right-aligned

### Footer
- Background: `#000A4E` (dark variant) or `#FFFFFF` (light variant)
- Padding: 24px 16px
- Text: `rgba(255, 255, 255, 0.8)` (dark) or `#303841` (light)
- Links: hover → underline, color transition 200ms
- Centered content layout, row on 640px+

### Report Section
- Background: `#FFFFFF`
- Radius: 12px
- Entrance animation: translateY(24px) → translateY(0), opacity 0 → 1, 500ms ease-out
- Respects `prefers-reduced-motion`

## 5. Layout Principles

### Spacing Scale (8px base)
| Token | Value | Use |
|-------|-------|-----|
| xs | 4px | Tight gaps, icon margins |
| sm | 8px | Input internal gaps, tight spacing |
| md | 12px | Button padding (vertical), form gaps |
| lg | 16px | Standard component gap, card padding (sm) |
| xl | 20px | Input padding (lg), comfortable gap |
| 2xl | 24px | Section internal padding, form card gaps |
| 3xl | 32px | Card content padding, major component gap |
| 4xl | 48px | Card padding (lg), large component gap |
| 5xl | 64px | Section spacing, container padding (desktop) |
| 6xl | 80px | Major section spacing |
| 7xl | 120px | Hero-scale spacing |

### Grid & Container
- Max-width: 1408px (1280px content + 64px padding each side)
- Mobile padding: 24px
- Desktop padding: 64px (1024px+)
- Hero layout: 2-column grid (1fr + 420px form) at desktop, stacked at 900px
- Report layout: single-column stacked cards with vertical rhythm

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | < 768px | Stacked layout, reduced typography, tighter padding |
| Tablet | 768px–1024px | Adjusted grid, intermediate spacing |
| Desktop | 1024px+ | Full grid, desktop padding (64px) |
| Wide | 1100px+ | Full hero 2-column layout |

### Whitespace Philosophy
- **Generous report spacing**: Report sections are separated by consistent vertical rhythm — each card floats independently on the pale background, creating scannable data blocks.
- **Dense hero content**: The hero packs headline, subtext, bullet list, and form into a tight above-the-fold composition. No wasted vertical space in the conversion zone.
- **Card-defined boundaries**: Content is always contained within white cards. The pale background (`#F4F8F9`) is never a content surface — it's the space between cards.

### Border Radius Scale
| Token | Value | Use |
|-------|-------|-----|
| xs | 4px | Tight elements, small tags |
| sm | 6px | Small buttons, subtle rounding |
| md | 8px | Buttons, inputs, standard interactive elements |
| lg | 12px | Report sections, medium containers |
| xl | 16px | Cards, hero form, feature panels |
| full | 9999px | Badges, pills, score indicators |

## 6. Depth & Elevation

| Level | Token | Shadow Value | Use |
|-------|-------|-------------|-----|
| Level 0 (XS) | `--shadow-xs` | `0px 1px 1px rgba(0,0,0,0.05)` | Subtle lift, baseline elements |
| Level 1 (SM) | `--shadow-sm` | `0px 1px 2px rgba(0,5,40,0.04)` | Default cards, resting state |
| Level 2 (MD) | `--shadow-md` | `0px 3px 20px rgba(2,36,71,0.06), 0px 0px 3px rgba(2,36,71,0.04)` | Feature cards, emphasized panels |
| Level 3 (LG) | `--shadow-lg` | `0px 5px 11px rgba(34,42,53,0.08)` | Hover states, raised elements |
| Level 4 (XL) | `--shadow-xl` | `0px 13px 27px rgba(0,5,40,0.12)` | Modals, overlays |
| Level 5 (Card) | `--shadow-card` | `0px 0px 0px 1px rgba(33,33,38,0.07), 0px 1px 1px rgba(0,0,0,0.05), 0px 5px 11px rgba(34,42,53,0.08)` | Report cards — composite: border + lift + spread |
| Level 6 (Float) | `--shadow-float` | `0px 24px 68px rgba(47,48,55,0.05), 0px 4px 6px rgba(34,42,53,0.04)` | Floating elements, popovers |
| Hero Form | Custom | `0 25px 50px -12px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.1)` | Hero form card — dramatic lift on dark |

**Shadow Philosophy**: LenderIQ uses a multi-layer shadow system where depth is built from multiple low-opacity shadows rather than a single heavy shadow. The composite `--shadow-card` combines a 1px ring border, a tight contact shadow, and a soft spread — three layers that create a refined, paper-on-desk elevation. Navy-tinted shadow colors (`rgba(0,5,40,...)`, `rgba(2,36,71,...)`) maintain the cool color temperature even in shadows.

## 7. Do's and Don'ts

### Do
- Use `#000A4E` navy for hero sections, navigation, and footer — it's the brand authority color
- Apply yellow (`#FFC124`) exclusively for primary CTAs — it signals "take action now"
- Use blue (`#0B69F5`) for links, data highlights, and informational buttons — it signals "explore"
- Set all headings to Figtree 800 weight — the extrabold is the typographic identity
- Use composite multi-layer shadows for cards — the subtle layering is the elevation signature
- Contain all content within white cards on `#F4F8F9` backgrounds — the pale background is negative space, not content space
- Use 16px border-radius for cards and 8px for interactive elements (buttons, inputs)
- Apply pill radius (9999px) only for badges and score indicators
- Animate section entrances with translateY(24px) reveals at 500ms ease-out
- Use semantic colors consistently: green = success/opportunity, red = danger/loss, amber = warning/caution
- Add `?? 0` or `?? defaultValue` guards when accessing data — old cached reports may lack new fields

### Don't
- Don't use yellow for informational elements — it's reserved for CTA urgency only
- Don't apply blue as a background color for large surfaces — blue is for accents and interactive elements
- Don't use heading weights below 700 — body text is 400, headings jump to 700–800, nothing between
- Don't add single-layer heavy shadows — always use multiple low-opacity layers
- Don't place content directly on the page background — always use a white card container
- Don't use pure black (`#000000`) for text — the darkest text is `#0D121A`
- Don't increase body line-height beyond 28px — the generous 1.75 ratio is already optimized for data scanning
- Don't skip the navy-to-white transition — the brand experience is dark hero → light report surface
- Don't use border-radius values outside the defined scale (4, 6, 8, 12, 16, 9999)
- Don't animate without respecting `prefers-reduced-motion` — all entrance animations must degrade

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | < 768px | Single column, reduced type scale, 20px padding |
| Tablet | 768px–1024px | Adjusted grids, intermediate padding |
| Desktop Small | 1024px+ | Full container padding (64px), multi-column layouts |
| Desktop | 1100px+ | Full hero grid (content + 420px form side by side) |

### Collapsing Strategy
- **Hero**: 2-column grid → single column stacked at 900px. Form card goes full-width below content.
- **Typography**: H1 64px → 36px, H2 56px → 36px, H3 38px → 28px at 768px
- **Container**: 64px padding → 40px (1100px) → 20px (768px)
- **Report sections**: Header stacks vertically below 1024px. Padding reduces from 40px → 24px → 20px.
- **Footer**: Row layout → column stack below 640px
- **Form card**: 420px fixed width → full-width with max 420px → unconstrained below 768px
- **Buttons**: Maintain consistent height, go full-width in mobile forms
- **Touch targets**: All interactive elements maintain minimum height (40px sm, 48px md, 56px lg)

### Animation Behavior
- Staggered reveal animations on hero: headline (0s delay) → subtext (0.2s) → form card (0.3s) → illustration (0.5s)
- `prefers-reduced-motion`: all animations disabled, elements render immediately at final state

## 9. Agent Prompt Guide

### Quick Color Reference
- Hero/Nav background: `#000A4E` → `#000731` gradient
- Page background: `#F4F8F9`
- Card surface: `#FFFFFF`
- Text primary: `#17191C`
- Text secondary: `#303841`
- Text on dark: `#FFFFFF`, muted: `rgba(255,255,255,0.8)`
- CTA yellow: `#FFC124` (hover: `#FFCE4A`)
- Action blue: `#0B69F5` (hover: `#0389FF`)
- Link blue: `#0389FF`
- Success: `#009D5C`
- Danger: `#FF1010`
- Borders: `rgba(156,172,190,0.15)` light, `rgba(83,104,128,0.32)` inputs
- Focus ring: `0 0 0 3px rgba(11,105,245,0.15)`

### Example Component Prompts
- "Create a hero section with `linear-gradient(180deg, #000A4E, #000731)` background. Headline at 64px Figtree weight 800, line-height 110%, letter-spacing -1.5px, white text. Subtext at 20px weight 400, `rgba(255,255,255,0.8)`. Yellow CTA button (`#FFC124` bg, `#000A4E` text, 8px radius, 16px 32px padding, weight 600)."
- "Design a report card: `#FFFFFF` background, 16px radius, shadow `0px 0px 0px 1px rgba(33,33,38,0.07), 0px 1px 1px rgba(0,0,0,0.05), 0px 5px 11px rgba(34,42,53,0.08)`. Title at 36px Figtree weight 700. Subtitle at 16px weight 400, `#303841`. Padding 32px 40px."
- "Build navigation: `#000A4E` background, 70px height, sticky. Logo left-aligned. Yellow CTA button right-aligned. Bottom border `1px solid rgba(255,255,255,0.1)`. Max-width 1408px centered."
- "Create a form input: `#FFFFFF` background, `1px solid rgba(83,104,128,0.32)` border, 8px radius, 48px height, 16px horizontal padding. Focus: border → `#0389FF`, shadow → `0 0 0 3px rgba(11,105,245,0.15)`. Placeholder at 60% opacity."
- "Design a score badge: pill shape (9999px radius), 11px bold text. High: `rgba(21,216,93,0.4)` bg / `#005B35` text. Medium: `rgba(93,216,21,0.4)` bg / `#127C01` text. Low: `rgba(244,195,18,0.32)` bg / `#B87203` text."
- "Create a feature card with gradient header: `linear-gradient(180deg, #000731, #0B1340)` header at 260px height. White body with 32px padding. Title at 24px weight 800. Shadow `--shadow-md`."

### Iteration Guide
1. Start with the dark navy navigation bar (`#000A4E`) — it anchors the entire experience
2. Hero uses navy gradient with white/yellow content — maximum contrast for conversion
3. Report area transitions to `#F4F8F9` background with floating white cards
4. Yellow (`#FFC124`) is exclusively for CTAs — never decorative
5. Blue (`#0B69F5`) is for links and informational actions — never backgrounds
6. Cards always get composite multi-layer shadows, never single-layer
7. All headings at 800 weight — the authority comes from typographic density
8. Entrance animations: translateY(24px), 500ms ease-out, staggered delays
9. Score badges use traffic-light semantics: green/yellow with pill radius
10. Every interactive element needs focus-visible: `2px solid #0B69F5, 2px offset`
