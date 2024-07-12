import { CustomTitle } from "../../components/index";

import IMAGES from "../../assets/imgs";
import "./allSkills.scss";

const AllSkills = () => {
  return (
    <div className="all-skills" id="">
      <div className="container">
        <CustomTitle
          title={"All Skills"}
          description={"There is all my skills"}
        />
        <div className="row">
          <div className="col-lg-4">
            <p className="title">System Administration &amp; DevOps</p>
            <div className="skill-card-skills">
              <ul>
                <li className="skill-list">
                  <div className="skill-card-imgs">
                    <img src={IMAGES.windows} alt="windows" />
                    <img src={IMAGES.linux} alt="linux" />
                  </div>
                  <div>
                    <p className="skill-card-description">
                      Linux/Unix and Windows Server Administration
                    </p>
                  </div>
                </li>
                <li className="skill-list">
                  <div className="skill-card-imgs">
                    <img
                      className="colored"
                      src={IMAGES.ciscoColored}
                      alt="cisco"
                    />
                    <img
                      className="colored"
                      src={IMAGES.paloaltoColored}
                      alt="paloalto"
                    />
                    <img
                      className="colored"
                      src={IMAGES.fortinetWhite}
                      alt="fortinet"
                    />
                    <img src={IMAGES.sophos} alt="sophos" />
                  </div>
                  <div>
                    <p className="skill-card-description">
                      Network Configuration and Security
                    </p>
                  </div>
                </li>
                <li className="skill-list">
                  <div className="skill-card-imgs">
                    <img src={IMAGES.azure} alt="azure" />
                    <img
                      className="colored"
                      src={IMAGES.awsColored}
                      alt="Aws"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="skill-card-description">
                      Cloud Services Management (AWS, Azure)
                    </p>
                  </div>
                </li>
                <li className="skill-list">
                  <div className="skill-card-imgs">
                    <img src={IMAGES.vmwareWhite} alt="vmware" />
                  </div>
                  <div>
                    <p className="skill-card-description">
                      Virtualization Technologies (VMware, Hyper-V)
                    </p>
                  </div>
                </li>
                <li className="skill-list">
                  <div className="skill-card-imgs">
                    <img
                      className="colored"
                      src={IMAGES.dockerColored}
                      alt="docker"
                    />
                    <img
                      className="colored"
                      src={IMAGES.kubernetesColored}
                      alt="kubernetes"
                    />
                  </div>
                  <div>
                    <p className="skill-card-description">
                      Containerization (Docker, Kubernetes)
                    </p>
                  </div>
                </li>
                <li className="skill-list">
                  <div className="skill-card-imgs">
                    <img
                      className="colored"
                      src={IMAGES.bash}
                      alt="bash"
                      loading="lazy"
                    />
                    <img
                      className="colored"
                      src={IMAGES.powershellColored}
                      alt="powershell"
                      loading="lazy"
                    />
                    <img src={IMAGES.python} alt="python" loading="lazy" />
                  </div>
                  <div>
                    <p className="skill-card-description">
                      Automation and Scripting (Bash, PowerShell, Python)
                    </p>
                  </div>
                </li>
                <li className="skill-list">
                  <div className="skill-card-imgs">
                    <img src={IMAGES.mysql} alt="mysql" loading="lazy" />
                    <img
                      className="colored"
                      src={IMAGES.nosqlColored}
                      alt="nosql"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="skill-card-description">
                      Database Management (SQL, NoSQL)
                    </p>
                  </div>
                </li>
                <li className="skill-list">
                  <div className="skill-card-imgs">
                    <img src={IMAGES.veeam} alt="veeam" loading="lazy" />
                    <img src={IMAGES.acronis} alt="Acronis" loading="lazy" />
                  </div>
                  <div>
                    <p className="skill-card-description">
                      Disaster Recovery and Backup Solutions
                    </p>
                  </div>
                </li>
                <li className="skill-list">
                  <p className="skill-card-description">
                    System Monitoring and Performance Tuning
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <p className="title">Software Engineering &amp; Web Developer</p>
            <div className="skill-card-skills">
              <ul>
                <li className="skill-list">
                  <div className="skill-card-imgs">
                    <img src={IMAGES.python} alt="python" loading="lazy" />
                    <img
                      className="colored"
                      src={IMAGES.node}
                      alt="node"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="skill-card-description">
                      Develop and maintain code
                    </p>
                  </div>
                </li>
                <li className="skill-list">
                  <div className="skill-card-imgs">
                    <img src={IMAGES.pytest} alt="Pytest" loading="lazy" />
                  </div>
                  <div>
                    <p className="skill-card-description">Write unit tests</p>
                  </div>
                </li>
                <li className="skill-list">
                  <div className="skill-card-imgs">
                    <img
                      className="colored"
                      src={IMAGES.django}
                      alt="django"
                      loading="lazy"
                    />
                    <img
                      className="colored"
                      src={IMAGES.flaskWhite}
                      alt="flask"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="skill-card-description">
                      Write back-end code and logic
                    </p>
                  </div>
                </li>
                <li className="skill-list">
                  <div className="skill-card-imgs">
                    <img src={IMAGES.mysql} alt="mysql" loading="lazy" />
                    <img
                      className="colored"
                      src={IMAGES.nosqlColored}
                      alt="nosql"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="skill-card-description">
                      Build the database schema
                    </p>
                  </div>
                </li>
                <li className="skill-list">
                  <div className="skill-card-imgs">
                    <img
                      className="colored"
                      src={IMAGES.dockerColored}
                      alt="docker"
                      loading="lazy"
                    />
                    <img
                      className="colored"
                      src={IMAGES.awsColored}
                      alt="AWS"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="skill-card-description">
                      Deploy applications using tools like Docker and AWS
                    </p>
                  </div>
                </li>
                <li className="skill-list">
                  <div className="skill-card-imgs">
                    <img
                      className="colored"
                      src={IMAGES.resetApiColored}
                      alt="REST API"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="skill-card-description">
                      Provide mechanisms to communicate with and update the
                      back-end
                    </p>
                  </div>
                </li>
                <li className="skill-list">
                  <div className="skill-card-imgs">
                    <img
                      className="colored"
                      src={IMAGES.ansible}
                      alt="ansible"
                      loading="lazy"
                    />
                    <img
                      className="colored"
                      src={IMAGES.puppetColored}
                      alt="puppet"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="skill-card-description">
                      Configuration Management (CM), Infrastructure as code
                      (IaC)
                    </p>
                  </div>
                </li>
                <li className="skill-list">
                  <div>
                    <p className="skill-card-description">
                      Maintain the back-end updated and optimized
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <p className="title">Soft Skills</p>
            <div className="skill-card-skills">
              <ul>
                <li className="skill-list">
                  <div>
                    <p className="skill-card-description">
                      Effective Communication
                    </p>
                  </div>
                </li>
                <li className="skill-list">
                  <div>
                    <p className="skill-card-description">
                      Problem-Solving and Critical Thinking
                    </p>
                  </div>
                </li>
                <li className="skill-list">
                  <div>
                    <p className="skill-card-description">
                      Adaptability and Flexibility
                    </p>
                  </div>
                </li>
                <li className="skill-list">
                  <div>
                    <p className="skill-card-description">
                      Time Management and Prioritization
                    </p>
                  </div>
                </li>
                <li className="skill-list">
                  <div>
                    <p className="skill-card-description">
                      Teamwork and Collaboration
                    </p>
                  </div>
                </li>
                <li className="skill-list">
                  <div>
                    <p className="skill-card-description">
                      Customer Service Orientation
                    </p>
                  </div>
                </li>
                <li className="skill-list">
                  <div>
                    <p className="skill-card-description">
                      Stress Management and Resilience
                    </p>
                  </div>
                </li>
                <li className="skill-list">
                  <div>
                    <p className="skill-card-description">
                      Continuous Learning and Professional Development
                    </p>
                  </div>
                </li>
                <li className="skill-list">
                  <div>
                    <p className="skill-card-description">
                      Leadership and Mentoring
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllSkills;
