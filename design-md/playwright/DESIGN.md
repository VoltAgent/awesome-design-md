# Playwright - DESIGN.md

## 1. Visual Theme & Atmosphere

Playwright website follows a clean, documentation-first design approach focused on clarity and developer productivity.

The interface emphasizes:
- readability over decoration
- fast scanning of content
- minimal visual noise
- technical precision

The overall feeling is:
**practical, structured, lightweight, developer-oriented**

---

## 2. Color Palette & Roles

| Name | Hex | Role |
|------|-----|------|
| Background | #FFFFFF | Main background |
| Text Primary | #1F2937 | Main text |
| Text Secondary | #6B7280 | Secondary text |
| Accent | #2F74C0 | Links, highlights |
| Border | #E5E7EB | Dividers |
| Code Background | #F6F8FA | Code blocks |

---

## 3. Typography Rules

- Font family: system-ui, sans-serif
- Headings: bold, clear hierarchy
- Body text: medium weight, high readability
- Code: monospace

Hierarchy:

| Element | Style |
|--------|------|
| H1 | Large, bold |
| H2 | Medium bold |
| Body | Regular |
| Code | Monospace |

---

## 4. Component Stylings

### Buttons
- Minimal styling
- Subtle hover
- No heavy shadows

### Links
- Accent color
- Underline on hover

### Code blocks
- Light background
- Rounded corners
- Monospace font

### Navigation
- Sidebar-driven
- Clear hierarchy
- Collapsible sections

---

## 5. Layout Principles

- Left sidebar navigation
- Main content centered
- Wide reading column
- Generous vertical spacing

Grid:
- Max-width container
- Responsive layout

---

## 6. Depth & Elevation

- Flat design
- Minimal shadows
- Focus on structure, not depth

---

## 7. Do's and Don'ts

### Do:
- Keep UI minimal
- Prioritize readability
- Use consistent spacing

### Don’t:
- Add unnecessary decorations
- Overuse colors
- Break content hierarchy

---

## 8. Responsive Behavior

- Sidebar collapses on mobile
- Content becomes single column
- Code blocks scroll horizontally

---

## 9. Agent Prompt Guide

Use this design for:
- documentation websites
- developer portals
- API documentation

Prompt example:

"Build a documentation page with a clean layout, left sidebar navigation, minimal colors, and strong focus on readability similar to Playwright documentation."