# Read Scriptures
A hyper-powerful search-and-explore tool for analyzing.

Special thanks to scriptures.nephi.org for the lds-scriptures.json that was uploaded here. All coded with Google's Gemini.

Pseudo-preview any PR here (just swap out `bryanwhiting-patch-1` for your branch):
https://htmlpreview.github.io/?https://github.com/scripturestudy/scripturestudy.github.io/blob/bryanwhiting-patch-1/index.html

## Running Tests

After installing [Node.js](https://nodejs.org/), run:

```bash
npm test
```

This executes `node tests/test_json_validity.js` which verifies that
`lds-scriptures.json` is valid JSON and contains the expected keys.



