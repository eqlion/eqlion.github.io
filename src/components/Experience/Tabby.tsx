import React from 'react';
import type { FC } from 'react';

import DateInfo from '../DateInfo';
import Text from '../Text';
import { useTranslation } from 'react-i18next';

const Tabby: FC = () => {
    const { t } = useTranslation();
    return (
        <DateInfo
            place="Tabby"
            position="Middle+ React Native dev"
            url="https://tabby.ai"
            dateStart="04, 2022">
            <Text>{t('Experience.tabby')}</Text>
        </DateInfo>
    );
};

export default Tabby;
