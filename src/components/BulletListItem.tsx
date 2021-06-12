import React, { useState, FC, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import useFont from "../hooks/useFont";
import { COLORS } from "../util/colors";

const Bullet = () => {
    const size = useFont(5);
    return (
        <View
            style={[
                styles.bullet,
                { marginTop: size + 1, width: size, height: size },
            ]}
        />
    );
};

const BulletListItem: FC = ({ children }) => {
    return (
        <View style={styles.container}>
            <Bullet />
            {children}
        </View>
    );
};

export default BulletListItem;

const styles = StyleSheet.create({
    bullet: {
        // width: 7,
        // height: 7,
        borderRadius: 1000,
        backgroundColor: COLORS.white,
        marginRight: 10,
    },
    container: {
        flexDirection: "row",
        width: "100%",
    },
});
