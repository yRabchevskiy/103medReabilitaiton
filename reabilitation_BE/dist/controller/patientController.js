"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientController = void 0;
const service_1 = require("../modules/common/service");
const service_2 = require("../modules/patient/service");
class PatientController {
    constructor() {
        this.patient_service = new service_2.default();
    }
    get_patient(req, res) {
        this.patient_service.getPatients((err, users) => {
            if (err) {
                (0, service_1.mongoError)(err, res);
            }
            else {
                (0, service_1.successResponse)('get users successfull', users, res);
            }
        });
    }
    create_patient(req, res) {
        // this check whether all the filds were send through the erquest or not
        if (req.body) {
            const { name, rank, unit, birthday, phone, email, gender, visits } = req.body;
            const user_params = {
                name: name,
                rank: rank,
                unit: unit,
                birthday: birthday || new Date(Date.now()).toISOString(),
                email: email || null,
                phone: phone,
                gender: gender || 'Male',
                visits: [...visits],
            };
            this.patient_service.createPatient(user_params, (err, data) => {
                if (err) {
                    (0, service_1.mongoError)(err, res);
                }
                else {
                    (0, service_1.successResponse)('create user successfull', data, res);
                }
            });
        }
        else {
            // error response if some fields are missing in request body
            (0, service_1.insufficientParameters)(res);
        }
    }
}
exports.PatientController = PatientController;
