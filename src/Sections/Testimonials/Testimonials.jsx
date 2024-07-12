import { CustomTitle, TestimonialsSlide } from "../../components/index";
import { testimonials } from "../../data/data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "./testimonials.scss";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <div className="container">
        <CustomTitle
          title={"Testimonials"}
          description={"Happy Clients Says"}
        />
        <div className="row">
          <div className="col-md-6 mx-auto">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              {testimonials.map((testimonial) => {
                return (
                  <SwiperSlide key={testimonial.id}>
                    <TestimonialsSlide client={testimonial} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
