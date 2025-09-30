import { translations, Translations } from './translations';

export function useTranslations(locale: string = 'es'): Translations {
  return translations[locale] || translations['es'];
}

export function getAvailableLocales(): string[] {
  return Object.keys(translations);
}

export function isValidLocale(locale: string): boolean {
  return locale in translations;
}
