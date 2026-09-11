# Khae Mostajo Engineering Portfolio

A static GitHub Pages portfolio built with plain HTML, CSS and JavaScript.

## Structure

- `index.html` — Home
- `work.html` — Engineering domains
- `projects.html` — Searchable project archive
- `domain.html?slug=...` — Dynamic domain page
- `project.html?slug=...` — Dynamic project page
- `about.html` — Professional background
- `cv.html` — CV landing page
- `assets/js/content.js` — All domains and project content
- `assets/css/styles.css` — Complete design system
- `assets/images/hero-lab.png` — Hero image

## Deploy on GitHub Pages

1. Create a repository, e.g. `portfolio`.
2. Upload all files and folders from this package to the repository root.
3. Commit and push.
4. In GitHub: **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Choose `main` and `/ (root)`.
7. Save.

If you use the special repository `<username>.github.io`, the site will be available at the root GitHub Pages domain.

## Editing content

Open:

`assets/js/content.js`

Every engineering domain is inside `domains`, and every project is inside `projects`.

Add real project media later by placing files inside:

`assets/images/`

Then replace the placeholder `<div class="project-media">` logic with image markup, or add an `image:` property to each project object and render it from `site.js`.

## Before publishing publicly

- Replace `your-email@example.com`.
- Add LinkedIn / GitHub links.
- Add the final CV PDF.
- Replace placeholder project media with your real photos and diagrams.
- Review wording for projects that are still under development.
