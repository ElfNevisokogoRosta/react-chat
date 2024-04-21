import {axiosRequest} from "../apiAxios.ts";
import {RegisterFormTypes} from "../../../utils/types";

const registerUser = async (data: RegisterFormTypes) => {
  return await axiosRequest.post('users/register', {data}).then((res) => {
    res.data
  }).catch((err) => {
    err.message
  })
}
export default registerUser