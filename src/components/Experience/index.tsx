import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { View, StyleSheet } from 'react-native';

import { Title } from '@UIKit';
import { ExperienceText } from './ExperienceText';

const Experience: FC = () => {
    const { t } = useTranslation();
    return (
        <View style={styles.container}>
            <Title>{t('Experience.title')}</Title>
            <ExperienceText />
        </View>
    );
};

export { Experience };

const styles = StyleSheet.create({
    container: {
        marginBottom: 32,
    },
});
