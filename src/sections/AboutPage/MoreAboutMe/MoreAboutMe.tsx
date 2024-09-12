import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CustomTitle } from "@components/common";

import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./moreAboutMe.module.scss";
const { more_about_me, title, description } = styles;

const MoreAboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <section className={more_about_me}>
      <Container>
        <CustomTitle title={"More about me"} description={"Know me better"} />
        <Row>
          <Col lg={6}>
            <h4 className={title}>Expertise</h4>

            <p className={description}>
              With over 8 years of experience in IT infrastructure, network
              management, system operations, and service management, I bring a
              wealth of knowledge to every project. My core specialization lies
              in network security and infrastructure engineering for data
              centers. Additionally, embracing software engineering and DevOps
              roles in freelance projects has further enhanced my technological
              proficiency, allowing me to bridge the gap between system
              administration and software development.
              <br />
              <br />
              My diverse background enables me to excel in backend development
              while integrating DevOps practices seamlessly into projects. This
              holistic perspective empowers me to lead initiatives from
              inception to execution efficiently, ensuring successful outcomes
              within budgetary and time constraints. I am driven by
              collaboration and a continuous desire to innovate, applying my
              skills to solve complex challenges.
            </p>
          </Col>
          <Col lg={6}>
            <h4 className={title}>Current Focus</h4>

            <p className={description}>
              Developing backend software(api design and management), database
              schema design and management(SQL, NoSQL), containerization
              (Docker), deployment (cloud and on-premise), and operations
              through automation (IAC using Ansible & Shell), collaboration, and
              continuous integration/continuous deployment (CI/CD) practices.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MoreAboutMe;
