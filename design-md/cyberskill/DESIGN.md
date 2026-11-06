---
name: "CyberSkill Design System"
version: "2.3.1"
generated: "2026-07-23"
generator: "scripts/generate-design-md.mjs (npm run build:design-md)"
sources:
  tokens: "tokens/tokens.dtcg.json"
  inventory: "_ds_manifest.json"
gate: "_audit/design-md-parity.html (window.__designmd)"
---

**Tiếng Việt:** [Đọc đặc tả đầy đủ](docs/vi/entrypoints/DESIGN.md) · **English**

# CyberSkill Design System — open spec

> GENERATED FILE — do not edit by hand. Regenerate with `npm run build:design-md` after any token change; the `design-md-parity` gate fails on drift. This is the single-file open-spec surface for design tools and agents that read a root `DESIGN.md` (e.g. Google Stitch); The base typed projection is `tokens/tokens.dtcg.json`; its hashed `tokens/declarations.json` companion preserves the remaining declarations and source conditions. Read both for the repository adapter; use canonical CSS for runtime cascade behavior. This document is a selected token/inventory guide, not a complete conditional-mode or native rendering contract.

> **Stitch / non-DC consumers:** do **not** treat `templates/**/*.dc.html` as source of truth — those files use the shipped `support.js` browser interpreter (tweaks, `__dcSetProps`); a separate host compiler is not required for browser preview. Generate static UI from this file + DTCG + `styles.css` / `.cs-*` / `templates/kitchen-sink.html` / `examples/static-hello/`. DC-capable authoring starts at `SKILL.md` and uses compiled ESM `dist/esm/_esm/react.mjs` by default, explicit raw JSX `_esm/react.mjs` for source authoring, or legacy `_esm/cs.mjs` / `_ds_bundle.js` (prefix resolve). Dual path: `docs/consuming.md`. Operator docs are published on the Storybook Docs sidebar at `design.cyberskill.world`.

## Brand & doctrine

- **Slogan:** *Turn Your Will Into Real — Hiện Thực Hoá Ý Chí*.
- **Immutable anchors:** Umber `#45210E` (primary brand) · Ochre `#F4BA17` (accent). Never remap; the composite focus indicator (text-primary contour + ochre halo) is a studio-wide accessibility signature.
- **Four axes:** Theme (light · dark · system) × Element (Ngũ Hành — Kim · Mộc · Thủy · Hỏa · Thổ, 15 element×variant packs) × Language (EN · VI) × Style (`data-cs-style` — sole pack **liquid-glass**; absent ≡ default).
- **Language scope:** Vietnamese-first; registered component strings require EN + VI pairs. Template language capabilities are declared per template, and consumer-provided content needs its own translation and review. Preserve diacritics; declared pairs do not certify translation quality or screen-reader pronunciation.
- **Text never sits on the mid-tone `-accent`:** use `-bright` or `-tint`, or pair a `-strong` fill with `--cs-accent-on-strong` for body text. `-accent` is for bars, borders, progress fills, and large non-text fills.
- **Accessibility floor:** APCA Lc ≥ 75 body text · ≥ 44px touch targets · focus rings never removed · honour `prefers-reduced-motion` / `prefers-contrast`.
- **Voice:** warm · direct · honest · respectful — all four at once, never "fun/playful/edgy".

### Visual theme, atmosphere & surface pacing

CyberSkill pairs warm architectural craft with optical precision: pages open on Warm Alabaster `--cs-color-surface-page` (`#FFFDF8` light / `#1a1108` dark), elevate content into crisp `--cs-color-surface-panel` (`.cs-card`) or warm `--cs-color-surface-raised` (`.cs-card--raised`), highlight spotlight tiers with `.cs-card--featured` (`--cs-accent-strong` / `--cs-accent` rim), and layer four optical Liquid Glass tiers (`.cs-surface-whisper`, `.cs-surface-light`, `.cs-surface-standard`, `.cs-surface-heavy`) plus `.cs-aurora` hero washes.

## Colors

Core semantic colours. Dark values are the `[data-theme="dark"]` overrides (the `system` theme mirrors them under `prefers-color-scheme: dark`).

| Token | Light | Dark |
|---|---|---|
| `--cs-color-brand-umber` | `#45210E` | — |
| `--cs-color-brand-ochre` | `#F4BA17` | — |
| `--cs-color-surface-page` | `#FFFDF8` | `#1a1108` |
| `--cs-color-surface-panel` | `#FFFFFF` | `#221710` |
| `--cs-color-surface-raised` | `#FBF4E9` | `#2b1e14` |
| `--cs-color-text-primary` | `#45210E` | `#f5ead9` |
| `--cs-color-text-inverse` | `#FFFFFF` | `#1a1108` |
| `--cs-color-text-accent` | `#6E3B0E` | `#FECD5D` |
| `--cs-color-text-muted` | `#3F2D21` | `#E9D6C2` |
| `--cs-color-semantic-success` | `#166534` | `#4ADE80` |
| `--cs-color-semantic-danger` | `#B42318` | `#FC9895` |
| `--cs-color-semantic-warning` | `#92400E` | `#FBBF24` |
| `--cs-color-semantic-info` | `#1D4ED8` | `#B5D4FD` |
| `--cs-color-semantic-success-fg` | `#FFFFFF` | `#1a1108` |
| `--cs-color-semantic-danger-fg` | `#FFFFFF` | `#1a1108` |
| `--cs-color-semantic-warning-fg` | `#FFFFFF` | `#1a1108` |
| `--cs-color-semantic-info-fg` | `#FFFFFF` | `#1a1108` |
| `--cs-color-accent-ochre` | `#F4BA17` | — |
| `--cs-color-border-default` | `#E7D9C6` | `#4a3a2c` |
| `--cs-color-link` | `#6E3B0E` | `#FECD5D` |
| `--cs-color-link-hover` | `#45210E` | `#f5ead9` |
| `--cs-color-semantic-success-text` | `#042D13` | `#68F798` |
| `--cs-color-semantic-danger-text` | `#4B0502` | `#FFD2CF` |
| `--cs-color-semantic-warning-text` | `#441801` | `#FFD887` |
| `--cs-color-semantic-info-text` | `#000A75` | `#C7DFFF` |

### Functional color roles

- **Brand & primary actions:** `--cs-color-brand-umber` (`#45210E`) and `--cs-color-brand-ochre` (`#F4BA17`) anchor identity; `--cs-component-button-primary-bg` and `--cs-component-button-primary-fg` drive primary CTAs across light and `[data-theme="dark"]`.
- **Surface hierarchy & borders:** alternate `--cs-color-surface-page`, `--cs-color-surface-panel`, and `--cs-color-surface-raised` to pace sections; frame containers with `--cs-color-border-default`, internal table/list rules with `var(--cs-color-border-subtle)`, and modal/drawer/tour backdrops with `var(--cs-color-surface-scrim)`.
- **Text & semantic status pairs:** use `--cs-color-text-primary`, `--cs-color-text-muted`, and `--cs-color-text-accent` for hierarchy (`APCA Lc >= 75` body floor); pair solid status fills (`--cs-color-semantic-success`, `--cs-color-semantic-danger`, `--cs-color-semantic-warning`, `--cs-color-semantic-info`) with `*-fg` tokens and tinted surfaces with `*-text` tokens.

### Accent roles (Ngũ Hành)

Default accent pack = Thổ (the studio's own element). All 15 element×variant packs and their APCA-derived dark packs live in `tokens/elements.css` and DTCG `$extensions["com.cyberskill"].overrides.elements` / `.elementsDark`.

| Token | Value |
|---|---|
| `--cs-accent` | `#F4BA17` |
| `--cs-accent-strong` | `#916D11` |
| `--cs-accent-bright` | `#F4BA17` |
| `--cs-accent-on` | `#45210E` |
| `--cs-accent-tint` | `#FBF4E9` |
| `--cs-accent-ink` | `#45210E` |
| `--cs-accent-glow` | `rgba(244, 186, 23, 0.48)` |
| `--cs-accent-grad-a` | `#F4BA17` |
| `--cs-accent-grad-b` | `#C4B78F` |
| `--cs-accent-on-strong` | `#FFFFFF` |

### Document palette

Shared ink / paper / rule colours for print-leaning instruments (`--cs-doc-*`). Prefer these over raw hex in VN legal and office templates.

| Token | Value |
|---|---|
| `--cs-doc-ink` | `#1A1614` |
| `--cs-doc-slate` | `#26323A` |
| `--cs-doc-fill` | `#FDE68A` |
| `--cs-doc-fill-ink` | `#1A1614` |

## Typography

Families ship self-hosted (Be Vietnam Pro · Space Grotesk · JetBrains Mono) with declared style/weight/subset faces. The bounded Vietnamese NFC/NFD repertoire is recorded in `fonts/subset-recipe.json`; it does not certify every Unicode sequence, shaping engine or native installation. `--cs-font-family-display` is the opt-in headline face; nothing points at it by default.

| Token | Value |
|---|---|
| `--cs-font-family-ui` | `'Be Vietnam Pro', ui-sans-serif, system-ui, sans-serif` |
| `--cs-font-family-display` | `'Space Grotesk', 'Be Vietnam Pro', ui-sans-serif, system-ui, sans-serif` |
| `--cs-font-family-mono` | `'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace` |
| `--cs-font-weight-regular` | `400` |
| `--cs-font-weight-medium` | `500` |
| `--cs-font-weight-semibold` | `600` |
| `--cs-font-weight-bold` | `700` |
| `--cs-font-weight-extrabold` | `800` |
| `--cs-font-lineHeight-body` | `var(--cs-font-line-height-body)` |
| `--cs-font-lineHeight-heading` | `var(--cs-font-line-height-heading)` |
| `--cs-font-lineHeight-tight` | `var(--cs-font-line-height-tight)` |
| `--cs-font-size-2xs` | `0.6875rem` |
| `--cs-font-size-xs` | `0.75rem` |
| `--cs-font-size-sm` | `0.875rem` |
| `--cs-font-size-base` | `1rem` |
| `--cs-font-size-md` | `1.125rem` |
| `--cs-font-size-lg` | `1.25rem` |
| `--cs-font-size-xl` | `1.5rem` |
| `--cs-font-size-2xl` | `1.875rem` |
| `--cs-font-size-3xl` | `2.25rem` |
| `--cs-font-size-4xl` | `3rem` |
| `--cs-font-size-5xl` | `3.75rem` |
| `--cs-font-line-height-body` | `1.5` |
| `--cs-font-line-height-heading` | `1.35` |
| `--cs-font-line-height-tight` | `1.15` |

### Type roles & tracking

Semantic aliases into the ramp — write intent, not magic numbers. `Resolves to` follows the alias chain.

| Token | CSS form | Resolves to |
|---|---|---|
| `--cs-text-display` | `var(--cs-font-size-5xl)` | `3.75rem` |
| `--cs-text-h1` | `var(--cs-font-size-3xl)` | `2.25rem` |
| `--cs-text-h2` | `var(--cs-font-size-2xl)` | `1.875rem` |
| `--cs-text-h3` | `var(--cs-font-size-xl)` | `1.5rem` |
| `--cs-text-h4` | `var(--cs-font-size-lg)` | `1.25rem` |
| `--cs-text-body-lg` | `var(--cs-font-size-md)` | `1.125rem` |
| `--cs-text-body` | `var(--cs-font-size-base)` | `1rem` |
| `--cs-text-secondary` | `var(--cs-font-size-sm)` | `0.875rem` |
| `--cs-text-micro` | `var(--cs-font-size-2xs)` | `0.6875rem` |
| `--cs-text-caption` | `var(--cs-font-size-xs)` | `0.75rem` |
| `--cs-text-eyebrow` | `var(--cs-font-size-xs)` | `0.75rem` |

| Token | Value |
|---|---|
| `--cs-letter-spacing-tight` | `-0.01em` |
| `--cs-letter-spacing-normal` | `0` |
| `--cs-letter-spacing-caps` | `0.08em` |

### Heading treatment

| Token | CSS form | Resolves to |
|---|---|---|
| `--cs-heading-family` | `var(--cs-font-family-ui)` | `'Be Vietnam Pro', ui-sans-serif, system-ui, sans-serif` |
| `--cs-heading-weight-strong` | `var(--cs-font-weight-extrabold)` | `800` |
| `--cs-heading-weight` | `var(--cs-font-weight-bold)` | `700` |
| `--cs-heading-tracking` | `var(--cs-letter-spacing-tight)` | `-0.01em` |

### Full typography hierarchy & font substitutes

- **Role utility hierarchy (`base/typography.css`):** `.cs-display` (`--cs-text-display` `3.75rem`, weight `800`, line-height `1.15`, tracking `-0.01em`) and fluid `.cs-display--fluid`; `.cs-h1` (`--cs-text-h1` `2.25rem`, weight `800`, line-height `1.35`) and `.cs-h1--fluid`; `.cs-h2` (`--cs-text-h2` `1.875rem`, weight `700`); `.cs-h3` (`--cs-text-h3` `1.5rem`, weight `700`); `.cs-h4` (`--cs-text-h4` `1.25rem`, weight `600`); `.cs-body-lg` (`--cs-text-body-lg` `1.125rem`, line-height `1.5`); `.cs-body` (`--cs-text-body` `1rem`, line-height `1.5`); `.cs-secondary` (`--cs-text-secondary` `0.875rem`); `.cs-caption` (`--cs-text-caption` `0.75rem`); `.cs-eyebrow` (`--cs-text-eyebrow` `0.75rem`, weight `700`, uppercase, tracking `0.08em`); `.cs-mono` (`--cs-font-family-mono`), `.cs-tabular` (`tabular-nums`), and `.cs-prose` (`--cs-prose-measure` `45rem`).
- **Font substitutes & Vietnamese diacritic safety:** when self-hosted WOFF2 faces are unavailable in external sandboxes, `--cs-font-family-ui` (`Be Vietnam Pro`) falls back to `ui-sans-serif, system-ui, sans-serif` (or `Inter`), `--cs-font-family-display` (`Space Grotesk`) falls back to `'Be Vietnam Pro', ui-sans-serif, system-ui, sans-serif`, and `--cs-font-family-mono` (`JetBrains Mono`) falls back to `ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`; always preserve `--cs-font-line-height-body` (`1.5`) and `--cs-font-line-height-heading` (`1.35`) so stacked Vietnamese diacritics never clip.

## Spacing & radius

| Token | Value |
|---|---|
| `--cs-space-0` | `0px` |
| `--cs-space-1` | `4px` |
| `--cs-space-2` | `8px` |
| `--cs-space-3` | `12px` |
| `--cs-space-4` | `16px` |
| `--cs-space-5` | `20px` |
| `--cs-space-6` | `24px` |
| `--cs-space-8` | `32px` |
| `--cs-space-10` | `40px` |
| `--cs-space-12` | `48px` |
| `--cs-space-16` | `64px` |
| `--cs-space-20` | `80px` |
| `--cs-space-24` | `96px` |

| Token | Value |
|---|---|
| `--cs-radius-sm` | `4px` |
| `--cs-radius-md` | `8px` |
| `--cs-radius-lg` | `14px` |
| `--cs-radius-full` | `999px` |

### Density (Theme attribute)

| Token | CSS form | Resolves to |
|---|---|---|
| `--cs-density-space-1` | `var(--cs-space-1)` | `4px` |
| `--cs-density-space-2` | `var(--cs-space-2)` | `8px` |
| `--cs-density-space-3` | `var(--cs-space-3)` | `12px` |
| `--cs-density-space-4` | `var(--cs-space-4)` | `16px` |
| `--cs-density-space-5` | `var(--cs-space-5)` | `20px` |
| `--cs-density-space-6` | `var(--cs-space-6)` | `24px` |
| `--cs-density-control-gap` | `var(--cs-component-button-gap)` | `8px` |

Scoped overrides (distinct from the base token rows):

| Scope | Token | CSS override |
|---|---|---|
| `data-cs-density="compact"` | `--cs-density-space-1` | `3px` |
| `data-cs-density="compact"` | `--cs-density-space-2` | `6px` |
| `data-cs-density="compact"` | `--cs-density-space-3` | `9px` |
| `data-cs-density="compact"` | `--cs-density-space-4` | `12px` |
| `data-cs-density="compact"` | `--cs-density-space-5` | `16px` |
| `data-cs-density="compact"` | `--cs-density-space-6` | `18px` |
| `data-cs-density="compact"` | `--cs-density-control-gap` | `6px` |
| `data-cs-density="compact"` | `--cs-component-button-gap` | `6px` |
| `data-cs-density="compact"` | `--cs-component-button-xs-paddingY` | `var(--cs-component-button-xs-padding-y)` |
| `data-cs-density="compact"` | `--cs-component-button-xs-padding-y` | `3px` |
| `data-cs-density="compact"` | `--cs-component-button-xs-paddingX` | `var(--cs-component-button-xs-padding-x)` |
| `data-cs-density="compact"` | `--cs-component-button-xs-padding-x` | `8px` |
| `data-cs-density="compact"` | `--cs-component-button-sm-paddingY` | `var(--cs-component-button-sm-padding-y)` |
| `data-cs-density="compact"` | `--cs-component-button-sm-padding-y` | `6px` |
| `data-cs-density="compact"` | `--cs-component-button-sm-paddingX` | `var(--cs-component-button-sm-padding-x)` |
| `data-cs-density="compact"` | `--cs-component-button-sm-padding-x` | `12px` |
| `data-cs-density="compact"` | `--cs-component-button-md-paddingY` | `var(--cs-component-button-md-padding-y)` |
| `data-cs-density="compact"` | `--cs-component-button-md-padding-y` | `10px` |
| `data-cs-density="compact"` | `--cs-component-button-md-paddingX` | `var(--cs-component-button-md-padding-x)` |
| `data-cs-density="compact"` | `--cs-component-button-md-padding-x` | `16px` |
| `data-cs-density="compact"` | `--cs-component-button-lg-paddingY` | `var(--cs-component-button-lg-padding-y)` |
| `data-cs-density="compact"` | `--cs-component-button-lg-padding-y` | `12px` |
| `data-cs-density="compact"` | `--cs-component-button-lg-paddingX` | `var(--cs-component-button-lg-padding-x)` |
| `data-cs-density="compact"` | `--cs-component-button-lg-padding-x` | `22px` |
| `data-cs-density="compact"` | `--cs-component-textfield-paddingY` | `var(--cs-component-textfield-padding-y)` |
| `data-cs-density="compact"` | `--cs-component-textfield-padding-y` | `8px` |
| `data-cs-density="compact"` | `--cs-component-textfield-paddingX` | `var(--cs-component-textfield-padding-x)` |
| `data-cs-density="compact"` | `--cs-component-textfield-padding-x` | `10px` |
| `data-cs-density="comfortable"` | `--cs-density-space-1` | `var(--cs-space-1)` |
| `data-cs-density="comfortable"` | `--cs-density-space-2` | `var(--cs-space-2)` |
| `data-cs-density="comfortable"` | `--cs-density-space-3` | `var(--cs-space-3)` |
| `data-cs-density="comfortable"` | `--cs-density-space-4` | `var(--cs-space-4)` |
| `data-cs-density="comfortable"` | `--cs-density-space-5` | `var(--cs-space-5)` |
| `data-cs-density="comfortable"` | `--cs-density-space-6` | `var(--cs-space-6)` |
| `data-cs-density="comfortable"` | `--cs-density-control-gap` | `var(--cs-component-button-gap)` |
| `data-cs-density="comfortable"` | `--cs-component-button-gap` | `8px` |
| `data-cs-density="comfortable"` | `--cs-component-button-xs-padding-y` | `4px` |
| `data-cs-density="comfortable"` | `--cs-component-button-xs-paddingY` | `var(--cs-component-button-xs-padding-y)` |
| `data-cs-density="comfortable"` | `--cs-component-button-xs-padding-x` | `10px` |
| `data-cs-density="comfortable"` | `--cs-component-button-xs-paddingX` | `var(--cs-component-button-xs-padding-x)` |
| `data-cs-density="comfortable"` | `--cs-component-button-sm-padding-y` | `8px` |
| `data-cs-density="comfortable"` | `--cs-component-button-sm-paddingY` | `var(--cs-component-button-sm-padding-y)` |
| `data-cs-density="comfortable"` | `--cs-component-button-sm-padding-x` | `14px` |
| `data-cs-density="comfortable"` | `--cs-component-button-sm-paddingX` | `var(--cs-component-button-sm-padding-x)` |
| `data-cs-density="comfortable"` | `--cs-component-button-md-padding-y` | `12px` |
| `data-cs-density="comfortable"` | `--cs-component-button-md-paddingY` | `var(--cs-component-button-md-padding-y)` |
| `data-cs-density="comfortable"` | `--cs-component-button-md-padding-x` | `20px` |
| `data-cs-density="comfortable"` | `--cs-component-button-md-paddingX` | `var(--cs-component-button-md-padding-x)` |
| `data-cs-density="comfortable"` | `--cs-component-button-lg-padding-y` | `16px` |
| `data-cs-density="comfortable"` | `--cs-component-button-lg-paddingY` | `var(--cs-component-button-lg-padding-y)` |
| `data-cs-density="comfortable"` | `--cs-component-button-lg-padding-x` | `28px` |
| `data-cs-density="comfortable"` | `--cs-component-button-lg-paddingX` | `var(--cs-component-button-lg-padding-x)` |
| `data-cs-density="comfortable"` | `--cs-component-textfield-padding-y` | `10px` |
| `data-cs-density="comfortable"` | `--cs-component-textfield-paddingY` | `var(--cs-component-textfield-padding-y)` |
| `data-cs-density="comfortable"` | `--cs-component-textfield-padding-x` | `12px` |
| `data-cs-density="comfortable"` | `--cs-component-textfield-paddingX` | `var(--cs-component-textfield-padding-x)` |

### Layout & iconography

| Token | Value |
|---|---|
| `--cs-breakpoint-xs` | `0px` |
| `--cs-breakpoint-phone` | `360px` |
| `--cs-breakpoint-sm` | `640px` |
| `--cs-breakpoint-md` | `768px` |
| `--cs-breakpoint-lg` | `1024px` |
| `--cs-breakpoint-xl` | `1280px` |
| `--cs-breakpoint-2xl` | `1536px` |
| `--cs-container-max` | `1320px` |
| `--cs-prose-measure` | `45rem` |
| `--cs-scroll-padding-block-start` | `var(--cs-space-4)` |
| `--cs-scroll-padding-block-end` | `var(--cs-space-4)` |
| `--cs-icon-sm` | `16px` |
| `--cs-icon-md` | `20px` |
| `--cs-icon-lg` | `24px` |

### Whitespace philosophy, border radius scale & media geometry

- **Whitespace & section rhythm:** separate major page bands with `--cs-space-16` (`64px`) to `--cs-space-24` (`96px`), keep card internal padding at `--cs-space-4` (`16px`) to `--cs-space-6` (`24px`), and cap long-form reading columns with `.cs-prose` (`--cs-prose-measure` `45rem`).
- **Border radius scale & media geometry (`Shapes`):** `--cs-radius-sm` (`4px`) for `.cs-kbd`, `.cs-code`, and compact tags; `--cs-radius-md` (`8px`) for `.cs-button`, `.cs-field__control`, `.cs-popover__panel`, and `.cs-menu__list`; `--cs-radius-lg` (`14px`) for `.cs-card`, `.cs-dialog`, `.cs-cmdk`, and `.cs-surface-*` glass panels; `--cs-radius-full` (`999px`) for `.cs-badge`, `.cs-tag`, and circular `.cs-avatar`; frame media with `.cs-card__media`, `AspectRatio` (`16:9`, `4:3`, `1:1`), `.cs-image__zoom`, and `.cs-aurora--photo`.

## Elevation

Shadow values are the raw CSS box-shadow strings from `$extensions["com.cyberskill"].css` (structured DTCG objects carry the same layers). Dark overrides shown.

| Token | Light | Dark |
|---|---|---|
| `--cs-shadow-xs` | `0 1px 2px rgba(69, 33, 14, 0.06)` | `0 1px 2px rgba(0, 0, 0, 0.40)` |
| `--cs-shadow-sm` | `0 1px 3px rgba(69, 33, 14, 0.04), 0 8px 24px rgba(69, 33, 14, 0.06)` | `0 1px 3px rgba(0, 0, 0, 0.34), 0 8px 24px rgba(0, 0, 0, 0.42)` |
| `--cs-shadow-md` | `0 12px 30px rgba(31, 19, 11, 0.18)` | `0 12px 30px rgba(0, 0, 0, 0.50)` |
| `--cs-shadow-lg` | `0 20px 60px rgba(69, 33, 14, 0.18)` | `0 20px 60px rgba(0, 0, 0, 0.55)` |
| `--cs-shadow-xl` | `0 24px 80px rgba(31, 19, 11, 0.26)` | `0 24px 80px rgba(0, 0, 0, 0.62)` |

### Depth scale & Liquid Glass materials

| Token | Value |
|---|---|
| `--cs-depth-bg` | `0` |
| `--cs-depth-section` | `5` |
| `--cs-depth-card` | `10` |
| `--cs-depth-nav` | `50` |
| `--cs-depth-modal` | `100` |
| `--cs-depth-toast` | `200` |
| `--cs-depth-dropdown` | `60` |
| `--cs-depth-overlay` | `80` |
| `--cs-glass-whisper-blur` | `8px` |
| `--cs-glass-whisper-saturate` | `110%` |
| `--cs-glass-whisper-opacity` | `60%` |
| `--cs-glass-light-blur` | `12px` |
| `--cs-glass-light-saturate` | `130%` |
| `--cs-glass-light-opacity` | `70%` |
| `--cs-glass-standard-blur` | `16px` |
| `--cs-glass-standard-saturate` | `150%` |
| `--cs-glass-standard-opacity` | `80%` |
| `--cs-glass-heavy-blur` | `24px` |
| `--cs-glass-heavy-saturate` | `180%` |
| `--cs-glass-heavy-opacity` | `90%` |

### Elevation hierarchy (Levels 0–5) & decorative depth

- **Six-level surface & shadow hierarchy:** Level 0 (`--cs-depth-bg` `0`) flat `--cs-color-surface-page` canvas; Level 1 (`--cs-depth-section` `5`) `--cs-color-surface-raised` bands, `.cs-card--flat`, and `.cs-card--raised`; Level 2 (`--cs-depth-card` `10`) default `.cs-card` with `--cs-shadow-xs` / `--cs-shadow-sm` and `.cs-surface-whisper` / `.cs-surface-light`; Level 3 interactive/spotlight `.cs-card--interactive:hover` and `.cs-card--featured` with `--cs-shadow-md` and `.cs-surface-standard`; Level 4 (`--cs-depth-nav` `50`, `--cs-depth-dropdown` `60`, `--cs-depth-overlay` `80`) sticky headers, `.cs-popover__panel`, `.cs-menu__list`, and `.cs-surface-heavy` with `--cs-shadow-lg`; Level 5 (`--cs-depth-modal` `100`, `--cs-depth-toast` `200`) `.cs-dialog`, `.cs-drawer`, `.cs-cmdk`, and `.cs-toast` with `--cs-shadow-xl` over `var(--cs-color-surface-scrim)`.
- **Decorative depth:** combine warm Umber multi-layer ambient shadows with a `1px` specular inner border (`--_cs-glass-border`) on `.cs-surface-*` panels and radial Ochre/Umber washes on `.cs-aurora` hero bands; under `prefers-reduced-transparency: reduce` or `forced-colors: active`, surfaces fall back to opaque `.cs-surface-solid`.

## Motion

Calm, purposeful motion; the global `prefers-reduced-motion` safety net reduces animation/transition durations to 0.01ms and disables smooth scrolling at runtime; components can disable animation entirely — these exported values are the real ones (80/120/200/320ms).

| Token | Value |
|---|---|
| `--cs-duration-instant` | `80ms` |
| `--cs-duration-fast` | `120ms` |
| `--cs-duration-base` | `200ms` |
| `--cs-duration-slow` | `320ms` |
| `--cs-ease-standard` | `cubic-bezier(0.2, 0, 0, 1)` |
| `--cs-ease-entrance` | `cubic-bezier(0, 0, 0, 1)` |
| `--cs-ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` |
| `--cs-ease-emphasized` | `cubic-bezier(0.2, 0, 0, 1)` |

## Component tokens

Component-level design decisions (button · textfield). Dark values are theme overrides.

| Token | Light | Dark |
|---|---|---|
| `--cs-component-button-primary-bg` | `#45210E` | `#f4ba17` |
| `--cs-component-button-primary-fg` | `#FFFFFF` | `#1a1108` |
| `--cs-component-button-gap` | `8px` | — |
| `--cs-component-button-radius` | `8px` | — |
| `--cs-component-button-xs-paddingY` | `var(--cs-component-button-xs-padding-y)` | — |
| `--cs-component-button-xs-paddingX` | `var(--cs-component-button-xs-padding-x)` | — |
| `--cs-component-button-xs-minHeight` | `var(--cs-component-button-xs-min-height)` | — |
| `--cs-component-button-xs-minWidth` | `var(--cs-component-button-xs-min-width)` | — |
| `--cs-component-button-xs-minHeight-coarse` | `var(--cs-component-button-xs-min-height-coarse)` | — |
| `--cs-component-button-sm-paddingY` | `var(--cs-component-button-sm-padding-y)` | — |
| `--cs-component-button-sm-paddingX` | `var(--cs-component-button-sm-padding-x)` | — |
| `--cs-component-button-sm-minHeight` | `var(--cs-component-button-sm-min-height)` | — |
| `--cs-component-button-sm-minHeight-coarse` | `var(--cs-component-button-sm-min-height-coarse)` | — |
| `--cs-component-button-md-paddingY` | `var(--cs-component-button-md-padding-y)` | — |
| `--cs-component-button-md-paddingX` | `var(--cs-component-button-md-padding-x)` | — |
| `--cs-component-button-md-minHeight` | `var(--cs-component-button-md-min-height)` | — |
| `--cs-component-button-md-minHeight-coarse` | `var(--cs-component-button-md-min-height-coarse)` | — |
| `--cs-component-button-lg-paddingY` | `var(--cs-component-button-lg-padding-y)` | — |
| `--cs-component-button-lg-paddingX` | `var(--cs-component-button-lg-padding-x)` | — |
| `--cs-component-button-lg-minHeight` | `var(--cs-component-button-lg-min-height)` | — |
| `--cs-component-textfield-border-default` | `#BFA58F` | `#5a4636` |
| `--cs-component-textfield-paddingY` | `var(--cs-component-textfield-padding-y)` | — |
| `--cs-component-textfield-paddingX` | `var(--cs-component-textfield-padding-x)` | — |
| `--cs-component-textfield-minHeight` | `var(--cs-component-textfield-min-height)` | — |
| `--cs-focus-ring` | `3px` | — |
| `--cs-component-button-xs-padding-y` | `4px` | — |
| `--cs-component-button-xs-padding-x` | `10px` | — |
| `--cs-component-button-xs-min-height` | `28px` | — |
| `--cs-component-button-xs-min-width` | `28px` | — |
| `--cs-component-button-xs-min-height-coarse` | `44px` | — |
| `--cs-component-button-sm-padding-y` | `8px` | — |
| `--cs-component-button-sm-padding-x` | `14px` | — |
| `--cs-component-button-sm-min-height` | `36px` | — |
| `--cs-component-button-sm-min-height-coarse` | `44px` | — |
| `--cs-component-button-md-padding-y` | `12px` | — |
| `--cs-component-button-md-padding-x` | `20px` | — |
| `--cs-component-button-md-min-height` | `44px` | — |
| `--cs-component-button-md-min-height-coarse` | `44px` | — |
| `--cs-component-button-lg-padding-y` | `16px` | — |
| `--cs-component-button-lg-padding-x` | `28px` | — |
| `--cs-component-button-lg-min-height` | `52px` | — |
| `--cs-component-textfield-padding-y` | `10px` | — |
| `--cs-component-textfield-padding-x` | `12px` | — |
| `--cs-component-textfield-min-height` | `44px` | — |

## Static HTML component anatomy (.cs-*)

Static HTML consumers and zero-runtime generators style semantic HTML elements directly with `.cs-*` classes from `styles.css` (or `styles.layered.css`). Interactive state management, keyboard roving, focus trapping and ARIA live announcements require the React components or consumer-supplied scripts; see `docs/static-html-reference.md` for rendered DOM snapshots.

- **Actions & buttons (`base/components.css`):** primary `.cs-button`, variants `.cs-button--secondary`, `.cs-button--tertiary`, `.cs-button--ghost`, `.cs-button--danger`, `.cs-button--danger-ghost`; sizes `.cs-button--xs` (`28px`, `44px` on `pointer: coarse`), `.cs-button--sm` (`36px`, `44px` on `pointer: coarse`), default medium (`44px`), `.cs-button--lg` (`52px`), full-width `.cs-button--full`; states `.is-disabled`, `.is-loading` with `.cs-button__spinner`.
- **Form controls & fields (`base/components.css`, `base/forms.css`, `base/controls.css`):** field wrapper `.cs-field` with `.cs-field__label`, `.cs-field__control`, `.cs-field__description`, `.cs-field__error` and invalid state `.cs-field.is-invalid`; selection controls `.cs-check`, `.cs-radio`, `.cs-switch` (`.cs-switch__track`); composite inputs `.cs-select`, `.cs-native-select`, `.cs-search` (`.cs-search__clear`), `.cs-stepper`, `.cs-otp`, `.cs-slider`, `.cs-segmented`.
- **Cards & Liquid Glass surfaces (`base/data.css`, `base/glass.css`):** card container `.cs-card` (modifiers `.cs-card--flat`, `.cs-card--raised`, `.cs-card--featured`, `.cs-card--interactive`; slots `.cs-card__media`, `.cs-card__header`, `.cs-card__title`, `.cs-card__subtitle`, `.cs-card__body`, `.cs-card__footer`); optical glass tiers `.cs-surface-whisper`, `.cs-surface-light`, `.cs-surface-standard` (alias `.cs-glass-card`), `.cs-surface-heavy`, opaque fallback `.cs-surface-solid` (alias `.cs-surface-matte`), and brand hero wash `.cs-aurora` (`.cs-aurora--photo`).
- **Data display & typography (`base/components.css`, `base/data.css`, `base/typography.css`, `base/collections.css`):** responsive table wrapper `.cs-table-wrap` and `.cs-table` with right-aligned tabular numeric cells `.cs-table__cell--numeric` and subtle row rule `var(--cs-color-border-subtle)`; KPI block `.cs-stat` (`.cs-stat__label`, `.cs-stat__value`, `.cs-stat__delta--up`, `.cs-stat__delta--down`, `.cs-stat__delta--flat`); status pills `.cs-badge` (`.cs-badge--solid`, `.cs-badge--ochre`, `.cs-badge--success`, `.cs-badge--warning`, `.cs-badge--danger`, `.cs-badge--info`, `.cs-badge__dot`) and removable `.cs-tag`; `.cs-avatar` (`.cs-avatar--sm`, `.cs-avatar--md`, `.cs-avatar--lg`, `.cs-avatar--square`, `.cs-avatar-group`); `.cs-kbd`, `.cs-code`, `.cs-dl`; type role classes `.cs-display`, `.cs-display--fluid`, `.cs-h1`, `.cs-h1--fluid`, `.cs-h2`, `.cs-h3`, `.cs-h4`, `.cs-body-lg`, `.cs-body`, `.cs-secondary`, `.cs-caption`, `.cs-eyebrow`, `.cs-mono`, `.cs-tabular`, `.cs-prose`, and opt-in display scope `.cs-display-face`.
- **Feedback & overlays (`base/feedback.css`, `base/components.css`, `base/shell.css`):** inline banner `.cs-alert` (`.cs-alert--info`, `.cs-alert--success`, `.cs-alert--warning`, `.cs-alert--danger`, `.cs-alert__icon`, `.cs-alert__title`, `.cs-alert__body`, `.cs-alert__dismiss`); toast stack `.cs-toast-stack` and `.cs-toast`; modal `.cs-dialog-layer` with theme-adaptive backdrop `.cs-dialog__overlay` (`var(--cs-color-surface-scrim)`), panel `.cs-dialog` (`.cs-dialog__header`, `.cs-dialog__title`, `.cs-dialog__body`, `.cs-dialog__actions`) and `.cs-alert-dialog` (`.cs-alert-dialog--destructive`); slide-over `.cs-drawer-scrim` and `.cs-drawer` (`.cs-drawer--left`); `.cs-popover` (`.cs-popover__panel`), `.cs-tooltip` (`.cs-tooltip__bubble`), `.cs-progress` (`.cs-progress__fill`), `.cs-spinner`, `.cs-skeleton`.
- **Navigation, app shell & AI (`base/navigation.css`, `base/shell.css`, `base/ai.css`, `base/controls.css`):** app sidebar `.cs-sidebar` (`.cs-sidebar__label`, `.cs-nav-item`, `.cs-nav-item.is-active`), `.cs-tabs` (`.cs-tab`, `.cs-tab__count`), `.cs-breadcrumb`, `.cs-pagination`, `.cs-menu` (`.cs-menu__list`, `.cs-menu__item`, `.cs-menu__item--danger`, `.cs-menu__sep`), `.cs-steps` (`.cs-step`, `.cs-step--done`, `.cs-step--active`), command palette `.cs-cmdk-scrim` and `.cs-cmdk` (`.cs-cmdk__search`, `.cs-cmdk__list`, `.cs-cmdk__item`); AI surfaces `.cs-prompt`, `.cs-chat-msg`, `.cs-ai-disclosure` (`.cs-ai-disclosure__badge`, `.cs-ai-disclosure__panel`), `.cs-review-gate`, and `.cs-terminal`.

### Signature components & canonical surface examples (ex-*)

- **Signature CyberSkill surfaces:** (1) 4-tier Liquid Glass (`.cs-surface-whisper` to `.cs-surface-heavy`), (2) `.cs-aurora` radial Ochre/Umber hero wash, (3) Trustworthy AI triad (`AIDisclosureBadge` `.cs-ai-disclosure`, `ConfidenceMeter`, `HumanReviewGate` `.cs-review-gate`, `LumiAvatar` `.cs-lumi`), (4) Ngũ Hành 15-pack elemental accents (`data-cs-element`), and (5) 85 bilingual `.dc.html` document templates.
- **Canonical cross-collection examples (`ex-*`):** `ex-pricing-tier` → `.cs-card` with `.cs-card__header`, `.cs-stat__value.cs-tabular`, and `.cs-button--secondary`; `ex-pricing-tier-featured` → `.cs-card.cs-card--featured` with `.cs-badge--ochre` and primary `.cs-button`; `ex-product-selector` → `.cs-card.cs-card--raised` with `.cs-segmented` and `.cs-check`; `ex-cart-drawer` → `.cs-drawer-scrim` + `.cs-drawer` with `.cs-dl` line items and `.cs-drawer__footer`; `ex-app-shell-row` → `.cs-sidebar` + `.cs-nav-item.is-active`; `ex-data-table-cell` → `.cs-table-wrap` + `.cs-table` + `.cs-table__cell--numeric`; `ex-auth-form-card` → `.cs-card` + `.cs-form` + `.cs-field` + `.cs-button--full`; `ex-modal-card` → `.cs-dialog-layer` + `.cs-dialog__overlay` + `.cs-dialog`; `ex-empty-state-card` → `.cs-card.cs-card--flat` + `EmptyState`; `ex-toast` → `.cs-toast-stack` + `.cs-toast`.

## Layout, grid & responsive strategy

Layouts compose on a `4px` spatial rhythm (`--cs-space-1` to `--cs-space-24`) with container caps (`--cs-container-sm` `640px` through `--cs-container-2xl` `1440px`) and two density scopes (`data-cs-density="comfortable"` default vs `data-cs-density="compact"`). Mark resizable panes or split regions with `.cs-cq` (`container-type: inline-size`) to collapse child grids via `.cs-cq-cols-2`, `.cs-cq-cols-3`, `.cs-cq-cols-4`, `.cs-cq-stack`, and `.cs-cq-hide-narrow` independent of viewport width.

- **Desktop & wide (`> 1024px`, `--cs-breakpoint-lg` / `--cs-breakpoint-xl` `1280px` / `--cs-breakpoint-2xl` `1536px`):** full multi-column grids, persistent `248px` `.cs-sidebar` + `1fr` main workspace, generous sheet padding (`40px+`), and full display typography (`--cs-text-display` `3.75rem`, `--cs-text-h1` `2.25rem`). Fixed-aspect 16:9 decks and social canvases inside `.cs-canvas-desk` preserve authored tracks and scroll horizontally below `1280px` (`min-width: 960px`).
- **Tablet (`<= 768px`, `--cs-breakpoint-md`):** 3–6 column inline grids collapse to `repeat(2, 1fr)`; `.cs-sidebar` converts from a fixed column into a horizontal wrapping navigation strip; `.cs-table-wrap` and `.cs-table-scroll` scroll horizontally; `.cs-display` steps down to `--cs-font-size-4xl` (`3rem`) and `.cs-h1` to `--cs-font-size-2xl` (`1.875rem`) outside `.cs-canvas-desk` (or scale smoothly when opted into `.cs-display--fluid` / `.cs-h1--fluid`); `.cs-nav-item` and `.cs-search` enforce the `44px` touch height.
- **Mobile & narrow (`<= 640px` `--cs-breakpoint-sm`, `<= 480px` `--cs-breakpoint-xs`, `<= 360px` reflow floor):** all multi-column content grids collapse to `1fr`; `.cs-dialog` widens to `calc(100vw - 1rem)` at `4vh` (`4dvh` safe-area aware) with full-flex action buttons; `.cs-display` steps down to `--cs-font-size-3xl` (`2.25rem`) and `.cs-h1` to `--cs-font-size-xl` (`1.5rem`); at `<= 360px` (WCAG 1.4.10), `.cs-tabs`, `.cs-pagination`, `.cs-otp`, and `.cs-dl` wrap or scroll without horizontal page overflow while preserving `>= 44px` coarse-pointer targets.

## Guardrails (Do's & Don'ts)

- **Do (Brand & colour):** anchor interfaces on Umber `#45210E` and Ochre `#F4BA17`; use `--cs-color-surface-page`, `--cs-color-surface-panel`, `--cs-color-surface-raised`, `--cs-color-border-default`, `var(--cs-color-border-subtle)`, and `var(--cs-color-surface-scrim)` so light, `[data-theme="dark"]`, `[data-theme="system"]`, `[data-cs-contrast="high"]`, and all 15 Ngũ Hành element packs adapt automatically.
- **Don't (Brand & colour):** never place body text on mid-tone `--cs-accent` (pair `--cs-accent-strong` with `--cs-accent-on-strong`, or use `--cs-accent-tint` / `--cs-accent-bright` with dark ink), and never hardcode light-only `rgba(69, 33, 14, ...)` borders or `rgba(31, 19, 11, ...)` scrims in component stylesheets.
- **Do (Typography & Vietnamese localization):** keep `--cs-font-line-height-body` (`1.5`) and `--cs-font-line-height-heading` (`1.35`) so stacked Vietnamese diacritics (`ẫ`, `ệ`, `ự`, `ở`) never clip; apply `.cs-tabular` or `.cs-table__cell--numeric` (`font-variant-numeric: tabular-nums`) on KPIs, prices, timestamps, badges, and pagination counts; ship both EN and VI copy for registered UI strings.
- **Don't (Typography & Vietnamese localization):** never tighten body line-height below `1.5` or heading line-height below `1.35` on Vietnamese text, never strip diacritics, and never make `--cs-font-family-display` (`Space Grotesk`) the default body font (opt in only for headlines via `.cs-display-face` or `--cs-heading-family`).
- **Do (Accessibility & motion):** preserve the dual-ring focus indicator (`outline: 2px solid var(--cs-color-text-primary)` + `box-shadow: 0 0 0 5px var(--cs-color-accent-ochre)`), maintain `APCA Lc >= 75` for body text, enforce `>= 44px` hit targets under `@media (pointer: coarse)`, and provide opaque surface fallbacks under `prefers-reduced-transparency: reduce` and `forced-colors: active`.
- **Don't (Accessibility & runtime boundary):** never remove `:focus-visible` outlines without an ancestor `:focus-within` composite ring, never rely on colour alone to communicate status (always pair semantic colour with an icon, badge text, or border weight), and never claim static `.cs-*` HTML markup alone provides React keyboard navigation, focus trapping, or ARIA state updates.

## Agent prompt guide & starter blueprint

- **Root attributes (`<html>`):** set `lang="vi"` (or `lang="en"`), `data-theme="light"` (`"dark"` | `"system"`), optional `data-cs-element="tho"` (`"kim"` | `"moc"` | `"thuy"` | `"hoa"` | `"tho"`), optional `data-cs-density="comfortable"` (`"compact"`), and optional `data-cs-contrast="high"`.
- **Runtime selection:** load `styles.css` (or `styles.layered.css`) for static `.cs-*` HTML; import `@cyberskill/design` (`dist/esm/_esm/react.mjs`) for compiled React ESM or `@cyberskill/design/source` (`_esm/react.mjs`) for raw JSX; use `templates/_vendor/support.js` only when previewing `.dc.html` documents.
- **Prompting checklist for AI generators:** specify (1) target runtime (`static-html` vs `react`), (2) theme and Ngũ Hành element (`data-theme`, `data-cs-element`), (3) bilingual copy pair (`vi` + `en` with full Vietnamese diacritics), (4) responsive container (`max-width: var(--cs-container-xl)` or `.cs-cq`), and (5) tabular numeral alignment (`.cs-tabular` / `.cs-table__cell--numeric`) for metrics and tables.
- **Quick color & token reference:** Primary brand Umber `#45210E` (`--cs-color-brand-umber`) · Accent Ochre `#F4BA17` (`--cs-color-brand-ochre`) · Page canvas `#FFFDF8` / dark `#1a1108` (`--cs-color-surface-page`) · Panel `#FFFFFF` / dark `#221710` (`--cs-color-surface-panel`) · Raised `#FBF4E9` / dark `#2b1e14` (`--cs-color-surface-raised`) · Default border `#E7D9C6` / dark `#4a3a2c` (`--cs-color-border-default`).
- **Ready-to-use example prompts:** (1) Hero band: `.cs-aurora` section with `.cs-eyebrow`, `.cs-display--fluid`, `.cs-prose` lead, primary `.cs-button` + `.cs-button--secondary`; (2) SaaS workspace: `.cs-sidebar` + `main` grid with 3-up `.cs-card` / `.cs-card--featured` KPI row (`.cs-stat__value.cs-tabular`) and `.cs-table-wrap` > `.cs-table` with `.cs-table__cell--numeric`; (3) Trustworthy AI review panel: `.cs-card.cs-surface-standard` pairing `.cs-chat-msg`, `.cs-ai-disclosure`, and `.cs-review-gate`.
- **Iteration guide & known scope boundaries:** modify one component or section band at a time using `--cs-*` custom properties (never raw hex); verify light, `[data-theme="dark"]`, `360px` mobile reflow, and `pointer: coarse` `44px` targets; remember that static `.cs-*` HTML provides visual styling only (interactive keyboard roving, focus trapping, and ARIA live announcements require React components or consumer scripts, and `.dc.html` files require `templates/_vendor/support.js`).

## Components inventory

107 component files · 125 exports (from `_ds_manifest.json`). Every primary ships `.jsx` + `.d.ts` + `.prompt.md`.

`AIDisclosureBadge` · `Accordion` · `Alert` · `AlertDialog` · `Anchor` · `AspectRatio` · `Avatar` · `AvatarGroup` · `BackTop` · `Badge` · `Breadcrumb` · `Button` · `ButtonGroup` · `CS_ICONS` · `CS_LOGO_MARK_INNER` · `CS_LOGO_VIEWBOX` · `Calendar` · `Card` · `CardBody` · `CardFooter` · `CardHeader` · `Carousel` · `Cascader` · `Chart` · `ChatMessage` · `Checkbox` · `CitationList` · `CodeBlock` · `Collapsible` · `ColorPicker` · `Combobox` · `CommandPalette` · `Comment` · `ConfidenceMeter` · `ContextMenu` · `DataGrid` · `DataTable` · `DatePicker` · `DescriptionList` · `Dialog` · `Divider` · `Dock` · `Drawer` · `EDITOR_SCHEMA` · `Editor` · `EmptyState` · `FileUpload` · `FloatingActionButton` · `Form` · `FormField` · `FormFieldArray` · `FormWizard` · `HotKeys` · `HoverCard` · `HumanReviewGate` · `Icon` · `Image` · `InlineEdit` · `InputGroup` · `InputOTP` · `Item` · `Kbd` · `Link` · `List` · `ListItem` · `LocaleProvider` · `Logo` · `LumiAvatar` · `Masonry` · `Mentions` · `Menu` · `MenuItem` · `Menubar` · `NativeSelect` · `NavItem` · `NavigationMenu` · `NumberField` · `OverlayProvider` · `Pagination` · `Popconfirm` · `Popover` · `ProgressBar` · `PromptInput` · `PromptSuggestions` · `QRCode` · `Radio` · `RadioGroup` · `Rating` · `Result` · `ScrollArea` · `SearchField` · `SegmentedControl` · `Select` · `Sidebar` · `Skeleton` · `Slider` · `Sortable` · `Spinner` · `Splitter` · `Stat` · `StatusIndicator` · `Steps` · `Switch` · `Tab` · `Tabs` · `Tag` · `TagInput` · `Terminal` · `TextField` · `Textarea` · `TimePicker` · `Timeline` · `Toast` · `ToastStack` · `Toggle` · `Toolbar` · `Tooltip` · `Tour` · `Transfer` · `Tree` · `TreeSelect` · `TreeTable` · `TypingIndicator` · `Watermark` · `useMessages`

## Templates

85 templates with explicitly scoped language support in `templates/*/` (each a `.dc.html` + byte-identical `support.js` runtime; see `docs/template-schema-v2.md` for typed source-content slots; these are not automatically runtime props). **DC-capable authoring / full-clone only** — Stitch must not consume `*.dc.html` as SoT; use kitchen-sink / `.cs-*` / static examples instead.

## Links

- [README.md](README.md) — entrance document (voice, foundations, index)
- [SKILL.md](SKILL.md) — agent entry: hard rules + fast orientation
- [llms.txt](llms.txt) — agent/tool front door, capability-based consume-by-audience map
- [docs/consuming.md](docs/consuming.md) — adopt/upgrade + DC-capable vs static dual path
- [docs/doctrine.md](docs/doctrine.md) — expansion rule, verification depth, immutables
- [docs/sync.md](docs/sync.md) — repo ↔ authoring-environment round-trip & what non-DC agents can consume
- [tokens/](tokens/) — CSS custom properties + `tokens.json` / `tokens.js` (ESM) / `tokens.dtcg.json` (DTCG 2025.10 emitted-value profile) / `native/` (SwiftUI · Compose · Flutter)
- [docs/quality-gates.md](docs/quality-gates.md) — every deterministic gate incl. `design-md-parity`, which pins this file to the DTCG source

