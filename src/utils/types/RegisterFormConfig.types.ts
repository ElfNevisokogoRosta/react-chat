import {RegisterFields} from "../constants/registerFields.ts";

interface RegisterFormConfigTypes {
  name: RegisterFields,
  type: string,
  placeholder: string,
  key: string
}

export default RegisterFormConfigTypes;