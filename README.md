# Bluework — React MVP prototype

A GitHub-ready React application based on the approved Bluework prototype: white-first bento layouts, blue/navy accents, readable tables, and compact Kanban cards.

**Status:** interactive frontend prototype with browser-local sample data. It is not a production recruitment system.

## Run locally

Install **Node.js 22.12 or newer**, then open a terminal in this folder:

```bash
npm ci
npm run dev
```

Open the localhost URL Vite prints. Do not double-click `index.html`.

```bash
npm test
npm run build
npm run preview
```

`npm run build` creates `dist/`. The app has no required environment variables or API keys.

## Upload to GitHub

### Using GitHub's website

1. Create a new empty repository, for example `bluework-mvp`.
2. Extract this ZIP and open the `bluework-react` folder.
3. Choose **uploading an existing file** on the new repository page (or **Add file → Upload files**).
4. Upload the **contents** of the folder so `package.json`, `index.html`, `src/`, and `README.md` are at the repository root. Do not upload the ZIP itself as the source.
5. Commit the files. Include the supplied `package-lock.json`.

If hidden files such as `.gitignore` and `.github/workflows/ci.yml` are omitted by your file picker, use GitHub Desktop or the command-line method below.

### Using Git

Create an empty GitHub repository first, then run these commands from this folder. Replace `YOUR_USERNAME` with your GitHub username:

```bash
git init
git add .
git commit -m "Initial Bluework React prototype"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/bluework-mvp.git
git push -u origin main
```

No Git history, existing remote, credentials, or hosting-provider identity is bundled.

## Explore the portals

- `/?portal=hunter`
- `/?portal=recruiter`
- `/?portal=admin`
- `/?portal=support`

The root page presents the portal chooser. Top navigation switches roles for design review. This switcher is a **demo control, not authentication**.

## Included

- Hunter dashboard, searchable/saveable jobs, local applications, profile wizard, repeatable experience/education/credentials, references, preferences JSON export, generated resume, assessment submission, calendar, and support tickets.
- Recruiter dashboard, vacancy form, applicant Kanban/list views, local stage changes, published assessment selection, member-based workflow approvals, comments, assessment authoring, company profile, invitation preparation, admin transfer confirmation, and event scheduling.
- Super Admin record tables, actual local edit forms, recognized certification catalog, ticket conversations, internal notes, and before/after audit history.
- Separate Customer Service navigation for assistance and support.
- Browser-local persistence, data export, and confirmed demo reset.

The default hunter account is pre-completed sample data. **My profile → Preview new-user flow** enables the required-profile screen. A profile image is required to finish that flow. A “no work experience yet” option is an explicit prototype assumption for first-time applicants.

## Source structure

```text
src/
  App.jsx                 Portal routing, navigation, dialogs
  main.jsx                React entry point
  styles.css              Blue design tokens and responsive layouts
  components/UI.jsx       Shared cards, fields, tables, metrics, Kanban
  pages/Hunter.jsx        Job discovery, applications, resume, dashboard
  pages/Profile.jsx       Seven-step onboarding
  pages/Recruiter.jsx     Hiring organization workspace
  pages/Admin.jsx         Record management and oversight
  pages/Shared.jsx        Calendars, support, assessment session
  lib/data.js             Sample records and role navigation
  lib/model.js            Validation, preferences, utilities
  lib/store.jsx           React context and local persistence
```

## Design implementation

This uses React, Vite, Lucide React icons, and custom CSS with **shadcn-inspired styling**. It does not claim to include the shadcn/ui or Radix component implementations. Native `<dialog>` supplies modal behavior. Assessment options accept basic Markdown (`**bold**`, `*italic*`, line breaks), not a full WYSIWYG editor. Replace with shadcn/ui and a dedicated rich-text editor if those libraries are required for production.

Google Fonts supplies Inter when available; the UI falls back to Arial. Images are optional local uploads. There are no private API keys or external user-data calls.

## Known limits and next work

See [docs/MVP-STATUS.md](docs/MVP-STATUS.md) for frontend scope, differences from the original requirements, and backend work. Do not enter real applicant/reference information. Local storage is unencrypted, per browser, and can be cleared by the browser. No server enforces authorization.

Calendars use October 2026 for design review; list view includes other saved dates. Some overview metrics and matching percentages are intentionally static sample values. Buttons and forms demonstrate local workflows; they do not send invitations or notifications.

## Deployment

Any static host can serve the Vite `dist/` output. Typical settings: build command `npm run build`, output directory `dist`. Relative asset paths are configured for subdirectory hosting. Query-string navigation avoids server rewrite requirements.

An included GitHub Actions workflow runs installation, tests, and the build on pushes and pull requests. It does not publish the app.
