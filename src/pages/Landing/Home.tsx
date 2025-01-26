
import Navbar from "../../components/Navbar";
import Banner from "./Banner";
import FeaturedProducts from "./FeaturedProducts";
import Footer from "../../components/Footer";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <FeaturedProducts />
            <Testimonials />
            <Footer />
        </>
    );
};

export default Home;