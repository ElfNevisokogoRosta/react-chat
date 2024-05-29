import ChatElement from './ChatElement.tsx';
import { useAuth } from '../../context/AuthContext.tsx';
import BaseButton from '../../UI/BaseButton.tsx';
import { useModal } from '../../context/ModalContext.tsx';
import NewChat from '../NewChat/NewChat.tsx';
import { CiSearch } from 'react-icons/ci';
import { AnimatePresence, motion } from 'framer-motion';
import BaseInput from '../../UI/BaseInput.tsx';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import ChatDataTypes from '../../utils/types/ChatData.types.ts';
import { RxCross1 } from 'react-icons/rx';
import { cn } from '../../utils/cn.ts';

interface ChatListProps {
  className?: string;
}

const ChatList: FC<ChatListProps> = ({ className }) => {
  const { openModal } = useModal();
  const { isUser } = useAuth();
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
  const [chats, setChats] = useState<ChatDataTypes[]>([]);
  const [filteredChats, setFilteredChats] = useState<ChatDataTypes[]>([]);

  useEffect(() => {
    if (isUser) {
      setChats(isUser.participant_chat);
      setFilteredChats(isUser.participant_chat);
    }
  }, [isUser]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.trim();

    if (query === '') {
      setFilteredChats(chats);
    } else {
      setFilteredChats(
        chats.filter((chat) =>
          chat.chat_name.some((name) =>
            name.toLowerCase().includes(query.toLowerCase()),
          ),
        ),
      );
    }
  };

  const openNewChatModal = () => {
    openModal(<NewChat />);
  };

  const onSearchOpenHandler = () => {
    setIsSearchActive((state) => !state);
  };

  return (
    <div className={cn('flex flex-col w-full lg:w-1/4', className)}>
      <div className="flex items-center justify-between relative py-3">
        <h2 className="text-2xl font-bold text-white-main my-2 text z-0">
          Messaging
        </h2>
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{
            width: isSearchActive ? '100%' : 0,
            opacity: isSearchActive ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute top-1/2 right-8 z-10 -translate-y-1/2 overflow-hidden pl-3.5"
        >
          <BaseInput
            onChange={onChangeHandler}
            name="search_q"
            className=" bg-blue-main w-full"
            placeholder="Enter chat name"
          />
        </motion.div>
        <button onClick={onSearchOpenHandler} className="text-white-main">
          <AnimatePresence mode="wait" initial={false}>
            {isSearchActive ? (
              <motion.div
                key="cross"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <RxCross1 className="w-8 h-8" />
              </motion.div>
            ) : (
              <motion.div
                key="search"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <CiSearch className="w-8 h-8" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
      <div className="overflow-y-scroll h-full">
        <ul className="flex flex-col gap-4">
          {filteredChats &&
            filteredChats.map((chat) => (
              <ChatElement key={chat.id} chatElement={chat} />
            ))}
        </ul>
        <BaseButton className="text-white-main" onClick={openNewChatModal}>
          New chat
        </BaseButton>
      </div>
    </div>
  );
};

export default ChatList;
