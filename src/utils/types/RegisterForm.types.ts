import { RegisterFields } from '../constants/registerFields.ts';

type RegisterFormTypes = {
  [key in RegisterFields]: string;
};
export default RegisterFormTypes;
