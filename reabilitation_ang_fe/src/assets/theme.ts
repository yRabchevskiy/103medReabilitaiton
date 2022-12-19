import { ReabilitationKeys } from "src/app/utils/localStorage";

export interface IThemeValue {
  [key: string]: string;
}
export interface ITheme {
  DARK: IThemeValue;
  LIGHT: IThemeValue;
  PURPLE: IThemeValue;
}

export enum Themes {
  DARK = 'DARK',
  LIGHT = 'LIGHT',
  PURPLE = 'PURPLE'
}

export const APP_THEME: ITheme = {
  LIGHT: {
    '--app-primary': '#fafafa',
    '--app-p-light': '#ffffff',
    '--app-p-dark': '#c2c2c2',
    '--app-secondary': '#f4ff81',
    '--app-s-light': '#ffffb3',
    '--app-s-dark': '#bfcc50',
    '--app-p-text': '#000000',
    '--app-s-text': '#000000',
    '--app-box-shadow-color': 'rgb(0 0 0 / 16%)',
    '--app-icon-color': '#000000'
  },
  DARK: {
    '--app-primary': '#212121',
    '--app-p-light': '#F5F5F6',
    '--app-p-dark': '#E1E2E1',
    '--app-secondary': '#f4ff81',
    '--app-s-light': '#ffffb3',
    '--app-s-dark': '#bfcc50',
    '--app-p-text': '#ffffff',
    '--app-s-text': '#000000',
    '--app-box-shadow-color': 'rgb(0 0 0 / 16%)',
    '--app-icon-color': '#ffffff'
  },
  PURPLE: {
    '--app-primary': '#d500f9',
    '--app-p-light': '#fafafa',
    '--app-p-dark': '#f5f5f5',
    '--app-secondary': '#f4ff81',
    '--app-s-light': '#ffffb3',
    '--app-s-dark': '#bfcc50',
    '--app-p-text': '#fafafa',
    '--app-s-text': '#000000',
    '--app-box-shadow-color': 'rgb(0 0 0 / 16%)',
    '--app-icon-color': '#fafafa'
  },
};
export const onSetupAppTheme = (theme?: Themes) => {
  let themeName = theme || localStorage.getItem(ReabilitationKeys.THEME) || Themes.LIGHT;
  if (!themeName || themeName === 'null') {
    themeName = Themes.LIGHT;
  }
  onApplyAppTheme(themeName);
};

export const onApplyAppTheme = (_theme: string) => {
  const theme: IThemeValue = APP_THEME[_theme as Themes];
  const appStyle = document.documentElement.style;
  Object.keys(theme).forEach(it => {
    appStyle.setProperty(it, theme[it]);
  });
};