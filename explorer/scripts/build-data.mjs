import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';

const repoRoot = new URL('../../design-md/', import.meta.url);
const outFile = new URL('../data/sites.json', import.meta.url);

function capture(text, regex) {
  const match = text.match(regex);
  return match?.[1]?.trim() ?? '';
}

function normalizedTitle(slug, readmeText) {
  const heading = capture(readmeText, /^#\s+(.+?)\s*$/m);
  if (heading) {
    return heading.replace(/\s+Inspired Design System$/i, '').trim();
  }
  return slug;
}

async function main() {
  const entries = await readdir(repoRoot, { withFileTypes: true });
  const dirs = entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name).sort();

  const sites = [];
  for (const slug of dirs) {
    const dirPath = new URL(`${slug}/`, repoRoot);
    const readmePath = new URL('README.md', dirPath);
    const designPath = new URL('DESIGN.md', dirPath);

    const [readme, designMd] = await Promise.all([
      readFile(readmePath, 'utf8'),
      readFile(designPath, 'utf8'),
    ]);

    const websiteUrl = capture(readme, /extracted from the public \[[^\]]+\]\((https?:\/\/[^)]+)\)/i);
    const lightPreviewImage = capture(readme, /###\s+Light Mode\s*\n!\[[^\]]*\]\((https?:\/\/[^)]+)\)/i);
    const darkPreviewImage = capture(readme, /###\s+Dark Mode\s*\n!\[[^\]]*\]\((https?:\/\/[^)]+)\)/i);

    sites.push({
      slug,
      title: normalizedTitle(slug, readme),
      websiteUrl,
      lightPreviewImage,
      darkPreviewImage,
      githubFolderUrl: `https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/${encodeURIComponent(slug)}`,
      rawDesignMdUrl: `https://raw.githubusercontent.com/VoltAgent/awesome-design-md/main/design-md/${encodeURIComponent(slug)}/DESIGN.md`,
      rawPreviewUrl: `https://raw.githubusercontent.com/VoltAgent/awesome-design-md/main/design-md/${encodeURIComponent(slug)}/preview.html`,
      localPreviewUrl: `../design-md/${slug}/preview.html`,
      localDarkPreviewUrl: `../design-md/${slug}/preview-dark.html`,
      designMd,
    });
  }

  await mkdir(new URL('../data/', import.meta.url), { recursive: true });
  await writeFile(outFile, JSON.stringify({ generatedAt: new Date().toISOString(), total: sites.length, sites }, null, 2));

  console.log(`Wrote ${sites.length} sites to ${outFile.pathname}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
