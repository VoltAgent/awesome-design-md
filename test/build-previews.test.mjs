import assert from "node:assert/strict";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { buildPreview, buildPreviews, parseDesignDocument, renderPreview } from "../scripts/build-previews.mjs";

test("parses structured front matter and resolves component token references", () => {
  const document = parseDesignDocument(`---
name: Example system
description: |
  A compact
  design system.
colors:
  canvas: "#ffffff"
  ink: "#111111"
  primary: "#ff5500"
typography:
  body-md:
    fontFamily: "Example Sans, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
rounded:
  md: 8px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
---

## Overview
`);

  assert.equal(document.frontMatter.description, "A compact\ndesign system.");
  assert.equal(document.frontMatter.components["button-primary"].backgroundColor, "{colors.primary}");
  const preview = renderPreview(document, "design-md/example/DESIGN.md");
  assert.match(preview, /background:#ff5500/);
  assert.match(preview, /border-radius:8px/);
  assert.match(preview, /Design System Analysis of Example system/);
  assert.match(preview, /Interactive grammar/);
  assert.match(preview, /Responsive behavior/);
});

test("normalizes prose-only DESIGN.md files into a usable token catalog", () => {
  const document = parseDesignDocument(`# Legacy design

A concise visual language using purple #7132f5 and dark ink #101114.

## Components
`);

  assert.equal(document.frontMatter.name, "Legacy design");
  assert.equal(document.frontMatter.colors.primary, "#7132f5");
  assert.ok(document.frontMatter.components["reference-button"]);
});

test("builds exactly the requested named preview", async () => {
  const root = await mkdtemp(join(tmpdir(), "design-preview-"));
  try {
    const directory = join(root, "design-md", "example");
    await mkdir(directory, { recursive: true });
    await writeFile(join(directory, "DESIGN.md"), `---
name: Example
colors:
  canvas: "#ffffff"
  ink: "#111111"
---
`);

    const result = await buildPreview(root, "example");
    assert.equal(result.count, 1);
    assert.match(result.previewPath, /design-md\/example\/preview\.html$/);
    await assert.rejects(buildPreview(root, "missing"), /Unknown design: missing/);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test("build writes one preview per design document and a catalog index", async () => {
  const root = await mkdtemp(join(tmpdir(), "design-preview-"));
  try {
    const directory = join(root, "design-md", "example");
    await writeFile(join(root, "package.json"), "{}\n");
    await mkdir(directory, { recursive: true });
    await writeFile(join(directory, "DESIGN.md"), `---
name: Example
colors:
  canvas: "#ffffff"
  ink: "#111111"
---
`);

    const result = await buildPreviews(root);
    assert.equal(result.count, 1);
    await assert.doesNotReject(readFile(join(directory, "preview.html"), "utf8"));
    const index = await readFile(join(root, "preview", "index.html"), "utf8");
    assert.match(index, /Example/);
    assert.match(index, /design-md\/example\/preview.html/);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
