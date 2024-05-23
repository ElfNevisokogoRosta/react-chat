import { ChangeEvent, FormEvent, useState } from 'react';
import BaseInput from '../../UI/BaseInput.tsx';
import { useQuery } from '@tanstack/react-query';
import UserData from '../../utils/types/UserData.ts';
import getUserByUsername from '../../query/api/queries/getUserByUsername.ts';
import BaseButton from '../../UI/BaseButton.tsx';
import { useAuth } from '../../context/AuthContext.tsx';
import useAddFriends from '../../query/api/mutations/addFriends.ts';

const AddFriendModal = () => {
  const { isUser } = useAuth();
  const [searchQ, setSearchQ] = useState<string>('');
  const [userToAdd, setUserToAdd] = useState<number[]>([]);
  const { data } = useQuery<UserData[]>({
    queryFn: async () => await getUserByUsername(searchQ),
    queryKey: ['users', searchQ],
    enabled: !!searchQ,
  });

  const { mutate } = useAddFriends();
  const handleSearchQ = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQ(e.target.value);
  };
  const onCheckBoxChange = (id: number) => {
    setUserToAdd((state) => [...state, id]);
  };
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userToAdd, isUser?.id);
    mutate(userToAdd);
  };
  console.log(data);
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[565px] bg-blue-main p-5">
      <BaseInput name="search_q" onChange={handleSearchQ} />
      <form onSubmit={submitHandler}>
        <div>
          {data &&
            data
              .filter((friend) => friend.id !== isUser?.id)
              .map((friend) => (
                <div key={friend.id}>
                  <div>{friend.username}</div>
                  <input
                    value={friend.id}
                    type="checkbox"
                    onChange={() => onCheckBoxChange(friend.id)}
                  />
                </div>
              ))}
        </div>

        {userToAdd.length > 0 && <BaseButton>Add friends</BaseButton>}
      </form>
    </div>
  );
};

export default AddFriendModal;
