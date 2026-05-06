import en from './en';
import nl from './nl';
import fy from './fy';

export type Lang = 'en' | 'nl' | 'fy';

export const languages: Record<Lang, { label: string; name: string; htmlLang: string }> = {
  en: { label: 'EN', name: 'English',    htmlLang: 'en' },
  nl: { label: 'NL', name: 'Nederlands', htmlLang: 'nl' },
  fy: { label: 'FY', name: 'Frysk',      htmlLang: 'fy' },
};

// Only these languages appear in the UI switcher. Frisian is kept available
// at /fy/* but hidden from the switcher by default.
export const visibleLanguages: Lang[] = ['en', 'nl'];

export const defaultLang: Lang = 'en';

const translations = { en, nl, fy } as const;

export function t(lang: Lang) {
  return translations[lang];
}

/** Convert a pathname + current lang to the same page in a different lang */
export function localizedPath(pathname: string, targetLang: Lang): string {
  let clean = pathname;
  for (const l of (['nl', 'fy'] as const)) {
    if (clean === `/${l}` || clean === `/${l}/`) { clean = '/'; break; }
    if (clean.startsWith(`/${l}/`))              { clean = clean.slice(l.length + 1); break; }
  }
  if (targetLang === 'en') return clean;
  return clean === '/' ? `/${targetLang}` : `/${targetLang}${clean}`;
}
