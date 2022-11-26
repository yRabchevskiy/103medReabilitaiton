export interface IPermision {
  role: Role;
}

export enum Role {
  Admin = 'Admin',
  Staff = 'Staff',
  Doctor = 'Doctor',
}

export interface IUser {
  _id?: string;
  name: {
    first_Name: string,
    last_Name: string,
  };
  birthday: Date;
  phone: string;
  email?: string;
  permision: IPermision;  
}