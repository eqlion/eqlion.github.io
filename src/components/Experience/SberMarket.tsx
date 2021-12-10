import React, { useContext } from "react";
import type { FC } from "react";
import { LanguageContext } from "../../util/language";

import DateInfo from "../DateInfo";
import Text from "../Text";

const ABSTRACT = {
    ru: "Участвую в разработке мобильного Android приложения: новые фичи, фиксинг багов; код-ревью с командой; участвую в принятии решений о разработке.",
    en: "Taking part in the development of the Android app: new features, bug-fixing; code-review with the team; taking part in making the decisions regarding development.",
};

const SberMarket: FC = () => {
    const { language } = useContext(LanguageContext);
    return (
        <DateInfo
            place="SberMarket"
            position="Middle React Native dev"
            dateStart="07, 2021">
            <Text>{ABSTRACT[language]}</Text>
        </DateInfo>
    );
};

export default SberMarket;
