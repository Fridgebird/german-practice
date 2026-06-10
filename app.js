// ============================================================
//  German Practice App
// ============================================================

// ---------- Storage helpers ----------
function load(key, def) {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : def; }
  catch { return def; }
}
function save(key, val) { localStorage.setItem(key, JSON.stringify(val)); }

// ---------- Navigation ----------
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.section).classList.add('active');
  });
});

// ============================================================
//  FLASHCARDS
// ============================================================

// Merge built-in vocab with user-added words
function getFullVocab() {
  const custom = load('customVocab', []);
  return [...VOCAB, ...custom];
}

// Progress: { [german]: { right: n, wrong: n, lastSeen: timestamp } }
let progress = load('flashProgress', {});

function saveProgress() { save('flashProgress', progress); }

function getScore(word) {
  const p = progress[word.german];
  if (!p) return 0;
  return p.right - p.wrong * 2;
}

function isDue(word) {
  const p = progress[word.german];
  if (!p || p.wrong > p.right) return true;
  return false;
}

let deck = [];
let deckIndex = 0;
let currentCard = null;

function buildDeck() {
  const cat = document.getElementById('cat-filter').value;
  const weakOnly = document.getElementById('weak-only').checked;
  let pool = getFullVocab();
  if (cat !== 'all') pool = pool.filter(w => w.category === cat);
  if (weakOnly) pool = pool.filter(w => isDue(w));
  if (pool.length === 0 && weakOnly) {
    pool = getFullVocab().filter(w => cat === 'all' || w.category === cat);
  }
  // Sort: unseen and weak first
  pool.sort((a, b) => getScore(a) - getScore(b));
  deck = pool;
  deckIndex = 0;
}

const GENDER_CLASS = {
  'masculine-noun': 'gender-masc',
  'feminine-noun':  'gender-fem',
  'neuter-noun':    'gender-neut',
};

function showCard() {
  const card = document.getElementById('flashcard');
  card.classList.remove('gender-masc', 'gender-fem', 'gender-neut');

  if (deck.length === 0) {
    document.getElementById('card-german').textContent = 'No cards in this selection.';
    document.getElementById('card-back').classList.add('hidden');
    document.getElementById('card-front').classList.remove('hidden');
    document.getElementById('card-progress').textContent = '';
    document.getElementById('btn-show').classList.add('hidden');
    document.getElementById('btn-grade').classList.add('hidden');
    return;
  }
  currentCard = deck[deckIndex % deck.length];

  if (GENDER_CLASS[currentCard.category]) {
    card.classList.add(GENDER_CLASS[currentCard.category]);
  }

  document.getElementById('card-german').textContent = currentCard.german;
  document.getElementById('card-english').textContent = currentCard.english;

  // Plural line on back of card
  let catLabel = currentCard.category.replace('-', ' ');
  let pluralHtml = '';
  if (currentCard.plural) {
    pluralHtml = `<div class="card-plural">Plural: ${currentCard.plural}</div>`;
  }
  document.getElementById('card-cat').innerHTML = catLabel + pluralHtml;

  document.getElementById('card-front').classList.remove('hidden');
  document.getElementById('card-back').classList.add('hidden');
  document.getElementById('btn-show').classList.remove('hidden');
  document.getElementById('btn-grade').classList.add('hidden');
  const p = progress[currentCard.german];
  const r = p ? p.right : 0;
  const w = p ? p.wrong : 0;
  document.getElementById('card-progress').textContent =
    `Card ${(deckIndex % deck.length) + 1} of ${deck.length}  •  ✓ ${r}  ✗ ${w}`;
}

document.getElementById('btn-show').addEventListener('click', () => {
  document.getElementById('card-front').classList.add('hidden');
  document.getElementById('card-back').classList.remove('hidden');
  document.getElementById('btn-show').classList.add('hidden');
  document.getElementById('btn-grade').classList.remove('hidden');
});

document.getElementById('btn-right').addEventListener('click', () => {
  if (!currentCard) return;
  const p = progress[currentCard.german] || { right: 0, wrong: 0 };
  p.right++;
  progress[currentCard.german] = p;
  saveProgress();
  deckIndex++;
  if (deckIndex >= deck.length) { buildDeck(); }
  showCard();
});

document.getElementById('btn-wrong').addEventListener('click', () => {
  if (!currentCard) return;
  const p = progress[currentCard.german] || { right: 0, wrong: 0 };
  p.wrong++;
  progress[currentCard.german] = p;
  saveProgress();
  // Move card to end of deck so it appears again soon
  const card = deck.splice(deckIndex % deck.length, 1)[0];
  deck.push(card);
  showCard();
});

document.getElementById('cat-filter').addEventListener('change', () => { buildDeck(); showCard(); });
document.getElementById('weak-only').addEventListener('change', () => { buildDeck(); showCard(); });

// ---- Add vocab ----
document.getElementById('btn-add-word').addEventListener('click', () => {
  const g = document.getElementById('new-german').value.trim();
  const e = document.getElementById('new-english').value.trim();
  const c = document.getElementById('new-category').value;
  if (!g || !e) return;
  const custom = load('customVocab', []);
  custom.push({ german: g, english: e, category: c });
  save('customVocab', custom);
  document.getElementById('new-german').value = '';
  document.getElementById('new-english').value = '';
  buildDeck(); showCard();
  renderVocabTable();
});

// ---- Vocab list ----
document.getElementById('btn-show-list').addEventListener('click', () => {
  const wrap = document.getElementById('vocab-table-wrap');
  wrap.classList.toggle('hidden');
  if (!wrap.classList.contains('hidden')) renderVocabTable();
});

function renderVocabTable() {
  const wrap = document.getElementById('vocab-table-wrap');
  const custom = load('customVocab', []);
  const all = getFullVocab();
  let html = `<table><thead><tr><th>German</th><th>English</th><th>Plural</th><th>Category</th><th>✓</th><th>✗</th><th></th></tr></thead><tbody>`;
  all.forEach((w, i) => {
    const p = progress[w.german] || { right: 0, wrong: 0 };
    const isCustom = i >= VOCAB.length;
    const rowClass = GENDER_CLASS[w.category] ? `row-${GENDER_CLASS[w.category].split('-')[1]}` : '';
    html += `<tr class="${rowClass}">
      <td>${w.german}</td><td>${w.english}</td>
      <td>${w.plural || ''}</td>
      <td>${w.category.replace('-',' ')}</td>
      <td>${p.right}</td><td>${p.wrong}</td>
      <td>${isCustom ? `<button class="delete-word" data-idx="${i - VOCAB.length}">🗑</button>` : ''}</td>
    </tr>`;
  });
  html += '</tbody></table>';
  wrap.innerHTML = html;
  wrap.querySelectorAll('.delete-word').forEach(btn => {
    btn.addEventListener('click', () => {
      const custom = load('customVocab', []);
      custom.splice(parseInt(btn.dataset.idx), 1);
      save('customVocab', custom);
      buildDeck(); showCard();
      renderVocabTable();
    });
  });
}

// Init flashcards
buildDeck();
showCard();

// ============================================================
//  WORD ORDER
// ============================================================

const WO_EXERCISES = {
  'SVO': [
    { words: ['Ich', 'esse', 'einen', 'Apfel'], hint: 'Subject – Verb – Object' },
    { words: ['Der', 'Mann', 'kauft', 'ein', 'Buch'], hint: 'Subject – Verb – Object' },
    { words: ['Die', 'Frau', 'trinkt', 'Kaffee'], hint: 'Subject – Verb – Object' },
    { words: ['Das', 'Kind', 'spielt', 'Fußball'], hint: 'Subject – Verb – Object' },
    { words: ['Wir', 'lernen', 'Deutsch'], hint: 'Subject – Verb – Object' },
  ],
  'Adverb': [
    { words: ['Ich', 'gehe', 'heute', 'ins', 'Kino'], hint: 'Subject – Verb – Time – Place' },
    { words: ['Er', 'fährt', 'morgen', 'nach', 'Berlin'], hint: 'Subject – Verb – Time – Place' },
    { words: ['Wir', 'essen', 'abends', 'zusammen'], hint: 'Subject – Verb – Time – Manner' },
  ],
  'Verb-2nd (inversion)': [
    { words: ['Heute', 'gehe', 'ich', 'einkaufen'], hint: 'Time first → verb 2nd, subject 3rd' },
    { words: ['Morgen', 'kommt', 'meine', 'Mutter'], hint: 'Time first → verb 2nd, subject 3rd' },
    { words: ['Manchmal', 'lese', 'ich', 'ein', 'Buch'], hint: 'Adverb first → inversion' },
    { words: ['Gestern', 'hat', 'er', 'gearbeitet'], hint: 'Time first → verb 2nd (Perfekt)' },
  ],
  'Questions': [
    { words: ['Wo', 'wohnst', 'du?'], hint: 'Question word – Verb – Subject' },
    { words: ['Was', 'machst', 'du', 'heute?'], hint: 'Question word – Verb – Subject – Time' },
    { words: ['Wann', 'kommt', 'der', 'Zug?'], hint: 'Question word – Verb – Subject' },
    { words: ['Wie', 'heißt', 'du?'], hint: 'Question word – Verb – Subject' },
    { words: ['Warum', 'lernst', 'du', 'Deutsch?'], hint: 'Question word – Verb – Subject – Object' },
  ],
  'Subordinate': [
    { words: ['Ich', 'weiß,', 'dass', 'er', 'kommt'], hint: 'Main clause + dass + ... verb at end' },
    { words: ['Er', 'geht', 'nicht,', 'weil', 'er', 'krank', 'ist'], hint: '...weil + ... verb at end' },
    { words: ['Ich', 'glaube,', 'dass', 'das', 'richtig', 'ist'], hint: 'Main clause + dass + ... verb at end' },
    { words: ['Sie', 'sagt,', 'dass', 'sie', 'Hunger', 'hat'], hint: 'Main clause + dass + ... verb at end' },
  ],
};

let woCategory = Object.keys(WO_EXERCISES)[0];
let woAnswer = [];
let woTiles = [];
let woCorrect = '';

function initWOTabs() {
  const tabRow = document.getElementById('wo-category-tabs');
  tabRow.innerHTML = '';
  Object.keys(WO_EXERCISES).forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'tab-btn' + (cat === woCategory ? ' active' : '');
    btn.textContent = cat;
    btn.addEventListener('click', () => {
      woCategory = cat;
      document.querySelectorAll('#wo-category-tabs .tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      nextWO();
    });
    tabRow.appendChild(btn);
  });
}

function nextWO() {
  const pool = WO_EXERCISES[woCategory];
  const ex = pool[Math.floor(Math.random() * pool.length)];
  woCorrect = ex.words.join(' ');
  woAnswer = [];
  woTiles = [...ex.words].sort(() => Math.random() - 0.5);

  const area = document.getElementById('wo-exercise');
  area.innerHTML = `
    <div class="exercise-label">Arrange into a correct sentence:</div>
    <div class="exercise-hint">${ex.hint}</div>
    <div class="answer-slots" id="wo-slots"></div>
    <div class="word-tiles" id="wo-tiles"></div>
    <button class="btn-primary" id="btn-wo-check" style="margin-top:0.5rem">Check</button>
    <button class="btn-secondary" id="btn-wo-clear" style="margin-top:0.5rem;margin-left:0.5rem">Clear</button>
  `;
  renderWOTiles();
  document.getElementById('btn-wo-check').addEventListener('click', checkWO);
  document.getElementById('btn-wo-clear').addEventListener('click', () => {
    woAnswer = [];
    woTiles = [...ex.words].sort(() => Math.random() - 0.5);
    renderWOTiles();
    document.getElementById('wo-feedback').textContent = '';
    document.getElementById('wo-feedback').className = 'feedback-area';
  });
  document.getElementById('wo-feedback').textContent = '';
  document.getElementById('wo-feedback').className = 'feedback-area';
}

function renderWOTiles() {
  const slots = document.getElementById('wo-slots');
  const tilesDiv = document.getElementById('wo-tiles');
  if (!slots || !tilesDiv) return;

  slots.innerHTML = '';
  woAnswer.forEach((word, i) => {
    const t = document.createElement('div');
    t.className = 'answer-tile';
    t.textContent = word;
    t.addEventListener('click', () => {
      woAnswer.splice(i, 1);
      woTiles.push(word);
      renderWOTiles();
    });
    slots.appendChild(t);
  });

  tilesDiv.innerHTML = '';
  woTiles.forEach((word, i) => {
    const t = document.createElement('div');
    t.className = 'tile';
    t.textContent = word;
    t.addEventListener('click', () => {
      woAnswer.push(word);
      woTiles.splice(i, 1);
      renderWOTiles();
    });
    tilesDiv.appendChild(t);
  });
}

function checkWO() {
  const fb = document.getElementById('wo-feedback');
  const attempt = woAnswer.join(' ');
  if (attempt === woCorrect) {
    fb.textContent = '✓ Correct!';
    fb.className = 'feedback-area correct';
  } else {
    fb.innerHTML = `✗ Not quite. Correct: <em>${woCorrect}</em>`;
    fb.className = 'feedback-area wrong';
  }
}

document.getElementById('btn-wo-next').addEventListener('click', nextWO);

initWOTabs();
nextWO();

// ============================================================
//  PAST TENSE
// ============================================================

const PT_EXERCISES = [
  { sentence: 'Ich ___ gestern ins Kino gegangen.', answer: 'bin', hint: 'gehen → sein + gegangen' },
  { sentence: 'Er ___ ein Buch gelesen.', answer: 'hat', hint: 'lesen → haben + gelesen' },
  { sentence: 'Wir ___ nach Berlin gefahren.', answer: 'sind', hint: 'fahren → sein + gefahren' },
  { sentence: 'Sie ___ Kaffee getrunken.', answer: 'hat', hint: 'trinken → haben + getrunken' },
  { sentence: 'Ich ___ früh aufgestanden.', answer: 'bin', hint: 'aufstehen → sein + aufgestanden' },
  { sentence: 'Das Kind ___ geschlafen.', answer: 'hat', hint: 'schlafen → haben + geschlafen' },
  { sentence: 'Wir ___ das Essen gekocht.', answer: 'haben', hint: 'kochen → haben + gekocht' },
  { sentence: 'Er ___ ins Wasser gefallen.', answer: 'ist', hint: 'fallen → sein + gefallen' },
  { sentence: 'Ich ___ meine Schlüssel verloren.', answer: 'habe', hint: 'verlieren → haben + verloren' },
  { sentence: 'Sie ___ nach Hause gelaufen.', answer: 'ist', hint: 'laufen → sein + gelaufen' },
  { sentence: 'Wir ___ lange gewartet.', answer: 'haben', hint: 'warten → haben + gewartet' },
  { sentence: 'Er ___ krank geworden.', answer: 'ist', hint: 'werden → sein + geworden' },
  { sentence: 'Ich ___ das Fenster geöffnet.', answer: 'habe', hint: 'öffnen → haben + geöffnet' },
  { sentence: 'Sie ___ früh angekommen.', answer: 'ist', hint: 'ankommen → sein + angekommen' },
  { sentence: 'Das Baby ___ geweint.', answer: 'hat', hint: 'weinen → haben + geweint' },
];

let ptIndex = 0;
let ptOrder = [...Array(PT_EXERCISES.length).keys()].sort(() => Math.random() - 0.5);

function showPT() {
  const ex = PT_EXERCISES[ptOrder[ptIndex % ptOrder.length]];
  const area = document.getElementById('pt-exercise');
  const parts = ex.sentence.split('___');
  area.innerHTML = `
    <div class="exercise-label">Fill in the correct auxiliary verb (bin / ist / sind / habe / hat / haben):</div>
    <div style="margin:1rem 0;font-size:1.1rem">
      ${parts[0]}<input class="cloze-input" id="pt-input" autocomplete="off" autocorrect="off">${parts[1]}
    </div>
    <div class="exercise-hint">Hint: ${ex.hint}</div>
    <button class="btn-primary" id="btn-pt-check" style="margin-top:0.5rem">Check</button>
  `;
  document.getElementById('pt-feedback').textContent = '';
  document.getElementById('pt-feedback').className = 'feedback-area';
  document.getElementById('pt-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') checkPT(ex);
  });
  document.getElementById('btn-pt-check').addEventListener('click', () => checkPT(ex));
}

function checkPT(ex) {
  const val = document.getElementById('pt-input').value.trim().toLowerCase();
  const fb = document.getElementById('pt-feedback');
  if (val === ex.answer.toLowerCase()) {
    fb.textContent = '✓ Correct!';
    fb.className = 'feedback-area correct';
  } else {
    fb.innerHTML = `✗ The answer is <em>${ex.answer}</em>`;
    fb.className = 'feedback-area wrong';
  }
}

document.getElementById('btn-pt-next').addEventListener('click', () => {
  ptIndex++;
  showPT();
});

showPT();

// ============================================================
//  SEIN & HABEN
// ============================================================

const SH_EXERCISES = [
  { verb: 'gehen', participle: 'gegangen', answer: 'sein', example: 'Ich ___ nach Hause gegangen.' },
  { verb: 'essen', participle: 'gegessen', answer: 'haben', example: 'Er ___ Pizza gegessen.' },
  { verb: 'kommen', participle: 'gekommen', answer: 'sein', example: 'Sie ___ spät gekommen.' },
  { verb: 'schreiben', participle: 'geschrieben', answer: 'haben', example: 'Ich ___ einen Brief geschrieben.' },
  { verb: 'fahren', participle: 'gefahren', answer: 'sein', example: 'Wir ___ nach Hamburg gefahren.' },
  { verb: 'kaufen', participle: 'gekauft', answer: 'haben', example: 'Er ___ ein Auto gekauft.' },
  { verb: 'laufen', participle: 'gelaufen', answer: 'sein', example: 'Das Kind ___ gelaufen.' },
  { verb: 'trinken', participle: 'getrunken', answer: 'haben', example: 'Sie ___ Wasser getrunken.' },
  { verb: 'sterben', participle: 'gestorben', answer: 'sein', example: 'Der alte Mann ___ gestorben.' },
  { verb: 'kochen', participle: 'gekocht', answer: 'haben', example: 'Ich ___ das Essen gekocht.' },
  { verb: 'bleiben', participle: 'geblieben', answer: 'sein', example: 'Er ___ zu Hause geblieben.' },
  { verb: 'sehen', participle: 'gesehen', answer: 'haben', example: 'Ich ___ den Film gesehen.' },
  { verb: 'werden', participle: 'geworden', answer: 'sein', example: 'Er ___ Arzt geworden.' },
  { verb: 'helfen', participle: 'geholfen', answer: 'haben', example: 'Sie ___ mir geholfen.' },
  { verb: 'aufstehen', participle: 'aufgestanden', answer: 'sein', example: 'Ich ___ früh aufgestanden.' },
];

let shIndex = 0;
let shOrder = [...Array(SH_EXERCISES.length).keys()].sort(() => Math.random() - 0.5);

function showSH() {
  const ex = SH_EXERCISES[shOrder[shIndex % shOrder.length]];
  const area = document.getElementById('sh-exercise');
  area.innerHTML = `
    <div class="exercise-label">Does <strong>${ex.verb}</strong> (${ex.participle}) take <em>sein</em> or <em>haben</em>?</div>
    <div style="margin:1rem 0;font-size:1rem;color:#555">${ex.example}</div>
    <div class="sein-haben-btns">
      <button class="sh-btn" id="btn-sein">sein</button>
      <button class="sh-btn" id="btn-haben">haben</button>
    </div>
  `;
  document.getElementById('sh-feedback').textContent = '';
  document.getElementById('sh-feedback').className = 'feedback-area';
  document.getElementById('btn-sein').addEventListener('click', () => checkSH('sein', ex));
  document.getElementById('btn-haben').addEventListener('click', () => checkSH('haben', ex));
}

function checkSH(choice, ex) {
  const fb = document.getElementById('sh-feedback');
  if (choice === ex.answer) {
    fb.textContent = `✓ Correct! ${ex.verb} takes ${ex.answer}.`;
    fb.className = 'feedback-area correct';
  } else {
    fb.textContent = `✗ It's ${ex.answer}. (${ex.verb} → movement/change of state)`;
    fb.className = 'feedback-area wrong';
  }
}

document.getElementById('btn-sh-next').addEventListener('click', () => {
  shIndex++;
  showSH();
});

showSH();

// ============================================================
//  READER
// ============================================================

// Track which day the user first opened the app
function getStartDay() {
  let d = load('readerStartDate', null);
  if (!d) { d = new Date().toISOString().split('T')[0]; save('readerStartDate', d); }
  return d;
}

function daysSinceStart() {
  const start = new Date(getStartDay());
  const now = new Date();
  const diff = Math.floor((now - start) / (1000 * 60 * 60 * 24));
  return diff + 1; // day 1 on first open
}

function isUnlocked(reader) {
  return daysSinceStart() >= reader.unlockDay;
}

function renderReaderList() {
  const list = document.getElementById('reader-list');
  list.innerHTML = '';
  READERS.forEach(r => {
    const unlocked = isUnlocked(r);
    const card = document.createElement('div');
    card.className = 'reader-card' + (unlocked ? '' : ' locked');
    card.innerHTML = `
      <div class="reader-card-info">
        <h4>${r.title}</h4>
        <p>${r.period}</p>
      </div>
      ${unlocked
        ? `<button class="btn-primary open-reader" data-id="${r.id}">Read</button>`
        : `<span class="locked-label">Day ${r.unlockDay}</span>`
      }
    `;
    list.appendChild(card);
  });
  list.querySelectorAll('.open-reader').forEach(btn => {
    btn.addEventListener('click', () => openReader(parseInt(btn.dataset.id)));
  });
}

function openReader(id) {
  const r = READERS.find(x => x.id === id);
  if (!r) return;
  document.getElementById('reader-list').classList.add('hidden');
  document.getElementById('reader-content').classList.remove('hidden');
  document.getElementById('reader-title').textContent = r.title;
  document.getElementById('reader-period').textContent = r.period;
  renderReaderText(r);
}

document.getElementById('btn-back-reader').addEventListener('click', () => {
  document.getElementById('reader-list').classList.remove('hidden');
  document.getElementById('reader-content').classList.add('hidden');
  document.getElementById('translation-popup').classList.add('hidden');
});

function renderReaderText(r) {
  const container = document.getElementById('reader-text');
  // Split text into tokens (words + punctuation)
  const tokens = r.text.split(/(\s+)/);
  let html = '';
  tokens.forEach(token => {
    if (/^\s+$/.test(token)) { html += token; return; }
    // Check if this token (or nearby phrase) has a translation
    const match = findTranslation(token, r.translations);
    if (match) {
      html += `<span class="r-word has-translation" data-phrase="${escHtml(match.phrase)}" data-trans="${escHtml(match.trans)}">${escHtml(token)}</span>`;
    } else {
      html += `<span class="r-word" data-word="${escHtml(token)}">${escHtml(token)}</span>`;
    }
  });
  container.innerHTML = html;

  container.querySelectorAll('.r-word').forEach(el => {
    el.addEventListener('click', (e) => showPopup(e, r));
  });
}

function findTranslation(token, translations) {
  // Exact match (case-insensitive, strip trailing punctuation for lookup)
  const clean = token.replace(/[.,!?;:"""']$/, '');
  for (const phrase of Object.keys(translations)) {
    if (phrase.toLowerCase() === clean.toLowerCase()) {
      return { phrase: clean, trans: translations[phrase] };
    }
  }
  return null;
}

function showPopup(e, r) {
  const el = e.currentTarget;
  const popup = document.getElementById('translation-popup');
  let phrase, trans;

  if (el.dataset.phrase) {
    phrase = el.dataset.phrase;
    trans = el.dataset.trans;
  } else {
    const word = el.dataset.word || el.textContent;
    const clean = word.replace(/[.,!?;:"""']$/, '');
    // Try to find it in translations
    const match = findTranslation(clean, r.translations);
    if (match) { phrase = match.phrase; trans = match.trans; }
    else { phrase = clean; trans = '(no translation stored)'; }
  }

  document.getElementById('popup-german').textContent = phrase;
  document.getElementById('popup-english').textContent = trans;
  const addBtn = document.getElementById('popup-add');
  addBtn.disabled = false;
  addBtn.textContent = '＋ flashcard';
  popup.classList.remove('hidden');

  addBtn.onclick = () => {
    if (trans === '(no translation stored)') return;
    const custom = load('customVocab', []);
    const already = getFullVocab().some(w => w.german === phrase);
    if (!already) {
      custom.push({ german: phrase, english: trans, category: 'verb' });
      save('customVocab', custom);
    }
    addBtn.textContent = already ? 'Already in deck' : '✓ Added!';
    addBtn.disabled = true;
  };

  // Dismiss popup on outside click
  setTimeout(() => {
    document.addEventListener('click', dismissPopup, { once: true });
  }, 10);
}

function dismissPopup(e) {
  const popup = document.getElementById('translation-popup');
  if (!popup.contains(e.target)) popup.classList.add('hidden');
}

function escHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

renderReaderList();
