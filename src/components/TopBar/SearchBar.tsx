import BaseInput from '../../UI/BaseInput.tsx';
import { IoSearchOutline } from 'react-icons/io5';

export const SearchBar = () => {
  return (
    <>
      <form className="border border-blue-main flex items-center bg-red-400 relative rounded-3xl">
        <span className="absolute top-1/2 left-4 -translate-y-1/2 pointer-events-none">
          <IoSearchOutline />
        </span>
        <BaseInput
          type="text"
          variant="transparent"
          placeholder="Search in dashboard..."
          className="pl-10"
        />
      </form>
    </>
  );
};
