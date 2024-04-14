import { Outlet } from "react-router-dom";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

function MainLayout() {
  return (
    <div className="bg-blue-main">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
