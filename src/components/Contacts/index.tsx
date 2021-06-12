import React, { FC, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { LanguageContext } from "../../util/language";
import Title from "../Title";
import ContactsText from "./ContactsText";

const TITLE = {
    ru: "Контакты && Ссылки",
    en: "Contacts && Links",
};

const Contacts: FC = () => {
    const { language } = useContext(LanguageContext);
    return (
        <View style={styles.container}>
            <Title>{TITLE[language]}</Title>
            <ContactsText />
        </View>
    );
};

export default Contacts;

const styles = StyleSheet.create({
    container: {
        marginBottom: 32,
    },
});
