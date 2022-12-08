import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { View, StyleSheet } from 'react-native';
import Title from '../Title';
import EducationText from './EducationText';

const Education: FC = () => {
    const { t } = useTranslation();
    return (
        <View style={styles.container}>
            <Title>{t('Education.title')}</Title>
            <EducationText />
        </View>
    );
};

export default Education;

const styles = StyleSheet.create({
    container: {
        marginBottom: 32,
    },
});
