#!/usr/bin/env node

/**
 * @license
 * Copyright 2026
 * CLI tool for browsing, selecting, and applying design systems from awesome-design-md.
 */

const fs = require('node:fs');
const path = require('node:path');
const readline = require('node:readline');

const ROOT_DIR = path.resolve(__dirname, '..');
const CATALOG_PATH = path.join(ROOT_DIR, 'references', 'catalog.json');
const DESIGN_MD_DIR = path.join(ROOT_DIR, 'design-md');

const BRAND_ALIASES = {
  linear: 'linear.app',
  mistral: 'mistral.ai',
  x: 'x.ai',
  twitter: 'x.ai',
  xai: 'x.ai',
  opencode: 'opencode.ai',
  'open-code': 'opencode.ai',
  together: 'together.ai',
  'bmw-m': 'bmw-m',
  'bmw m': 'bmw-m',
  bmwm: 'bmw-m',
  dell: 'dell-1996',
  nintendo: 'nintendo-2001'
};

function loadCatalog() {
  if (!fs.existsSync(CATALOG_PATH)) {
    console.error('Catalog not found at ' + CATALOG_PATH);
    console.error('Run: node scripts/generate-catalog.cjs');
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf8'));
}

/**
 * Resolves a brand query to a catalog entry using exact match, common aliases,
 * or fuzzy substring/prefix matching.
 * @param {string} input
 * @param {Array<object>} catalog
 * @returns {object|null}
 */
function resolveBrand(input, catalog) {
  if (!input || typeof input !== 'string') return null;
  const raw = input.trim().toLowerCase();
  if (!raw) return null;

  // 1. Direct alias lookup
  if (BRAND_ALIASES[raw]) {
    const aliasTarget = BRAND_ALIASES[raw];
    const found = catalog.find(i => i.id.toLowerCase() === aliasTarget);
    if (found) return found;
  }

  // 2. Exact match on id
  const exactId = catalog.find(i => i.id.toLowerCase() === raw);
  if (exactId) return exactId;

  // 3. Exact match on name
  const exactName = catalog.find(i => i.name.toLowerCase() === raw);
  if (exactName) return exactName;

  // 4. Normalized match (strip non-alphanumeric)
  const normRaw = raw.replace(/[^a-z0-9]/g, '');
  if (normRaw) {
    const normMatch = catalog.find(i => {
      return (
        i.id.replace(/[^a-z0-9]/g, '').toLowerCase() === normRaw ||
        i.name.replace(/[^a-z0-9]/g, '').toLowerCase() === normRaw
      );
    });
    if (normMatch) return normMatch;
  }

  // 5. StartsWith prefix match on id
  const prefixMatch = catalog.find(i => i.id.toLowerCase().startsWith(raw));
  if (prefixMatch) return prefixMatch;

  // 6. Contains match on id or name
  const containsMatch = catalog.find(
    i => i.id.toLowerCase().includes(raw) || i.name.toLowerCase().includes(raw)
  );
  if (containsMatch) return containsMatch;

  return null;
}

function parseDesignMdFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const result = {
    content,
    name: '',
    description: '',
    version: '',
    colors: {},
    typography: {},
    rounded: {},
    spacing: {},
    components: {},
    bodyMarkdown: ''
  };

  const lines = content.split(/\r?\n/);

  if (content.startsWith('---')) {
    let inFrontmatter = false;
    let currentSection = null;
    let currentSubKey = null;
    let endFrontmatterIndex = -1;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.trim() === '---') {
        if (!inFrontmatter) {
          inFrontmatter = true;
          continue;
        } else {
          endFrontmatterIndex = i;
          break;
        }
      }
      if (!inFrontmatter) continue;

      if (/^[a-zA-Z0-9_-]+:/.test(line)) {
        const keyMatch = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);
        if (keyMatch) {
          currentSection = keyMatch[1];
          currentSubKey = null;
          const inlineVal = keyMatch[2].trim().replace(/^["']|["']$/g, '');
          if (inlineVal) {
            if (currentSection === 'name') result.name = inlineVal;
            else if (currentSection === 'description') result.description = inlineVal;
            else if (currentSection === 'version') result.version = inlineVal;
          }
          continue;
        }
      }

      if (currentSection === 'colors') {
        const m = line.match(/^\s+([a-zA-Z0-9_-]+):\s*["']?([^"'\r\n]+?)["']?\s*$/);
        if (m) result.colors[m[1]] = m[2];
      } else if (currentSection === 'typography') {
        const subKeyMatch = line.match(/^  ([a-zA-Z0-9_-]+):/);
        if (subKeyMatch) {
          currentSubKey = subKeyMatch[1];
          result.typography[currentSubKey] = {};
          continue;
        }
        if (currentSubKey) {
          const propMatch = line.match(/^\s+([a-zA-Z0-9_-]+):\s*["']?([^"'\r\n]+?)["']?\s*$/);
          if (propMatch) {
            result.typography[currentSubKey][propMatch[1]] = propMatch[2];
          }
        }
      } else if (currentSection === 'rounded') {
        const m = line.match(/^\s+([a-zA-Z0-9_-]+):\s*["']?([^"'\r\n]+?)["']?\s*$/);
        if (m) result.rounded[m[1]] = m[2];
      } else if (currentSection === 'spacing') {
        const m = line.match(/^\s+([a-zA-Z0-9_-]+):\s*["']?([^"'\r\n]+?)["']?\s*$/);
        if (m) result.spacing[m[1]] = m[2];
      } else if (currentSection === 'components') {
        const subKeyMatch = line.match(/^  ([a-zA-Z0-9_-]+):/);
        if (subKeyMatch) {
          currentSubKey = subKeyMatch[1];
          result.components[currentSubKey] = {};
          continue;
        }
        if (currentSubKey) {
          const propMatch = line.match(/^\s+([a-zA-Z0-9_-]+):\s*["']?([^"'\r\n]+?)["']?\s*$/);
          if (propMatch) {
            result.components[currentSubKey][propMatch[1]] = propMatch[2];
          }
        }
      } else if (currentSection === 'description' && !result.description) {
        result.description = (result.description ? result.description + ' ' : '') + line.trim().replace(/^["']|["']$/g, '');
      }
    }

    if (endFrontmatterIndex !== -1 && endFrontmatterIndex + 1 < lines.length) {
      result.bodyMarkdown = lines.slice(endFrontmatterIndex + 1).join('\n').trim();
    }
  } else {
    // Markdown-based colors
    const colorLines = content.match(/[-*]\s+\*\*([^*]+)\*\*\s*\((#[0-9a-fA-F]{3,8}|rgba?\([^)]+\))\)/g);
    if (colorLines) {
      for (const line of colorLines) {
        const m = line.match(/[-*]\s+\*\*([^*]+)\*\*\s*\((#[0-9a-fA-F]{3,8}|rgba?\([^)]+\))\)/);
        if (m) {
          const key = m[1].toLowerCase().replace(/[^a-z0-9]+/g, '-');
          result.colors[key] = m[2];
        }
      }
    }
    result.bodyMarkdown = content;
  }

  return result;
}

function printHelp() {
  console.log(`
=====================================================
   AWESOME DESIGN MD - DESIGN SYSTEM PICKER & CLI
=====================================================

Usage:
  design-cli <command> [options]

Commands:
  slice <brand-id> [--json]                  Generate AI-ready UI slicing reference & tokens
  guide <brand-id>                           Alias for slice command
  list [--category <name>] [--dark|--light]  List available design systems
  categories                                 List all design categories & counts
  search <query>                             Search brands by keyword, vibe, tag
  info <brand-id>                            View detailed tokens & rules for a brand
  apply <brand-id> [--dest <path>]           Copy DESIGN.md to target project root
  export-css <brand-id> [--dest <path>]      Export color tokens as CSS variables
  export-tailwind <brand-id> [--dest <path>] Export Tailwind color theme snippet
  interactive                                Launch interactive terminal picker menu

Examples:
  node scripts/design-cli.cjs slice apple
  node scripts/design-cli.cjs slice linear
  node scripts/design-cli.cjs slice stripe --json
  node scripts/design-cli.cjs list --category "FinTech"
  node scripts/design-cli.cjs search "dark minimal"
  node scripts/design-cli.cjs apply linear --dest ./DESIGN.md
`);
}

function handleSlice(brandInput, options = {}, catalog) {
  if (!brandInput) {
    console.error('Usage: design-cli slice <brand-id> [--json]');
    process.exit(1);
  }

  const item = resolveBrand(brandInput, catalog);
  if (!item) {
    console.error(`Design "${brandInput}" not found in catalog.`);
    console.error(`Try: design-cli search "${brandInput}" or design-cli list`);
    process.exit(1);
  }

  const filePath = path.join(ROOT_DIR, item.filePath);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    process.exit(1);
  }

  const parsed = parseDesignMdFile(filePath);

  if (options.json) {
    const jsonOutput = {
      brand: item.name,
      id: item.id,
      category: item.category,
      description: item.description,
      primaryColor: item.primaryColor,
      canvasColor: item.canvasColor,
      surfaceColor: item.surfaceColor,
      colors: parsed.colors,
      typography: parsed.typography,
      rounded: parsed.rounded,
      spacing: parsed.spacing,
      components: parsed.components
    };
    console.log(JSON.stringify(jsonOutput, null, 2));
    return;
  }

  console.log(`=====================================================================`);
  console.log(`  UI SLICING REFERENCE: ${item.name.toUpperCase()} (${item.id})`);
  console.log(`  Category: ${item.category}`);
  console.log(`=====================================================================\n`);

  console.log(`### Brand Identity & Aesthetic Character`);
  console.log(`${item.description}\n`);

  console.log(`### 1. Palette & Surface Tokens`);
  console.log(`- Canvas (Page Background): \`${item.canvasColor}\``);
  console.log(`- Primary Accent: \`${item.primaryColor}\``);
  console.log(`- Surface Tiers: \`${item.surfaceColor}\``);

  const keyColorNames = ['hairline', 'ink', 'body', 'divider-soft', 'on-primary', 'primary-hover', 'primary-focus'];
  for (const name of keyColorNames) {
    if (parsed.colors[name]) {
      console.log(`- ${name}: \`${parsed.colors[name]}\``);
    }
  }

  const surfaceKeys = Object.keys(parsed.colors).filter(k => k.startsWith('surface-'));
  if (surfaceKeys.length > 0) {
    console.log(`- Surface Hierarchy: ${surfaceKeys.map(k => `${k}: \`${parsed.colors[k]}\``).join(', ')}`);
  }
  console.log('');

  if (Object.keys(parsed.typography).length > 0) {
    console.log(`### 2. Typography Rules`);
    for (const [name, style] of Object.entries(parsed.typography).slice(0, 8)) {
      const parts = [];
      if (style.fontFamily) parts.push(`font: "${style.fontFamily}"`);
      if (style.fontSize) parts.push(`size: ${style.fontSize}`);
      if (style.fontWeight) parts.push(`weight: ${style.fontWeight}`);
      if (style.lineHeight) parts.push(`lineHeight: ${style.lineHeight}`);
      if (style.letterSpacing) parts.push(`letterSpacing: ${style.letterSpacing}`);
      console.log(`- **${name}**: ${parts.join(' | ')}`);
    }
    console.log('');
  }

  if (Object.keys(parsed.rounded).length > 0) {
    console.log(`### 3. Corner Radii Tokens`);
    const radii = Object.entries(parsed.rounded).map(([k, v]) => `${k}: \`${v}\``).join(', ');
    console.log(`- ${radii}\n`);
  }

  if (Object.keys(parsed.components).length > 0) {
    console.log(`### 4. Component Rules`);
    const btnKeys = Object.keys(parsed.components).filter(k => k.includes('button'));
    if (btnKeys.length > 0) {
      console.log(`- Button Styles:`);
      for (const k of btnKeys.slice(0, 4)) {
        const comp = parsed.components[k];
        const props = Object.entries(comp).map(([prop, val]) => `${prop}: ${val}`).join(', ');
        console.log(`  * ${k} (${props})`);
      }
    }
    const cardKeys = Object.keys(parsed.components).filter(k => k.includes('card') || k.includes('tile'));
    if (cardKeys.length > 0) {
      console.log(`- Cards & Tiles:`);
      for (const k of cardKeys.slice(0, 3)) {
        const comp = parsed.components[k];
        const props = Object.entries(comp).map(([prop, val]) => `${prop}: ${val}`).join(', ');
        console.log(`  * ${k} (${props})`);
      }
    }
    console.log('');
  }

  console.log(`### 5. Frontend Slicing Checklist`);
  console.log(`[ ] Canvas Depth: Set root canvas to \`${item.canvasColor}\` and layered surfaces with hair-thin borders.`);
  console.log(`[ ] Accent Restraint: Use \`${item.primaryColor}\` exclusively for primary CTAs and active states.`);
  console.log(`[ ] Typography Stack: Respect font fallbacks and tracking (e.g. negative letter-spacing on display headlines).`);
  console.log(`[ ] Border Precision: Use 1px hairlines (${parsed.colors.hairline || '#e0e0e0'}) rather than generic shadows.`);
  console.log(`[ ] Component Radii: Adhere to brand radii (${parsed.rounded.md || parsed.rounded.pill || 'subtle rounded'}).\n`);
}

function handleList(args, catalog) {
  let categoryFilter = null;
  let modeFilter = null;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--category' && args[i + 1]) {
      categoryFilter = args[i + 1].toLowerCase();
      i++;
    } else if (args[i] === '--dark') {
      modeFilter = 'dark';
    } else if (args[i] === '--light') {
      modeFilter = 'light';
    }
  }

  const filtered = catalog.filter(item => {
    if (categoryFilter && !item.category.toLowerCase().includes(categoryFilter)) {
      return false;
    }
    if (modeFilter && !item.tags.includes(modeFilter)) {
      return false;
    }
    return true;
  });

  console.log(`\nAvailable Design Systems (${filtered.length} found):\n`);
  console.log(
    'ID'.padEnd(16) +
    'Category'.padEnd(32) +
    'Primary'.padEnd(10) +
    'Canvas'.padEnd(10) +
    'Description'
  );
  console.log('-'.repeat(100));

  for (const item of filtered) {
    const desc = item.description.length > 40 ? item.description.slice(0, 37) + '...' : item.description;
    console.log(
      item.id.padEnd(16) +
      item.category.padEnd(32) +
      item.primaryColor.padEnd(10) +
      item.canvasColor.padEnd(10) +
      desc
    );
  }
  console.log(`\nTip: Run 'design-cli slice <brand-id>' or 'design-cli apply <brand-id>' to use.\n`);
}

function handleCategories(catalog) {
  const counts = {};
  for (const item of catalog) {
    counts[item.category] = (counts[item.category] || 0) + 1;
  }

  console.log('\nDesign System Categories:\n');
  for (const [cat, count] of Object.entries(counts)) {
    console.log(`  * ${cat.padEnd(36)} : ${count} designs`);
  }
  console.log('\nRun "design-cli list --category <category-name>" to inspect a category.\n');
}

function handleSearch(query, catalog) {
  if (!query) {
    console.log('Please provide a search query: design-cli search <keyword>');
    return;
  }
  const q = query.toLowerCase();
  const results = catalog.filter(item => {
    return (
      item.id.toLowerCase().includes(q) ||
      item.name.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.tags.some(t => t.toLowerCase().includes(q))
    );
  });

  console.log(`\nSearch results for "${query}" (${results.length} matches):\n`);
  if (results.length === 0) {
    console.log('  No matching designs found. Try a different query like "dark", "saas", "fintech", or "minimal".\n');
    return;
  }

  for (const item of results) {
    console.log(`- [${item.id}] ${item.name} (${item.category})`);
    console.log(`  Primary: ${item.primaryColor} | Canvas: ${item.canvasColor}`);
    console.log(`  Vibe: ${item.description.slice(0, 110)}...`);
    console.log('');
  }
}

function handleInfo(brandInput, catalog) {
  const item = resolveBrand(brandInput, catalog);
  if (!item) {
    console.error(`Design "${brandInput}" not found in catalog.`);
    return;
  }

  const filePath = path.join(ROOT_DIR, item.filePath);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return;
  }

  const parsed = parseDesignMdFile(filePath);

  console.log(`\n========================================================`);
  console.log(`  ${item.name.toUpperCase()} (${item.id})`);
  console.log(`  Category: ${item.category}`);
  console.log(`========================================================\n`);
  console.log(`Summary:\n${item.description}\n`);

  console.log(`Primary Colors:`);
  console.log(`  Primary: ${item.primaryColor}`);
  console.log(`  Canvas:  ${item.canvasColor}`);
  console.log(`  Surface: ${item.surfaceColor}\n`);

  if (Object.keys(parsed.colors).length > 0) {
    console.log(`Color Tokens (${Object.keys(parsed.colors).length}):`);
    for (const [name, val] of Object.entries(parsed.colors).slice(0, 16)) {
      console.log(`  --${name}: ${val}`);
    }
    if (Object.keys(parsed.colors).length > 16) {
      console.log(`  ... and ${Object.keys(parsed.colors).length - 16} more tokens in DESIGN.md`);
    }
    console.log('');
  }

  if (Object.keys(parsed.typography).length > 0) {
    console.log(`Typography Tokens:`);
    for (const [name, style] of Object.entries(parsed.typography).slice(0, 5)) {
      console.log(`  ${name}: ${style.fontFamily || 'Sans'} | ${style.fontSize || ''} | weight: ${style.fontWeight || 'normal'}`);
    }
    console.log('');
  }

  console.log(`To apply to your project:`);
  console.log(`  node scripts/design-cli.cjs apply ${item.id} --dest ./DESIGN.md\n`);
}

function handleApply(brandInput, destPath, catalog) {
  const item = resolveBrand(brandInput, catalog);
  if (!item) {
    console.error(`Design "${brandInput}" not found in catalog.`);
    process.exit(1);
  }

  const srcPath = path.join(ROOT_DIR, item.filePath);
  if (!fs.existsSync(srcPath)) {
    console.error(`Source file not found: ${srcPath}`);
    process.exit(1);
  }

  const targetPath = path.resolve(destPath || path.join(process.cwd(), 'DESIGN.md'));
  const targetDir = path.dirname(targetPath);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  fs.copyFileSync(srcPath, targetPath);
  console.log(`\n Successfully applied ${item.name} design system!`);
  console.log(` Copied to: ${targetPath}`);
  console.log(` Primary Color: ${item.primaryColor}`);
  console.log(` Canvas Color:  ${item.canvasColor}`);
  console.log(` Any AI agent or developer can now follow ${path.basename(targetPath)} for consistent UI styling.\n`);
}

function handleExportCss(brandInput, destPath, catalog) {
  const item = resolveBrand(brandInput, catalog);
  if (!item) {
    console.error(`Design "${brandInput}" not found in catalog.`);
    process.exit(1);
  }

  const srcPath = path.join(ROOT_DIR, item.filePath);
  const parsed = parseDesignMdFile(srcPath);

  let css = `/**\n * Design Tokens for ${item.name} (${item.id})\n * Source: awesome-design-md\n */\n\n:root {\n`;
  for (const [name, val] of Object.entries(parsed.colors)) {
    css += `  --color-${name}: ${val};\n`;
  }
  if (!parsed.colors.primary && item.primaryColor) {
    css += `  --color-primary: ${item.primaryColor};\n`;
  }
  if (!parsed.colors.canvas && item.canvasColor) {
    css += `  --color-canvas: ${item.canvasColor};\n`;
  }
  css += `}\n`;

  if (destPath) {
    const targetPath = path.resolve(destPath);
    const targetDir = path.dirname(targetPath);
    if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
    fs.writeFileSync(targetPath, css, 'utf8');
    console.log(`\n Exported CSS variables to: ${targetPath}\n`);
  } else {
    console.log('\n' + css);
  }
}

function handleExportTailwind(brandInput, destPath, catalog) {
  const item = resolveBrand(brandInput, catalog);
  if (!item) {
    console.error(`Design "${brandInput}" not found in catalog.`);
    process.exit(1);
  }

  const srcPath = path.join(ROOT_DIR, item.filePath);
  const parsed = parseDesignMdFile(srcPath);

  const colorsObj = {};
  for (const [name, val] of Object.entries(parsed.colors)) {
    colorsObj[name] = val;
  }
  if (!colorsObj.primary && item.primaryColor) colorsObj.primary = item.primaryColor;
  if (!colorsObj.canvas && item.canvasColor) colorsObj.canvas = item.canvasColor;

  const snippet = `// Tailwind CSS configuration snippet for ${item.name}
// Add to tailwind.config.js under theme.extend:

module.exports = {
  theme: {
    extend: {
      colors: ${JSON.stringify(colorsObj, null, 8).replace(/\n\s*}/, '\n      }')}
    }
  }
};
`;

  if (destPath) {
    const targetPath = path.resolve(destPath);
    const targetDir = path.dirname(targetPath);
    if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
    fs.writeFileSync(targetPath, snippet, 'utf8');
    console.log(`\n Exported Tailwind config snippet to: ${targetPath}\n`);
  } else {
    console.log('\n' + snippet);
  }
}

function startInteractive(catalog) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log(`\n=====================================================`);
  console.log(`  AWESOME DESIGN MD - INTERACTIVE DESIGN SELECTOR`);
  console.log(`=====================================================\n`);

  console.log(`Choose a mode:`);
  console.log(`1. Browse by Category`);
  console.log(`2. Search by Keyword (e.g. dark, fintech, minimal, modern)`);
  console.log(`3. Direct brand name (e.g. linear.app, stripe, vercel, apple)`);
  console.log(`4. Exit\n`);

  rl.question('Select option (1-4): ', answer => {
    const opt = answer.trim();
    if (opt === '1') {
      const categories = Array.from(new Set(catalog.map(i => i.category))).sort();
      console.log('\nCategories:');
      categories.forEach((cat, idx) => console.log(`${idx + 1}. ${cat}`));
      rl.question('\nSelect category number: ', catAns => {
        const catIdx = parseInt(catAns.trim(), 10) - 1;
        if (catIdx >= 0 && catIdx < categories.length) {
          const chosenCat = categories[catIdx];
          const items = catalog.filter(i => i.category === chosenCat);
          console.log(`\nDesigns in ${chosenCat}:`);
          items.forEach((item, idx) => {
            console.log(`${idx + 1}. ${item.id.padEnd(16)} - ${item.name} (${item.primaryColor})`);
          });
          askBrandSelection(items, rl, catalog);
        } else {
          console.log('Invalid category.');
          rl.close();
        }
      });
    } else if (opt === '2') {
      rl.question('\nEnter search keyword: ', q => {
        const query = q.trim().toLowerCase();
        const results = catalog.filter(item => {
          return (
            item.id.toLowerCase().includes(query) ||
            item.name.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query) ||
            item.tags.some(t => t.toLowerCase().includes(query))
          );
        });
        if (results.length === 0) {
          console.log('No matches found.');
          rl.close();
          return;
        }
        console.log(`\nSearch results (${results.length}):`);
        results.forEach((item, idx) => {
          console.log(`${idx + 1}. ${item.id.padEnd(16)} - ${item.name} (${item.primaryColor})`);
        });
        askBrandSelection(results, rl, catalog);
      });
    } else if (opt === '3') {
      rl.question('\nEnter brand ID (e.g. linear.app, stripe): ', brandId => {
        const item = resolveBrand(brandId, catalog);
        if (!item) {
          console.log(`Brand "${brandId}" not found.`);
          rl.close();
        } else {
          showActionMenu(item, rl, catalog);
        }
      });
    } else {
      console.log('Goodbye!');
      rl.close();
    }
  });
}

function askBrandSelection(list, rl, catalog) {
  rl.question('\nSelect design number: ', ans => {
    const idx = parseInt(ans.trim(), 10) - 1;
    if (idx >= 0 && idx < list.length) {
      showActionMenu(list[idx], rl, catalog);
    } else {
      console.log('Invalid selection.');
      rl.close();
    }
  });
}

function showActionMenu(item, rl, catalog) {
  console.log(`\nSelected: ${item.name} (${item.id})`);
  console.log(`Primary: ${item.primaryColor} | Canvas: ${item.canvasColor}`);
  console.log(`Description: ${item.description.slice(0, 120)}...\n`);
  console.log(`Actions:`);
  console.log(`1. View UI Slicing reference (AI-ready)`);
  console.log(`2. Apply DESIGN.md to current project (./DESIGN.md)`);
  console.log(`3. View full design tokens & details`);
  console.log(`4. Export CSS variables`);
  console.log(`5. Export Tailwind theme config`);
  console.log(`6. Exit\n`);

  rl.question('Choose action (1-6): ', actAns => {
    const act = actAns.trim();
    if (act === '1') {
      handleSlice(item.id, {}, catalog);
    } else if (act === '2') {
      handleApply(item.id, './DESIGN.md', catalog);
    } else if (act === '3') {
      handleInfo(item.id, catalog);
    } else if (act === '4') {
      handleExportCss(item.id, null, catalog);
    } else if (act === '5') {
      handleExportTailwind(item.id, null, catalog);
    }
    rl.close();
  });
}

function main() {
  const catalog = loadCatalog();
  const args = process.argv.slice(2);

  if (args.length === 0) {
    if (process.stdin.isTTY) {
      startInteractive(catalog);
    } else {
      printHelp();
    }
    return;
  }

  const cmd = args[0].toLowerCase();
  const rest = args.slice(1);

  switch (cmd) {
    case 'slice':
    case 'guide':
    case 'prompt': {
      if (!rest[0]) {
        console.error('Usage: design-cli slice <brand-id> [--json]');
        process.exit(1);
      }
      const isJson = rest.includes('--json');
      handleSlice(rest[0], { json: isJson }, catalog);
      break;
    }
    case 'list':
      handleList(rest, catalog);
      break;
    case 'categories':
    case 'category':
      handleCategories(catalog);
      break;
    case 'search':
    case 'find':
      handleSearch(rest.join(' '), catalog);
      break;
    case 'info':
    case 'show':
    case 'view':
      if (!rest[0]) {
        console.error('Usage: design-cli info <brand-id>');
        process.exit(1);
      }
      handleInfo(rest[0], catalog);
      break;
    case 'apply':
    case 'use': {
      if (!rest[0]) {
        console.error('Usage: design-cli apply <brand-id> [--dest <path>]');
        process.exit(1);
      }
      let dest = './DESIGN.md';
      const destIdx = rest.indexOf('--dest');
      if (destIdx !== -1 && rest[destIdx + 1]) {
        dest = rest[destIdx + 1];
      }
      handleApply(rest[0], dest, catalog);
      break;
    }
    case 'export-css':
    case 'css': {
      if (!rest[0]) {
        console.error('Usage: design-cli export-css <brand-id> [--dest <path>]');
        process.exit(1);
      }
      let dest = null;
      const destIdx = rest.indexOf('--dest');
      if (destIdx !== -1 && rest[destIdx + 1]) {
        dest = rest[destIdx + 1];
      }
      handleExportCss(rest[0], dest, catalog);
      break;
    }
    case 'export-tailwind':
    case 'tailwind': {
      if (!rest[0]) {
        console.error('Usage: design-cli export-tailwind <brand-id> [--dest <path>]');
        process.exit(1);
      }
      let dest = null;
      const destIdx = rest.indexOf('--dest');
      if (destIdx !== -1 && rest[destIdx + 1]) {
        dest = rest[destIdx + 1];
      }
      handleExportTailwind(rest[0], dest, catalog);
      break;
    }
    case 'interactive':
    case 'menu':
      startInteractive(catalog);
      break;
    case 'help':
    case '--help':
    case '-h':
      printHelp();
      break;
    default:
      console.error(`Unknown command: ${cmd}`);
      printHelp();
      process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  loadCatalog,
  resolveBrand,
  parseDesignMdFile,
  handleSlice,
  BRAND_ALIASES
};
