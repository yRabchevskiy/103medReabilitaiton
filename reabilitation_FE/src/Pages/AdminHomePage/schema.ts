import * as Yup from 'yup';
import { Gender, Role } from '../../Api/models/admin_models';

const schema = Yup.object().shape({
  name: Yup.object({
    first_name: Yup.string().required('First name is reqired'),
    last_name: Yup.string().required('Last name is required')
  }).required(),
  email: Yup.string().email().notRequired(),
  birthday: Yup.string().notRequired(),
  phone: Yup.string().required("Email is required"),
  permision: Yup.string().required().oneOf([Role.Admin, Role.Doctor, Role.Staff], "Role is invalid"),
  gender: Yup.string().oneOf([Gender.Male, Gender.Famele], "Gender is invalid"),
  authData: Yup.object({
    login: Yup.string().required('Login is required'),
    password: Yup.string().required("Password is required")
  }).required()
}).required();

export default schema;