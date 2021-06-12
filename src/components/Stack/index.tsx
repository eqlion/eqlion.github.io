import React, { FC, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { LanguageContext } from "../../util/language";

import Title from "../Title";
import ConfigExamples from "./ConfigExamples";
import ExtraKnowledge from "./ExtraKnowledge";
import StackText from "./StackText";

const TITLE = {
    ru: "Технологии && Инструменты",
    en: "Stack && Tools",
};

const Stack: FC = () => {
    const { language } = useContext(LanguageContext);
    return (
        <View style={styles.container}>
            <Title>{TITLE[language]}</Title>
            <StackText />
            <ExtraKnowledge />
            <ConfigExamples />
        </View>
    );
};

export default Stack;

const styles = StyleSheet.create({
    container: {
        marginBottom: 32,
    },
});
