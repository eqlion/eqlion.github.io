export const en = {
    About: {
        title: 'About',
        // eslint-disable-next-line quotes
        text: "Hey! I'm Nikolay Lapa, $t(About.age, { \"count\": {{age}} }), and i'm a Middle+ React Native developer, which means that I love and know how to create exciting and fast crossplatform mobile apps (and rarely sites too: this site's been created entirely using nothing but React Native!). Below you can find info about my skills, experience, stack and education, and if you want to work with me (or me to work with you), feel free to message me!",
        age_one: '{{count}}',
        age_few: '{{count}}',
        age_many: '{{count}}',
        age_other: '{{count}}',
    },
    Contacts: {
        title: 'Contacts && Links',
        telegram: 'Telegram',
        email: 'Email',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        resume: 'Resume',
    },
    Education: {
        itmo: {
            position: 'Bachelor',
            place: 'ITMO University',
            stack: 'Lasers in info-communicational systems',
            thesis: ': Development of the receiving part of the uplink communication channel using Li-Fi technology. Used LaTeX for writing and Python for plotting and calculations.',
            link: 'Thesis (in Russian)',
        },
        title: 'Education',
    },
    Experience: {
        title: 'Experience',
        sbermarket:
            'Took part in the development of the Android app: new features, bug-fixing; code-review with the team; took part in making the decisions regarding development.',
        sixhands: {
            // eslint-disable-next-line quotes
            text: "I've done the whole development cycle: layout, business-logic, building and signing, sending to tests (TestFlight), uploading to the store (AppStore, Google Play Store). Some of the things I've worked with:",
            bt: 'BlueTooth LE — connecting to accessories via BT, read, write, subscribe to notifications',
            notifications:
                'Local and remote push notifications — Firebase Cloud Messaging',
            firebase:
                'Designing and using Firebase Cloud Firestore, Cloud Storage, Dynamic Links for the apps without backend',
            camera: 'Face recognition, 2D face effects',
            maps: 'Maps (Google, Yandex), clustering, creating and editing markers, polygons and lines',
            payments: 'Accepting payments via CloudPayments, YooKassa; IAP',
            animations: 'Smooth (60+ FPS) element animations',
        },
        tabby: 'Taking part in the development of the customer app: own, discuss, build and deploy the new features, squash bugs, partake in code review, write tests.',
    },
};
