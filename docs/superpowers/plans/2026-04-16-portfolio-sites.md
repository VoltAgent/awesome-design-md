# Portfolio Sites Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build two self-contained single-file portfolio hero sites for Jordan Ellis — one Figma-inspired (black & white + vibrant gradients), one Lovable-inspired (warm cream + humanist) — each as a standalone `index.html` with all CSS inlined.

**Architecture:** Each site is a single HTML file with a `<style>` block. No JavaScript, no external frameworks, no build step. Both files share the same content and split-hero layout but use entirely separate, brand-faithful CSS. Output lives in `sites/figma/index.html` and `sites/lovable/index.html`.

**Tech Stack:** HTML5, CSS3 (custom properties, flexbox, grid, media queries). Inter font via Google Fonts (Figma site). System-ui stack (Lovable site).

---

### Task 1: Figma site — full HTML + CSS

**Files:**
- Create: `sites/figma/index.html`

- [ ] **Step 1: Create the file with complete markup and styles**

Create `sites/figma/index.html` with the following content in full:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jordan Ellis — Creative Director & Design Engineer</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --black: #000000;
      --white: #ffffff;
      --glass-dark: rgba(0, 0, 0, 0.08);
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background: var(--white);
      color: var(--black);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    /* ── NAV ── */
    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 18px 48px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    }
    .nav-logo {
      font-size: 16px;
      font-weight: 400;
      letter-spacing: -0.14px;
      color: var(--black);
    }
    .nav-links {
      display: flex;
      gap: 28px;
      list-style: none;
    }
    .nav-links a {
      font-size: 14px;
      font-weight: 400;
      letter-spacing: -0.14px;
      color: var(--black);
      text-decoration: none;
    }
    .nav-links a:hover { text-decoration: underline 1px; }
    .nav-links a:focus { outline: dashed 2px var(--black); outline-offset: 2px; }
    .btn-nav {
      background: var(--black);
      color: var(--white);
      padding: 8px 18px;
      border-radius: 50px;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: -0.14px;
      text-decoration: none;
    }
    .btn-nav:focus { outline: dashed 2px var(--black); outline-offset: 3px; }

    /* ── HERO ── */
    .hero {
      flex: 1;
      display: flex;
      align-items: center;
      gap: 56px;
      padding: 72px 48px;
    }
    .hero-left { flex: 1.1; }

    .role-label {
      font-family: 'SF Mono', 'Menlo', 'Monaco', 'Courier New', monospace;
      font-size: 12px;
      font-weight: 400;
      letter-spacing: 0.54px;
      text-transform: uppercase;
      color: var(--black);
      margin-bottom: 24px;
    }

    .display-name {
      font-size: 72px;
      font-weight: 400;
      line-height: 1.0;
      letter-spacing: -1.72px;
      color: var(--black);
      margin-bottom: 24px;
    }

    .tagline {
      font-size: 18px;
      font-weight: 300;
      line-height: 1.45;
      letter-spacing: -0.26px;
      color: var(--black);
      max-width: 340px;
      margin-bottom: 36px;
    }

    .btn-row {
      display: flex;
      gap: 12px;
      align-items: center;
      flex-wrap: wrap;
    }
    .btn-primary {
      background: var(--black);
      color: var(--white);
      padding: 10px 24px;
      border-radius: 50px;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: -0.14px;
      text-decoration: none;
    }
    .btn-primary:focus { outline: dashed 2px var(--black); outline-offset: 3px; }
    .btn-secondary {
      background: var(--glass-dark);
      color: var(--black);
      padding: 10px 24px;
      border-radius: 50px;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: -0.14px;
      text-decoration: none;
    }
    .btn-secondary:focus { outline: dashed 2px var(--black); outline-offset: 3px; }

    /* ── PROJECT GRID ── */
    .hero-right {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }
    .proj-card {
      border-radius: 8px;
      height: 190px;
      display: flex;
      align-items: flex-end;
      padding: 14px;
      overflow: hidden;
    }
    .proj-label {
      font-family: 'SF Mono', 'Menlo', 'Monaco', 'Courier New', monospace;
      font-size: 10px;
      font-weight: 400;
      letter-spacing: 0.54px;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.9);
    }
    .proj-1 { background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%); }
    .proj-2 { background: linear-gradient(135deg, #2d1b69 0%, #11998e 100%); }
    .proj-3 { background: linear-gradient(135deg, #fc466b 0%, #3f5efb 100%); }
    .proj-4 { background: linear-gradient(135deg, #f7971e 0%, #ffd200 100%); }
    .proj-4 .proj-label { color: rgba(0, 0, 0, 0.65); }

    /* ── FOOTER ── */
    footer {
      background: var(--black);
      padding: 20px 48px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .footer-copy {
      font-size: 12px;
      font-weight: 300;
      letter-spacing: -0.1px;
      color: rgba(255, 255, 255, 0.5);
    }
    .footer-links {
      display: flex;
      gap: 20px;
      list-style: none;
    }
    .footer-links a {
      font-size: 12px;
      font-weight: 300;
      letter-spacing: -0.1px;
      color: rgba(255, 255, 255, 0.5);
      text-decoration: none;
    }
    .footer-links a:hover { color: rgba(255, 255, 255, 0.9); }
    .footer-links a:focus { outline: dashed 2px rgba(255, 255, 255, 0.5); outline-offset: 2px; }

    /* ── RESPONSIVE ── */
    @media (max-width: 768px) {
      .nav { padding: 16px 24px; }
      .nav-links { display: none; }
      .hero {
        flex-direction: column;
        align-items: flex-start;
        padding: 48px 24px;
        gap: 40px;
      }
      .hero-left, .hero-right { flex: none; width: 100%; }
      .display-name { font-size: 48px; letter-spacing: -1px; }
      .tagline { max-width: 100%; }
      .proj-card { height: 130px; }
      footer { padding: 16px 24px; flex-wrap: wrap; gap: 12px; }
    }

    @media (max-width: 480px) {
      .display-name { font-size: 40px; letter-spacing: -0.8px; }
      .tagline { font-size: 16px; }
      .hero-right { grid-template-columns: 1fr 1fr; }
    }
  </style>
</head>
<body>

  <nav class="nav">
    <span class="nav-logo">JE</span>
    <ul class="nav-links">
      <li><a href="#">Work</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Writing</a></li>
    </ul>
    <a href="#" class="btn-nav">Contact</a>
  </nav>

  <main class="hero">
    <div class="hero-left">
      <p class="role-label">Creative Director · Design Engineer</p>
      <h1 class="display-name">Jordan<br>Ellis</h1>
      <p class="tagline">I design systems that think and build interfaces that feel inevitable.</p>
      <div class="btn-row">
        <a href="#" class="btn-primary">View Work</a>
        <a href="#" class="btn-secondary">Get in Touch</a>
      </div>
    </div>
    <div class="hero-right" aria-label="Selected projects">
      <div class="proj-card proj-1"><span class="proj-label">Design Systems</span></div>
      <div class="proj-card proj-2"><span class="proj-label">Motion UI</span></div>
      <div class="proj-card proj-3"><span class="proj-label">Brand Identity</span></div>
      <div class="proj-card proj-4"><span class="proj-label">Engineering</span></div>
    </div>
  </main>

  <footer>
    <span class="footer-copy">Jordan Ellis — 2026</span>
    <ul class="footer-links">
      <li><a href="#">GitHub</a></li>
      <li><a href="#">Dribbble</a></li>
      <li><a href="#">LinkedIn</a></li>
    </ul>
  </footer>

</body>
</html>
```

- [ ] **Step 2: Open in browser and verify**

```bash
open sites/figma/index.html
```

Check:
- White page background, black text — no color in chrome
- Nav: "JE" logo left, three links center, black pill button right
- Hero left: monospace uppercase role label, large name (two lines, tight tracking), light tagline, two pill buttons (black solid + dark-glass)
- Hero right: 2×2 grid of gradient cards — dark blue, teal-purple, pink-blue, yellow-orange — each with uppercase monospace label
- Footer: full-width black bar, faint white text both sides
- Resize below 768px: columns stack, nav links hide

- [ ] **Step 3: Commit**

```bash
git add sites/figma/index.html
git commit -m "feat: add Figma-inspired portfolio site for Jordan Ellis"
```

---

### Task 2: Lovable site — full HTML + CSS

**Files:**
- Create: `sites/lovable/index.html`

- [ ] **Step 1: Create the file with complete markup and styles**

Create `sites/lovable/index.html` with the following content in full:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jordan Ellis — Creative Director & Design Engineer</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --cream: #f7f4ed;
      --charcoal: #1c1c1c;
      --off-white: #fcfbf8;
      --muted: #5f5f5d;
      --border: #eceae4;
      --border-interactive: rgba(28, 28, 28, 0.4);
      --btn-shadow:
        rgba(255, 255, 255, 0.2) 0px 0.5px 0px 0px inset,
        rgba(0, 0, 0, 0.2) 0px 0px 0px 0.5px inset,
        rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
      --focus-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
      background: var(--cream);
      color: var(--charcoal);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    /* ── NAV ── */
    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 18px 48px;
    }
    .nav-logo {
      font-size: 16px;
      font-weight: 600;
      letter-spacing: -0.3px;
      color: var(--charcoal);
    }
    .nav-links {
      display: flex;
      gap: 28px;
      list-style: none;
    }
    .nav-links a {
      font-size: 14px;
      font-weight: 400;
      color: var(--charcoal);
      text-decoration: none;
    }
    .nav-links a:hover { text-decoration: underline; }
    .nav-links a:focus { outline: none; box-shadow: var(--focus-shadow); border-radius: 3px; }
    .btn-nav {
      background: var(--charcoal);
      color: var(--off-white);
      padding: 7px 16px;
      border-radius: 6px;
      font-size: 13px;
      font-weight: 400;
      text-decoration: none;
      box-shadow: var(--btn-shadow);
    }
    .btn-nav:active { opacity: 0.8; }
    .btn-nav:focus { outline: none; box-shadow: var(--focus-shadow); }

    /* ── HERO ── */
    .hero {
      flex: 1;
      display: flex;
      align-items: center;
      gap: 56px;
      padding: 80px 48px;
    }
    .hero-left { flex: 1.1; }

    .role-label {
      font-size: 13px;
      font-weight: 400;
      color: var(--muted);
      margin-bottom: 20px;
    }

    .display-name {
      font-size: 60px;
      font-weight: 600;
      line-height: 1.05;
      letter-spacing: -1.5px;
      color: var(--charcoal);
      margin-bottom: 20px;
    }

    .tagline {
      font-size: 17px;
      font-weight: 400;
      line-height: 1.5;
      color: var(--muted);
      max-width: 320px;
      margin-bottom: 36px;
    }

    .btn-row {
      display: flex;
      gap: 10px;
      align-items: center;
      flex-wrap: wrap;
    }
    .btn-primary {
      background: var(--charcoal);
      color: var(--off-white);
      padding: 9px 18px;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 400;
      text-decoration: none;
      box-shadow: var(--btn-shadow);
    }
    .btn-primary:active { opacity: 0.8; }
    .btn-primary:focus { outline: none; box-shadow: var(--focus-shadow); }
    .btn-secondary {
      background: transparent;
      color: var(--charcoal);
      padding: 9px 18px;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 400;
      text-decoration: none;
      border: 1px solid var(--border-interactive);
    }
    .btn-secondary:active { opacity: 0.8; }
    .btn-secondary:focus { outline: none; box-shadow: var(--focus-shadow); }

    /* ── PROJECT GRID ── */
    .hero-right {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }
    .proj-card {
      border-radius: 12px;
      height: 190px;
      border: 1px solid var(--border);
      display: flex;
      align-items: flex-end;
      padding: 12px;
      overflow: hidden;
    }
    .proj-label {
      font-size: 11px;
      font-weight: 400;
      color: rgba(28, 28, 28, 0.6);
    }
    .proj-1 { background: linear-gradient(135deg, #e8e0d5 0%, #d4c9ba 100%); }
    .proj-2 { background: linear-gradient(135deg, #dde8e0 0%, #c4d9ca 100%); }
    .proj-3 { background: linear-gradient(135deg, #e0dde8 0%, #cac4d9 100%); }
    .proj-4 { background: linear-gradient(135deg, #e8ddd5 0%, #d9c4ba 100%); }

    /* ── FOOTER ── */
    footer {
      margin: 0 16px 16px;
      background: var(--charcoal);
      padding: 20px 32px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .footer-copy {
      font-size: 12px;
      font-weight: 400;
      color: rgba(252, 251, 248, 0.5);
    }
    .footer-links {
      display: flex;
      gap: 20px;
      list-style: none;
    }
    .footer-links a {
      font-size: 12px;
      font-weight: 400;
      color: rgba(252, 251, 248, 0.5);
      text-decoration: none;
    }
    .footer-links a:hover { color: rgba(252, 251, 248, 0.9); }
    .footer-links a:focus { outline: none; box-shadow: var(--focus-shadow); border-radius: 2px; }

    /* ── RESPONSIVE ── */
    @media (max-width: 768px) {
      .nav { padding: 16px 24px; }
      .nav-links { display: none; }
      .hero {
        flex-direction: column;
        align-items: flex-start;
        padding: 48px 24px;
        gap: 40px;
      }
      .hero-left, .hero-right { flex: none; width: 100%; }
      .display-name { font-size: 42px; letter-spacing: -1.2px; }
      .tagline { max-width: 100%; }
      .proj-card { height: 130px; }
      footer { margin: 0 8px 8px; padding: 16px 20px; flex-wrap: wrap; gap: 12px; }
    }

    @media (max-width: 480px) {
      .display-name { font-size: 36px; letter-spacing: -0.9px; }
      .tagline { font-size: 15px; }
    }
  </style>
</head>
<body>

  <nav class="nav">
    <span class="nav-logo">JE</span>
    <ul class="nav-links">
      <li><a href="#">Work</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Writing</a></li>
    </ul>
    <a href="#" class="btn-nav">Contact</a>
  </nav>

  <main class="hero">
    <div class="hero-left">
      <p class="role-label">Creative Director & Design Engineer</p>
      <h1 class="display-name">Jordan<br>Ellis</h1>
      <p class="tagline">I design systems that think and build interfaces that feel inevitable.</p>
      <div class="btn-row">
        <a href="#" class="btn-primary">View Work</a>
        <a href="#" class="btn-secondary">Get in Touch</a>
      </div>
    </div>
    <div class="hero-right" aria-label="Selected projects">
      <div class="proj-card proj-1"><span class="proj-label">Design Systems</span></div>
      <div class="proj-card proj-2"><span class="proj-label">Motion UI</span></div>
      <div class="proj-card proj-3"><span class="proj-label">Brand Identity</span></div>
      <div class="proj-card proj-4"><span class="proj-label">Engineering</span></div>
    </div>
  </main>

  <footer>
    <span class="footer-copy">Jordan Ellis — 2026</span>
    <ul class="footer-links">
      <li><a href="#">GitHub</a></li>
      <li><a href="#">Dribbble</a></li>
      <li><a href="#">LinkedIn</a></li>
    </ul>
  </footer>

</body>
</html>
```

- [ ] **Step 2: Open in browser and verify**

```bash
open sites/lovable/index.html
```

Check:
- Cream (#f7f4ed) background — not white, not beige
- Nav: "JE" bold logo left, three links center, dark charcoal button with visible inset shadow right — no border/line under nav
- Hero left: muted gray role label (no uppercase), large name (two lines, tight tracking), muted gray tagline, two buttons (charcoal inset-shadow + ghost outline)
- Hero right: 2×2 grid of warm tonal cards — sand, sage, lavender, terracotta — each with a warm cream border and small muted label
- Footer: charcoal rounded block floating with 16px margin from edges, faint off-white text
- Resize below 768px: columns stack, nav links hide, footer stays rounded

- [ ] **Step 3: Commit**

```bash
git add sites/lovable/index.html
git commit -m "feat: add Lovable-inspired portfolio site for Jordan Ellis"
```
