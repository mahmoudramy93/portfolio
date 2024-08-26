import { CustomTitle } from "@components/common";
import { ContactForm } from "@components/portfolio";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./contactUs.module.scss";
const { contact } = styles;

const ContactUs = () => {
  return (
    <section className={contact} id="contact">
      <Container>
        <CustomTitle
          title={"Get in touch"}
          description={"Feel free to drop me a line - Contact us"}
        />
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
              <ContactForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
