import { ILanguage } from './model';
import language from './language_schema';

export default class LanguageService {

  public getLanguages(callback: any) {
    language.find(callback);
  }

  public getLanguageById(query: any, callback: any) {
    language.findOne(query, callback);
  }
  
  public addLanguage(data: ILanguage, callback: any) {
    const _session = new language(data);
    _session.save(callback);
  }

  // public filterUser(query: any, callback: any) {
  //   users.findOne(query, callback);
  // }

  // public updateUser(user_params: IUser, callback: any) {
  //   const query = { _id: user_params._id };
  //   users.findOneAndUpdate(query, user_params, callback);
  // }

  // public deleteUser(_id: String, callback: any) {
  //   const query = { _id: _id };
  //   users.deleteOne(query, callback);
  // }

}