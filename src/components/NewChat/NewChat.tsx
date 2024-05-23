import { useModal } from '../../context/ModalContext.tsx';
import SearchUser from './SearchUser.tsx';
import userData from '../../utils/types/UserData.ts';
import UserData from '../../utils/types/UserData.ts';
import { ChangeEvent, useState } from 'react';
import BaseButton from '../../UI/BaseButton.tsx';
import useCreateNewChat from '../../query/api/mutations/createNewChat.ts';
import useLocalStorage from '../../utils/hooks/useLocalStorage.tsx';
import BaseInput from '../../UI/BaseInput.tsx';

const NewChat = () => {
  const [selectedUsers, setSelectedUsers] = useState<UserData[]>([]);
  const { closeModal } = useModal();
  const { getItem } = useLocalStorage();
  const token = getItem('token');
  //TODO add some error handling
  const { mutate, isSuccess } = useCreateNewChat();
  const [chatName, setChatName] = useState<string>('');
  const chatNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setChatName(e.target.value);
  };
  const onModalClose = () => {
    return closeModal();
  };
  const selectHandle = (user: userData | null) => {
    if (user === null) {
      return;
    }
    const isAdded = selectedUsers.find(
      (userInState) => user.id === userInState.id,
    );
    if (isAdded) {
      console.log(isAdded);
      return;
    }
    setSelectedUsers((state) => [...state, user]);
  };
  const createNewChatHandler = () => {
    const members = selectedUsers.map((user) => user.id);
    if (members.length > 1) {
      if (chatName.trim() === '') {
        return console.log('chat name can not be empty');
      }
      mutate({
        data: {
          members,
          created_at: Date.now().toString(),
          chat_name: chatName,
        },
        token,
      });
      if (isSuccess) {
        return closeModal();
      }
    }

    mutate({
      data: {
        members,
        created_at: Date.now().toString(),
      },
      token,
    });
    if (isSuccess) {
      return closeModal();
    }
  };
  return (
    <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[560px] bg-blue-main">
      <div className="p-6">
        <button
          onClick={onModalClose}
          className="ml-[466px] w-12 h-12 relative group cursor-pointer"
        >
          <span className="w-12 h-[1px] absolute bg-gray-accent group-hover:bg-yellow-main -translate-x-1/2  rotate-45"></span>
          <span className="w-12 h-[1px] absolute bg-gray-accent group-hover:bg-yellow-main -translate-x-1/2 -rotate-45"></span>
        </button>
        <SearchUser setUser={selectHandle} />
        {selectedUsers.length > 0 &&
          selectedUsers.length > 0 &&
          selectedUsers.map((user: userData) => {
            return <div key={user?.email}>{user?.username}</div>;
          })}
        {selectedUsers.length > 1 && (
          <BaseInput
            onChange={chatNameHandler}
            name="chat_name"
            label="Chat name"
          />
        )}
        <BaseButton onClick={createNewChatHandler}>Create new chat</BaseButton>
      </div>
    </div>
  );
};

export default NewChat;
