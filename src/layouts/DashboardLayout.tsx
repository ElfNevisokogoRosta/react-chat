import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar/SideBar.tsx';
import TopBar from '../components/TopBar/TopBar.tsx';
import ChatList from '../components/Chat/ChatList.tsx';

function DashboardLayout() {
  return (
    <div className="bg-white-main relative">
      <SideBar />
      <TopBar />
      <ChatList />
      <div className="absolute top-[95px] left-[324px] flex flex-col gap-6 px-6 pt-6 max-w-[calc(100%-324px)] w-full h-[calc(100%-168px)] shrink-0">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
