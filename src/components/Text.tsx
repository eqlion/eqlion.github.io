import React, { FC } from "react";
import { StyleSheet, Text as DefaultText, TextProps } from "react-native";
import useFont from "../hooks/useFont";
import { COLORS } from "../util/colors";

export type FontWeight = "bold" | "light" | "regular" | "medium";

interface IProps extends TextProps {
    type?: FontWeight;
}

const fontFamily = {
    regular: "FiraCode_400Regular",
    bold: "FiraCode_700Bold",
    light: "FiraCode_300Light",
    medium: "FiraCode_500Medium",
};

const Text: FC<IProps> = ({ style, type = "regular", children }) => {
    const fontSize = useFont(13);
    return (
        <DefaultText
            style={[
                { fontFamily: fontFamily[type], fontSize },
                styles.text,
                style,
            ]}>
            {children}
        </DefaultText>
    );
};

export default Text;

const styles = StyleSheet.create({
    text: {
        color: COLORS.white,
    },
});
