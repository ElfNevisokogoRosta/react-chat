import { FC } from 'react';
import { format } from 'date-fns';

interface MessageElementProps {
  mes: any;
  user: string | undefined;
}

const MessageElement: FC<MessageElementProps> = ({ mes, user }) => {
  const { text, user: username, created_at } = mes;
  const formateDate = (timestamp: string) => {
    return format(+timestamp, 'PPpp');
  };
  if (user === username?.username) {
    return (
      <li className="px-4 py-5 ml-auto bg-gray-accent rounded-l-xl rounded-br-xl max-w-[90%] lg:max-w-[40%] w-full ">
        <p className="text-white-main font-bold text-xl">You</p>
        <p className="text-base text-white-main">{text}</p>
        <span className="text-xs text-blue-main">
          {formateDate(created_at)}
        </span>
      </li>
    );
  } else {
    return (
      <li className="px-4 py-5 mr-auto bg-gray-secondary rounded-r-xl max-w-[90%] lg:max-w-[40%] w-full rounded-bl-xl">
        <p className="text-white-main font-bold text-xl">
          {username?.username}
        </p>
        <p className="text-base text-white-main">{text}</p>
        <span className="text-xs text-blue-main">
          {formateDate(created_at)}
        </span>
      </li>
    );
  }
};

export default MessageElement;
