import React, { useState, FC, useEffect, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { LanguageContext } from "../../util/language";
import LanguageSwitch from "../LanguageSwitch";
import Title from "../Title";
import AboutText from "./About";

const TITLE = {
    en: "About",
    ru: "Про меня",
};

const About: FC = () => {
    const { language } = useContext(LanguageContext);
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Title>{TITLE[language]}</Title>
                <LanguageSwitch />
            </View>
            <AboutText />
        </View>
    );
};

export default About;

const styles = StyleSheet.create({
    container: {
        marginBottom: 32,
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
});
