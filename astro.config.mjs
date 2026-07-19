import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import sitemap from '@astrojs/sitemap';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

const headingLinkPlugin = [
    rehypeAutolinkHeadings,
    {
        behavior: 'wrap',
        properties: { className: ['heading-link'] },
        test: ['h2', 'h3'],
    },
];

export default defineConfig({
    site: 'https://eqlion.github.io',
    output: 'static',
    integrations: [mdx(), sitemap()],
    markdown: {
        processor: unified({
            rehypePlugins: [rehypeSlug, headingLinkPlugin],
        }),
        shikiConfig: {
            theme: 'horizon',
        },
    },
});
