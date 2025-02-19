import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import quotes from "../../assets/quotes.svg";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Jack Thompson",
      address: "Los Angeles, USA",
      pic: "https://randomuser.me/api/portraits/men/10.jpg",
      review:
        "Fantastic bike shop! Bought a mountain bike, and it rides like a dream. Great customer service too!",
    },
    {
      id: 2,
      name: "Daniel Robinson",
      address: "Berlin, Germany",
      pic: "https://randomuser.me/api/portraits/men/25.jpg",
      review:
        "Highly professional bike shop! Got my custom bike assembled here, and the workmanship was top-notch.",
    },
    {
      id: 3,
      name: "Sophia Miller",
      address: "Toronto, Canada",
      pic: "https://randomuser.me/api/portraits/men/10.jpg",
      review:
        "Excellent selection of bikes and accessories. Staff was very knowledgeable and helped me find the perfect road bike!",
    },
    {
      id: 4,
      name: "Ryan Carter",
      address: "Manchester, UK",
      pic: "https://randomuser.me/api/portraits/men/18.jpg",
      review:
        "Had a great experience! My bike was serviced quickly, and it rides smoother than ever. Highly recommended!",
    },
    {
      id: 5,
      name: "Emily Wilson",
      address: "Sydney, Australia",
      pic: "https://randomuser.me/api/portraits/men/10.jpg",
      review:
        "Great quality bikes at affordable prices. The staff was super friendly and helped me choose the perfect bike!",
    },
  
  ];

  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4">
        <div className="">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-5 md:mb-8">
            What our customer says!
          </h2>
        </div>
        <div className="w-full">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 7000 }}
            loop
            slidesPerView={3} // Show 3 reviews at once
            spaceBetween={30} // Add spacing between slides
            breakpoints={{
              320: { slidesPerView: 1 }, // 1 review on small screens
              640: { slidesPerView: 2 }, // 2 reviews on tablets
              1024: { slidesPerView: 3 }, // 3 reviews on larger screens
            }}
            className="max-w-7xl"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="p-6 cursor-grabbing border border-primary/30 text-gray-300 rounded-lg shadow-lg flex flex-col justify-between items-center h-full min-h-[350px]">
                  <p className="italic max-w-xl text-2xl">
                    {review.review}
                  </p>
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-start gap-3">
                      <img
                        className="size-14 rounded-full"
                        src={review.pic}
                        alt=""
                      />
                      <div className="flex flex-col gap-2">
                        <span className="text-lg tracking-tight font-medium">
                          {review.name}
                        </span>
                        <span className="text-sm -mt-2">{review.address}</span>
                      </div>
                    </div>
                    <div>
                      <img src={quotes} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
