"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("./schema");
class PatientService {
    getPatients(callback) {
        schema_1.default.find(callback);
    }
    createPatient(patient_params, callback) {
        const _session = new schema_1.default(patient_params);
        _session.save(callback);
    }
}
exports.default = PatientService;
