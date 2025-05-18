const fs = require('fs');
const assert = require('assert');

const jsonPath = 'lds-scriptures.json';
const raw = fs.readFileSync(jsonPath, 'utf8');
let data;
try {
  data = JSON.parse(raw);
} catch (err) {
  console.error('Failed to parse', jsonPath);
  throw err;
}

assert(Array.isArray(data), 'Root JSON element should be an array');
assert(data.length > 0, 'JSON array should not be empty');

const sample = data[0];
const expectedKeys = [
  'volume_title',
  'book_title',
  'book_short_title',
  'chapter_number',
  'verse_number',
  'verse_title',
  'verse_short_title',
  'scripture_text'
];

for (const key of expectedKeys) {
  assert(key in sample, `Missing key: ${key}`);
}

console.log('JSON is valid with expected keys.');
