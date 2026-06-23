import zh from './zh.json';
import en from './en.json';

const dictionaries = { zh, en } as const;

export type Locale = keyof typeof dictionaries;
export const locales: Locale[] = ['zh', 'en'];
export const defaultLocale: Locale = 'zh';

/**
 * Returns a translator function `t('nav.home')` bound to a locale.
 * Falls back to the key itself if a string is missing, so a missing
 * translation is visible (not a silent blank) during development.
 */
export function useTranslations(locale: Locale) {
  const dict = dictionaries[locale] ?? dictionaries[defaultLocale];
  return function t(key: string): string {
    return (dict as Record<string, string>)[key] ?? key;
  };
}

/** Build a localized path. zh (default) has no prefix; others get /<locale>/. */
export function localizedPath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return clean === '/' ? '/' : clean;
  return `/${locale}${clean === '/' ? '' : clean}`;
}
