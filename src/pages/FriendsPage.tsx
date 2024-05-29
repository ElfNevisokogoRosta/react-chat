import { useAuth } from '../context/AuthContext.tsx';
import BaseButton from '../UI/BaseButton.tsx';
import { useModal } from '../context/ModalContext.tsx';
import AddFriendModal from '../components/Friends/AddFriendModal.tsx';
import FriendListElement from '../components/Friends/FriendListElement.tsx';
import BackTo from '../components/BackTo/BackTo.tsx';

const FriendsPage = () => {
  const { isUser } = useAuth();
  const { openModal } = useModal();
  console.log(isUser?.friends);
  return (
    <div className="container flex flex-col gap-2 min-h-[65dvh]">
      <h2 className="my-4 text-white-main text-3xl font-extrabold">
        Friend list
      </h2>
      <div>
        {isUser &&
          isUser.friends.map((friend) => <FriendListElement friend={friend} />)}
      </div>
      <div className="mt-auto">
        <BaseButton
          className="text-white-main"
          onClick={() => openModal(<AddFriendModal />)}
        >
          Add friends
        </BaseButton>
        <BackTo />
      </div>
    </div>
  );
};

export default FriendsPage;
