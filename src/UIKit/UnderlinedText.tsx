import React, { FC } from 'react';
import { View, StyleSheet, TextProps } from 'react-native';
import { FontWeight, Text } from './Text';

type Props = {
    color: string;
    type?: FontWeight;
} & TextProps;

const UnderlinedText: FC<Props> = ({
    color,
    children,
    type,
    style,
    ...props
}) => {
    const background = { backgroundColor: color };
    return (
        <View>
            <Text type={type} style={style} {...props}>
                {children}
            </Text>
            <View style={[background, styles.underline]} />
        </View>
    );
};

export { UnderlinedText };

const styles = StyleSheet.create({
    underline: {
        width: '100%',
        height: 1,
    },
});
