import { locales } from "@/i18n";

declare global {
  type Locale = (typeof locales)[number];
  type LocaleParams<T = object, U = object> = {
    params: Promise<{ locale: Locale } & T>;
  } & U;
}

export {};
