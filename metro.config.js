// Learn more https://docs.expo.dev/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Add `.md`/`.mdx` support so blog posts can be imported as React components.
// Done manually (instead of @bacons/mdx's `withMdx`) because that helper
// self-resolves a non-exported subpath and crashes under SDK 55's Node.
config.resolver.sourceExts.push('md', 'mdx');
config.transformer.babelTransformerPath = require.resolve('./mdx-transformer.js');

module.exports = config;
