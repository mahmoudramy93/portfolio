import { Link } from "react-router-dom";
import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <div className="header" id="header">
      <div className="container">
        <div className="row header-content">
          <div className="col-6 d-flex align-items-center">
            <Link to="/" className="profile-img" aria-label="go to home page">
              <img
                src={require("../../assets/imgs/profile.webp")}
                alt="profile"
                loading="lazy"
              />
            </Link>
            <div className="info">
              <h1>
                <span>M</span>ahmoud <span>Elbehery</span>
              </h1>
              <h2 className="name">
                <span>Freelance Software Engineer, Devops |</span>
                Senior System Administrator, I.T Infrastructure Engineer
                @Harvest Foods
              </h2>
            </div>
          </div>
          <div className="col-4 d-flex align-items-center justify-content-center">
            <div className="availability">
              <p>Available for work</p>
            </div>
          </div>
          <div className="col-2 d-flex align-items-center justify-content-center">
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/mahmoud-ramy-elbehery-752aab235"
                aria-label="linkedin page"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
              </a>
              <a
                href="https://github.com/mahmoudramy84"
                aria-label="github page"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
              </a>
              <a
                href="https://twitter.com/mahmoudramy84"
                aria-label="twitter page"
                target="_blank"
              >
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
