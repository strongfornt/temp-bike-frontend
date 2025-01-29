import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import 'swiper/css'

const Banner = () => {
  const banners = [
    {
      id: 1,
      title: "Welcome to Bike Shop!",
      subtitle: "Your ultimate platform for hassle-free rides.",
      image:
        "https://global.honda/en/japan-mobility-show/2023/info/Honda_e-MTB_Concept/images/main.jpg",
    },
    {
      id: 2,
      title: "Exclusive Discounts!",
      subtitle: "Get 20% off on your first ride. Use code FIRST20.",
      image:
        "https://static.giant-bicycles.com/Images/PageBuilder/PageElements/Banner_E-BikeProducts_MMT_WebsiteDesign_Brand_1595881505.jpg",
    },
    {
      id: 3,
      title: "Join Our Community!",
      subtitle: "Become a part of our growing family of happy riders.",
      image:
        "https://static.giant-bicycles.com/Images/PageBuilder/PageElements/Banner_E-BikeProducts_MMT_WebsiteDesign_Brand_1595881505.jpg",
    },
  ];

  return (
    <div className="bg-gray-100">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="h-screen"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative h-screen cursor-grabbing">
              {/* Background Image */}
              <img
                src={banner.image}
                alt={banner.title}
                className="h-full object-cover bg-no-repeat w-full blur-xs"
              />
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-center p-4">
                <h1 className="text-white text-2xl md:text-4xl font-bold mb-2">
                  {banner.title}
                </h1>
                <p className="text-white text-sm md:text-lg">{banner.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
