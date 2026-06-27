import {
    useFonts,
    FiraCode_400Regular,
    FiraCode_700Bold,
    FiraCode_300Light,
    FiraCode_500Medium,
} from '@expo-google-fonts/fira-code';
import { Stack } from 'expo-router';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import { COLORS } from '../src/util/colors';
import '../src/i18n';

dayjs.extend(customParseFormat);

export default function RootLayout() {
    useFonts({
        FiraCode_300Light,
        FiraCode_700Bold,
        FiraCode_400Regular,
        FiraCode_500Medium,
    });

    return (
        <Stack
            screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: COLORS.background },
            }}
        />
    );
}
