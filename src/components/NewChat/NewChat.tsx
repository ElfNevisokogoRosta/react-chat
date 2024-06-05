import { useModal } from '../../context/ModalContext.tsx';
import UserData from '../../utils/types/UserData.ts';
import { ChangeEvent, useState } from 'react';
import BaseButton from '../../UI/BaseButton.tsx';
import useCreateNewChat from '../../query/api/mutations/createNewChat.ts';
import BaseInput from '../../UI/BaseInput.tsx';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import getUserByUsername from '../../query/api/queries/getUserByUsername.ts';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../../context/AuthContext.tsx';

const NewChat = () => {
  const { isUser } = useAuth();
  const [selectedUsers, setSelectedUsers] = useState<UserData[]>([]);
  const [error, setError] = useState<boolean | string>(false);
  const [searchQ, setSearchQ] = useState<string>('');
  const { closeModal } = useModal();
  const { mutate, isError } = useCreateNewChat();
  const [chatName, setChatName] = useState<string>('');
  const chatNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setChatName(e.target.value);
  };
  const handleSearchQ = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQ(e.target.value);
  };
  const onModalClose = () => {
    return closeModal();
  };
  const onCheckBoxChange = (user: UserData) => {
    const isUser = selectedUsers.find((userData) => userData.id === user.id);
    if (isUser) return;
    setSelectedUsers((state) => [...state, user]);
  };
  const { data } = useQuery<UserData[]>({
    queryFn: async () => await getUserByUsername(searchQ),
    queryKey: ['users', searchQ],
    enabled: !!searchQ,
  });
  const removeFromToAdd = (user_id: number) => {
    const updateUser = selectedUsers.filter((user) => user.id !== user_id);
    if (updateUser.length === selectedUsers.length) return;
    setSelectedUsers(updateUser);
  };
  const createNewChatHandler = () => {
    const members = selectedUsers.map((user) => user.id);
    if (chatName.trim().length === 0) return setError('Chat name not provided');
    if (members.length < 1)
      return setError('Need at least 2 members to create chat');
    try {
      const newChat = {
        members,
        created_at: Date.now().toString(),
        chat_name: chatName,
      };
      mutate(newChat);
      if (isError) return setError('Something went wrong during chat creation');
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full bg-blue-main pt-10 md:w-[568px]">
      <div className="p-6">
        <button
          onClick={onModalClose}
          className="w-6 h-6 absolute top-6 right-6 text-purple-main hover:bg-yellow-200 rounded transition"
        >
          <AiOutlineClose className="w-6 h-6" />
        </button>
        <div className="flex flex-col gap-2">
          <BaseInput
            onChange={chatNameHandler}
            name="chat_name"
            label="Chat name"
          />
          <BaseInput
            name="search_q"
            onChange={handleSearchQ}
            label="Username"
            placeholder="Start entering friend name"
          />
        </div>

        <ul className="border-b border-white-main mb-2 mt-6">
          {data &&
            data
              .filter((friend) => friend.id !== isUser?.id)
              .map((friend) => (
                <li
                  className="w-full py-3 flex gap-2 items-center"
                  key={friend.id}
                >
                  <span className="block w-9 h-9 bg-pink-main rounded-full"></span>
                  <p className="text-white-main text-xl font-bold">
                    {friend.username}
                  </p>
                  <label className="w-6 h-6">
                    <input
                      className="visually-hidden peer"
                      value={friend.id}
                      type="checkbox"
                      onChange={() => onCheckBoxChange(friend)}
                    />
                    <span className="ml-4 flex justify-center w-6 h-6 text-transparent peer-checked:text-purple-main bg-pink-main">
                      <AiOutlineCheck className="w-6 h-6" />
                    </span>
                  </label>
                </li>
              ))}
        </ul>
        {selectedUsers.length > 0 && (
          <ul>
            {selectedUsers.map((user) => (
              <li className="flex gap-2 items-center" key={user.id}>
                <span className="block w-9 h-9 bg-pink-main rounded-full"></span>
                <p className="text-white-main text-xl font-bold">
                  {user.username}
                </p>
                <button
                  onClick={() => removeFromToAdd(user.id)}
                  className="text-purple-main flex justify-center items-center bg-pink-accent w-6 h-6 ml-3"
                >
                  <AiOutlineClose />
                </button>
              </li>
            ))}
          </ul>
        )}
        {error && <div className="text-pink-accent">{error}</div>}
        <BaseButton className="text-white-main" onClick={createNewChatHandler}>
          Create new chat
        </BaseButton>
      </div>
    </div>
  );
};

export default NewChat;
