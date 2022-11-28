import { Request, Response } from 'express';
import { insufficientParameters, mongoError, successResponse, failureResponse } from '../modules/common/service';
import { IUser, Role } from '../modules/user/model';
import UserService from '../modules/user/service';

export class UserController {

  private user_service: UserService = new UserService();

  public get_users(req: Request, res: Response) {
    this.user_service.getUsers((err: any, users: IUser[]) => {
      if (err) {
        mongoError(err, res);
      } else {
        successResponse('get users successfull', users, res);
      }
    });
  }
  public create_user(req: Request, res: Response) {
    // this check whether all the filds were send through the erquest or not
    if (req.body) {
      const { name, birthday, phone, email, permision, gender, authData } = req.body;
      const user_params: IUser = {
        name: {
          first_name: name.first_name,
          last_name: name.last_name
        },
        birthday: birthday || new Date(Date.now()).toISOString(),
        email: email || null,
        phone: phone,
        gender: gender || 'Male',
        permision: permision || Role.Staff,
        authData: {
          login: authData.login,
          password: authData.password
        },
        is_deleted: false,
      };
      this.user_service.createUser(user_params, (err: any, data: IUser) => {
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

  public get_user(req: Request, res: Response) {
    if (req.params.id) {
      const user_filter = { _id: req.params.id };
      this.user_service.filterUser(user_filter, (err: any, data: IUser) => {
        if (err) {
          mongoError(err, res);
        } else {
          successResponse('get user successfull', data, res);
        }
      });
    } else {
      insufficientParameters(res);
    }
  }

  public update_user(req: Request, res: Response) {
    if (req.params.id &&
      req.body.name || req.body.name.first_name || req.body.name.last_name ||
      req.body.email ||
      req.body.phone ||
      req.body.gender) {
      const user_filter = { _id: req.params.id };
      this.user_service.filterUser(user_filter, (err: any, data: IUser) => {
        if (err) {
          mongoError(err, res);
        } else if (data) {
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
        } else {
          failureResponse('invalid user', null, res);
        }
      });
    } else {
      insufficientParameters(res);
    }
  }

  public delete_user(req: Request, res: Response) {
    if (req.params.id) {
      this.user_service.deleteUser(req.params.id, (err: any, delete_details) => {
        if (err) {
          mongoError(err, res);
        } else if (delete_details.deletedCount !== 0) {
          successResponse('delete user successfull', null, res);
        } else {
          failureResponse('invalid user', null, res);
        }
      });
    } else {
      insufficientParameters(res);
    }
  }

  public login(req: Request, res: Response) {
    if (req.body.login && req.body.password) {
      console.log(req.body);
      this.user_service.loginUser({ $and: [{ "authData.login": req.body.login }, { "authData.password": req.body.password } ]}, (err: any, data: IUser) => {
        if (err) {
          mongoError(err, res);
        } else if (!data) {
          failureResponse('Invalid login or password', null, res);
        } else {
          const _obj = JSON.parse(JSON.stringify(data));
          delete _obj.authData;
          successResponse('get user successfull', _obj, res);
        }
      });
    } else {
      insufficientParameters(res);
    }
  }

  public logout(req: Request, res: Response) {
    successResponse('logout successfull', {}, res);
  }
}