export type ExperienceEntry = {
    company?: string;
    companyUrl?: string;
    position: string;
    start: string;
    end?: string;
    summary: string;
};

export const profile = {
    name: 'Nikolai Lapa',
    headline: 'Lead iOS Engineer | Mobile Architecture and Product Delivery',
    location: 'Bangkok, Thailand',
    about: [
        'I am a Lead iOS Engineer and current Staff Software Engineer with 6 years of experience building consumer fintech products at 15M+ user scale. I lead cross-functional initiatives from product definition and architecture through rollout and production ownership.',
        'My primary depth is in Swift, mobile architecture, performance, and reliable product delivery. I am also comfortable crossing service boundaries into Go, TypeScript, APIs, database migrations, CMS platforms, and server-driven UI when that is what a feature needs.',
    ],
};

export const contacts = [
    { label: 'Email', url: 'mailto:lapanicholas@gmail.com' },
    {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/nikolay-lapa-6a8607220',
    },
    { label: 'GitHub', url: 'https://github.com/eqlion' },
    { label: 'Telegram', url: 'https://t.me/eqlion' },
];

export const selectedImpact = [
    'Designed and delivered a reusable urgent-alert mechanism spanning iOS, Android, backend contracts, CMS, and silent-push refresh. It now supports three production use cases across four teams and is maintained independently by two platform teams.',
    'Led a server-driven redesign of the Tabby Card header across Swift, Go, TypeScript, and CMS. Reusable components were adopted by two additional teams, reducing content and layout iteration from up to two weeks to ~30 minutes.',
    'Led architecture and delivery of multi-card provisioning across three teams and seven engineers, enabling the Tabby Cash Card launch and Apple certification without migration incidents. Also led the Apple-required Wallet Extension from architecture through implementation and 100% iOS rollout.',
    'Modernized Card Activation by removing 31K+ lines of obsolete code and replacing two legacy modules with five layered modules, improving ownership boundaries, testability, and selective testing.',
    "Reduced the Money screen's time to meaningful content by 60%, from 1.70 seconds to 670 milliseconds, after profiling waterfall requests and making non-critical content load asynchronously.",
    'Mentored 5+ iOS, Android, and QA engineers, interviewed candidates, contributed performance feedback, and regularly reviewed and presented proposals through the mobile architecture committee.',
];

export const experience: ExperienceEntry[] = [
    {
        company: 'Tabby',
        companyUrl: 'https://tabby.ai',
        position: 'Staff Software Engineer',
        start: '2025-08',
        summary:
            'Lead mobile architecture and cross-functional delivery for Tabby Card initiatives spanning iOS, Android, backend services, CMS, provisioning, and platform integrations.',
    },
    {
        position: 'Senior Mobile Developer',
        start: '2022-12',
        end: '2025-08',
        summary:
            'Led product features, introduced server-driven UI to the stream, improved iOS performance, built production monitoring, and contributed across mobile, backend, and CMS systems.',
    },
    {
        position: 'React Native Developer',
        start: '2022-04',
        end: '2022-12',
        summary:
            "Built and launched the UAE KYC and virtual-card issuance journey that became the technical foundation of today's Tabby Card product. Served as the sole mobile engineer for its original entry product, One-time Limit.",
    },
    {
        company: 'SberMarket',
        companyUrl: 'https://sbermarket.ru/',
        position: 'Mobile Engineer',
        start: '2021-07',
        end: '2022-04',
        summary:
            'Developed and rolled out a BNPL payment option for a consumer-delivery platform with more than 10M monthly active users.',
    },
    {
        company: 'SixHands',
        companyUrl: 'https://sixhands.co/',
        position: 'Junior Mobile Engineer',
        start: '2020-07',
        end: '2021-07',
        summary:
            'Delivered multiple client applications through implementation, testing, signing, and App Store and Google Play release.',
    },
];

export const education = {
    institution: 'ITMO University',
    position: 'BSc, Optical Engineering',
    start: '2017',
    end: '2021',
};

export const skills = [
    { title: 'iOS', text: 'Swift, SwiftUI, UIKit, Combine, TCA, Swift Concurrency, Swift Package Manager' },
    {
        title: 'Architecture and quality',
        text: 'Modularization, Instruments, performance analysis, accessibility, unit, snapshot, MVI, navigation, and end-to-end testing',
    },
    {
        title: 'Delivery',
        text: 'App Store releases, Fastlane, GitLab CI, Datadog, production monitoring, and incident response',
    },
    {
        title: 'Cross-stack',
        text: 'React Native, TypeScript, Go, REST, gRPC, database migrations, CMS, and server-driven UI',
    },
    { title: 'Languages', text: 'English (fluent), Russian (native)' },
];
