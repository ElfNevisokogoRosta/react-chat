import { FC } from 'react';
import MessageElement from './MessageElement';
import { useAuth } from '../../context/AuthContext';
import MessageData from '../../utils/types/MessageData.types.ts';

interface ChatBodyProps {
  messages?: MessageData[];
}

const ChatBody: FC<ChatBodyProps> = ({ messages }) => {
  const { isUser } = useAuth();

  console.log(messages);

  return (
    <ul className="flex flex-col-reverse scrollbar gap-4 w-full max-h-fit h-full pb-2 ">
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
