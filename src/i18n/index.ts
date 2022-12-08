import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en } from './en';
import { ru } from './ru';

void i18n.use(initReactI18next).init({
    fallbackLng: 'en',
    debug: true,
    resources: { en: { translation: en }, ru: { translation: ru } },
});

export default i18n;
