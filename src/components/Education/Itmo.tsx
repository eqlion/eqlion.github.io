import React, { FC, useContext } from "react";

import DateInfo from "../DateInfo";
import Link from "../Link";
import Text from "../Text";

import { LanguageContext } from "../../util/language";

const EDUCATION = {
    ru: {
        dateEnd: "2021",
        dateStart: "2017",
        position: "Бакалавр",
        place: "Университет ИТМО",
        stack: "Лазеры в инфо-коммуникационных системах",
    },
    en: {
        dateEnd: "2021",
        dateStart: "2017",
        position: "Bachelor",
        place: "ITMO University",
        stack: "Lasers in info-communicational systems",
    },
};

const THESIS = {
    ru: ": Разработка фотоприемной части восходящего канала связи по технологии Li-Fi. Для написания использовался LaTeX и Python для графиков и вычислений.",
    en: ": Development of the receiving part of the uplink communication channel using Li-Fi technology. Used LaTeX for writing and Python for plotting and calculations.",
};

const LINK = {
    ru: "ВКР",
    en: "Thesis (in Russian)",
};

const Itmo: FC = () => {
    const { language } = useContext(LanguageContext);
    return (
        <DateInfo {...EDUCATION[language]}>
            <Text>
                <Link url="https://github.com/eqlion/bachelor-diploma">
                    {LINK[language]}
                </Link>
                {THESIS[language]}
            </Text>
        </DateInfo>
    );
};

export default Itmo;
