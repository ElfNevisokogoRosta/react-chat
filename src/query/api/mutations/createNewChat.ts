import { axiosRequest } from '../apiAxios.ts';
import { useMutation } from '@tanstack/react-query';
import { StorageValue } from '../../../utils/hooks/useLocalStorage.tsx';

interface CreateNewChatData {
  chat_name?: string;
  members: number[];
  created_at: string;
}

const createNewChat = async ({
  data,
  token,
}: {
  data: CreateNewChatData;
  token: StorageValue;
}) => {
  return await axiosRequest
    .post('/chat', data, {
      headers: { Authorization: `Bearer ${token}` },
    })
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
