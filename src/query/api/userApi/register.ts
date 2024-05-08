import { axiosRequest } from '../apiAxios.ts';
import { UserRegisterTypes } from '../../../utils/types';

const registerUser = async (data: UserRegisterTypes) => {
  return await axiosRequest
    .post('/user', { ...data })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.message;
    });
};
export default registerUser;
