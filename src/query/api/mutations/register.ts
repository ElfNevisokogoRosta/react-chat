import { axiosRequest } from '../apiAxios.ts';
import { useMutation } from '@tanstack/react-query';

interface RegisterData {
  email: string;
  password: string;
  username: string;
}

const registerUser = async (data: RegisterData) => {
  return await axiosRequest
    .post('/auth/register', data)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

const useRegisterUser = () => {
  return useMutation({
    mutationFn: registerUser,
    mutationKey: ['user'],
  });
};
export default useRegisterUser;
