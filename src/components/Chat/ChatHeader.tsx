import ChatDataTypes from '../../utils/types/ChatData.types.ts';
import { ChangeEvent, FC, useState } from 'react';
import { useAuth } from '../../context/AuthContext.tsx';
import { IoReturnDownBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import BaseInput from '../../UI/BaseInput.tsx';
import { AnimatePresence, motion } from 'framer-motion';
import { RxCross1 } from 'react-icons/rx';

interface ChatHeaderProps {
  chat: ChatDataTypes | undefined;
  func: (searchQ: string) => void;
}

const ChatHeader: FC<ChatHeaderProps> = ({ chat, func }) => {
  const { isUser } = useAuth();
  const navigate = useNavigate();
  const [searchIsOpen, setSearchIsOpen] = useState<boolean>(false);
  const [searchQ, setSearchQ] = useState<string>('');
  const chatNameHandler = (arr: string[], value: string) => {
    const index = arr.indexOf(value);
    if (index === -1) {
      return arr;
    }
    return arr[(index + 1) % arr.length];
  };

  const onSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQ(e.target.value);
    func(e.target.value);
  };

  const onSearchIsOpen = () => {
    setSearchIsOpen((state) => !state);
    setSearchQ('');
    func('');
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex gap-2 bg-blue-main relative py-2">
      <span className="block w-12 h-12 bg-yellow-main rounded-full flex-shrink-0"></span>
      <div className="flex justify-between  gap-1 w-full items-center">
        {chat && isUser && (
          <span className="text-white-main text-base capitalize font-bold">
            {chatNameHandler(chat.chat_name, isUser.username)}
          </span>
        )}
        <div className="py-2 h-16 absolute flex justify-between w-3/4 items-center z-40 top-0 left-0 ">
          <AnimatePresence mode="wait" initial={false}>
            {searchIsOpen && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{
                  width: searchIsOpen ? 300 : 0,
                  opacity: searchIsOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                exit={{ width: 0, opacity: 0 }}
                className="bg-blue-main  z-40"
              >
                <BaseInput
                  onChange={onSearchHandler}
                  value={searchQ}
                  placeholder="Search in messages"
                />
              </motion.div>
            )}
          </AnimatePresence>

          <button
            className="w-6 h-6 absolute -right-9 text-gray-main hover:text-pink-main transition"
            onClick={onSearchIsOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {searchIsOpen ? (
                <motion.div
                  key="cross"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <RxCross1 className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="search"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <CiSearch className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        <button
          onClick={goBack}
          className="w-12 h-12 flex justify-center items-center text-white-main md:hidden"
        >
          <IoReturnDownBack
            className="w-12 h-6"
            width={'48px'}
            height={'48px'}
          />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
