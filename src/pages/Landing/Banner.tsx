import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import bg1 from '../../assets/banner1.webp';
import bg2 from '../../assets/banner2.webp';
import bg3 from '../../assets/banner3.webp';
import bg4 from '../../assets/bikes-banner/web-banner.webp'
import bg5 from '../../assets/bikes-banner/ns400-homebanner-web.jpg'
const Banner = () => {
  const banners = [
    {
      id: 1,
      image: bg1,
    },
    // {
    //   id: 2,
    //   image: bg4
    // },
    {
      id: 3,
      image: bg3
    },
    {
      id: 3,
      image: bg2
    },
    // {
    //   id: 3,
    //   image: bg5
    // },
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
    </div>
  );
};

export default Banner;
