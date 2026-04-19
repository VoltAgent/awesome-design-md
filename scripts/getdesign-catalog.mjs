#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { spawnSync } from "node:child_process";

const slugPattern = /^[a-z0-9][a-z0-9.-]*$/;

function fail(message) {
  process.stderr.write(`${message}\n`);
  process.exit(1);
}

function usage() {
  process.stdout.write(
    [
      "Usage:",
      "  node scripts/getdesign-catalog.mjs list",
      "  node scripts/getdesign-catalog.mjs search <query>",
      "  node scripts/getdesign-catalog.mjs download <slug> [--dest <path>] [--force]",
      "",
      "Notes:",
      "  - Uses the official getdesign CLI via npx",
      "  - Slugs come from the live getdesign catalog, not from files stored in this repo",
    ].join("\n") + "\n"
  );
}

function runGetdesign(args) {
  const result = spawnSync("npx", ["getdesign@latest", ...args], {
    encoding: "utf8",
    shell: true,
  });

  if (result.error) {
    throw new Error(`Failed to start npx: ${result.error.message}`);
  }
  if (result.status !== 0) {
    const output = `${result.stdout || ""}${result.stderr || ""}`.trim();
    throw new Error(output || "getdesign command failed.");
  }
  return `${result.stdout || ""}${result.stderr || ""}`.trim();
}

function parseCatalog(text) {
  const entries = [];
  const seen = new Set();

  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line.includes(" - ")) {
      continue;
    }
    const [slug, ...rest] = line.split(" - ");
    const description = rest.join(" - ").trim();
    if (!slugPattern.test(slug) || seen.has(slug)) {
      continue;
    }
    seen.add(slug);
    entries.push({ slug, description });
  }

  if (!entries.length) {
    throw new Error("No catalog entries found in getdesign output.");
  }

  return entries;
}

function commandList() {
  const entries = parseCatalog(runGetdesign(["list"]));
  for (const entry of entries) {
    process.stdout.write(`${entry.slug} - ${entry.description}\n`);
  }
}

function commandSearch(args) {
  const query = args.join(" ").trim();
  if (!query) {
    fail("Missing search query.");
  }
  const lowerQuery = query.toLowerCase();
  const entries = parseCatalog(runGetdesign(["list"]));
  const filtered = entries.filter(
    (entry) =>
      entry.slug.toLowerCase().includes(lowerQuery) ||
      entry.description.toLowerCase().includes(lowerQuery)
  );

  if (!filtered.length) {
    fail(`No matches for "${query}".`);
  }

  for (const entry of filtered) {
    process.stdout.write(`${entry.slug} - ${entry.description}\n`);
  }
}

function commandDownload(args) {
  if (!args.length) {
    fail("Missing slug.");
  }

  const slug = args[0].trim();
  if (!slugPattern.test(slug)) {
    fail(`Invalid slug: ${slug}`);
  }

  let destination = path.resolve(process.cwd(), "DESIGN.md");
  let force = false;

  for (let index = 1; index < args.length; index += 1) {
    const arg = args[index];
    if (arg === "--dest") {
      destination = path.resolve(args[index + 1] || "");
      index += 1;
      continue;
    }
    if (arg === "--force") {
      force = true;
      continue;
    }
  }

  if (fs.existsSync(destination) && !force) {
    fail(`Destination already exists: ${destination}`);
  }

  fs.mkdirSync(path.dirname(destination), { recursive: true });
  const getdesignArgs = ["add", slug, "--out", destination];
  if (force) {
    getdesignArgs.push("--force");
  }
  runGetdesign(getdesignArgs);
  process.stdout.write(`Downloaded ${slug} to ${destination}\n`);
}

const [command, ...rest] = process.argv.slice(2);

if (!command || command === "--help" || command === "-h") {
  usage();
  process.exit(command ? 0 : 1);
}

try {
  if (command === "list") {
    commandList();
  } else if (command === "search") {
    commandSearch(rest);
  } else if (command === "download") {
    commandDownload(rest);
  } else {
    usage();
    process.exit(1);
  }
} catch (error) {
  fail(error instanceof Error ? error.message : String(error));
}
