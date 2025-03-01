import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />

      <div className="p-2">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
