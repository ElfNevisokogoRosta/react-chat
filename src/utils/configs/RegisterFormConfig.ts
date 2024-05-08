import { FormConfigTypes } from '../types';
import { RegisterFields } from '../constants/registerFields.ts';

const registerFormConfig: FormConfigTypes<RegisterFields>[] = [
  {
    tag: 'input',
    name: 'username',
    placeholder: 'Enter username',
    label: 'Username',
    type: 'text',
  },
  {
    tag: 'input',
    name: 'email',
    placeholder: 'Enter email',
    label: 'Email',
    type: 'text',
  },
  {
    tag: 'input',
    name: 'password',
    placeholder: 'Enter password',
    label: 'Password',
    type: 'password',
  },
  {
    tag: 'input',
    name: 'confirmPassword',
    placeholder: 'Enter confirm password',
    label: 'Confirm password',
    type: 'password',
  },
];
export default registerFormConfig;
