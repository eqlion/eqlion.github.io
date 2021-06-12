import React, { FC } from "react";
import { View, StyleSheet, TextStyle, StyleProp } from "react-native";
import useFont from "../hooks/useFont";
import Text from "./Text";

interface IProps {
    style?: StyleProp<TextStyle>;
}

const Title: FC<IProps> = ({ children, style }) => {
    const fontSize = useFont(22);
    return (
        <View>
            <Text type="bold" style={[style, { fontSize }]}>
                {children}
            </Text>
        </View>
    );
};

export default Title;

const styles = StyleSheet.create({});
