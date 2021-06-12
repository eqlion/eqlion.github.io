import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import useIsPhone from "../hooks/useIsPhone";
import { COLORS } from "../util/colors";

const Screen: FC = ({ children }) => {
    const isPhone = useIsPhone();
    const style = {
        paddingHorizontal: isPhone ? 16 : "27%",
    };
    return <View style={[styles.container, style]}>{children}</View>;
};

export default Screen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingTop: 32,
    },
});
