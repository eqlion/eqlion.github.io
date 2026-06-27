import { FC, Fragment, isValidElement, ReactNode } from 'react';
import { ScrollView, StyleSheet, TextStyle } from 'react-native';
import Prism from 'prismjs';
// Core (prismjs) already includes markup, css, clike, javascript.
// Add the languages likely to appear in posts. Order matters: dependents last.
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-swift';
import 'prismjs/components/prism-yaml';

import { Text } from '@UIKit';
import { COLORS } from '../util/colors';

type Token = string | Prism.Token;

// Maps a fenced-block language hint to a registered Prism grammar.
const ALIASES: Record<string, string> = {
    ts: 'typescript',
    js: 'javascript',
    sh: 'bash',
    shell: 'bash',
    golang: 'go',
    yml: 'yaml',
};

// Token colours, drawn from the site palette plus GitHub-dark accents.
const TOKEN_STYLE: Record<string, TextStyle> = {
    comment: { color: COLORS.dim },
    prolog: { color: COLORS.dim },
    doctype: { color: COLORS.dim },
    cdata: { color: COLORS.dim },
    punctuation: { color: COLORS.text },
    keyword: { color: '#ff7b72' },
    operator: { color: '#ff7b72' },
    'class-name': { color: COLORS.role },
    builtin: { color: COLORS.role },
    variable: { color: COLORS.role },
    function: { color: '#d2a8ff' },
    boolean: { color: COLORS.link },
    number: { color: COLORS.link },
    constant: { color: COLORS.link },
    property: { color: COLORS.link },
    symbol: { color: COLORS.link },
    string: { color: '#a5d6ff' },
    char: { color: '#a5d6ff' },
    regex: { color: '#a5d6ff' },
    tag: { color: COLORS.place },
    'attr-name': { color: COLORS.link },
    'attr-value': { color: '#a5d6ff' },
    deleted: { color: '#ff7b72' },
    inserted: { color: COLORS.place },
};

// Recover the raw source string from whatever the MDX `code` element passes.
const toText = (node: ReactNode): string => {
    if (typeof node === 'string') return node;
    if (typeof node === 'number') return String(node);
    if (Array.isArray(node)) return node.map(toText).join('');
    if (isValidElement(node)) {
        return toText((node.props as { children?: ReactNode }).children);
    }
    return '';
};

const getLanguage = (className?: string | string[]): string | undefined => {
    const classes = Array.isArray(className) ? className.join(' ') : className;
    const match = classes?.match(/language-(\w+)/);
    if (!match) {
        return undefined;
    }
    const lang = match[1];
    return ALIASES[lang] ?? lang;
};

const renderTokens = (tokens: Token[]): ReactNode =>
    tokens.map((token, index) => {
        if (typeof token === 'string') {
            return <Fragment key={index}>{token}</Fragment>;
        }
        const content = Array.isArray(token.content)
            ? renderTokens(token.content as Token[])
            : toText(token.content as ReactNode);
        return (
            <Text key={index} style={TOKEN_STYLE[token.type]}>
                {content}
            </Text>
        );
    });

type Props = {
    className?: string | string[];
    children?: ReactNode;
};

export const CodeBlock: FC<Props> = ({ className, children }) => {
    const code = toText(children).replace(/\n$/, '');
    const language = getLanguage(className);
    const grammar = language ? Prism.languages[language] : undefined;

    return (
        <ScrollView horizontal style={styles.pre}>
            <Text style={styles.code}>
                {grammar ? renderTokens(Prism.tokenize(code, grammar)) : code}
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    pre: {
        backgroundColor: '#161b22',
        borderColor: COLORS.dim,
        borderWidth: 1,
        borderRadius: 6,
        padding: 12,
        marginBottom: 16,
    },
    code: {
        color: COLORS.text,
        lineHeight: 20,
    },
});
