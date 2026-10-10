---
name: awesome-design-md
description: Access 74+ authentic brand design systems (Apple, Linear, Stripe, Vercel, Supabase, etc.) for UI slicing, component generation, and styling. Trigger on /design-md [brand], design slicing requests, or brand styling references.
---

# Awesome Design MD — UI Design System & Slicing Skill

Transform 74+ real-world brand design systems into active references for frontend UI slicing, component generation, and styling.

When activated, agents load authentic tokens (palette, typography, surfaces, hairlines, corner radii, and component rules) directly from `design-md/<brand-id>/DESIGN.md` to ensure generated UI faithfully matches the chosen brand identity.

---

## Slash Command Trigger: `/design-md <brand>`

Users can invoke design systems directly via slash command or natural language:
- `/design-md apple` — Load Apple museum-gallery design guide for slicing.
- `/design-md linear` — Load Linear dark craft aesthetic for UI components.
- `/design-md stripe` — Load Stripe high-trust FinTech gradient & tabular aesthetic.
- `/design-md <brand> <prompt>` — E.g., `/design-md apple tolong buatkan navbar dan hero section`.
- `/design-md` (without brand) — Browse categories or search by vibe.

---

## Agent Execution Workflow

```
User: /design-md <brand> [task]
  │
  ▼
1. RESOLVE BRAND ────► Match ID, name, or alias (linear -> linear.app)
  │
  ▼
2. LOAD SPEC ────────► Read design-md/<brand>/DESIGN.md or run design-cli slice
  │
  ▼
3. EXTRACT TOKENS ───► Palette, Typography, Surfaces, Radii, Components
  │
  ▼
4. SLICE UI ─────────► Implement HTML/CSS, React, Tailwind, Vue with exact tokens
  │
  ▼
5. PERSIST (Opt.) ───► Copy spec to ./DESIGN.md if establishing project standard
```

### Step 1: Brand Resolution

Resolve the requested brand from user arguments. The skill supports exact IDs and common aliases:

| User Input | Resolved Brand ID | Aesthetic / Category |
| :--- | :--- | :--- |
| `apple` | `apple` | Museum gallery, parchment/white canvas, SF Pro, Action Blue `#0066cc`, pill buttons |
| `linear`, `linear-app` | `linear.app` | Near-black `#010102` canvas, charcoal surfaces, `#5e6ad2` lavender accent, tight 6-8px radii |
| `stripe` | `stripe` | FinTech high-trust, atmospheric gradient meshes, tabular figures, pill radii |
| `vercel` | `vercel` | High-contrast monochrome, Geist typography, geometric minimalism |
| `supabase` | `supabase` | Emerald green `#3ecf8e` accent, dark slate surfaces, developer documentation craft |
| `figma` | `figma` | Vibrant accents, floating toolbars, creative canvas |
| `mistral` | `mistral.ai` | Warm retro terminal typography, pixel/editorial accents |
| `dell` | `dell-1996` | Retro beveled 3D borders, 90s gray `#c0c0c0`, classic web nostalgia |
| `nintendo` | `nintendo-2001` | Translucent GameCube plastics, indigo accents, tactile buttons |

If the brand query is ambiguous or unknown:
1. Search catalog: `node scripts/design-cli.cjs search "<query>"`
2. Suggest 2-4 matching brands across categories (see Brand Directory below).

### Step 2: Load Design Specification

Read the brand's design system file:
- Primary file path: `design-md/<brand-id>/DESIGN.md`
- Or run bundled CLI for an instant summary:
  ```bash
  node scripts/design-cli.cjs slice <brand-id>
  ```
  *(Add `--json` for raw machine-readable JSON)*

### Step 3: Extract Key Visual Tokens

From `design-md/<brand-id>/DESIGN.md`, extract:
1. **Canvas & Surfaces**:
   - `canvas`: Page root background (e.g., `#ffffff` for Apple, `#010102` for Linear).
   - `surface-1..4`: Card, modal, panel background layers.
2. **Interactive Accents**:
   - `primary`: Signature CTA and brand accent color.
   - `primary-hover`, `primary-focus`: Interactive state colors.
3. **Borders & Dividers**:
   - `hairline`: 1px border color (e.g., `#e0e0e0` for Apple, `#23252a` for Linear).
4. **Typography Stack**:
   - Display headlines: font family, font size, line-height, letter-spacing (often negative tracking).
   - Body copy: font family, line-height (1.4–1.6), legible sizing.
5. **Corner Radii & Elevation**:
   - `rounded`: `pill` (9999px) vs subtle `sm`/`md` (6px–8px) vs sharp `none` (0px).
   - Shadows: minimal/none on chrome, soft atmospheric drop on product tiles.

### Step 4: UI Slicing Rules & Implementation

When writing frontend code (HTML/CSS, React, Tailwind, Vue, Svelte) adhering to the chosen brand:

1. **Root Canvas Depth**:
   - Apply the brand's exact canvas color to the body/root container. Never use default browser `#ffffff` or generic Tailwind `bg-gray-900` unless matching the token.
2. **Layered Surface Hierarchy**:
   - Cards and panels must use designated surface tokens (`surface-1`, `surface-2`) bordered by the 1px `hairline` token. Avoid heavy blurry drop-shadows unless specified by the brand.
3. **Typographic Discipline**:
   - Use the brand's specified font stack fallbacks.
   - For display headlines, apply the specified negative letter-spacing (tracking) to prevent loose, amateur typography.
   - For monetary/financial data (Stripe, Wise, Coinbase), use tabular numeral figures (`font-variant-numeric: tabular-nums`).
4. **Accent Restraint**:
   - Use the primary accent color strictly for key CTAs, active indicators, and focus rings. High-craft interfaces never use the accent color as decorative background filler.
5. **Component Radii Accuracy**:
   - Apple / Stripe: Pill or generous squircle buttons (`rounded-full` or `rounded-xl`).
   - Linear / Supabase / Vercel: Strict 6px–8px subtle radii (`rounded-md`).
   - Retro / Brutalist: 0px or beveled 2px border-radius.

### Step 5: Applying to Project Workspace

If the user requests establishing the brand as the permanent project design standard:
```bash
node scripts/design-cli.cjs apply <brand-id> --dest ./DESIGN.md
```
*Effect:* Any subsequent AI coding session, Claude Code, Gemini CLI, or developer will read `./DESIGN.md` in the project root to stay visually consistent.

---

## Brand Directory by Category (74 Brands)

Detailed catalog is indexed in `references/catalog.json` and `references/categories.md`:

| Category | Representative Brands | Key Visual Style |
| :--- | :--- | :--- |
| **Developer Tools & Dark Craft** | `linear.app`, `cursor`, `warp`, `raycast`, `supabase`, `vercel`, `resend`, `hashicorp` | Near-black canvas, charcoal panels, hairline borders, single chromatic accent, keyboard craft |
| **AI & Machine Learning** | `claude`, `cohere`, `mistral.ai`, `ollama`, `replicate`, `runwayml`, `lovable`, `together.ai` | Warm serifs (`claude`), glowing gradients, terminal motifs, high contrast |
| **FinTech & High-Trust** | `stripe`, `revolut`, `wise`, `coinbase`, `binance`, `kraken`, `mastercard` | Atmospheric gradient meshes, deep navy ink, tabular numerals, pill radii |
| **Clean, Minimal & Editorial** | `apple`, `notion`, `mintlify`, `cal`, `superhuman`, `clay`, `airtable`, `intercom` | Generous whitespace, museum gallery layout, typography-first, parchment/white canvas |
| **Design & Creative Tools** | `figma`, `framer`, `webflow`, `miro`, `slack`, `posthog`, `pinterest`, `shopify` | Vibrant accents, floating toolbars, sticky-note aesthetics, playful micro-interactions |
| **Luxury & Automotive** | `ferrari`, `bugatti`, `lamborghini`, `bmw`, `bmw-m`, `tesla`, `spacex` | Rosso Corsa, racing liveries, extreme contrast, carbon textures, zero chrome |
| **Tech Giants & Lifestyle** | `airbnb`, `meta`, `ibm`, `nike`, `nvidia`, `spotify`, `starbucks`, `uber`, `playstation` | Scaled design systems (Carbon, Rausch, Siren green), tactile audio, kinetic type |
| **Editorial & Media** | `theverge`, `wired` | Duotone cyberpunk accents, dense editorial headline grids, bold serif & sans |
| **Retro & Nostalgia** | `dell-1996`, `nintendo-2001` | Beveled 3D borders, GameCube indigo plastics, 90s/Y2K aesthetic |

---

## Bundled CLI Tool Reference

The skill includes `scripts/design-cli.cjs` (zero dependencies, Node >= 18):

```bash
# Generate AI-ready UI slicing reference & tokens for a brand
node scripts/design-cli.cjs slice apple
node scripts/design-cli.cjs slice linear
node scripts/design-cli.cjs slice stripe --json

# Search & browse brands
node scripts/design-cli.cjs list
node scripts/design-cli.cjs list --category "FinTech"
node scripts/design-cli.cjs list --dark
node scripts/design-cli.cjs search "minimal"

# Copy DESIGN.md to target project root
node scripts/design-cli.cjs apply apple --dest ./DESIGN.md

# Export CSS variables or Tailwind snippet
node scripts/design-cli.cjs export-css vercel --dest ./tokens.css
node scripts/design-cli.cjs export-tailwind linear.app
```
