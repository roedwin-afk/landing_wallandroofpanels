import { en } from './en';
import { es } from './es';

export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export function getLang(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return first === 'es' ? 'es' : 'en';
}

export function useTranslations(lang: Lang) {
  return lang === 'es' ? es : en;
}

export function getAlternatePath(url: URL): string {
  const [, first, ...rest] = url.pathname.split('/');
  if (first === 'es') {
    // estamos en español → ir a inglés
    return '/' + rest.join('/');
  } else {
    // estamos en inglés → ir a español
    return '/es/' + [first, ...rest].filter(Boolean).join('/');
  }
}