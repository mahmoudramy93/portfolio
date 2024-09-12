import { CustomTitle } from "@components/common";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./generalSkills.module.scss";

const { general_skills, subTitle, skillCategory, skillList } = styles;

const GeneralSkills = () => {
  return (
    <section className={general_skills} id="general_skills">
      <Container>
        <CustomTitle
          title={"My Skills"}
          description={"There Is My General Skills"}
        />
        <Row>
          <Col md={6}>
            <div className={skillCategory}>
              <h3 className={subTitle}>System Administration & DevOps</h3>
              <ul className={skillList}>
                <li>Linux/Unix and Windows Server Administration</li>
                <li>
                  Network Configuration and Security (Cisco, Paloalto, Fortinet,
                  Sophos)
                </li>
                <li>Cloud Services Management (AWS, Azure)</li>
                <li>Virtualization Technologies (VMware, Hyper-V)</li>
                <li>Containerization & Orchestration (Docker, Kubernetes)</li>
                <li>CI/CD (GitHub Actions, Argo CD)</li>
                <li>Configuration Management with Ansible, Terraform</li>
                <li>Automation and Scripting (Bash, PowerShell, Python)</li>
                <li>System Monitoring (Datadog, Prometheus)</li>
                <li>Disaster Recovery and Backup Solutions (Veeam, Acronis)</li>
              </ul>
            </div>
          </Col>
          <Col md={6} className="mb-4 mb-lg-0">
            <div className={skillCategory}>
              <h3 className={subTitle}>
                Software Engineering & Web Development
              </h3>
              <ul className={skillList}>
                <li>Proficient in Python, Node.js</li>
                <li>Backend development with Express.js, Flask</li>
                <li>Database schema design (SQL, NoSQL databases)</li>
                <li>API Design & management</li>
                <li>Application deployment using K8s and AWS</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GeneralSkills;

// import {
//   resetApi,
//   linux,
//   windows,
//   cisco,
//   azure,
//   aws,
//   python,
//   noSqlColored,
//   pytest,
//   dockerColored,
//   puppet,
//   node,
//   mySql,
//   ansible,
// } from "@assets/imgs/Tools_Icons";

// circle_container,
// text_container,
// center_title,
// subtitle,
// subtitle_1,
// subtitle_2,
// subtitle_3,
// subtitle_4,
// subtitle_5,
// subtitle_6,
// subtitle_7,
// subtitle_8,
// text_container_1,
// text_container_2,
// text_container_3,
// text_container_4,
// text_container_5,
// text_container_6,
// text_container_7,
// text_container_8,

{
  /* <Col sm={12} xxl={6} className={col}>
            <div className={circle_container}>
              <div className={center_title}>System Administration & DevOps</div>
              <div className={`${subtitle} ${subtitle_1} flex-column gap-2`}>
                <img src={linux} alt="linux" className="w-100" />
                Asset Management 1
                <div className={`${text_container} ${text_container_1}`}>
                  Linux/Unix
                </div>
              </div>
              <div className={`${subtitle} ${subtitle_2}`}>
                <img src={windows} alt="windows" className="w-100" />
                <div className={`${text_container} ${text_container_2}`}>
                  Windows
                </div>
              </div>
              <div
                className={`${subtitle} ${subtitle_3} d-flex flex-column align-items-center overflow-hidden`}
              >
                <img src={resetApi} alt="reset api" className="w-100" />
                ResetApi
              </div>
              <div className={`${subtitle} ${subtitle_4}`}>
                <img src={cisco} alt="cisco" className="w-100" />

                <div className={`${text_container} ${text_container_4}`}>
                  Cisco
                </div>
              </div>
              <div className={`${subtitle} ${subtitle_5}`}>
                <img src={azure} alt="azure" className="w-100" />

                <div className={`${text_container} ${text_container_5}`}>
                  texttexttexttextexttexttexttexttext
                </div>
              </div>
              <div className={`${subtitle} ${subtitle_6}`}>
                <img src={aws} alt="aws" className="w-100" />
                <div className={`${text_container} ${text_container_6}`}>
                  texttexttexttextexttexttexttexttext
                </div>
              </div>
              <div
                className={`${subtitle}  ${subtitle_7} d-flex flex-column align-items-center overflow-hidden  `}
              >
                <img src={python} alt="python" className="w-100" />
              </div>
              <div className={`${subtitle} ${subtitle_8}`}>
                <img src={noSqlColored} alt="noSqlColored" className="w-100" />
                <div className={`${text_container} ${text_container_8}`}>
                  texttexttexttextexttexttexttexttext
                </div>
              </div>
            </div>
          </Col> */
}
