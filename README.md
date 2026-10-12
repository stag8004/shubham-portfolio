# Shubham Tagunde Portfolio

A React + Vite portfolio modeled on the reference site's section hierarchy and interaction patterns, populated with information from `ShubhamTResume.pdf`.

## Included
- Reference-inspired navigation with resume preview/download actions.
- Split hero layout with your supplied portrait, contact metadata, experience and stack metrics.
- Professional summary and core-strength cards.
- Eight searchable skill categories.
- Professional experience summary with responsibility cards and applied technologies.
- Five project cards with interactive architecture/pipeline dialogs.
- Education section.
- Contact panel with email, phone, LinkedIn, and copy-email action.
- Resume PDF preview dialog.
- Responsive navigation, layouts, and reduced-motion support.

## Intentionally excluded
- No friend-specific personal details, achievements, certifications, gallery images, or resume content.
- No achievements section, as requested.
- No unverified portfolio or repository links.

## Run locally
Requires Node.js and npm.

```bash
npm install
npm run dev
```

## Verify production build

```bash
npm run build
npm run preview
```

## GitHub Pages deployment with GitHub Actions

A workflow is included at `.github/workflows/deploy.yml`. After this project is pushed to the intended GitHub deployment repository on the `main` branch, the workflow installs dependencies, calculates the correct Vite base path, builds `dist/`, and deploys it to GitHub Pages.

On the repository, open **Settings → Pages** and select **GitHub Actions** as the build and deployment source if it is not already configured. Then inspect the **Actions** tab and wait for the `Deploy portfolio to GitHub Pages` workflow to complete. A successful workflow is not enough by itself: open the published URL and check the image, resume PDF, navigation, and project dialogs.

## GitHub Pages base path

For a project site such as `username.github.io/YOUR-REPOSITORY/`, build with:

PowerShell:
```powershell
$env:VITE_BASE_PATH="/YOUR-REPOSITORY/"
npm run build
```

macOS/Linux:
```bash
VITE_BASE_PATH=/YOUR-REPOSITORY/ npm run build
```

The `dist/` directory is the deployable output. Publish its contents using your existing GitHub Pages workflow.

## Before publishing
- Confirm every experience and project description is accurate and safe to disclose.
- Confirm phone number, email, and resume PDF should be publicly visible.
- Check the site at desktop and mobile widths after running it locally.
