import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import bike from '../../assets/bikeIcon.svg'
import usedbike from '../../assets/used-bike.svg'
import assosorise from '../../assets/racing-helmet1.svg'
import location from '../../assets/location_point.svg'
import arrow from '../../assets/arrow.svg'
import bg1 from '../../assets/banner1.webp'
import bg2 from '../../assets/banner2.webp'
import bg3 from '../../assets/banner3.webp'
const Banner = () => {
  const banners = [
    {
      id: 1,
      image: bg1,
    },
    {
      id: 2,
      image: bg2
    },
    {
      id: 3,
      image:bg3
    },
  ];

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-[calc(100vh-72px)]"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative h-full cursor-grabbing">
              {/* Background Image */}
              <img
                src={banner.image}
                alt="Banner Img"
                className="h-full object-cover bg-no-repeat w-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-5 text-white max-w-7xl mx-auto gap-10 mt-10">
        <div className="border border-white rounded-md shadow-md min-h-[180px] p-4 flex flex-col justify-between">
          <img className="size-16" src={bike} alt="" />
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">New Bikes</h1>
            <button className="cursor-pointer">
              <img src={arrow} alt="" />
            </button>
          </div>
        </div>
        <div className="border border-white rounded-md shadow-md min-h-[180px] p-4 flex flex-col justify-between">
          <img className="size-16" src={usedbike} alt="" />
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Used Bikes</h1>
            <button className="cursor-pointer">
              <img src={arrow} alt="" />
            </button>
          </div>
        </div>
        <div className="border border-white rounded-md shadow-md min-h-[180px] p-4 flex flex-col justify-between">
          <img className="size-16" src={assosorise} alt="" />
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Bike Accessories</h1>
            <button className="cursor-pointer">
              <img src={arrow} alt="" />
            </button>
          </div>
        </div>
        <div className="border border-white rounded-md shadow-md min-h-[180px] p-4 flex flex-col justify-between">
          <img className="size-16" src={location} alt="" />
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Repair Shops</h1>
            <button className="cursor-pointer">
              <img src={arrow} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
