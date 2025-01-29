import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import 'swiper/css'

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
        autoplay={{ delay: 7000 }}
        loop
        className="h-[calc(100vh-72px)] "
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative h-full cursor-grabbing">
              {/* Background Image */}
              <img
                src={banner.image}
                alt={banner.title}
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
