import { axiosRequest } from '../api/apiAxios.ts';
import { useQuery } from '@tanstack/react-query';

const getUser = async () => {
  return await axiosRequest
    .get(`/user`)
    .then((res) => res.data)
    .catch((e) => {
      throw e;
    });
};

export const useGetUser = () => {
  return useQuery({
    queryFn: getUser,
    queryKey: ['user'],
  });
};

export default useGetUser;
