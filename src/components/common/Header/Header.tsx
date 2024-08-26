import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { profile } from "@assets/imgs/mahmoud";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./header.module.scss";

const {
  header,
  header_container,
  profile_img,
  info,
  name,
  availability,
  social_links,
} = styles;

const Header = () => {
  return (
    <header className={header} id="header">
      <Container>
        <div className={header_container}>
          <Row>
            <Col
              sm={12}
              lg={6}
              className="d-flex flex-column flex-lg-row justify-content-center align-items-center text-center text-lg-start gap-3 mb-3 mb-lg-0"
            >
              <Link to="/" aria-label="go to home page">
                <img src={profile} alt="profile" className={profile_img} />
              </Link>
              <div className={info}>
                <h1>
                  <span>M</span>ahmoud <span>Elbehery</span>
                </h1>
                <h2 className={name}>
                  <span>Freelance Software Engineer, Devops |</span>
                  Senior System Administrator, I.T Infrastructure Engineer
                  @Harvest Foods
                </h2>
              </div>
            </Col>
            <Col
              sm={12}
              lg={4}
              className="d-flex align-items-center justify-content-center mb-3 mb-lg-0"
            >
              <div className={availability}>
                <p>Available for work</p>
              </div>
            </Col>
            <Col
              sm={12}
              lg={2}
              className="d-flex align-items-center justify-content-center mb-3 mb-lg-0"
            >
              <div className={social_links}>
                <a
                  href="https://www.linkedin.com/in/mahmoud-ramy-elbehery-752aab235"
                  aria-label="linkedin page"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                </a>
                <a
                  href="https://github.com/mahmoudramy93"
                  aria-label="github page"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </a>
                <a
                  href="https://twitter.com/mahmoudramy93"
                  aria-label="twitter page"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </header>
  );
};

export default Header;
