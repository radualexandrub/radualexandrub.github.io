import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import ImgMailSentSuccess from "../../img/Illustrations/undraw_mail_sent.png";
import ImgMailSentError from "../../img/Illustrations/undraw_mail_error.png";

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("myyoyawd");

  if (state.succeeded) {
    return (
      <div
        style={{ textAlign: "center", fontSize: "1.1em", lineHeight: "1.5" }}
      >
        <img
          style={{ marginBottom: "2rem", maxWidth: "200px" }}
          src={ImgMailSentSuccess}
          alt="Message sent successfully illustration"
        />
        <br />
        Thanks for your message.
        <br />
        It has been sent succesfully!
      </div>
    );
  } else if (state.errors.length > 0 && state.errors[0].code !== "EMPTY") {
    console.log(state.errors);
    return (
      <div
        style={{ textAlign: "center", fontSize: "1.1em", lineHeight: "1.5" }}
      >
        <img
          style={{ marginBottom: "2rem", maxWidth: "200px" }}
          src={ImgMailSentError}
          alt="Message error during sending illustration"
        />
        <br />
        Sorry! There was an error while sending the message :&#40;
        <br />
        Please try again later
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__item">
        <label htmlFor="fullname">Name</label>
        <input id="fullname" type="text" name="fullname" required />
      </div>

      <div className="form__item">
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="form__item">
        <label htmlFor="message">How can I help?</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message"
          rows="5"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <button className="form__btn" type="submit" disabled={state.submitting}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginRight: "0.5rem" }}
        >
          <path
            d="M1.94596 9.31504C1.42396 9.14104 1.41896 8.86004 1.95596 8.68104L21.043 2.31904C21.572 2.14304 21.875 2.43904 21.727 2.95704L16.273 22.043C16.123 22.572 15.818 22.59 15.594 22.088L12 14L18 6.00004L9.99996 12L1.94596 9.31504Z"
            fill="white"
          />
        </svg>
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
