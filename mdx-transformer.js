// Local copy of @bacons/mdx's default metro transformer.
// We inline it because @bacons/mdx's `withMdx` helper self-resolves
// `@bacons/mdx/default-metro-transformer.js`, a subpath its package `exports`
// map doesn't expose (fails under Node's exports enforcement). The two
// subpaths used here ARE exported, so this works.
const upstreamTransformer = require('@expo/metro-config/babel-transformer');
const MdxTransformer = require('@bacons/mdx/metro-transformer');

module.exports.transform = async (props) =>
    // Transpile MDX to JSX first, then hand off to the upstream transformer.
    upstreamTransformer.transform(await MdxTransformer.transform(props));
