import ChatElement from './ChatElement.tsx';
import { useNavigate } from 'react-router-dom';

const chatList = [
  {
    id: 4,
    name: 'Chat2',
    icon: 'img',
  },
  {
    id: 5,
    name: 'Chat2',
    icon: 'img',
  },
  {
    id: 6,
    name: 'Chat2',
    icon: 'img',
  },
];

const ChatList = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute top-[95px] left-[75px] max-w-fit w-full border-blue-main h-full py-6 px-5 border-r-2">
      <h2 className="my-4 max-w-fit w-full">Messaging</h2>
      <div className="h-[85%] overflow-y-scroll scrollbar">
        <ul className="flex flex-col max-w-fit w-full divide-y divide-gray-main gap-1">
          {chatList.map((chat) => (
            <li
              onClick={() => navigate(`${chat.id}`)}
              className="flex items-center gap-x-2 px-4 pt-2 hover:bg-yellow-main transition cursor-pointer w-[200px]"
              key={chat.id}
            >
              <ChatElement chatElement={chat} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChatList;
