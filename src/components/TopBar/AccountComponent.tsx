import { IoMdNotificationsOutline } from 'react-icons/io';

export const AccountComponent = () => {
  return (
    <>
      <button className="transition relative w-12 h-12 flex items-center justify-center hover:bg-blue-main rounded-2xl hover:text-white-main group">
        <IoMdNotificationsOutline className="w-6 h-6 text-current group-hover:text-white-main" />
        <span className="block bg-red-main text-[14px] absolute top-0 right-0 rounded px-1.5 text-white-main group-hover:bg-red-600">
          34
        </span>
      </button>
      <div className="flex flex-col items-center justify-center">
        <p className="text-4 w-full font-bold text-right">Name</p>
        <p className="text-4 w-full text-right">Nickname</p>
      </div>
      <div>
        <span className="block h-12 w-12 bg-yellow-main rounded-full"></span>
      </div>
    </>
  );
};
