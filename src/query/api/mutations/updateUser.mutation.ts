import { axiosRequest } from '../apiAxios.ts';
import { useMutation } from '@tanstack/react-query';
import { UpdateUserDTO } from '../../../utils/types';

const updateUser = async (data: UpdateUserDTO) => {
  return axiosRequest
    .patch(`user`, data)
    .then((res) => res.data)
    .catch((e) => {
      throw e;
    });
};

const useUpdateUserMutation = () => {
  return useMutation({
    mutationFn: updateUser,
    mutationKey: ['user'],
  });
};

export default useUpdateUserMutation;
