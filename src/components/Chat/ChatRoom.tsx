import { FC, useContext, useEffect, useRef, useState } from 'react';
import ChatHeader from './ChatHeader.tsx';
import ChatForm from './ChatForm.tsx';
import { WebSocketContext } from '../../context/WebSocketContext.tsx';
import MessageData from '../../utils/types/MessageData.types.ts';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.tsx';
import { useQuery } from '@tanstack/react-query';
import ChatDataTypes from '../../utils/types/ChatData.types.ts';
import getChat from '../../query/api/queries/getChat.ts';
import ChatBody from './ChatBody.tsx';
import ChatList from './ChatList.tsx';

interface ChatRoomProps {}

const ChatRoom: FC<ChatRoomProps> = () => {
  const params = useParams<{ chatId: string }>();
  const { isUser } = useAuth();
  const [messages, setMessages] = useState<MessageData[]>([]);
  const [messageFilter, setMessageFilter] = useState<string>('');
  const user_id = isUser?.id || -1;
  const chat_id = parseFloat(params?.chatId || '-1');
  const webSocket = useContext(WebSocketContext);
  const chatBottomRef = useRef<HTMLDivElement>(null);
  const chatID = params?.chatId || '-1';

  useEffect(() => {
    if (chatBottomRef.current) {
      chatBottomRef.current.scrollTop = chatBottomRef.current.scrollHeight;
    }
  }, [messages]);

  //TODO refactor all queries
  const { data, refetch } = useQuery<ChatDataTypes>({
    queryFn: async () => await getChat(chatID),
    queryKey: ['chat', chat_id],
  });

  useEffect(() => {
    if (data && data.messages) {
      const sortedMessages = data.messages.sort((a, b) => b.id - a.id);
      const filteredMessages = sortedMessages.filter((mes) =>
        mes.text.toLowerCase().includes(messageFilter.toLowerCase()),
      );
      setMessages(filteredMessages);
    }
  }, [data, messageFilter]);

  const newMessage = (messageData: Partial<MessageData>) => {
    const newMessage: MessageData = {
      user_id,
      chat_id,
      created_at: Date.now().toString(),
      ...messageData,
    };
    webSocket.emit('newMessage', newMessage);
    return newMessage;
  };

  useEffect(() => {
    webSocket.on('onMessage', async () => {
      return await refetch().then((res) => {
        if (res.data) {
          const sortedMessages = res.data.messages.sort((a, b) => b.id - a.id);
          const filteredMessages = sortedMessages.filter((mes) =>
            mes.text.toLowerCase().includes(messageFilter.toLowerCase()),
          );
          setMessages(filteredMessages);
        }
        return;
      });
    });
    return () => {
      webSocket.off('newMessage', async () => {
        await refetch();
      });
    };
  }, [webSocket, messageFilter, refetch]);

  const searchInMessages = (searchQ: string) => {
    setMessageFilter(searchQ);
  };

  return (
    <div className="flex gap-9">
      <ChatList className="hidden lg:block" />
      <div className="flex w-full flex-col h-full min-h-[calc(100vh-200px)] lg:min-h-[calc(100vh-200px)] lg:pt-9">
        <ChatHeader func={searchInMessages} chat={data && data} />
        <div className="max-h-[calc(100vh-350px)]  flex flex-col mt-auto">
          <div
            className="overflow-y-scroll h-full scrollbar"
            ref={chatBottomRef}
          >
            <ChatBody messages={messages} />
          </div>
        </div>
        <div className="border-t-2 mt-4">
          <ChatForm sendMessage={newMessage} />
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
