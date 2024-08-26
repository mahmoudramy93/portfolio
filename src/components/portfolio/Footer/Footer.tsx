import "./footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <ul className="d-flex align-items-center justify-content-center">
        <li>
          <a
            href="https://www.linkedin.com/in/mahmoud-ramy-elbehery-752aab235"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://x.com/mahmoudramy93" target="_blank">
            Twitter
          </a>
        </li>
        <li>
          <a href="https://github.com/mahmoudramy93" target="_blank">
            Github
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
