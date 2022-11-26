export interface ILanguage {
  _id?: String;
  name: String;
  title: String;
  description: String;
  isDefault: Boolean;
}

export interface IKeyGroup {
  _id?: String;
  name: String;
}

export interface IKey {
  _id?: String;
  name: String;
  keyGroupId: String;
}

export interface IMessage {
  keyId: String;  // IKey _id
  languageId: String; // ILanguage _id
  value: String;
}