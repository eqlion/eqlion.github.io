export const en = {
    About: {
        title: 'Nikolay Lapa',
        // eslint-disable-next-line quotes
        text: "Staff Engineer leading cross-functional product features end-to-end across iOS (Swift), backend (Go, TypeScript), and CMS platforms in a fintech app serving 15M+ users. Experienced feature owner with a track record of driving complex, multi-team initiatives from requirements through release.",
    },
    Contacts: {
        title: 'Contacts && Links',
        telegram: 'Telegram',
        email: 'Email',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        resume: 'CV',
    },
    Education: {
        itmo: {
            position: 'Bachelor of Science in Optical Engineering',
            place: 'ITMO University',
            thesis: ': Development of the receiving part of the uplink communication channel using Li-Fi technology. Used LaTeX for writing and Python for plotting and calculations.',
            link: 'Thesis (in Russian)',
            gpa: 'GPA: 4.5/5',
        },
        title: 'Education',
    },
    Experience: {
        title: 'Experience',
        sbermarket: [
            'Developed and released the BNPL payment option, including complex animated UI, backend integration, and A/B test rollout.',
        ],
        sixhands: [
            'Owned the full development cycle for multiple apps simultaneously: layout, business logic, build/sign, testing (TestFlight), and store submission (App Store, Google Play).',
        ],
        tabby: {
            staff: [
                'Led end-to-end delivery of Limit Decrease UX and Tabby Card New Headers (DivKit/server-driven UI), coordinating across Mobile, Backend, and CMS teams.',
                'Drove widget architecture refactoring across ~7.5k LOC, migrating core product widgets with zero production incidents.',
                'Owned In-App provisioning across iOS and Android, managing production migration, and consulting other card teams on wallet integrations.',
            ],
            senior: [
                'Improved main Money page load time by 60%, from 1.70 s to 670 ms.',
                'Built an AI-powered Cursor x Figma MCP tool and presented it to ~500 engineers at Tabby\'s inaugural tech conference as one of four selected speakers.',
                'Authored iOS architecture refactoring proposal (TDR), reviewed and approved by the platform lead and system architect, establishing a clear path to reduce tech debt.',
                'Contributed to backend Go and TypeScript services across multiple sprints, unblocking mobile development independently of the single BE engineer.',
                'Introduced backend-driven UI architecture adopted across the stream, enabling content updates without mobile releases.',
            ],
            reactNative: [
                'Built the complete KYC and virtual card issuance flow from scratch in a two-person team, handling complex edge cases and session resumption logic.',
                'Singlehandedly developed the One-time limit feature, integrating it with the existing card flow across multiple entry and exit points.',
            ],
        },
    },
    Util: {
        year_one: '{{count}} year',
        year_few: '{{count}} years',
        year_many: '{{count}} years',
        year_other: '{{count}} years',
        month_one: '{{count}} month',
        month_few: '{{count}} months',
        month_many: '{{count}} months',
        month_other: '{{count}} months',
    },
    Buzzwords: {
        title: 'Skills',
        languages: {
            title: 'Languages',
            text: 'Swift, TypeScript, Go, JavaScript',
        },
        frameworks: {
            title: 'Frameworks',
            text: 'Combine, UIKit, SwiftUI, TCA, React Native, DivKit',
        },
        concepts: {
            title: 'Concepts',
            text: 'AI SDLC, Performance Optimization, Server-Driven UI, A/B Testing, CI/CD, Production Monitoring (DataDog), Incident Response, Architecture Design (TDR/ADR), Feature Ownership, Cross-Team Coordination',
        },
        testing: {
            title: 'Testing',
            text: 'Unit, Snapshot, MVI, Navigation, E2E',
        },
        spokenLanguages: {
            title: 'Languages',
            text: 'English fluent, Russian native',
        },
    },
};
