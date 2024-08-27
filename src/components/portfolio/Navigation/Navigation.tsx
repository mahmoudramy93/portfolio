import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { HashLink } from "react-router-hash-link";
import Tooltip from "react-bootstrap/Tooltip";

import {
  faBlog,
  faCircleCheck,
  faCircleInfo,
  faClipboard,
  faEnvelope,
  faHouse,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./navigation.module.scss";
const { navigation_container, navigation_icon } = styles;

const Navigation = () => {
  const links = [
    { tooltip: "Home", id: "header", icon: faHouse },
    { tooltip: "About", id: "about_me", icon: faCircleInfo },
    { tooltip: "Skills", id: "general_skills", icon: faClipboard },
    { tooltip: "Projects", id: "highlighted_projects", icon: faCircleCheck },
    { tooltip: "Blogs", id: "latest_blogs", icon: faBlog },
    // { tooltip: "Testimonials", id: "testimonials", icon: faComment },
    { tooltip: "Services", id: "our_services", icon: faScrewdriverWrench },
    { tooltip: "Contact", id: "contact", icon: faEnvelope },
  ];

  return (
    <div
      className={`${navigation_container} d-flex align-items-center flex-column`}
    >
      {links.map((link, index) => (
        <OverlayTrigger
          key={index}
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={(props) => (
            <Tooltip className="tooltip" id={link.id} {...props}>
              {link.tooltip}
            </Tooltip>
          )}
        >
          <HashLink to={`/#${link.id}`} className={navigation_icon}>
            <FontAwesomeIcon icon={link.icon}></FontAwesomeIcon>
          </HashLink>
        </OverlayTrigger>
      ))}
    </div>
  );
};

export default Navigation;
