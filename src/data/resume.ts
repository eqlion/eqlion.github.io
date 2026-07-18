export type ExperienceEntry = {
    company?: string;
    companyUrl?: string;
    position: string;
    start: string;
    end?: string;
    bullets: string[];
};

export const profile = {
    name: 'Nikolay Lapa',
    summary:
        'Staff Engineer leading cross-functional product features end-to-end across iOS (Swift), backend (Go, TypeScript), and CMS platforms in a fintech app serving 15M+ users. Experienced feature owner with a track record of driving complex, multi-team initiatives from requirements through release.',
};

export const contacts = [
    { label: 'Telegram', url: 'https://t.me/eqlion' },
    { label: 'Email', url: 'mailto:lapanicholas@gmail.com' },
    {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/nikolay-lapa-6a8607220/',
    },
    { label: 'GitHub', url: 'https://github.com/eqlion/' },
    {
        label: 'CV',
        url: 'https://drive.google.com/file/d/1JQFFhIhyrkdDLvuk4x0rLBspQDPTeI3x/view?usp=sharing',
    },
];

export const experience: ExperienceEntry[] = [
    {
        company: 'Tabby',
        companyUrl: 'https://tabby.ai',
        position: 'Staff Software Engineer',
        start: '2025-08',
        bullets: [
            'Led end-to-end delivery of Limit Decrease UX and Tabby Card New Headers (DivKit/server-driven UI), coordinating across Mobile, Backend, and CMS teams.',
            'Drove widget architecture refactoring across ~7.5k LOC, migrating core product widgets with zero production incidents.',
            'Owned In-App provisioning across iOS and Android, managing production migration, and consulting other card teams on wallet integrations.',
        ],
    },
    {
        position: 'Senior Mobile Developer',
        start: '2022-12',
        end: '2025-08',
        bullets: [
            'Improved main Money page load time by 60%, from 1.70 s to 670 ms.',
            "Built an AI-powered Cursor x Figma MCP tool and presented it to ~500 engineers at Tabby's inaugural tech conference as one of four selected speakers.",
            'Authored iOS architecture refactoring proposal (TDR), reviewed and approved by the platform lead and system architect, establishing a clear path to reduce tech debt.',
            'Contributed to backend Go and TypeScript services across multiple sprints, unblocking mobile development independently of the single BE engineer.',
            'Introduced backend-driven UI architecture adopted across the stream, enabling content updates without mobile releases.',
        ],
    },
    {
        position: 'React Native Developer',
        start: '2022-04',
        end: '2022-12',
        bullets: [
            'Built the complete KYC and virtual card issuance flow from scratch in a two-person team, handling complex edge cases and session resumption logic.',
            'Singlehandedly developed the One-time limit feature, integrating it with the existing card flow across multiple entry and exit points.',
        ],
    },
    {
        company: 'SberMarket',
        companyUrl: 'https://sbermarket.ru/',
        position: 'Mobile Engineer',
        start: '2021-07',
        end: '2022-04',
        bullets: [
            'Developed and released the BNPL payment option, including complex animated UI, backend integration, and A/B test rollout.',
        ],
    },
    {
        company: 'SixHands',
        companyUrl: 'https://sixhands.co/',
        position: 'Junior Mobile Engineer',
        start: '2020-07',
        end: '2021-07',
        bullets: [
            'Owned the full development cycle for multiple apps simultaneously: layout, business logic, build/sign, testing (TestFlight), and store submission (App Store, Google Play).',
        ],
    },
];

export const education = {
    institution: 'ITMO University',
    position: 'Bachelor of Science in Optical Engineering',
    start: '2017-09',
    end: '2021-07',
    notes: [
        'GPA: 4.5/5',
        'Development of the receiving part of the uplink communication channel using Li-Fi technology. Used LaTeX for writing and Python for plotting and calculations.',
    ],
    thesisUrl: 'https://github.com/eqlion/bachelor-diploma',
};

export const skills = [
    { title: 'Languages', text: 'Swift, TypeScript, Go, JavaScript' },
    { title: 'Frameworks', text: 'Combine, UIKit, SwiftUI, TCA, React Native, DivKit' },
    {
        title: 'Concepts',
        text: 'AI SDLC, Performance Optimization, Server-Driven UI, A/B Testing, CI/CD, Production Monitoring (DataDog), Incident Response, Architecture Design (TDR/ADR), Feature Ownership, Cross-Team Coordination',
    },
    { title: 'Testing', text: 'Unit, Snapshot, MVI, Navigation, E2E' },
    { title: 'Languages', text: 'English fluent, Russian native' },
];
