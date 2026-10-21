---
version: alpha
name: DJI Analysis
description: An analysis of DJI's design language — a product-photography showroom for drones and cameras, where full-bleed studio renders sit in square, gutter-separated tiles on a white canvas, every action is a rounded pill in a single engineering blue, type is a tightly tracked Open Sans set in near-black ink at stepped opacities, small orange tier labels mark product rank, and the store layers 8px option cards, a sticky purchase bar and pale grey panels on top of the same restrained system before closing on a charcoal footer.

colors:
  primary: "#0070d5"          # DJI Blue — Store pill, Buy Now pills, active selector, announcement link
  store-blue: "#0060ef"       # store Buy Now, Add to Cart label, selected option border, store links
  store-blue-tint: "#deeafd"  # Add to Cart pill fill (store blue at 13% on white)
  on-primary: "#ffffff"       # labels on blue and dark pills, hero text over photography
  link-blue: "#1890ff"        # "Learn More ›" / "Buy Now ›" text links on product cards
  tier-orange: "#be4e04"      # product tier eyebrows ("Flagship", "Advanced")
  badge-orange: "#fa8c16"     # option corner badge
  error: "#f5222d"            # "Out of Stock"
  canvas: "#ffffff"           # page canvas, cards, nav, purchase bar
  canvas-soft: "#f7f9fa"      # feature-link band, store panels, In the Box tiles, store footer
  panel: "#f6f8f9"            # product benefits panel
  fog: "#f5f5f5"              # Explore More band, product-card backdrop, region pill
  announce: "#fafafa"         # announcement bar, category icon strip
  media-black: "#000000"      # store feature media tiles
  footer: "#272727"           # brand-site footer
  footer-pill: "#383838"      # Download App pill on the footer
  footer-divider: "#414141"   # footer rules
  ink: "#262626"              # headings and body (black at 85%)
  ink-secondary: "#595959"    # secondary text, inactive tabs (black at 65%)
  ink-tertiary: "#8c8c8c"     # tile eyebrows (black at 45%)
  store-ink: "#333333"        # store product and option titles
  graphite: "#3b3e40"         # store body copy and section headings
  nav-ink: "#303233"          # nav labels on white
  slate: "#6c7073"            # store footer links, input text, footer field border
  steel: "#9fa3a6"            # spec captions
  footer-link: "#b3b3b3"      # brand footer links (white at 65%)
  hairline: "#f0f0f0"         # tab track rule
  divider: "#e8e8e8"          # FAQ rows, purchase-bar rule
  card-border: "#d9d9d9"      # option card border
  dashed-border: "#dddddd"    # unavailable option card (dashed)
  input-border: "#d4d7d9"     # store email field
  control-border: "#cccccc"   # quantity stepper, checkbox

typography:
  display-xl:
    fontFamily: Open Sans
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: -1.44px
  display:
    fontFamily: Open Sans
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -1.2px
  spec-value:
    fontFamily: Open Sans
    fontSize: 40px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -1.2px
  heading:
    fontFamily: Open Sans
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.125
    letterSpacing: -0.96px
  card-title-lg:
    fontFamily: Open Sans
    fontSize: 32px
    fontWeight: 500
    lineHeight: 1.125
    letterSpacing: 0
  news-title:
    fontFamily: Open Sans
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.14
    letterSpacing: 0
  title-md:
    fontFamily: Open Sans
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.17
    letterSpacing: -0.72px
  product-name:
    fontFamily: Open Sans
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.17
    letterSpacing: -0.72px
  price:
    fontFamily: Open Sans
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.4px
  subhead:
    fontFamily: Open Sans
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.6px
  feature-title:
    fontFamily: Open Sans
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  option-title:
    fontFamily: Open Sans
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: -0.36px
  body:
    fontFamily: Open Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: -0.32px
  button:
    fontFamily: Open Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: -0.32px
  faq:
    fontFamily: Open Sans
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: -0.32px
  ui:
    fontFamily: Open Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: -0.28px
  nav:
    fontFamily: Open Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -0.28px
  caption:
    fontFamily: Open Sans
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: -0.24px
  badge:
    fontFamily: Open Sans
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: -0.24px
  footer-heading:
    fontFamily: Open Sans
    fontSize: 12px
    fontWeight: 500
    lineHeight: 2.0
    letterSpacing: 0
  micro:
    fontFamily: Open Sans
    fontSize: 10px
    fontWeight: 600
    lineHeight: 1.8
    letterSpacing: -0.2px

rounded:
  none: 0px
  xs: 4px
  sm: 8px
  xl: 60px
  xxl: 64px
  pill: 100px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  xxxl: 40px
  huge: 48px
  section: 64px

components:
  announcement-bar:
    backgroundColor: "{colors.announce}"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.none}"
  nav-bar-overlay:
    textColor: "{colors.on-primary}"
    typography: "{typography.nav}"
    rounded: "{rounded.none}"
    height: 64px
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.nav-ink}"
    typography: "{typography.nav}"
    rounded: "{rounded.none}"
    height: 64px
  button-store-pill:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.nav}"
    rounded: "{rounded.full}"
    padding: "8px 16px 8px 34px"
    height: 32px
  region-pill:
    backgroundColor: "{colors.fog}"
    textColor: "{colors.ink}"
    typography: "{typography.nav}"
    rounded: "{rounded.pill}"
    padding: "0px 12px"
    height: 32px
  button-hero-ghost:
    textColor: "{colors.on-primary}"
    borderColor: "{colors.on-primary}"
    typography: "{typography.ui}"
    rounded: "{rounded.xxl}"
    padding: "5px 16px"
    height: 32px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.xl}"
    padding: "0px 16px"
    height: 40px
  button-outline:
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.xl}"
    padding: "0px 15px"
    height: 40px
  button-outline-lg:
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: "14px 16px"
    height: 48px
  button-store-buy:
    backgroundColor: "{colors.store-blue}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: "14px 32px"
    height: 48px
  button-store-cart:
    backgroundColor: "{colors.store-blue-tint}"
    textColor: "{colors.store-blue}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: "14px 32px"
    height: 48px
  button-dark-pill:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.ui}"
    rounded: "{rounded.full}"
    padding: "6px 12px"
    height: 32px
  button-download-app:
    backgroundColor: "{colors.footer-pill}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "10px 16px"
    height: 40px
  compare-options-button:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.sm}"
    padding: "24px"
  text-link:
    textColor: "{colors.primary}"
    typography: "{typography.ui}"
  text-link-store:
    textColor: "{colors.store-blue}"
    typography: "{typography.ui}"
  card-text-link:
    textColor: "{colors.link-blue}"
    typography: "{typography.body}"
  product-tile:
    backgroundColor: "{colors.fog}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
  tile-eyebrow:
    textColor: "{colors.ink-tertiary}"
    typography: "{typography.ui}"
  tier-eyebrow:
    textColor: "{colors.tier-orange}"
    typography: "{typography.caption}"
  product-card:
    backgroundColor: "{colors.fog}"
    textColor: "{colors.ink}"
    typography: "{typography.display}"
    rounded: "{rounded.none}"
  category-strip:
    backgroundColor: "{colors.announce}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    height: 124px
  comparison-tabs:
    textColor: "{colors.ink-secondary}"
    borderColor: "{colors.hairline}"
    typography: "{typography.ui}"
    padding: "14px 0px"
  comparison-tab-active:
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    typography: "{typography.ui}"
  spec-column:
    textColor: "{colors.ink}"
    typography: "{typography.spec-value}"
  spec-caption:
    textColor: "{colors.steel}"
    typography: "{typography.ui}"
  explore-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.none}"
  field-card:
    textColor: "{colors.on-primary}"
    typography: "{typography.card-title-lg}"
    rounded: "{rounded.none}"
  news-card:
    textColor: "{colors.ink}"
    typography: "{typography.news-title}"
    rounded: "{rounded.none}"
  feature-link-band:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.feature-title}"
    padding: "64px 0px"
  store-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.none}"
  care-tag:
    backgroundColor: "{colors.store-blue}"
    textColor: "{colors.on-primary}"
    typography: "{typography.micro}"
    rounded: "{rounded.xs}"
    padding: "0px 4px"
  benefits-panel:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.graphite}"
    typography: "{typography.ui}"
    rounded: "{rounded.sm}"
    padding: "16px"
  option-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.store-ink}"
    borderColor: "{colors.card-border}"
    typography: "{typography.option-title}"
    rounded: "{rounded.sm}"
    padding: "24px"
  option-card-active:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.store-ink}"
    borderColor: "{colors.store-blue}"
    typography: "{typography.option-title}"
    rounded: "{rounded.sm}"
    padding: "23px"
  option-card-disabled:
    textColor: "{colors.store-ink}"
    borderColor: "{colors.dashed-border}"
    typography: "{typography.option-title}"
    rounded: "{rounded.sm}"
    padding: "24px"
  option-badge:
    backgroundColor: "{colors.badge-orange}"
    textColor: "{colors.on-primary}"
    typography: "{typography.badge}"
    padding: "2px 8px"
  media-toggle:
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
    height: 32px
  media-toggle-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.ui}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
    height: 32px
  quantity-stepper:
    textColor: "{colors.store-ink}"
    borderColor: "{colors.control-border}"
    typography: "{typography.ui}"
  purchase-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.divider}"
    typography: "{typography.price}"
    padding: "16px 0px"
  region-banner:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.graphite}"
    typography: "{typography.ui}"
    padding: "20px 12px"
  media-tile:
    backgroundColor: "{colors.media-black}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
  in-box-tile:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.none}"
  faq-row:
    textColor: "{colors.ink}"
    borderColor: "{colors.divider}"
    typography: "{typography.faq}"
  footnote-panel:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink-secondary}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
  floating-circle-button:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    size: 40px
  newsletter-input:
    textColor: "{colors.on-primary}"
    borderColor: "{colors.slate}"
    typography: "{typography.ui}"
    padding: "4px 0px 4px 12px"
    height: 32px
  footer:
    backgroundColor: "{colors.footer}"
    textColor: "{colors.footer-link}"
    borderColor: "{colors.footer-divider}"
    typography: "{typography.footer-heading}"
    padding: "32px 16px"
  footer-store:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.slate}"
    typography: "{typography.caption}"

  # ─── Examples (illustrative) — kit-mirror surfaces composed from the primitives above ───
  ex-pricing-tier:
    description: "Default Pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface."
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.card-border}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: "Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode)."
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xl}"
  ex-product-selector:
    description: "Color/size picker chrome — fashion / DTC variant selector."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md}"
  ex-cart-drawer:
    description: "Shopping cart drawer — DTC / fashion brand actual cart chrome."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md}"
    item-divider: "{colors.divider}"
  ex-app-shell-row:
    description: "Sidebar nav row inside the App Shell example. Active state uses brand primary as the indicator."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
  ex-data-table-cell:
    description: "Default data-table th + td chrome. Header uses mono-caps eyebrow typography; body uses body-sm."
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.caption}"
    bodyTypography: "{typography.body}"
    cellPadding: "{spacing.sm} {spacing.md}"
    rowBorder: "{colors.divider}"
  ex-auth-form-card:
    description: "Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: "Modal dialog surface — same chrome as feature-card with elevated shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: "Empty-state illustration frame."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.sm}"
    padding: "{spacing.huge}"
    captionTypography: "{typography.body}"
  ex-toast:
    description: "Toast notification surface — feature-card shape + medium shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body}"

---


## Overview

DJI's site works like a brightly lit product showroom. The page is a white canvas (`{colors.canvas}`) tiled edge to edge with studio photography: a full-height hero carousel of a single hero product over dark or sky backdrops, then a two-up grid of square-cornered product tiles separated by thin white gutters, each tile a soft grey render of a drone, gimbal or microphone with its name set as large, light-weight wordmark-style type above it. Text is never pure black; it is Open Sans in a near-black ink (`{colors.ink}`) at stepped opacities, tracked slightly tight so headings read compact and engineered.

Colour is used almost only for action. Every interactive pill (the nav Store button, "Buy Now", model selectors, "Where to Buy") is filled with a single engineering blue (`{colors.primary}`), while secondary actions are thin black-outlined pills. The store sharpens the same idea with a slightly brighter blue (`{colors.store-blue}`) and a pale tinted companion for "Add to Cart". A small burnt-orange label (`{colors.tier-orange}`) marks product rank such as "Flagship" or "Advanced"; it is the only warm accent on the brand site.

Pages share a clear rhythm: an announcement bar and white nav, photographic tiles, a centred section heading, comparison or editorial grids, a pale grey feature-link band, and a charcoal footer (`{colors.footer}`). The store keeps that skeleton but adds commerce furniture: 8px option cards with a 2px blue selection ring, an orange corner badge, a sticky white purchase bar, square black media tiles for feature storytelling, and a light grey footer.

**Key Characteristics:**
- Photography-first: full-bleed hero carousel and square, gutter-separated product tiles on `{colors.canvas}`; UI chrome stays out of the way.
- One action colour: `{colors.primary}` on the brand site and `{colors.store-blue}` in the store; every CTA is a pill (`{rounded.xl}`, `{rounded.xxl}`, `{rounded.full}`).
- Secondary actions are 1px `{colors.ink}` outline pills (`button-outline`); hero CTAs are white ghost pills over photography (`button-hero-ghost`).
- Open Sans throughout, tracked tight (about −0.02em for body, −0.03em for headings), with weight 600 for headings and 400 for everything else.
- Ink at stepped opacities: `{colors.ink}`, `{colors.ink-secondary}`, `{colors.ink-tertiary}`.
- Small `{colors.tier-orange}` eyebrows mark product rank; orange never fills a button.
- Page rhythm: announcement bar, nav, photo hero, product tiles, centred heading with grid, `{colors.canvas-soft}` feature-link band, `{colors.footer}` footer.

## Colors

Source pages: dji.com home, the camera-drones category page, and a store product page.

### Brand & Accent
- **DJI Blue** (`{colors.primary}` — #0070d5): the brand-site action colour: nav Store pill, "Buy Now" pills, the active model selector, "Where to Buy" pills and the announcement-bar link.
- **Store Blue** (`{colors.store-blue}` — #0060ef): the store's action colour: Buy Now, Add to Cart label, the selected option ring, the DJI Care tag and inline store links.
- **Store Blue Tint** (`{colors.store-blue-tint}` — #deeafd): the pale fill of Add to Cart.
- **On Blue** (`{colors.on-primary}`): white labels on blue and dark pills, and hero text over photography.
- **Link Blue** (`{colors.link-blue}` — #1890ff): "Learn More ›" and "Buy Now ›" text links on product and explore cards.
- **Tier Orange** (`{colors.tier-orange}` — #be4e04): small eyebrows that mark product rank.
- **Badge Orange** (`{colors.badge-orange}` — #fa8c16): the corner badge on a highlighted store option.

### Surface
- **Canvas** (`{colors.canvas}`): page background, nav, cards, purchase bar.
- **Canvas Soft** (`{colors.canvas-soft}` — #f7f9fa): feature-link band, store panels, In the Box tiles, footnote panel and the store footer.
- **Panel** (`{colors.panel}` — #f6f8f9): the product benefits panel.
- **Fog** (`{colors.fog}` — #f5f5f5): Explore More band, product-card backdrop and the Other Regions pill.
- **Announce** (`{colors.announce}` — #fafafa): announcement bar and the category icon strip.
- **Media Black** (`{colors.media-black}`): store feature media tiles.
- **Footer** (`{colors.footer}` — #272727), with **Footer Pill** (`{colors.footer-pill}` — #383838) and **Footer Divider** (`{colors.footer-divider}` — #414141).
- **Lines**: `{colors.hairline}` (#f0f0f0) tab track, `{colors.divider}` (#e8e8e8) FAQ and purchase-bar rules, `{colors.card-border}` (#d9d9d9) option cards, `{colors.dashed-border}` (#dddddd) unavailable option, `{colors.input-border}` (#d4d7d9) store email field, `{colors.control-border}` (#cccccc) steppers and checkboxes.

### Text
- **Ink** (`{colors.ink}` — #262626): headings and body on white.
- **Ink Secondary** (`{colors.ink-secondary}` — #595959): secondary copy, inactive tabs.
- **Ink Tertiary** (`{colors.ink-tertiary}` — #8c8c8c): product-tile eyebrows.
- **Store Ink** (`{colors.store-ink}` — #333333): store product and option titles.
- **Graphite** (`{colors.graphite}` — #3b3e40): store body copy and section headings.
- **Nav Ink** (`{colors.nav-ink}` — #303233): nav labels on the white header.
- **Slate** (`{colors.slate}` — #6c7073): store footer links and the dark footer's field border.
- **Steel** (`{colors.steel}` — #9fa3a6): spec captions in the comparison table.
- **Footer Link** (`{colors.footer-link}` — #b3b3b3): links on the charcoal footer.

### Semantic
- **Error** (`{colors.error}` — #f5222d): "Out of Stock" on unavailable store options.

## Typography

### Font Family
**Open Sans** is the single family across the brand site and the store. Hierarchy comes from size and a narrow weight range (400 for body, links and buttons; 500 for feature titles; 600 for headings and store titles). Letter-spacing is consistently negative: about −0.02em at body sizes and −0.03em at heading sizes, which gives the type a compact, technical feel. Large product names on the photo tiles appear as logotype artwork and are not part of the type scale.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 48px | 600 | 1.08 | −1.44px | Category page title ("Camera Drones") |
| `{typography.display}` | 40px | 600 | 1.2 | −1.2px | Section headings ("Popular Drone Comparisons", "Explore More") |
| `{typography.spec-value}` | 40px | 400 | 1.2 | −1.2px | Comparison spec values ("1063 g", "100 MP") |
| `{typography.heading}` | 32px | 600 | 1.125 | −0.96px | Store product title, store and home section headings |
| `{typography.card-title-lg}` | 32px | 500 | 1.125 | 0 | Field-card titles over photography |
| `{typography.news-title}` | 28px | 600 | 1.14 | 0 | Editorial/news card titles |
| `{typography.title-md}` | 24px | 600 | 1.17 | −0.72px | Explore card titles |
| `{typography.product-name}` | 24px | 400 | 1.17 | −0.72px | Model names in the comparison table |
| `{typography.price}` | 20px | 600 | 1.2 | −0.4px | Purchase-bar price |
| `{typography.subhead}` | 20px | 600 | 1.2 | −0.6px | Store sub-sections ("Select Option") |
| `{typography.feature-title}` | 20px | 500 | 1.4 | 0 | Feature-link band titles |
| `{typography.option-title}` | 18px | 600 | 1.33 | −0.36px | Store option titles |
| `{typography.body}` | 16px | 400 | 1.5 | −0.32px | Body copy, card text links |
| `{typography.button}` | 16px | 400 | 1.25 | −0.32px | Pill button labels |
| `{typography.faq}` | 16px | 600 | 1.5 | −0.32px | FAQ questions |
| `{typography.ui}` | 14px | 400 | 1.43 | −0.28px | Tabs, store lists, hero ghost labels, inline links |
| `{typography.nav}` | 14px | 400 | 1.0 | −0.28px | Top navigation and nav pills |
| `{typography.caption}` | 12px | 400 | 1.33 | −0.24px | Tier eyebrows, category labels, footnotes |
| `{typography.badge}` | 12px | 600 | 1.33 | −0.24px | Option corner badge |
| `{typography.footer-heading}` | 12px | 500 | 2.0 | 0 | Footer column headings |
| `{typography.micro}` | 10px | 600 | 1.8 | −0.2px | DJI Care tag |

### Principles
- Tight tracking at every size makes long product names and spec values sit as compact blocks.
- Weight is used sparingly: headings at 600, everything functional at 400, so blue pills and photography carry the emphasis.
- Spec values use the display size at regular weight, letting numbers like "1063 g" read as large, calm data rather than shouting headlines.

### Note on Font Substitutes
Open Sans is open source on Google Fonts. Keep the negative tracking (−0.02em to −0.03em); without it the type looks noticeably looser than the brand.

## Layout

### Spacing System
- **Base unit**: 4px, mostly in 8px steps.
- **Tokens (front matter)**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 20px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px · `{spacing.xxxl}` 40px · `{spacing.huge}` 48px · `{spacing.section}` 64px.
- Product tiles are separated by `{spacing.md}` white gutters; option cards pad `{spacing.xl}`; the feature-link band pads `{spacing.section}` vertically; the footer pads `{spacing.xxl}` by `{spacing.md}`.

### Grid & Container
- Home and category tiles run full width minus a small outer gutter, two-up below the hero; editorial and field cards run two-up and three-up.
- The comparison table is four columns; explore and support cards are two-up inside a 1200px container.
- The store product page splits into a large photo gallery on the left and a 500px purchase column on the right.

### Whitespace Philosophy
Photography fills the tiles; whitespace appears as consistent gutters and generous gaps above centred section headings. Inside the store, whitespace groups options into cards and panels rather than separating long sections.

### Responsive Strategy

#### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Wide | ≥ 1200px | Full desktop grids, 1200px store container |
| Desktop | 1024–1199px | Store gallery and purchase column tighten |
| Tablet | 769–1023px | Nav condenses; two-up tiles remain |
| Mobile | ≤ 768px | Nav collapses to a menu; tiles, comparison columns and the store split stack to one column |
| Small | ≤ 456px | Compact type and tile heights |

#### Touch Targets
Store CTAs (`button-store-buy`, `button-store-cart`) and `button-outline-lg` are 48px tall; `button-primary` and `button-outline` are 40px; nav pills are 32px and rely on generous horizontal padding. FAQ rows are about 49px tall.

#### Collapsing Strategy
- The nav collapses to a menu; the Store pill stays visible.
- Two-up product tiles and field cards stack to one column; the comparison table becomes horizontally scrollable columns.
- The store gallery stacks above the purchase column; the sticky `purchase-bar` keeps price and both CTAs reachable.

#### Image Behavior
Hero images are full-bleed carousels with slide titles at the lower left; tile renders are centred studio cut-outs on soft grey; editorial cards use cropped landscape photography. Images load lazily as tiles scroll into view.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow | Tiles, cards, bands, footer |
| Outlined | 1px border (`{colors.card-border}`, `{colors.divider}`, ink outline pills) | Option cards, FAQ rows, outline buttons |
| Selected | 2px `{colors.store-blue}` ring | Selected store option |
| Floating | Soft shadow, 0 8px 16px at 10% black | Floating circular buttons (support, back to top), the sticky purchase bar |

Elevation is rare. The site relies on photography and flat grey bands for depth, and keeps shadows for elements that genuinely float over content.

### Decorative Depth
Depth comes from the product renders themselves: soft-lit studio shots with gentle floor shadows on grey gradients, and dramatic dark hero backdrops. Store feature tiles use pure black (`{colors.media-black}`) behind product renders and lifestyle photography.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Photo tiles, cards, media tiles, bands |
| `{rounded.xs}` | 4px | DJI Care tag |
| `{rounded.sm}` | 8px | Store option cards, benefits panel, Compare Options |
| `{rounded.xl}` | 60px | Product-card Buy Now / Learn More pills |
| `{rounded.xxl}` | 64px | Hero ghost pills |
| `{rounded.pill}` | 100px | Region pill, media toggle, Download App |
| `{rounded.full}` | 9999px | Store pill, store CTAs, large outline pill, dark pill |

Floating support and back-to-top buttons are perfect circles. The orange option badge rounds only its bottom-left corner (8px), and email fields round only their left corners (4px) where they meet a square submit button.

### Photography Geometry
Product tiles are square-cornered and close to 1:1 on the home page; category cards are similar large squares on a grey backdrop. Field and editorial cards use landscape crops. Store galleries use a large landscape frame with thumbnail strips; In the Box tiles are square.

## Components

> **No hover states documented.** Each component below documents its resting state only.

### Navigation

**`announcement-bar`** — slim strip above the nav
- Background `{colors.announce}`, text `{colors.ink}` in `{typography.ui}`, a `text-link` ("Shop Now ›") and a close icon.

**`nav-bar-overlay`** — the home nav over the hero photo
- Transparent, white `{typography.nav}` labels, 64px tall; logo left, category links, then search, account, `region-pill` and `button-store-pill` at right.

**`nav-bar`** — the white nav on inner pages
- Background `{colors.canvas}`, labels in `{colors.nav-ink}` `{typography.nav}`, 64px tall.

**`button-store-pill`** — the blue Store button in the nav
- Background `{colors.primary}`, text `{colors.on-primary}` in `{typography.nav}`, `{rounded.full}`, padding 8px 16px 8px 34px (room for a bag icon), 32px tall.

**`region-pill`** — "Other Regions" selector
- Background `{colors.fog}`, text `{colors.ink}` in `{typography.nav}`, `{rounded.pill}`, padding 0 `{spacing.sm}`, 32px tall, with a globe icon.

**`store-nav`** — store header
- Background `{colors.canvas}`, `{typography.ui}` category links with a 2px indicator, a `care-tag` beside "Services", and search, cart and account icons.

**`category-strip`** — icon row under the category-page nav
- Background `{colors.announce}`, 124px tall, product icons over `{typography.caption}` labels.

### Buttons

**`button-primary`** — blue pill ("Buy Now", active model selector, "Where to Buy")
- Background `{colors.primary}`, text `{colors.on-primary}` in `{typography.button}`, `{rounded.xl}`, padding 0 `{spacing.md}`, 40px tall.

**`button-outline`** — outline pill ("Learn More", inactive model selector)
- Transparent, 1px `{colors.ink}` border, text `{colors.ink}` in `{typography.button}`, `{rounded.xl}`, padding 0 15px, 40px tall.

**`button-outline-lg`** — larger outline pill ("Compare DJI Camera Drones ›")
- 1px `{colors.ink}` border, `{typography.button}`, `{rounded.full}`, padding 14px `{spacing.md}`, 48px tall.

**`button-hero-ghost`** — white ghost pill over hero photography ("Learn More ›", "Buy Now ›")
- Transparent, 1px `{colors.on-primary}` border and text, `{typography.ui}`, `{rounded.xxl}`, padding 5px `{spacing.md}`, 32px tall.

**`button-store-buy`** — store Buy Now
- Background `{colors.store-blue}`, text `{colors.on-primary}` in `{typography.button}`, `{rounded.full}`, padding 14px `{spacing.xxl}`, 48px tall.

**`button-store-cart`** — store Add to Cart
- Background `{colors.store-blue-tint}`, text `{colors.store-blue}`, same shape as `button-store-buy`. The pair always sits side by side, cart first.

**`button-dark-pill`** — compact dark pill ("switch now")
- Background `{colors.ink}`, text `{colors.on-primary}` in `{typography.ui}`, `{rounded.full}`, padding 6px `{spacing.sm}`, 32px tall.

**`button-download-app`** — footer pill ("Download App")
- Background `{colors.footer-pill}`, text `{colors.on-primary}` in `{typography.button}`, `{rounded.pill}`, padding 10px `{spacing.md}`, 40px tall.

**`compare-options-button`** — full-width store panel button ("Compare Options")
- Background `{colors.canvas-soft}`, text `{colors.ink}` in `{typography.ui}`, `{rounded.sm}`, padding `{spacing.xl}`, with a blue circular chevron at right.

**`text-link`**, **`text-link-store`**, **`card-text-link`** — inline links
- `{colors.primary}` on the brand site, `{colors.store-blue}` in the store, and `{colors.link-blue}` "Learn More ›" on product and explore cards; all followed by a small chevron.

### Cards & Containers

**`product-tile`** — home and category photo tile
- `{colors.fog}`-toned studio render at `{rounded.none}`, separated by `{spacing.md}` white gutters. A centred `tile-eyebrow`, a logotype product name, a short tagline and two text links or pills sit above the render.

**`tile-eyebrow`** — tile kicker ("Beginner-Friendly Camera Drones")
- `{colors.ink-tertiary}` in `{typography.ui}`.

**`tier-eyebrow`** — product rank label ("Flagship", "Triple-Lens Flagship Camera Drone")
- `{colors.tier-orange}` in `{typography.caption}`.

**`product-card`** — category-page product card
- `{colors.fog}` backdrop, square corners, `tier-eyebrow` above the logotype name, a tagline, then `button-primary` + `button-outline` side by side over the render.

**`comparison-tabs`** + **`comparison-tab-active`** — table switcher ("Aerial Imaging", "Immersive Flight")
- Inactive tabs in `{colors.ink-secondary}`, active tab in `{colors.ink}` with an ink underline, on a 1px `{colors.hairline}` track, `{typography.ui}`.

**`spec-column`** + **`spec-caption`** — comparison column
- Product render, `tier-eyebrow`, model name in `{typography.product-name}`, a `button-primary` "Where to Buy" and a `card-text-link`, then stacked spec rows: icon, value in `{typography.spec-value}` and caption in `{colors.steel}`.

**`explore-card`** — white card on the `{colors.fog}` band
- Background `{colors.canvas}`, square corners, photo on top, centred title in `{typography.title-md}`, one-line description and a `card-text-link`.

**`field-card`** — photo card with overlaid title ("Video Production", "Enterprise")
- Full photo, white title in `{typography.card-title-lg}`, subtitle and "Learn More ›" in white, square corners.

**`news-card`** — editorial photo card
- Light photo with a `tile-eyebrow`, title in `{typography.news-title}` and a text link, square corners.

**`feature-link-band`** — "Where to Buy / Support / Fly Safe" band
- Background `{colors.canvas-soft}`, padding `{spacing.section}` vertical, three centred columns of outline icon, title in `{typography.feature-title}` and a link.

**`media-tile`** — store feature tile
- Background `{colors.media-black}`, white heading and paragraph over product renders or lifestyle photography, square corners, arranged in mixed one- and two-column rows.

**`in-box-tile`** — "In the Box" item
- Background `{colors.canvas-soft}`, square product cut-out, name below in `{typography.ui}` and a "× 1" count.

**`footnote-panel`** — numbered spec footnotes
- Background `{colors.canvas-soft}`, `{typography.caption}` in `{colors.ink-secondary}`.

### Store Purchase Components

**`benefits-panel`** — shipping and feature summary beside the title
- Background `{colors.panel}`, text `{colors.graphite}` in `{typography.ui}`, padding `{spacing.md}`, `{rounded.sm}` container, icon-led lists with a chevron.

**`option-card`** + **`option-card-active`** + **`option-card-disabled`** — selectable product option
- Background `{colors.canvas}`, `{rounded.sm}`, title in `{typography.option-title}` `{colors.store-ink}` beside a product thumbnail, price below. Default has a 1px `{colors.card-border}` border and `{spacing.xl}` padding; selected has a 2px `{colors.store-blue}` ring with 23px padding; unavailable has a 1px dashed `{colors.dashed-border}` border and a red "Out of Stock" line in `{colors.error}`.

**`option-badge`** — corner badge on a highlighted option
- Background `{colors.badge-orange}`, white `{typography.badge}`, padding 2px `{spacing.xs}`, rounded only at the bottom-left (8px), pinned to the card's top-right corner.

**`care-tag`** — small "DJI Care" tag in the store nav
- Background `{colors.store-blue}`, white `{typography.micro}`, `{rounded.xs}`, padding 0 `{spacing.xxs}`.

**`media-toggle`** + **`media-toggle-active`** — gallery switch ("Photos" / "Intro")
- `{rounded.pill}`, padding `{spacing.xs}` by `{spacing.md}`, 32px tall; active fills `{colors.ink}` with a white label, inactive is plain text.

**`quantity-stepper`** — accessory quantity control
- Minus, value and plus cells outlined in `{colors.control-border}`, `{typography.ui}`.

**`purchase-bar`** — sticky bar with delivery, price and CTAs
- Background `{colors.canvas}`, 1px `{colors.divider}` rule, soft shadow, padding `{spacing.md}` vertical; delivery selector at left, price in `{typography.price}`, then `button-store-cart` + `button-store-buy` at right.

**`region-banner`** — region suggestion bar at the top of the store
- Background `{colors.canvas}`, text `{colors.graphite}` in `{typography.ui}`, padding `{spacing.lg}` by `{spacing.sm}`, close icon at left and a `button-dark-pill` at right.

**`faq-row`** — FAQ question row
- Question in `{typography.faq}` `{colors.ink}`, chevron at right, 1px `{colors.divider}` rule beneath.

### Inputs & Forms

**`newsletter-input`** — footer email field on the dark footer
- Transparent, white `{typography.ui}` text, 1px `{colors.slate}` border rounded only on the left (4px), padding 4px 0 4px `{spacing.sm}`, 32px tall, joined to a square grey submit button.

### Signature Components

**`floating-circle-button`** — floating support and back-to-top buttons
- 40px circles in `{colors.canvas}` with an ink icon and the soft floating shadow, pinned at the right edge.

### Footer

**`footer`** — brand-site footer
- Background `{colors.footer}`, padding `{spacing.xxl}` by `{spacing.md}`. A "Only in the DJI Store App" row with `button-download-app` sits above `{colors.footer-divider}` rules, then six link columns with `{typography.footer-heading}` headings in white and links in `{colors.footer-link}`, a subscribe field, social icons and a legal row.

**`footer-store`** — store footer
- Background `{colors.canvas-soft}`, headings in `{colors.graphite}`, links in `{colors.slate}` `{typography.caption}`, a subscribe field outlined in `{colors.input-border}` and a legal row.

### Examples (illustrative)

> Illustrative demonstration surfaces. Each `ex-*` entry is composed only from the brand-native primitives above (store `option-card` shape, `button-primary` / `button-store-buy` pills, `canvas` / `canvas-soft` surfaces and the Open Sans roles), so the same ten example surfaces re-skin consistently in DJI's colours, radii and spacing.

**`ex-pricing-tier`** — Default Pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface.
- Properties: `backgroundColor`, `textColor`, `borderColor`, `rounded`, `padding`

**`ex-pricing-tier-featured`** — Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode).
- Properties: `backgroundColor`, `textColor`, `rounded`, `padding`

**`ex-product-selector`** — Color/size picker chrome — fashion / DTC variant selector.
- Properties: `backgroundColor`, `rounded`, `padding`

**`ex-cart-drawer`** — Shopping cart drawer — DTC / fashion brand actual cart chrome.
- Properties: `backgroundColor`, `rounded`, `padding`, `item-divider`

**`ex-app-shell-row`** — Sidebar nav row inside the App Shell example. Active state uses brand primary as the indicator.
- Properties: `backgroundColor`, `activeIndicator`, `rounded`, `padding`

**`ex-data-table-cell`** — Default data-table th + td chrome. Header uses mono-caps eyebrow typography; body uses body-sm.
- Properties: `headerBackground`, `headerTypography`, `bodyTypography`, `cellPadding`, `rowBorder`

**`ex-auth-form-card`** — Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside.
- Properties: `backgroundColor`, `rounded`, `padding`

**`ex-modal-card`** — Modal dialog surface — same chrome as feature-card with elevated shadow.
- Properties: `backgroundColor`, `rounded`, `padding`

**`ex-empty-state-card`** — Empty-state illustration frame.
- Properties: `backgroundColor`, `rounded`, `padding`, `captionTypography`

**`ex-toast`** — Toast notification surface — feature-card shape + medium shadow.
- Properties: `backgroundColor`, `rounded`, `padding`, `typography`


## Do's and Don'ts

### Do
- Let product photography fill square, gutter-separated tiles; keep text centred above the render.
- Use `{colors.primary}` (brand site) or `{colors.store-blue}` (store) for every primary action, always as a pill.
- Pair a filled blue pill with a 1px `{colors.ink}` outline pill for the secondary action.
- Use white `button-hero-ghost` pills over dark hero photography.
- Set all text in Open Sans with slight negative tracking, and use the ink opacity steps (`{colors.ink}`, `{colors.ink-secondary}`, `{colors.ink-tertiary}`) for hierarchy.
- Mark product rank with a small `tier-eyebrow` in `{colors.tier-orange}`.
- In the store, group choices into `{rounded.sm}` option cards and show selection with a 2px `{colors.store-blue}` ring.
- Close pages with the `{colors.footer}` footer on the brand site and `{colors.canvas-soft}` in the store.

### Don't
- Don't round photo tiles, cards or media tiles; only pills, option cards and small tags are rounded.
- Don't use more than one blue on the same surface; the brand site and the store each have their own.
- Don't use orange for buttons or large fills; it is reserved for small rank labels and the option badge.
- Don't use pure black for text; use `{colors.ink}`.
- Don't add drop shadows to tiles or cards; keep shadows for floating buttons and the sticky purchase bar.
- Don't set headings heavier than 600 or track type positively.
