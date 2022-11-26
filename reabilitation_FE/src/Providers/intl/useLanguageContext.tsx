import React from 'react';
import { ILocale, LOCALES, LOCALSTORAGE_LOCALES_KEY } from './locales';

export interface LanguageContextType {
  selectedLanguage: ILocale;
  onSetLanguage: (value: ILocale) => void;
}

const getInitLang = (): ILocale => {
  const lang = localStorage.getItem(LOCALSTORAGE_LOCALES_KEY);
  if (!lang || !LOCALES[lang]) { return LOCALES.EN; }
  return LOCALES[lang];
};

export function useLanguageDataContext(): LanguageContextType {
  const [selectedLanguage, setLanguage] = React.useState<ILocale>(getInitLang());

  const onSetLanguage = (value: ILocale) => {
    const lang = localStorage.getItem(LOCALSTORAGE_LOCALES_KEY);
    const _value = value || LOCALES.EN;
    if (!lang || (lang && lang !== _value.key)) {
      localStorage.setItem(LOCALSTORAGE_LOCALES_KEY, _value.key);
    }
    setLanguage(_value);
  };

  return {
    selectedLanguage,
    onSetLanguage,
  };
}