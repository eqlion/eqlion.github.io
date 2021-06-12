import React, { useState } from "react";
import {
    useFonts,
    FiraCode_400Regular,
    FiraCode_700Bold,
    FiraCode_300Light,
    FiraCode_500Medium,
} from "@expo-google-fonts/fira-code";
import { Helmet } from "react-helmet";

import Screen from "./src/components/Screen";
import About from "./src/components/About";
import Education from "./src/components/Education";
import Experience from "./src/components/Experience";
import Stack from "./src/components/Stack";

import { Language, LanguageContext } from "./src/util/language";
import { COLORS } from "./src/util/colors";
import Contacts from "./src/components/Contacts";

export default function App() {
    const [language, setLanguage] = useState<Language>("en");
    const changeLanguage = () =>
        setLanguage(lang => (lang === "ru" ? "en" : "ru"));

    useFonts({
        FiraCode_300Light,
        FiraCode_700Bold,
        FiraCode_400Regular,
        FiraCode_500Medium,
    });

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            <Helmet>
                <title>Nikolay Lapa</title>
                <meta name="theme-color" content={COLORS.background} />
            </Helmet>
            <Screen>
                <About />
                <Contacts />
                <Experience />
                <Stack />
                <Education />
            </Screen>
        </LanguageContext.Provider>
    );
}
