import { FC } from 'react';

interface ChatElementProps {
  chatElement: {
    id: number;
    name: string;
    icon: string;
  };
}

const ChatElement: FC<ChatElementProps> = ({ chatElement }) => {
  const { name, icon } = chatElement;
  return (
    <>
      <span className="w-12 h-12 rounded-full bg-yellow-main flex items-center justify-center shrink-0">
        {icon}
      </span>
      <div>
        <p className="text-blue-main text-[14px] font-bold">{name}</p>
        <span className="text-[12px] text-gray-accent w-36 truncate">
          last message asdasdasdasdasdasd
        </span>
      </div>
    </>
  );
};

export default ChatElement;
