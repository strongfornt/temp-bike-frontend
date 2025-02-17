
import Blog from "../Blogs/Blog";
import Banner from "./Banner";
import BestBike from "./BestBike";
import FeaturedProducts from "./FeaturedProducts";
import OfferSection from "./OfferSection";
import Testimonials from "./Testimonials";
import WhyChooseUs from "./WhyChooseUs";
const Home = () => {
    return (
        <>
            <Banner />
            <FeaturedProducts />
            <WhyChooseUs />
            <BestBike />
            <Testimonials />
            <OfferSection />
            <Blog />
        </>
    );
};

export default Home;