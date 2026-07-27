#!/usr/bin/env node
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const FRONT_MATTER_DELIMITER = "---";
const COLOR_VALUE = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\([^)]*\)|transparent|currentcolor)$/i;
const TOKEN_REFERENCE = /\{([\w-]+)\.([\w-]+)\}/g;

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function unquote(value) {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function indentation(line) {
  return line.length - line.trimStart().length;
}

/**
 * Parses the map-only YAML subset used by the collection's DESIGN.md front
 * matter. The compiler intentionally fails on malformed front matter instead
 * of silently producing an unrelated preview.
 */
export function parseFrontMatter(source, filePath = "DESIGN.md") {
  const lines = source.replaceAll("\r\n", "\n").split("\n");
  if (lines[0] !== FRONT_MATTER_DELIMITER) {
    throw new Error(`${filePath}: expected front matter to start with ---`);
  }

  const end = lines.indexOf(FRONT_MATTER_DELIMITER, 1);
  if (end === -1) {
    throw new Error(`${filePath}: missing closing front matter delimiter`);
  }

  const root = {};
  const stack = [{ indent: -1, value: root }];
  let block;

  function finishBlock() {
    if (!block) return;
    block.parent[block.key] = block.lines
      .map((line) => line.slice(Math.min(line.length, block.contentIndent)))
      .join("\n")
      .trim();
    block = undefined;
  }

  for (let index = 1; index < end; index += 1) {
    const line = lines[index];
    const trimmed = line.trim();
    const indent = indentation(line);

    if (block && (trimmed || indent <= block.indent) && indent <= block.indent) {
      finishBlock();
    }
    if (block) {
      block.lines.push(line);
      continue;
    }
    if (!trimmed || trimmed.startsWith("#")) continue;

    const entry = trimmed.match(/^([^:#][^:]*?):(?:\s*(.*))?$/);
    if (!entry) {
      throw new Error(`${filePath}:${index + 1}: unsupported YAML entry`);
    }

    while (stack.length > 1 && indent <= stack.at(-1).indent) stack.pop();
    const parent = stack.at(-1).value;
    const key = unquote(entry[1]);
    const rawValue = entry[2] ?? "";

    if (rawValue === "|" || rawValue === ">") {
      block = { indent, parent, key, lines: [], contentIndent: indent + 2 };
      continue;
    }
    if (!rawValue) {
      const child = {};
      parent[key] = child;
      stack.push({ indent, value: child });
      continue;
    }
    parent[key] = unquote(rawValue);
  }
  finishBlock();

  return { frontMatter: root, body: lines.slice(end + 1).join("\n") };
}

function parseLegacyDocument(source, filePath) {
  const lines = source.replaceAll("\r\n", "\n").split("\n");
  const heading = lines.find((line) => /^#\s+/.test(line));
  const title = heading?.replace(/^#\s+/, "").trim() || filePath.replace(/\/DESIGN\.md$/, "");
  const descriptionStart = heading ? lines.indexOf(heading) + 1 : 0;
  const description = lines.slice(descriptionStart)
    .find((line) => line.trim() && !line.startsWith("#") && !line.startsWith("-") && !line.startsWith("|"))
    ?.trim() || "A legacy DESIGN.md without structured front matter.";
  const values = [...source.matchAll(/(?:#[\da-f]{3,8}|rgba?\([^)]*\))/gi)]
    .map(([value]) => value.toLowerCase())
    .filter((value, index, all) => all.indexOf(value) === index);
  const colors = Object.fromEntries(values.map((value, index) => [`token-${index + 1}`, value]));
  const primary = values[0] ?? "#111111";
  const fontFamily = source.match(/\*\*(?:Display|UI \/ Body)\*\*:\s*`?([^`,\n]+)/i)?.[1]?.trim() ?? "ui-sans-serif, system-ui, sans-serif";

  return {
    frontMatter: {
      name: title,
      description,
      colors: { canvas: "#ffffff", ink: "#101114", primary, ...colors },
      typography: {
        display: { fontFamily, fontSize: "48px", fontWeight: "700", lineHeight: "1.1" },
        body: { fontFamily, fontSize: "16px", fontWeight: "400", lineHeight: "1.5" },
      },
      components: {
        "reference-button": { backgroundColor: primary, textColor: "#ffffff", rounded: "12px", padding: "13px 16px" },
      },
    },
    body: source,
  };
}

export function parseDesignDocument(source, filePath = "DESIGN.md") {
  return source.startsWith(`${FRONT_MATTER_DELIMITER}\n`)
    ? parseFrontMatter(source, filePath)
    : parseLegacyDocument(source, filePath);
}

function isObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function resolveReferences(value, tokens) {
  if (typeof value !== "string") return value;
  return value.replaceAll(TOKEN_REFERENCE, (_, group, key) => {
    const groupTokens = tokens[group];
    const replacement = isObject(groupTokens) ? groupTokens[key] : undefined;
    return typeof replacement === "string" ? replacement : `{${group}.${key}}`;
  });
}

function firstString(object, keys, fallback) {
  for (const key of keys) {
    if (typeof object?.[key] === "string" && object[key]) return object[key];
  }
  return fallback;
}

function hexLuminance(color) {
  const match = color.match(/^#([\da-f]{3}|[\da-f]{6})$/i);
  if (!match) return 1;
  const hex = match[1].length === 3
    ? [...match[1]].map((part) => part + part).join("")
    : match[1];
  const channels = [0, 2, 4].map((offset) => Number.parseInt(hex.slice(offset, offset + 2), 16) / 255);
  const linear = channels.map((channel) => (
    channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4
  ));
  return (0.2126 * linear[0]) + (0.7152 * linear[1]) + (0.0722 * linear[2]);
}

function cssValue(value, tokens, fallback = "") {
  const resolved = resolveReferences(String(value ?? ""), tokens).trim();
  return resolved && !resolved.includes("{") ? resolved : fallback;
}

function colorSwatch(name, value) {
  const valid = COLOR_VALUE.test(value);
  return `<article class="swatch">
    <div class="swatch__color" style="background:${valid ? escapeHtml(value) : "repeating-linear-gradient(45deg, #ddd 0 8px, #fff 8px 16px)"}"></div>
    <div class="swatch__copy"><strong>${escapeHtml(name)}</strong><code>${escapeHtml(value)}</code></div>
  </article>`;
}

function typographySample(name, style, tokens, fallbackFamily) {
  if (!isObject(style)) return "";
  const css = [
    `font-family:${cssValue(style.fontFamily, tokens, fallbackFamily)}`,
    `font-size:${cssValue(style.fontSize, tokens, "1rem")}`,
    `font-weight:${cssValue(style.fontWeight, tokens, "400")}`,
    `line-height:${cssValue(style.lineHeight, tokens, "1.3")}`,
    `letter-spacing:${cssValue(style.letterSpacing, tokens, "normal")}`,
  ].join(";");
  return `<article class="type-row">
    <div class="type-row__meta"><strong>${escapeHtml(name)}</strong><code>${escapeHtml(`${style.fontSize ?? "16px"} / ${style.fontWeight ?? "400"}`)}</code></div>
    <p style="${escapeHtml(css)}">The quick brown fox jumps over the lazy dog.</p>
  </article>`;
}

function componentSample(name, component, tokens, defaults) {
  if (!isObject(component)) return "";
  const background = cssValue(component.backgroundColor, tokens, defaults.surface);
  const color = cssValue(component.textColor ?? component.color, tokens, defaults.ink);
  const radius = cssValue(component.rounded, tokens, defaults.radius);
  const padding = cssValue(component.padding, tokens, "14px 18px");
  const border = cssValue(component.border, tokens, `1px solid ${defaults.hairline}`);
  const height = cssValue(component.height, tokens);
  const isButton = /button|tab|link|badge|chip|tag|cta|pill/i.test(name);
  const style = [
    `background:${background || "transparent"}`,
    `color:${color}`,
    `border-radius:${radius || defaults.radius}`,
    `padding:${padding}`,
    `border:${border || "none"}`,
    height && `min-height:${height}`,
    "font:inherit",
  ].filter(Boolean).join(";");
  const tag = isButton ? "button" : "div";
  const label = isButton ? `${name.replaceAll("-", " ")} →` : name.replaceAll("-", " ");
  return `<article class="component">
    <div class="component__preview"><${tag} style="${escapeHtml(style)}">${escapeHtml(label)}</${tag}></div>
    <div class="component__meta"><strong>${escapeHtml(name)}</strong><code>${escapeHtml(background || "transparent")}</code></div>
  </article>`;
}

export function renderPreview(document, sourcePath) {
  const data = document.frontMatter;
  const colors = isObject(data.colors) ? data.colors : {};
  const typography = isObject(data.typography) ? data.typography : {};
  const components = isObject(data.components) ? data.components : {};
  const rounded = isObject(data.rounded) ? data.rounded : {};
  const spacing = isObject(data.spacing) ? data.spacing : {};
  const canvas = firstString(colors, ["canvas", "canvas-light", "surface", "surface-light"], "#ffffff");
  const isDark = hexLuminance(canvas) < 0.25;
  const ink = firstString(colors, isDark ? ["on-dark", "ink", "primary", "body"] : ["ink", "body-strong", "primary", "on-dark"], isDark ? "#ffffff" : "#111111");
  const body = firstString(colors, ["body", "muted", "ink"], ink);
  const muted = firstString(colors, ["muted", "body", "ink"], body);
  const surface = firstString(colors, isDark ? ["surface-card", "surface-elevated", "surface", "canvas"] : ["surface-card", "surface-soft", "surface", "canvas"], canvas);
  const surfaceDark = firstString(colors, ["surface-dark", "canvas-dark", "surface-deep", "canvas-deep", "surface-card", "canvas"], isDark ? surface : "#181715");
  const surfaceDarkSoft = firstString(colors, ["surface-dark-soft", "surface-dark-elevated", "surface-elevated", "surface-card", "canvas"], surfaceDark);
  const onDark = firstString(colors, ["on-dark", "on-primary", "canvas", "ink"], "#ffffff");
  const hairline = firstString(colors, ["hairline", "border", "hairline-soft", "surface-strong"], isDark ? "#333333" : "#dddddd");
  const primary = firstString(colors, ["primary", "brand", "accent", "link"], ink);
  const primaryActive = firstString(colors, ["primary-active", "primary-deep", "primary-dark", "primary"], primary);
  const onPrimary = firstString(colors, ["on-primary", "on-dark", "canvas", "ink"], "#ffffff");
  const radius = firstString(rounded, ["md", "lg", "sm", "full", "none"], "8px");
  const display = isObject(typography["display-xl"])
    ? typography["display-xl"]
    : Object.values(typography).find((style) => isObject(style) && /display|heading/i.test(String(style.fontFamily ?? ""))) ?? {};
  const text = isObject(typography["body-md"])
    ? typography["body-md"]
    : Object.values(typography).find((style) => isObject(style)) ?? {};
  const displayFamily = cssValue(display.fontFamily, data, "Georgia, serif");
  const textFamily = cssValue(text.fontFamily, data, "ui-sans-serif, system-ui, sans-serif");
  const monoFamily = cssValue(typography.code?.fontFamily, data, "ui-monospace, SFMono-Regular, Menlo, monospace");
  const title = String(data.name ?? sourcePath.replace(/\/DESIGN\.md$/, ""));
  const brandName = title.replace(/[-_]+design[-_]+analysis$/i, "").replace(/[-_]+/g, " ").trim() || title;
  const description = String(data.description ?? "A design system with a documented visual language.").replace(/\s+/g, " ");
  const colorEntries = Object.entries(colors).filter(([, value]) => typeof value === "string");
  const tokenGroups = [
    ["Brand & accent", colorEntries.filter(([name]) => /primary|brand|accent|link|success|warning|error|red|blue|green|yellow|orange|purple|coral|teal/i.test(name))],
    ["Surfaces", colorEntries.filter(([name]) => /canvas|surface|background|card|elevated|soft|deep|frame/i.test(name))],
    ["Typography & borders", colorEntries.filter(([name]) => /ink|body|muted|on-|hairline|border|text/i.test(name))],
  ].filter(([, entries]) => entries.length);
  const grouped = new Set(tokenGroups.flatMap(([, entries]) => entries.map(([name]) => name)));
  if (colorEntries.some(([name]) => !grouped.has(name))) tokenGroups.push(["Additional tokens", colorEntries.filter(([name]) => !grouped.has(name))]);
  const heroDisplayStyle = [
    `font-family:${displayFamily}`,
    `font-size:clamp(44px, 6vw, ${cssValue(display.fontSize, data, "72px")})`,
    `font-weight:${cssValue(display.fontWeight, data, "500")}`,
    `line-height:${cssValue(display.lineHeight, data, "1.05")}`,
    `letter-spacing:${cssValue(display.letterSpacing, data, "-1.5px")}`,
  ].join(";");
  const renderGroup = ([groupName, entries]) => `<div class="palette-group"><h3>${escapeHtml(groupName)}</h3><div class="palette-grid">${entries.map(([name, value]) => `<article class="swatch"><div class="swatch-color" style="background:${escapeHtml(COLOR_VALUE.test(value) ? value : surface)}"></div><div class="swatch-meta"><strong>${escapeHtml(name)}</strong><code>${escapeHtml(value)}</code><p>Semantic ${escapeHtml(name.replaceAll("-", " "))} token.</p></div></article>`).join("")}</div></div>`;
  const typeRows = Object.entries(typography).filter(([, style]) => isObject(style)).map(([name, style]) => {
    const sampleStyle = [
      `font-family:${cssValue(style.fontFamily, data, textFamily)}`,
      `font-size:clamp(16px, 3vw, ${cssValue(style.fontSize, data, "20px")})`,
      `font-weight:${cssValue(style.fontWeight, data, "400")}`,
      `line-height:${cssValue(style.lineHeight, data, "1.3")}`,
      `letter-spacing:${cssValue(style.letterSpacing, data, "normal")}`,
    ].join(";");
    const sample = /code/i.test(name) ? "createDesignSystem({ preview: true })" : /display|heading/i.test(name) ? `Make ${brandName} unmistakable` : /button/i.test(name) ? `Explore ${brandName}` : "A design language, rendered with intent.";
    return `<div class="type-row"><div class="type-meta"><strong>${escapeHtml(name)}</strong><span>${escapeHtml(`${style.fontSize ?? "16px"} / ${style.fontWeight ?? "400"} / ${style.lineHeight ?? "1.4"}`)}</span></div><div class="type-sample" style="${escapeHtml(sampleStyle)}">${escapeHtml(sample)}</div></div>`;
  }).join("");
  const componentRows = Object.entries(components).filter(([, style]) => isObject(style)).slice(0, 12).map(([name, component]) => {
    const background = cssValue(component.backgroundColor, data, surface);
    const color = cssValue(component.textColor ?? component.color, data, ink);
    const componentRadius = cssValue(component.rounded, data, radius);
    const padding = cssValue(component.padding, data, "12px 18px");
    const border = cssValue(component.border, data, background === canvas ? `1px solid ${hairline}` : "none");
    const label = name.replaceAll("-", " ");
    return `<article class="component-card"><div class="component-stage" style="background:${escapeHtml(surface)}"><button style="background:${escapeHtml(background)};color:${escapeHtml(color)};border:${escapeHtml(border)};border-radius:${escapeHtml(componentRadius)};padding:${escapeHtml(padding)};font:inherit;min-height:${escapeHtml(cssValue(component.height, data, "auto"))}">${escapeHtml(label)} →</button></div><div class="component-meta"><strong>${escapeHtml(name)}</strong><code>${escapeHtml(background)}</code></div></article>`;
  }).join("");
  const featureCards = Object.entries(components).filter(([, style]) => isObject(style)).slice(0, 3).map(([name, component], index) => `<article class="feature-card"><span class="feature-number">0${index + 1}</span><h3>${escapeHtml(name.replaceAll("-", " "))}</h3><p>${escapeHtml(`${brandName} uses this component recipe to keep its visual grammar consistent.`)}</p><span>${escapeHtml(cssValue(component.backgroundColor, data, surface))}</span></article>`).join("");
  const spacingRows = Object.entries(spacing).filter(([, value]) => typeof value === "string").slice(0, 10).map(([name, value]) => `<div class="scale-item"><div class="scale-bar" style="width:min(${escapeHtml(value)}, 100%)"></div><span>${escapeHtml(name)}</span><code>${escapeHtml(value)}</code></div>`).join("");
  const radiusRows = Object.entries(rounded).filter(([, value]) => typeof value === "string").slice(0, 8).map(([name, value]) => `<div class="radius-item" style="border-radius:${escapeHtml(value)}"><span>${escapeHtml(name)}</span><code>${escapeHtml(value)}</code></div>`).join("");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="${isDark ? "dark" : "light"}">
  <title>Design System Analysis of ${escapeHtml(brandName)} — Preview</title>
  <style>
    :root { color-scheme:${isDark ? "dark" : "light"}; --canvas:${escapeHtml(canvas)}; --ink:${escapeHtml(ink)}; --body:${escapeHtml(body)}; --muted:${escapeHtml(muted)}; --surface:${escapeHtml(surface)}; --surface-dark:${escapeHtml(surfaceDark)}; --surface-dark-soft:${escapeHtml(surfaceDarkSoft)}; --on-dark:${escapeHtml(onDark)}; --hairline:${escapeHtml(hairline)}; --primary:${escapeHtml(primary)}; --primary-active:${escapeHtml(primaryActive)}; --on-primary:${escapeHtml(onPrimary)}; --radius:${escapeHtml(radius)}; --display:${escapeHtml(displayFamily)}; --text:${escapeHtml(textFamily)}; --mono:${escapeHtml(monoFamily)}; }
    * { box-sizing:border-box; } html { scroll-behavior:smooth; background:var(--canvas); } body { margin:0; background:var(--canvas); color:var(--body); font:15px/1.55 var(--text); } button,input { font:inherit; } button { cursor:pointer; } a { color:inherit; }
    .nav { position:sticky; top:0; z-index:10; height:64px; display:flex; align-items:center; justify-content:space-between; gap:24px; padding:0 max(24px, calc((100vw - 1200px) / 2)); border-bottom:1px solid var(--hairline); background:color-mix(in srgb, var(--canvas) 94%, transparent); backdrop-filter:blur(12px); }
    .brand { color:var(--ink); font:500 22px/1 var(--display); text-decoration:none; white-space:nowrap; } .nav-links { display:flex; gap:28px; align-items:center; } .nav-links a { color:var(--ink); font-size:13px; font-weight:600; text-decoration:none; } .nav-cta { border:0; border-radius:var(--radius); padding:10px 16px; background:var(--primary); color:var(--on-primary); font-weight:600; white-space:nowrap; }
    .hero { display:grid; grid-template-columns:1.05fr .95fr; align-items:center; gap:clamp(36px, 6vw, 88px); width:min(1280px, calc(100% - 64px)); min-height:620px; margin:0 auto; padding:84px 16px; } .eyebrow,.section-label { display:block; margin-bottom:14px; color:var(--muted); font:600 11px/1.4 var(--text); letter-spacing:.14em; text-transform:uppercase; } h1 { max-width:720px; margin:0; color:var(--ink); } .hero-copy > p { max-width:590px; margin:24px 0 32px; font-size:18px; } .hero-actions { display:flex; flex-wrap:wrap; gap:12px; } .button-primary,.button-secondary { min-height:42px; padding:11px 18px; border-radius:var(--radius); font-weight:600; } .button-primary { border:0; background:var(--primary); color:var(--on-primary); } .button-secondary { border:1px solid var(--hairline); background:var(--canvas); color:var(--ink); }
    .product-window { min-height:360px; padding:20px; border-radius:calc(var(--radius) * 1.5); background:var(--surface-dark); color:var(--on-dark); box-shadow:0 24px 70px color-mix(in srgb, var(--ink) 12%, transparent); } .window-bar { display:flex; gap:7px; padding:2px 0 17px; } .window-bar span { width:10px; height:10px; border-radius:50%; background:#ff5f57; } .window-bar span:nth-child(2) { background:#ffbd2e; } .window-bar span:nth-child(3) { background:#28c840; } .product-window pre { margin:0; min-height:296px; padding:22px; overflow:auto; border-radius:calc(var(--radius) * .75); background:var(--surface-dark-soft); color:var(--on-dark); font:13px/1.75 var(--mono); } .code-muted { color:color-mix(in srgb, var(--on-dark) 58%, transparent); } .code-accent { color:var(--primary); }
    section { width:min(1200px, calc(100% - 64px)); margin:0 auto; padding:88px 0; border-top:1px solid var(--hairline); } h2 { margin:0 0 15px; color:var(--ink); font:400 clamp(34px, 4.5vw, 54px)/1.08 var(--display); letter-spacing:-.035em; } .section-intro { max-width:720px; margin:0 0 42px; font-size:16px; }
    .palette-group + .palette-group { margin-top:48px; } .palette-group h3,.feature-card h3 { margin:0 0 18px; color:var(--ink); font:400 24px/1.2 var(--display); } .palette-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:16px; } .swatch { overflow:hidden; border:1px solid var(--hairline); border-radius:calc(var(--radius) * 1.25); background:var(--canvas); } .swatch-color { height:94px; } .swatch-meta { padding:13px 14px 16px; } .swatch-meta strong { display:block; color:var(--ink); font-size:13px; } code { color:var(--muted); font:11px/1.5 var(--mono); } .swatch-meta p { min-height:37px; margin:8px 0 0; font-size:12px; }
    .type-list { border-top:1px solid var(--hairline); } .type-row { display:grid; grid-template-columns:250px 1fr; gap:32px; align-items:baseline; padding:23px 0; border-bottom:1px solid var(--hairline); } .type-meta strong { display:block; color:var(--ink); font-size:13px; } .type-meta span { color:var(--muted); font-size:12px; } .type-sample { color:var(--ink); overflow-wrap:anywhere; }
    .component-grid,.feature-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(250px, 1fr)); gap:18px; } .component-card { overflow:hidden; border:1px solid var(--hairline); border-radius:calc(var(--radius) * 1.25); background:var(--canvas); } .component-stage { display:flex; min-height:138px; align-items:center; justify-content:center; padding:24px; } .component-stage button { max-width:100%; overflow:hidden; text-transform:capitalize; } .component-meta { display:flex; justify-content:space-between; gap:12px; padding:13px 15px; border-top:1px solid var(--hairline); } .component-meta strong { color:var(--ink); font-size:13px; overflow-wrap:anywhere; }
    .feature-grid { margin-top:20px; } .feature-card { min-height:248px; padding:30px; border-radius:calc(var(--radius) * 1.25); background:var(--surface); } .feature-number { display:block; margin-bottom:44px; color:var(--primary); font:12px var(--mono); } .feature-card p { margin:0 0 21px; font-size:14px; } .feature-card > span:last-child { color:var(--muted); font:11px var(--mono); }
    .callout { display:grid; grid-template-columns:1fr auto; gap:32px; align-items:end; margin-top:46px; padding:clamp(32px, 6vw, 64px); border-radius:calc(var(--radius) * 1.5); background:var(--primary); color:var(--on-primary); } .callout h3 { max-width:640px; margin:0 0 13px; font:400 clamp(30px, 4vw, 48px)/1.1 var(--display); } .callout p { max-width:620px; margin:0; } .callout button { min-width:150px; padding:12px 17px; border:0; border-radius:var(--radius); background:var(--canvas); color:var(--ink); font-weight:600; }
    .scale-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(130px, 1fr)); gap:12px; } .scale-item { padding:16px; border:1px solid var(--hairline); border-radius:var(--radius); } .scale-bar { height:9px; max-width:100%; margin-bottom:18px; border-radius:999px; background:var(--primary); } .scale-item span,.scale-item code { display:block; } .radius-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(128px, 1fr)); gap:16px; } .radius-item { display:flex; min-height:108px; flex-direction:column; justify-content:end; padding:14px; border:1px solid var(--hairline); background:var(--surface); color:var(--ink); }
    .responsive-table { width:100%; border-collapse:collapse; color:var(--body); text-align:left; } .responsive-table th,.responsive-table td { padding:15px; border-bottom:1px solid var(--hairline); vertical-align:top; } .responsive-table th { color:var(--ink); font-size:12px; text-transform:uppercase; letter-spacing:.08em; } .responsive-table td { font-size:14px; } .responsive-table td:first-child { color:var(--ink); font-weight:600; }
    footer { margin-top:38px; padding:64px max(24px, calc((100vw - 1200px) / 2)); background:var(--surface-dark); color:var(--on-dark); } .footer-grid { display:grid; grid-template-columns:2fr repeat(3, 1fr); gap:32px; } .footer-brand { font:400 30px/1 var(--display); } .footer-grid strong { display:block; margin-bottom:12px; color:var(--on-dark); font-size:13px; } .footer-grid span { display:block; color:color-mix(in srgb, var(--on-dark) 62%, transparent); font-size:13px; line-height:1.8; } .footer-credit { margin-top:48px; padding-top:18px; border-top:1px solid color-mix(in srgb, var(--on-dark) 13%, transparent); color:color-mix(in srgb, var(--on-dark) 55%, transparent); font-size:12px; }
    @media (max-width:780px) { .nav { padding:0 20px; } .nav-links { display:none; } .hero { grid-template-columns:1fr; width:min(100% - 40px, 620px); min-height:auto; padding:56px 0; } .product-window { min-height:260px; } .product-window pre { min-height:210px; } section { width:min(100% - 40px, 620px); padding:60px 0; } .type-row { grid-template-columns:1fr; gap:12px; } .callout { grid-template-columns:1fr; } .callout button { width:100%; } .footer-grid { grid-template-columns:1fr 1fr; } }
  </style>
</head>
<body>
  <nav class="nav"><a class="brand" href="#top">${escapeHtml(brandName)}</a><div class="nav-links"><a href="#colors">Colors</a><a href="#typography">Typography</a><a href="#components">Components</a><a href="#responsive">Responsive</a></div><a href="../../preview/" class="nav-cta">All previews</a></nav>
  <main id="top">
    <header class="hero"><div class="hero-copy"><span class="eyebrow">Design system analysis</span><h1 style="${escapeHtml(heroDisplayStyle)}">Design System Analysis of ${escapeHtml(brandName)}</h1><p>${escapeHtml(description)}</p><div class="hero-actions"><button class="button-primary">Explore ${escapeHtml(brandName)}</button><button class="button-secondary">Read the system</button></div></div><div class="product-window" aria-label="Design system code example"><div class="window-bar"><span></span><span></span><span></span></div><pre><span class="code-muted">// ${escapeHtml(brandName)} visual language</span>
<span class="code-accent">const</span> system = createDesignSystem({
  canvas: <span class="code-accent">"${escapeHtml(canvas)}"</span>,
  accent: <span class="code-accent">"${escapeHtml(primary)}"</span>,
  typography: <span class="code-accent">"${escapeHtml(displayFamily.split(",")[0])}"</span>,
  components: ${Object.keys(components).length}
});

render(system, <span class="code-accent">"with intent"</span>);</pre></div></header>
    <section id="colors"><span class="section-label">01 — Color palette</span><h2>${escapeHtml(brandName)} in color</h2><p class="section-intro">A role-based palette derived directly from the document. Brand, surface, and type tokens stay separate so their hierarchy reads immediately.</p>${tokenGroups.map(renderGroup).join("")}</section>
    <section id="typography"><span class="section-label">02 — Typography</span><h2>Voice, rhythm, and scale</h2><p class="section-intro">Display and body styles render from the document’s defined families, weights, tracking, and line heights.</p><div class="type-list">${typeRows || "<p>No typography styles supplied.</p>"}</div></section>
    <section id="components"><span class="section-label">03 — Components</span><h2>Interactive grammar</h2><p class="section-intro">Live component recipes: declared fill, text, border, radius, padding, and height are applied without a hand-authored site template.</p><div class="component-grid">${componentRows || "<p>No component recipes supplied.</p>"}</div><div class="feature-grid">${featureCards}</div><div class="callout"><div><h3>Make every surface feel like ${escapeHtml(brandName)}</h3><p>The preview combines the source document’s palette, type hierarchy, and component constraints into one coherent visual system.</p></div><button>Use DESIGN.md</button></div></section>
    <section><span class="section-label">04 — Spatial system</span><h2>Spacing and geometry</h2><div class="scale-grid">${spacingRows || "<p>No spacing scale supplied.</p>"}</div><div class="radius-grid" style="margin-top:24px">${radiusRows || "<p>No radius scale supplied.</p>"}</div></section>
    <section id="responsive"><span class="section-label">05 — Responsive behavior</span><h2>Designed to compress, not shrink</h2><table class="responsive-table"><thead><tr><th>Viewport</th><th>Width</th><th>Preview behavior</th></tr></thead><tbody><tr><td>Mobile</td><td>&lt; 768px</td><td>Single-column hero, hidden section links, stacked cards, and full-width calls to action.</td></tr><tr><td>Tablet</td><td>768–1024px</td><td>Multi-column token grids tighten while type remains legible and hierarchy stays intact.</td></tr><tr><td>Desktop</td><td>&gt; 1024px</td><td>Full navigation, two-column hero, expansive palette grid, and side-by-side component specimens.</td></tr></tbody></table></section>
  </main>
  <footer><div class="footer-grid"><div><div class="footer-brand">${escapeHtml(brandName)}</div><span>Compiled directly from DESIGN.md.</span></div><div><strong>Tokens</strong><span>${colorEntries.length} color roles</span><span>${Object.keys(typography).length} type styles</span></div><div><strong>Recipes</strong><span>${Object.keys(components).length} components</span><span>${Object.keys(spacing).length} spacing values</span></div><div><strong>Source</strong><span>${escapeHtml(sourcePath)}</span><span>Generated locally</span></div></div><div class="footer-credit">Generated preview — edit DESIGN.md, then run the named preview command again.</div></footer>
</body>
</html>`;
}

async function collectDesignFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) return collectDesignFiles(path);
    return entry.isFile() && entry.name === "DESIGN.md" ? [path] : [];
  }));
  return nested.flat().sort();
}

function renderIndex(entries) {
  const links = entries.map(({ name, href }) => `<a href="${escapeHtml(href)}">${escapeHtml(name)}<span>Open preview →</span></a>`).join("\n");
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>DESIGN.md previews</title><style>body{margin:0;background:#101114;color:#f4f3ee;font:16px/1.5 ui-sans-serif,system-ui,sans-serif}.shell{width:min(960px,calc(100% - 48px));margin:0 auto;padding:72px 0}h1{font-size:clamp(42px,8vw,80px);letter-spacing:-.06em;line-height:.9;margin:0 0 18px}p{color:#aaa}nav{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-top:48px}a{display:flex;justify-content:space-between;gap:16px;padding:20px;background:#1d1e22;border:1px solid #34353c;border-radius:12px;color:inherit;text-decoration:none}a:hover{background:#272830}span{color:#aaa;font-size:13px;white-space:nowrap}@media(max-width:600px){.shell{width:min(100% - 32px,960px);padding:48px 0}a{display:block}a span{display:block;margin-top:8px}}</style></head><body><main class="shell"><h1>DESIGN.md<br>previews</h1><p>Generated token catalogs for every design system in this repository.</p><nav>${links}</nav></main></body></html>`;
}

async function compilePreviewFile(root, file) {
  const source = await readFile(file, "utf8");
  const document = parseDesignDocument(source, relative(root, file));
  const output = resolve(dirname(file), "preview.html");
  const sourcePath = relative(root, file).split(sep).join("/");
  await writeFile(output, renderPreview(document, sourcePath));
  return {
    name: String(document.frontMatter.name ?? dirname(file).split(sep).at(-1)),
    output,
  };
}

export async function buildPreview(root = process.cwd(), name) {
  const designRoot = resolve(root, "design-md");
  const source = resolve(designRoot, name, "DESIGN.md");
  if (!source.startsWith(`${designRoot}${sep}`)) {
    throw new Error(`Invalid design name: ${name}`);
  }
  try {
    const entry = await compilePreviewFile(root, source);
    return { count: 1, name, previewPath: entry.output };
  } catch (error) {
    if (error?.code === "ENOENT") {
      throw new Error(`Unknown design: ${name}. Expected design-md/${name}/DESIGN.md.`);
    }
    throw error;
  }
}

export async function buildPreviews(root = process.cwd()) {
  const designRoot = resolve(root, "design-md");
  const files = await collectDesignFiles(designRoot);
  const entries = [];

  for (const file of files) {
    const entry = await compilePreviewFile(root, file);
    entries.push({ name: entry.name, href: `../${relative(root, entry.output).split(sep).join("/")}` });
  }

  const indexPath = resolve(root, "preview", "index.html");
  await mkdir(dirname(indexPath), { recursive: true });
  await writeFile(indexPath, renderIndex(entries));
  return { count: files.length, indexPath };
}

const isCli = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isCli) {
  const name = process.argv[2];
  const build = name ? buildPreview(process.cwd(), name) : buildPreviews();
  build.then(({ count, previewPath }) => {
    const target = previewPath ? relative(process.cwd(), previewPath) : "preview/index.html";
    console.log(`Generated ${count} preview${count === 1 ? "" : "s"}. Open ${target}.`);
  }).catch((error) => {
    console.error(error.stack || error.message);
    process.exitCode = 1;
  });
}
