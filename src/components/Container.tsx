import React, { FC } from "react";
import { View, StyleSheet } from "react-native";

const Container: FC = ({ children }) => (
    <View style={styles.container}>{children}</View>
);

export default Container;

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
});
