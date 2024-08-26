import { ChangeEvent, FormEvent, useState } from "react";
import Input from "../Input/Input";
import { Col, Row } from "react-bootstrap";

import styles from "./contactForm.module.scss";
import { TFormErrors } from "types/formErrorsTypes";
const { text_area_container, btn_contact } = styles;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [errors, setErrors] = useState<TFormErrors>({});

  const validateForm = () => {
    const newErrors: TFormErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.subject) newErrors.subject = "Subject is required.";
    if (!formData.message) newErrors.message = "Message is required.";

    return newErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateForm();
    console.log(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      console.log("keys");

      return;
    }

    event.currentTarget.submit();
  };

  return (
    <form
      id="contactForm"
      action="https://api.web3forms.com/submit"
      method="POST"
      onSubmit={handleSubmit}
      className="position-relative"
    >
      <input
        type="hidden"
        name="access_key"
        defaultValue="b6cca442-88a3-4137-a8b3-38b2cc2d46cc"
      />
      <Row>
        <Col sm={6} className="mb-4">
          <Input
            id="name"
            label="Your Name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <div className="text-danger mt-1">{errors.name}</div>}
        </Col>

        <Col sm={6} className="mb-4">
          <Input
            id="email"
            label="Your Email Address"
            type="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && (
            <div className="text-danger mt-1">{errors.email}</div>
          )}
        </Col>
        <Col sm={12} className="mb-4">
          <Input
            id="subject"
            label="Subject"
            type="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleInputChange}
          />
          {errors.subject && (
            <div className="text-danger mt-1">{errors.subject}</div>
          )}
        </Col>

        <Col sm={12} className="mb-4">
          <div className={`${text_area_container} form-group`}>
            <label htmlFor="message">How can I help you?</label>
            <textarea
              rows={4}
              className={`form-control`}
              id="message"
              name="message"
              placeholder="How can I help you?"
              value={formData.message}
              onChange={handleInputChange}
            />
            {errors.message && (
              <div className="text-danger mt-1">{errors.message}</div>
            )}
          </div>
        </Col>

        <Col sm={12}>
          <input
            type="submit"
            defaultValue="Contact Now"
            className={btn_contact}
          />
        </Col>
      </Row>
    </form>
  );
};

export default ContactForm;
