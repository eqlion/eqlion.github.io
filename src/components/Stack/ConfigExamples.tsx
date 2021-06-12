import React, { FC, useContext } from "react";

import Text from "../Text";
import Link from "../Link";
import Container from "../Container";

import { LanguageContext } from "../../util/language";

const ESLINT =
    "https://gist.github.com/eqlion/c45a76d33e219b635c491d207d670603";

const PRETTIER =
    "https://gist.github.com/eqlion/e6c48a1002d5c887d160eb92dfff6edb";

const PACKAGE =
    "https://gist.github.com/eqlion/3d9f42c142d054bd10da32f159b5eb82";

const DESCRIPTION = {
    en: "Links to the examples of my configs: ",
    ru: "Ссылки на примеры моих конфигов: ",
};

const ConfigExamples: FC = () => {
    const { language } = useContext(LanguageContext);
    return (
        <Container>
            <Text>
                {DESCRIPTION[language]} <Link url={PACKAGE}>package.json</Link>,{" "}
                <Link url={ESLINT}>.eslintrc.js</Link>,{" "}
                <Link url={PRETTIER}>.prettierrc.js</Link>.
            </Text>
        </Container>
    );
};

export default ConfigExamples;
