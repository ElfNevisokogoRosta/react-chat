import { UserData } from '../../utils/types';
import { FC } from 'react';

interface FriendListElementProps {
  friend: UserData;
}

const FriendListElement: FC<FriendListElementProps> = ({ friend }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="block w-12 h-12 rounded-full bg-pink-secondary"></span>
      <div>
        <h3 className="text-white-main text-xl font-bold">{friend.username}</h3>
        {friend.first_name !== null && (
          <p className="text-base text-white-main">{friend.first_name}</p>
        )}
        {friend.last_name !== null && (
          <p className="text-base text-white-main">{friend.last_name}</p>
        )}
      </div>
    </div>
  );
};

export default FriendListElement;
