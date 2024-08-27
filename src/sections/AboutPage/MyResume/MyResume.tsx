import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import { Col, Container, Row } from "react-bootstrap";

import { CustomTitle } from "@components/common";

import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./myResume.module.scss";
const {
  my_resume,
  subtitle,
  main_timeline,
  timeline,
  left,
  right,
  card,
  date,
  role,
  custom_btn,
} = styles;

const MyResume = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className={my_resume}>
      <Container>
        <CustomTitle title={"My Resume"} description={"There Is My CV"} />
        <Row>
          <Col>
            <h3 className={subtitle}>
              <span className="me-2">
                <FontAwesomeIcon icon={faBriefcase} />
              </span>
              experience
            </h3>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className={main_timeline}>
              <div className={`${timeline} ${left}`} data-aos="fade-right">
                <div className={`${card} card`}>
                  <p className={`${date} mb-0`}>Jun 2019 - Present</p>
                  <h4 className="mb-0">Harvest Foods Groub</h4>
                  <p className={`mb-0 ${role}`}>
                    Senior System Administrator, I.T Infrastructure Engineer
                  </p>
                </div>
              </div>
              <div className={`${timeline} ${right}`} data-aos="fade-left">
                <div className={`${card} card`}>
                  <p className={`${date} mb-0`}>Dec 2017 - Jun 2019</p>
                  <h4 className="mb-0">Technical Support, Network Engineer</h4>
                  <p className={`mb-0 ${role}`}>Arab Computer Company</p>
                </div>
              </div>
              <div className={`${timeline} ${left}`} data-aos="fade-right">
                <div className={`${card} card`}>
                  <p className={`${date} mb-0`}>Apr 2015- Dec 2017</p>
                  <h4 className="mb-0">Computer Maintenance Engineer</h4>
                  <p className={`mb-0 ${role}`}>IT Solution Company</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="mt-5">
            <h3 className={subtitle}>
              <span className="me-2">
                <FontAwesomeIcon icon={faBriefcase} />
              </span>
              education
            </h3>
          </Col>
        </Row>
        <Row>
          <div className="col-sm-6 mb-4 mb-md-0">
            <div className={`${card} card`} data-aos="fade-right">
              <p className={`${date} mb-0`}>Jan 2023</p>
              <h4>Holberton School</h4>
              <p className={`mb-0 ${role}`}>
                Diploma, Computer Software Engineering
              </p>
              <a
                href="https://kma.edu.eg/"
                className={custom_btn}
                target="_blank"
              >
                Holberton School
              </a>
            </div>
          </div>
          <div className="col-sm-6 mb-4 mb-md-0">
            <div className={`${card} card`} data-aos="fade-left">
              <p className={`${date} mb-0`}>Sep 2012 Oct 2016</p>
              <h4>King Marriott Academy - KMA</h4>
              <p className={`mb-0 ${role}`}>
                Bachelor's, Management Information Systems, General
              </p>
              <a
                href="https://kma.edu.eg/"
                className={custom_btn}
                target="_blank"
              >
                King Marriott Academy - KMA
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default MyResume;
