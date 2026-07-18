import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { extname, join, resolve } from 'node:path';

const root = resolve('dist');
const failures = [];

const files = (directory) =>
    readdirSync(directory).flatMap((name) => {
        const path = join(directory, name);
        return statSync(path).isDirectory() ? files(path) : [path];
    });

const expectedFiles = [
    'index.html',
    '404.html',
    'blog/index.html',
    'blog/expeditions/index.html',
    'robots.txt',
    'rss.xml',
    'sitemap-index.xml',
];

for (const file of expectedFiles) {
    if (!existsSync(join(root, file))) failures.push(`missing ${file}`);
}

const outputFiles = files(root);
const javascriptFiles = outputFiles.filter((file) => extname(file) === '.js');
if (javascriptFiles.length > 0) {
    failures.push(`unexpected client JavaScript: ${javascriptFiles.join(', ')}`);
}

const localTarget = (url) => {
    const pathname = decodeURIComponent(url.split(/[?#]/, 1)[0]);
    if (pathname === '/') return join(root, 'index.html');

    const target = join(root, pathname);
    if (extname(pathname)) return target;
    return join(target, 'index.html');
};

for (const file of outputFiles.filter((path) => extname(path) === '.html')) {
    const html = readFileSync(file, 'utf8');
    const scripts = html.match(/<script\b[^>]*>/g) ?? [];
    const executableScripts = scripts.filter(
        (script) => !/type=["']application\/ld\+json["']/.test(script),
    );
    if (executableScripts.length > 0) {
        failures.push(`${file} contains executable client JavaScript`);
    }

    for (const image of html.matchAll(/<img\b([^>]*)>/g)) {
        const attributes = image[1];
        for (const required of ['alt=', 'width=', 'height=']) {
            if (!attributes.includes(required)) {
                failures.push(`${file} image is missing ${required.slice(0, -1)}`);
            }
        }
    }

    for (const reference of html.matchAll(/(?:href|src)=["']([^"']+)["']/g)) {
        const url = reference[1];
        if (!url.startsWith('/') || url.startsWith('//')) continue;
        if (!existsSync(localTarget(url))) {
            failures.push(`${file} links to missing local target ${url}`);
        }
    }
}

if (failures.length > 0) {
    console.error(failures.map((failure) => `- ${failure}`).join('\n'));
    process.exitCode = 1;
} else {
    console.log(
        `Verified ${outputFiles.length} static files: required routes, local links, image dimensions, and zero client JavaScript.`,
    );
}
