import { CustomTitle } from "@components/common";

import styles from "./allSkills.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { resetApi, bash } from "@assets/imgs/Tools_Icons";
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
          <Col md={12} lg={6} className="skill-category mb-md-4 mb-lg-0">
            <div className="cards_container d-flex gap-3 flex-wrap ">
              <div>
                <h4 className="skill-subtitle text-white fs-6">
                  Linux/Unix and Windows Server Administration
                </h4>
                <div className="card_item border d-flex align-items-center flex-wrap gap-lg-3 gap-xl-0">
                  <img src={resetApi} alt="Security+" className="skill-icon" />
                  <img src={resetApi} alt="CSA" className="skill-icon" />
                  <img src={resetApi} alt="eCDFP" className="skill-icon" />
                  <img src={bash} alt="BTL1" className="skill-icon" />
                </div>
              </div>
              <div>
                <h4 className="skill-subtitle text-white fs-6">Linux/Unix</h4>

                <div className="card_item border d-flex align-items-center">
                  <img src={resetApi} alt="CSA" className="skill-icon" />
                </div>
              </div>
            </div>
          </Col>
          <Col md={12} lg={6} className="skill-category mb-md-4 mb-lg-0">
            <div className="cards_container d-flex gap-3 flex-wrap ">
              <div>
                <h4 className="skill-subtitle text-white fs-6">
                  Linux/Unix and Windows Server Administration
                </h4>
                <div className="card_item border d-flex align-items-center flex-wrap gap-lg-3 gap-xl-0">
                  <img src={resetApi} alt="Security+" className="skill-icon" />
                  <img src={resetApi} alt="CSA" className="skill-icon" />
                  <img src={resetApi} alt="eCDFP" className="skill-icon" />
                  <img src={resetApi} alt="BTL1" className="skill-icon" />
                </div>
              </div>
              <div>
                <h4 className="skill-subtitle text-white fs-6">Linux/Unix</h4>

                <div className="card_item border d-flex align-items-center">
                  <img src={resetApi} alt="CSA" className="skill-icon" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AllSkills;
