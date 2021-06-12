import React, { FC, useContext } from "react";
import { View, StyleSheet } from "react-native";
import useIsPhone from "../../hooks/useIsPhone";
import { COLORS } from "../../util/colors";
import { LanguageContext } from "../../util/language";
import BulletListItem from "../BulletListItem";

import Text from "../Text";

const TECH = [
    "React Native",
    "TypeScript",
    "JavaScript",
    "Redux",
    "Hooks",
    "Bare Workflow",
    "Managed Workflow",
    "React Native for Web",
    "Axios",
    "bash",
    "Fastlane",
    "REST",
    "cURL",
    "Dayjs",
    "Prettier",
    "SVG",
    "ESLint",
    "Firebase",
    "Formik",
    "React Hook Form",
    "Reanimated",
    "React Navigation",
];

const TECH_TITLE = {
    ru: "Что я знаю:",
    en: "I know:",
};

const INSTRUMENTS_TITLE = {
    ru: "Инструменты, которыми я пользуюсь:",
    en: "The tools I use:",
};

const INSTRUMENTS = [
    "MacOS",
    "Hackintosh",
    "Ubuntu",
    "VSCode",
    "zsh",
    "Xcode",
    "Gradle",
    "Expo",
];

const OTHER = {
    ru: "И другие...",
    en: "And other...",
};

const StackText: FC = () => {
    const isPhone = useIsPhone();
    const { language } = useContext(LanguageContext);

    const containerStyle = {
        flexDirection: isPhone ? ("column" as const) : ("row" as const),
    };

    const columnStyle = {
        flex: 1,
    };

    return (
        <View style={containerStyle}>
            <View style={[styles.column, !isPhone && columnStyle]}>
                <Text>{TECH_TITLE[language]}</Text>
                <View style={styles.tagContainer}>
                    {TECH.map((tech, index) => (
                        <BulletListItem key={index}>
                            <Text style={styles.tag}>{tech}</Text>
                        </BulletListItem>
                    ))}
                    <BulletListItem>
                        <Text style={styles.tag}>{OTHER[language]}</Text>
                    </BulletListItem>
                </View>
            </View>
            <View style={[styles.column, !isPhone && columnStyle]}>
                <Text>{INSTRUMENTS_TITLE[language]}</Text>
                <View style={styles.tagContainer}>
                    {INSTRUMENTS.map((instrument, index) => (
                        <BulletListItem key={index}>
                            <Text style={styles.anotherTag}>{instrument}</Text>
                        </BulletListItem>
                    ))}
                    <BulletListItem>
                        <Text style={styles.anotherTag}>{OTHER[language]}</Text>
                    </BulletListItem>
                </View>
            </View>
        </View>
    );
};

export default StackText;

const styles = StyleSheet.create({
    tagContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
    },
    tag: {
        textDecorationLine: "underline",
        textDecorationColor: COLORS.blue,
        textAlign: "center",
    },
    anotherTag: {
        textDecorationLine: "underline",
        textDecorationColor: COLORS.orange,
        textAlign: "center",
    },
    column: {
        marginBottom: 16,
    },
});
