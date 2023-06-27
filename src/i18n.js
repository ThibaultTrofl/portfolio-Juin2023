import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import global_en from "./languages/en/global.json";
import global_fr from "./languages/fr/global.json";

const resources = {
  en: global_en,
  fr: global_fr,
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: "fr",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    resources,
  });

export default i18n;
