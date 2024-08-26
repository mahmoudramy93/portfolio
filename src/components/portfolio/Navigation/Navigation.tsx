import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Link } from "react-router-dom";

import styles from "./navigation.module.scss";
const { navigation_container, navigation_icon } = styles;
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

const Navigation = () => {
  const links = [
    { tooltip: "Home", id: "header", icon: faHouse },
    { tooltip: "About", id: "about", icon: faCircleInfo },
    { tooltip: "Skills", id: "general_skills", icon: faClipboard },
    { tooltip: "Projects", id: "highlighted_projects", icon: faCircleCheck },
    { tooltip: "Blogs", id: "latest_blogs", icon: faBlog },
    // { tooltip: "Testimonials", id: "testimonials", icon: faComment },
    { tooltip: "Services", id: "our_services", icon: faScrewdriverWrench },
    { tooltip: "Contact", id: "contact", icon: faEnvelope },
  ];

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              handleClick(link.id);
            }}
            className={navigation_icon}
          >
            <FontAwesomeIcon icon={link.icon}></FontAwesomeIcon>
          </Link>
        </OverlayTrigger>
      ))}
    </div>
  );
};

export default Navigation;
