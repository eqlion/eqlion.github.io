import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import Link from "../Link";

const LINKS = [
    { url: "https://t.me/eqlion", text: "Telegram" },
    { url: "mailto:lapanicholas@gmail.com", text: "Email" },
    { url: "https://github.com/eqlion/", text: "GitHub" },
    { url: "https://codestats.net/users/eqlion", text: "Code::Stats" },
    { url: "https://www.codewars.com/users/eqlion", text: "Code Wars" },
];

const ContactsText: FC = () => {
    return (
        <View style={styles.container}>
            {LINKS.map(({ url, text }, index) => (
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
