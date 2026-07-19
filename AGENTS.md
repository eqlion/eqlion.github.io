# AGENTS.md

## Project Overview

This is Nikolay Lapa's personal website, hosted at `https://eqlion.github.io`
through GitHub Pages. It is an Astro static site containing a terminal-like CV
and an MDX blog. The production build intentionally ships no client-side
JavaScript.

## Stack

- Astro with static output
- TypeScript with strict checking
- Astro content collections
- `@astrojs/mdx` for blog posts
- Build-time Shiki syntax highlighting
- Local Fira Code fonts
- GitHub Pages deployment through GitHub Actions

## Important Paths

- `src/pages/index.astro` - main CV page.
- `src/pages/blog/index.astro` - blog listing.
- `src/pages/blog/[slug].astro` - statically generated post route.
- `src/layouts/BaseLayout.astro` - document shell and global metadata.
- `src/components/` - shared static UI components.
- `src/content/blog/` - Markdown and MDX posts.
- `src/content.config.ts` - typed blog collection schema.
- `src/data/resume.ts` - CV content and links.
- `src/styles/global.css` - terminal theme and responsive layout.
- `src/assets/social-card.svg` - editable source for the social preview card.
- `public/social-card.png` - generated 1200 x 630 social preview image.
- `public/fonts/` - regular and bold Fira Code assets.

## Development Commands

Use Yarn; the lockfile is `yarn.lock`.

```bash
yarn
yarn dev
yarn run check
yarn build
yarn preview
```

`yarn build` runs Astro diagnostics and emits the production site to `dist/`.

## Routing And Static Export

Astro's default static generation emits HTML for `/`, `/blog`, and every
published blog collection entry under `/blog/<slug>`. Keep public URLs stable;
GitHub Pages serves the generated directory routes directly.

Do not add client hydration directives unless a feature genuinely requires
browser-side state. Ordinary links, CV content, MDX rendering, images, date
formatting, and syntax highlighting should remain build-time concerns.

## Blog Content Model

To add a post:

1. Add an `.md` or `.mdx` file under `src/content/blog/`.
2. Include `title`, `date`, optional `description`, and optional `draft`
   frontmatter matching `src/content.config.ts`.
3. Use `BlogImage` for custom image widths in MDX.

Published posts are discovered, sorted newest-first, listed on `/blog`, and
included in the latest-five homepage preview automatically.

## Social Card

Treat `src/assets/social-card.svg` as the source of truth. Keep it aligned with
the Horizon colors in `src/styles/global.css`, then regenerate the PNG consumed
by the site rather than editing `public/social-card.png` directly:

```bash
node --input-type=module -e "import sharp from 'sharp'; await sharp('src/assets/social-card.svg').png().toFile('public/social-card.png');"
```

Keep the exported PNG at exactly 1200 x 630 pixels and commit the SVG and PNG
together. When the displayed name, role, or positioning changes, update both the
card copy and its matching metadata in `src/layouts/BaseLayout.astro`.

## Style Conventions

- Use semantic HTML and Astro components rather than a client UI framework.
- Reuse the CSS custom properties in `src/styles/global.css`.
- Keep the compact, dark, terminal-like Fira Code visual identity.
- Responsive behavior must be expressed in CSS so initial HTML and final layout
  match without hydration.
- Preserve post prose unless the user explicitly asks for editorial changes.
- Do not edit generated `dist/` output by hand.
