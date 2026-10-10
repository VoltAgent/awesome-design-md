/**
 * @license
 * Copyright 2026
 * Unit and integration tests for design-cli.cjs subcommands.
 */

const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const { execFileSync } = require('node:child_process');

const ROOT_DIR = path.resolve(__dirname, '..');
const CLI_PATH = path.join(ROOT_DIR, 'scripts', 'design-cli.cjs');

function runCli(args, options = {}) {
  try {
    const stdout = execFileSync(process.execPath, [CLI_PATH, ...args], {
      cwd: ROOT_DIR,
      encoding: 'utf8',
      ...options
    });
    return { stdout, status: 0 };
  } catch (err) {
    return {
      stdout: err.stdout || '',
      stderr: err.stderr || '',
      status: err.status || 1
    };
  }
}

describe('CLI Commands: design-cli.cjs', () => {
  it('--help prints usage and command instructions', () => {
    const { stdout, status } = runCli(['--help']);
    assert.equal(status, 0);
    assert.ok(stdout.includes('AWESOME DESIGN MD'));
    assert.ok(stdout.includes('Usage:'));
    assert.ok(stdout.includes('list'));
    assert.ok(stdout.includes('search'));
    assert.ok(stdout.includes('info'));
    assert.ok(stdout.includes('apply'));
    assert.ok(stdout.includes('export-css'));
    assert.ok(stdout.includes('export-tailwind'));
  });

  it('list command displays all design systems', () => {
    const { stdout, status } = runCli(['list']);
    assert.equal(status, 0);
    assert.ok(stdout.includes('Available Design Systems (74 found)'));
    assert.ok(stdout.includes('linear.app'));
    assert.ok(stdout.includes('stripe'));
    assert.ok(stdout.includes('apple'));
  });

  it('list --dark filters only dark-mode systems', () => {
    const { stdout, status } = runCli(['list', '--dark']);
    assert.equal(status, 0);
    assert.ok(stdout.includes('linear.app'));
    // apple has a light canvas #ffffff and is tagged light, should not be included
    assert.ok(!stdout.includes('apple           Clean, Minimal & Editorial      #0066cc   #ffffff'));
  });

  it('list --light filters only light-mode systems', () => {
    const { stdout, status } = runCli(['list', '--light']);
    assert.equal(status, 0);
    assert.ok(stdout.includes('apple'));
  });

  it('list --category filters by category keyword', () => {
    const { stdout, status } = runCli(['list', '--category', 'FinTech']);
    assert.equal(status, 0);
    assert.ok(stdout.includes('stripe'));
    assert.ok(stdout.includes('coinbase'));
    assert.ok(!stdout.includes('linear.app'));
  });

  it('categories command outputs category breakdown', () => {
    const { stdout, status } = runCli(['categories']);
    assert.equal(status, 0);
    assert.ok(stdout.includes('Design System Categories:'));
    assert.ok(stdout.includes('Developer Tools & Dark Craft'));
    assert.ok(stdout.includes('FinTech & High-Trust'));
    assert.ok(stdout.includes('AI & Machine Learning'));
  });

  it('search command finds matching brands by keyword', () => {
    const { stdout: stdoutStripe, status: statusStripe } = runCli(['search', 'stripe']);
    assert.equal(statusStripe, 0);
    assert.ok(stdoutStripe.includes('stripe'));
    assert.ok(stdoutStripe.includes('FinTech'));

    const { stdout: stdoutDark, status: statusDark } = runCli(['search', 'dark']);
    assert.equal(statusDark, 0);
    assert.ok(stdoutDark.includes('linear.app') || stdoutDark.includes('cursor') || stdoutDark.includes('warp'));
  });

  it('search with empty results warns gracefully', () => {
    const { stdout, status } = runCli(['search', 'xyznonexistentterm999']);
    assert.equal(status, 0);
    assert.ok(stdout.includes('No matching designs found'));
  });

  it('info command outputs design tokens for a brand', () => {
    const { stdout, status } = runCli(['info', 'stripe']);
    assert.equal(status, 0);
    assert.ok(stdout.includes('(stripe)'));
    assert.ok(stdout.includes('Category: FinTech & High-Trust'));
    assert.ok(stdout.includes('Primary:'));
    assert.ok(stdout.includes('Canvas:'));
    assert.ok(stdout.includes('Color Tokens'));
  });

  it('apply command copies DESIGN.md to specified --dest destination', () => {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'design-cli-apply-test-'));
    const destFile = path.join(tempDir, 'DESIGN.md');

    try {
      const { stdout, status } = runCli(['apply', 'linear.app', '--dest', destFile]);
      assert.equal(status, 0);
      assert.ok(stdout.includes('Successfully applied'));
      assert.ok(fs.existsSync(destFile), 'Target DESIGN.md must be written to disk');

      const content = fs.readFileSync(destFile, 'utf8');
      assert.ok(content.length > 200);
      assert.ok(content.includes('Linear') || content.includes('#5e6ad2') || content.includes('linear'));
    } finally {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
  });

  it('export-css exports valid CSS custom properties', () => {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'design-cli-css-test-'));
    const destFile = path.join(tempDir, 'tokens.css');

    try {
      const { stdout, status } = runCli(['export-css', 'vercel', '--dest', destFile]);
      assert.equal(status, 0);
      assert.ok(stdout.includes('Exported CSS variables to:'));
      assert.ok(fs.existsSync(destFile));

      const content = fs.readFileSync(destFile, 'utf8');
      assert.ok(content.includes(':root {'));
      assert.ok(content.includes('--color-'));
      assert.ok(content.includes('}'));
    } finally {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
  });

  it('export-tailwind exports valid Tailwind theme extension object', () => {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'design-cli-tailwind-test-'));
    const destFile = path.join(tempDir, 'tailwind-theme.js');

    try {
      const { stdout, status } = runCli(['export-tailwind', 'claude', '--dest', destFile]);
      assert.equal(status, 0);
      assert.ok(stdout.includes('Exported Tailwind config snippet to:'));
      assert.ok(fs.existsSync(destFile));

      const content = fs.readFileSync(destFile, 'utf8');
      assert.ok(content.includes('module.exports = {'));
      assert.ok(content.includes('theme: {'));
      assert.ok(content.includes('extend: {'));
      assert.ok(content.includes('colors: {'));
    } finally {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
  });

  it('slice command outputs structured UI slicing reference for apple', () => {
    const { stdout, status } = runCli(['slice', 'apple']);
    assert.equal(status, 0);
    assert.ok(stdout.includes('UI SLICING REFERENCE'));
    assert.ok(stdout.includes('APPLE-DESIGN-ANALYSIS (apple)'));
    assert.ok(stdout.includes('Palette & Surface Tokens'));
    assert.ok(stdout.includes('Typography Rules'));
    assert.ok(stdout.includes('Corner Radii Tokens'));
    assert.ok(stdout.includes('Component Rules'));
    assert.ok(stdout.includes('Frontend Slicing Checklist'));
  });

  it('slice command resolves brand aliases like linear -> linear.app', () => {
    const { stdout, status } = runCli(['slice', 'linear']);
    assert.equal(status, 0);
    assert.ok(stdout.includes('LINEAR-DESIGN-ANALYSIS (linear.app)'));
    assert.ok(stdout.includes('#010102'));
    assert.ok(stdout.includes('#5e6ad2'));
  });

  it('slice command resolves mistral -> mistral.ai and dell -> dell-1996', () => {
    const { stdout: stdoutMistral, status: statusMistral } = runCli(['slice', 'mistral']);
    assert.equal(statusMistral, 0);
    assert.ok(stdoutMistral.includes('mistral.ai'));

    const { stdout: stdoutDell, status: statusDell } = runCli(['slice', 'dell']);
    assert.equal(statusDell, 0);
    assert.ok(stdoutDell.includes('dell-1996'));
  });

  it('slice --json outputs valid JSON structure with all tokens', () => {
    const { stdout, status } = runCli(['slice', 'apple', '--json']);
    assert.equal(status, 0);
    const data = JSON.parse(stdout);
    assert.equal(data.id, 'apple');
    assert.equal(data.category, 'Clean, Minimal & Editorial');
    assert.ok(data.colors);
    assert.ok(data.typography);
    assert.ok(data.rounded);
    assert.equal(data.primaryColor, '#0066cc');
    assert.equal(data.canvasColor, '#ffffff');
  });

  it('apply command works with brand alias (linear)', () => {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'design-cli-apply-alias-'));
    const destFile = path.join(tempDir, 'DESIGN.md');

    try {
      const { stdout, status } = runCli(['apply', 'linear', '--dest', destFile]);
      assert.equal(status, 0);
      assert.ok(stdout.includes('Successfully applied Linear-design-analysis'));
      assert.ok(fs.existsSync(destFile));
      const content = fs.readFileSync(destFile, 'utf8');
      assert.ok(content.includes('name: Linear-design-analysis'));
    } finally {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
  });
});
