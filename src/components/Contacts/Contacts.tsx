import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { View, StyleSheet } from 'react-native';
import { Title } from '@UIKit';
import { ContactsText } from './ContactsText';

const Contacts: FC = () => {
    const { t } = useTranslation();
    return (
        <View style={styles.container}>
            <Title>{t('Contacts.title')}</Title>
            <ContactsText />
        </View>
    );
};

export { Contacts };

const styles = StyleSheet.create({
    container: {
        marginBottom: 32,
    },
});
