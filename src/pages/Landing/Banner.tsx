import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Banner = () => {
  const banners = [
    {
      id: 1,
      title: "Experience the Freedom of the Open Road with Our Premium Bikes!",
      subtitle: "Discover the joy of seamless rides with top-quality bikes tailored to fit every journey, every adventure, and every dream.",
      image:
        "https://wallpaperaccess.com/full/1433024.jpg",
    },
    {
      id: 2,
      title: "Unmissable Offers on All Bikes – Your Ride, Your Way, at the Best Price!",
      subtitle: "Take advantage of exclusive discounts and enjoy up to 20% off your first purchase. Use code BIKE20 today and start your adventure.",
      image:
        "https://www.shutterstock.com/image-illustration/black-motorcycle-on-dark-background-600nw-1678269436.jpg",
    },
    {
      id: 3,
      title: "Join a Community of Passionate Riders and Embrace the Adventure of a Lifetime!",
      subtitle: "Connect with like-minded enthusiasts, explore breathtaking routes, and become part of a growing family that shares your love for the open road.",
      image:
        "https://png.pngtree.com/thumb_back/fw800/background/20231221/pngtree-black-motorcycle-photo-image_15541809.png",
    },
  ];

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 7000 }}
        loop
        className="h-screen"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative h-[calc(100vh-72px)] cursor-grabbing">
              {/* Background Image */}
              <img
                src={banner.image}
                alt={banner.title}
                className="h-full object-cover bg-no-repeat w-full"
              />
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-opacity-50 flex flex-col items-start justify-center text-start p-4">
                <div className=" max-w-xl ml-2 md:ml-12 lg:ml-24">
                  <h1 className="text-white text-2xl md:text-5xl font-black mb-2">
                    {banner.title}
                  </h1>
                  <p className="text-white text-sm md:text-lg">{banner.subtitle}</p>
                  <div className="relative p-0.5 inline-flex items-center justify-center font-semibold overflow-hidden group text-sm rounded-md">
                    <span className="w-full h-full bg-gradient-to-br from-secondary  to-primary group-hover:from-primary group-hover:to-secondary absolute"></span>
                    <span className="relative px-3 py-1 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                      <span className="relative text-gray-300 cursor-pointer">Learn More</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
