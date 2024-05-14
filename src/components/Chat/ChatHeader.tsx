const ChatHeader = () => {
  return (
    <div className="flex gap-2">
      <span className="block w-12 h-12 bg-yellow-main rounded-full"></span>
      <div className="flex flex-col gap-1">
        <span>Name </span>
        <p className="flex justify-between items-center gap-2 text-gray-accent text-[12px]">
          Online
          <span className="block w-3 h-3 rounded-full bg-green-500"></span>
        </p>
      </div>
    </div>
  );
};

export default ChatHeader;
