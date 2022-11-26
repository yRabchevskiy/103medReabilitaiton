export interface INavigateSettings {
  [key: string]: INavigateSettingsItem;
}

export interface INavigateSettingsItem {
  path: string;
  name: string;
}
