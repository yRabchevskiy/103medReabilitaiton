"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoError = exports.insufficientParameters = exports.failureResponse = exports.successResponse = void 0;
const model_1 = require("./model");
function successResponse(message, data, res) {
    res.status(model_1.response_status_codes.success).json({
        status: 'SUCCESS',
        message,
        data
    });
}
exports.successResponse = successResponse;
function failureResponse(message, data, res) {
    res.status(model_1.response_status_codes.success).json({
        status: 'FAILURE',
        message,
        data
    });
}
exports.failureResponse = failureResponse;
function insufficientParameters(res) {
    res.status(model_1.response_status_codes.bad_request).json({
        status: 'FAILURE',
        message: 'Insufficient parameters',
        data: {}
    });
}
exports.insufficientParameters = insufficientParameters;
function mongoError(err, res) {
    res.status(model_1.response_status_codes.internal_server_error).json({
        status: 'FAILURE',
        message: 'MongoDB error',
        data: err
    });
}
exports.mongoError = mongoError;
