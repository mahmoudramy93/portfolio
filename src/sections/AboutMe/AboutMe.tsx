import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faGlobe,
  faHouseLaptop,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./aboutMe.module.scss";
import { CustomLink, CustomTitle } from "@components/common";

const {
  aboutMe,
  auto_type_container,
  little_info_about_me,
  experience_info,
  contact_info,
} = styles;

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <section className={aboutMe} id="about_me">
      <Container>
        <CustomTitle title={"About Me"} description={"There Is All About Me"} />
        <Row>
          <Col xl={6}>
            <div className="position-relative">
              <div className="position-relative mb-sm-4">
                <img
                  src={require("../../assets/imgs/about.webp")}
                  alt="about"
                  loading="lazy"
                  className="w-100"
                />
                <div className={auto_type_container}>
                  <p className="mb-0" />
                  <Typewriter
                    options={{
                      strings: [
                        "Hello World 👋",
                        "I'am Mahmoud Elbehery",
                        "Freelance Software Engineer",
                        "Senior System Administrator",
                        "Backend Developer 💻",
                      ],
                      autoStart: true,
                      loop: true,
                      // A lower value will make the effect faster
                      delay: 50,
                    }}
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6} data-aos="zoom-in">
            <div className={little_info_about_me}>
              <p className={experience_info}>
                With 7+ years in IT infrastructure, network management, system
                operations, and service management, I offer expertise as a
                Senior System Administrator, specializing in security,
                infrastructure engineering, and DevOps roles. My journey into
                software engineering equips me to lead large projects,
                seamlessly integrating DevOps practices. Thriving on
                collaboration, I excel in crafting innovative solutions and
                driving team efforts towards excellence, even under pressure.
                Seeking roles where I can leverage my practical software
                engineering experience and contribute to
                impactful&nbsp;projects.
              </p>
              <CustomLink link={"/about"} text={"More about me"} />
              <ul
                className={`${contact_info} d-flex flex-wrap flex-column gap-3`}
              >
                <li>
                  <FontAwesomeIcon icon={faHouseLaptop}></FontAwesomeIcon>
                  <b>Freelance:</b> Available
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                  <b>Email: </b>
                  <a href="mailto:mahmoudramy93@outlook.com">
                    mahmoudramy93@outlook.com
                  </a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhoneVolume}></FontAwesomeIcon>
                  <b>Phone: </b>
                  <a href="https://wa.me/2001119423404">01119423404</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                  <b>Address: </b>Alex - Egypt
                </li>
                <li>
                  <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
                  <b>Spoken Langages: </b>Arbic - English
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
