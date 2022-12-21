import { Request, Response } from 'express';
import { insufficientParameters, mongoError, successResponse, failureResponse } from '../modules/common/service';
import PatientService from '../modules/patient/service';
import { IPatient } from '../modules/patient/model';

export class PatientController {

  private patient_service: PatientService = new PatientService();
  
  public get_patient(req: Request, res: Response) {
    this.patient_service.getPatients((err: any, users: IPatient[]) => {
      if (err) {
        mongoError(err, res);
      } else {
        successResponse('get users successfull', users, res);
      }
    });
  }

  public create_patient(req: Request, res: Response) {
    // this check whether all the filds were send through the erquest or not
    if (req.body) {
      const { name, rank, unit, birthday, phone, email, gender, visits } = req.body;
      const user_params: IPatient = {
        name: name,
        rank: rank,
        unit: unit,
        birthday: birthday || new Date(Date.now()).toISOString(),
        email: email || null,
        phone: phone,
        gender: gender || 'Male',
        visits: [...visits],
      };
      this.patient_service.createPatient(user_params, (err: any, data: IPatient) => {
        if (err) {
          mongoError(err, res);
        } else {
          successResponse('create user successfull', data, res);
        }
      });
    } else {
      // error response if some fields are missing in request body
      insufficientParameters(res);
    }
  }
 
}