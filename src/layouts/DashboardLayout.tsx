import { Outlet } from 'react-router-dom';
import MobileMenu from '../components/MobileMenu.tsx';
import SideBar from '../components/SideBar/SideBar.tsx';

function DashboardLayout() {
  return (
    <div className="container md:flex md:gap-4">
      <div className="relative min-w-[75px]">
        <SideBar />
      </div>
      <div className="md:hidden">
        <MobileMenu />
      </div>
      <div className="w-full h-full px-4">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
