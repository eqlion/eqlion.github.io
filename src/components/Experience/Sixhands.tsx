import React, { FC, useContext } from "react";

import DateInfo from "../DateInfo";
import Text from "../Text";
import BulletListItem from "../BulletListItem";

import { LanguageContext } from "../../util/language";
import { parseUrl } from "../../util";

const ABSTRACT = {
    ru: "Занимался полным циклом разработки приложения: вёрстка, бизнес-логика, сборка и подпись, отправка на тестирование (TestFlight), загрузка в магазины (AppStore, Google Play Store). Некоторые из вещей, с которыми я работал:",
    en: "I've done the whole development cycle: layout, business-logic, building and signing, sending to tests (TestFlight), uploading to the store (AppStore, Google Play Store). Some of the things I've worked with:",
};

const FEATURES = {
    ru: [
        {
            text: "BlueTooth LE — подключение к аксессуарам по BT, чтение, запись, подписка на нотификации",
            urls: ["https://github.com/Polidea/react-native-ble-plx"],
        },
        {
            text: "Локальные и удалённые пуш уведомления — Firebase Cloud Messaging",
            urls: [
                "https://github.com/invertase/notifee",
                "https://github.com/invertase/react-native-firebase",
            ],
        },
        {
            text: "Проектирование и использование Firebase Cloud Firestore, Cloud Storage, Dynamic Links для приложений без бэкенда",
            urls: ["https://github.com/invertase/react-native-firebase"],
        },
        {
            text: "Распознавание лица, 2D маски",
            urls: [
                "https://github.com/react-native-camera/react-native-camera",
            ],
        },
        {
            text: "Карты (Google, Yandex), кластеризация, создание и редактирование маркеров, полигонов, ломаных",
            urls: [
                "https://github.com/react-native-maps/react-native-maps",
                "https://github.com/volga-volga/react-native-yamap",
            ],
        },
        {
            text: "Проведение платежей через CloudPayments, YooKassa; IAP",
            urls: [
                "https://github.com/VertaZoom/react-native-cloudpayments.git#1.1.0",
                "https://github.com/lamantin-group/react-native-yandex-payment",
                "https://github.com/dooboolab/react-native-iap",
            ],
        },
        {
            text: "Производительные (60+ FPS) анимации элементов",
            urls: [
                "https://github.com/https://github.com/software-mansion/react-native-reanimated",
            ],
        },
    ],
    en: [
        {
            text: "BlueTooth LE — connecting to accessories via BT, read, write, subscribe to notifications",
            urls: ["https://github.com/Polidea/react-native-ble-plx"],
        },
        {
            text: "Local and remote push notifications — Firebase Cloud Messaging",
            urls: [
                "https://github.com/invertase/notifee",
                "https://github.com/invertase/react-native-firebase",
            ],
        },
        {
            text: "Designing and using Firebase Cloud Firestore, Cloud Storage, Dynamic Links for the apps without backend",
            urls: ["https://github.com/invertase/react-native-firebase"],
        },
        {
            text: "Face recognition, 2D face effects",
            urls: [
                "https://github.com/react-native-camera/react-native-camera",
            ],
        },
        {
            text: "Maps (Google, Yandex), clustering, creating and editing markers, polygons and lines",
            urls: [
                "https://github.com/react-native-maps/react-native-maps",
                "https://github.com/volga-volga/react-native-yamap",
            ],
        },
        {
            text: "Accepting payments via CloudPayments, YooKassa; IAP",
            urls: [
                "https://github.com/VertaZoom/react-native-cloudpayments.git#1.1.0",
                "https://github.com/lamantin-group/react-native-yandex-payment",
                "https://github.com/dooboolab/react-native-iap",
            ],
        },
        {
            text: "Smooth (60+ FPS) element animations",
            urls: [
                "https://github.com/https://github.com/software-mansion/react-native-reanimated",
            ],
        },
    ],
};

const Sixhands: FC = () => {
    const { language } = useContext(LanguageContext);
    return (
        <DateInfo
            place="Sixhands"
            url="https://sixhands.co/"
            position="Junior/Middle React Native dev"
            dateStart="07, 2020"
            dateEnd="07, 2021">
            <>
                <Text>{ABSTRACT[language]}</Text>
                {FEATURES[language].map(({ text, urls }, index) => (
                    <BulletListItem key={index}>
                        <Text>
                            {text} (
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

export default Sixhands;
