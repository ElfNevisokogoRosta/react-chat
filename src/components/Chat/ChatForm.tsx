import BaseInput from '../../UI/BaseInput.tsx';
import BaseButton from '../../UI/BaseButton.tsx';
import { useForm } from 'react-hook-form';

interface MessageForm {
  message: string;
}

const ChatForm = () => {
  const { register, handleSubmit, reset } = useForm<MessageForm>();
  const onSubmit = (data: MessageForm) => {
    const messageData = { ...data, created_at: Date.now(), user_id: 1 };
    console.log(messageData);
    return reset();
  };
  return (
    <form
      className="flex items-center justify-between"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-3/4">
        <BaseInput
          variant="transparent"
          placeholder="enter message"
          className="pl-4 border-2"
          {...register('message')}
        />
      </div>
      <BaseButton className="mr-0">Send</BaseButton>
    </form>
  );
};

export default ChatForm;
