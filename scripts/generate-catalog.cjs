/**
 * @license
 * Copyright 2026
 * Script to parse all design-md directories and build structured catalog references.
 */

const fs = require('node:fs');
const path = require('node:path');

const CATEGORY_MAP = {
  // Developer Tools & Dark Craft
  'linear.app': 'Developer Tools & Dark Craft',
  'cursor': 'Developer Tools & Dark Craft',
  'warp': 'Developer Tools & Dark Craft',
  'raycast': 'Developer Tools & Dark Craft',
  'supabase': 'Developer Tools & Dark Craft',
  'vercel': 'Developer Tools & Dark Craft',
  'resend': 'Developer Tools & Dark Craft',
  'hashicorp': 'Developer Tools & Dark Craft',
  'sentry': 'Developer Tools & Dark Craft',
  'clickhouse': 'Developer Tools & Dark Craft',
  'mongodb': 'Developer Tools & Dark Craft',
  'expo': 'Developer Tools & Dark Craft',
  'sanity': 'Developer Tools & Dark Craft',

  // AI & Machine Learning
  'claude': 'AI & Machine Learning',
  'cohere': 'AI & Machine Learning',
  'mistral.ai': 'AI & Machine Learning',
  'ollama': 'AI & Machine Learning',
  'replicate': 'AI & Machine Learning',
  'runwayml': 'AI & Machine Learning',
  'together.ai': 'AI & Machine Learning',
  'x.ai': 'AI & Machine Learning',
  'elevenlabs': 'AI & Machine Learning',
  'minimax': 'AI & Machine Learning',
  'lovable': 'AI & Machine Learning',
  'composio': 'AI & Machine Learning',
  'opencode.ai': 'AI & Machine Learning',
  'voltagent': 'AI & Machine Learning',

  // FinTech, Web3 & High-Trust
  'stripe': 'FinTech & High-Trust',
  'revolut': 'FinTech & High-Trust',
  'wise': 'FinTech & High-Trust',
  'coinbase': 'FinTech & High-Trust',
  'binance': 'FinTech & High-Trust',
  'kraken': 'FinTech & High-Trust',
  'mastercard': 'FinTech & High-Trust',

  // Clean, Minimal & SaaS Productivity
  'apple': 'Clean, Minimal & Editorial',
  'notion': 'Clean, Minimal & Editorial',
  'mintlify': 'Clean, Minimal & Editorial',
  'cal': 'Clean, Minimal & Editorial',
  'superhuman': 'Clean, Minimal & Editorial',
  'clay': 'Clean, Minimal & Editorial',
  'airtable': 'Clean, Minimal & Editorial',
  'intercom': 'Clean, Minimal & Editorial',
  'zapier': 'Clean, Minimal & Editorial',

  // Design, Creative & Collaborative Platforms
  'figma': 'Design & Creative Tools',
  'framer': 'Design & Creative Tools',
  'webflow': 'Design & Creative Tools',
  'miro': 'Design & Creative Tools',
  'slack': 'Design & Creative Tools',
  'posthog': 'Design & Creative Tools',
  'pinterest': 'Design & Creative Tools',
  'shopify': 'Design & Creative Tools',

  // Luxury, Automotive & Performance
  'bmw': 'Luxury & Automotive',
  'bmw-m': 'Luxury & Automotive',
  'bugatti': 'Luxury & Automotive',
  'ferrari': 'Luxury & Automotive',
  'lamborghini': 'Luxury & Automotive',
  'renault': 'Luxury & Automotive',
  'spacex': 'Luxury & Automotive',
  'tesla': 'Luxury & Automotive',

  // Tech Giants & Lifestyle Enterprise
  'airbnb': 'Tech Giants & Lifestyle',
  'ibm': 'Tech Giants & Lifestyle',
  'meta': 'Tech Giants & Lifestyle',
  'nike': 'Tech Giants & Lifestyle',
  'nvidia': 'Tech Giants & Lifestyle',
  'playstation': 'Tech Giants & Lifestyle',
  'spotify': 'Tech Giants & Lifestyle',
  'starbucks': 'Tech Giants & Lifestyle',
  'uber': 'Tech Giants & Lifestyle',
  'vodafone': 'Tech Giants & Lifestyle',
  'hp': 'Tech Giants & Lifestyle',

  // Editorial & Media
  'theverge': 'Editorial & Media',
  'wired': 'Editorial & Media',

  // Retro & Nostalgia
  'dell-1996': 'Retro & Nostalgia',
  'nintendo-2001': 'Retro & Nostalgia'
};

const VIBE_KEYWORDS = {
  'Developer Tools & Dark Craft': ['dark mode', 'dense', 'code', 'terminal', 'developer', 'technical', 'craft'],
  'AI & Machine Learning': ['ai', 'futuristic', 'modern', 'intelligent', 'llm', 'generative'],
  'FinTech & High-Trust': ['fintech', 'money', 'banking', 'crypto', 'trust', 'metrics', 'dashboard'],
  'Clean, Minimal & Editorial': ['minimal', 'clean', 'simple', 'paper', 'typography', 'productivity'],
  'Design & Creative Tools': ['creative', 'playful', 'canvas', 'collaboration', 'vibrant', 'colorful'],
  'Luxury & Automotive': ['luxury', 'automotive', 'high performance', 'dramatic', 'sleek', 'bold'],
  'Tech Giants & Lifestyle': ['consumer', 'scale', 'reliable', 'lifestyle', 'brand', 'corporate'],
  'Editorial & Media': ['editorial', 'news', 'magazine', 'cyberpunk', 'dense headlines', 'journalism'],
  'Retro & Nostalgia': ['retro', 'vintage', '90s', 'y2k', 'skeuomorphic', 'nostalgia']
};

function parseDesignMd(brandId, content) {
  const result = {
    name: brandId,
    description: '',
    colors: {},
    primaryColor: '#000000',
    canvasColor: '#ffffff',
    surfaceColor: '#f5f5f5',
    typography: '',
    keyPoints: []
  };

  const lines = content.split(/\r?\n/);

  if (content.startsWith('---')) {
    let inFrontmatter = false;
    let frontmatterDone = false;
    let currentSection = null;
    let descLines = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.trim() === '---') {
        if (!inFrontmatter) {
          inFrontmatter = true;
          continue;
        } else {
          frontmatterDone = true;
          break;
        }
      }
      if (!inFrontmatter) continue;

      // Top-level key
      if (/^[a-zA-Z0-9_-]+:/.test(line)) {
        const keyMatch = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);
        if (keyMatch) {
          const key = keyMatch[1];
          const val = keyMatch[2].trim();
          currentSection = key;

          if (key === 'name' && val) {
            result.name = val.replace(/^["']|["']$/g, '');
          } else if (key === 'description') {
            if (val && !['|', '>', '|-', '>-'].includes(val)) {
              descLines.push(val.replace(/^["']|["']$/g, ''));
            }
          }
          continue;
        }
      }

      // Inside section
      if (currentSection === 'description') {
        if (/^\s+/.test(line)) {
          descLines.push(line.trim().replace(/^["']|["']$/g, ''));
        }
      } else if (currentSection === 'colors') {
        const colorMatch = line.match(/^\s+([a-zA-Z0-9_-]+):\s*["']?([^"'\r\n]+?)["']?\s*$/);
        if (colorMatch) {
          result.colors[colorMatch[1]] = colorMatch[2];
        }
      }
    }

    if (descLines.length > 0) {
      result.description = descLines.join(' ').replace(/\s+/g, ' ');
    }

    // Set colors
    if (result.colors.primary) result.primaryColor = result.colors.primary;
    else if (result.colors['primary-deep']) result.primaryColor = result.colors['primary-deep'];
    else if (result.colors.brand) result.primaryColor = result.colors.brand;

    if (result.colors.canvas) result.canvasColor = result.colors.canvas;
    else if (result.colors['canvas-dark']) result.canvasColor = result.colors['canvas-dark'];
    else if (result.colors.background) result.canvasColor = result.colors.background;

    if (result.colors['surface-1']) result.surfaceColor = result.colors['surface-1'];
    else if (result.colors.surface) result.surfaceColor = result.colors.surface;
    else if (result.colors['surface-card']) result.surfaceColor = result.colors['surface-card'];
  } else {
    // Markdown-based format
    const titleMatch = content.match(/^#\s+(.+)$/m);
    if (titleMatch) result.name = titleMatch[1].trim();

    // Visual Theme & Atmosphere paragraph
    const themeMatch = content.match(/##\s+1\.\s+Visual Theme & Atmosphere\s*\n+([^#\n][\s\S]*?)(?=\n\n|\n##|\n\*\*Key)/);
    if (themeMatch) {
      result.description = themeMatch[1].replace(/\n/g, ' ').trim();
    }

    // Extract hex codes
    const hexCodes = content.match(/#[0-9a-fA-F]{6}\b/g) || [];
    const primaryMatch = content.match(/(?:Primary|Brand|Accent)[^#\n]*?(#[0-9a-fA-F]{6}\b)/i);
    if (primaryMatch) {
      result.primaryColor = primaryMatch[1];
    } else if (hexCodes.length > 0) {
      result.primaryColor = hexCodes[0];
    }

    const canvasMatch = content.match(/(?:Canvas|Background|Deepest background|Page background)[^#\n]*?(#[0-9a-fA-F]{6}\b)/i);
    if (canvasMatch) {
      result.canvasColor = canvasMatch[1];
    } else if (content.toLowerCase().includes('dark') || content.toLowerCase().includes('near-black')) {
      result.canvasColor = '#121212';
    } else {
      result.canvasColor = '#ffffff';
    }
  }

  if (!result.description) {
    result.description = `Production design system and tokens for ${brandId}`;
  }

  return result;
}

function run() {
  const rootDir = path.resolve(__dirname, '..');
  const designMdDir = path.join(rootDir, 'design-md');
  const referencesDir = path.join(rootDir, 'references');

  if (!fs.existsSync(referencesDir)) {
    fs.mkdirSync(referencesDir, { recursive: true });
  }

  const entries = fs.readdirSync(designMdDir, { withFileTypes: true });
  const brands = entries.filter(e => e.isDirectory()).map(e => e.name).sort();

  console.log(`Found ${brands.length} brands in ${designMdDir}`);

  const catalog = [];

  for (const brandId of brands) {
    const filePath = path.join(designMdDir, brandId, 'DESIGN.md');
    if (!fs.existsSync(filePath)) continue;

    const content = fs.readFileSync(filePath, 'utf8');
    const parsed = parseDesignMd(brandId, content);

    const category = CATEGORY_MAP[brandId] || 'Other';
    const primary = parsed.primaryColor || '#000000';
    const canvas = parsed.canvasColor || '#ffffff';
    const surface = parsed.surfaceColor || '#f5f5f5';

    // Infer tags
    const tags = new Set([brandId]);
    if (VIBE_KEYWORDS[category]) {
      for (const kw of VIBE_KEYWORDS[category]) tags.add(kw);
    }
    // Tag dark vs light canvas
    if (canvas.startsWith('#0') || canvas.startsWith('#1') || canvas.startsWith('#2')) {
      tags.add('dark');
    } else {
      tags.add('light');
    }

    catalog.push({
      id: brandId,
      name: parsed.name || brandId,
      category,
      description: parsed.description || `Design language for ${brandId}`,
      primaryColor: primary,
      canvasColor: canvas,
      surfaceColor: surface,
      tags: Array.from(tags),
      filePath: `design-md/${brandId}/DESIGN.md`
    });
  }

  // Save catalog.json
  const catalogJsonPath = path.join(referencesDir, 'catalog.json');
  fs.writeFileSync(catalogJsonPath, JSON.stringify(catalog, null, 2), 'utf8');
  console.log(`Wrote ${catalog.length} items to ${catalogJsonPath}`);

  // Build categories.md
  const categoriesGrouped = {};
  for (const item of catalog) {
    if (!categoriesGrouped[item.category]) categoriesGrouped[item.category] = [];
    categoriesGrouped[item.category].push(item);
  }

  let mdContent = `# Design Systems Catalog\n\n`;
  mdContent += `Explore and select from ${catalog.length} curated, production-grade brand design systems.\n\n`;

  for (const [category, items] of Object.entries(categoriesGrouped)) {
    mdContent += `## ${category} (${items.length})\n\n`;
    mdContent += `| Brand ID | Name | Primary | Canvas | Description |\n`;
    mdContent += `| :--- | :--- | :--- | :--- | :--- |\n`;
    for (const item of items) {
      const shortDesc = item.description.length > 90 ? item.description.slice(0, 87) + '...' : item.description;
      mdContent += `| \`${item.id}\` | ${item.name} | \`${item.primaryColor}\` | \`${item.canvasColor}\` | ${shortDesc} |\n`;
    }
    mdContent += `\n`;
  }

  const categoriesMdPath = path.join(referencesDir, 'categories.md');
  fs.writeFileSync(categoriesMdPath, mdContent, 'utf8');
  console.log(`Wrote categories reference to ${categoriesMdPath}`);
}

run();
