import { FC, PropsWithChildren } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from './Text';
import { COLORS } from '../util/colors';

const BulletListItem: FC<PropsWithChildren> = ({ children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.bullet}>- </Text>
            {children}
        </View>
    );
};

export { BulletListItem };

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
    },
    bullet: {
        color: COLORS.dim,
    },
});
