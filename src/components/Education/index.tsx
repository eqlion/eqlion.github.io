import React, { FC, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { LanguageContext } from "../../util/language";
import Title from "../Title";
import EducationText from "./EducationText";

const TITLE = {
    ru: "Образование",
    en: "Education",
};

const Education: FC = () => {
    const { language } = useContext(LanguageContext);
    return (
        <View style={styles.container}>
            <Title>{TITLE[language]}</Title>
            <EducationText />
        </View>
    );
};

export default Education;

const styles = StyleSheet.create({
    container: {
        marginBottom: 32,
    },
});
