# Azure Static Web Apps Demo (Vanilla HTML/CSS/JS)

A tiny, creative demo site you can deploy with Azure Static Web Apps. No frameworks — just fast, simple assets.

## Project Structure

- `public/index.html` — main page
- `public/styles.css` — styles
- `public/script.js` — small interactive demo
- `.github/workflows/azure-static-web-apps.yml` — CI/CD for Azure Static Web Apps

## Run Locally

You can open `public/index.html` directly in your browser. For a nicer local experience, you can serve the `public` folder.

```pwsh
# Using PowerShell's simple server (Windows 11+)
# If not available, skip and open the HTML directly.
# This serves the current folder on http://localhost:8000
cd public
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to Azure Static Web Apps

1. Push this repo to GitHub.
2. Create an Azure Static Web App from the Azure Portal.
   - App location: `/public`
   - Build presets: `Custom`
3. On creation, GitHub will add the workflow file to `.github/workflows`. If it is not added automatically, use the provided workflow in this repo.

The site will auto-deploy on each push to the `main` branch.

## Optional: GitHub Pages Preview

If you want a quick preview without Azure:

- Enable GitHub Pages in repo settings.
- Set source to `/public` folder.

## Notes

- This project intentionally has zero dependencies.
- You can safely rename the site, tweak colors in `styles.css` and adjust the demo in `script.js`.
