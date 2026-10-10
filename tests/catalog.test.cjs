/**
 * @license
 * Copyright 2026
 * Tests for catalog integrity, consistency, and DESIGN.md files.
 */

const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const ROOT_DIR = path.resolve(__dirname, '..');
const CATALOG_PATH = path.join(ROOT_DIR, 'references', 'catalog.json');
const CATEGORIES_PATH = path.join(ROOT_DIR, 'references', 'categories.md');

describe('Catalog Integrity & Structure', () => {
  it('references/catalog.json exists and is valid JSON', () => {
    assert.ok(fs.existsSync(CATALOG_PATH), 'catalog.json must exist');
    const raw = fs.readFileSync(CATALOG_PATH, 'utf8');
    assert.doesNotThrow(() => JSON.parse(raw), 'catalog.json must be valid JSON');
  });

  it('catalog contains exactly 74 design systems', () => {
    const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf8'));
    assert.equal(Array.isArray(catalog), true);
    assert.equal(catalog.length, 74, 'Expected exactly 74 design systems in catalog');
  });

  it('every catalog entry has all required schema fields', () => {
    const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf8'));
    const requiredFields = [
      'id',
      'name',
      'category',
      'primaryColor',
      'canvasColor',
      'surfaceColor',
      'description',
      'filePath',
      'tags'
    ];

    for (const item of catalog) {
      for (const field of requiredFields) {
        assert.ok(
          item[field] !== undefined && item[field] !== null && item[field] !== '',
          `Entry "${item.id || 'unknown'}" is missing field "${field}"`
        );
      }
      assert.ok(Array.isArray(item.tags), `Entry "${item.id}" tags must be an array`);
      assert.ok(item.tags.length > 0, `Entry "${item.id}" must have at least one tag`);
    }
  });

  it('all referenced filePath locations point to existing DESIGN.md files', () => {
    const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf8'));
    for (const item of catalog) {
      const fullPath = path.join(ROOT_DIR, item.filePath);
      assert.ok(
        fs.existsSync(fullPath),
        `Referenced file does not exist: ${fullPath} for brand ${item.id}`
      );
      const stat = fs.statSync(fullPath);
      assert.ok(stat.size > 100, `DESIGN.md for ${item.id} is unexpectedly small (${stat.size} bytes)`);
    }
  });

  it('all primary, canvas, and surface colors have valid color format', () => {
    const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf8'));
    const colorRegex = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$|^rgba?\([^)]+\)$/;

    for (const item of catalog) {
      assert.match(
        item.primaryColor,
        colorRegex,
        `Invalid primaryColor "${item.primaryColor}" in entry ${item.id}`
      );
      assert.match(
        item.canvasColor,
        colorRegex,
        `Invalid canvasColor "${item.canvasColor}" in entry ${item.id}`
      );
      assert.match(
        item.surfaceColor,
        colorRegex,
        `Invalid surfaceColor "${item.surfaceColor}" in entry ${item.id}`
      );
    }
  });

  it('all design systems have unique IDs', () => {
    const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf8'));
    const ids = new Set();
    for (const item of catalog) {
      assert.ok(!ids.has(item.id), `Duplicate ID detected: ${item.id}`);
      ids.add(item.id);
    }
  });

  it('references/categories.md exists and indexes all 9 categories', () => {
    assert.ok(fs.existsSync(CATEGORIES_PATH), 'categories.md must exist');
    const content = fs.readFileSync(CATEGORIES_PATH, 'utf8');
    const expectedCategories = [
      'Developer Tools & Dark Craft',
      'AI & Machine Learning',
      'FinTech & High-Trust',
      'Clean, Minimal & Editorial',
      'Design & Creative Tools',
      'Luxury & Automotive',
      'Tech Giants & Lifestyle',
      'Editorial & Media',
      'Retro & Nostalgia'
    ];

    for (const cat of expectedCategories) {
      assert.ok(content.includes(cat), `categories.md must mention category "${cat}"`);
    }
  });
});
