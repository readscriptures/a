# Read Scriptures
A hyper-powerful search-and-explore tool for analyzing.

Special thanks to scriptures.nephi.org for the lds-scriptures.json that was uploaded here. All coded with Google's Gemini.

Pseudo-preview any PR here (just swap out `bryanwhiting-patch-1` for your branch):

https://htmlpreview.github.io/?https://github.com/scripturestudy/scripturestudy.github.io/blob/bryanwhiting-patch-1/index.html

## CDN Integrity Hashes

To generate a `sha384` integrity hash for a CDN script, run:

```bash
curl -fsSL <url> | openssl dgst -sha384 -binary | openssl base64 -A
```

Use the resulting value in the `integrity` attribute of the `<script>` tag and set `crossorigin="anonymous"`.
