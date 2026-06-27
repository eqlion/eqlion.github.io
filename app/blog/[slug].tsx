import Head from 'expo-router/head';
import { Link, useLocalSearchParams } from 'expo-router';
import { Pressable, StyleSheet } from 'react-native';
import { MDXComponents } from '@bacons/mdx';

import { Screen, Text } from '@UIKit';
import { COLORS } from '../../src/util/colors';
import { getPost, posts } from '../../src/blog/posts';
import { mdxComponents } from '../../src/blog/mdxComponents';

// Enumerate every post so each gets its own static HTML file at export time.
export function generateStaticParams(): Array<{ slug: string }> {
    return posts.map((post) => ({ slug: post.slug }));
}

export default function PostScreen() {
    const { slug } = useLocalSearchParams<{ slug: string }>();
    const post = getPost(slug);
    const Body = post?.Component;

    return (
        <>
            <Head>
                <title>
                    {post ? `${post.title} — Nikolay Lapa` : 'Not found'}
                </title>
                <meta name="theme-color" content={COLORS.background} />
            </Head>
            <Screen>
                <Link href="/blog" asChild>
                    <Pressable>
                        <Text style={styles.back}>~ / blog</Text>
                    </Pressable>
                </Link>
                {post && Body ? (
                    <>
                        <Text style={styles.date}>{post.date}</Text>
                        <MDXComponents components={mdxComponents}>
                            <Body />
                        </MDXComponents>
                    </>
                ) : (
                    <Text style={styles.notFound}>Post not found.</Text>
                )}
            </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    back: {
        color: COLORS.dim,
        marginBottom: 24,
    },
    date: {
        color: COLORS.dim,
        marginBottom: 8,
    },
    notFound: {
        color: COLORS.dim,
    },
});
