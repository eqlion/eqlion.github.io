import React, { FC } from 'react';
import { TextProps, StyleSheet } from 'react-native';
import { COLORS } from '../util/colors';

import { Text } from './Text';

type Props = {
    url: string;
} & TextProps;

const Link: FC<Props> = ({ url, children, ...props }) => (
    <Text
        {...props}
        href={url}
        hrefAttrs={{ target: 'blank' }}
        accessibilityRole="link"
        style={styles.link}>
        {children}
    </Text>
);

export { Link };

const styles = StyleSheet.create({
    link: { color: COLORS.purple },
});
