import { Container } from "react-bootstrap";
import { useEffect } from "react";
import AOS from "aos";

import { CustomTitle, SkillsSubTitle } from "../../components/index";
import IMAGES from "../../assets/imgs";

import "aos/dist/aos.css";
import "./skills.scss";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="skills" id="skills">
      <Container>
        <CustomTitle
          title={"Skills"}
          description={"There Is My General Skills"}
        />
        <div className="row justify-content-center">
          <div className="d-flex technical-skills flex-wrap justify-content-center">
            <section className="col-sm-12 col-lg-6 mb-3" data-aos="fade-right">
              <SkillsSubTitle subTitle={"System Administration"} />
              <div className="d-flex justify-content-center flex-wrap">
                <div className="skill col-md-2 col-4">
                  <img src={IMAGES.windows} alt="windows" loading="lazy" />
                </div>
                <div className="skill col-md-2 col-4">
                  <img src={IMAGES.linux} alt="linux" loading="lazy" />
                </div>
                <div className="skill col-md-2 col-4">
                  <img src={IMAGES.ciscoColored} alt="cisco" loading="lazy" />
                </div>
                <div className="skill col-md-2 col-4">
                  <img
                    src={IMAGES.fortinetWhite}
                    alt="fortinet"
                    loading="lazy"
                  />
                </div>
                <div className="skill col-md-2 col-4">
                  <img src={IMAGES.azure} alt="azure" loading="lazy" />
                </div>
                <div className="skill col-md-2 col-4">
                  <img src={IMAGES.vmwareWhite} alt="vmware" loading="lazy" />
                </div>
                <div className="skill col-md-2 col-4">
                  <img
                    src={IMAGES.powershellColored}
                    alt="powershell"
                    loading="lazy"
                  />
                </div>
                <div className="skill col-md-2 col-4">
                  <img src={IMAGES.veeam} alt="Veeam" loading="lazy" />
                </div>
              </div>
            </section>
            <section className="col-sm-12 col-lg-6 mb-3" data-aos="fade-left">
              <SkillsSubTitle subTitle={"Software Engineering"} />
              <div className="d-flex justify-content-center flex-wrap">
                <div className="skill col-md-2 col-4">
                  <img src={IMAGES.bash} alt="bash" loading="lazy" />
                </div>
                <div className="skill col-md-2 col-4">
                  <img src={IMAGES.python} alt="python" loading="lazy" />
                </div>
                <div className="skill col-md-2 col-4">
                  <img src={IMAGES.mysql} alt="mysql" loading="lazy" />
                </div>
                <div className="skill col-md-2 col-4">
                  <img src={IMAGES.nosqlColored} alt="nosql" loading="lazy" />
                </div>
                <div className="skill col-md-2 col-4">
                  <img src={IMAGES.pytest} alt="Pytest" loading="lazy" />
                </div>
                <div className="skill col-md-2 col-4">
                  <img src={IMAGES.node} alt="node" loading="lazy" />
                </div>
                <div className="skill col-md-2 col-4">
                  <img src={IMAGES.flaskWhite} alt="flask" loading="lazy" />
                </div>
                <div className="skill col-md-2 col-4">
                  <img
                    src={IMAGES.resetApiColored}
                    alt="reset api"
                    loading="lazy"
                  />
                </div>
              </div>
            </section>
            <section className="col-sm-12 col-lg-6" data-aos="fade-up">
              <SkillsSubTitle subTitle={"Devops"} />
              <div className="d-flex justify-content-center flex-wrap">
                <div className="skill col-md-2 col-4">
                  <img src={IMAGES.linux} alt="linux" loading="lazy" />
                </div>
                <div className="skill col-md-2 col-4">
                  <img src={IMAGES.azure} alt="azure" loading="lazy" />
                </div>
                <div className="skill col-md-2 col-4">
                  <img src={IMAGES.awsColored} alt="aws" loading="lazy" />
                </div>
                <div className="skill col-md-2 col-4">
                  <img src={IMAGES.dockerColored} alt="docker" loading="lazy" />
                </div>
                <div className="skill col-md-2 col-4">
                  <img src={IMAGES.bash} alt="bash" loading="lazy" />
                </div>
                <div className="skill col-md-2 col-4">
                  <img
                    src={IMAGES.kubernetesColored}
                    alt="kubernetes"
                    loading="lazy"
                  />
                </div>
                <div className="skill col-md-2 col-4">
                  <img src={IMAGES.python} alt="python" loading="lazy" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
