import { locales as allLocales } from "@/i18n";
import { formatLocale } from "@/utils/strings";

export function createLocalizedUrlObject(
  urlFunc: (locale: Locale) => string,
  locales: Locale[] = [...allLocales],
): Record<string, string> {
  return locales.reduce<Record<string, string>>((obj, locale) => {
    obj[formatLocale(locale)] = urlFunc(locale);
    return obj;
  }, {});
}
