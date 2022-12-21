import { Gender } from 'modules/common/model';

export interface IVisit {
  _id?: String;
  date: Date;
  diagnosis: String;
  treatment?: String;
  description?: String;
}

export interface IPatient {
  _id?: String;
  name: String;
  rank: String;
  unit: String;
  visits: Array<IVisit>;
  birthday: Date | String;
  email?: String;
  phone: String;
  gender?: Gender;
}
