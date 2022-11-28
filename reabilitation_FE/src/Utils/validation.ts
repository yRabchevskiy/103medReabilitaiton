import { jsonClone } from "./common";

export interface IObjectError {
  [key: string]: string;
}
export const validationUserForm = (errors: IObjectError, data: any, key: string, message?: string): IObjectError => {
  let _err: IObjectError = {};
  if (!data[key]) {
    _err = jsonClone(errors);
    _err[key] = message || 'Incorrect value';
    return _err;
  }
  _err = jsonClone(errors);
  delete _err[key];
  if (!Object.keys(_err).length) return {};
  return _err;
}