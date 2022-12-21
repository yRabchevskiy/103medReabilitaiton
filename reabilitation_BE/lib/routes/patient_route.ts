import { PatientController } from './../controller/patientController';
import { Application, Request, Response } from 'express';

export class PatientRoutes {

  private patient_controller: PatientController = new PatientController();

  public route(app: Application) {

    app.post('/api/patient', (req: Request, res: Response) => {
      this.patient_controller.create_patient(req, res);
    });

    app.get('/api/patients', (req: Request, res: Response) => {
      this.patient_controller.get_patient(req, res);
    });

    // app.get('/api/user/:id', (req: Request, res: Response) => {
    //   this.user_controller.get_user(req, res);
    // });

    // app.put('/api/user/:id', (req: Request, res: Response) => {
    //   this.user_controller.update_user(req, res);
    // });

    // app.delete('/api/user/:id', (req: Request, res: Response) => {
    //   this.user_controller.delete_user(req, res);
    // });

    // app.post('/api/login', (req: Request, res: Response) => {
    //   this.user_controller.login(req, res);
    // });

    // app.post('/api/logout', (req: Request, res: Response) => {
    //   this.user_controller.logout(req, res);
    // });

  }
}