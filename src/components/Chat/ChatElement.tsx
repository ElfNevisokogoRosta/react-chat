import {FC} from 'react';

interface ChatElementProps {
  chatElement: {
    id: number,
    name: string,
    icon: string,
  }
}

const ChatElement: FC<ChatElementProps> = ({chatElement}) => {
  const {name, icon} = chatElement
  return (
    <>
      <span>{icon}</span>
      <p>{name}</p>
    </>
  );
};

export default ChatElement;