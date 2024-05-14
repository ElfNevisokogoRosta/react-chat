import { FC } from 'react';

interface Message {
  id: number;
  author: string;
  message: string;
  time: string;
}

interface MessageElementProps {
  mes: Message;
  user: string;
}

const MessageElement: FC<MessageElementProps> = ({ mes, user }) => {
  const { author, message, time } = mes;
  if (user === author) {
    return (
      <li className="px-4 py-5 ml-auto bg-gray-accent rounded-l-xl rounded-br-xl max-w-[40%] w-full ">
        <p className="text-white-main font-bold text-xl">You</p>
        <p className="text-base text-white-main">{message}</p>
        <span className="text-xs text-blue-main">{time}</span>
      </li>
    );
  }
  return (
    <li className="px-4 py-5 mr-auto bg-gray-secondary rounded-r-xl max-w-[40%] w-full rounded-bl-xl">
      <p className="text-white-main font-bold text-xl">{author}</p>
      <p className="text-base text-white-main">{message}</p>
      <span className="text-xs text-blue-main">{time}</span>
    </li>
  );
};

export default MessageElement;
