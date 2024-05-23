import { Outlet } from 'react-router-dom';
import MobileMenu from '../components/MobileMenu.tsx';

function DashboardLayout() {
  return (
    <div className="container">
      <div className="md:hidden">
        <MobileMenu />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
