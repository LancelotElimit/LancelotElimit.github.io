# Lancelot's Portfolio

A single-page personal portfolio built with React and Vite. It includes an introduction, project highlights, a photo gallery, and contact details.

## Run locally

Install the dependencies and start the development server:

```bash
npm install
npm run dev
```

Vite will print the local preview address, usually `http://localhost:5173`.

## Edit the site

- Page content and gallery entries: `src/App.jsx`
- Layout, colours, and responsive styles: `src/App.css`
- Images: `public/images`
- Browser title and description: `index.html`

## Blog

The Blog page uses React Router and is available at `#/blog`. Posts are Markdown files in `src/posts`, so every visitor sees the same published content without a database.

Create a post by adding a file such as `src/posts/my-post.md`:

```markdown
---
title: My Post Title
date: 2026-08-17
summary: A short description shown on the Blog page.
---

Write the article here using Markdown.
```

- Create: add a new `.md` file.
- Read: open the Blog page or an individual article route.
- Update: edit the corresponding `.md` file.
- Delete: remove the corresponding `.md` file.

Commit and push the change to `main` to publish it on every device.

Files placed in `public` are available from the site root. For example, `public/images/photo.jpg` is referenced as `/images/photo.jpg`.

## Check a change

```bash
npm run lint
npm run build
npm run preview
```

## Publish

Pushing to the `main` branch triggers the GitHub Actions workflow in `.github/workflows/deploy.yml`. The workflow builds the site and publishes the generated `dist` directory to GitHub Pages.
