import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CustomTitle } from "@components/common";
import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./generalSkills.module.scss";
const { general_skills } = styles;

const GeneralSkills = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className={general_skills} id="general_skills">
      <Container>
        <CustomTitle
          title={"Skills"}
          description={"There Is My General Skills"}
        />
        <Row></Row>
      </Container>
    </div>
  );
};

export default GeneralSkills;
