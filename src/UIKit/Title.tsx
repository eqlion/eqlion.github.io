import { FC, PropsWithChildren } from 'react';
import { View, TextStyle, StyleProp } from 'react-native';
import { useFont } from '@hooks';
import { Text } from './Text';

type Props = {
    style?: StyleProp<TextStyle>;
};

const Title: FC<PropsWithChildren<Props>> = ({ children, style }) => {
    const fontSize = useFont(22);
    return (
        <View>
            <Text type="bold" style={[style, { fontSize }]}>
                {children}
            </Text>
        </View>
    );
};

export { Title };
