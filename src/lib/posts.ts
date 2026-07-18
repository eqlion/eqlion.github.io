import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

export const getPublishedPosts = async (): Promise<BlogPost[]> => {
    const posts = await getCollection('blog', ({ data }) => !data.draft);
    return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
};

export const formatPostDate = (date: Date): string =>
    date.toISOString().slice(0, 10);
