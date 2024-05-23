import { useMutation } from '@tanstack/react-query';
import { axiosRequest } from '../apiAxios.ts';

const addFriends = async (friends: number[]) => {
  return await axiosRequest.patch('/user/friend', { friends });
};

const useAddFriends = () => {
  return useMutation({
    mutationFn: addFriends,
    mutationKey: ['user', 'friends'],
  });
};

export default useAddFriends;
