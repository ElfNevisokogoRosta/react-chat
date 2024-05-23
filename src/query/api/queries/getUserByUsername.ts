import { axiosRequest } from '../apiAxios.ts';

const getUserByUsername = async (username: string) => {
  return await axiosRequest
    .get(`/user/find`, {
      params: { username: username || '' },
    })
    .then((res) => res.data)
    .catch((e) => {
      throw e;
    });
};
export default getUserByUsername;
