# AGENTS.md

## Project Overview

This is Nikolay Lapa's personal website, hosted at `https://eqlion.github.io` via GitHub Pages.

The site is an Expo / React Native for Web app written in TypeScript. It renders a terminal-like CV/resume page and is currently being expanded with a static blog section. The blog work is in progress and uses Expo Router plus MDX so posts can be authored as Markdown/MDX while still using the existing React Native UI primitives.

## Stack

- Expo with React Native for Web
- React 19 and React Native 0.83
- TypeScript with `strict` enabled
- Expo Router for file-based routes
- `@bacons/mdx` for MDX posts
- PrismJS for code highlighting in blog code blocks
- Jest with `jest-expo`
- GitHub Pages deployment through `gh-pages`

## Important Paths

- `app/_layout.tsx` - root Expo Router layout, font loading, global route styling.
- `app/index.tsx` - main personal/CV page.
- `app/blog/index.tsx` - blog post listing.
- `app/blog/[slug].tsx` - individual blog post route.
- `src/components/` - CV sections such as About, Contacts, Experience, Education, Buzzwords.
- `src/UIKit/` - shared visual primitives (`Screen`, `Text`, `Title`, `Link`, etc.).
- `src/blog/posts.ts` - typed blog post registry and sorting helpers.
- `src/blog/mdxComponents.tsx` - Markdown/MDX element mapping to themed React Native components.
- `src/blog/CodeBlock.tsx` - Prism-backed fenced code block rendering.
- `content/posts/` - MDX posts that are currently wired into the blog.
- `posts/` - older or source markdown/image post material; this is not currently registered in `src/blog/posts.ts`.
- `src/util/colors.ts` - shared color palette.
- `plan.md` - implementation plan for the blog migration.

## Development Commands

Use Yarn; the lockfile is `yarn.lock`.

```bash
yarn
yarn start
yarn web
yarn typescript
yarn lint
yarn test
yarn deploy
```

Deployment is:

```bash
expo export -p web
gh-pages -t -d dist
```

The package scripts wrap this as `yarn deploy`, with `predeploy` generating `dist`.

## Routing And Static Export

`package.json` uses `expo-router/entry` as the main entry point. `app.json` configures:

- `web.output: "static"`
- `web.bundler: "metro"`
- `plugins: ["expo-font", "expo-router"]`

For dynamic blog routes, keep `generateStaticParams()` in `app/blog/[slug].tsx` in sync with the post registry. Static export depends on that list to emit HTML for each post.

## Blog Content Model

Blog metadata currently lives in TypeScript, not frontmatter. To add a post:

1. Add an `.mdx` file under `content/posts/`.
2. Import it in `src/blog/posts.ts`.
3. Add a `Post` entry with `slug`, `title`, `date`, optional `description`, and `Component`.

Dates are ISO strings (`YYYY-MM-DD`) and are used by `sortedPosts()` for newest-first ordering.

## MDX Notes

Metro is configured manually for `.md` and `.mdx` in `metro.config.js`. Do not replace it with `@bacons/mdx`'s `withMdx` helper without retesting: the current local `mdx-transformer.js` exists because the helper self-resolved a non-exported package subpath under the current Node/Expo setup.

`src/blog/mdxComponents.tsx` maps Markdown elements to the site's existing React Native UI and filters whitespace-only string children before rendering `View` containers. This matters because React Native does not allow raw text directly inside `View`.

## Style Conventions

- Prefer existing UIKit primitives over raw React Native components for site text/layout.
- Use `COLORS` from `src/util/colors.ts`; avoid introducing one-off palette values unless the component already does so for syntax highlighting or code backgrounds.
- The visual identity is compact, terminal-like, dark, and Fira Code based.
- Keep the blog visually consistent with the CV page.
- Use the path aliases configured in `tsconfig.json` and `babel.config.js`:
  - `@UIKit` -> `./src/UIKit`
  - `@hooks` -> `./src/hooks`

## Current Worktree Context

The blog migration is not fully committed. At the time this file was created, the worktree included uncommitted changes that remove the old `App.tsx` entry and add the `app/`, `content/`, `src/blog/`, MDX transformer, and Metro config files. Treat these as user work in progress and do not revert them unless explicitly asked.

There is also a generated `dist/` folder present locally. Avoid editing generated output by hand.
