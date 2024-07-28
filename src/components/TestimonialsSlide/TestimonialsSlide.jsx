import "./testimonialsSlide.scss";

import IMAGES from "../../assets/imgs";

const TestimonialsSlide = ({ client }) => {
  return (
    <div className="splide-slide">
      <div className="testimonials-single text-center">
        <div className="testimnoials-header">
          <div className="testimnoials-img">
            <img src={IMAGES[client.image]} alt={client.name} loading="lazy" />
          </div>
          <h3>Eng\ {client.name}</h3>
          <h4>{client.title}</h4>
        </div>
        <p>{client.testimonial}</p>
      </div>
    </div>
  );
};

export default TestimonialsSlide;
