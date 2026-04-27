# Design System Inspired by Dropbox

## 1. Visual Theme & Atmosphere
- **Mood**: High-contrast, vibrant, and structured yet playful.
- **Philosophy**: "The world needs your creative energy." Dropbox uses a "Playground" aesthetic that mixes stark utility with bursts of expressive color and asymmetric layouts.
- **Density**: Spacious with generous padding (8px grid) and clear separation between content blocks.
- **Surfaces**: Primarily flat. Depth is achieved through layering and high-contrast color blocks rather than complex shadows.

## 2. Color Palette & Roles

### Background Surfaces
| Role | Name | Hex | Usage |
| :--- | :--- | :--- | :--- |
| **Surface (Primary)** | White | `#FFFFFF` | Main page background and inverse text. |
| **Surface (Secondary)**| Coconut | `#F7F5F2` | Backgrounds for cards, secondary sections, and UI containers. |

### Text & Content
| Role | Name | Hex | Usage |
| :--- | :--- | :--- | :--- |
| **Primary Text** | Graphite | `#1E1919` | All primary headings and body text. |

### Brand & Accent
| Role | Name | Hex | Usage |
| :--- | :--- | :--- | :--- |
| **Primary Accent** | Dropbox Blue | `#0061FE` | Primary buttons, links, active states, brand marks. |

### Expressive Accents (Marketing & Illustration)
- **Azalea**: `#CD2F7B`
- **Sunset**: `#FA551E`
- **Vivid Vargas**: `#FAD24B`
- **Canopy**: `#0F503C`
- **Ocean**: `#007891`
- **Zen**: `#14C8EB`
- **Lime**: `#B4DC19`

## 3. Typography & Type Scale

### Font Families
- **Display/Headings**: `Sharp Grotesk` (Fallback: `Inter`, `system-ui`)
- **Body/UI**: `Atlas Grotesk` (Fallback: `Inter`, `sans-serif`)

### Type Hierarchy
| Element | Font Weight | Size | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- |
| **Display H1** | Bold (700+) | `48px` - `56px` | `1.1` | `-0.02em` |
| **Heading H2** | Bold (700) | `32px` | `1.2` | `-0.01em` |
| **Heading H3** | Bold (700) | `24px` | `1.3` | `normal` |
| **Body Large** | Regular (400) | `18px` | `1.5` | `normal` |
| **Body Regular** | Regular (400) | `16px` | `1.5` | `normal` |
| **Button/Label** | Medium (600) | `16px` | `1.0` | `0.01em` |
| **Caption** | Regular (400) | `14px` | `1.4` | `normal` |

## 4. Core Components

### Buttons
- **Primary**:
  - Background: `#0061FE`
  - Text: `#FFFFFF`
  - Border Radius: `4px`
  - Padding: `16px 24px` (Large), `12px 16px` (Small)
  - Hover: Background `#0055DD`
- **Secondary (Outline)**:
  - Border: `1px solid #1E1919`
  - Background: `transparent`
  - Text: `#1E1919`
  - Border Radius: `4px`
  - Hover: Background `#F7F5F2`
- **Ghost**:
  - Text: `#0061FE`
  - Hover: Text-decoration `underline`

### Cards
- **Container**:
  - Background: `#F7F5F2` (Coconut)
  - Border: `none`
  - Border Radius: `8px`
  - Padding: `32px`
- **Interaction**: Subtle scale up on hover (`transform: scale(1.02)`) without adding shadows.

### Inputs
- **Field**:
  - Border: `1px solid #D0D0D0`
  - Border Radius: `4px`
  - Padding: `12px 16px`
  - Focus: Border `2px solid #0061FE`, outline `none`.

## 5. Spacing & Layout
- **Grid**: 12-column flexible grid.
- **Spacing Scale**: 8px base (DWG).
  - `4px`, `8px`, `16px`, `24px`, `32px`, `48px`, `64px`, `80px`.
- **Containers**: Max width `1280px` for content, with `24px` or `40px` side margins.
- **Asymmetry**: Use offset columns and "floating" elements to create a dynamic, layered feel.

## 6. Depth & Elevation
- **Philosophy**: Avoid traditional material shadows.
- **Elevation Layers**:
  - **Level 0 (Base)**: `#FFFFFF`
  - **Level 1 (Sub-section)**: `#F7F5F2`
  - **Level 2 (Overlay)**: Solid black or brand color with `4px` offset (rare).
- **Shadows**: Use sparingly. When needed: `box-shadow: 0 4px 12px rgba(0,0,0,0.08)`.

## 7. Do's and Don'ts

### ✅ Do
- Use high contrast between text and background.
- Embrace bold, large-scale typography for headlines.
- Use Sharp Grotesk for marketing moments and Atlas Grotesk for functional UI.
- Use the 8px spacing scale strictly.

### ❌ Don't
- Use gradients for backgrounds (keep them solid).
- Overuse rounded corners (keep them crisp at 4-8px).
- Add heavy drop shadows to cards.
- Use generic blues or grays (stick to Graphite and Dropbox Blue).

## 8. Responsive Behavior
- **Mobile (<768px)**: Stack columns vertically, reduce H1 size to `36px`, increase touch targets to `48px` minimum height.
- **Tablet (768px - 1024px)**: Use 2-column layouts, horizontal padding `24px`.
- **Desktop (>1024px)**: Full multi-column flexibility, horizontal padding `40px`.

## 9. Agent Prompt Guide
- **Quick Reference**: "Primary: #0061FE, Text: #1E1919, Surface: #F7F5F2, Radius: 4px, Font: Inter/Grotesk."
- **Prompt Snippet**: "Build this using the Dropbox design language: flat surfaces, no shadows, bold Sharp Grotesk style headings, Graphite text on Coconut backgrounds, and Primary Blue buttons with 4px radius."
