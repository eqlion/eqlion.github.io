import React, { FC, useContext, useEffect } from "react";
import { Pressable, StyleSheet } from "react-native";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    interpolate,
    interpolateColor,
} from "react-native-reanimated";
import Text from "./Text";

import { LanguageContext } from "../util/language";
import useFont from "../hooks/useFont";
import { COLORS } from "../util/colors";

// const AnimatedText = Animated.createAnimatedComponent(Text);

const LanguageSwitch: FC = () => {
    const { language, changeLanguage } = useContext(LanguageContext);
    const node = useSharedValue(language === "en" ? 0 : 1);

    useEffect(() => {
        node.value = withTiming(language === "en" ? 0 : 1);
    }, [language]);

    const fontSize = useFont(13);

    const width = useFont(22) * 1.3;

    const style = useAnimatedStyle(() => ({
        left: interpolate(node.value, [0, 1], [0, width]),
    }));

    const enStyle = useAnimatedStyle(() => ({
        color: interpolateColor(
            node.value,
            [0, 1],
            [COLORS.background, COLORS.white],
        ),
    }));

    const ruStyle = useAnimatedStyle(() => ({
        color: interpolateColor(
            node.value,
            [0, 1],
            [COLORS.white, COLORS.background],
        ),
    }));

    return (
        <Pressable
            onPress={changeLanguage}
            style={[
                {
                    width: width * 2,
                    height: width,
                },
                styles.container,
            ]}>
            <Animated.View
                style={[styles.highlight, { width, height: width }, style]}
            />
            <Animated.Text style={[{ width, fontSize }, styles.flag, enStyle]}>
                EN
            </Animated.Text>
            <Animated.Text style={[{ width, fontSize }, styles.flag, ruStyle]}>
                RU
            </Animated.Text>
        </Pressable>
    );
};

export default LanguageSwitch;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    highlight: {
        backgroundColor: "#ffffff90",
        borderRadius: 10000,
        position: "absolute",
        zIndex: -10,
    },
    flag: {
        textAlign: "center",
        textAlignVertical: "center",
        flex: 1,
        fontFamily: "FiraCode_400Regular",
    },
});
