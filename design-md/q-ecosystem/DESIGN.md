---
version: alpha
name: Q Ecosystem Design System (cyberpunk-kawaii)
description: >
  Design language for the Q Ecosystem — a self-hosted AI agent infrastructure
  (Hermes Agent, MCP servers, Q Control Panel). Cyberpunk-kawaii: deep navy
  canvas, electric blue primary, gold accent, muted surfaces. NO rainbow palette,
  NO green, NO high-saturation noise. Functional-first, terminal-native, dark UI
  that reads like a mission-control console but feels friendly (kawaii microcopy).
  Built for dashboards, control panels, and agent UIs — not marketing sites.

colors:
  primary: "#003F7A"          # Q Deep Blue — primary actions, links, headers
  accent: "#F5C518"           # Q Gold — highlights, active states, badges, CTAs
  canvas: "#212121"           # Deep charcoal — app background, panels
  surface: "#2a2a2a"          # Raised panel / card surface
  surface-soft: "#333333"     # Inset / secondary panel
  border: "#3d3d3d"           # Hairline dividers, input borders
  ink: "#e8e8e8"              # Primary text on dark
  ink-soft: "#9a9a9a"         # Secondary text, labels, timestamps
  on-primary: "#ffffff"        # Text on blue / gold
  danger: "#d64545"           # Errors, destructive (muted red, NOT alarm-red)
  warn: "#e0a030"             # Warnings (amber, not yellow)
  ok: "#4a9e6f"               # Success (muted green-teal, used sparingly)
  info: "#3a7ca5"             # Informational accents

typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.5px
  heading:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.4
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0.5px
    textTransform: uppercase

rounded:
  sm: 4px
  md: 8px
  lg: 12px
  pill: 999px

spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px

components:
  button-primary:
    background: "#003F7A"
    color: "#ffffff"
    border: "1px solid #0050a0"
    radius: 8px
    padding: "8px 16px"
    fontWeight: 600
    hover: "background #0050a0, glow 0 0 12px rgba(0,63,122,0.4)"
  button-accent:
    background: "#F5C518"
    color: "#212121"
    border: "none"
    radius: 8px
    padding: "8px 16px"
    fontWeight: 700
    hover: "background #ffcf3a"
  panel:
    background: "#2a2a2a"
    border: "1px solid #3d3d3d"
    radius: 12px
    padding: 16px
  input:
    background: "#212121"
    border: "1px solid #3d3d3d"
    color: "#e8e8e8"
    radius: 8px
    padding: "8px 12px"
    focus: "border #003F7A, box-shadow 0 0 0 2px rgba(0,63,122,0.3)"
  badge:
    background: "#003F7A"
    color: "#F5C518"
    radius: 999px
    padding: "2px 8px"
    fontSize: 11px
    fontWeight: 700
  status-dot:
    online: "#4a9e6f"
    offline: "#d64545"
    idle: "#e0a030"
    size: 8px
    radius: 999px

tone:
  voice: "Direct, technical, friendly. Short sentences. Emoji sparingly (🔧 ✅ ⚠️). No corporate fluff."
  microcopy: "Status-first. 'Service up', 'Sync OK', 'Auth failed — check vault'. No 'Oops!'."
  terminal-native: "Monospace for IDs, ports, paths. Code-like rendering for technical values."

patterns:
  dashboard-grid: "CSS grid, 12-col, gap 16px. Panels = cards with status-dot header."
  service-card: "Left: status-dot + name. Right: port badge + health. Footer: last-sync timestamp (mono, ink-soft)."
  nav-topbar: "Sticky. Left: Q logo (gold on blue). Center: module tabs. Right: user/instance switcher."
  empty-state: "Centered. Icon (accent) + one-line label (ink) + one action (button-accent)."
  error-banner: "Full-width, danger bg at 15% opacity, ink text, mono detail below."

forbidden:
  - "Rainbow / multi-hue palettes"
  - "Bright green as primary (ok/success only, muted)"
  - "Neon saturation overload (glow used sparingly, not everywhere)"
  - "Marketing-style hero gradients"
  - "Light mode as default (dark-first; light optional via CSS vars)"
