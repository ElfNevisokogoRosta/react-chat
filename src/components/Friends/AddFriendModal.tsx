import { ChangeEvent, FormEvent, useState } from 'react';
import BaseInput from '../../UI/BaseInput.tsx';
import { useQuery } from '@tanstack/react-query';
import UserData from '../../utils/types/UserData.ts';
import getUserByUsername from '../../query/api/queries/getUserByUsername.ts';
import BaseButton from '../../UI/BaseButton.tsx';
import { useAuth } from '../../context/AuthContext.tsx';
import useAddFriends from '../../query/api/mutations/addFriends.ts';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { useModal } from '../../context/ModalContext.tsx';

const AddFriendModal = () => {
  const { closeModal } = useModal();
  const { isUser } = useAuth();
  const [searchQ, setSearchQ] = useState<string>('');
  const [userToAdd, setUserToAdd] = useState<UserData[]>([]);
  const { data } = useQuery<UserData[]>({
    queryFn: async () => await getUserByUsername(searchQ),
    queryKey: ['users', searchQ],
    enabled: !!searchQ,
  });
  const { mutate } = useAddFriends();
  const handleSearchQ = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQ(e.target.value);
  };
  const removeFromToAdd = (user_id: number) => {
    const updateUser = userToAdd.filter((user) => user.id !== user_id);
    if (updateUser.length === userToAdd.length) return;
    setUserToAdd(updateUser);
  };
  const onCheckBoxChange = (user: UserData) => {
    const isUser = userToAdd.find((userData) => userData.id === user.id);
    if (isUser) return;
    setUserToAdd((state) => [...state, user]);
  };
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const usersId = userToAdd.map((user) => user.id);
    mutate(usersId);
  };
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-screen bg-blue-main p-5 pt-10 md:max-w-[468px] md:rounded-lg md:p-9">
      <button
        onClick={closeModal}
        className="w-6 h-6 absolute top-6 right-6 text-purple-main hover:bg-yellow-200 rounded transition"
      >
        <AiOutlineClose className="w-6 h-6" />
      </button>
      <BaseInput
        name="search_q"
        onChange={handleSearchQ}
        label="Friend name"
        placeholder="Start entering friend name"
      />
      <form onSubmit={submitHandler}>
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
        {userToAdd.length > 0 && (
          <ul>
            {userToAdd.map((user) => (
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
        {userToAdd.length > 0 && (
          <BaseButton className="text-white-main">Add friends</BaseButton>
        )}
      </form>
    </div>
  );
};

export default AddFriendModal;
