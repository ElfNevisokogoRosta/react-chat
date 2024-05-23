import { FC } from 'react';
import UserData from '../../utils/types/UserData.ts';

interface FriendElementsProps {
  user: UserData;
}

const FriendElement: FC<FriendElementsProps> = ({ user }) => {
  return (
    <>
      <div>{user.username}</div>
      <input value={user.id} type="checkbox" />
    </>
  );
};

export default FriendElement;
