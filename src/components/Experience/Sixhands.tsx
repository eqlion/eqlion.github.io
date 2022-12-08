import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { parseUrl } from '../../util';
import { DateInfo, Text, BulletListItem } from '@UIKit';

const FEATURES = [
    {
        text: 'Experience.sixhands.bt',
        urls: ['https://github.com/Polidea/react-native-ble-plx'],
    },
    {
        text: 'Experience.sixhands.notifications',
        urls: [
            'https://github.com/invertase/notifee',
            'https://github.com/invertase/react-native-firebase',
        ],
    },
    {
        text: 'Experience.sixhands.firebase',
        urls: ['https://github.com/invertase/react-native-firebase'],
    },
    {
        text: 'Experience.sixhands.camera',
        urls: ['https://github.com/react-native-camera/react-native-camera'],
    },
    {
        text: 'Experience.sixhands.maps',
        urls: [
            'https://github.com/react-native-maps/react-native-maps',
            'https://github.com/volga-volga/react-native-yamap',
        ],
    },
    {
        text: 'Experience.sixhands.payments',
        urls: [
            'https://github.com/VertaZoom/react-native-cloudpayments.git#1.1.0',
            'https://github.com/lamantin-group/react-native-yandex-payment',
            'https://github.com/dooboolab/react-native-iap',
        ],
    },
    {
        text: 'Experience.sixhands.animations',
        urls: [
            'https://github.com/https://github.com/software-mansion/react-native-reanimated',
        ],
    },
];

const Sixhands: FC = () => {
    const { t } = useTranslation();
    return (
        <DateInfo
            place="Sixhands"
            url="https://sixhands.co/"
            position="Junior/Middle React Native dev"
            dateStart="07, 2020"
            dateEnd="07, 2021">
            <>
                <Text>{t('Experience.sixhands.text')}</Text>
                {FEATURES.map(({ text, urls }, index) => (
                    <BulletListItem key={index}>
                        <Text>
                            {t(text)} (
                            {urls.map((url, urlIndex) =>
                                parseUrl(
                                    url,
                                    urlIndex,
                                    urls.length - 1 === urlIndex,
                                ),
                            )}
                            )
                        </Text>
                    </BulletListItem>
                ))}
            </>
        </DateInfo>
    );
};

export { Sixhands };
