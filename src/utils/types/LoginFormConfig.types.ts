import {LoginFields} from "../constants/loginFields.ts";

interface LoginFormConfigTypes {
  name: LoginFields,
  type: string,
  placeholder: string
  key: string
}

export default LoginFormConfigTypes;