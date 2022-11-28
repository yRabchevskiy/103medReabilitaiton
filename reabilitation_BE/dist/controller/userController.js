"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const service_1 = require("../modules/common/service");
const model_1 = require("../modules/user/model");
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
        if (req.body) {
            const { name, birthday, phone, email, permision, gender, authData } = req.body;
            const user_params = {
                name: {
                    first_name: name.first_name,
                    last_name: name.last_name
                },
                birthday: birthday || new Date(Date.now()).toISOString(),
                email: email || null,
                phone: phone,
                gender: gender || 'Male',
                permision: permision || model_1.Role.Staff,
                authData: {
                    login: authData.login,
                    password: authData.password
                },
                is_deleted: false,
            };
            this.user_service.createUser(user_params, (err, data) => {
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
    get_user(req, res) {
        if (req.params.id) {
            const user_filter = { _id: req.params.id };
            this.user_service.filterUser(user_filter, (err, data) => {
                if (err) {
                    (0, service_1.mongoError)(err, res);
                }
                else {
                    (0, service_1.successResponse)('get user successfull', data, res);
                }
            });
        }
        else {
            (0, service_1.insufficientParameters)(res);
        }
    }
    update_user(req, res) {
        if (req.params.id &&
            req.body.name || req.body.name.first_name || req.body.name.last_name ||
            req.body.email ||
            req.body.phone ||
            req.body.gender) {
            const user_filter = { _id: req.params.id };
            this.user_service.filterUser(user_filter, (err, data) => {
                if (err) {
                    (0, service_1.mongoError)(err, res);
                }
                else if (data) {
                    // const user_params: IUser = {
                    //   _id: req.params.id,
                    //   name: req.body.name ? {
                    //     first_name: req.body.name.first_name ? req.body.name.first_name : data.name.first_name,
                    //     last_name: req.body.name.first_name ? req.body.name.last_name : data.name.last_name
                    //   } : data.name,
                    //   email: req.body.email ? req.body.email : data.email,
                    //   phone: req.body.phone ? req.body.phone : data.phone,
                    //   gender: req.body.gender ? req.body.gender : data.gender,
                    //   is_deleted: req.body.is_deleted ? req.body.is_deleted : data.is_deleted,
                    // };
                    // this.user_service.updateUser(user_params, (err: any) => {
                    //   if (err) {
                    //     mongoError(err, res);
                    //   } else {
                    //     successResponse('update user successfull', null, res);
                    //   }
                    // });
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
    login(req, res) {
        if (req.body.login && req.body.password) {
            console.log(req.body);
            this.user_service.loginUser({ $and: [{ "authData.login": req.body.login }, { "authData.password": req.body.password }] }, (err, data) => {
                if (err) {
                    (0, service_1.mongoError)(err, res);
                }
                else if (!data) {
                    (0, service_1.failureResponse)('Invalid login or password', null, res);
                }
                else {
                    const _obj = JSON.parse(JSON.stringify(data));
                    delete _obj.authData;
                    (0, service_1.successResponse)('get user successfull', _obj, res);
                }
            });
        }
        else {
            (0, service_1.insufficientParameters)(res);
        }
    }
    logout(req, res) {
        (0, service_1.successResponse)('logout successfull', {}, res);
    }
}
exports.UserController = UserController;
