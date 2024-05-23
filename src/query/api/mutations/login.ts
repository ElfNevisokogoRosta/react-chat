import { LoginFormTypes } from '../../../utils/types';
import { axiosRequest } from '../apiAxios.ts';
import { useMutation } from '@tanstack/react-query';

const loginUser = async (data: LoginFormTypes) => {
  return await axiosRequest
    .post('auth/login', data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
const useLoginUser = () => {
  return useMutation({
    mutationFn: loginUser,
    mutationKey: ['user'],
  });
};
export default useLoginUser;
