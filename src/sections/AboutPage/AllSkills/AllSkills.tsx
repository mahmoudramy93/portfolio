import { CustomTitle } from "@components/common";

import styles from "./allSkills.module.scss";
import { Col, Container, Row } from "react-bootstrap";
const { all_skills } = styles;

const AllSkills = () => {
  return (
    <section className={all_skills}>
      <Container>
        <CustomTitle
          title={"All Skills"}
          description={"There is all my skills"}
        />
        <Row></Row>
      </Container>
    </section>
  );
};

export default AllSkills;
