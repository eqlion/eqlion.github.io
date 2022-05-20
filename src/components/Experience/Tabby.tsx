import React, { useContext } from "react";
import type { FC } from "react";
import { LanguageContext } from "../../util/language";

import DateInfo from "../DateInfo";
import Text from "../Text";

const ABSTRACT = {
    ru: "Участвую в разработке пользовательского приложения: обсуждаю, делаю и выкатываю новые фичи, чиню баги, участвую в код-ревью, пишу тесты.",
    en: "Taking part in the development of the customer app: discuss, build and deploy the new features, squash bugs, partake in code review, write tests.",
};

const Tabby: FC = () => {
    const { language } = useContext(LanguageContext);
    return (
        <DateInfo
            place="Tabby"
            position="Middle+ React Native dev"
            url="https://tabby.ai"
            dateStart="04, 2022">
            <Text>{ABSTRACT[language]}</Text>
        </DateInfo>
    );
};

export default Tabby;
