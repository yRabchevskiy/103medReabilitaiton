import React from 'react';
import { ReabilitationKeys } from '../../Utils/local_storage';
import { onApplyAppTheme, Themes } from '../../Utils/theme';

export interface GeneralContextType {
  theme: Themes;
  onChangeTheme: (_theme: Themes) => void;
}
export function useGeneralContext(): GeneralContextType {
  const [theme, setTheme] = React.useState<Themes>(Themes.LIGHT);

  React.useEffect(() => {
    const themeName = getLocalStorageThemeValue();
    setTheme(themeName);
    onApplyAppTheme(themeName);
  }, []);

  const getLocalStorageThemeValue = (): Themes => {
    let themeName = localStorage.getItem(ReabilitationKeys.THEME);
    if (!themeName || themeName === 'null') {
      return Themes.LIGHT;
    }
    if (themeName === Themes.LIGHT) {
      return Themes.LIGHT;
    }
    if (themeName === Themes.DARK) {
      return Themes.DARK;
    }
    return Themes.LIGHT;
  };

  const onChangeTheme = (_theme: Themes) => {
    if (_theme === theme) return;
    localStorage.setItem(ReabilitationKeys.THEME, _theme);
    onApplyAppTheme(_theme);
    setTheme(_theme);
  };

  return {
    theme,
    onChangeTheme,
  };
}
