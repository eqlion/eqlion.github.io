import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { DateInfo, Text } from '@UIKit';
import dayjs from 'dayjs';

const Sixhands: FC = () => {
    const { t } = useTranslation();
    return (
        <DateInfo
            place="Sixhands"
            url="https://sixhands.co/"
            position="Junior/Middle React Native dev"
            dateStart={dayjs('07, 2020', 'MM, YYYY')}
            dateEnd={dayjs('07, 2021', 'MM, YYYY')}>
            <Text>{t('Experience.sixhands.text')}</Text>
        </DateInfo>
    );
};

export { Sixhands };
