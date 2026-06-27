import {
    Children,
    FC,
    isValidElement,
    PropsWithChildren,
    ReactNode,
    useEffect,
    useState,
} from 'react';
import { DimensionValue, Image, StyleSheet, View } from 'react-native';
import { Text } from '@UIKit';
import { useFont } from '@hooks';
import { COLORS } from '../util/colors';
import { CodeBlock } from './CodeBlock';

import type { CustomComponentsProp } from '@bacons/mdx';

// MDX compiles whitespace between block elements (e.g. the newlines between
// list items) into bare string children. React Native forbids raw text inside
// a <View>, so drop whitespace-only strings before rendering View containers.
const blockChildren = (children: ReactNode): ReactNode[] =>
    Children.toArray(children).filter(
        child =>
            isValidElement(child) ||
            typeof child !== 'string' ||
            child.trim() !== '',
    );

// Mapping of Markdown/MDX elements to the site's themed UIKit primitives.
// Only the elements that need theming are overridden; anything not listed
// falls back to @bacons/mdx's default universal component.

const Heading: FC<PropsWithChildren<{ size: number; style: object }>> = ({
    size,
    style,
    children,
}) => {
    const fontSize = useFont(size);
    return (
        <Text type="bold" style={[style, { fontSize }]}>
            {children}
        </Text>
    );
};

const H1: FC<PropsWithChildren> = ({ children }) => (
    <Heading size={22} style={styles.h1}>
        {children}
    </Heading>
);

const H2: FC<PropsWithChildren> = ({ children }) => (
    <Heading size={18} style={styles.h2}>
        {children}
    </Heading>
);

const H3: FC<PropsWithChildren> = ({ children }) => (
    <Heading size={15} style={styles.h3}>
        {children}
    </Heading>
);

const Paragraph: FC<PropsWithChildren> = ({ children }) => (
    <Text style={styles.paragraph}>{children}</Text>
);

const Anchor: FC<PropsWithChildren<{ href?: string }>> = ({
    href,
    children,
}) => (
    <Text
        href={href}
        hrefAttrs={{ target: 'blank' }}
        accessibilityRole="link"
        style={styles.anchor}>
        {children}
    </Text>
);

const Strong: FC<PropsWithChildren> = ({ children }) => (
    <Text type="bold">{children}</Text>
);

const Emphasis: FC<PropsWithChildren> = ({ children }) => (
    <Text style={styles.emphasis}>{children}</Text>
);

const InlineCode: FC<PropsWithChildren> = ({ children }) => (
    <Text style={styles.inlineCode}>{children}</Text>
);

const List: FC<PropsWithChildren> = ({ children }) => (
    <View style={styles.list}>{blockChildren(children)}</View>
);

const ListItem: FC<PropsWithChildren> = ({ children }) => (
    <View style={styles.listItem}>
        <Text style={styles.bullet}>-</Text>
        <Text style={styles.listItemText}>{children}</Text>
    </View>
);

const Blockquote: FC<PropsWithChildren> = ({ children }) => (
    <View style={styles.blockquote}>{blockChildren(children)}</View>
);

const Rule: FC = () => <View style={styles.hr} />;

type ImageSize = number | string;

const normalizeImageSize = (value?: ImageSize): DimensionValue => {
    if (typeof value === 'number') {
        return value;
    }
    if (!value) {
        return '100%';
    }
    if (value.endsWith('%')) {
        return value as `${number}%`;
    }

    const numeric = Number(value);
    return Number.isNaN(numeric) ? '100%' : numeric;
};

export const BlogImage: FC<{
    src?: string;
    alt?: string;
    width?: ImageSize;
    maxWidth?: ImageSize;
}> = ({ src, alt, width, maxWidth }) => {
    const [aspectRatio, setAspectRatio] = useState(16 / 9);

    useEffect(() => {
        if (!src) {
            return;
        }

        Image.getSize(
            src,
            (width, height) => setAspectRatio(width / height),
            () => undefined,
        );
    }, [src]);

    if (!src) {
        return null;
    }

    return (
        <Image
            accessibilityLabel={alt}
            source={{ uri: src }}
            resizeMode="contain"
            style={[
                styles.image,
                {
                    aspectRatio,
                    width: normalizeImageSize(width),
                    maxWidth: normalizeImageSize(maxWidth),
                },
            ]}
        />
    );
};

const Wrapper: FC<PropsWithChildren> = ({ children }) => (
    <View style={styles.wrapper}>{blockChildren(children)}</View>
);

export const mdxComponents: CustomComponentsProp = {
    Wrapper,
    h1: H1,
    h2: H2,
    h3: H3,
    p: Paragraph,
    a: Anchor,
    strong: Strong,
    em: Emphasis,
    inlineCode: InlineCode,
    code: CodeBlock,
    pre: ({ children }: PropsWithChildren) => <>{children}</>,
    img: BlogImage,
    BlogImage,
    ul: List,
    ol: List,
    li: ListItem,
    blockquote: Blockquote,
    hr: Rule,
};

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 48,
    },
    h1: {
        marginTop: 8,
        marginBottom: 16,
    },
    h2: {
        marginTop: 24,
        marginBottom: 12,
    },
    h3: {
        marginTop: 16,
        marginBottom: 8,
    },
    paragraph: {
        marginBottom: 16,
        lineHeight: 22,
    },
    anchor: {
        color: COLORS.link,
    },
    emphasis: {
        fontStyle: 'italic',
    },
    inlineCode: {
        color: COLORS.role,
        backgroundColor: '#161b22',
    },
    list: {
        marginBottom: 16,
    },
    listItem: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: 4,
    },
    bullet: {
        color: COLORS.dim,
        marginRight: 8,
    },
    listItemText: {
        flex: 1,
        lineHeight: 22,
    },
    blockquote: {
        borderLeftColor: COLORS.dim,
        borderLeftWidth: 3,
        paddingLeft: 12,
        marginBottom: 16,
    },
    hr: {
        height: 1,
        backgroundColor: COLORS.dim,
        marginVertical: 24,
    },
    image: {
        alignSelf: 'center',
        width: '100%',
        borderRadius: 6,
        marginBottom: 16,
    },
});
