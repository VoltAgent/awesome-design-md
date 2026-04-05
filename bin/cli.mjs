#!/usr/bin/env node

import { readdir, copyFile, access } from "node:fs/promises";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { exec } from "node:child_process";
import { platform } from "node:os";
import * as p from "@clack/prompts";

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

function openInBrowser(filePath) {
  const cmd =
    platform() === "darwin"
      ? "open"
      : platform() === "win32"
        ? "start"
        : "xdg-open";
  exec(`${cmd} "${filePath}"`);
}

async function main() {
  p.intro("awesome-design-md");

  const dirs = (await readdir(designsDir, { withFileTypes: true }))
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();

  const options = dirs.map((dir) => ({
    label: LABELS[dir] || dir,
    value: dir,
  }));

  let selected;

  // Selection loop — pick, preview, pick again
  while (true) {
    selected = await p.select({
      message: "Select a design system",
      options,
    });

    if (p.isCancel(selected)) {
      p.cancel("Cancelled.");
      process.exit(0);
    }

    const action = await p.select({
      message: `${LABELS[selected] || selected} selected`,
      options: [
        { label: "Preview in browser", value: "preview" },
        { label: "Copy DESIGN.md to project", value: "copy" },
        { label: "Go back and pick another", value: "back" },
      ],
    });

    if (p.isCancel(action)) {
      p.cancel("Cancelled.");
      process.exit(0);
    }

    if (action === "preview") {
      const previewPath = join(designsDir, selected, "preview.html");
      openInBrowser(previewPath);
      p.log.info(`Opened ${LABELS[selected] || selected} preview in browser.`);

      const next = await p.select({
        message: "What next?",
        options: [
          { label: "Copy this DESIGN.md to project", value: "copy" },
          { label: "Go back and pick another", value: "back" },
        ],
      });

      if (p.isCancel(next)) {
        p.cancel("Cancelled.");
        process.exit(0);
      }

      if (next === "back") continue;
      // next === "copy", fall through
    } else if (action === "back") {
      continue;
    }

    // Copy
    break;
  }

  const srcDesign = join(designsDir, selected, "DESIGN.md");
  const destDesign = join(cwd, "DESIGN.md");

  // Check if DESIGN.md already exists
  try {
    await access(destDesign);
    const overwrite = await p.confirm({
      message: "DESIGN.md already exists. Overwrite?",
      initialValue: false,
    });

    if (p.isCancel(overwrite) || !overwrite) {
      p.cancel("No files were changed.");
      process.exit(0);
    }
  } catch {
    // File doesn't exist, proceed
  }

  const s = p.spinner();
  s.start("Copying DESIGN.md");
  await copyFile(srcDesign, destDesign);
  s.stop(`Copied ${LABELS[selected] || selected} DESIGN.md`);

  p.outro('Done! Tell your AI agent: "build me a page using DESIGN.md"');
}

main().catch((err) => {
  if (err.message?.includes("cancelled")) {
    process.exit(0);
  }
  console.error(err);
  process.exit(1);
});
