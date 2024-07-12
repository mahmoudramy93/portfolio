import { useEffect } from "react";
import { CustomTitle, CustomLink } from "../../components/index";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faGlobe,
  faHouseLaptop,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typewriter from "typewriter-effect";
import AOS from "aos";

import "./about.scss";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="about" id="about">
      <div className="container position-relative">
        <CustomTitle title={"About Me"} description={"There Is All About Me"} />
        <div className="row">
          <div className="col-lg-6 about-img-container">
            <div className="about-img position-relative">
              <div className="position-relative mb-3">
                <img
                  src={require("../../assets/imgs/about.webp")}
                  alt="about"
                  loading="lazy"
                  className="w-100"
                />
                <div className="info">
                  <p className="auto-type" />{" "}
                  <Typewriter
                    options={{
                      strings: [
                        "Hello World 👋",
                        "I'am Mahmoud Elbehery",
                        "Freelance Software Engineer",
                        "Senior System Administrator",
                        "Backend Developer 💻",
                      ],
                      autoStart: true,
                      loop: true,
                      // A lower value will make the effect faster
                      delay: 50,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 about-img-info" data-aos="zoom-in">
            <p className="about-text">
              With 7+ years in IT infrastructure, network management, system
              operations, and service management, I offer expertise as a Senior
              System Administrator, specializing in security, infrastructure
              engineering, and DevOps roles. My journey into software
              engineering equips me to lead large projects, seamlessly
              integrating DevOps practices. Thriving on collaboration, I excel
              in crafting innovative solutions and driving team efforts towards
              excellence, even under pressure. Seeking roles where I can
              leverage my practical software engineering experience and
              contribute to impactful&nbsp;projects.
            </p>
            <CustomLink link={"/about"} text={"More about me"} />
            <ul>
              <li>
                <FontAwesomeIcon icon={faHouseLaptop}></FontAwesomeIcon>
                <b>Freelance:</b> Available
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                <b>Email: </b>
                <a href="mailto:mahmoudramy93@outlook.com">
                  mahmoudramy93@outlook.com
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhoneVolume}></FontAwesomeIcon>
                <b>Phone: </b>
                <a href="https://wa.me/2001119423404">01119423404</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                <b>Address: </b>Alex - Egypt
              </li>
              <li>
                <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
                <b>Spoken Langages: </b>Arbic - English
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
