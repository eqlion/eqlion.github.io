import React, { FC, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { LanguageContext } from "../../util/language";

import Title from "../Title";
import ExperienceText from "./ExperienceText";

const TITLE = {
    ru: "Опыт",
    en: "Experience",
};

const Experience: FC = () => {
    const { language } = useContext(LanguageContext);
    return (
        <View style={styles.container}>
            <Title>{TITLE[language]}</Title>
            <ExperienceText />
        </View>
    );
};

export default Experience;

const styles = StyleSheet.create({
    container: {
        marginBottom: 32,
    },
});
