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
  return resolved.includes("{") ? fallback : resolved;
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
  const canvas = firstString(colors, ["canvas", "canvas-light", "surface", "surface-light"], "#ffffff");
  const isDark = hexLuminance(canvas) < 0.25;
  const ink = firstString(colors, isDark ? ["on-dark", "ink", "primary", "body"] : ["ink", "body-strong", "primary", "on-dark"], isDark ? "#ffffff" : "#111111");
  const body = firstString(colors, ["body", "muted", "ink"], ink);
  const surface = firstString(colors, isDark ? ["surface-card", "surface-elevated", "surface", "canvas"] : ["surface-card", "surface-soft", "surface", "canvas"], canvas);
  const hairline = firstString(colors, ["hairline", "border", "hairline-soft", "surface-strong"], isDark ? "#333333" : "#dddddd");
  const primary = firstString(colors, ["primary", "brand", "accent", "link"], ink);
  const radius = firstString(rounded, ["md", "lg", "sm", "full", "none"], "8px");
  const fallbackFamily = firstString(typography["body-md"], ["fontFamily"], "ui-sans-serif, system-ui, sans-serif");
  const description = String(data.description ?? "No description supplied.");
  const defaults = { surface, ink, hairline, radius };
  const title = String(data.name ?? sourcePath.replace(/\/DESIGN\.md$/, ""));
  const swatches = Object.entries(colors).map(([name, value]) => colorSwatch(name, String(value))).join("\n");
  const typeRows = Object.entries(typography).map(([name, style]) => typographySample(name, style, data, fallbackFamily)).join("\n");
  const componentRows = Object.entries(components).map(([name, style]) => componentSample(name, style, data, defaults)).join("\n");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="${isDark ? "dark" : "light"}">
  <title>${escapeHtml(title)} — Design preview</title>
  <style>
    :root { color-scheme: ${isDark ? "dark" : "light"}; --canvas:${escapeHtml(canvas)}; --ink:${escapeHtml(ink)}; --body:${escapeHtml(body)}; --surface:${escapeHtml(surface)}; --hairline:${escapeHtml(hairline)}; --primary:${escapeHtml(primary)}; --radius:${escapeHtml(radius)}; --type:${escapeHtml(fallbackFamily)}; }
    * { box-sizing:border-box; }
    html { background:var(--canvas); }
    body { margin:0; background:var(--canvas); color:var(--ink); font-family:var(--type); font-size:16px; line-height:1.5; }
    button { cursor:pointer; }
    .shell { width:min(1200px, calc(100% - 48px)); margin:0 auto; }
    .masthead { padding:72px 0 54px; border-bottom:1px solid var(--hairline); }
    .eyebrow, code { font-family:ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; }
    .eyebrow { display:block; margin-bottom:20px; color:var(--body); font-size:12px; letter-spacing:.12em; text-transform:uppercase; }
    h1 { max-width:900px; margin:0; color:var(--ink); font-size:clamp(42px, 7vw, 96px); letter-spacing:-.055em; line-height:.94; }
    .summary { max-width:760px; margin:28px 0 0; color:var(--body); font-size:clamp(18px, 2.5vw, 24px); }
    .signal { display:flex; align-items:center; gap:10px; margin-top:32px; color:var(--body); font-size:13px; }
    .signal__dot { width:11px; height:11px; border-radius:50%; background:var(--primary); box-shadow:0 0 0 5px color-mix(in srgb, var(--primary) 18%, transparent); }
    section { padding:56px 0; border-bottom:1px solid var(--hairline); }
    h2 { margin:0 0 24px; color:var(--ink); font-size:13px; letter-spacing:.13em; text-transform:uppercase; }
    .swatches { display:grid; grid-template-columns:repeat(auto-fill, minmax(180px, 1fr)); border:1px solid var(--hairline); border-radius:var(--radius); overflow:hidden; }
    .swatch { min-width:0; border-right:1px solid var(--hairline); border-bottom:1px solid var(--hairline); }
    .swatch__color { height:92px; }
    .swatch__copy, .component__meta { display:flex; align-items:center; justify-content:space-between; gap:12px; padding:12px; }
    .swatch strong, .component strong { font-size:13px; overflow-wrap:anywhere; }
    code { color:var(--body); font-size:11px; overflow-wrap:anywhere; }
    .type-list { border-top:1px solid var(--hairline); }
    .type-row { display:grid; grid-template-columns:minmax(150px, .28fr) 1fr; gap:24px; align-items:center; border-bottom:1px solid var(--hairline); padding:22px 0; }
    .type-row__meta { display:grid; gap:4px; }
    .type-row p { margin:0; color:var(--ink); overflow-wrap:anywhere; }
    .components { display:grid; grid-template-columns:repeat(auto-fit, minmax(230px, 1fr)); gap:16px; }
    .component { overflow:hidden; border:1px solid var(--hairline); border-radius:var(--radius); background:var(--surface); }
    .component__preview { display:flex; min-height:132px; align-items:center; justify-content:center; padding:24px; background:color-mix(in srgb, var(--surface) 86%, var(--canvas)); }
    .component__preview > * { max-width:100%; text-transform:capitalize; }
    .component__meta { border-top:1px solid var(--hairline); background:var(--canvas); }
    footer { display:flex; justify-content:space-between; gap:20px; padding:32px 0 56px; color:var(--body); font-size:13px; }
    .catalog-link { color:var(--ink); font-size:12px; letter-spacing:.1em; text-transform:uppercase; text-decoration-thickness:1px; text-underline-offset:4px; }
    @media (max-width:640px) { .shell { width:min(100% - 32px, 1200px); } .masthead { padding:48px 0 36px; } section { padding:40px 0; } .type-row { grid-template-columns:1fr; gap:12px; } footer { display:block; } }
  </style>
</head>
<body>
  <main class="shell">
    <header class="masthead">
      <span class="eyebrow">Compiled DESIGN.md preview</span>
      <h1>${escapeHtml(title)}</h1>
      <p class="summary">${escapeHtml(description)}</p>
      <div class="signal"><span class="signal__dot"></span><span>${escapeHtml(sourcePath)}</span></div>
      <a class="catalog-link" href="../../preview/">All design previews</a>
    </header>
    <section aria-labelledby="palette"><h2 id="palette">Palette · ${Object.keys(colors).length} tokens</h2><div class="swatches">${swatches || "<p>No color tokens defined.</p>"}</div></section>
    <section aria-labelledby="type"><h2 id="type">Typography · ${Object.keys(typography).length} styles</h2><div class="type-list">${typeRows || "<p>No typography tokens defined.</p>"}</div></section>
    <section aria-labelledby="components"><h2 id="components">Components · ${Object.keys(components).length} recipes</h2><div class="components">${componentRows || "<p>No component recipes defined.</p>"}</div></section>
    <footer><span>Generated from DESIGN.md. Do not edit this file directly.</span><span>${escapeHtml(sourcePath)}</span></footer>
  </main>
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
