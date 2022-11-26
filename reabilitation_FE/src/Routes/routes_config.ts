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
  main: { path: '/', name: 'Home' },
  patients: { path: 'patients', name: 'Patients' }
};