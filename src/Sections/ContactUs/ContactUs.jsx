import { ContactForm, CustomTitle } from "../../components/index";

import "./contactUs.scss";

const ContactUs = () => {
  return (
    <section className="contact-us" id="contact">
      <div className="container position-relative">
        <CustomTitle
          title={"Get in touch"}
          description={"Feel free to drop me a line - Contact us"}
        />
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="contact-form">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
