import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPublishedPosts } from '../lib/posts';

export async function GET(context: APIContext) {
    const posts = await getPublishedPosts();

    return rss({
        title: "Nikolay Lapa's blog",
        description: 'Writing about engineering, agents, and product systems.',
        site: context.site!,
        customData: '<language>en-us</language>',
        items: posts.map((post) => ({
            title: post.data.title,
            description: post.data.description,
            pubDate: post.data.date,
            link: `/blog/${post.id}/`,
        })),
    });
}
