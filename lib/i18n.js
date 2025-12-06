import translations from '@/src/locales/translations.json';

export function t(lang, key) {
    return translations[lang]?.[key] || key;
}
