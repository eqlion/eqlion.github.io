import React, { FC, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Language, LanguageContext } from "../../util/language";
import Link from "../Link";

const getLinks = (language: Language) => {
    switch (language) {
        case "en":
            return [
                { url: "https://t.me/eqlion", text: "Telegram" },
                { url: "mailto:lapanicholas@gmail.com", text: "Email" },
                { url: "https://github.com/eqlion/", text: "GitHub" },
                {
                    url: "https://docs.google.com/document/d/14qcVP1YD6FxWoJvDaR-wYFrcWw29k0doIaFmgudtprk/edit?usp=sharing",
                    text: "Resume",
                },
                {
                    url: "https://codestats.net/users/eqlion",
                    text: "Code::Stats",
                },
                {
                    url: "https://www.codewars.com/users/eqlion",
                    text: "Code Wars",
                },
            ];
        case "ru":
            return [
                { url: "https://t.me/eqlion", text: "Telegram" },
                { url: "mailto:lapanicholas@gmail.com", text: "Email" },
                { url: "https://github.com/eqlion/", text: "GitHub" },
                {
                    url: "https://docs.google.com/document/d/1GqL98NfqAYjFWcPT2Mi3eFsbwC69AOYGHOfukB3ie2I/edit?usp=sharing",
                    text: "Резюме",
                },
                {
                    url: "https://codestats.net/users/eqlion",
                    text: "Code::Stats",
                },
                {
                    url: "https://www.codewars.com/users/eqlion",
                    text: "Code Wars",
                },
            ];
    }
};

const ContactsText: FC = () => {
    const { language } = useContext(LanguageContext);
    return (
        <View style={styles.container}>
            {getLinks(language).map(({ url, text }, index) => (
                <Link url={url} key={index}>
                    {text}
                </Link>
            ))}
        </View>
    );
};

export default ContactsText;

const styles = StyleSheet.create({
    container: {
        flexBasis: 0.25,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
});
