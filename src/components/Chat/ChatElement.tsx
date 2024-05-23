import { FC } from 'react';
import ChatDataTypes from '../../utils/types/ChatData.types.ts';
import { useAuth } from '../../context/AuthContext.tsx';
import { useNavigate } from 'react-router-dom';

interface ChatElementProps {
  chatElement: ChatDataTypes;
}

const ChatElement: FC<ChatElementProps> = ({ chatElement }) => {
  const { chat_name, id } = chatElement;
  const { isUser } = useAuth();
  const navigate = useNavigate();

  const chatNameHandler = (arr: string[], value: string) => {
    const index = arr.indexOf(value);
    if (index === -1) {
      return arr;
    }
    return arr[(index + 1) % arr.length];
  };

  return (
    <li
      onClick={() => navigate(`${id}`)}
      className="transition  flex gap-6 items-center group p-3 rounded hover:bg-pink-secondary cursor-pointer"
    >
      <span className="w-12 h-12 rounded-full bg-yellow-main flex items-center justify-center shrink-0"></span>
      <p className="text-white-main font-bold text-base capitalize">
        {chatNameHandler(chat_name, isUser?.username || '')}
      </p>
    </li>
  );
};

export default ChatElement;
