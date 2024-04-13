import { Outlet } from "react-router-dom";
import Header from "../components/Header.tsx";

function MainLayout() {
  return (
    <div className="bg-blue-main py-8">
      <Header />
      <Outlet />
    </div>
  );
}

export default MainLayout;
