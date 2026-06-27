import Head from 'expo-router/head';

import { Screen } from '@UIKit';
import {
    About,
    Blog,
    Education,
    Experience,
    Contacts,
    Buzzwords,
} from '../src/components';
import { COLORS } from '../src/util/colors';

export default function Index() {
    return (
        <>
            <Head>
                <title>Nikolay Lapa</title>
                <meta name="theme-color" content={COLORS.background} />
            </Head>
            <Screen>
                <About />
                <Contacts />
                <Experience />
                <Blog />
                <Education />
                <Buzzwords />
            </Screen>
        </>
    );
}
