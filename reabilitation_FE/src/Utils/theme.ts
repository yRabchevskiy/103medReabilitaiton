import { ReabilitationKeys } from "./local_storage";

export interface IThemeValue {
  [key: string]: string;
}
export interface ITheme {
  dark: IThemeValue;
  light: IThemeValue;
}

export enum Themes {
  DARK = 'dark',
  LIGHT = 'light',
}
export const APP_THEME: ITheme = {
  light: {
    '--appBg': '#FFFFFF',
    '--logoFormBg': 'rgba(255, 255, 255, 0.4)',
    '--navBg': '#F3F6FC', //'#CBD2DC',
    '--textPrimary': '#000000',
  },
  dark: {
    '--appBg': 'black',
    '--logoFormBg': 'rgba(255, 255, 255, 0.4)',
    '--navBg': '#F3F6FC', //'#CBD2DC',
    '--textPrimary': '#ffffff',
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