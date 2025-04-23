import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { DateInfo, Link, Text } from '@UIKit';
import dayjs from 'dayjs';

const Itmo: FC = () => {
    const { t } = useTranslation();
    return (
        <DateInfo
            dateStart={dayjs('09, 2017', 'MM, YYYY')}
            dateEnd={dayjs('07, 2021', 'MM, YYYY')}
            position={t('Education.itmo.position')}
            place={t('Education.itmo.place')}
            stack={t('Education.itmo.stack')}>
            <Text>{t('Education.itmo.gpa')}</Text>
            <Text>
                <Link url="https://github.com/eqlion/bachelor-diploma">
                    {t('Education.itmo.link')}
                </Link>
                {t('Education.itmo.thesis')}
            </Text>
        </DateInfo>
    );
};

export { Itmo };
