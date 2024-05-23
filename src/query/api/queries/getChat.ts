import { axiosRequest } from '../apiAxios.ts';

const getChat = async (chatId: string) => {
  return await axiosRequest
    .get(`/chat/${chatId}`, {})
    .then((res) => res.data)
    .catch((e) => {
      throw e;
    });
};
export default getChat;
