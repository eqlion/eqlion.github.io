import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { View, StyleSheet } from 'react-native';
import Link from '../Link';

const LINKS = [
    { url: 'https://t.me/eqlion', text: 'Contacts.telegram' },
    { url: 'mailto:lapanicholas@gmail.com', text: 'Email' },
    {
        url: 'https://www.linkedin.com/in/nikolay-lapa-6a8607220/',
        text: 'Contacts.linkedin',
    },
    { url: 'https://github.com/eqlion/', text: 'Contacts.github' },
    {
        url: 'https://docs.google.com/document/d/14qcVP1YD6FxWoJvDaR-wYFrcWw29k0doIaFmgudtprk/edit?usp=sharing',
        text: 'Contacts.resume',
    },
];

const ContactsText: FC = () => {
    const { t } = useTranslation();
    return (
        <View style={styles.container}>
            {LINKS.map(({ url, text }, index) => (
                <Link url={url} key={index}>
                    {t(text)}
                </Link>
            ))}
        </View>
    );
};

export default ContactsText;

const styles = StyleSheet.create({
    container: {
        flexBasis: 0.25,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
});
