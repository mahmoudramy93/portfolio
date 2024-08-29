import { CustomTitle } from "@components/common";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./generalSkills.module.scss";
import { resetApi } from "@assets/imgs/Tools_Icons";
const {
  general_skills,
  row,
  col,
  circle_container,
  text_container,
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
  text_container_1,
  text_container_2,
  text_container_3,
  text_container_4,
  text_container_5,
  text_container_6,
  text_container_7,
  text_container_8,
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
          <Col sm={12} xxl={6} className={col}>
            <div className={circle_container}>
              <div className={center_title}>API Security</div>
              <div className={`${subtitle} ${subtitle_1} flex-column gap-2`}>
                <img src={resetApi} alt="reset api" className="w-100" />
                {/* Asset Management 1 */}
                <div className={`${text_container} ${text_container_1}`}>
                  texttexttexttextexttexttexttexttext
                </div>
              </div>
              <div className={`${subtitle} ${subtitle_2}`}>
                <div className={`${text_container} ${text_container_2}`}>
                  texttexttexttextexttexttexttexttext
                </div>
                Code Injection 2
              </div>
              <div
                className={`${subtitle} ${subtitle_3} d-flex flex-column align-items-center overflow-hidden`}
              >
                <img src={resetApi} alt="reset api" className="w-100" />
                Data 3
              </div>
              <div className={`${subtitle} ${subtitle_4}`}>
                <div className={`${text_container} ${text_container_4}`}>
                  texttexttexttextexttexttexttexttext
                </div>
                Object Level Authorization 4
              </div>
              <div className={`${subtitle} ${subtitle_5}`}>
                <div className={`${text_container} ${text_container_5}`}>
                  texttexttexttextexttexttexttexttext
                </div>
                Logging and Monitoring 5
              </div>
              <div className={`${subtitle} ${subtitle_6}`}>
                <div className={`${text_container} ${text_container_6}`}>
                  texttexttexttextexttexttexttexttext
                </div>
                Functional Level Authorization 6
              </div>
              <div
                className={`${subtitle}  ${subtitle_7} d-flex flex-column align-items-center overflow-hidden  `}
              >
                <img src={resetApi} alt="reset api" className="w-100" />
                Security 7
              </div>
              <div className={`${subtitle} ${subtitle_8}`}>
                <div className={`${text_container} ${text_container_8}`}>
                  texttexttexttextexttexttexttexttext
                </div>
                User Authentication 8
              </div>
            </div>
          </Col>
          <Col sm={12} xxl={6}>
            <div className={circle_container}>
              <div className={center_title}>API Security</div>
              <div className={`${subtitle} ${subtitle_1} flex-column gap-2`}>
                <img src={resetApi} alt="reset api" className="w-100" />
                {/* Asset Management 1 */}
                <div className={`${text_container} ${text_container_1}`}>
                  texttexttexttextexttexttexttexttext
                </div>
              </div>
              <div className={`${subtitle} ${subtitle_2}`}>
                <img src={resetApi} alt="reset api" className="w-100" />
                <div className={`${text_container} ${text_container_2}`}>
                  texttexttexttextexttexttexttexttext
                </div>
                Code Injection 2
              </div>
              <div className={`${subtitle} ${subtitle_3}`}>Data Exposure 3</div>
              <div className={`${subtitle} ${subtitle_4}`}>
                <div className={`${text_container} ${text_container_4}`}>
                  texttexttexttextexttexttexttexttext
                </div>
                Object Level Authorization 4
              </div>
              <div className={`${subtitle} ${subtitle_5}`}>
                <div className={`${text_container} ${text_container_5}`}>
                  texttexttexttextexttexttexttexttext
                </div>
                Logging and Monitoring 5
              </div>
              <div className={`${subtitle} ${subtitle_6}`}>
                <div className={`${text_container} ${text_container_6}`}>
                  texttexttexttextexttexttexttexttext
                </div>
                Functional Level Authorization 6
              </div>
              <div className={`${subtitle} ${subtitle_1} ${subtitle_7}`}>
                Security Misconfiguration 7
              </div>
              <div className={`${subtitle} ${subtitle_8}`}>
                <div className={`${text_container} ${text_container_8}`}>
                  texttexttexttextexttexttexttexttext
                </div>
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
