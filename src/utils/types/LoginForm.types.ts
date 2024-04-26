import { LoginFields } from '../constants/loginFields.ts';

type LoginFormTypes = {
  [key in LoginFields]: string;
};

export default LoginFormTypes;
