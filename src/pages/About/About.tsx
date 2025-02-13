import Img from '../../assets/banner1.webp'
const About = () => {
  return (
    <div className=" min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-primary mb-4">About Our Bike Shop</h1>
        <p className="text-xl text-white mb-8">
          Welcome to our Bike Shop, where passion for cycling meets quality and service. Our shop offers a wide range of bikes and accessories, tailored for all types of riders.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <img
              src={Img}
              alt="Bike Shop"
              className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
            />
            <h3 className="text-xl font-semibold text-primary mb-2">Our Vision</h3>
            <p className="text-white">
              To provide the best biking experience with top-notch products and personalized service for every cyclist.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={Img}
              alt="Customer Service"
              className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
            />
            <h3 className="text-xl font-semibold text-primary mb-2">Why Choose Us?</h3>
            <p className="text-white">
              We focus on customer satisfaction, offering expert advice, repairs, and the latest models of bicycles and accessories.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <button
          onClick={() => window.location.href = '/contact'}
          className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary transition-colors"
        >
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default About;
