import {
    useFonts,
    FiraCode_400Regular,
    FiraCode_700Bold,
    FiraCode_300Light,
    FiraCode_500Medium,
} from '@expo-google-fonts/fira-code';
import { Helmet } from 'react-helmet';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

import { Screen } from '@UIKit';
import { About, Education, Experience, Contacts } from './src/components';

import { COLORS } from './src/util/colors';

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
