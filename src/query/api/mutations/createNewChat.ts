import { axiosRequest } from '../apiAxios.ts';
import { useMutation } from '@tanstack/react-query';

interface CreateNewChatData {
  chat_name?: string;
  members: number[];
  created_at: string;
}

const createNewChat = async (data: CreateNewChatData) => {
  return await axiosRequest
    .post('/chat', data)
    .then((res) => res.data)
    .catch((e) => {
      throw e;
    });
};

const useCreateNewChat = () => {
  return useMutation({
    mutationFn: createNewChat,
    mutationKey: ['user'],
  });
};
export default useCreateNewChat;
