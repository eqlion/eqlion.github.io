import React from 'react';
import type { FC } from 'react';

import { DateInfo, Text } from '@UIKit';
import { useTranslation } from 'react-i18next';

import dayjs from 'dayjs';

const Tabby: FC = () => {
    const { t } = useTranslation();
    return (
        <>
            <DateInfo
                place="Tabby"
                position="Senior Mobile dev"
                url="https://tabby.ai"
                dateStart={dayjs('12, 2022', 'MM, YYYY')}>
                <Text>{t('Experience.tabby.ios')}</Text>
            </DateInfo>
            <DateInfo
                position="Middle+ React Native dev"
                dateStart={dayjs('04, 2022', 'MM, YYYY')}
                dateEnd={dayjs('12, 2022', 'MM, YYYY')}>
                <Text>{t('Experience.tabby.reactNative')}</Text>
            </DateInfo>
        </>
    );
};

export { Tabby };
