import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./customLink.module.scss";
const { custom_link } = styles;

type TCustomLinkProps = {
  link: string;
  text: string;
};

const CustomLink = ({ link, text }: TCustomLinkProps) => {
  return (
    <Link to={link} className={custom_link}>
      {text}
      <span>
        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
      </span>
    </Link>
  );
};

export default CustomLink;
