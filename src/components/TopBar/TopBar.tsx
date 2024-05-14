import { SearchBar } from './SearchBar.tsx';
import { AccountComponent } from './AccountComponent.tsx';

const TopBar = () => {
  return (
    <div className="absolute top-0 left-[75px] right-0 flex justify-between items-center border-b-2 border-b-blue-main py-5 px-6">
      <div>
        {/*TODO MB Create theme customization for chats*/}
        <SearchBar />
      </div>
      <div className="flex items-center gap-4 justify-between h-12">
        <AccountComponent />
      </div>
    </div>
  );
};

export default TopBar;
