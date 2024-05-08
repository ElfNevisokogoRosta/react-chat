import { FormConfigTypes } from '../types';
import { LoginFields } from '../constants/loginFields.ts';

const loginFormConfig: FormConfigTypes<LoginFields>[] = [
  {
    tag: 'input',
    name: 'email',
    placeholder: 'Email',
    label: 'Email',
    type: 'text',
  },
  {
    tag: 'input',
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    label: 'Password',
  },
];
export default loginFormConfig;
