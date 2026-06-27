import Head from 'expo-router/head';
import { Link } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { Screen, Text, Title } from '@UIKit';
import { COLORS } from '../../src/util/colors';
import { sortedPosts } from '../../src/blog/posts';

export default function BlogIndex() {
    const posts = sortedPosts();

    return (
        <>
            <Head>
                <title>Blog — Nikolay Lapa</title>
                <meta name="theme-color" content={COLORS.background} />
            </Head>
            <Screen>
                <Link href="/" asChild>
                    <Pressable>
                        <Text style={styles.back}>~ / home</Text>
                    </Pressable>
                </Link>
                <View style={styles.titleContainer}>
                    <Title>Blog</Title>
                </View>
                {posts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} asChild>
                        <Pressable style={styles.item}>
                            <Text type="bold" style={styles.itemTitle}>
                                {post.title}
                            </Text>
                            <Text style={styles.itemDate}>{post.date}</Text>
                            {post.description ? (
                                <Text style={styles.itemDescription}>
                                    {post.description}
                                </Text>
                            ) : null}
                        </Pressable>
                    </Link>
                ))}
            </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    back: {
        color: COLORS.dim,
        marginBottom: 24,
    },
    titleContainer: {
        marginBottom: 24,
    },
    item: {
        marginBottom: 24,
    },
    itemTitle: {
        color: COLORS.link,
        marginBottom: 4,
    },
    itemDate: {
        color: COLORS.dim,
    },
    itemDescription: {
        marginTop: 4,
    },
});
