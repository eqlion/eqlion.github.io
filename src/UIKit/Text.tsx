import React, { FC } from 'react';
import { StyleSheet, Text as DefaultText, TextProps } from 'react-native';
import { useFont } from '@hooks';
import { COLORS } from '../util/colors';

export type FontWeight = 'bold' | 'light' | 'regular' | 'medium';

type Props = {
    type?: FontWeight;
    href?: string;
    hrefAttrs?: {
        target: string;
    };
} & TextProps;

const fontFamily = {
    regular: 'FiraCode_400Regular',
    bold: 'FiraCode_700Bold',
    light: 'FiraCode_300Light',
    medium: 'FiraCode_500Medium',
};

const Text: FC<Props> = ({ style, type = 'regular', children, ...props }) => {
    const fontSize = useFont(13);
    return (
        <DefaultText
            style={[
                { fontFamily: fontFamily[type], fontSize },
                styles.text,
                style,
            ]}
            {...props}>
            {children}
        </DefaultText>
    );
};

export { Text };

const styles = StyleSheet.create({
    text: {
        color: COLORS.white,
    },
});
