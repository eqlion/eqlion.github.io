import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { View, StyleSheet } from 'react-native';
import { Title } from '@UIKit';
import { AboutText } from './AboutText';

const About: FC = () => {
    const { t } = useTranslation();
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Title>{t('About.title')}</Title>
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
});
