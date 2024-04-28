import type { FC } from 'react';

import { DateInfo, Text } from '@UIKit';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';

const SberMarket: FC = () => {
    const { t } = useTranslation();
    return (
        <DateInfo
            place="SberMarket"
            url="https://sbermarket.ru/"
            position="Middle React Native dev"
            dateEnd={dayjs('04, 2022', 'MM, YYYY')}
            dateStart={dayjs('07, 2021', 'MM, YYYY')}>
            <Text>{t('Experience.sbermarket')}</Text>
        </DateInfo>
    );
};

export { SberMarket };
