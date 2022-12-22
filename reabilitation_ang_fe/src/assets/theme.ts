import { ReabilitationKeys } from "src/app/utils/localStorage";

export interface IThemeValue {
  [key: string]: string;
}
export interface ITheme {
  DARK: IThemeValue;
  LIGHT: IThemeValue;
  // PURPLE: IThemeValue;
}

export enum Themes {
  DARK = 'DARK',
  LIGHT = 'LIGHT',
  // PURPLE = 'PURPLE'
}

export const APP_THEME: ITheme = {
  LIGHT: {
    '--app-primary': '#ffffff',
    '--app-p-light': '#fafafa',
    '--app-p-dark': '#ffffff',
    '--app-secondary': '#f4ff81',
    '--app-s-light': '#ffffb3',
    '--app-s-dark': '#bfcc50',
    '--app-p-text': '#000000',
    '--app-s-text': '#000000',
    '--app-box-shadow-color': 'rgb(0 0 0 / 16%)',
    '--app-icon-color': '#000000',
    '--app-input-color': '#c7c7c7',
    '--app-input-active-color': '#000000',
    '--app-error': 'red'
  },
  DARK: {
    '--app-primary': '#212121',
    '--app-p-light': '#515151',
    '--app-p-dark': '#3e3d46',
    '--app-secondary': '#f4ff81',
    '--app-s-light': '#ffffb3',
    '--app-s-dark': '#bfcc50',
    '--app-p-text': '#ffffff',
    '--app-s-text': '#000000',
    '--app-box-shadow-color': 'rgb(255, 255, 255 / 16%)',
    '--app-icon-color': '#ffffff',
    '--app-input-color': '#c7c7c7',
    '--app-input-active-color': '#3e3d46',
    '--app-error': 'red'
  },
  // PURPLE: {
  //   '--app-primary': '#d500f9',
  //   '--app-p-light': '#fafafa',
  //   '--app-p-dark': '#f5f5f5',
  //   '--app-secondary': '#f4ff81',
  //   '--app-s-light': '#ffffb3',
  //   '--app-s-dark': '#bfcc50',
  //   '--app-p-text': '#fafafa',
  //   '--app-s-text': '#000000',
  //   '--app-box-shadow-color': 'rgb(0 0 0 / 16%)',
  //   '--app-icon-color': '#fafafa',
  //   '--app-input-color': '#c7c7c7',
  //   '--app-input-active-color': '#f4ff81',
  //   '--app-error': 'red'
  // },
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
  localStorage.setItem(ReabilitationKeys.THEME, _theme);
  Object.keys(theme).forEach(it => {
    appStyle.setProperty(it, theme[it]);
  });
};