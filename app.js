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

// Direction: 'de-en' = German prompt, English answer; 'en-de' = the reverse.
let cardDirection = load('cardDirection', 'de-en');

// The German text shown on a card. For nouns with a plural, show
// "der Vater / die Väter" so singular and plural sit together.
function germanDisplay(card) {
  if (card.plural && /-noun$/.test(card.category)) {
    return `${card.german} / ${card.plural}`;
  }
  return card.german;
}

function showCard() {
  const card = document.getElementById('flashcard');
  card.classList.remove('gender-masc', 'gender-fem', 'gender-neut');

  const frontPrimary = document.getElementById('front-primary');
  const frontSub = document.getElementById('front-sub');
  const backPrimary = document.getElementById('back-primary');
  const backSub = document.getElementById('back-sub');

  if (deck.length === 0) {
    frontPrimary.textContent = 'No cards in this selection.';
    frontSub.textContent = '';
    document.getElementById('card-back').classList.add('hidden');
    document.getElementById('card-front').classList.remove('hidden');
    document.getElementById('card-progress').textContent = '';
    document.getElementById('btn-show').classList.add('hidden');
    document.getElementById('btn-grade').classList.add('hidden');
    return;
  }
  currentCard = deck[deckIndex % deck.length];

  const germanText = germanDisplay(currentCard);
  const englishText = currentCard.english;
  const catLabel = currentCard.category.replace('-', ' ');

  const frontIsGerman = (cardDirection === 'de-en');

  // Mark which face carries the German text (for colour + optional gender font).
  const fontCls = genderFontClass(currentCard.category);
  frontPrimary.className = 'card-primary ' + (frontIsGerman ? 'is-german ' + fontCls : 'is-english');
  backPrimary.className  = 'card-primary ' + (frontIsGerman ? 'is-english' : 'is-german ' + fontCls);

  if (frontIsGerman) {
    frontPrimary.textContent = germanText;
    frontSub.textContent = '';
    backPrimary.textContent = englishText;
    backSub.textContent = catLabel;
  } else {
    frontPrimary.textContent = englishText;
    frontSub.textContent = '';
    backPrimary.textContent = germanText;
    backSub.textContent = catLabel;
  }

  // Apply the gender colour only while the German face is visible, so in
  // English→German mode the gender isn't given away before you answer.
  applyGenderColour(frontIsGerman);

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

// Add/remove the gender colour class based on whether the German face is showing.
function applyGenderColour(showing) {
  const card = document.getElementById('flashcard');
  card.classList.remove('gender-masc', 'gender-fem', 'gender-neut');
  if (showing && currentCard && GENDER_CLASS[currentCard.category]) {
    card.classList.add(GENDER_CLASS[currentCard.category]);
  }
}

document.getElementById('btn-show').addEventListener('click', () => {
  document.getElementById('card-front').classList.add('hidden');
  document.getElementById('card-back').classList.remove('hidden');
  document.getElementById('btn-show').classList.add('hidden');
  document.getElementById('btn-grade').classList.remove('hidden');
  // If German is on the back (English→German mode), reveal the gender colour now.
  if (cardDirection === 'en-de') applyGenderColour(true);
});

document.getElementById('direction').addEventListener('change', (e) => {
  cardDirection = e.target.value;
  save('cardDirection', cardDirection);
  showCard();
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
  const CATS = ['masculine-noun','feminine-noun','neuter-noun','verb','adjective','conjunction','adverb','preposition','reader'];
  all.forEach((w, i) => {
    const p = progress[w.german] || { right: 0, wrong: 0 };
    const isCustom = i >= VOCAB.length;
    const customIdx = i - VOCAB.length;
    const rowClass = GENDER_CLASS[w.category] ? `row-${GENDER_CLASS[w.category].split('-')[1]}` : '';
    // Custom words get an editable category dropdown; built-in words show plain text.
    const categoryCell = isCustom
      ? `<select class="cat-edit" data-idx="${customIdx}">` +
        CATS.map(c => `<option value="${c}"${c === w.category ? ' selected' : ''}>${c.replace('-',' ')}</option>`).join('') +
        `</select>`
      : w.category.replace('-',' ');
    html += `<tr class="${rowClass}">
      <td>${w.german}</td><td>${w.english}</td>
      <td>${w.plural || ''}</td>
      <td>${categoryCell}</td>
      <td>${p.right}</td><td>${p.wrong}</td>
      <td>${isCustom ? `<button class="delete-word" data-idx="${customIdx}">🗑</button>` : ''}</td>
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
  wrap.querySelectorAll('.cat-edit').forEach(sel => {
    sel.addEventListener('change', () => {
      const custom = load('customVocab', []);
      custom[parseInt(sel.dataset.idx)].category = sel.value;
      save('customVocab', custom);
      buildDeck(); showCard();
      renderVocabTable();
    });
  });
}

// Init flashcards
document.getElementById('direction').value = cardDirection;
buildDeck();
showCard();

// ============================================================
//  WORD ORDER
// ============================================================

const WO_EXERCISES = {
  'Normal statement': [
    { words: ['Ich', 'esse', 'einen', 'Apfel'], hint: 'Subject → Verb → Object' },
    { words: ['Der', 'Mann', 'kauft', 'ein', 'Buch'], hint: 'Subject → Verb → Object' },
    { words: ['Die', 'Frau', 'trinkt', 'Kaffee'], hint: 'Subject → Verb → Object' },
    { words: ['Das', 'Kind', 'spielt', 'Fußball'], hint: 'Subject → Verb → Object' },
    { words: ['Wir', 'lernen', 'Deutsch'], hint: 'Subject → Verb → Object' },
    { words: ['Er', 'liebt', 'seine', 'Familie'], hint: 'Subject → Verb → Object' },
    { words: ['Die', 'Kinder', 'essen', 'einen', 'Kuchen'], hint: 'Subject → Verb → Object' },
    { words: ['Meine', 'Schwester', 'hat', 'einen', 'Hund'], hint: 'Subject → Verb → Object' },
    { words: ['Ich', 'gehe', 'heute', 'ins', 'Kino'], hint: 'Subject → Verb → Time → Place' },
    { words: ['Er', 'fährt', 'morgen', 'nach', 'Berlin'], hint: 'Subject → Verb → Time → Place' },
    { words: ['Wir', 'essen', 'abends', 'zusammen'], hint: 'Subject → Verb → Time → Manner' },
    { words: ['Sie', 'schreibt', 'jeden', 'Tag', 'einen', 'Brief'], hint: 'Subject → Verb → Time → Object' },
    { words: ['Er', 'liest', 'abends', 'ein', 'Buch'], hint: 'Subject → Verb → Time → Object' },
    { words: ['Ich', 'trinke', 'morgens', 'einen', 'Kaffee'], hint: 'Subject → Verb → Time → Object' },
    { words: ['Wir', 'fahren', 'im', 'Sommer', 'nach', 'Italien'], hint: 'Subject → Verb → Time → Place' },
    { words: ['Der', 'Lehrer', 'gibt', 'den', 'Kindern', 'Hausaufgaben'], hint: 'Subject → Verb → Indirect object → Direct object' },
    { words: ['Ich', 'schenke', 'meiner', 'Mutter', 'Blumen'], hint: 'Subject → Verb → Dative → Accusative' },
  ],
  'Inverted (front element first)': [
    { words: ['Heute', 'gehe', 'ich', 'ins', 'Kino'], hint: 'TIME first → Verb stays 2nd → Subject shifts after it' },
    { words: ['Morgen', 'kommt', 'meine', 'Mutter'], hint: 'TIME first → Verb 2nd → Subject 3rd' },
    { words: ['Gestern', 'hat', 'er', 'gearbeitet'], hint: 'TIME first → auxiliary 2nd (Perfekt)' },
    { words: ['Manchmal', 'lese', 'ich', 'ein', 'Buch'], hint: 'ADVERB first → inversion' },
    { words: ['Leider', 'kann', 'ich', 'nicht', 'kommen'], hint: 'ADVERB first → modal verb 2nd' },
    { words: ['Deshalb', 'bleibe', 'ich', 'zu', 'Hause'], hint: 'ADVERB first → inversion' },
    { words: ['In', 'Berlin', 'wohnt', 'meine', 'Mutter'], hint: 'PLACE first → Verb 2nd → Subject after it' },
    { words: ['Mit', 'dem', 'Zug', 'fahren', 'wir', 'nach', 'Köln'], hint: 'PREPOSITIONAL phrase first → inversion' },
    { words: ['Diesen', 'Film', 'habe', 'ich', 'schon', 'gesehen'], hint: 'OBJECT first (for emphasis) → Verb 2nd → Subject after it' },
    { words: ['Am', 'Montag', 'beginnt', 'die', 'Schule'], hint: 'TIME phrase first → inversion' },
    { words: ['Nach', 'der', 'Arbeit', 'gehe', 'ich', 'einkaufen'], hint: 'PREPOSITIONAL phrase first → inversion' },
    { words: ['Jeden', 'Tag', 'trinkt', 'er', 'Kaffee'], hint: 'TIME phrase first → inversion' },
    { words: ['Im', 'Sommer', 'fahren', 'wir', 'ans', 'Meer'], hint: 'TIME phrase first → inversion' },
    { words: ['Heute', 'Abend', 'kochen', 'wir', 'zusammen'], hint: 'TIME phrase first → inversion' },
  ],
  'Yes/No questions': [
    { words: ['Kommst', 'du', 'heute', 'Abend?'], hint: 'Verb first → Subject → rest (no question word)' },
    { words: ['Hast', 'du', 'Hunger?'], hint: 'Verb first → Subject' },
    { words: ['Spricht', 'er', 'Deutsch?'], hint: 'Verb first → Subject → Object' },
    { words: ['Haben', 'Sie', 'ein', 'Zimmer', 'frei?'], hint: 'Verb first → Subject → Object' },
    { words: ['Fährst', 'du', 'morgen', 'nach', 'Hamburg?'], hint: 'Verb first → Subject → Time → Place' },
    { words: ['Kannst', 'du', 'mir', 'helfen?'], hint: 'Modal first → Subject → infinitive at end' },
    { words: ['Ist', 'das', 'richtig?'], hint: 'Verb first → Subject' },
    { words: ['Trinkst', 'du', 'einen', 'Kaffee?'], hint: 'Verb first → Subject → Object' },
    { words: ['Wohnst', 'du', 'in', 'Berlin?'], hint: 'Verb first → Subject → Place' },
    { words: ['Möchtest', 'du', 'mitkommen?'], hint: 'Modal first → Subject → infinitive at end' },
    { words: ['Habt', 'ihr', 'das', 'Spiel', 'gesehen?'], hint: 'Auxiliary first → Subject → Object → Participle' },
    { words: ['Darf', 'ich', 'hier', 'rauchen?'], hint: 'Modal first → Subject → infinitive at end' },
  ],
  'W-questions': [
    { words: ['Wo', 'wohnst', 'du?'], hint: 'W-word → Verb → Subject' },
    { words: ['Was', 'machst', 'du', 'heute?'], hint: 'W-word → Verb → Subject → Time' },
    { words: ['Wann', 'kommt', 'der', 'Zug?'], hint: 'W-word → Verb → Subject' },
    { words: ['Wie', 'heißt', 'du?'], hint: 'W-word → Verb → Subject' },
    { words: ['Warum', 'lernst', 'du', 'Deutsch?'], hint: 'W-word → Verb → Subject → Object' },
    { words: ['Wohin', 'fährst', 'du', 'im', 'Sommer?'], hint: 'W-word → Verb → Subject → Time' },
    { words: ['Wer', 'hat', 'das', 'gemacht?'], hint: 'W-word → Verb → Subject → Participle' },
    { words: ['Wie', 'viel', 'kostet', 'das?'], hint: 'W-phrase → Verb → Subject' },
    { words: ['Woher', 'kommst', 'du?'], hint: 'W-word → Verb → Subject' },
    { words: ['Wen', 'hast', 'du', 'gesehen?'], hint: 'W-word (object) → Verb → Subject → Participle' },
    { words: ['Wann', 'stehst', 'du', 'auf?'], hint: 'W-word → Verb → Subject → separable prefix at end' },
    { words: ['Mit', 'wem', 'gehst', 'du', 'ins', 'Kino?'], hint: 'W-phrase → Verb → Subject → Place' },
  ],
  'Subordinate clauses': [
    { words: ['Ich', 'weiß,', 'dass', 'er', 'kommt'], hint: 'dass sends the verb to the end' },
    { words: ['Er', 'geht', 'nicht,', 'weil', 'er', 'krank', 'ist'], hint: 'weil sends the verb to the end' },
    { words: ['Ich', 'glaube,', 'dass', 'das', 'richtig', 'ist'], hint: 'dass → verb at end' },
    { words: ['Sie', 'sagt,', 'dass', 'sie', 'Hunger', 'hat'], hint: 'dass → verb at end' },
    { words: ['Ich', 'komme', 'nicht,', 'obwohl', 'ich', 'Zeit', 'habe'], hint: 'obwohl → verb at end' },
    { words: ['Er', 'bleibt', 'zu', 'Hause,', 'wenn', 'es', 'regnet'], hint: 'wenn → verb at end' },
    { words: ['Ich', 'weiß', 'nicht,', 'ob', 'sie', 'kommt'], hint: 'ob → verb at end' },
    { words: ['Wir', 'warten,', 'bis', 'der', 'Zug', 'kommt'], hint: 'bis → verb at end' },
    { words: ['Ich', 'lerne', 'Deutsch,', 'weil', 'es', 'mir', 'gefällt'], hint: 'weil → verb at end' },
    { words: ['Sie', 'fragt,', 'wann', 'der', 'Film', 'beginnt'], hint: 'indirect question → verb at end' },
    { words: ['Er', 'ist', 'müde,', 'weil', 'er', 'viel', 'gearbeitet', 'hat'], hint: 'weil → BOTH verbs at end (participle then auxiliary)' },
    { words: ['Ich', 'hoffe,', 'dass', 'du', 'bald', 'kommen', 'kannst'], hint: 'dass → modal goes last, after the infinitive' },
  ],
  'Modal verbs': [
    { words: ['Ich', 'kann', 'gut', 'schwimmen'], hint: 'Subject → Modal → … → Infinitive at end' },
    { words: ['Er', 'muss', 'heute', 'arbeiten'], hint: 'Subject → Modal → Time → Infinitive at end' },
    { words: ['Wir', 'wollen', 'nach', 'Berlin', 'fahren'], hint: 'Subject → Modal → … → Infinitive at end' },
    { words: ['Du', 'sollst', 'das', 'nicht', 'machen'], hint: 'Subject → Modal → Object → Infinitive at end' },
    { words: ['Sie', 'darf', 'hier', 'nicht', 'parken'], hint: 'Subject → Modal → … → Infinitive at end' },
    { words: ['Ich', 'möchte', 'einen', 'Kaffee', 'bestellen'], hint: 'Subject → Modal → Object → Infinitive at end' },
    { words: ['Morgen', 'muss', 'ich', 'früh', 'aufstehen'], hint: 'Time first → Modal 2nd → Subject 3rd → Infinitive at end' },
    { words: ['Kannst', 'du', 'mir', 'das', 'erklären?'], hint: 'Modal first (yes/no Q) → Subject → … → Infinitive at end' },
    { words: ['Wir', 'können', 'heute', 'nicht', 'kommen'], hint: 'Subject → Modal → … → Infinitive at end' },
    { words: ['Ich', 'will', 'dich', 'morgen', 'besuchen'], hint: 'Subject → Modal → Object → Time → Infinitive at end' },
    { words: ['Man', 'darf', 'hier', 'nicht', 'rauchen'], hint: 'Subject → Modal → … → Infinitive at end' },
    { words: ['Sie', 'muss', 'noch', 'viel', 'lernen'], hint: 'Subject → Modal → … → Infinitive at end' },
  ],
  'Separable verbs': [
    { words: ['Ich', 'rufe', 'dich', 'später', 'an'], hint: 'anrufen → SPLITS: rufe … an (prefix to the end)' },
    { words: ['Der', 'Zug', 'kommt', 'um', 'acht', 'an'], hint: 'ankommen → SPLITS: kommt … an' },
    { words: ['Ich', 'stehe', 'jeden', 'Tag', 'früh', 'auf'], hint: 'aufstehen → SPLITS: stehe … auf' },
    { words: ['Wir', 'kaufen', 'am', 'Samstag', 'ein'], hint: 'einkaufen → SPLITS: kaufen … ein' },
    { words: ['Sie', 'sieht', 'gern', 'fern'], hint: 'fernsehen → SPLITS: sieht … fern' },
    { words: ['Er', 'zieht', 'die', 'Jacke', 'an'], hint: 'anziehen → SPLITS: zieht … an' },
    { words: ['Wir', 'fangen', 'jetzt', 'an'], hint: 'anfangen → SPLITS: fangen … an' },
    { words: ['Ich', 'räume', 'mein', 'Zimmer', 'auf'], hint: 'aufräumen → SPLITS: räume … auf' },
    { words: ['Kommst', 'du', 'heute', 'mit?'], hint: 'mitkommen → SPLITS in a question too: kommst … mit' },
    { words: ['Ich', 'möchte', 'dich', 'anrufen'], hint: 'With a MODAL it stays together — infinitive at the end' },
    { words: ['Ich', 'muss', 'früh', 'aufstehen'], hint: 'With a MODAL it stays together: …  aufstehen' },
    { words: ['Er', 'sagt,', 'dass', 'er', 'mitkommt'], hint: 'In a SUBORDINATE clause it stays together at the end: … mitkommt' },
    { words: ['Sie', 'bleibt,', 'weil', 'der', 'Film', 'anfängt'], hint: 'In a SUBORDINATE clause it stays together: … anfängt' },
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

// Strip sentence-final punctuation (? ! .) from a token so the last tile in
// a question doesn't give itself away. Commas are kept (they mark clause
// boundaries and appear mid-sentence).
function stripEndPunct(w) {
  return w.replace(/[?!.]+$/, '');
}

function nextWO() {
  const pool = WO_EXERCISES[woCategory];
  const ex = pool[Math.floor(Math.random() * pool.length)];
  const cleanWords = ex.words.map(stripEndPunct);
  woCorrect = cleanWords.join(' ');
  woAnswer = [];
  woTiles = [...cleanWords].sort(() => Math.random() - 0.5);

  const area = document.getElementById('wo-exercise');
  area.innerHTML = `
    <div class="exercise-label">Arrange into a correct sentence:</div>
    <div class="exercise-hint hidden" id="wo-hint">${ex.hint}</div>
    <div class="answer-slots" id="wo-slots"></div>
    <div class="word-tiles" id="wo-tiles"></div>
    <button class="btn-primary" id="btn-wo-check" style="margin-top:0.5rem">Check</button>
    <button class="btn-secondary" id="btn-wo-clear" style="margin-top:0.5rem;margin-left:0.5rem">Clear</button>
  `;
  // Hint is off by default for each new sentence; reflect the checkbox state.
  const hintBox = document.getElementById('wo-show-hint');
  hintBox.checked = false;
  document.getElementById('wo-hint').classList.add('hidden');

  renderWOTiles();
  document.getElementById('btn-wo-check').addEventListener('click', checkWO);
  document.getElementById('btn-wo-clear').addEventListener('click', () => {
    woAnswer = [];
    woTiles = [...cleanWords].sort(() => Math.random() - 0.5);
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

// Hint checkbox: shows/hides the hint for the current sentence only.
document.getElementById('wo-show-hint').addEventListener('change', (e) => {
  const hint = document.getElementById('wo-hint');
  if (hint) hint.classList.toggle('hidden', !e.target.checked);
});

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
//  GENDER PRACTICE
// ============================================================

const GENDER_ANIM = {
  'masculine-noun': 'anim-masc',
  'feminine-noun':  'anim-fem',
  'neuter-noun':    'anim-neut',
};
const GENDER_ARTICLE = {
  'masculine-noun': 'der',
  'feminine-noun':  'die',
  'neuter-noun':    'das',
};
// Font class applied to a word based on its gender (used when "Gender fonts" is on).
function genderFontClass(category) {
  if (category === 'masculine-noun') return 'gfont-masc';
  if (category === 'feminine-noun') return 'gfont-fem';
  return '';
}

// ---- Gender fonts toggle (shared between Flashcards and Gender sections) ----
let genderFontsOn = load('genderFontsOn', false);
const gfToggle   = document.getElementById('gender-fonts-toggle');      // in Gender section
const gfToggleFc = document.getElementById('gender-fonts-toggle-fc');   // in Flashcards header

function setGenderFonts(on) {
  genderFontsOn = on;
  save('genderFontsOn', genderFontsOn);
  document.body.classList.toggle('gender-fonts', genderFontsOn);
  if (gfToggle)   gfToggle.checked = genderFontsOn;
  if (gfToggleFc) gfToggleFc.checked = genderFontsOn;
  showCard(); // refresh the flashcard so the font applies immediately
}

setGenderFonts(genderFontsOn); // apply saved preference on load
if (gfToggle)   gfToggle.addEventListener('change', () => setGenderFonts(gfToggle.checked));
if (gfToggleFc) gfToggleFc.addEventListener('change', () => setGenderFonts(gfToggleFc.checked));

// ---- Tab switching ----
document.querySelectorAll('#gender-tabs .tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#gender-tabs .tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const tab = btn.dataset.gtab;
    document.getElementById('gender-drill').classList.toggle('hidden', tab !== 'drill');
    document.getElementById('gender-rules').classList.toggle('hidden', tab !== 'rules');
  });
});

// ---- Noun drill: pick nouns from the vocab, ask der/die/das ----
let genderProgress = load('genderProgress', {}); // { german: {right,wrong} }

function nounPool() {
  return getFullVocab().filter(w => /-noun$/.test(w.category));
}

let gdCurrent = null;

function nextGenderDrill() {
  const pool = nounPool();
  if (pool.length === 0) return;
  // Bias towards words answered wrong before
  pool.sort((a, b) => {
    const pa = genderProgress[a.german] || { right: 0, wrong: 0 };
    const pb = genderProgress[b.german] || { right: 0, wrong: 0 };
    return (pa.right - pa.wrong * 2) - (pb.right - pb.wrong * 2);
  });
  // Take from the weakest third at random so it's not fully deterministic
  const slice = pool.slice(0, Math.max(5, Math.ceil(pool.length / 3)));
  gdCurrent = slice[Math.floor(Math.random() * slice.length)];

  // Show the noun WITHOUT its article
  const bare = gdCurrent.german.replace(/^(der|die|das)\s+/i, '');
  const wordEl = document.getElementById('gd-word');
  wordEl.className = genderFontClass(gdCurrent.category);
  wordEl.textContent = bare;
  document.getElementById('gd-feedback').textContent = '';
  document.getElementById('gd-feedback').className = 'feedback-area';
  updateGenderProgressLabel();
}

function updateGenderProgressLabel() {
  const totals = Object.values(genderProgress).reduce(
    (acc, p) => { acc.r += p.right; acc.w += p.wrong; return acc; },
    { r: 0, w: 0 }
  );
  document.getElementById('gd-progress').textContent =
    `Correct so far: ✓ ${totals.r}   ✗ ${totals.w}`;
}

document.querySelectorAll('#gender-drill .gbtn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (!gdCurrent) return;
    const chosen = btn.dataset.g;
    const correct = gdCurrent.category;
    const wordEl = document.getElementById('gd-word');
    const fb = document.getElementById('gd-feedback');

    const p = genderProgress[gdCurrent.german] || { right: 0, wrong: 0 };
    if (chosen === correct) {
      p.right++;
      fb.textContent = `✓ Richtig! ${GENDER_ARTICLE[correct]} ${wordEl.textContent}`;
      fb.className = 'feedback-area correct';
    } else {
      p.wrong++;
      fb.innerHTML = `✗ It's <strong>${GENDER_ARTICLE[correct]} ${wordEl.textContent}</strong>` +
        ruleHintFor(wordEl.textContent, correct);
      fb.className = 'feedback-area wrong';
    }
    genderProgress[gdCurrent.german] = p;
    save('genderProgress', genderProgress);
    updateGenderProgressLabel();

    // Vivid gender-specific animation, then advance
    wordEl.classList.remove('anim-masc', 'anim-fem', 'anim-neut');
    void wordEl.offsetWidth; // restart animation
    wordEl.classList.add(GENDER_ANIM[correct]);
    setTimeout(nextGenderDrill, 1300);
  });
});

// Give a short rule explanation when one applies (helps learn the pattern).
function ruleHintFor(word, category) {
  const w = word.toLowerCase();
  for (const rule of GENDER_RULES) {
    if (rule.category === category && rule.test(w)) {
      return `<div class="exercise-hint" style="margin-top:0.4rem">💡 ${rule.hint}</div>`;
    }
  }
  return '';
}

// ---- Rule data: endings & meaning groups that predict gender ----
const GENDER_RULES = [
  // masculine
  { category: 'masculine-noun', hint: "Nouns ending in -er (often a doer) are usually masculine.", test: w => /er$/.test(w) },
  { category: 'masculine-noun', hint: "Nouns ending in -ling are masculine.", test: w => /ling$/.test(w) },
  { category: 'masculine-noun', hint: "Nouns ending in -ismus, -or, -ant are masculine.", test: w => /(ismus|or|ant)$/.test(w) },
  { category: 'masculine-noun', hint: "Days, months and seasons are masculine.", test: w => /(montag|dienstag|januar|februar|frühling|sommer|winter|herbst)$/.test(w) },
  // feminine
  { category: 'feminine-noun', hint: "About 90% of nouns ending in -e are feminine.", test: w => /e$/.test(w) },
  { category: 'feminine-noun', hint: "Nouns ending in -ung, -heit, -keit, -schaft are feminine.", test: w => /(ung|heit|keit|schaft)$/.test(w) },
  { category: 'feminine-noun', hint: "Nouns ending in -ion, -tät, -ik, -ur are feminine.", test: w => /(ion|tät|ik|ur)$/.test(w) },
  { category: 'feminine-noun', hint: "The ending -in marks a female person, which is feminine.", test: w => /in$/.test(w) },
  // neuter
  { category: 'neuter-noun', hint: "Diminutives ending in -chen or -lein are ALWAYS neuter (even das Mädchen!).", test: w => /(chen|lein)$/.test(w) },
  { category: 'neuter-noun', hint: "Nouns ending in -ment, -um, -ma are neuter.", test: w => /(ment|um|ma)$/.test(w) },
];

// ---- Rule quiz: present a word that follows a rule, ask the gender, explain ----
const RULE_QUIZ = [
  { word: "Freiheit", category: 'feminine-noun', rule: "-heit → feminine" },
  { word: "Zeitung", category: 'feminine-noun', rule: "-ung → feminine" },
  { word: "Möglichkeit", category: 'feminine-noun', rule: "-keit → feminine" },
  { word: "Nation", category: 'feminine-noun', rule: "-ion → feminine" },
  { word: "Universität", category: 'feminine-noun', rule: "-tät → feminine" },
  { word: "Freundschaft", category: 'feminine-noun', rule: "-schaft → feminine" },
  { word: "Blume", category: 'feminine-noun', rule: "-e → usually feminine" },
  { word: "Lehrerin", category: 'feminine-noun', rule: "-in → female person, feminine" },
  { word: "Natur", category: 'feminine-noun', rule: "-ur → feminine" },
  { word: "Musik", category: 'feminine-noun', rule: "-ik → feminine" },

  { word: "Lehrer", category: 'masculine-noun', rule: "-er (doer) → usually masculine" },
  { word: "Frühling", category: 'masculine-noun', rule: "-ling → masculine" },
  { word: "Motor", category: 'masculine-noun', rule: "-or → masculine" },
  { word: "Kapitalismus", category: 'masculine-noun', rule: "-ismus → masculine" },
  { word: "Montag", category: 'masculine-noun', rule: "days of the week → masculine" },
  { word: "Januar", category: 'masculine-noun', rule: "months → masculine" },
  { word: "Sommer", category: 'masculine-noun', rule: "seasons → masculine" },

  { word: "Mädchen", category: 'neuter-noun', rule: "-chen → ALWAYS neuter (beats meaning!)" },
  { word: "Brötchen", category: 'neuter-noun', rule: "-chen → always neuter" },
  { word: "Dokument", category: 'neuter-noun', rule: "-ment → neuter" },
  { word: "Datum", category: 'neuter-noun', rule: "-um → neuter" },
  { word: "Thema", category: 'neuter-noun', rule: "-ma → neuter" },
  { word: "Gold", category: 'neuter-noun', rule: "metals → usually neuter" },
  { word: "Leben", category: 'neuter-noun', rule: "infinitive used as a noun → neuter" },
];

let grCurrent = null;
let grOrder = [];
let grIndex = 0;

function nextRuleQuiz() {
  if (grOrder.length === 0) {
    grOrder = [...Array(RULE_QUIZ.length).keys()].sort(() => Math.random() - 0.5);
    grIndex = 0;
  }
  grCurrent = RULE_QUIZ[grOrder[grIndex % grOrder.length]];
  grIndex++;
  const wordEl = document.getElementById('gr-word');
  wordEl.className = genderFontClass(grCurrent.category);
  wordEl.textContent = grCurrent.word;
  document.getElementById('gr-feedback').textContent = '';
  document.getElementById('gr-feedback').className = 'feedback-area';
}

document.querySelectorAll('#gender-rules .gbtn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (!grCurrent) return;
    const chosen = btn.dataset.g;
    const correct = grCurrent.category;
    const wordEl = document.getElementById('gr-word');
    const fb = document.getElementById('gr-feedback');

    if (chosen === correct) {
      fb.innerHTML = `✓ Richtig! <strong>${GENDER_ARTICLE[correct]} ${grCurrent.word}</strong> — ${grCurrent.rule}`;
      fb.className = 'feedback-area correct';
    } else {
      fb.innerHTML = `✗ It's <strong>${GENDER_ARTICLE[correct]} ${grCurrent.word}</strong> — ${grCurrent.rule}`;
      fb.className = 'feedback-area wrong';
    }
    wordEl.classList.remove('anim-masc', 'anim-fem', 'anim-neut');
    void wordEl.offsetWidth;
    wordEl.classList.add(GENDER_ANIM[correct]);
    setTimeout(nextRuleQuiz, 1600);
  });
});

// ---- Static rules reference (inside the collapsible) ----
function renderRulesReference() {
  const el = document.getElementById('rules-reference');
  el.innerHTML = `
    <h4 class="rule-masc">der — Masculine</h4>
    <ul>
      <li>Male people & animals: der Mann, der Hund</li>
      <li>Days, months, seasons: der Montag, der Januar, der Sommer</li>
      <li>Weather & compass points: der Regen, der Wind, der Norden</li>
      <li>Endings: -er, -ling, -ismus, -or, -ant (der Lehrer, der Frühling, der Motor)</li>
    </ul>
    <h4 class="rule-fem">die — Feminine</h4>
    <ul>
      <li>Female people: die Frau, die Lehrerin (-in = female)</li>
      <li>Most nouns ending in -e (~90%): die Blume, die Katze</li>
      <li>Endings: -ung, -heit, -keit, -schaft (die Zeitung, die Freiheit)</li>
      <li>Endings: -ion, -tät, -ik, -ur (die Nation, die Universität)</li>
    </ul>
    <h4 class="rule-neut">das — Neuter</h4>
    <ul>
      <li>Diminutives -chen, -lein: das Mädchen, das Brötchen (ALWAYS neuter)</li>
      <li>Young beings: das Kind, das Baby</li>
      <li>Infinitives used as nouns: das Leben, das Essen</li>
      <li>Endings: -ment, -um, -ma (das Dokument, das Datum, das Thema)</li>
      <li>Metals & colours: das Gold, das Silber, das Rot</li>
    </ul>
    <p style="font-size:0.85rem;color:#777">These rules cover most nouns, but there are exceptions — the drill helps with those.</p>
  `;
}

// Init gender section
nextGenderDrill();
nextRuleQuiz();
renderRulesReference();

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
        ${unlocked
          ? `<h4 class="reader-title-link" data-id="${r.id}" style="cursor:pointer;color:#1a3a5c;text-decoration:underline">${r.title}</h4>`
          : `<h4>${r.title}</h4>`
        }
        <p>${r.period}</p>
      </div>
      ${unlocked
        ? `<button class="btn-primary open-reader" data-id="${r.id}">Read</button>`
        : `<span class="locked-label">Day ${r.unlockDay}</span>`
      }
    `;
    list.appendChild(card);
  });
  list.querySelectorAll('.open-reader, .reader-title-link').forEach(el => {
    el.addEventListener('click', () => openReader(parseInt(el.dataset.id)));
  });
}

function openReader(id) {
  const r = READERS.find(x => x.id === id);
  if (!r) return;
  document.getElementById('reader-list').classList.add('hidden');
  document.getElementById('reader-content').classList.remove('hidden');
  const titleEl = document.getElementById('reader-title');
  titleEl.innerHTML = annotateText(r.title, r.translations);
  titleEl.querySelectorAll('.r-word').forEach(el => {
    el.addEventListener('click', (e) => showPopup(e, r));
  });
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
  // Split into paragraphs, render each as a <p>
  const paragraphs = r.text.split(/\n\n+/);
  container.innerHTML = paragraphs
    .filter(p => p.trim())
    .map(p => '<p>' + annotateText(p.trim(), r.translations) + '</p>')
    .join('\n');
  container.querySelectorAll('.r-word').forEach(el => {
    el.addEventListener('click', (e) => showPopup(e, r));
  });
}

// Split a token into leading punctuation, the core word, and trailing punctuation.
// Uses Unicode letter/number detection so German quotes („ "), guillemets (» «),
// dashes, parentheses etc. are all stripped from the lookup key but preserved
// for display.
function splitToken(tok) {
  const m = tok.match(/^([^\p{L}\p{N}]*)([\p{L}\p{N}].*?[\p{L}\p{N}]|[\p{L}\p{N}])?([^\p{L}\p{N}]*)$/u);
  if (!m) return { lead: '', core: tok, trail: '' };
  return { lead: m[1] || '', core: m[2] || '', trail: m[3] || '' };
}

// Full lookup chain for a single cleaned word.
function lookupWord(clean, translations) {
  if (!clean) return null;
  // 1. Reader-specific translations
  let trans = translations[clean] ?? translations[clean.toLowerCase()];
  if (trans) return trans;
  // 2. Vocabulary list (with/without article)
  const entry = getFullVocab().find(w => {
    const bare = w.german.replace(/^(der|die|das|ein|eine)\s+/i, '');
    return bare.toLowerCase() === clean.toLowerCase()
        || w.german.toLowerCase() === clean.toLowerCase();
  });
  if (entry) return entry.english;
  // 3. Built-in dictionary
  trans = DICT[clean.toLowerCase()] ?? null;
  if (trans) return trans;
  // 4. Suffix-stripping fallback for inflected forms
  return dictFallback(clean.toLowerCase());
}

// Annotate a paragraph with clickable spans.
// Multi-word phrases are matched greedily (longest first), then single words
// fall back to the vocab list so common words are always translatable.
function annotateText(text, translations) {
  // Sort phrase keys: multi-word first (longest first), single words after
  const phrases = Object.keys(translations).sort((a, b) => {
    const wa = a.split(/\s+/).length, wb = b.split(/\s+/).length;
    if (wb !== wa) return wb - wa;        // longer phrase first
    return b.length - a.length;           // longer string first when same word count
  });

  // Tokenise: split into alternating [word, whitespace, word, whitespace, ...]
  const tokens = text.split(/(\s+)/);
  let i = 0;
  let out = '';

  while (i < tokens.length) {
    const tok = tokens[i];

    // Pass whitespace straight through
    if (/^\s+$/.test(tok)) { out += tok; i++; continue; }

    let matched = false;

    // Try every phrase (multi-word ones come first due to sorting)
    for (const phrase of phrases) {
      const pw = phrase.split(/\s+/);

      // Walk forward through tokens trying to match each word of the phrase,
      // skipping over any whitespace tokens between words.
      let ti = i, wi = 0, span = [];
      while (wi < pw.length && ti < tokens.length) {
        if (/^\s+$/.test(tokens[ti])) { span.push(tokens[ti]); ti++; continue; }
        const clean = splitToken(tokens[ti]).core;
        if (clean.toLowerCase() === pw[wi].toLowerCase()) {
          span.push(tokens[ti]); wi++; ti++;
        } else { break; }
      }

      if (wi === pw.length) {
        // Full phrase matched
        const display = span.join('');
        const trans = translations[phrase];
        out += `<span class="r-word has-translation" data-phrase="${escHtml(phrase)}" data-trans="${escHtml(trans)}">${escHtml(display)}</span>`;
        i = ti;
        matched = true;
        break;
      }
    }

    if (!matched) {
      // Single word — strip surrounding punctuation, look up the core
      const { lead, core, trail } = splitToken(tok);
      const clean = core;
      const trans = lookupWord(clean, translations);

      const leadHtml = escHtml(lead);
      const trailHtml = escHtml(trail);
      if (!clean) {
        out += escHtml(tok);
      } else if (trans) {
        out += leadHtml + `<span class="r-word has-translation" data-phrase="${escHtml(clean)}" data-trans="${escHtml(trans)}">${escHtml(clean)}</span>` + trailHtml;
      } else {
        out += leadHtml + `<span class="r-word" data-word="${escHtml(clean)}">${escHtml(clean)}</span>` + trailHtml;
      }
      i++;
    }
  }
  return out;
}

function showPopup(e, r) {
  // Stop this click from bubbling to the global dismiss handler,
  // otherwise the popup we are about to open would be closed immediately.
  e.stopPropagation();

  const el = e.currentTarget;
  const popup = document.getElementById('translation-popup');

  const phrase = el.dataset.phrase || (el.dataset.word || el.textContent.trim());
  const trans  = el.dataset.trans  || null;
  const addBtn = document.getElementById('popup-add');

  document.getElementById('popup-german').textContent = phrase;

  if (!trans) {
    document.getElementById('popup-english').textContent = '(not in dictionary — add your own below)';
    addBtn.disabled = false;
    addBtn.textContent = '＋ add with my own translation';
    addBtn.onclick = () => {
      const userTrans = prompt(`Enter your English translation for "${phrase}":`, '');
      if (userTrans && userTrans.trim()) {
        addToFlashcards(phrase, userTrans.trim(), addBtn);
      }
    };
    popup.classList.remove('hidden');
    return;
  }

  document.getElementById('popup-english').textContent = trans;

  // Reflect existing-deck state immediately (fixes the "offers to add again" confusion)
  const already = getFullVocab().some(w => w.german.toLowerCase() === phrase.toLowerCase());
  if (already) {
    addBtn.disabled = true;
    addBtn.textContent = '✓ Already in deck';
  } else {
    addBtn.disabled = false;
    addBtn.textContent = '＋ flashcard';
    addBtn.onclick = () => addToFlashcards(phrase, trans, addBtn);
  }

  popup.classList.remove('hidden');
}

// Guess a category for a word added from the reader.
// We can reliably detect noun gender only when the word carries its article;
// otherwise we file it under "reader" so it is clearly grouped (and the user
// can re-pick the category in the vocab manager if they wish).
function guessCategory(german) {
  const m = german.trim().match(/^(der|die|das)\s+/i);
  if (m) {
    const art = m[1].toLowerCase();
    if (art === 'der') return 'masculine-noun';
    if (art === 'die') return 'feminine-noun';
    if (art === 'das') return 'neuter-noun';
  }
  return 'reader';
}

function addToFlashcards(german, english, btn) {
  const already = getFullVocab().some(w => w.german.toLowerCase() === german.toLowerCase());
  if (!already) {
    const custom = load('customVocab', []);
    custom.push({ german, english, category: guessCategory(german) });
    save('customVocab', custom);
  }
  btn.textContent = already ? '✓ Already in deck' : '✓ Added!';
  btn.disabled = true;
}

// Single persistent handler: any click outside the popup closes it.
document.addEventListener('click', (e) => {
  const popup = document.getElementById('translation-popup');
  if (popup.classList.contains('hidden')) return;
  if (!popup.contains(e.target)) popup.classList.add('hidden');
});
// Clicks inside the popup should not bubble out and dismiss it.
document.getElementById('translation-popup').addEventListener('click', (e) => e.stopPropagation());

// Simple suffix-stripping to find dictionary entries for inflected forms.
// Tries common German endings in order; returns the first match found.
function dictFallback(word) {
  const suffixes = [
    // Verb endings (longest first)
    "enden", "eten", "ten", "sten", "test", "est", "end",
    "ieren", "iert", "ierte", "ierten",
    "en", "er", "em", "es", "et", "st", "te", "t", "e",
  ];
  for (const suf of suffixes) {
    if (word.length > suf.length + 2 && word.endsWith(suf)) {
      const stem = word.slice(0, word.length - suf.length);
      // Try stem alone, stem + "en" (infinitive), stem + "e"
      const candidates = [stem, stem + "en", stem + "e", stem + "n"];
      for (const c of candidates) {
        if (c.length < 3) continue;
        if (DICT[c]) return DICT[c] + " ↩";
      }
    }
  }
  return null;
}

function escHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

renderReaderList();
