import { FC } from 'react';
import ChatHeader from './ChatHeader.tsx';
import ChatForm from './ChatForm.tsx';
import ChatBody from './ChatBody.tsx';

interface ChatRoomProps {}

const ChatRoom: FC<ChatRoomProps> = () => {
  return (
    <>
      <ChatHeader />
      <div className="flex-grow flex flex-col h-full">
        <div className="h-full overflow-y-hidden">
          <ChatBody />
        </div>
        <div className="border-t-2 mt-2">
          <ChatForm />
        </div>
      </div>
    </>
  );
};

export default ChatRoom;
