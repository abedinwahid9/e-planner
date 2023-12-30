import { Swiper, SwiperSlide } from "swiper/react";
import ReviewsCard from "../../Card/ReviewsCard";
import { useLoaderData } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const Reviews = () => {
  const data = useLoaderData();

  return (
    <div className="my-20">
      <h2 className="lg:text-5xl md:text-2xl text-lg font-semibold text-center">
        Clients Reviews
      </h2>
      <div className="divider w-3/4 mx-auto mb-10"></div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {data?.reviews ? (
          data.reviews.map((reviewone) => (
            <SwiperSlide key={reviewone.id} className="w-2/6 shadow-lg">
              <ReviewsCard reviewone={reviewone} />
            </SwiperSlide>
          ))
        ) : (
          <p>Loading reviews...</p>
        )}
      </Swiper>
    </div>
  );
};

export default Reviews;
