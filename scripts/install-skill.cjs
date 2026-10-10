#!/usr/bin/env node

/**
 * @license
 * Copyright 2026
 * Installer script to install awesome-design-md skill and slash commands into AI agent environments:
 * - Gemini CLI (~/.gemini/skills/awesome-design-md & ~/.gemini/commands/design-md.toml)
 * - Claude Code (~/.claude/skills/awesome-design-md & ~/.claude/commands/design-md.md)
 * - Universal Agents Standard (~/.agents/skills/awesome-design-md & ~/.agents/commands/design-md.md)
 * - Project Local (./.agents, ./.gemini, ./.claude)
 */

const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const readline = require('node:readline');

const ROOT_DIR = path.resolve(__dirname, '..');
const SKILL_NAME = 'awesome-design-md';

const REQUIRED_FILES = [
  'SKILL.md',
  'SPEC.md',
  'package.json',
  'README.md',
  'LICENSE'
];

const REQUIRED_DIRS = [
  'references',
  'scripts',
  'design-md',
  'commands'
];

/**
 * Detect which AI agent homes exist on the machine.
 * @param {string} [customHome]
 * @returns {Record<string, { exists: boolean, targetDir: string, commandsDir: string, commandType: string, name: string }>}
 */
function detectInstalledAgents(customHome) {
  const home = customHome || os.homedir();
  return {
    gemini: {
      name: 'Gemini CLI',
      exists: fs.existsSync(path.join(home, '.gemini')),
      targetDir: path.join(home, '.gemini', 'skills', SKILL_NAME),
      commandsDir: path.join(home, '.gemini', 'commands'),
      commandType: 'gemini'
    },
    claude: {
      name: 'Claude Code',
      exists: fs.existsSync(path.join(home, '.claude')),
      targetDir: path.join(home, '.claude', 'skills', SKILL_NAME),
      commandsDir: path.join(home, '.claude', 'commands'),
      commandType: 'claude'
    },
    agents: {
      name: 'Universal Agents (~/.agents)',
      exists: fs.existsSync(path.join(home, '.agents')),
      targetDir: path.join(home, '.agents', 'skills', SKILL_NAME),
      commandsDir: path.join(home, '.agents', 'commands'),
      commandType: 'claude'
    }
  };
}

/**
 * Resolves target installation directories based on options.
 * @param {object} options
 * @param {string} [customHome]
 * @param {string} [cwd]
 * @returns {Array<{ name: string, targetDir: string, commandsDir?: string, commandType?: string }>}
 */
function resolveTargetPaths(options, customHome, cwd) {
  const home = customHome || os.homedir();
  const currentDir = cwd || process.cwd();
  const targets = [];

  if (options.dest) {
    targets.push({
      name: `Custom Destination (${options.dest})`,
      targetDir: path.resolve(currentDir, options.dest)
    });
    return targets;
  }

  if (options.local || options.project) {
    targets.push({
      name: 'Project Local (.agents)',
      targetDir: path.join(currentDir, '.agents', 'skills', SKILL_NAME),
      commandsDir: path.join(currentDir, '.agents', 'commands'),
      commandType: 'claude'
    });
    targets.push({
      name: 'Project Local (.gemini)',
      targetDir: path.join(currentDir, '.gemini', 'skills', SKILL_NAME),
      commandsDir: path.join(currentDir, '.gemini', 'commands'),
      commandType: 'gemini'
    });
    return targets;
  }

  const detected = detectInstalledAgents(home);

  if (options.gemini) {
    targets.push(detected.gemini);
  }
  if (options.claude) {
    targets.push(detected.claude);
  }
  if (options.agents) {
    targets.push(detected.agents);
  }

  if (options.all) {
    targets.push(detected.gemini, detected.claude, detected.agents);
    return targets;
  }

  // If specific flags were passed, return those
  if (targets.length > 0) {
    return targets;
  }

  // Auto-detect targets that already have base directories installed
  const autoDetected = Object.values(detected).filter(t => t.exists);
  if (autoDetected.length > 0) {
    return autoDetected;
  }

  // Default fallback if none detected: Gemini CLI & Universal Agents
  return [detected.gemini, detected.agents];
}

/**
 * Copies a single item (file or directory) to destination.
 */
function copyItem(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    const entries = fs.readdirSync(src);
    for (const entry of entries) {
      copyItem(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

/**
 * Installs slash command file for a target agent environment.
 * @param {string} commandsDir Target directory (e.g. ~/.gemini/commands)
 * @param {string} commandType 'gemini' | 'claude'
 * @param {object} [options]
 * @param {string} [sourceRoot]
 * @returns {{ installed: boolean, destPath: string, dryRun: boolean }}
 */
function installCommandTo(commandsDir, commandType = 'gemini', options = {}, sourceRoot = ROOT_DIR) {
  const dryRun = Boolean(options.dryRun || options['dry-run']);
  const fileName = commandType === 'gemini' ? 'design-md.toml' : 'design-md.md';
  const srcSubdir = commandType === 'gemini' ? 'gemini' : 'claude';
  const srcPath = path.join(sourceRoot, 'commands', srcSubdir, fileName);
  const destPath = path.join(commandsDir, fileName);

  const result = {
    installed: false,
    destPath,
    dryRun
  };

  if (dryRun) {
    result.installed = fs.existsSync(srcPath);
    return result;
  }

  if (fs.existsSync(srcPath)) {
    fs.mkdirSync(commandsDir, { recursive: true });
    fs.copyFileSync(srcPath, destPath);
    result.installed = true;
  }

  return result;
}

/**
 * Installs skill files to destination directory.
 * @param {string} targetDir
 * @param {object} [options]
 * @param {string} [sourceRoot]
 * @returns {{ targetDir: string, copied: string[], linked: boolean, dryRun: boolean }}
 */
function installSkillTo(targetDir, options = {}, sourceRoot = ROOT_DIR) {
  const dryRun = Boolean(options.dryRun || options['dry-run']);
  const useLink = Boolean(options.link || options.symlink);
  const result = {
    targetDir,
    copied: [],
    linked: false,
    dryRun
  };

  if (dryRun) {
    const items = [...REQUIRED_FILES, ...REQUIRED_DIRS];
    for (const item of items) {
      const src = path.join(sourceRoot, item);
      if (fs.existsSync(src)) {
        result.copied.push(item);
      }
    }
    return result;
  }

  if (useLink) {
    if (fs.existsSync(targetDir)) {
      const stat = fs.lstatSync(targetDir);
      if (stat.isSymbolicLink()) {
        fs.unlinkSync(targetDir);
      } else {
        fs.rmSync(targetDir, { recursive: true, force: true });
      }
    }
    fs.mkdirSync(path.dirname(targetDir), { recursive: true });
    const symlinkType = process.platform === 'win32' ? 'junction' : 'dir';
    fs.symlinkSync(sourceRoot, targetDir, symlinkType);
    result.linked = true;
    return result;
  }

  fs.mkdirSync(targetDir, { recursive: true });

  for (const file of REQUIRED_FILES) {
    const src = path.join(sourceRoot, file);
    if (fs.existsSync(src)) {
      const dest = path.join(targetDir, file);
      copyItem(src, dest);
      result.copied.push(file);
    }
  }

  for (const dir of REQUIRED_DIRS) {
    const src = path.join(sourceRoot, dir);
    if (fs.existsSync(src)) {
      const dest = path.join(targetDir, dir);
      copyItem(src, dest);
      result.copied.push(dir);
    }
  }

  return result;
}

function printHelp() {
  console.log(`
=====================================================================
   AWESOME-DESIGN-MD SKILL & SLASH COMMAND INSTALLER
=====================================================================

Install the 74+ design system skill and /design-md slash command into your AI coding assistant.

Usage:
  node scripts/install-skill.cjs [options]
  npm run install-skill -- [options]

Target Options:
  --gemini       Install skill to ~/.gemini/skills/awesome-design-md
                 and slash command to ~/.gemini/commands/design-md.toml
  --claude       Install skill to ~/.claude/skills/awesome-design-md
                 and slash command to ~/.claude/commands/design-md.md
  --agents       Install to Universal Agents (~/.agents/skills & commands)
  --local        Install locally in current repo (./.gemini, ./.claude, ./.agents)
  --all          Install to all global agent environments
  --dest <path>  Install skill to a custom directory

Behavior Options:
  --link         Create a symlink instead of copying files (best for local dev)
  --dry-run      Preview installation targets without writing any files
  --help, -h     Show this help message

Default behavior:
  Auto-detects active agent directories (~/.gemini, ~/.claude, ~/.agents)
  and installs skill files and slash command to all detected environments.
`);
}

function parseArgs(args) {
  const options = {
    gemini: false,
    claude: false,
    agents: false,
    local: false,
    project: false,
    all: false,
    link: false,
    dryRun: false,
    dest: null
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--gemini') options.gemini = true;
    else if (arg === '--claude') options.claude = true;
    else if (arg === '--agents') options.agents = true;
    else if (arg === '--local' || arg === '--project') options.local = true;
    else if (arg === '--all') options.all = true;
    else if (arg === '--link' || arg === '--symlink') options.link = true;
    else if (arg === '--dry-run') options.dryRun = true;
    else if (arg === '--dest' && args[i + 1]) {
      options.dest = args[++i];
    } else if (arg === '--help' || arg === '-h') {
      options.help = true;
    }
  }

  return options;
}

function promptInteractive(detected, callback) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log(`\n=====================================================================`);
  console.log(`  AWESOME-DESIGN-MD AGENT SKILL & COMMAND INSTALLER`);
  console.log(`=====================================================================\n`);
  console.log('Select target agent environment to install:');
  console.log(`1. Gemini CLI         (${detected.gemini.exists ? 'Detected' : 'Not detected'}) -> ${detected.gemini.targetDir}`);
  console.log(`2. Claude Code        (${detected.claude.exists ? 'Detected' : 'Not detected'}) -> ${detected.claude.targetDir}`);
  console.log(`3. Universal Agents   (${detected.agents.exists ? 'Detected' : 'Not detected'}) -> ${detected.agents.targetDir}`);
  console.log(`4. All Detected Environments`);
  console.log(`5. Project Local (./.gemini, ./.claude, ./.agents)`);
  console.log(`6. Exit\n`);

  rl.question('Choose an option (1-6) [default: 4]: ', ans => {
    const choice = ans.trim() || '4';
    const options = { dryRun: false };

    if (choice === '1') options.gemini = true;
    else if (choice === '2') options.claude = true;
    else if (choice === '3') options.agents = true;
    else if (choice === '4') options.all = true;
    else if (choice === '5') options.local = true;
    else {
      console.log('Installation cancelled.');
      rl.close();
      process.exit(0);
    }

    rl.close();
    callback(options);
  });
}

function executeInstall(options) {
  const targets = resolveTargetPaths(options);

  console.log(`\nInstalling awesome-design-md skill and slash commands...`);
  if (options.dryRun) {
    console.log(`[DRY RUN MODE] No files will be modified.\n`);
  }

  for (const target of targets) {
    console.log(`Target: ${target.name}`);
    console.log(`Skill:  ${target.targetDir}`);

    const res = installSkillTo(target.targetDir, options, ROOT_DIR);

    if (res.dryRun) {
      console.log(`  -> Would copy ${res.copied.length} items (${res.copied.join(', ')})`);
    } else if (res.linked) {
      console.log(`  -> Successfully symlinked to ${ROOT_DIR}`);
    } else {
      console.log(`  -> Successfully installed (${res.copied.length} items copied)`);
    }

    if (target.commandsDir && target.commandType) {
      const cmdRes = installCommandTo(target.commandsDir, target.commandType, options, ROOT_DIR);
      if (cmdRes.dryRun) {
        console.log(`  -> Would install slash command to: ${cmdRes.destPath}`);
      } else if (cmdRes.installed) {
        console.log(`  -> Successfully installed /design-md slash command to: ${cmdRes.destPath}`);
      }
    }
    console.log('');
  }

  console.log(`Installation complete!`);
  console.log(`You can now use '/design-md <brand>' (e.g. '/design-md apple', '/design-md linear')`);
  console.log(`in your AI chat or prompt to automatically load design references for UI slicing!\n`);
}

function main() {
  const args = process.argv.slice(2);
  const options = parseArgs(args);

  if (options.help) {
    printHelp();
    return;
  }

  const hasSpecificTarget = options.gemini || options.claude || options.agents ||
                            options.local || options.all || options.dest;

  if (!hasSpecificTarget && process.stdin.isTTY) {
    const detected = detectInstalledAgents();
    promptInteractive(detected, chosenOptions => {
      executeInstall({ ...chosenOptions, ...options });
    });
  } else {
    executeInstall(options);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  detectInstalledAgents,
  resolveTargetPaths,
  installSkillTo,
  installCommandTo,
  REQUIRED_FILES,
  REQUIRED_DIRS,
  SKILL_NAME
};
