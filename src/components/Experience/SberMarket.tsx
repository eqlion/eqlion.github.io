import React from 'react';
import type { FC } from 'react';

import { DateInfo, Text } from '@UIKit';
import { useTranslation } from 'react-i18next';

const SberMarket: FC = () => {
    const { t } = useTranslation();
    return (
        <DateInfo
            place="SberMarket"
            url="https://sbermarket.ru/"
            position="Middle React Native dev"
            dateEnd="04, 2022"
            dateStart="07, 2021">
            <Text>{t('Experience.sbermarket')}</Text>
        </DateInfo>
    );
};

export { SberMarket };
