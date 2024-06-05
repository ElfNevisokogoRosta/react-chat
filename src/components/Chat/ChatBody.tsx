import { FC } from 'react';
import MessageElement from './MessageElement';
import { useAuth } from '../../context/AuthContext';
import MessageData from '../../utils/types/MessageData.types.ts';

interface ChatBodyProps {
  messages?: MessageData[];
}

const ChatBody: FC<ChatBodyProps> = ({ messages }) => {
  const { isUser } = useAuth();
  return (
    <ul className="flex flex-col-reverse scrollbar gap-4 w-full pb-2">
      {messages?.length === 0 && (
        <li className="text-white-main text-lg font-bold px-4">
          Start a conversation right now in form below{' '}
        </li>
      )}
      {messages &&
        messages.map((message) => (
          <MessageElement
            key={message?.id}
            mes={message}
            user={isUser && isUser.username}
          />
        ))}
    </ul>
  );
};

export default ChatBody;
