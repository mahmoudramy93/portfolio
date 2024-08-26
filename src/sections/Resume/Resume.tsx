import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";

import "aos/dist/aos.css";
import "./resume.module.scss";
import { CustomTitle } from "@components/common";
import CustomButton from "@components/portfolio/CustomButton/CustomButton";

const Resume = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="resume" id="resume">
      <div className="container">
        <CustomTitle title={"My Resume"} description={"There Is My CV"} />
        <div className="row">
          <div className="col-md-12">
            <div className="expreience">
              <h3 className="subtitle">
                <FontAwesomeIcon icon={faBriefcase} />
                experience
              </h3>
              <section>
                <div className="container py-5">
                  <div className="main-timeline">
                    <div className="timeline left" data-aos="fade-right">
                      <div className="card">
                        <div className="card-body p-4">
                          <p className="date mb-0">Jun 2019 - Present</p>
                          <h4>Harvest Foods Groub</h4>
                          <p className="mb-0">
                            Senior System Administrator, I.T Infrastructure
                            Engineer
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="timeline right" data-aos="fade-left">
                      <div className="card">
                        <div className="card-body p-4">
                          <p className="date mb-0">Dec 2017 - Jun 2019</p>
                          <h4>Technical Support, Network Engineer</h4>
                          <p className="mb-0">Arab Computer Company</p>
                        </div>
                      </div>
                    </div>
                    <div className="timeline left" data-aos="fade-right">
                      <div className="card">
                        <div className="card-body p-4">
                          <p className="date mb-0">Apr 2015- Dec 2017</p>
                          <h4>Computer Maintenance Engineer</h4>
                          <p className="mb-0">IT Solution Company</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="eduacation">
              <h3 className="subtitle mb-5">
                <FontAwesomeIcon icon={faBriefcase} />
                education
              </h3>
            </div>
          </div>
        </div>
        <div className="row edu-cards">
          <div className="col-sm-6 mb-4 mb-md-0">
            <div className="card" data-aos = 'fade-right'>
              <div className="card-body">
                <h5>Jan 2023</h5>
                <h4>Holberton School</h4>
                <p>Diploma, Computer Software Engineering</p>
                <CustomButton text={"Holberton School"} />
              </div>
            </div>
          </div>
          <div className="col-sm-6 mb-4 mb-md-0">
            <div className="card" data-aos = 'fade-left'>
              <div className="card-body">
                <h5>Sep 2012 Oct 2016</h5>
                <h4>King Marriott Academy - KMA</h4>
                <p>Bachelor's, Management Information Systems, General</p>
                <CustomButton text={"King Marriott Academy - KMA"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
