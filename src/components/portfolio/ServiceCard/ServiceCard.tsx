import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

import { TServices } from "types/servicesTypes";

import styles from "./serviceCard.module.scss";
const { service_item } = styles;

const ServiceCard = ({ title, description, icon, aosEffect }: TServices) => {
  return (
    <div
      className={`${service_item} d-flex flex-column gap-3 `}
      data-aos={aosEffect}
    >
      <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
