import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { View, StyleSheet } from 'react-native';
import { Link } from '@UIKit';

const LINKS = [
    { url: 'https://t.me/eqlion', text: 'Contacts.telegram' },
    { url: 'mailto:lapanicholas@gmail.com', text: 'Contacts.email' },
    {
        url: 'https://www.linkedin.com/in/nikolay-lapa-6a8607220/',
        text: 'Contacts.linkedin',
    },
    { url: 'https://github.com/eqlion/', text: 'Contacts.github' },
    {
        url: 'https://drive.google.com/file/d/1JQFFhIhyrkdDLvuk4x0rLBspQDPTeI3x/view?usp=sharing',
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

export { ContactsText };

const styles = StyleSheet.create({
    container: {
        flexBasis: 0.25,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
});
