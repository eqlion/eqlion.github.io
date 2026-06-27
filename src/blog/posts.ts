import type { ComponentType } from 'react';

import Expeditions from '../../content/posts/expeditions.mdx';

export type Post = {
    /** URL segment: /blog/<slug> */
    slug: string;
    /** Shown in the list and the <title> tag. */
    title: string;
    /** ISO date (YYYY-MM-DD), used for sorting and display. */
    date: string;
    /** Optional one-line summary for the index. */
    description?: string;
    /** The MDX body, imported as a React component. */
    Component: ComponentType;
};

// Register each post here. Metadata lives in code (type-safe, no frontmatter
// parsing); the prose lives in the matching .mdx file under content/posts/.
export const posts: Post[] = [
    {
        slug: 'expeditions',
        title: 'Expeditions',
        date: '2026-06-27',
        description:
            'A framework for letting agents explore an app, build product knowledge, and use it as a QA quality gate.',
        Component: Expeditions,
    },
];

export const getPost = (slug: string): Post | undefined =>
    posts.find((post) => post.slug === slug);

export const sortedPosts = (): Post[] =>
    [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
