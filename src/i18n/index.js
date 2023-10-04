// ** I18n Imports
import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// ** Languages Imports
const en = new URL("./en.json", import.meta.url).href;
const fr = new URL("./fr.json", import.meta.url).href;

const languages = {
  en,
  fr,
};

i18n

  // Enables the i18next backend
  .use(Backend)

  // Enable automatic language detection
  .use(LanguageDetector)

  // Enables the hook initialization module
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem("i18nextLng") ?? "en",
    backend: {
      /* translation file path */
      loadPath: (lng) => languages[lng],
    },
    fallbackLng: "en",
    debug: false,
    keySeparator: false,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },
  });

export default i18n;
