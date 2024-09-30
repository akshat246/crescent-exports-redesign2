import { Outlet } from "react-router-dom";
import { NavBar, Footer } from "@/components";
import background from "@/assets/images/background.jpg";

export const Layout = () => {
  return (
    <div
      className="w-full h-full bg-cover bg-center min-h-screen repeat-infinte flex flex-col"   
      style={{ backgroundImage: `url(${background})` }}
    >
      <NavBar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
