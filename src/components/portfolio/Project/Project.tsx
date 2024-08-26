import { useEffect } from "react";

import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AOS from "aos";
import "aos/dist/aos.css";

import { TProject } from "types/projectTypes";
import PROJECTS_IMaGS from "@assets/imgs/projects_imgs";

import styles from "./project.module.scss";
const {
  project_item,
  project_item_header,
  project_item_header_overlay,
  project_body_container,
  project_technology_item,
  project_name,
  project_description,
  project_preview_link,
} = styles;

type TProjectProps = {
  aosAnimation: string;
  project: TProject;
};

const Project = ({ project, aosAnimation }: TProjectProps) => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className={`${project_item} mb-5`} data-aos={aosAnimation}>
      <div className={`${project_item_header} position-relative`}>
        <figure className="mb-0">
          <img
            src={PROJECTS_IMaGS[project.image.src]}
            alt={project.image.alt}
            loading="lazy"
            className="w-100"
          />
        </figure>
        <div className={project_item_header_overlay}>
          <a href={project.githubLink} target="_blank">
            <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
          </a>
        </div>
      </div>
      <div className={project_body_container}>
        <ul className="d-flex align-items-center gap-3 mb-4">
          {project.technologies.map((techno, index) => {
            return (
              <li className={project_technology_item} key={index}>
                {techno}
              </li>
            );
          })}
        </ul>
        <h3 className={project_name}>{project.name}</h3>
        <p className={`${project_description} mb-4`}>{project.description}</p>
        <a
          href={project.liveLink}
          className={project_preview_link}
          target="_blank"
        >
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
