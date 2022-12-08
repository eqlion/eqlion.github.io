import React, { FC, PropsWithChildren } from 'react';
import { View, StyleSheet } from 'react-native';
import useFont from '../hooks/useFont';
import { COLORS } from '../util/colors';

const Bullet = () => {
    const size = useFont(5);
    return (
        <View
            style={[
                styles.bullet,
                { marginTop: size + 1, width: size, height: size },
            ]}
        />
    );
};

const BulletListItem: FC<PropsWithChildren> = ({ children }) => {
    return (
        <View style={styles.container}>
            <Bullet />
            {children}
        </View>
    );
};

export default BulletListItem;

const styles = StyleSheet.create({
    bullet: {
        borderRadius: 1000,
        backgroundColor: COLORS.white,
        marginRight: 10,
    },
    container: {
        flexDirection: 'row',
        width: '100%',
    },
});
