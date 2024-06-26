import { FC, PropsWithChildren } from 'react';
import { View, StyleSheet } from 'react-native';

const Container: FC<PropsWithChildren> = ({ children }) => (
    <View style={styles.container}>{children}</View>
);

export { Container };

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
});
