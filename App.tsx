import React from 'react';
import {
    useFonts,
    FiraCode_400Regular,
    FiraCode_700Bold,
    FiraCode_300Light,
    FiraCode_500Medium,
} from '@expo-google-fonts/fira-code';
import { Helmet } from 'react-helmet';

import Screen from './src/components/Screen';
import About from './src/components/About';
import Education from './src/components/Education';
import Experience from './src/components/Experience';

import { COLORS } from './src/util/colors';
import Contacts from './src/components/Contacts';

import 'intl-pluralrules';
import './src/i18n';

export default function App() {
    useFonts({
        FiraCode_300Light,
        FiraCode_700Bold,
        FiraCode_400Regular,
        FiraCode_500Medium,
    });

    return (
        <>
            <Helmet>
                <title>Nikolay Lapa</title>
                <meta name="theme-color" content={COLORS.background} />
            </Helmet>
            <Screen>
                <About />
                <Contacts />
                <Experience />
                <Education />
            </Screen>
        </>
    );
}
