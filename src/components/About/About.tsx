import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'expo-router';
import { View, StyleSheet, Pressable } from 'react-native';
import { Title, Text } from '@UIKit';
import { AboutText } from './AboutText';
import { COLORS } from '../../util/colors';

const About: FC = () => {
    const { t } = useTranslation();
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Title>{t('About.title')}</Title>
                <Link href="/blog" asChild>
                    <Pressable>
                        <Text style={styles.blogLink}>blog →</Text>
                    </Pressable>
                </Link>
            </View>
            <AboutText />
        </View>
    );
};

export { About };

const styles = StyleSheet.create({
    container: {
        marginBottom: 32,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    blogLink: {
        color: COLORS.link,
    },
});
