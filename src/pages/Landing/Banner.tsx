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
const Banner = () => {
  const banners = [
    {
      id: 1,
      image:
        "https://suzuki.com.bd/_next/image?url=https%3A%2F%2Fapiprod.suzuki.com.bd%2Fapi%2Fuser%2Fmedia%2Fcdn%2Fcms%252Foriginal-f649c366-888a-43ab-9dcf-ecd816af6e72.webp&w=1920&q=75",
    },
    {
      id: 2,
      image:
        "https://suzuki.com.bd/_next/image?url=https%3A%2F%2Fapiprod.suzuki.com.bd%2Fapi%2Fuser%2Fmedia%2Fcdn%2Fcms%252Foriginal-f5878d0b-407c-4fe3-8271-af2751dde9f9.webp&w=1920&q=75",
    },
    {
      id: 3,
      image:
        "https://suzuki.com.bd/_next/image?url=https%3A%2F%2Fapiprod.suzuki.com.bd%2Fapi%2Fuser%2Fmedia%2Fcdn%2Fcms%252Foriginal-776e3197-8b86-4a6a-af59-394b86b451b1.webp&w=1920&q=75",
    },
  ];

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-[calc(100vh-72px)] "
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
