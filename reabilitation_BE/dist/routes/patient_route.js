"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientRoutes = void 0;
const patientController_1 = require("./../controller/patientController");
class PatientRoutes {
    constructor() {
        this.patient_controller = new patientController_1.PatientController();
    }
    route(app) {
        app.post('/api/patient', (req, res) => {
            this.patient_controller.create_patient(req, res);
        });
        app.get('/api/patients', (req, res) => {
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
exports.PatientRoutes = PatientRoutes;
