import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Banner from "./Banner";
import FeaturedProducts from "./FeaturedProducts";
import Testimonials from "./Testimonials";

const Home = () => {
 
  return (
    <div className="bg-gradient-to-tl from-[#434343] to-[#000000]">
      <Navbar />
      <Banner />
      <FeaturedProducts />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
