import type { FC } from 'react';

import { BulletListItem, DateInfo, Text } from '@UIKit';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';

const SberMarket: FC = () => {
    const { t } = useTranslation();
    const bullets = t('Experience.sbermarket', {
        returnObjects: true,
    }) as string[];
    return (
        <DateInfo
            place="SberMarket"
            url="https://sbermarket.ru/"
            position="Mobile Engineer"
            dateEnd={dayjs('04, 2022', 'MM, YYYY')}
            dateStart={dayjs('07, 2021', 'MM, YYYY')}>
            {bullets.map((item, i) => (
                <BulletListItem key={i}>
                    <Text>{item}</Text>
                </BulletListItem>
            ))}
        </DateInfo>
    );
};

export { SberMarket };
