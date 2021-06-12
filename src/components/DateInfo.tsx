import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import { COLORS } from "../util/colors";

import Text from "./Text";
import UnderlinedText from "./UnderlinedText";

interface IProps {
    dateStart: string;
    dateEnd?: string;
    place: string;
    position: string;
    stack?: string;
}

const Comma = () => <Text>, </Text>;

const DateInfo: FC<IProps> = ({
    dateStart,
    dateEnd,
    place,
    position,
    stack,
    children,
}) => (
    <View style={styles.container}>
        <View style={styles.line}>
            <Text>
                {`(${dateStart}–${dateEnd ? dateEnd : "..."}) `}
                <UnderlinedText color={COLORS.green} style={styles.place}>
                    {place}
                </UnderlinedText>
                <Comma />
            </Text>
        </View>
        <View style={styles.line}>
            <Text>
                {!!stack && (
                    <>
                        <Text>{stack}</Text>
                        <Comma />
                    </>
                )}
                <UnderlinedText color={COLORS.peachy} type="bold">
                    {position}
                </UnderlinedText>
            </Text>
        </View>
        <View style={styles.notes}>{children}</View>
    </View>
);

export default DateInfo;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginBottom: 20,
    },
    line: { flexDirection: "row" },
    place: {
        fontStyle: "italic",
    },
    notes: {
        width: "95%",
        marginLeft: "5%",
        marginTop: 10,
    },
});
