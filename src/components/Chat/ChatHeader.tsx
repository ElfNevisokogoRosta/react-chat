import ChatDataTypes from '../../utils/types/ChatData.types.ts';
import { FC } from 'react';
import { useAuth } from '../../context/AuthContext.tsx';
import { IoReturnDownBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

interface ChatHeaderProps {
  chat: ChatDataTypes | undefined;
}

const ChatHeader: FC<ChatHeaderProps> = ({ chat }) => {
  const { isUser } = useAuth();
  const navigate = useNavigate();

  const chatNameHandler = (arr: string[], value: string) => {
    const index = arr.indexOf(value);
    if (index === -1) {
      return arr;
    }
    return arr[(index + 1) % arr.length];
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex gap-2 bg-blue-main py-2">
      <span className="block w-12 h-12 bg-yellow-main rounded-full flex-shrink-0"></span>
      <div className="flex justify-between gap-1 w-full items-center">
        {chat && isUser && (
          <span className="text-white-main text-base capitalize font-bold">
            {chatNameHandler(chat.chat_name, isUser.username)}
          </span>
        )}
        <button
          onClick={goBack}
          className="w-12 h-12 flex justify-center items-center text-white-main md:hidden"
        >
          <IoReturnDownBack
            className="w-12 h-6"
            width={'48px'}
            height={'48px'}
          />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
