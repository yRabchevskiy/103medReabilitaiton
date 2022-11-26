"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const service_1 = require("../modules/common/service");
const service_2 = require("../modules/user/service");
class UserController {
    constructor() {
        this.user_service = new service_2.default();
    }
    get_users(req, res) {
        this.user_service.getUsers((err, users) => {
            if (err) {
                (0, service_1.mongoError)(err, res);
            }
            else {
                (0, service_1.successResponse)('get users successfull', users, res);
            }
        });
    }
    create_user(req, res) {
        // this check whether all the filds were send through the erquest or not
        if (req.body.name && req.body.name.first_name && req.body.name.middle_name && req.body.name.last_name &&
            req.body.email &&
            req.body.phone_number &&
            req.body.gender) {
            const user_params = {
                name: {
                    first_name: req.body.name.first_name,
                    middle_name: req.body.name.middle_name,
                    last_name: req.body.name.last_name
                },
                email: req.body.email,
                phone_number: req.body.phone_number,
                gender: req.body.gender,
                modification_notes: [{
                        modified_on: new Date(Date.now()),
                        modified_by: null,
                        modification_note: 'New user created'
                    }]
            };
            this.user_service.createUser(user_params, (err, user_data) => {
                if (err) {
                    (0, service_1.mongoError)(err, res);
                }
                else {
                    (0, service_1.successResponse)('create user successfull', user_data, res);
                }
            });
        }
        else {
            // error response if some fields are missing in request body
            (0, service_1.insufficientParameters)(res);
        }
    }
    get_user(req, res) {
        if (req.params.id) {
            const user_filter = { _id: req.params.id };
            this.user_service.filterUser(user_filter, (err, user_data) => {
                if (err) {
                    (0, service_1.mongoError)(err, res);
                }
                else {
                    (0, service_1.successResponse)('get user successfull', user_data, res);
                }
            });
        }
        else {
            (0, service_1.insufficientParameters)(res);
        }
    }
    update_user(req, res) {
        if (req.params.id &&
            req.body.name || req.body.name.first_name || req.body.name.middle_name || req.body.name.last_name ||
            req.body.email ||
            req.body.phone_number ||
            req.body.gender) {
            const user_filter = { _id: req.params.id };
            this.user_service.filterUser(user_filter, (err, user_data) => {
                if (err) {
                    (0, service_1.mongoError)(err, res);
                }
                else if (user_data) {
                    user_data.modification_notes.push({
                        modified_on: new Date(Date.now()),
                        modified_by: null,
                        modification_note: 'User data updated'
                    });
                    const user_params = {
                        _id: req.params.id,
                        name: req.body.name ? {
                            first_name: req.body.name.first_name ? req.body.name.first_name : user_data.name.first_name,
                            middle_name: req.body.name.first_name ? req.body.name.middle_name : user_data.name.middle_name,
                            last_name: req.body.name.first_name ? req.body.name.last_name : user_data.name.last_name
                        } : user_data.name,
                        email: req.body.email ? req.body.email : user_data.email,
                        phone_number: req.body.phone_number ? req.body.phone_number : user_data.phone_number,
                        gender: req.body.gender ? req.body.gender : user_data.gender,
                        is_deleted: req.body.is_deleted ? req.body.is_deleted : user_data.is_deleted,
                        modification_notes: user_data.modification_notes
                    };
                    this.user_service.updateUser(user_params, (err) => {
                        if (err) {
                            (0, service_1.mongoError)(err, res);
                        }
                        else {
                            (0, service_1.successResponse)('update user successfull', null, res);
                        }
                    });
                }
                else {
                    (0, service_1.failureResponse)('invalid user', null, res);
                }
            });
        }
        else {
            (0, service_1.insufficientParameters)(res);
        }
    }
    delete_user(req, res) {
        if (req.params.id) {
            this.user_service.deleteUser(req.params.id, (err, delete_details) => {
                if (err) {
                    (0, service_1.mongoError)(err, res);
                }
                else if (delete_details.deletedCount !== 0) {
                    (0, service_1.successResponse)('delete user successfull', null, res);
                }
                else {
                    (0, service_1.failureResponse)('invalid user', null, res);
                }
            });
        }
        else {
            (0, service_1.insufficientParameters)(res);
        }
    }
}
exports.UserController = UserController;
