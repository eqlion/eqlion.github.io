import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { BulletListItem, DateInfo, Text } from '@UIKit';
import dayjs from 'dayjs';

const Sixhands: FC = () => {
    const { t } = useTranslation();
    const bullets = t('Experience.sixhands', {
        returnObjects: true,
    }) as string[];
    return (
        <DateInfo
            place="SixHands"
            url="https://sixhands.co/"
            position="Junior Mobile Engineer"
            dateStart={dayjs('07, 2020', 'MM, YYYY')}
            dateEnd={dayjs('07, 2021', 'MM, YYYY')}>
            {bullets.map((item, i) => (
                <BulletListItem key={i}>
                    <Text>{item}</Text>
                </BulletListItem>
            ))}
        </DateInfo>
    );
};

export { Sixhands };
