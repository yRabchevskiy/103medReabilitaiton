export interface ILanguage {
  _id: string;
  name: String;
  title: String;
  description: String;
  keys: ILanguageKeys[];
  isDefault: Boolean;
}

export interface ILanguageKeys {
  languageId: String;
  key: String;
  value: String;
}
