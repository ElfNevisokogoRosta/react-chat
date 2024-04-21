import {LoginFormConfigTypes} from "../types";
import CONSTANTS from "../constants";

const loginFormConfig: LoginFormConfigTypes[] = [
  {
    name: CONSTANTS.LOGIN_FIELDS[0],
    type: 'email',
    placeholder: 'example@example.com',
    key: 'email'
  }, {
    name: CONSTANTS.LOGIN_FIELDS[1],
    type: 'password',
    placeholder: "Password",
    key: 'password'
  }
]
export {loginFormConfig}