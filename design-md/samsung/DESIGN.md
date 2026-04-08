# Design System Inspiration of Samsung

## 1. Visual Theme & Atmosphere

Samsung’s website presents a bold, structured, and scalable design system built around premium accessibility. The visual language emphasizes strong hierarchy, high contrast, and large architectural content blocks.

The system relies on a dual-typeface strategy:

* **Samsung Sharp Sans** for display and hero content
* **SamsungOne** for body text and UI

Design is driven by contrast between light and dark sections, with strong use of white, black, and light gray backgrounds, complemented by controlled use of blue accents.

> Note: Samsung proprietary fonts are not publicly available; fallback fonts are used for implementation.

**Key Characteristics:**

* Dual typeface system (display vs UI)
* Full-width, block-based layout structure
* Alternating white, light gray, and black sections
* Pill-shaped primary buttons
* Strong visual hierarchy with large typography
* Product-focused imagery with minimal framing
* Bold inline links with thick underline interactions

---

## 2. Color Palette & Roles

### Primary Brand Colors

* **Samsung Blue (Brand)**: `#1428a0`
* **Electric Blue (Primary Interactive)**: `#0072ea`
* **Electric Blue (Secondary Interactive)**: `#2189ff`
* **Pure Black**: `#000000`
* **Pure White**: `#ffffff`

### Surfaces & Backgrounds

* **Light Gray**: `#f4f4f4`
* **Alternate Light Gray**: `#f7f7f7`
* **Dark Surface 1**: `#1c1c1c`
* **Dark Surface 2**: `#262626`

### Text Colors

* **Primary Text (Light)**: `#000000`
* **Secondary Text (Light)**: `#767676`
* **Primary Text (Dark)**: `#ffffff`
* **Secondary Text (Dark)**: `#a1a1a1`

### Interactive States

* **Hover (Dark Button)**: `#333333`
* **Focus Ring**: `2px solid #0072ea`

> Values are approximated based on visual inspection of the live site.

---

## 3. Typography

### Font Families

* **Display**: `Samsung Sharp Sans`, fallback: `Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif`
* **Body/UI**: `SamsungOne`, fallback: `Inter, Roboto, Helvetica Neue, Helvetica, Arial, sans-serif`

### Type Scale

| Role          | Font       | Size | Weight | Line Height |
| ------------- | ---------- | ---- | ------ | ----------- |
| Hero Title    | Sharp Sans | 56px | 700    | 1.15        |
| Section Title | Sharp Sans | 40px | 700    | 1.20        |
| Card Title    | Sharp Sans | 24px | 700    | 1.25        |
| Sub-heading   | SamsungOne | 20px | 600    | 1.30        |
| Body          | SamsungOne | 16px | 400    | 1.50        |
| Body Emphasis | SamsungOne | 16px | 600    | 1.50        |
| Label         | SamsungOne | 14px | 700    | 1.40        |
| Caption       | SamsungOne | 12px | 400    | 1.40        |

### Principles

* Tight or neutral letter spacing (`0 to -0.02em`)
* Strong contrast between heading (700) and body (400)
* High readability and scannability

---

## 4. Components

### Buttons

**Primary (Light Background)**

* Background: `#000000`
* Text: `#ffffff`
* Padding: `12px 24px`
* Radius: `999px`
* Font: 16px, weight 700
* Hover: `#333333`

**Primary (Dark Background)**

* Background: `#ffffff`
* Text: `#000000`
* Hover: `#e0e0e0`

**Secondary (Outline)**

* Background: `transparent`
* Border: `2px solid`
* Radius: `999px`

### Text Links

* Color: `#000000` or `#ffffff`
* Style: Bold with thick underline on hover
* Underline:

  * Thickness: `2px`
  * Offset: `4px`

---

### Cards

* Background: `#ffffff` or `#f4f4f4`
* Dark Mode: `#1c1c1c`
* Radius: `16px – 24px`
* Shadow: `0px 8px 24px rgba(0,0,0,0.08)` or none

---

### Navigation

* Height: `64px – 80px`
* Background: `#ffffff`
* Border: `1px solid #ebebeb`
* Style: Minimal, no heavy shadows

---

## 5. Layout & Spacing

* Block-based sectioning using color contrast
* Large internal spacing: `40px – 64px`
* Full-width sections with clear separation
* Generous whitespace around key elements

### Border Radius Scale

* Small UI: `8px`
* Cards: `16px – 24px`
* Buttons: `999px`

---

## 6. Depth & Elevation

Depth is achieved through:

1. Color contrast
2. Border radius
3. Minimal shadow usage

Samsung favors a **flat-but-separated** design approach.

---

## 7. Do’s and Don’ts

### Do

* Use strong contrast between sections
* Emphasize primary CTAs with pill buttons
* Keep layouts clean and spacious
* Use bold typography for hierarchy

### Don’t

* Overuse brand blue
* Use small border radii on large components
* Add unnecessary visual clutter in hero sections

---

## 8. Agent Prompt Guide

### Quick Reference

* Background: `#f4f4f4` or `#000000`
* CTA (Light): black pill button
* CTA (Dark): white pill button
* Card: `#ffffff` or `#1c1c1c`
* Secondary Text: `#767676`
* Accent: `#0072ea`

---

### Example Prompts

* "Create a Samsung-style hero section with a light gray background (#f4f4f4), a bold 56px heading, and a black pill CTA."
* "Design a product grid with white cards, 24px radius, and bold headings."
* "Build a dark section with black background, white text, and a white pill CTA."
