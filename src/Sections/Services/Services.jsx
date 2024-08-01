import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CustomTitle } from "../../components";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import AOS from "aos";
import "./services.scss";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 2500, easing: "ease-in-out" });
  }, []);

  return (
    <section className="services position-relative" id="services">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-4 ">
            <div className="service" data-aos="fade-right">
              <div className="service-header">
                <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
              </div>
              <div className="service-body">
                <h4>Web Development</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Numquam beatae perferendis similique eveniet, itaque ad non
                  repellendus officia quia mollitia eius dicta eligendi sint
                  consequuntur fugiat quod culpa voluptatem aperiam!{" "}
                </p>
              </div>
            </div>
            <div className="service" data-aos="fade-right">
              <div className="service-header">
                <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
              </div>
              <div className="service-body">
                <h4>Web Development</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Numquam beatae perferendis similique eveniet, itaque ad non
                  repellendus officia quia mollitia eius dicta eligendi sint
                  consequuntur fugiat quod culpa voluptatem aperiam!{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="service" data-aos="fade-left">
              <div className="service-header">
                <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
              </div>
              <div className="service-body">
                <h4>Web Development</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Numquam beatae perferendis similique eveniet, itaque ad non
                  repellendus officia quia mollitia eius dicta eligendi sint
                  consequuntur fugiat quod culpa voluptatem aperiam!{" "}
                </p>
              </div>
            </div>
            <div className="service" data-aos="fade-left">
              <div className="service-header">
                <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
              </div>
              <div className="service-body">
                <h4>Web Development</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Numquam beatae perferendis similique eveniet, itaque ad non
                  repellendus officia quia mollitia eius dicta eligendi sint
                  consequuntur fugiat quod culpa voluptatem aperiam!{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <CustomTitle title={"Services"} description={"What I do"} />
      </div>
    </section>
  );
};

export default Services;
