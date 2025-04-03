import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import LoadLocales from '@utils/locales';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    load: 'languageOnly',
    detection: {
      order: ['queryString', 'navigator'],
      lookupFromPathIndex: 0,
      lookupQuerystring: 'lng',
      lookupCookie: 'meine_nanny_i18next',
    },
    defaultNS: 'translations',
    resources: LoadLocales(),
    preload: ['es'],
    fallbackLng: ['es', 'dev'],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;