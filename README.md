# Lancelot's Portfolio

A bilingual personal portfolio for Junjie "Lancelot" He, built around software development, cross-platform systems, computer graphics, and game-engine work.

**Live site:** [lancelotelimit.github.io](https://lancelotelimit.github.io)

The project combines a professional resume-style portfolio with a distinctive pixel-terminal visual identity. It is a fully static site hosted on GitHub Pages and does not require a backend or database.

## Highlights

- English and Chinese interface with a remembered language preference
- "Demon King" dark theme and "Priest" light theme
- Full-screen terminal-style welcome sequence
- Responsive fixed sidebar navigation
- Pixel-inspired headings, cards, controls, and visual accents
- Interactive 3D profile-image flip
- Professional experience, education, projects, competition results, and technical skills
- Markdown-powered Blog with individual article routes
- Image gallery with keyboard-accessible full-screen previews
- Floating back-to-top control
- Responsive layouts for desktop, tablet, and mobile
- Reduced-motion support for users who disable animations

Most animations and visual components are written with React and native CSS. The project does not use a UI framework or a third-party animation library.

## Technology

### Runtime

- [React 19](https://react.dev/) - component and interaction layer
- [React DOM](https://react.dev/reference/react-dom) - browser rendering
- [React Router](https://reactrouter.com/) - Home, Blog, and article routes
- [React Markdown](https://github.com/remarkjs/react-markdown) - Markdown article rendering

### Development

- [Vite 8](https://vite.dev/) - development server and production build
- [ESLint 9](https://eslint.org/) - source-code checks
- Native CSS - themes, pixel styling, responsive layouts, and animations
- GitHub Actions - automated GitHub Pages deployment

## Project Structure

```text
.
├── .github/workflows/deploy.yml   # GitHub Pages workflow
├── public/
│   └── images/                    # Header, profile, project, and gallery images
├── src/
│   ├── posts/                     # Markdown Blog articles
│   ├── App.jsx                    # Portfolio content, routes, translations, and interactions
│   ├── App.css                    # Themes, layouts, responsive rules, and animations
│   ├── Blog.jsx                   # Blog index and article rendering
│   └── main.jsx                   # React entry point and HashRouter
├── index.html                     # Metadata and browser icon
├── package.json                   # Scripts and dependencies
└── vite.config.js                 # Vite configuration
```

## Run Locally

Requirements:

- Node.js
- npm

Install the locked dependencies and start the development server:

```bash
npm install
npm run dev
```

Vite will print a local URL, normally:

```text
http://localhost:5173
```

## Available Commands

```bash
npm run dev      # Start the development server
npm run lint     # Check JavaScript and JSX
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build locally
```

Before publishing a change, run:

```bash
npm run lint
npm run build
```

## Editing Portfolio Content

The main portfolio content is currently stored in `src/App.jsx`. This includes:

- English and Chinese translations
- About text
- professional experience and education
- project cards and repository links
- competition highlights
- technical-stack entries
- contact information

Visual styling is stored in `src/App.css`, including:

- light and dark theme variables
- sidebar and responsive layouts
- welcome-screen sequence
- pixel typography and cards
- profile-image flip
- gallery modal
- mobile breakpoints

Static images belong in `public/images`. A file stored as:

```text
public/images/example.png
```

is referenced in the site as:

```text
/images/example.png
```

## Writing Blog Posts

The Blog uses repository-based Markdown files instead of a database. This keeps publishing free, gives every post Git history, and ensures every visitor sees the same content.

Blog index:

```text
/#/blog
```

Create a file such as `src/posts/my-new-post.md`:

```markdown
---
title: My Post Title
date: 2026-08-17
summary: A short description displayed on the Blog index.
---

Write the article here using Markdown.

## Section Heading

- Lists are supported.
- So are links, quotes, images, and code blocks.
```

The filename becomes the article slug:

```text
src/posts/my-new-post.md
→ /#/blog/my-new-post
```

Blog CRUD is handled through repository files:

- **Create:** add a new `.md` file
- **Read:** visit the Blog or article route
- **Update:** edit the corresponding `.md` file
- **Delete:** remove the corresponding `.md` file

Commit and push the change to publish it on every device.

## Routing

The site uses `HashRouter` so routes work reliably on GitHub Pages without server-side rewrite rules.

Examples:

```text
/#/                     Home
/#/blog                 Blog index
/#/blog/article-slug    Individual article
```

## Themes and Preferences

Theme and language selections are stored in the browser with `localStorage`.

- `theme`: light or dark
- `language`: English or Chinese

These settings affect only the visitor's browser and do not contain personal data.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`. The workflow:

1. checks out the repository;
2. installs dependencies with `npm ci`;
3. builds the Vite application;
4. uploads the generated `dist` directory;
5. deploys it to GitHub Pages.

Manual deployment is not required after a successful push.

## Accessibility

The project includes:

- semantic navigation labels
- keyboard-operable image previews and profile controls
- visible focus styles
- descriptive alternative text
- Escape-key modal closing
- reduced-motion behaviour
- theme-aware contrast

## License

This project is available under the terms in [LICENSE](LICENSE).
