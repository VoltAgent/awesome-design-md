#!/usr/bin/env node

import { readdir, readFile, copyFile, access } from "node:fs/promises";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { exec } from "node:child_process";
import { platform } from "node:os";
import searchPrompt from "@inquirer/search";

const __dirname = dirname(fileURLToPath(import.meta.url));
const designsDir = resolve(__dirname, "..", "design-md");
const cwd = process.cwd();

const LABELS = {
  airbnb: "Airbnb",
  airtable: "Airtable",
  apple: "Apple",
  bmw: "BMW",
  cal: "Cal.com",
  claude: "Claude",
  clay: "Clay",
  clickhouse: "ClickHouse",
  cohere: "Cohere",
  coinbase: "Coinbase",
  composio: "Composio",
  cursor: "Cursor",
  elevenlabs: "ElevenLabs",
  expo: "Expo",
  figma: "Figma",
  framer: "Framer",
  hashicorp: "HashiCorp",
  ibm: "IBM",
  intercom: "Intercom",
  kraken: "Kraken",
  "linear.app": "Linear",
  lovable: "Lovable",
  minimax: "Minimax",
  mintlify: "Mintlify",
  miro: "Miro",
  "mistral.ai": "Mistral AI",
  mongodb: "MongoDB",
  notion: "Notion",
  nvidia: "NVIDIA",
  ollama: "Ollama",
  "opencode.ai": "OpenCode AI",
  pinterest: "Pinterest",
  posthog: "PostHog",
  raycast: "Raycast",
  replicate: "Replicate",
  resend: "Resend",
  revolut: "Revolut",
  runwayml: "RunwayML",
  sanity: "Sanity",
  sentry: "Sentry",
  spacex: "SpaceX",
  spotify: "Spotify",
  stripe: "Stripe",
  supabase: "Supabase",
  superhuman: "Superhuman",
  "together.ai": "Together AI",
  uber: "Uber",
  vercel: "Vercel",
  voltagent: "VoltAgent",
  warp: "Warp",
  webflow: "Webflow",
  wise: "Wise",
  "x.ai": "xAI",
  zapier: "Zapier",
};

async function main() {
  console.log("\n  awesome-design-md\n");
  console.log("  Pick a design system and copy its DESIGN.md to your project.\n");

  const dirs = (await readdir(designsDir, { withFileTypes: true }))
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();

  const choices = dirs.map((dir) => ({
    name: LABELS[dir] || dir,
    value: dir,
  }));

  const selected = await searchPrompt({
    message: "Search and select a design:",
    source: (input) => {
      if (!input) return choices;
      const term = input.toLowerCase();
      return choices.filter(
        (c) =>
          c.name.toLowerCase().includes(term) ||
          c.value.toLowerCase().includes(term)
      );
    },
  });

  const srcDesign = join(designsDir, selected, "DESIGN.md");
  const destDesign = join(cwd, "DESIGN.md");

  // Preview in browser
  const { default: confirm } = await import("@inquirer/confirm");
  const wantPreview = await confirm({
    message: "Open preview in browser before copying?",
    default: true,
  });

  if (wantPreview) {
    const { default: selectPrompt } = await import("@inquirer/select");
    const theme = await selectPrompt({
      message: "Which theme?",
      choices: [
        { name: "Light", value: "preview.html" },
        { name: "Dark", value: "preview-dark.html" },
      ],
    });
    const previewPath = join(designsDir, selected, theme);
    const openCmd =
      platform() === "darwin"
        ? "open"
        : platform() === "win32"
          ? "start"
          : "xdg-open";
    exec(`${openCmd} "${previewPath}"`);
    console.log(`\n  Opened ${LABELS[selected] || selected} preview in browser.`);
  }

  // Check if DESIGN.md already exists
  try {
    await access(destDesign);
    const overwrite = await confirm({
      message: "DESIGN.md already exists. Overwrite?",
      default: false,
    });
    if (!overwrite) {
      console.log("\n  Cancelled. No files were changed.\n");
      process.exit(0);
    }
  } catch {
    // File doesn't exist, proceed
  }

  await copyFile(srcDesign, destDesign);
  console.log(`\n  Copied ${LABELS[selected] || selected} DESIGN.md to your project root.`);
  console.log("  Tell your AI agent: \"build me a page using DESIGN.md\"\n");
}

main().catch((err) => {
  if (err.name === "ExitPromptError") {
    process.exit(0);
  }
  console.error(err);
  process.exit(1);
});
