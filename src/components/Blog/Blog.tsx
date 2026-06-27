import { FC } from 'react';
import { Link } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { Text, Title } from '@UIKit';
import { sortedPosts } from '../../blog/posts';
import { COLORS } from '../../util/colors';

const Blog: FC = () => {
    const posts = sortedPosts().slice(0, 5);

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Title>Blog</Title>
                <Link href="/blog" asChild>
                    <Pressable>
                        <Text style={styles.allPosts}>all posts →</Text>
                    </Pressable>
                </Link>
            </View>
            {posts.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`} asChild>
                    <Pressable style={styles.post}>
                        <Text type="bold" style={styles.postTitle}>
                            {post.title}
                        </Text>
                        <Text style={styles.postDate}>{post.date}</Text>
                        {post.description ? (
                            <Text style={styles.description}>
                                {post.description}
                            </Text>
                        ) : null}
                    </Pressable>
                </Link>
            ))}
        </View>
    );
};

export { Blog };

const styles = StyleSheet.create({
    container: {
        marginBottom: 32,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    allPosts: {
        color: COLORS.link,
    },
    post: {
        marginTop: 12,
    },
    postTitle: {
        color: COLORS.link,
    },
    postDate: {
        color: COLORS.dim,
        marginTop: 2,
    },
    description: {
        marginTop: 4,
    },
});
