#!/usr/bin/env node
// Installs the git hooks from tools/hooks/ into .git/hooks/.
// Run once after cloning:  node tools/install-hooks.js

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const srcDir = path.join(root, 'tools', 'hooks');
const destDir = path.join(root, '.git', 'hooks');

if (!fs.existsSync(destDir)) {
  console.error('No .git/hooks directory found — is this a git repository?');
  process.exit(1);
}

let installed = 0;
for (const name of fs.readdirSync(srcDir)) {
  const src = path.join(srcDir, name);
  const dest = path.join(destDir, name);
  fs.copyFileSync(src, dest);
  try { fs.chmodSync(dest, 0o755); } catch { /* chmod is a no-op on Windows */ }
  console.log(`Installed hook: ${name}`);
  installed++;
}

console.log(`\nDone — ${installed} hook(s) installed into .git/hooks/.`);
