import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !subject || !message) {
      return;
    }
    const form = event.target;
    form.submit();
  };

  return (
    <form
      id="contactForm"
      action="https://api.web3forms.com/submit"
      method="POST"
      onSubmit={handleSubmit}
    >
      <input
        type="hidden"
        name="access_key"
        defaultValue="b6cca442-88a3-4137-a8b3-38b2cc2d46cc"
      />
      <div className="row">
        <div className="form-group col-md-6 col-sm-6">
          <input
            type="text"
            className="form-control"
            id="nameInput"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group col-md-6 col-sm-6">
          <input
            type="email"
            className="form-control"
            id="emailInput"
            name="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group col-md-12 col-sm-12">
          <input
            type="text"
            className="form-control"
            id="subjectInput"
            name="subject"
            placeholder="Subject"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
          />
        </div>
        <div className="form-group col-md-12 col-sm-12">
          <textarea
            rows={4}
            className="form-control"
            id="messageInput"
            name="messaeg"
            placeholder="How can i help you?"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
        <div className="col-md-12 col-sm-12 text-center">
          <input
            type="submit"
            defaultValue="Contact Now"
            className="btn-contact"
          />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
