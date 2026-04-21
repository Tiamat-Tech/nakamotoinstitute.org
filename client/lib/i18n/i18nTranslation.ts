import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { cache } from "react";
import { initReactI18next } from "react-i18next/initReactI18next";
import "server-only";

import { getOptions } from "./settings";

const initI18next = async (locale: Locale) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`../../locales/${language}/${namespace}.json`),
      ),
    )
    .init(getOptions(locale, "common"));
  return i18nInstance;
};

export const i18nTranslation = cache(async (locale: Locale) => {
  const i18nextInstance = await initI18next(locale);
  return {
    t: i18nextInstance.getFixedT(locale, "common"),
    i18n: i18nextInstance,
  };
});
