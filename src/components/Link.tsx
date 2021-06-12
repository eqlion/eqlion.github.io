import React, { useState, FC } from "react";
import { Pressable, Linking, TextProps, StyleSheet } from "react-native";
import { COLORS } from "../util/colors";

import Text from "./Text";

interface IProps extends TextProps {
    url: string;
}

const Link: FC<IProps> = ({ url, children, ...props }) => {
    const [hovered, setHovered] = useState(false);
    const style = {
        textDecorationLine: hovered
            ? ("underline" as const)
            : ("none" as const),
        color: COLORS.purple,
    };
    return (
        <Pressable
            onPress={() => Linking.openURL(url)}
            onHoverIn={() => setHovered(true)}
            onHoverOut={() => setHovered(false)}>
            <Text style={[style, styles.text]} {...props}>
                {children}
            </Text>
        </Pressable>
    );
};

export default Link;

const styles = StyleSheet.create({
    text: {
        whiteSpace: "nowrap",
    },
});
