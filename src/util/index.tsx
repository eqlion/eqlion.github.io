import { Link, Text } from '../UIKit';

export const parseUrl = (url: string, index: number, last: boolean) => {
    const parts = url.split('/');
    const nameWithVersion = parts[parts.length - 1];
    const name = nameWithVersion.split('.')[0];
    return (
        <Text key={index}>
            <Link url={url}>{name}</Link>
            {!last && ', '}
        </Text>
    );
};
