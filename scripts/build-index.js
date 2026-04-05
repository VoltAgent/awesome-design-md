#!/usr/bin/env node
/**
 * Scans design-md/* for preview.html and preview-dark.html and generates
 * a root index.html. Each card is a split 50/50 mini-preview of the
 * design's light and dark themes — each half is themed with the actual
 * background/foreground color from that preview and shows the primary
 * brand swatches.
 *
 * Usage: node scripts/build-index.js
 * Author: github.com/scottcate
 * AI Assistant: Claude Code
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DESIGN_DIR = path.join(ROOT, 'design-md');
const OUT_FILE = path.join(ROOT, 'index.html');
const MAX_SWATCHES = 5;

function titleCase(slug) {
  return slug
    .split(/[-_.]/)
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ');
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ---------------------------------------------------------------------------
// Extract background + foreground colors from a preview HTML file by parsing
// its :root custom properties and the body { background / color } rules.
// ---------------------------------------------------------------------------
function extractTheme(htmlPath, fallbackBg, fallbackFg) {
  const result = { bg: fallbackBg, fg: fallbackFg };
  if (!fs.existsSync(htmlPath)) return result;
  const html = fs.readFileSync(htmlPath, 'utf8');

  // Collect all :root { ... } blocks (there may be more than one).
  const vars = {};
  const rootRe = /:root\s*\{([^}]+)\}/g;
  let m;
  while ((m = rootRe.exec(html)) !== null) {
    const varRe = /--([a-zA-Z0-9-_]+)\s*:\s*([^;]+);/g;
    let v;
    while ((v = varRe.exec(m[1])) !== null) {
      vars[v[1]] = v[2].trim();
    }
  }

  const resolve = (val, depth = 0) => {
    if (!val || depth > 8) return null;
    val = val.trim();
    const varMatch = val.match(/var\(\s*--([a-zA-Z0-9-_]+)\s*(?:,[^)]*)?\)/);
    if (varMatch) return resolve(vars[varMatch[1]], depth + 1);
    const hex = val.match(/#[0-9a-fA-F]{3,8}/);
    if (hex) return hex[0];
    const rgb = val.match(/rgba?\([^)]+\)/);
    if (rgb) return rgb[0];
    const named = val.match(/^[a-zA-Z]+$/);
    if (named) return val;
    return null;
  };

  // Find the body { ... } rule (the selector that is exactly "body").
  const bodyRe = /(^|[\s,}])body\s*\{([^}]+)\}/;
  const bodyMatch = html.match(bodyRe);
  if (bodyMatch) {
    const body = bodyMatch[2];
    const bgMatch = body.match(/(?:^|[\s;])background(?:-color)?\s*:\s*([^;]+);/);
    const fgMatch = body.match(/(?:^|[\s;])color\s*:\s*([^;]+);/);
    const bg = resolve(bgMatch && bgMatch[1]);
    const fg = resolve(fgMatch && fgMatch[1]);
    if (bg) result.bg = bg;
    if (fg) result.fg = fg;
  }
  return result;
}

// ---------------------------------------------------------------------------
// Extract the "Primary" / "Primary Brand" / "Brand" palette from DESIGN.md.
// ---------------------------------------------------------------------------
function extractPrimaryColors(designPath) {
  if (!fs.existsSync(designPath)) return [];
  const md = fs.readFileSync(designPath, 'utf8');

  const lines = md.split('\n');
  let inPalette = false;
  let inPrimary = false;
  const block = [];
  const fallbackBlock = [];
  let fallbackFilled = false;

  const isPrimaryHeading = (h) => {
    const t = h.trim().toLowerCase();
    return (
      t === 'primary' ||
      t === 'primary brand' ||
      t === 'brand primary' ||
      t === 'brand' ||
      t.startsWith('primary ') ||
      t.startsWith('brand ') ||
      t.includes('primary brand')
    );
  };

  for (const line of lines) {
    const h2 = line.match(/^##\s+(.*)$/);
    const h3 = line.match(/^###\s+(.*)$/);

    if (h2) {
      inPalette = /color palette/i.test(h2[1]);
      inPrimary = false;
      continue;
    }
    if (!inPalette) continue;

    if (h3) {
      if (inPrimary) break;
      if (isPrimaryHeading(h3[1])) {
        inPrimary = true;
      }
      if (fallbackBlock.length > 0) fallbackFilled = true;
      continue;
    }

    if (inPrimary) block.push(line);
    else if (!fallbackFilled) fallbackBlock.push(line);
  }

  const source = block.length ? block : fallbackBlock;
  if (!source.length) return [];

  const colors = [];
  const re = /^\s*-\s+\*\*([^*]+)\*\*[^#`]*`?#([0-9a-fA-F]{3,8})`?/;
  for (const line of source) {
    const m = line.match(re);
    if (m) {
      let hex = m[2];
      if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
      if (hex.length === 8) hex = hex.slice(0, 6);
      if (hex.length === 6) {
        colors.push({ name: m[1].trim(), hex: '#' + hex.toLowerCase() });
      }
    }
    if (colors.length >= MAX_SWATCHES) break;
  }
  return colors;
}

function collectEntries() {
  const dirs = fs.readdirSync(DESIGN_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .sort((a, b) => a.localeCompare(b));

  return dirs.map(name => {
    const dirPath = path.join(DESIGN_DIR, name);
    const lightPath = path.join(dirPath, 'preview.html');
    const darkPath = path.join(dirPath, 'preview-dark.html');
    const hasLight = fs.existsSync(lightPath);
    const hasDark = fs.existsSync(darkPath);
    const light = hasLight ? extractTheme(lightPath, '#ffffff', '#111111') : null;
    const dark = hasDark ? extractTheme(darkPath, '#111111', '#f5f5f5') : null;
    const colors = extractPrimaryColors(path.join(dirPath, 'DESIGN.md'));
    return { name, hasLight, hasDark, light, dark, colors };
  }).filter(e => e.hasLight || e.hasDark);
}

// ---------------------------------------------------------------------------
// Render
// ---------------------------------------------------------------------------
function renderSwatches(colors, borderRgba) {
  if (!colors.length) return '';
  const items = colors.map(c => {
    const label = `${c.name} ${c.hex}`;
    return `<span class="swatch" style="background:${c.hex};border-color:${borderRgba}" title="${escapeHtml(label)}" aria-label="${escapeHtml(label)}"></span>`;
  }).join('');
  return `<div class="swatches">${items}</div>`;
}

function renderHalf(mode, theme, href, entry) {
  const isLight = mode === 'light';
  const bg = theme ? theme.bg : (isLight ? '#ffffff' : '#111111');
  const fg = theme ? theme.fg : (isLight ? '#111111' : '#f5f5f5');
  const borderRgba = isLight ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.15)';
  const subtleFg = isLight ? 'rgba(0,0,0,0.55)' : 'rgba(255,255,255,0.55)';
  const label = isLight ? 'Light' : 'Dark';

  if (!theme) {
    return `<div class="half half-missing" style="background:${bg};color:${subtleFg}">
      <div class="half-label" style="color:${subtleFg}">${label}</div>
      <div class="half-empty">not available</div>
    </div>`;
  }

  const swatches = renderSwatches(entry.colors, borderRgba);
  const bgLabel = escapeHtml(bg);
  const fgLabel = escapeHtml(fg);

  return `<a class="half" href="${href}" style="background:${bg};color:${fg}">
      <div class="half-label" style="color:${subtleFg}">${label}</div>
      ${swatches}
      <div class="theme-meta" style="color:${subtleFg}">
        <span class="theme-chip"><span class="theme-chip-dot" style="background:${bg};border-color:${borderRgba}"></span>bg ${bgLabel}</span>
        <span class="theme-chip"><span class="theme-chip-dot" style="background:${fg};border-color:${borderRgba}"></span>fg ${fgLabel}</span>
      </div>
      <div class="half-cta" style="border-color:${borderRgba};color:${fg}">Open ${label} →</div>
    </a>`;
}

function renderCard(entry) {
  const title = titleCase(entry.name);
  const base = `design-md/${entry.name}`;
  return `    <article class="card">
      <header class="card-head">
        <h2 class="card-title">${escapeHtml(title)}</h2>
        <div class="card-slug">${escapeHtml(entry.name)}</div>
      </header>
      <div class="split">
        ${renderHalf('light', entry.light, entry.hasLight ? `${base}/preview.html` : null, entry)}
        ${renderHalf('dark',  entry.dark,  entry.hasDark  ? `${base}/preview-dark.html` : null, entry)}
      </div>
    </article>`;
}

function renderHtml(entries) {
  const count = entries.length;
  const cards = entries.map(renderCard).join('\n');
  const generated = new Date().toISOString();

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Awesome Design MD — Preview Index</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
  :root {
    --page-bg: #0b0b0f;
    --card-border: #2a2a38;
    --page-text: #eef0f6;
    --page-muted: #9397a8;
    --accent: #7c8cff;
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { background: var(--page-bg); color: var(--page-text); font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; }
  body { min-height: 100vh; line-height: 1.5; }
  .wrap { max-width: 1400px; margin: 0 auto; padding: 64px 24px 96px; }
  header.page-head { margin-bottom: 48px; }
  h1 { font-size: 40px; font-weight: 700; letter-spacing: -0.02em; margin-bottom: 12px; }
  .lede { color: var(--page-muted); font-size: 17px; max-width: 680px; }
  .meta { color: var(--page-muted); font-size: 13px; margin-top: 16px; font-variant-numeric: tabular-nums; }

  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 20px; }
  .card { background: transparent; border: 1px solid var(--card-border); border-radius: 16px; overflow: hidden; transition: border-color 0.15s, transform 0.15s; display: flex; flex-direction: column; }
  .card:hover { border-color: var(--accent); transform: translateY(-2px); }

  .card-head { padding: 16px 18px 14px; background: rgba(255,255,255,0.02); border-bottom: 1px solid var(--card-border); }
  .card-title { font-size: 17px; font-weight: 600; margin-bottom: 2px; }
  .card-slug { font-family: 'SF Mono', Menlo, Consolas, monospace; font-size: 11px; color: var(--page-muted); }

  .split { display: grid; grid-template-columns: 1fr 1fr; }
  .half { position: relative; padding: 16px 14px 14px; text-decoration: none; min-height: 180px; display: flex; flex-direction: column; gap: 10px; transition: filter 0.15s; font-family: 'Inter', sans-serif; }
  .half:hover { filter: brightness(1.08) saturate(1.1); }
  .half-missing { cursor: default; opacity: 0.55; }

  .half-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }
  .half-empty { font-size: 12px; font-style: italic; }

  .swatches { display: flex; gap: 5px; flex-wrap: wrap; }
  .swatch { width: 22px; height: 22px; border-radius: 5px; border: 1px solid; box-shadow: 0 1px 2px rgba(0,0,0,0.15); cursor: help; }

  .theme-meta { display: flex; flex-direction: column; gap: 3px; font-size: 10px; font-family: 'SF Mono', Menlo, Consolas, monospace; margin-top: auto; }
  .theme-chip { display: inline-flex; align-items: center; gap: 6px; }
  .theme-chip-dot { width: 10px; height: 10px; border-radius: 2px; border: 1px solid; display: inline-block; flex-shrink: 0; }

  .half-cta { font-size: 11px; font-weight: 600; padding: 6px 10px; border-radius: 6px; border: 1px solid; text-align: center; margin-top: 6px; }

  footer { margin-top: 64px; color: var(--page-muted); font-size: 13px; }
  footer a { color: var(--accent); text-decoration: none; }
  footer a:hover { filter: brightness(1.2); }
  footer code { font-family: 'SF Mono', Menlo, Consolas, monospace; font-size: 12px; background: rgba(255,255,255,0.06); padding: 2px 6px; border-radius: 4px; }

  @media (prefers-color-scheme: light) {
    :root { --page-bg: #fafafc; --card-border: #e4e5ed; --page-text: #15151c; --page-muted: #60636d; --accent: #4a5cff; }
    .card-head { background: rgba(0,0,0,0.02); }
    footer code { background: rgba(0,0,0,0.06); }
  }
</style>
</head>
<body>
  <div class="wrap">
    <header class="page-head">
      <h1>Awesome Design MD</h1>
      <p class="lede">Preview index for every design-system in this repo. Each card shows a split mini-preview — left half uses the light theme's actual background and primary swatches, right half uses the dark theme's. Click either half to open the full preview.</p>
      <div class="meta">${count} systems · generated ${generated}</div>
    </header>
    <main class="grid">
${cards}
    </main>
    <footer>
      Built with <code>scripts/build-index.js</code> · <a href="https://github.com/scottcate/awesome-design-md">source</a>
    </footer>
  </div>
</body>
</html>
`;
}

function main() {
  if (!fs.existsSync(DESIGN_DIR)) {
    console.error(`design-md directory not found at ${DESIGN_DIR}`);
    process.exit(1);
  }
  const entries = collectEntries();
  const html = renderHtml(entries);
  fs.writeFileSync(OUT_FILE, html, 'utf8');
  const withColors = entries.filter(e => e.colors.length).length;
  console.log(`Wrote ${OUT_FILE} with ${entries.length} entries (${withColors} with palettes).`);
}

main();
