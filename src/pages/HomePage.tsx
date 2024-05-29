import ChatList from '../components/Chat/ChatList.tsx';

const HomePage = () => {
  return (
    <div className="z-0 flex gap-4 w-full h-full">
      <ChatList />
      <div className="hidden md:flex  w-full h-full pt-[200px] items-center justify-center">
        <p className="mx-auto text-white-main text-2xl font-extrabold">
          Select some chat
        </p>
      </div>
    </div>
  );
};

export default HomePage;
