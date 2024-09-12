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
        <Row className="justify-content-between align-items-center">
          
        </Row>
      </Container>
    </section>
  );
};

export default AllSkills;

// <Col md={12} lg={6} className="skill-category mb-md-4 mb-lg-0">
// <div className="cards_container d-flex gap-3 flex-wrap ">
//   <div>
//     <h4 className="skill-subtitle text-white fs-6">
//     Database schema design
//     </h4>
//     <div className="card_item p-2 border d-flex align-items-center flex-wrap gap-lg-3 gap-xl-0 justify-content-between">
//       <img src={mySql} alt="Security+" className="skill-icon" />
//       <img src={noSqlColored} alt="CSA" className="skill-icon" />
//     </div>
//   </div>
//   <div>
//     <h4 className="skill-subtitle text-white fs-6">
//       Proficient in Python, Node.js
//     </h4>
//     <div className="card_item p-2 border d-flex align-items-center justify-content-between">
//       <img src={python} alt="Security+" className="skill-icon" />
//       <img src={node} alt="CSA" className="skill-icon" />
//     </div>
//   </div>
// </div>
// </Col>
