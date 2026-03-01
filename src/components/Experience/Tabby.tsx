import type { FC } from 'react';

import { BulletListItem, DateInfo, Text } from '@UIKit';
import { useTranslation } from 'react-i18next';

import dayjs from 'dayjs';

const Tabby: FC = () => {
    const { t } = useTranslation();
    const staff = t('Experience.tabby.staff', {
        returnObjects: true,
    }) as string[];
    const senior = t('Experience.tabby.senior', {
        returnObjects: true,
    }) as string[];
    const rn = t('Experience.tabby.reactNative', {
        returnObjects: true,
    }) as string[];
    return (
        <>
            <DateInfo
                place="Tabby"
                position="Staff Software Engineer"
                url="https://tabby.ai"
                dateStart={dayjs('08, 2025', 'MM, YYYY')}>
                {staff.map((item, i) => (
                    <BulletListItem key={i}>
                        <Text>{item}</Text>
                    </BulletListItem>
                ))}
            </DateInfo>
            <DateInfo
                position="Senior Mobile Developer"
                dateStart={dayjs('12, 2022', 'MM, YYYY')}
                dateEnd={dayjs('08, 2025', 'MM, YYYY')}>
                {senior.map((item, i) => (
                    <BulletListItem key={i}>
                        <Text>{item}</Text>
                    </BulletListItem>
                ))}
            </DateInfo>
            <DateInfo
                position="React Native Developer"
                dateStart={dayjs('04, 2022', 'MM, YYYY')}
                dateEnd={dayjs('12, 2022', 'MM, YYYY')}>
                {rn.map((item, i) => (
                    <BulletListItem key={i}>
                        <Text>{item}</Text>
                    </BulletListItem>
                ))}
            </DateInfo>
        </>
    );
};

export { Tabby };
