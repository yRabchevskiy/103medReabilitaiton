import { Gender } from "modules/common/model";

export interface IAuthData {
  login: String;
  password: String;
}

export enum Role {
  Admin = 'Admin',
  Staff = 'Staff',
  Doctor = 'Doctor',
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
