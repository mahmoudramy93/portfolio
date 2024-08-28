import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

import AOS from "aos";

import { CustomTitle } from "@components/common";
import { ServiceCard } from "@components/portfolio";
import { TServices } from "types/servicesTypes";
import { services } from "@data/data.json";

import styles from "./ourServices.module.scss";
const { our_services } = styles;

const OurServices = () => {
  useEffect(() => {
    AOS.init({ duration: 2500, easing: "ease-in-out" });
  }, []);

  return (
    <section className={`${our_services}`} id="our_services">
      <Container>
        <CustomTitle title={"Services"} description={"What I do"} />
        <Row>
          <Col sm={12} xl={6}>
            {services &&
              services
                .map((service: TServices) => {
                  return (
                    <Col key={service.id} className="mb-4">
                      <ServiceCard
                        id={service.id}
                        title={service.title}
                        description={service.description}
                        icon={service.icon}
                        aosEffect={service.aosEffect}
                      />
                    </Col>
                  );
                })
                .slice(0, 2)}
          </Col>
          <Col sm={12} xl={6}>
            {services &&
              services
                .map((service: TServices) => {
                  return (
                    <Col key={service.id} className="mb-4">
                      <ServiceCard
                        id={service.id}
                        title={service.title}
                        description={service.description}
                        icon={service.icon}
                        aosEffect={service.aosEffect}
                      />
                    </Col>
                  );
                })
                .slice(2, 4)}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurServices;
