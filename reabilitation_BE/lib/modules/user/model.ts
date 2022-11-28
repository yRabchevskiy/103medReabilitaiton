
export interface IAuthData {
  login: String;
  password: String;
}

export enum Role {
  Admin = 'Admin',
  Staff = 'Staff',
  Doctor = 'Doctor',
}

export enum Gender {
  Male = 'Male',
  Famele = 'Famele'
}

export interface IUser {
  _id?: String;
  name: {
    first_name: String,
    last_name: String,
  };
  birthday?: Date | string;
  phone?: String;
  email: String;
  permision: Role;
  gender?: Gender;
  is_deleted?: Boolean;
  authData: IAuthData;
}
