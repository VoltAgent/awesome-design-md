---
version: alpha
name: Nightingale-design-analysis
description: A clinical operations admin tool for Integral Health anchored on a cool near-white dots canvas, a glass-morphism sidebar, and a single sky-blue primary that covers every interactive signal — buttons, active nav pills, focus rings, and default badges. Cards sit on pure white above the tinted canvas; hierarchy comes from tone contrast, not shadow. Dark mode inverts to deep navy. System-ui type throughout at compact clinical sizes.

colors:
  primary: "#09a8de"
  primary-active: "#0892be"
  primary-foreground: "#ffffff"
  background: "#f7f9fc"
  foreground: "#141b22"
  card: "#ffffff"
  card-foreground: "#141b22"
  secondary: "#e8ecf1"
  secondary-foreground: "#2a3340"
  muted: "#e8ecf1"
  muted-foreground: "#6c7589"
  border: "#dde2e8"
  ring: "#09a8de"
  destructive: "#d93030"
  destructive-foreground: "#ffffff"
  success: "#0db371"
  success-foreground: "#ffffff"
  warning: "#f59e0b"
  warning-foreground: "#ffffff"
  dark-background: "#080c12"
  dark-foreground: "#e8edf4"
  dark-card: "#0e1117"
  dark-primary: "#e2e8ef"
  dark-primary-foreground: "#0e1318"
  dark-muted: "#171d26"
  dark-muted-foreground: "#636e80"
  dark-border: "#1c2430"

typography:
  heading-lg:
    fontFamily: "system-ui, -apple-system, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.3px
  heading-md:
    fontFamily: "system-ui, -apple-system, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: -0.2px
  heading-sm:
    fontFamily: "system-ui, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.4
  label-lg:
    fontFamily: "system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.4
  label-md:
    fontFamily: "system-ui, -apple-system, sans-serif"
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.4
  body-md:
    fontFamily: "system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui, -apple-system, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.45
  button:
    fontFamily: "system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
  nav-item:
    fontFamily: "system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
  nav-section:
    fontFamily: "system-ui, -apple-system, sans-serif"
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.1em
  caption:
    fontFamily: "system-ui, -apple-system, sans-serif"
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.06em

rounded:
  sm: 6px
  md: 8px
  lg: 10px
  xl: 12px
  full: 9999px

spacing:
  xxs: 4px
  xs: 6px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  page: 32px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    height: 36px
    padding: "8px 16px"
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.primary-foreground}"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.secondary-foreground}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    height: 36px
    padding: "8px 16px"
  button-outline:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    border: "1px solid {colors.border}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    height: 36px
    padding: "8px 16px"
  button-destructive:
    backgroundColor: "{colors.destructive}"
    textColor: "{colors.destructive-foreground}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    height: 36px
    padding: "8px 16px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.muted-foreground}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    height: 36px
    padding: "8px 16px"
  button-sm:
    height: 32px
    padding: "6px 12px"
    rounded: "{rounded.md}"
  button-icon:
    size: 36px
    rounded: "{rounded.md}"
  sidebar:
    backgroundColor: "rgba({colors.card}, 0.80) + backdrop-blur-2xl"
    border: "1px solid {colors.border} (right edge)"
    widthExpanded: 260px
    widthCollapsed: 72px
    transition: "300ms ease-out"
  nav-item-active:
    backgroundColor: "rgba({colors.primary}, 0.90)"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.lg}"
    padding: "10px 12px"
    glow: "0 0 10px -3px rgba({colors.primary}, 0.30)"
    leftBar: "3px × 20px rounded-right in {colors.primary-foreground}"
  nav-item-default:
    backgroundColor: "transparent"
    textColor: "{colors.muted-foreground}"
    rounded: "{rounded.lg}"
    padding: "10px 12px"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.card-foreground}"
    rounded: "{rounded.xl}"
    border: "1px solid {colors.border}"
    shadow: "0 1px 2px rgba(0,0,0,0.05)"
    padding: "{spacing.xl}"
  badge-default:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.full}"
    padding: "2px 10px"
    typography: "{typography.label-md}"
  badge-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.secondary-foreground}"
    rounded: "{rounded.full}"
    padding: "2px 10px"
    typography: "{typography.label-md}"
  badge-destructive:
    backgroundColor: "{colors.destructive}"
    textColor: "{colors.destructive-foreground}"
    rounded: "{rounded.full}"
    padding: "2px 10px"
    typography: "{typography.label-md}"
  badge-outline:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    border: "1px solid {colors.border}"
    rounded: "{rounded.full}"
    padding: "2px 10px"
    typography: "{typography.label-md}"
  text-input:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    border: "1px solid {colors.border}"
    rounded: "{rounded.md}"
    height: 36px
    padding: "8px 12px"
  text-input-focus:
    border: "2px solid {colors.ring}"
    ring: "3px {colors.ring} at 50% opacity"
  dialog:
    backgroundColor: "{colors.card}"
    rounded: "{rounded.xl}"
    border: "1px solid {colors.border}"
    shadow: "0 16px 48px rgba(0,0,0,0.12)"
    maxWidth: 384px
    padding: "{spacing.xl}"
  skeleton:
    backgroundColor: "{colors.muted}"
    animation: "skeleton-shimmer 1.8s ease-in-out infinite"
  avatar:
    size: 32px
    rounded: "{rounded.full}"
    ring: "2px at 20% {colors.primary} opacity"
    fallbackBackground: "10% {colors.primary} opacity"
    fallbackTextColor: "{colors.primary}"
---

## Overview

Nightingale opens on a `{colors.background}` (#f7f9fc) canvas tiled with a 20px radial dot grid. The fixed left sidebar — glass-strong at 260px, collapsible to a 72px icon rail — carries the Integral Health mark, "Mission Control" subtitle, and a section-grouped nav tree. Active nav items snap to a **sky-blue filled pill** with a white 3px left-edge bar and `glow-sm` — the only glow in standard UI. Content lives in white `{component.card}` containers that pop above the tinted canvas through tone contrast alone.

**Key Characteristics:**
- `{colors.primary}` (sky blue) is the single active-state signal — buttons, nav pills, focus rings, badges. No competing accent.
- Cards are always `{colors.card}` (#ffffff) on `{colors.background}` (#f7f9fc). Hierarchy through tone, not shadow.
- Sidebar is the only surface using glassmorphism (`glass-strong`: 80% card + `backdrop-blur-2xl`).
- All buttons are `{rounded.md}` (8px) — `{rounded.full}` is for badges and avatars only.
- Desktop-only. A `MobileGate` blocks sub-desktop viewports.
- System-ui throughout; no custom font.

## Colors

### Primary
- **Primary** (`{colors.primary}` — #09a8de): Sky blue. Every interactive signal — primary CTA, active nav, focus ring, default badge.
- **Primary Active** (`{colors.primary-active}` — #0892be): Press state on primary buttons.
- **Primary Foreground** (`{colors.primary-foreground}` — #ffffff): Text on primary surfaces.

### Surface
- **Background** (`{colors.background}` — #f7f9fc): Page floor, always with `bg-dots` overlay. Never plain white.
- **Card** (`{colors.card}` — #ffffff): All cards, dialogs, popovers. The only true white in the light palette.
- **Secondary / Muted** (`{colors.secondary}` — #e8ecf1): Secondary buttons, skeleton fills, input surfaces, theme-picker track.
- **Border** (`{colors.border}` — #dde2e8): Universal 1px hairline — card outlines, row dividers, input borders.

### Text
- **Foreground** (`{colors.foreground}` — #141b22): Headings, table content, all primary labels.
- **Muted Foreground** (`{colors.muted-foreground}` — #6c7589): Resting nav items, captions, placeholders.
- **Secondary Foreground** (`{colors.secondary-foreground}` — #2a3340): Text on secondary fills.

### Semantic
- **Destructive** (`{colors.destructive}` — #d93030): Error badges, destructive button fill. Never decorative.
- **Success** (`{colors.success}` — #0db371): Enrolled / active status.
- **Warning** (`{colors.warning}` — #f59e0b): At-risk, pending-action states.

### Dark Mode
- **Dark Background** (`{colors.dark-background}` — #080c12): Deep navy canvas, same `bg-dots` overlay.
- **Dark Card** (`{colors.dark-card}` — #0e1117): Elevated card surface.
- **Dark Primary** (`{colors.dark-primary}` — #e2e8ef): Light blue-gray replaces sky blue on dark surfaces.
- **Dark Border** (`{colors.dark-border}` — #1c2430): Cool-navy hairline.
- **Dark Muted Foreground** (`{colors.dark-muted-foreground}` — #636e80): Nav item text in dark mode.

## Typography

### Font Family
**system-ui, -apple-system, sans-serif** — native system stack. San Francisco on macOS, Segoe UI on Windows. No custom font. Body runs at 14px (not 16px) for data-dense clinical tables.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.heading-lg}` | 24px | 600 | 1.3 | -0.3px | Page titles |
| `{typography.heading-md}` | 20px | 600 | 1.35 | -0.2px | Card titles, dialog headers |
| `{typography.heading-sm}` | 16px | 600 | 1.4 | — | Sub-section headings |
| `{typography.label-lg}` | 14px | 600 | 1.4 | — | Table column headers, form labels |
| `{typography.label-md}` | 13px | 600 | 1.4 | — | Badge text, status labels |
| `{typography.nav-item}` | 14px | 500 | 1.4 | — | Sidebar nav links |
| `{typography.button}` | 14px | 500 | 1.4 | — | Button labels |
| `{typography.body-md}` | 14px | 400 | 1.5 | — | Body text, table row content |
| `{typography.body-sm}` | 13px | 400 | 1.45 | — | Dense table cells |
| `{typography.nav-section}` | 11px | 600 | 1.2 | 0.1em | Sidebar section group labels (uppercase) |
| `{typography.caption}` | 11px | 600 | 1.2 | 0.06em | Micro-labels (uppercase) |

### Principles
Heading weight is always 600 — never 700 or 800. Emphasis comes from size, not weight. Nav section labels and captions are the only uppercase text in the product.

## Layout

### Spacing
- Base unit: 4px.
- Page padding: `{spacing.page}` (32px) all edges.
- Card internal padding: `{spacing.xl}` (24px).
- Nav section groups: `space-y-5` (20px) apart; items within a group: `space-y-1` (4px).

### Grid
- Sidebar expanded: 260px fixed. Content `margin-left: 260px`.
- Sidebar collapsed: 72px. Content `margin-left: 72px`.
- Transition: 300ms ease-out.
- Content width: uncapped.

### Background Pattern
`bg-dots`: 20px radial grid at 50% border opacity, always on `{colors.background}`. Part of the canvas identity — not optional.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 — Floor | `{colors.background}` + `bg-dots` | Page canvas |
| 1 — Card | `shadow-sm` + 1px `{colors.border}` | All content cards |
| 2 — Sidebar | `glass-strong`: 80% card + `backdrop-blur-2xl` | Fixed left nav |
| 3 — Active nav | `glow-sm`: 0 0 10px -3px `{colors.primary}` / 30% | Active nav item only |
| 4 — Popover / Dialog | `shadow-lg` + 1px `{colors.border}` | Dropdowns, dialogs |

Glassmorphism is sidebar-only. Glow is active nav-only. Everything else is flat + tone contrast.

## Shapes

### Border Radius

| Token | Value | Use |
|---|---|---|
| `{rounded.sm}` | 6px | Small icon buttons |
| `{rounded.md}` | 8px | Buttons, inputs |
| `{rounded.lg}` | 10px | Nav pills, tooltips |
| `{rounded.xl}` | 12px | Cards, dialogs |
| `{rounded.full}` | 9999px | Badges, avatars only |

No pill buttons. `{rounded.full}` is reserved for circular elements.

## Components

> No hover states documented.

**`sidebar`** — 260px glass-strong panel (72px collapsed). Top-to-bottom: logo + "Mission Control" + toggle → gradient divider → nav → gradient divider → user row. Collapsed: icon rail only, section labels replaced by thin dividers.

**`nav-item-active`** — `bg-primary/90` filled pill, white text, 3px left-edge bar, `glow-sm`. Active states: "Patients", "Office of Mental Health", "Caseload".

**`nav-item-default`** — Transparent, `{colors.muted-foreground}` text. Icon scales 110% on interaction.

**`button-primary`** — `{colors.primary}` fill, white text, 36px, `{rounded.md}`, 8×16px. One per surface. Press: `{colors.primary-active}`. Labels: "Save Changes", "Add Patient", "Export".

**`button-outline`** — `{colors.background}` + `{colors.border}` hairline. The Cancel pair to `button-primary`.

**`button-destructive`** — `{colors.destructive}` fill. Destructive dialogs only — never a page-level CTA. Label: "Sign Out".

**`button-secondary`** — `{colors.secondary}` fill. Filter actions, secondary affordances.

**`button-ghost`** — Transparent, `{colors.muted-foreground}`. Icon actions: sidebar toggle, close buttons.

**`button-sm`** — 32px height. Inside cards and table rows.

**`button-icon`** — 36×36px. Single-icon affordances.

**`card`** — `{colors.card}` (#ffffff), `{rounded.xl}`, 1px `{colors.border}`, `shadow-sm`, 24px padding. Always white — no tinted card surfaces.

**`badge-default`** — `{colors.primary}` fill, white, `{rounded.full}`. Labels: "Active", "Enrolled".

**`badge-secondary`** — `{colors.secondary}` fill. Labels: "Pending", "Waitlist".

**`badge-destructive`** — `{colors.destructive}` fill. Labels: "Discharged", "Inactive".

**`badge-outline`** — Transparent, 1px border. Reference tags, metadata.

**`text-input`** — `{colors.background}` fill, 1px `{colors.border}`, `{rounded.md}`, 36px height. Focus: 2px primary border + 3px ring.

**`dialog`** — `{colors.card}`, `{rounded.xl}`, `shadow-lg`, 384px max-width. Header: 40×40px semantic icon container + title + description. Footer: border-top + Cancel / Confirm row.

**`skeleton`** — `{colors.muted}` fill, `skeleton-shimmer` 1.8s loop.

**`avatar`** — 32px circle, 2px primary ring at 20% opacity, primary-tinted fallback initials.

## Do's and Don'ts

### Do
- Use `{colors.primary}` as the only interactive signal. One active-state color, no exceptions.
- Pair `{component.button-outline}` with `{component.button-primary}` in two-button rows.
- Keep all cards `{colors.card}` (#ffffff). Status goes in badges, not card tints.
- Always render `bg-dots` on page surfaces.
- Use `{component.button-sm}` (32px) inside cards and table rows.
- Keep nav section labels uppercase — the only sanctioned use of uppercase in the product.

### Don't
- Don't tint card backgrounds. Cards are always white.
- Don't use `{rounded.full}` on buttons. Pills are for badges and avatars only.
- Don't introduce weights above 600.
- Don't add a second accent color.
- Don't use semantic colors as decorative surfaces.
- Don't use `glow-md` or `glow-lg` in standard UI.
- Don't render page surfaces without `bg-dots`.

## Responsive Behavior

Desktop-only. `MobileGate` blocks all sub-desktop access. No responsive breakpoints defined.

The only layout adaptation is the sidebar collapse: 260px → 72px, user-controlled via toggle, 300ms ease-out transition.

## Iteration Guide

1. Reference tokens as `{token.key}` — no raw hex or px values in specs.
2. New components use `{rounded.md}` to `{rounded.xl}` only.
3. Status uses exactly four colors: primary, success, warning, destructive.
4. All page surfaces need `bg-dots`.
5. Dark mode is always in scope — every new color needs a `dark-*` pair.
6. Elevation beyond `shadow-sm` is `shadow-lg` for dialogs/popovers only.

## Known Gaps

- 11px type sizes not audited against WCAG 1.4.4.
- Animation timings not formalized as tokens.
- Recharts multi-series color palette undefined.
- Dark mode tokens not contrast-validated.
- `bg-grid`, `text-gradient`, `glow-accent` utilities unassigned — remove or formalize.
