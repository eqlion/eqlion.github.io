import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '@UIKit';

const calcAge = () =>
    new Date(
        new Date().getTime() - new Date('1999-08-05').getTime(),
    ).getFullYear() - 1970;

const AboutText: FC = () => {
    const { t } = useTranslation();
    return <Text>{t('About.text', { age: calcAge() })}</Text>;
};

export { AboutText };
