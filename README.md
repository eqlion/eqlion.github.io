# Personal website

Nikolay Lapa's personal website and blog, built with Astro and deployed to
[GitHub Pages](https://eqlion.github.io).

The site is statically generated and ships no client-side JavaScript.

## Development

```bash
yarn
yarn dev
```

Astro serves the local site at `http://localhost:4321`.

## Verification

```bash
yarn run check
yarn build
```

The production site is generated in `dist/`. Pushes to `main` are deployed by
the GitHub Pages workflow.

## Adding a blog post

Add an `.md` or `.mdx` file under `src/content/blog/` with `title`, `date`, and
optional `description` metadata. The blog index, homepage preview, and static
post route are generated automatically.
