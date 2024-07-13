import { useEffect } from "react";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";

import IMAGES from "../../assets/imgs";

import "./project.scss";
import "aos/dist/aos.css";

const Project = ({ project, aosAnimation }) => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="project mb-5" data-aos={aosAnimation}>
      <div className="project-header position-relative">
        <figure className="mb-0">
          <img
            src={IMAGES[project.image.src]}
            alt={project.image.alt}
            loading="lazy"
            width="100%"
          />
        </figure>
        <div className="project-header-overlay">
          <a href={project.githubLink} target="_blank">
            <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
          </a>
        </div>
      </div>
      <div className="project-body">
        <div className="techologies">
          <ul className="d-flex align-items-center techo-list">
            <li className="techo-item">node</li>
            <li className="techo-item">mongodb</li>
          </ul>
        </div>
        <div className="info">
          <h3 className="project-name">{project.name}</h3>
          <p className="project-description mb-0">{project.description}</p>
        </div>
      </div>
      <div className="project-footer">
        <a href={project.liveLink} className="project-live" target="_blank">
          Preview
          <span>
            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Project;
