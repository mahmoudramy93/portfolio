import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./customLink.scss";

const CustomLink = ({ link, text }) => {
  return (
    <Link to={link} className="more-about-me-link">
      {text}
      <span>
        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
      </span>
    </Link>
  );
};

export default CustomLink;
