import React, { useState, FC, useEffect } from "react";
import {
    View,
    TouchableOpacity,
    StyleSheet,
    TextStyle,
    TextProps,
} from "react-native";
import Text, { FontWeight } from "./Text";

interface IProps extends TextProps {
    color: string;
    type?: FontWeight;
    style?: TextStyle;
}

const UnderlinedText: FC<IProps> = ({
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

export default UnderlinedText;

const styles = StyleSheet.create({
    underline: {
        width: "100%",
        height: 2,
    },
});
