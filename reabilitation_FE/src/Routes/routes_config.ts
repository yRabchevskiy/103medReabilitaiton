import { INavigateSettings, INavigateSettingsItem } from "./model";

export interface AdminLinks extends INavigateSettings {
  main: INavigateSettingsItem;
  users: INavigateSettingsItem;
}
export const admin_links: INavigateSettings = {
  main: { path: '/admin', name: 'Home' },
  users: { path: 'users', name: 'Users' }
};

export interface StaffLinks extends INavigateSettings {
  main: INavigateSettingsItem;
  patients: INavigateSettingsItem;
}
export const staff_links: INavigateSettings = {
  main: { path: '/home', name: 'Home' },
  patients: { path: 'patients', name: 'Patients' }
};

export interface GeneralLinks extends INavigateSettings {
  login: INavigateSettingsItem;
  unknown: INavigateSettingsItem;
}
export const general_links: INavigateSettings = {
  login: { path: '/login', name: '' },
  unknown: { path: '*', name: '' }
};