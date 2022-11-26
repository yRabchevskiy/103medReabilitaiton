export interface IUser {
  _id?: string;
  name: {
    first_Name: string,
    last_Name: string,
  };
  birthday: Date;
  phone: string;
  email?: string;
  
}