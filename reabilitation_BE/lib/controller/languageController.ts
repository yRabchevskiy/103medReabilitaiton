import { ILanguage } from './../modules/language/model';
import { Request, Response } from 'express';
import LanguageService from '../modules/language/service';
import { insufficientParameters, mongoError, successResponse, failureResponse } from '../modules/common/service';

export class LanguageController {

  private language_service: LanguageService = new LanguageService();

  public get_languages(req: Request, res: Response) {
    this.language_service.getLanguages((err: any, data: ILanguage[]) => {
      if (err) {
        mongoError(err, res);
      } else {
        successResponse('get users successfull', data, res);
      }
    });
  }

  public get_language_by_id(req: Request, res: Response) {
    if (req.params.id) {
      const param = { _id: req.params.id };
      this.language_service.getLanguageById(param, (err: any, data: ILanguage) => {
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

  public add_language(req: Request, res: Response) {
    // this check whether all the filds were send through the erquest or not
    if (req.body.name) {
      const lang: ILanguage = {
        name: req.body.name,
        title: req.body.title,
        description: req.body.description,
        isDefault: req.body.isDefault,
      };
      this.language_service.addLanguage(lang, (err: any, data: ILanguage) => {
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

  // public update_user(req: Request, res: Response) {
  //   if (req.params.id &&
  //     req.body.name || req.body.name.first_name || req.body.name.middle_name || req.body.name.last_name ||
  //     req.body.email ||
  //     req.body.phone_number ||
  //     req.body.gender) {
  //     const user_filter = { _id: req.params.id };
  //     this.user_service.filterUser(user_filter, (err: any, user_data: IUser) => {
  //       if (err) {
  //         mongoError(err, res);
  //       } else if (user_data) {
  //         user_data.modification_notes.push({
  //           modified_on: new Date(Date.now()),
  //           modified_by: null,
  //           modification_note: 'User data updated'
  //         });
  //         const user_params: IUser = {
  //           _id: req.params.id,
  //           name: req.body.name ? {
  //             first_name: req.body.name.first_name ? req.body.name.first_name : user_data.name.first_name,
  //             middle_name: req.body.name.first_name ? req.body.name.middle_name : user_data.name.middle_name,
  //             last_name: req.body.name.first_name ? req.body.name.last_name : user_data.name.last_name
  //           } : user_data.name,
  //           email: req.body.email ? req.body.email : user_data.email,
  //           phone_number: req.body.phone_number ? req.body.phone_number : user_data.phone_number,
  //           gender: req.body.gender ? req.body.gender : user_data.gender,
  //           is_deleted: req.body.is_deleted ? req.body.is_deleted : user_data.is_deleted,
  //           modification_notes: user_data.modification_notes
  //         };
  //         this.user_service.updateUser(user_params, (err: any) => {
  //           if (err) {
  //             mongoError(err, res);
  //           } else {
  //             successResponse('update user successfull', null, res);
  //           }
  //         });
  //       } else {
  //         failureResponse('invalid user', null, res);
  //       }
  //     });
  //   } else {
  //     insufficientParameters(res);
  //   }
  // }

  // public delete_user(req: Request, res: Response) {
  //   if (req.params.id) {
  //     this.user_service.deleteUser(req.params.id, (err: any, delete_details) => {
  //       if (err) {
  //         mongoError(err, res);
  //       } else if (delete_details.deletedCount !== 0) {
  //         successResponse('delete user successfull', null, res);
  //       } else {
  //         failureResponse('invalid user', null, res);
  //       }
  //     });
  //   } else {
  //     insufficientParameters(res);
  //   }
  // }
}