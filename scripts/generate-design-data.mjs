import { promises as fs } from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const designRoot = path.join(rootDir, 'design-md');
const readmePath = path.join(rootDir, 'README.md');
const outputPath = path.join(rootDir, 'design-data.js');

function titleizeSlug(slug) {
  return slug
    .replace(/\./g, ' ')
    .replace(/[-_]/g, ' ')
    .replace(/\bai\b/gi, 'AI')
    .replace(/\bmd\b/gi, 'MD')
    .replace(/\b([a-z])/g, (_, letter) => letter.toUpperCase())
    .replace(/\bXai\b/g, 'xAI')
    .replace(/\bIbm\b/g, 'IBM')
    .replace(/\bNvidia\b/g, 'NVIDIA')
    .replace(/\bMiro\b/g, 'Miro')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseReadmeCategories(readme) {
  const lines = readme.split(/\r?\n/);
  const categoryBySlug = new Map();
  let currentCategory = '';

  for (const line of lines) {
    const headingMatch = line.match(/^###\s+(.+)$/);
    if (headingMatch) {
      currentCategory = headingMatch[1].trim();
      continue;
    }

    const itemMatch = line.match(/^- \[\*\*(.+?)\*\*\]\((.+?)\)\s+-/);
    if (!itemMatch || !currentCategory) continue;

    const url = itemMatch[2];
    const slugMatch = url.match(/design-md\/([^/]+)\/?$/);
    if (!slugMatch) continue;

    categoryBySlug.set(slugMatch[1], currentCategory);
  }

  return categoryBySlug;
}

function toDisplayName(slug) {
  const explicit = {
    'x.ai': 'xAI',
    'linear.app': 'Linear',
    'mistral.ai': 'Mistral AI',
    'opencode.ai': 'OpenCode AI',
    'together.ai': 'Together AI',
    'voltagent': 'VoltAgent',
    'vercel': 'Vercel',
    'cal': 'Cal.com',
    'figma': 'Figma',
    'coinbase': 'Coinbase',
    'webflow': 'Webflow',
    'stripe': 'Stripe',
    'uber': 'Uber',
    'ibm': 'IBM',
    'bmw': 'BMW',
    'wise': 'Wise',
    'airbnb': 'Airbnb',
    'spacex': 'SpaceX',
    'nvidia': 'NVIDIA',
    'superhuman': 'Superhuman',
    'posthog': 'PostHog',
    'raycast': 'Raycast',
    'mintlify': 'Mintlify',
    'resend': 'Resend',
    'sentry': 'Sentry',
    'supabase': 'Supabase',
    'runwayml': 'RunwayML',
    'clickhouse': 'ClickHouse',
    'composio': 'Composio',
    'airtable': 'Airtable',
    'framer': 'Framer',
    'intercom': 'Intercom',
    'pinterest': 'Pinterest',
    'notion': 'Notion',
    'claude': 'Claude',
    'cohere': 'Cohere',
    'elevenlabs': 'ElevenLabs',
    'minimax': 'MiniMax',
    'ollama': 'Ollama',
    'replicate': 'Replicate',
    'warp': 'Warp',
    'lovable': 'Lovable',
    'expo': 'Expo',
    'mongodb': 'MongoDB',
    'sanity': 'Sanity',
    'kraken': 'Kraken',
    'revolut': 'Revolut',
    'zapier': 'Zapier',
    'miro': 'Miro',
    'apple': 'Apple',
    'spotify': 'Spotify',
    'hashicorp': 'HashiCorp',
    'cursor': 'Cursor'
  };

  return explicit[slug] || titleizeSlug(slug);
}

async function main() {
  const readme = await fs.readFile(readmePath, 'utf8');
  const categoryBySlug = parseReadmeCategories(readme);
  const entries = await fs.readdir(designRoot, { withFileTypes: true });

  const designs = [];
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const slug = entry.name;
    const folderPath = path.join(designRoot, slug);
    const previewPath = path.join(folderPath, 'preview.html');
    const previewDarkPath = path.join(folderPath, 'preview-dark.html');
    const designMdPath = path.join(folderPath, 'DESIGN.md');

    try {
      await Promise.all([
        fs.access(previewPath),
        fs.access(previewDarkPath),
        fs.access(designMdPath)
      ]);
    } catch {
      continue;
    }

    designs.push({
      slug,
      name: toDisplayName(slug),
      category: categoryBySlug.get(slug) || 'Uncategorized',
      preview: `design-md/${slug}/preview.html`,
      previewDark: `design-md/${slug}/preview-dark.html`,
      designMd: `design-md/${slug}/DESIGN.md`
    });
  }

  designs.sort((left, right) => {
    const categoryCompare = left.category.localeCompare(right.category);
    if (categoryCompare !== 0) return categoryCompare;
    return left.name.localeCompare(right.name);
  });

  const categoryOrder = [];
  const categories = new Map();

  for (const design of designs) {
    if (!categories.has(design.category)) {
      categories.set(design.category, []);
      categoryOrder.push(design.category);
    }

    categories.get(design.category).push(design.slug);
  }

  const groupedCategories = categoryOrder.map((label) => ({
    label,
    items: categories.get(label) || []
  }));

  const output = `window.__DESIGN_INDEX__ = ${JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      categories: groupedCategories,
      designs
    },
    null,
    2
  )};\n`;

  await fs.writeFile(outputPath, output, 'utf8');
  console.log(`Wrote ${outputPath} with ${designs.length} designs.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});