import { FC, PropsWithChildren } from 'react';
import { View, StyleSheet } from 'react-native';
import dayjs from 'dayjs';

import { Link } from './Link';
import { Text } from './Text';
import { UnderlinedText } from './UnderlinedText';

import { COLORS } from '../util/colors';
import { useTimeDiff } from '../hooks/useTimeDiff';

type Props = {
    dateStart: dayjs.Dayjs;
    dateEnd?: dayjs.Dayjs;
    place?: string;
    position: string;
    stack?: string;
    url?: string;
};

const Comma = () => <Text>, </Text>;

const DateInfo: FC<PropsWithChildren<Props>> = ({
    dateStart,
    dateEnd,
    place,
    position,
    stack,
    url,
    children,
}) => {
    const diff = useTimeDiff(dateStart, dateEnd);
    return (
        <View style={styles.container}>
            <View style={styles.line}>
                {place ? (
                    <>
                        <UnderlinedText
                            color={COLORS.green}
                            style={styles.place}>
                            {place}
                        </UnderlinedText>
                        <Comma />
                    </>
                ) : null}
                {url ? (
                    <>
                        <Link url={url}>
                            {url.split('://')[1].replaceAll('/', '')}
                        </Link>
                        <Comma />
                    </>
                ) : null}
            </View>
            <View style={[styles.line, styles.secondLine]}>
                <UnderlinedText color={COLORS.peachy} type="bold">
                    {position}
                </UnderlinedText>
                <Text>{`(${dateStart.format('MM, YYYY')}–${
                    dateEnd?.format('MM, YYYY') ?? '…'
                }), ${diff}`}</Text>
                <Text>{stack ? <Text>{stack}</Text> : null}</Text>
            </View>
            <View style={styles.notes}>{children}</View>
        </View>
    );
};

export { DateInfo };

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 20,
    },
    line: { flexDirection: 'row', marginBottom: 4 },
    place: {
        fontStyle: 'italic',
    },
    notes: {
        width: '95%',
        marginLeft: '5%',
        marginTop: 8,
    },
    secondLine: {
        marginLeft: '5%',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
});
