import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import DateInfo from '../DateInfo';
import Link from '../Link';
import Text from '../Text';

const Itmo: FC = () => {
    const { t } = useTranslation();
    return (
        <DateInfo
            dateStart="2017"
            dateEnd="2021"
            position={t('Education.itmo.position')}
            place={t('Education.itmo.place')}
            stack={t('Education.itmo.stack')}>
            <Text>
                <Link url="https://github.com/eqlion/bachelor-diploma">
                    {t('Education.itmo.link')}
                </Link>
                {t('Education.itmo.thesis')}
            </Text>
        </DateInfo>
    );
};

export default Itmo;
