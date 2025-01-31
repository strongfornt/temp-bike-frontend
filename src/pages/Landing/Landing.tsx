import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Landing = () => {

  return (
    <div className="bg-gradient-to-tl from-[#434343] to-[#000000]">
      <Navbar />
      <div className="min-h-[calc(100vh-72px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
