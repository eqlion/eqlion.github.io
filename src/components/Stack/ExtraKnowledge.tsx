import React, { FC, useContext } from "react";

import BulletListItem from "../BulletListItem";
import Container from "../Container";
import Text from "../Text";

import { LanguageContext } from "../../util/language";

const TITLE = {
    en: "Extra skills",
    ru: "Дополнительные скиллы",
};

const SKILLS = {
    ru: [
        "Русский: носитель",
        "Английский: C1, формальная/неформальная речь, тех документация, читаю/пишу/говорю",
        "Нативные библиотеки: понимаю Java, Kotlin, Swift; частично перерабатывал нативные библиотеки для RN для работы с новыми версиями",
        "LaTeX",
        "Python: всякая математика (numpy, matplotlib), чуть-чуть Flask, совсем чуть-чуть Django",
    ],
    en: [
        "Russian: native speaker",
        "English: C1, formal/informal, tech docs, can speak/write/read",
        "Native libraries: I understand Java, Kotlin, Swift; have partially rewritten native libraries for RN to be able to work with new version",
        "LaTeX",
        "Python: maths applications (numpy, matplotlib), bits of Flask, miniscule bits of Django",
    ],
};

const ExtraKnowledge: FC = () => {
    const { language } = useContext(LanguageContext);

    return (
        <Container>
            <Text>{TITLE[language]}</Text>
            {SKILLS[language].map((skill, index) => (
                <BulletListItem key={index}>
                    <Text>{skill}</Text>
                </BulletListItem>
            ))}
        </Container>
    );
};

export default ExtraKnowledge;
