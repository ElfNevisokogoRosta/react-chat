import ChatElement from "./ChatElement.tsx";

const chatList = [{
  id: 1,
  name: 'Chat1',
  icon: 'some img'
}, {
  id: 2,
  name: 'Chat2',
  icon: 'some img'
}, {
  id: 3,
  name: 'Chat2',
  icon: 'some img'
}, {
  id: 4,
  name: 'Chat2',
  icon: 'some img'
}, {
  id: 5,
  name: 'Chat2',
  icon: 'some img'
}, {
  id: 6,
  name: 'Chat2',
  icon: 'some img'
}]


const ChatList = () => {
  return (
    <div>
      <ul>
        {chatList.map((chat) => (
          <li className='flex w-full justify-between' key={chat.id}>
            <ChatElement chatElement={chat}/>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default ChatList;