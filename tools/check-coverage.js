#!/usr/bin/env node
// Reader dictionary coverage checker.
//
// Scans every word in every READERS entry (title + text) and confirms each one
// resolves to a translation through the same lookup chain the app uses:
//   1. the reader's own `translations` map
//   2. the vocabulary list (data/vocab.js)
//   3. the main dictionary (data/dictionary.js)
//   4. the supplement (data/dict_supplement.js)
//   5. the suffix-stripping fallback
//
// Exit code 0 = full coverage. Exit code 1 = some words have no translation
// (they are printed, sorted by frequency, so you can add them to
// data/dict_supplement.js).
//
// Usage:  node tools/check-coverage.js

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
function loadConst(file) {
  let src = fs.readFileSync(path.join(root, file), 'utf8');
  // Turn `const NAME =` into a global assignment so eval populates globalThis
  src = src.replace(/\bconst\s+(VOCAB|READERS|DICT)\s*=/, 'globalThis.$1=');
  (0, eval)(src);
}

globalThis.VOCAB = [];
globalThis.READERS = [];
globalThis.DICT = {};

loadConst('data/vocab.js');
loadConst('data/readers.js');
loadConst('data/dictionary.js');
// Supplement uses Object.assign(DICT, {...}); just eval it as-is.
(0, eval)(fs.readFileSync(path.join(root, 'data/dict_supplement.js'), 'utf8'));

// --- replicate the app's lookup logic (keep in sync with app.js) ---

function splitToken(tok) {
  const m = tok.match(/^([^\p{L}\p{N}]*)([\p{L}\p{N}].*?[\p{L}\p{N}]|[\p{L}\p{N}])?([^\p{L}\p{N}]*)$/u);
  if (!m) return { core: tok };
  return { core: m[2] || '' };
}

function dictFallback(word) {
  const suffixes = [
    "enden", "eten", "ten", "sten", "test", "est", "end",
    "ieren", "iert", "ierte", "ierten",
    "en", "er", "em", "es", "et", "st", "te", "t", "e",
  ];
  for (const suf of suffixes) {
    if (word.length > suf.length + 2 && word.endsWith(suf)) {
      const stem = word.slice(0, word.length - suf.length);
      for (const c of [stem, stem + "en", stem + "e", stem + "n"]) {
        if (c.length < 3) continue;
        if (DICT[c]) return true;
      }
    }
  }
  return false;
}

const vocabSet = new Set();
VOCAB.forEach(w => {
  vocabSet.add(w.german.toLowerCase());
  vocabSet.add(w.german.replace(/^(der|die|das|ein|eine)\s+/i, '').toLowerCase());
});

function isCovered(core, translations) {
  const lc = core.toLowerCase();
  return Boolean(
    translations[core] || translations[lc] ||
    vocabSet.has(lc) || DICT[lc] || dictFallback(lc)
  );
}

// --- scan ---

const missing = {};
let totalWords = 0;
READERS.forEach(r => {
  (r.title + ' ' + r.text).split(/\s+/).forEach(tok => {
    const core = splitToken(tok).core;
    if (!core || /^\d+$/.test(core)) return;
    totalWords++;
    if (!isCovered(core, r.translations)) {
      missing[core.toLowerCase()] = (missing[core.toLowerCase()] || 0) + 1;
    }
  });
});

const sorted = Object.keys(missing).sort((a, b) => missing[b] - missing[a]);

console.log(`Readers checked : ${READERS.length}`);
console.log(`Dictionary size : ${Object.keys(DICT).length} entries`);
console.log(`Words scanned   : ${totalWords}`);

if (sorted.length === 0) {
  console.log('\n✅ Full coverage — every reader word resolves to a translation.');
  process.exit(0);
} else {
  console.log(`\n❌ ${sorted.length} word(s) have no translation. Add these to data/dict_supplement.js:\n`);
  sorted.forEach(w => console.log(`  "${w}": "",   // appears ${missing[w]}×`));
  process.exit(1);
}
