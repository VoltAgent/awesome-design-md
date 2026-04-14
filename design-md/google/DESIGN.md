# Design System Inspired by Google Cloud & Workspace

## 1. Visual Theme & Atmosphere

Google Cloud Console and Google Workspace (Gmail, Drive, Docs, Calendar) share a unified visual language built around a single principle: **function before decoration**. This is not the expressive, playful Material You you see on consumer Android — it is Material at its most enterprise, most utilitarian. The canvas is overwhelmingly white (`#ffffff`) or a soft neutral (`#f8f9fa`) that recedes so that dense information — tables, logs, billing breakdowns, dashboards, threads of emails, rows of files — can sit front and center without visual competition. Where Linear feels like "engineered darkness," Google Cloud feels like **well-lit office space**: clean, measured, built for long sessions of reading, scanning, and acting on data.

The typography is built on **Google Sans** (display and UI-critical text) paired with **Roboto** (body and UI filler) and **Roboto Mono** (code, resource IDs, logs). Weights are used conservatively — `400` (regular) and `500` (medium) do 90% of the work, with `700` reserved for strong emphasis or Google Sans display sizes. There is no aggressive negative letter-spacing here and no display-scale maximalism: headlines top out around 32–48px, body text sits comfortably at `14px` with `1.5` line-height, and the hierarchy is achieved primarily through weight and color, not size jumps. This is a reading UI, not a marketing hero.

The color system is **disciplined and achromatic by default**, punctuated by a single trusted brand accent: **Google Blue** (`#1a73e8`) for primary actions, links, and the active state of anything interactive. The four corporate status colors — success green (`#1e8e3e`), danger red (`#d93025`), warning yellow (`#f9ab00`), info blue (`#1a73e8`) — carry real semantic weight: they appear on billing alerts, error banners, deploy states, and quota bars. They are never decorative. Borders are hairline (`1px solid #dadce0`), shadows are rare and soft (Material elevation levels 1–2 dominate), and radii are small and rational — `4px` for buttons and inputs, `8px` for cards, `16px` or `9999px` only for chips and avatars. The overall feel is a product designed by engineers for engineers, doctors, IT admins, CFOs, and anyone whose job depends on getting the right number off a screen without being distracted.

**Key Characteristics:**
- Light-mode-first canvas: `#ffffff` content, `#f8f9fa` app shell background, `#f1f3f4` hover surfaces, `#e8eaed` dividers
- Google Sans for display and UI-critical text, Roboto for body, Roboto Mono for code and resource identifiers
- Single brand accent: Google Blue `#1a73e8` (primary) / `#1558b8` (hover) / `#174ea6` (pressed) — used sparingly
- Semantic status palette: green `#1e8e3e`, red `#d93025`, yellow `#f9ab00`, info `#1a73e8` — never decorative
- Conservative radii: `4px` buttons and inputs, `8px` cards, `16px`/`pill` only for chips and avatars
- Hairline `1px` solid borders (`#dadce0`) — no semi-transparent overlay borders
- Material elevation levels `0`–`2` do 95% of the depth work — flatness preferred
- Persistent `256px` left navigation rail with `64px` top app bar — the signature Workspace and Cloud Console shell
- Dense data tables: `48px` row height, `16px` horizontal padding, sticky headers, no zebra striping
- Dark mode offered as first-class alternative: surface `#202124` / elevated `#292a2d` / card `#35363a`, accent shifted to `#8ab4f8`

## 2. Color Palette & Roles

### Light Mode — Background Surfaces
- **Canvas White** (`#ffffff`): The primary content surface — cards, tables, modals, and document bodies. The default working background where data lives.
- **App Shell Gray** (`#f8f9fa`): The application chrome background — page containers, navigation rails, and areas behind cards. One step softer than pure white to give cards a subtle lift.
- **Subtle Surface** (`#f1f3f4`): Hover backgrounds on menu items, table rows, and ghost buttons. Also used for inline code backgrounds.
- **Recessed Surface** (`#e8eaed`): Pressed and active states, selected row highlights at low intensity, disabled input fills.

### Light Mode — Text & Content
- **Primary Text** (`#202124`): Near-black for body copy, headings, and the default text color. Not pure black — a warm, near-black reads more naturally on white.
- **Secondary Text** (`#3c4043`): Slightly lighter — used for subheadings, descriptive text, and secondary table columns.
- **Tertiary Text** (`#5f6368`): Muted gray for metadata, placeholders, helper text, and de-emphasized labels.
- **Quaternary Text** (`#80868b`): The most subdued — disabled states, ghosted icons, and timestamp-level information.
- **Inverse Text** (`#ffffff`): White text on colored backgrounds (primary buttons, banners, filled chips).

### Light Mode — Brand & Accent
- **Google Blue Primary** (`#1a73e8`): The single brand accent. Used on primary buttons, links, focus rings, active tab underlines, and selected state indicators.
- **Google Blue Hover** (`#1558b8`): Darker blue for button hover states.
- **Google Blue Pressed** (`#174ea6`): Deepest blue for pressed and visited link states.
- **Google Blue Tint** (`#e8f0fe`): Very light blue tint — used for selected row backgrounds, subtle info banners, and filter chip active fill.
- **Google Blue Focus Ring** (`rgba(26,115,232,0.24)`): Semi-transparent blue for keyboard focus rings around interactive elements.

### Light Mode — Status Colors
- **Success Green** (`#1e8e3e`): Positive states — deploy succeeded, quota healthy, sync complete, active subscription.
- **Success Green Tint** (`#e6f4ea`): Background for success banners and pass badges.
- **Danger Red** (`#d93025`): Errors, destructive actions, quota exceeded, failed deploys, unpaid invoices.
- **Danger Red Tint** (`#fce8e6`): Background for error banners and fail badges.
- **Warning Yellow** (`#f9ab00`): Pending states, approaching quotas, unsaved changes, billing alerts below critical.
- **Warning Yellow Tint** (`#fef7e0`): Background for warning banners.
- **Info Blue** (reuses `#1a73e8`): Informational banners, in-progress states, help callouts.
- **Info Blue Tint** (`#e8f0fe`): Background for info banners.

### Light Mode — Borders & Dividers
- **Border Standard** (`#dadce0`): The default `1px solid` border — cards, inputs, table cells, separators. The structural line of the entire system.
- **Border Subtle** (`#e8eaed`): Slightly lighter — used for internal table row dividers and low-emphasis separators.
- **Border Focus** (`#1a73e8`): Border color when an input or interactive element has keyboard focus.
- **Border Error** (`#d93025`): Input border when validation fails.

### Dark Mode — Background Surfaces
- **Dark Canvas** (`#202124`): The deepest surface — page background and default content area. Warm, near-black with a faint blue-gray undertone, matching Cloud Console dark theme.
- **Dark Elevated** (`#292a2d`): One step up — application shell, top app bar, side navigation.
- **Dark Card** (`#35363a`): Card and panel surfaces — the standard elevated surface for grouped content.
- **Dark Hover** (`#3c4043`): Hover state on menu items and rows.
- **Dark Pressed** (`#5f6368`): Pressed state — intentionally higher contrast for clear feedback.

### Dark Mode — Text & Content
- **Dark Primary Text** (`#e8eaed`): Near-white default text — avoids the harshness of pure `#ffffff` on dark backgrounds.
- **Dark Secondary Text** (`#bdc1c6`): Slightly dimmer — for secondary content and subheadings.
- **Dark Tertiary Text** (`#9aa0a6`): Muted — metadata, placeholders, captions.
- **Dark Quaternary Text** (`#80868b`): Most subdued — disabled text, faint labels.

### Dark Mode — Brand & Status (shifted lighter for contrast on dark)
- **Dark Google Blue** (`#8ab4f8`): Lighter blue tuned for dark surfaces — used for primary buttons, links, and focus rings. Never use `#1a73e8` as-is on dark mode surfaces — it lacks contrast.
- **Dark Blue Tint** (`rgba(138,180,248,0.12)`): Selected row and subtle info background.
- **Dark Success** (`#81c995`): Success states on dark mode.
- **Dark Danger** (`#f28b82`): Error states on dark mode.
- **Dark Warning** (`#fdd663`): Warning states on dark mode.

### Dark Mode — Borders
- **Dark Border Standard** (`#3c4043`): Default `1px` border on dark surfaces.
- **Dark Border Subtle** (`#5f6368`): Slightly lighter for internal dividers where more visibility is needed.

### Overlay & Scrim
- **Overlay Primary** (`rgba(0,0,0,0.6)`): Modal and dialog backdrop.
- **Overlay Subtle** (`rgba(0,0,0,0.32)`): Drawer and menu backdrop.

## 3. Typography Rules

### Font Family
- **Display & UI**: `"Google Sans"`, with fallbacks: `"Google Sans Display", Roboto, "Helvetica Neue", Arial, sans-serif`
- **Body & Dense UI**: `Roboto`, with fallbacks: `"Helvetica Neue", Arial, sans-serif`
- **Monospace**: `"Roboto Mono"`, with fallbacks: `"SF Mono", Menlo, Consolas, monospace`
- **Text-length companion** (for longer prose where Google Sans reads too display-y): `"Google Sans Text"`, falling back to `Roboto`

### Weight Usage Principles
- `400` (Regular) — 60% of all text: body, table cells, form inputs, descriptions
- `500` (Medium) — 30% of all text: buttons, navigation labels, section headers, emphasized body
- `700` (Bold) — rare, reserved for display headlines or very specific emphasis
- `300` (Light) — avoided except in hero display sizes
- Do not use weights outside this set — Google UI never uses `600` or variable custom weights

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Large | Google Sans | 57px (3.56rem) | 400 | 1.12 | -0.25px | Marketing hero, rarely used in product |
| Display Medium | Google Sans | 45px (2.81rem) | 400 | 1.16 | 0 | Landing page headlines |
| Display Small | Google Sans | 36px (2.25rem) | 400 | 1.22 | 0 | Settings page titles, large section headers |
| Headline Large | Google Sans | 32px (2.00rem) | 400 | 1.25 | 0 | Page titles in Cloud Console |
| Headline Medium | Google Sans | 28px (1.75rem) | 400 | 1.29 | 0 | Major section headers |
| Headline Small | Google Sans | 24px (1.50rem) | 400 | 1.33 | 0 | Card group titles, modal headers |
| Title Large | Google Sans | 22px (1.38rem) | 500 | 1.27 | 0 | Dashboard widget titles |
| Title Medium | Google Sans | 16px (1.00rem) | 500 | 1.50 | 0.15px | Card titles, list headers, dialog titles |
| Title Small | Google Sans | 14px (0.88rem) | 500 | 1.43 | 0.1px | Table column headers, sub-section labels |
| Body Large | Roboto | 16px (1.00rem) | 400 | 1.50 | 0.5px | Primary body in docs, readable long text |
| Body Medium | Roboto | 14px (0.88rem) | 400 | 1.43 | 0.25px | Default UI body — table cells, paragraphs, inputs |
| Body Small | Roboto | 12px (0.75rem) | 400 | 1.33 | 0.4px | Secondary info, helper text |
| Label Large | Roboto | 14px (0.88rem) | 500 | 1.43 | 0.1px | Button text, active navigation items |
| Label Medium | Roboto | 12px (0.75rem) | 500 | 1.33 | 0.5px | Chip text, small buttons |
| Label Small | Roboto | 11px (0.69rem) | 500 | 1.45 | 0.5px | Tooltip text, micro-labels |
| Overline | Roboto | 10px (0.63rem) | 500 | 1.60 | 1.5px uppercase | Category labels, table group headers |
| Code Inline | Roboto Mono | 13px (0.81rem) | 400 | 1.38 | 0 | Inline resource IDs, code snippets |
| Code Block | Roboto Mono | 14px (0.88rem) | 400 | 1.50 | 0 | Code blocks, log viewers, Cloud Shell |

### Typographic Principles
- **14px body is the workhorse** — most rows, cells, paragraphs, form fields use `Body Medium`. Resist the urge to go larger for "readability" in dense product contexts.
- **Uppercase only for overlines and very small labels** — never uppercase buttons (except rare CTA contexts) or headings.
- **Letter-spacing widens as size shrinks** — the inverse of display-first systems. Small text gets `+0.4px` to `+1.5px` of tracking for legibility.
- **Google Sans for anything with brand weight** (titles, product names), **Roboto for everything dense**. Never mix them at the same hierarchical level in the same component.
- **Tabular numerals for tables, billing, and time** — use `font-variant-numeric: tabular-nums` on numeric columns so digits align.

## 4. Component Stylings

### Buttons
Three primary variants, each with three sizes. Heights `32` / `36` / `40` (dense / default / touch). All buttons use `4px` border-radius — never pill-shaped in Cloud/Workspace contexts.

- **Primary (Filled)**:
  - Background `#1a73e8`, text `#ffffff`, no border
  - Hover: background `#1558b8`, subtle elevation shadow `0 1px 2px rgba(60,64,67,0.3)`
  - Pressed: background `#174ea6`, no shadow
  - Disabled: background `#e8eaed`, text `#80868b`
  - Padding: `0 24px`; height `36px`; font `Label Large` (`14px / 500`)
- **Secondary (Outlined)**:
  - Background transparent, text `#1a73e8`, border `1px solid #dadce0`
  - Hover: background `rgba(26,115,232,0.04)`, border `#1a73e8`
  - Pressed: background `rgba(26,115,232,0.12)`
- **Tertiary (Text)**:
  - Background transparent, text `#1a73e8`, no border
  - Hover: background `rgba(26,115,232,0.04)`
  - Used for low-emphasis actions inline with content
- **Destructive variant**: same structure but use red (`#d93025` / `#a50e0e`) — only for delete, remove, or irrevocable actions.
- **Icon button**: `40x40` target, icon `20px`, `50%` border-radius (circle), hover background `#f1f3f4`.

### Cards
- Background: `#ffffff` (light) / `#35363a` (dark)
- Border-radius: `8px`
- Border: `1px solid #dadce0` (light) — Google Cloud often uses **border-first** cards, not shadow-first
- Alternative: no border + elevation shadow `0 1px 2px rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)` (Material Elevation 1)
- Padding: `16px` (compact) / `24px` (default) / `32px` (spacious)
- Card header: `Title Medium` (`16px / 500`) + optional description in `Body Small` (`12px`)
- Never combine heavy border + heavy shadow — pick one depth signal per card

### Inputs (Text Field)
Two variants: **Outlined** (Cloud Console default) and **Filled** (Material classic, used in Workspace forms).

- **Outlined**:
  - Height: `40px` (default) / `48px` (touch)
  - Border: `1px solid #dadce0`, radius `4px`
  - Background: transparent
  - Label: floating — sits inside border, translates up to border top on focus/filled (`12px` size)
  - Focus: border `2px solid #1a73e8`, label color `#1a73e8`
  - Error: border `2px solid #d93025`, helper text `#d93025`
  - Padding: `0 12px`; helper text `Body Small` sits `4px` below field
- **Filled**:
  - Background: `#f1f3f4`, no visible border
  - Bottom border: `1px solid #80868b`, thickens to `2px solid #1a73e8` on focus
  - Label floats similarly
- **Sizes**: dense `32px`, default `40px`, touch `48px`

### Data Tables
Signature Google Cloud component. Designed for density, scanability, and extended reading.

- Row height: `48px` default, `40px` dense, `56px` comfortable
- Cell padding: `16px` horizontal, `0` vertical (row height does the spacing)
- Header: background `#ffffff` (flush with canvas) or `#f8f9fa` for visual weight, text `Title Small` (`14px / 500`) with color `#3c4043`, sticky on scroll
- Row border: `1px solid #e8eaed` between rows (bottom-border style, not full cell borders)
- Hover: row background `#f8f9fa`
- Selected: row background `#e8f0fe` + left edge `3px solid #1a73e8` (optional)
- No zebra striping — stripes are considered visually noisy in Cloud contexts
- Numeric columns: right-aligned, tabular numerals, monospaced acceptable for resource IDs
- Sort indicators: subtle arrow (`▲`/`▼`) next to active sort column header, color `#5f6368`
- Actions column: icon buttons at right edge, revealed on row hover

### Chips
- Height: `32px`
- Border-radius: `16px` (pill — the one component that earns rounded-full)
- Padding: `0 12px` (with icon `8px` left)
- Variants:
  - **Assist**: `1px solid #dadce0`, text `#3c4043`, background transparent
  - **Filter (inactive)**: same as Assist
  - **Filter (active)**: background `#e8f0fe`, text `#1a73e8`, icon check `#1a73e8`
  - **Input**: user-added chips with dismiss `×`, typically in Gmail recipient fields
  - **Suggestion**: `1px solid #dadce0`, hover `#f1f3f4`
- Font: `Label Medium` (`12px / 500`)

### Navigation — Left Rail
The signature Cloud Console / Workspace layout element.

- Width: `256px` expanded, `72px` mini rail (collapsed), drawer overlay below `960px`
- Background: `#ffffff` (light) / `#292a2d` (dark)
- Border-right: `1px solid #dadce0`
- Item height: `40px`, padding `0 24px`, radius `0 20px 20px 0` when active (signature right-rounded active state — this is one place Google uses a pill-like shape)
- Active item: background `#e8f0fe` (light) / `rgba(138,180,248,0.12)` (dark), text `#1967d2`, left icon colored to match
- Hover: background `#f1f3f4`
- Section headers: `Overline` style, color `#5f6368`, padding `24px 24px 8px`
- Icons: `20px`, left of label with `16px` gap

### Navigation — Top App Bar
- Height: `64px`
- Background: `#ffffff` (light) / `#292a2d` (dark)
- Border-bottom: `1px solid #dadce0`
- Contents: menu/logo on left, page title or breadcrumbs center, search + profile avatar + app switcher icon on right
- No box-shadow by default — border does the work; shadow appears only on scroll (`0 1px 2px rgba(60,64,67,0.15)`)

### Snackbar / Toast
- Background `#3c4043` (always dark, regardless of theme), text `#ffffff`
- Height: `48px` min, padding `8px 16px`
- Border-radius: `4px`
- Position: bottom-left (desktop) / bottom-center (mobile), `16px` offset from edge
- Optional action: `Label Large` text in Google Blue tint (`#8ab4f8`)
- Auto-dismiss: `5s` default

### Dialog / Modal
- Background `#ffffff` (light) / `#35363a` (dark)
- Border-radius: `8px`
- Max-width: `560px` (default), `720px` (wide), `90vw` (mobile)
- Elevation: `0 11px 15px rgba(0,0,0,0.2), 0 24px 38px rgba(0,0,0,0.14), 0 9px 46px rgba(0,0,0,0.12)` (Material Elevation 5)
- Padding: `24px`
- Title: `Headline Small` (`24px / 400` in Google Sans)
- Actions: right-aligned, Tertiary buttons first, Primary button last

### Banner / Inline Alert
- Height: auto, min `48px`
- Padding: `12px 16px`
- Border-left: `4px solid` in status color
- Background: status tint (e.g., `#fef7e0` for warning)
- Icon: `20px` status-colored icon on left
- Text: `Body Medium`, color `#202124`
- Used for page-level alerts — billing, deprecation, quota warnings

### Tooltip
- Background: `#3c4043` (always dark)
- Text: `#ffffff`, `Label Small` (`11px / 500`)
- Padding: `4px 8px`
- Border-radius: `4px`
- Max-width: `200px`
- Appears `500ms` after hover

### Progress Indicators
- **Linear**: `4px` height, track `#e8eaed`, fill `#1a73e8`. Determinate or indeterminate shimmer.
- **Circular**: `24px` (small), `40px` (medium), `56px` (large), stroke `4px`, color `#1a73e8`.

## 5. Layout Principles

### Grid System
- **12-column grid** with `24px` gutter and `24px` minimum margin
- Standard content max-width: `1280px` centered (Cloud Console docs), or full-bleed for dashboards
- Workspace document editors (Docs, Sheets) use content widths up to `1200px` with generous margins

### Spacing Scale
Built on a strict **8px base unit** with `4px` half-step for fine control:

```
4px   — icon-to-label gap, tight internal spacing
8px   — default component internal padding step
12px  — input padding, compact gaps
16px  — card padding (compact), section internal gap
24px  — card padding (default), section separation, grid gutter
32px  — card padding (spacious), major section separation
48px  — page section separation
64px  — hero / top-level area separation
```

Do not use values outside this scale (no `10px`, `14px`, `22px`, etc. for spacing — typography has its own scale).

### Page Shell Pattern
The canonical Cloud Console / Workspace layout:

```
┌─────────────────────────────────────────────────────┐
│ Top App Bar (64px)                                  │
├─────────┬───────────────────────────────────────────┤
│         │  Breadcrumbs (optional, 40px)             │
│  Left   ├───────────────────────────────────────────┤
│  Nav    │                                           │
│  Rail   │  Page Title (Headline Large)              │
│  (256px)│  Action bar (buttons, filters, search)    │
│         │                                           │
│         │  Content area (24–32px padding)           │
│         │  - Cards, tables, forms                   │
│         │                                           │
└─────────┴───────────────────────────────────────────┘
```

### Density Modes
Cloud Console and Workspace admin interfaces offer three density modes users can toggle:
- **Comfortable**: `56px` rows, `24px` padding — default for reading
- **Standard**: `48px` rows, `16px` padding — default for most users
- **Compact**: `40px` rows, `12px` padding — for power users scanning large lists

Design for Standard by default; expose density toggle only in genuinely data-heavy views.

### Content Hierarchy
- **Page title** → **Section headers** → **Card/Table titles** → **Row/Cell content**
- Use whitespace, not boxes-inside-boxes, to separate sections
- Maximum two levels of nesting for cards (a card containing cards is almost always wrong)

## 6. Depth & Elevation

Google Cloud UI is **flatness-forward**. Material elevation exists but is used sparingly and always in service of hierarchy, never for decoration.

### Elevation Levels (Light Mode)

| Level | Shadow | Usage |
|-------|--------|-------|
| 0 | none | Default — flat surfaces, resting state |
| 1 | `0 1px 2px rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)` | Resting cards, raised buttons on hover |
| 2 | `0 1px 2px rgba(60,64,67,0.3), 0 2px 6px 2px rgba(60,64,67,0.15)` | Hover on cards, dropdowns, menus |
| 3 | `0 4px 8px 3px rgba(60,64,67,0.15), 0 1px 3px rgba(60,64,67,0.3)` | Navigation drawer, floating action button |
| 4 | `0 6px 10px 4px rgba(60,64,67,0.15), 0 2px 3px rgba(60,64,67,0.3)` | Modal sheets on mobile |
| 5 | `0 8px 12px 6px rgba(60,64,67,0.15), 0 4px 4px rgba(60,64,67,0.3)` | Dialogs, menus in focus |

### Elevation in Dark Mode
Do **not** simply invert shadows. In dark mode, use a **lighter surface color** to indicate elevation instead:
- Level 0: `#202124`
- Level 1: `#292a2d`
- Level 2: `#35363a`
- Level 3: `#3c4043`
- Level 4: `#45464a`
- Level 5: `#505156`

Optionally add a very subtle shadow (`0 1px 2px rgba(0,0,0,0.3)`) at Level 3+ — but color shift is the primary signal.

### When to use each
- **Level 0 (flat)**: 70% of all surfaces. Tables, forms, embedded cards.
- **Level 1**: Resting state of isolated cards, especially when separated from other content.
- **Level 2–3**: Interactive feedback on hover for cards and menus.
- **Level 4–5**: Only for overlays — modals, dialogs, drawers.

Never stack elevations decoratively. A card inside a card should flatten one of them.

## 7. Do's and Don'ts

### Do's
- **DO** use Google Blue (`#1a73e8`) as the only chromatic interactive color — links, primary buttons, active states, focus rings.
- **DO** keep the spacing scale locked to the 8px base (with 4px half-step). Never use `10px`, `14px`, `22px`, etc.
- **DO** use `4px` radius for buttons and inputs, `8px` for cards, `pill` only for chips and avatars.
- **DO** use Google Sans for titles and display text; Roboto for dense body and UI text.
- **DO** reach for borders before shadows to separate content. Google Cloud is border-first.
- **DO** right-align numeric columns in tables and use tabular numerals.
- **DO** use status colors (green / red / yellow / blue) only with semantic meaning — never decoratively.
- **DO** offer a dark mode that shifts surfaces and accents (`#8ab4f8` instead of `#1a73e8`), not just inverts colors.
- **DO** keep page titles under 60 characters and use sentence case, never title case or ALL CAPS.
- **DO** use `Body Medium` (14px Roboto) as the default text size across product UI.

### Don'ts
- **DON'T** use gradients for backgrounds, buttons, or cards. Google Cloud is a flat design system. The one exception: Gemini / AI branding may use blue-to-purple gradients, but this is a separate visual mode.
- **DON'T** use the expressive, playful Material You style (large pill buttons, blob shapes, dynamic color theming). That language belongs to consumer Android, not enterprise Google.
- **DON'T** apply rounded-full (9999px) to buttons, inputs, or cards. Only chips, avatars, and the active state of left nav items use pill shapes.
- **DON'T** use saturated non-brand colors (pink, teal, orange) for decoration. If you reach for a color, ask what semantic meaning it carries.
- **DON'T** use heavy shadows — elevation `3+` is reserved for overlays only.
- **DON'T** uppercase button labels or headings. Use sentence case.
- **DON'T** mix Google Sans and Roboto at the same hierarchical level in the same component.
- **DON'T** use zebra striping in tables — it fights the hairline divider system.
- **DON'T** use display sizes (`48px+`) in product UI. Display type belongs to marketing pages.
- **DON'T** combine thick borders (`2px+`) with elevation shadows on the same element. Pick one depth cue.
- **DON'T** use italic body text for emphasis — use `500` weight instead.

## 8. Responsive Behavior

### Breakpoints

| Name | Range | Behavior |
|------|-------|----------|
| Mobile | `< 600px` | Single column, left rail becomes drawer overlay |
| Tablet | `600–960px` | Two columns max, left rail collapses to mini rail (`72px`) or drawer |
| Small Desktop | `960–1280px` | Full left rail (`256px`) visible, content flows in 8-col grid |
| Desktop | `1280–1920px` | Default target — 12-col grid, full nav, content up to `1280px` centered or full-bleed dashboards |
| Large Desktop | `1920px+` | Content caps at `1600px` for readability; dashboards may go full-bleed |

### Navigation Adaptation
- **Desktop (`≥1280px`)**: Persistent `256px` expanded left rail
- **Tablet (`960–1280px`)**: Mini rail (`72px`) with icon-only items, labels on hover tooltip
- **Mobile (`<960px`)**: Drawer overlay triggered by hamburger icon in top bar; scrim `rgba(0,0,0,0.32)` behind drawer

### Component Adaptation
- **Data tables**: On mobile, either allow horizontal scroll with sticky first column, or transform rows into stacked cards showing only the most important fields (2–4 fields per card with disclosure for the rest).
- **Multi-column forms**: Collapse to single column below `960px`.
- **Dashboards**: 4-column widget grids become 2-column at tablet, 1-column on mobile. Preserve widget order by priority.
- **Dialogs**: Full-width (minus `16px` margins) on mobile, `560px` max-width on desktop.
- **Buttons**: Touch targets expand to `48px` minimum height on mobile regardless of density setting.

### Typography Adaptation
Scale down display and headline sizes one step on mobile:
- Display Large `57px` → `45px`
- Headline Large `32px` → `28px`
- Headline Medium `28px` → `24px`
- Body sizes stay constant across breakpoints — do not shrink body text.

### Touch Targets
All interactive elements should hit `48x48px` minimum on touch devices, even if the visual element is smaller (use invisible padding to extend the tap target).

## 9. Agent Prompt Guide

When instructing an AI coding agent to build UI matching this design system, use prompts like these:

### For Dashboards / Admin Consoles
> Build a [feature] dashboard in the Google Cloud Console style. Use the standard page shell: `64px` top app bar, `256px` persistent left navigation rail with active items highlighted using `#e8f0fe` background and right-rounded pill shape, and a content area with `24px` padding. Page title in Google Sans `32px / 400`, followed by an action bar with a primary Google Blue (`#1a73e8`) button, a secondary outlined button with `#dadce0` border, and a search input. Main content: a `1px solid #dadce0` bordered card containing a data table with `48px` rows, sticky header in Title Small (`14px / 500`), hairline row dividers, no zebra striping, and right-aligned numeric columns using tabular numerals. Typography: Google Sans for titles, Roboto `14px / 400` for all body and table cell text. Keep the entire design flat — elevation `0` throughout, with elevation `1` only on hover.

### For Forms & Settings Pages
> Build a settings page in the Google Workspace admin style. Canvas `#ffffff`, max content width `960px`. Use outlined text fields with floating labels, `40px` height, `4px` radius, `1px solid #dadce0` border that thickens to `2px solid #1a73e8` on focus. Group related fields into bordered cards with `24px` padding and `8px` radius. Section headers in Google Sans Title Medium (`16px / 500`). Primary "Save" button filled Google Blue `#1a73e8` at the bottom right, secondary "Cancel" button as Text variant to its left. Helper text `12px` Roboto in `#5f6368` below each input. All spacing on the 8px grid.

### For Data-Heavy Tables
> Build a billing or resource list view in the Google Cloud Console style. Full-width table in a card with hairline border. Sticky header row, `48px` body rows, `16px` horizontal cell padding. Columns: checkbox, primary identifier (left-aligned, `Body Medium` in `#202124`), resource type (chip component, `32px` height, `16px` radius, `1px solid #dadce0`), status chip (filter-active style with status color tint background), cost (right-aligned, tabular numerals in Roboto Mono `13px`), actions (three-dot icon button, revealed on row hover). Hover: row background `#f8f9fa`. Selected rows: background `#e8f0fe` + `3px solid #1a73e8` left border. No zebra striping. Include density toggle in the table header area.

### For Dark Mode Variants
> Render this interface in Google Cloud Console dark theme. Surfaces: page `#202124`, app shell `#292a2d`, cards `#35363a`. Text: primary `#e8eaed`, secondary `#bdc1c6`, tertiary `#9aa0a6`. Accent blue shifts from `#1a73e8` to `#8ab4f8`. Status colors shift lighter: success `#81c995`, danger `#f28b82`, warning `#fdd663`. Borders remain hairline but use `#3c4043`. Do not invert shadows — use lighter surface colors to indicate elevation instead.

### For Marketing / Landing Pages (Google Cloud product pages)
> Build a Google Cloud product landing page. Hero: Google Sans Display Medium (`45px / 400`) headline in `#202124`, Roboto Body Large (`16px / 400`) subhead in `#3c4043`, primary filled Google Blue CTA button. Below: a 3-column feature grid of bordered cards (`1px solid #dadce0`, `8px` radius, `24px` padding), each with a `24px` Material icon in `#1a73e8`, Title Medium header, and Body Medium description. Canvas white, shell gray `#f8f9fa` section backgrounds. No gradients, no decorative illustrations — use sharp geometric screenshots and diagrams.

### For Workspace App Shells (Gmail, Drive, Calendar)
> Build a Gmail-style or Drive-style Workspace app shell. Top app bar `64px` with product logo + search (pill-shaped search input with `#f1f3f4` background, `48px` height, rounded-full), app switcher icon, account avatar on right. Left rail `256px` with a prominent "Compose" or "New" button (filled Google Blue, `pill shape — rare exception for this CTA specifically`, `48px` height). Content: list view with `48px` rows, hover background `#f1f3f4`, unread indicator as a left-edge color bar. Typography: Google Sans for app title and section labels, Roboto Body Medium (`14px / 400`) for row content.

---

### Principles to preserve across all prompts
1. **Flatness first** — use elevation sparingly
2. **Border before shadow** — structure with hairline `#dadce0` borders
3. **Single chromatic accent** — Google Blue is the only decorative color; status colors are semantic only
4. **8px spacing grid** — no off-grid values
5. **Sentence case always** — never uppercase or title case for UI text
6. **Google Sans for titles, Roboto for body** — do not mix at the same level
7. **Dense but scannable** — 14px body, 48px rows, generous whitespace between sections

---

Contributed by Nurlykhan Kalzhanov ([@nurkal022](https://github.com/nurkal022))
