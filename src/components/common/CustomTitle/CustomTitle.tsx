import { Col, Row } from "react-bootstrap";

import styles from "./customTitle.module.scss";
import CustomDescription from "../CustomDescription/CustomDescription";

type TCustomTitleProps = {
  title: string;
  description: string;
};

const { main_title } = styles;

const CustomTitle = ({ title, description }: TCustomTitleProps) => {
  return (
    <Row>
      <Col md={12}>
        <div className={main_title}>
          <h2>{title}</h2>
          <CustomDescription description={description} />
        </div>
      </Col>
    </Row>
  );
};

export default CustomTitle;
