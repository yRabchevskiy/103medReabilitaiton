import { IPatient } from './model';
import patients from './schema';

export default class PatientService {
  
  public getPatients(callback: any) {
    patients.find(callback);
  }
  
  public createPatient(patient_params: IPatient, callback: any) {
    const _session = new patients(patient_params);
    _session.save(callback);
  }

  // public filterUser(query: any, callback: any) {
  //   users.findOne(query, callback);
  // }

  // public updateUser(user_params: IUser, callback: any) {
  //   const query = { _id: user_params._id };
  //   users.findOneAndUpdate(query, user_params, callback);
  // }

  // public deleteUser(_id: String, callback: any) {
  //   const query = { _id: _id };
  //   users.deleteOne(query, callback);
  // }

}