import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '@UIKit';

const AboutText: FC = () => {
    const { t } = useTranslation();
    return <Text>{t('About.text')}</Text>;
};

export { AboutText };
