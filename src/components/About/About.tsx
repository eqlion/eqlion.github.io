import React, { FC, useContext } from "react";
import { formatAge } from "../../util";
import { LanguageContext } from "../../util/language";
import Text from "../Text";

const TEXT = {
    en: `Hey! I'm Nikolay Lapa, ${
        new Date(
            new Date().getTime() - new Date("1999-08-05").getTime(),
        ).getFullYear() - 1970
    }, and i'm a Middle React Native developer, which means that I love and know how to create exciting and fast crossplatform mobile apps (and rarely sites too: this site's been created entirely using nothing but React Native!). Below you can find info about my skills, experience, stack and education, and if you want to work with me (or me to work with you), feel free to message me!`,
    ru: `Привет! Меня зовут Николай Лапа, мне ${formatAge(
        new Date(
            new Date().getTime() - new Date("1999-08-05").getTime(),
        ).getFullYear() - 1970,
    )} и я Миддл Реакт Нейтив разработчик — люблю и умею делать крутые и быстрые кросплатформенные мобильные приложения (и очень редко сайты: сайт на котором Вы находитесь полностью написан на Реакт Нейтиве!). Чуть ниже перечислены мои скиллы, опыт, стек, образование, и если Вы бы хотели поработать со мной (или чтобы я поработал с Вами) — пишите!`,
};

const AboutText: FC = () => {
    const { language } = useContext(LanguageContext);
    return <Text>{TEXT[language]}</Text>;
};

export default AboutText;
