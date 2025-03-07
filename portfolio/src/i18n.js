import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HTTPApi from "i18next-http-backend"
import enJSON from '../public/locales/en/en.json'
import esJSON from '../public/locales/es/es.json'
import deJSON from '../public/locales/de/de.json'
import itJSON from '../public/locales/it/it.json'
i18next.use(initReactI18next).use(LanguageDetector).use(HTTPApi).init({
    resources: {
        en: { ...enJSON },
        es: { ...esJSON },
        de: { ...deJSON },
        it: { ...itJSON },
    },
    fallbackLng: 'en', // Se la lingua non è disponibile, usa l'inglese come fallback
    interpolation: {
        escapeValue: false, // Reagisce direttamente ai valori senza bisogno di escape
    },
});

export default i18next;