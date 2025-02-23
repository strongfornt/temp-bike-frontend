import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import BestBike from "./BestBike";
import FeaturedProducts from "./FeaturedProducts";
import OfferSection from "./OfferSection";
import Testimonials from "./Testimonials";
import WhyChooseUs from "./WhyChooseUs";
const Home = () => {
  return (
    <>
    <Helmet>
        <title>Home | SteelRev</title>
      </Helmet>
      <Banner />
      <div className="my-16">
        <FeaturedProducts />
      </div>
      <div className="my-8 md:my-16 ">
        <BestBike />
      </div>
      <div className="my-8 md:my-16 ">
        <WhyChooseUs />
      </div>
      <div className="my-8 md:my-16 ">
        <OfferSection />
      </div>
      <div className="my-8 md:my-16 ">
        <Testimonials />
      </div>
      {/* <Blog /> */}
    </>
  );
};

export default Home;
