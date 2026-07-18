import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
    site: 'https://eqlion.github.io',
    output: 'static',
    integrations: [mdx()],
    markdown: {
        shikiConfig: {
            theme: 'github-dark',
        },
    },
});
