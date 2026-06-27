// Allows importing `.md` / `.mdx` files as React components (via @bacons/mdx).
declare module '*.mdx' {
    import type { ComponentType } from 'react';
    const MDXComponent: ComponentType<Record<string, unknown>>;
    export default MDXComponent;
}

declare module '*.md' {
    import type { ComponentType } from 'react';
    const MDXComponent: ComponentType<Record<string, unknown>>;
    export default MDXComponent;
}
