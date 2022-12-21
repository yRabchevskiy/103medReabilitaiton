import { Gender } from "./user.model";

export interface IVisit {
  _id?: string;
  date: Date;
  diagnosis: string;
  treatment?: string;
  description?: string;
}

export interface IPatient {
  _id?: string;
  name: string;
  rank: string;
  unit: string;
  visits: IVisit[];
  birthday: Date | string;
  email?: string;
  phone: string;
  gender?: Gender;
}