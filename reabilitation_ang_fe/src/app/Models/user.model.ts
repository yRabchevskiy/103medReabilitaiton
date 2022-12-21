export enum Role {
  Admin = 'Admin',
  Staff = 'Staff',
  Doctor = 'Doctor',
}

export enum Gender {
  Male = 'Male',
  Famele = 'Famele'
}

export interface IAuthData {
  login: String;
  password: String;
}

export interface IName {
  first_name: string;
  last_name: string;
}
export interface IUser {
  _id?: string;
  name: IName;
  birthday?: Date;
  phone?: string;
  email: string;
  permision: Role;
  gender?: Gender;
  is_deleted?: Boolean;
  authData: IAuthData;
}