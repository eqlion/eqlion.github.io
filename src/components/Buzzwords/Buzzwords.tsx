import { BulletListItem, Text, Title } from '@UIKit';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';

const buzzwords = [
    {
        title: 'Buzzwords.programmingLanguages.title',
        text: 'Buzzwords.programmingLanguages.text',
    },
    {
        title: 'Buzzwords.tools.title',
        text: 'Buzzwords.tools.text',
    },
    {
        title: 'Buzzwords.frameworks.title',
        text: 'Buzzwords.frameworks.text',
    },
    {
        title: 'Buzzwords.concepts.title',
        text: 'Buzzwords.concepts.text',
    },
    {
        title: 'Buzzwords.languages.title',
        text: 'Buzzwords.languages.text',
    },
];

export const Buzzwords: FC = () => {
    const { t } = useTranslation();

    return (
        <View style={styles.container}>
            <Title>{t('Buzzwords.title')}</Title>
            {buzzwords.map(({ title, text }, index) => (
                <BulletListItem key={index}>
                    <Text type="bold">
                        {t(title)} :: <Text>{t(text)}</Text>
                    </Text>
                </BulletListItem>
            ))}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        marginBottom: 32,
    },
});
