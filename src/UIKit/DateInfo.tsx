import { FC, PropsWithChildren } from 'react';
import { View, StyleSheet } from 'react-native';
import dayjs from 'dayjs';

import { Link } from './Link';
import { Text } from './Text';

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
                        <Text style={styles.place}>{place}</Text>
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
                <Text type="bold" style={styles.role}>
                    {position}
                </Text>
                <Text style={styles.dim}>{`(${dateStart.format('MM, YYYY')}–${
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
    place: {
        color: COLORS.place,
        fontStyle: 'italic',
    },
    role: {
        color: COLORS.role,
    },
    dim: {
        color: COLORS.dim,
    },
});
