# German Practice — project notes for Claude

A static German-learning web app hosted on GitHub Pages. Pure HTML/CSS/JS, no
build step, no backend. Repo: https://github.com/Fridgebird/german-practice
Live: https://fridgebird.github.io/german-practice/

## Structure

- `index.html` — single page; loads the data files then `app.js`.
- `app.js` — all app logic (flashcards, word order, past tense, sein/haben, reader).
- `style.css` — styling, incl. gender colour coding (blue=der, pink=die, green=das).
- `data/vocab.js` — `VOCAB[]`: seeded flashcard words. Nouns have a `plural` field.
- `data/readers.js` — `READERS[]`: reader passages (world history from 1000 AD).
  Each has `id`, `unlockDay`, `period`, `title`, `text`, and a `translations` map.
- `data/dictionary.js` — `DICT{}`: the main German→English lookup table.
- `data/dict_supplement.js` — `Object.assign(DICT, {...})`: overflow entries,
  especially article-specific vocabulary and proper nouns.
- `tools/check-coverage.js` — verifies every reader word is translatable.

## ⚠️ RULE: after adding or editing any reader article, run the coverage check

The reader lets the user click ANY word to see its translation. Every word in
every passage MUST resolve through the lookup chain (reader `translations` →
`VOCAB` → `DICT` → `dict_supplement` → suffix fallback). When you add a new
article to `data/readers.js`, you MUST run:

```
node tools/check-coverage.js
```

If it reports missing words, add them (with correct English translations) to
`data/dict_supplement.js`, then re-run until it prints "✅ Full coverage".
Do not commit a new article until coverage is clean.

The lookup logic in `tools/check-coverage.js` is a copy of the logic in
`app.js` (`splitToken`, `dictFallback`, the lookup order). If you change the
lookup logic in one, update the other to match.

## Conventions

- Commit messages end with the Co-Authored-By trailer.
- Commit & push only when the user asks (they usually do for this project).
- Keep everything dependency-free and static so GitHub Pages keeps working.
