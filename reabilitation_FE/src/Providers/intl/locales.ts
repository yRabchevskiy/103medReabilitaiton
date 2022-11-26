export interface ILocale {
  key: string;
  name: string;
}
export interface ILocales {
  EN: ILocale;
  [index: string]: ILocale;
}

export const LOCALES: ILocales = {
  EN: {
    key: 'en-US',
    name: 'English'
  },
  UA: {
    key: 'ua-UA',
    name: 'Ukrainian'
  }
}

export const LOCALSTORAGE_LOCALES_KEY: string = 'localization_local';
