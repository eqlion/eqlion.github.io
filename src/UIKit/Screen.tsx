import { FC, PropsWithChildren } from 'react';
import { ScrollView, StyleSheet, ViewStyle } from 'react-native';
import { useIsPhone } from '../hooks/useIsPhone';
import { COLORS } from '../util/colors';

const Screen: FC<PropsWithChildren> = ({ children }) => {
    const isPhone = useIsPhone();
    const style: ViewStyle = {
        paddingHorizontal: isPhone ? 16 : '20%',
    };
    return (
        <ScrollView style={[styles.container, style]}>{children}</ScrollView>
    );
};

export { Screen };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingTop: 32,
    },
});
