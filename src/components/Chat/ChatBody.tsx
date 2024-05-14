import { useParams } from 'react-router-dom';
import MessageElement from './MessageElement.tsx';

const messages = [
  {
    id: 112,
    author: 'User1',
    message: 'Lorem ipsum',
    time: 'today 13:45',
  },
  {
    id: 212,
    author: 'User2',
    message: 'Lorem ipsum Lorem ipsum Lorem ipsum',
    time: 'today 13:45',
  },
  {
    id: 312,
    author: 'User1',
    message: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
    time: 'today 13:45',
  },
  {
    id: 41221,
    author: 'User1',
    message: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
    time: 'today 13:45',
  },
  {
    id: 51212,
    author: 'User2',
    message: 'Lorem ipsum',
    time: 'today 13:45',
  },
  {
    id: 6122121,
    author: 'User1',
    message: 'Lorem ipsum',
    time: 'today 13:45',
  },
  {
    id: 7122112,
    author: 'User2',
    message: 'Lorem ipsum',
    time: 'today 13:45',
  },
  {
    id: 8122112,
    author: 'User1',
    message: 'Lorem ipsum',
    time: 'today 14:45',
  },
  {
    id: 41221,
    author: 'User1',
    message:
      'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
    time: 'today 13:45',
  },
  {
    id: 51212,
    author: 'User2',
    message: 'Lorem ipsum',
    time: 'today 13:45',
  },
  {
    id: 6122121,
    author: 'User1',
    message: 'Lorem ipsum',
    time: 'today 13:45',
  },
  {
    id: 7122112,
    author: 'User2',
    message: 'Lorem ipsum',
    time: 'today 13:45',
  },
  {
    id: 8122112,
    author: 'User1',
    message: 'Lorem ipsum',
    time: 'today 14:45',
  },
];

const ChatBody = () => {
  const params = useParams();
  console.log(params);
  const currentUser = 'User1';
  return (
    <ul className="flex flex-col-reverse scrollbar gap-4 w-full max-h-fit h-full pb-2 overflow-y-scroll">
      {messages.map((message) => (
        <MessageElement mes={message} user={currentUser} />
      ))}
    </ul>
  );
};

export default ChatBody;
