import React, { FC } from "react";
import { TextProps, StyleSheet } from "react-native";
import { COLORS } from "../util/colors";

import Text from "./Text";

interface IProps extends TextProps {
    url: string;
}

const Link: FC<IProps> = ({ url, children, ...props }) => (
    <Text
        {...props}
        href={url}
        hrefAttrs={{ target: "blank" }}
        accessibilityRole="link"
        style={styles.link}>
        {children}
    </Text>
);

export default Link;

const styles = StyleSheet.create({
    link: { color: COLORS.purple },
});
