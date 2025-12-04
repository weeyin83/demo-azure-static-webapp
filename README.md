# Azure Static Web Apps Demo (Vanilla HTML/CSS/JS)

A tiny, creative demo site you can deploy with Azure Static Web Apps. No frameworks — just fast, simple assets.

## Project Structure

- `index.html` — main page
- `styles.css` — styles
- `script.js` — small interactive demo
- `.github/workflows/azure-static-web-apps.yml` — CI/CD for Azure Static Web Apps

## Run Locally

You can open `index.html` directly in your browser. For a nicer local experience, you can serve the repo root.

```pwsh
# Serve the current folder on http://localhost:8000
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to Azure Static Web Apps

1. Push this repo to GitHub.
2. Create an Azure Static Web App from the Azure Portal.
   - App location: `/` (root)
   - Build presets: `Custom`
3. On creation, GitHub will add the workflow file to `.github/workflows`. If it is not added automatically, use the provided workflow in this repo.

The site will auto-deploy on each push to the `main` branch.

## Optional: GitHub Pages Preview

If you want a quick preview without Azure:

- Enable GitHub Pages in repo settings.
- Set source to the root (`/`).

## Notes

- This project intentionally has zero dependencies.
- You can safely rename the site, tweak colors in `styles.css` and adjust the demo in `script.js`.
