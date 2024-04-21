import {RegisterFormConfigTypes} from "../types";
import CONSTANTS from "../constants";


const registerFormConfig: RegisterFormConfigTypes[] = [
  {
    name: CONSTANTS.REGISTER_FIELDS[0],
    type: 'text',
    placeholder: 'Username',
    key: 'name',
  }, {
    name: CONSTANTS.REGISTER_FIELDS[1],
    type: 'email',
    placeholder: 'Email',
    key: 'email'
  }, {
    name: CONSTANTS.REGISTER_FIELDS[2],
    type: 'password',
    placeholder: 'Password',
    key: 'password'
  }, {
    name: CONSTANTS.REGISTER_FIELDS[3],
    type: 'password',
    placeholder: 'Confirm Password',
    key: 'confirmPassword'
  }
]
export {registerFormConfig}