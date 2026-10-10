/**
 * @license
 * Copyright 2026
 * Unit and integration tests for install-skill.cjs installer logic.
 */

const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const { execFileSync } = require('node:child_process');

const ROOT_DIR = path.resolve(__dirname, '..');
const INSTALLER_PATH = path.join(ROOT_DIR, 'scripts', 'install-skill.cjs');
const {
  resolveTargetPaths,
  detectInstalledAgents,
  installSkillTo,
  installCommandTo,
  REQUIRED_FILES,
  REQUIRED_DIRS
} = require(INSTALLER_PATH);

describe('Installer Logic: install-skill.cjs', () => {
  it('detectInstalledAgents accurately detects existing folders in home dir', () => {
    const mockHome = fs.mkdtempSync(path.join(os.tmpdir(), 'installer-home-'));
    try {
      fs.mkdirSync(path.join(mockHome, '.gemini'));
      fs.mkdirSync(path.join(mockHome, '.claude'));

      const detected = detectInstalledAgents(mockHome);
      assert.equal(detected.gemini.exists, true);
      assert.equal(detected.claude.exists, true);
      assert.equal(detected.agents.exists, false);
      assert.ok(detected.gemini.targetDir.includes('.gemini'));
      assert.ok(detected.claude.targetDir.includes('.claude'));
    } finally {
      fs.rmSync(mockHome, { recursive: true, force: true });
    }
  });

  it('resolveTargetPaths handles explicit agent flags', () => {
    const mockHome = 'C:\\MockUser' + path.sep;

    const geminiOnly = resolveTargetPaths({ gemini: true }, mockHome);
    assert.equal(geminiOnly.length, 1);
    assert.ok(geminiOnly[0].targetDir.includes('.gemini'));

    const claudeOnly = resolveTargetPaths({ claude: true }, mockHome);
    assert.equal(claudeOnly.length, 1);
    assert.ok(claudeOnly[0].targetDir.includes('.claude'));

    const allAgents = resolveTargetPaths({ all: true }, mockHome);
    assert.equal(allAgents.length, 3);

    const localTargets = resolveTargetPaths({ local: true }, mockHome, 'C:\\MyProject');
    assert.equal(localTargets.length, 2);
    assert.ok(localTargets[0].targetDir.includes(path.join('C:\\MyProject', '.agents')));
    assert.ok(localTargets[1].targetDir.includes(path.join('C:\\MyProject', '.gemini')));
  });

  it('resolveTargetPaths respects custom --dest option', () => {
    const customDest = path.join(os.tmpdir(), 'custom-agent-skill');
    const targets = resolveTargetPaths({ dest: customDest });
    assert.equal(targets.length, 1);
    assert.equal(path.resolve(targets[0].targetDir), path.resolve(customDest));
  });

  it('dry-run mode does not create target directory or copy files', () => {
    const tempDir = path.join(os.tmpdir(), 'non-existent-dry-run-dest-' + Date.now());
    assert.equal(fs.existsSync(tempDir), false);

    const res = installSkillTo(tempDir, { dryRun: true }, ROOT_DIR);
    assert.equal(res.dryRun, true);
    assert.ok(res.copied.length >= 7);
    assert.equal(fs.existsSync(tempDir), false, 'Dry-run must not create destination directory');
  });

  it('installs all required files and directories to target location', () => {
    const tempDest = fs.mkdtempSync(path.join(os.tmpdir(), 'actual-skill-install-'));
    try {
      const res = installSkillTo(tempDest, {}, ROOT_DIR);
      assert.equal(res.dryRun, false);
      assert.equal(res.linked, false);

      // Verify required top-level files
      for (const file of REQUIRED_FILES) {
        assert.ok(fs.existsSync(path.join(tempDest, file)), `Missing file: ${file}`);
      }

      // Verify required directories and key assets
      assert.ok(fs.existsSync(path.join(tempDest, 'references', 'catalog.json')));
      assert.ok(fs.existsSync(path.join(tempDest, 'references', 'categories.md')));
      assert.ok(fs.existsSync(path.join(tempDest, 'scripts', 'design-cli.cjs')));
      assert.ok(fs.existsSync(path.join(tempDest, 'design-md', 'linear.app', 'DESIGN.md')));
      assert.ok(fs.existsSync(path.join(tempDest, 'design-md', 'stripe', 'DESIGN.md')));

      // Test idempotency: re-running installation should succeed without errors
      const reInstall = installSkillTo(tempDest, {}, ROOT_DIR);
      assert.ok(reInstall.copied.length > 0);
    } finally {
      fs.rmSync(tempDest, { recursive: true, force: true });
    }
  });

  it('CLI --dry-run outputs preview without file mutations', () => {
    const stdout = execFileSync(
      process.execPath,
      [INSTALLER_PATH, '--gemini', '--dry-run'],
      { cwd: ROOT_DIR, encoding: 'utf8' }
    );
    assert.ok(stdout.includes('[DRY RUN MODE]'));
    assert.ok(stdout.includes('Gemini CLI'));
    assert.ok(stdout.includes('Would copy'));
  });

  it('installCommandTo installs slash command to target commands directory', () => {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'installer-cmd-test-'));
    try {
      const geminiRes = installCommandTo(tempDir, 'gemini', {}, ROOT_DIR);
      assert.equal(geminiRes.installed, true);
      assert.ok(fs.existsSync(path.join(tempDir, 'design-md.toml')));

      const claudeRes = installCommandTo(tempDir, 'claude', {}, ROOT_DIR);
      assert.equal(claudeRes.installed, true);
      assert.ok(fs.existsSync(path.join(tempDir, 'design-md.md')));
    } finally {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
  });

  it('installCommandTo respects dry-run mode', () => {
    const tempDir = path.join(os.tmpdir(), 'non-existent-cmd-dry-run-' + Date.now());
    const res = installCommandTo(tempDir, 'gemini', { dryRun: true }, ROOT_DIR);
    assert.equal(res.dryRun, true);
    assert.equal(res.installed, true);
    assert.equal(fs.existsSync(tempDir), false);
  });
});
