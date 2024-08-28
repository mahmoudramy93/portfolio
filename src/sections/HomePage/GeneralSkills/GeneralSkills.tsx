import { CustomTitle } from "@components/common";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./generalSkills.module.scss";
const {
  general_skills,
  row,
  col,
  circle_container,
  center_title,
  subtitle,
  subtitle_1,
  subtitle_2,
  subtitle_3,
  subtitle_4,
  subtitle_5,
  subtitle_6,
  subtitle_7,
  subtitle_8,
} = styles;

const GeneralSkills = () => {
  return (
    <section className={general_skills} id="general_skills">
      <Container>
        <CustomTitle
          title={"My Skills"}
          description={"There Is My General Skills"}
        />
        <Row className={row}>
          <Col sm={12} xxl={6} className={col} >
            <div className={circle_container}>
              <div className={center_title}>API Security</div>
              <div className={`${subtitle} ${subtitle_1}`}>
                Asset Management 1
              </div>
              <div className={`${subtitle} ${subtitle_2}`}>
                Code Injection 2
              </div>
              <div className={`${subtitle} ${subtitle_3}`}>Data Exposure 3</div>
              <div className={`${subtitle} ${subtitle_4}`}>
                Object Level Authorization 4
              </div>
              <div className={`${subtitle} ${subtitle_5}`}>
                Logging and Monitoring 5
              </div>
              <div className={`${subtitle} ${subtitle_6}`}>
                Functional Level Authorization 6
              </div>
              <div className={`${subtitle} ${subtitle_1} ${subtitle_7}`}>
                Security Misconfiguration 7
              </div>
              <div className={`${subtitle} ${subtitle_8}`}>
                User Authentication 8
              </div>
            </div>
          </Col>
          <Col sm={12} xxl={6}>
            <div className={circle_container}>
              <div className={center_title}>API Security</div>
              <div className={`${subtitle} ${subtitle_1}`}>
                Asset Management 1
              </div>
              <div className={`${subtitle} ${subtitle_2}`}>
                Code Injection 2
              </div>
              <div className={`${subtitle} ${subtitle_3}`}>Data Exposure 3</div>
              <div className={`${subtitle} ${subtitle_4}`}>
                Object Level Authorization 4
              </div>
              <div className={`${subtitle} ${subtitle_5}`}>
                Logging and Monitoring 5
              </div>
              <div className={`${subtitle} ${subtitle_6}`}>
                Functional Level Authorization 6
              </div>
              <div className={`${subtitle} ${subtitle_1} ${subtitle_7}`}>
                Security Misconfiguration 7
              </div>
              <div className={`${subtitle} ${subtitle_8}`}>
                User Authentication 8
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GeneralSkills;
