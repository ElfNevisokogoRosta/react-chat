import BaseInput from '../../UI/BaseInput.tsx';
import BaseButton from '../../UI/BaseButton.tsx';
import EmojiPicker from 'emoji-picker-react';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import MessageData from '../../utils/types/MessageData.types.ts';
import { BiSolidMessageDetail } from 'react-icons/bi';

interface ChatFormProps {
  sendMessage: (message: Partial<MessageData>) => void;
}

const ChatForm: FC<ChatFormProps> = ({ sendMessage }) => {
  const [message, setMessage] = useState<string>('');
  const [isEmojiOpen, setIsEmojiOpen] = useState(false);
  const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };
  const onEmojiClick = () => {
    setIsEmojiOpen((state) => !state);
  };
  const onEmojiPick = (emoji: any) => {
    setMessage((state) => state + emoji.emoji);
    setIsEmojiOpen((state) => !state);
  };
  const onMessageSend = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage({ text: message });
    setMessage('');
  };
  return (
    <form
      className="flex flex-col items-center justify-between relative"
      onSubmit={onMessageSend}
    >
      <div className="py-4 text-left w-full pl-6">
        <button
          type="button"
          className="text-base text-[32px]"
          onClick={onEmojiClick}
        >
          😊
        </button>
        <EmojiPicker
          lazyLoadEmojis={true}
          className="emoji_picker"
          onEmojiClick={onEmojiPick}
          height={360 - 32}
          width={360 - 32}
          open={isEmojiOpen}
          style={{
            position: 'absolute',
            top: '-200px',
            left: '0',
          }}
        />
      </div>
      <div className="w-full flex gap-2 items-center">
        <div className="w-3/4">
          <BaseInput
            variant="transparent"
            placeholder="Enter message"
            className="pl-6 border-2"
            value={message}
            onChange={handleMessageChange}
          />
        </div>
        <BaseButton
          type="submit"
          className="mr-0 my-0 flex gap-2 text-white-main hover:text-blue-main"
        >
          <BiSolidMessageDetail className="w-6 h-6" />
          <span className="hidden md:block">Send</span>
        </BaseButton>
      </div>
    </form>
  );
};

export default ChatForm;
