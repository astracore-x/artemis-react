# Verification

Completed during packaging:

- `npm install --no-audit --no-fund`: dependencies installed and lockfile generated.
- `npm run build`: successful Vite production build.
- `npm test`: 6 checks passed. Covers high-school course clearing, required photo/references, exact-domain invitation validation, duplicate application prevention, PHP preference serialization, and server rendering of every navigation page across all four portals.

Browser visual and end-to-end interaction testing was not available. Server rendering does not verify DOM interactions, keyboard focus behavior, print output, or responsive appearance in a real browser. Review those before production use.
