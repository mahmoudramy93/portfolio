import { testimonials } from "@data/data.json";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

import "./testimonials.module.scss";
import { CustomTitle } from "@components/common";
import TestimonialsSlide from "@components/portfolio/TestimonialsSlide/TestimonialsSlide";

const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <div className="container">
        <CustomTitle
          title={"Testimonials"}
          description={"Happy Clients Says"}
        />
        <div className="row">
          <div className="col-12">
            <Splide
              options={{
                type: "loop",
                perPage: 3,
                focus: "center",
                pagination: true,
                breakpoints: {
                  1200: {
                    perPage: 2,
                  },
                  991: {
                    perPage: 1,
                  },
                },
              }}
              hasTrack={false}
            >
              <SplideTrack>
                {testimonials.map((testimonial) => {
                  return (
                    <SplideSlide key={testimonial.id}>
                      <TestimonialsSlide client={testimonial} />
                    </SplideSlide>
                  );
                })}
              </SplideTrack>
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
