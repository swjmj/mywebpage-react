import React, { useState } from "react";
import useInput from "./useInput";
import { useNavigate } from "react-router-dom";
import styles from "./styles/contact.module.css";
import stylesImage from "./styles/Features.module.css";

export default function Contact() {
  const [name, resetName] = useInput("");
  const [email, resetEmail] = useInput("");
  const [country, resetCountry] = useInput("");
  const [text, resetText] = useInput("");
  const [submitForm, setSubmitForm] = useState(false);

  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    console.log(name.value);
    console.log(email.value);
    console.log(country.value);
    console.log(text.value);
    resetName();
    resetEmail();
    resetCountry();
    resetText();
    setSubmitForm(true);
    setTimeout(() => navigate("/mywebpage-react/"), 1000);
  };

  if (submitForm === true) {
    return (
      <>
        <h1 className={styles.thanks}>Thank you!</h1>
      </>
    );
  }

  return (
    <div id="Contact" className={styles.contact}>
      <img
        src="/mywebpage-react/images/spill_cup.jpeg"
        alt=""
        className={stylesImage.header_image}
      />
      <div className={styles.formContainer}>
        <div>
          <img
            src="/mywebpage-react/images/writing-book.jpeg"
            alt=""
            className={styles.formImage}
          />
        </div>

        <form onSubmit={Submit}>
          <div className={styles.formCard}>
            <h1>Let us know what you think</h1>
            <label htmlFor="name">Enter your name: </label>
            <br />
            <input
              type="text"
              {...name}
              name="name"
              placeholder="Your name"
              required
            />
            <br />
            <label htmlFor="email">Email: </label>
            <br />
            <input
              type="email"
              {...email}
              name="email"
              placeholder="Your email"
              required
            />
            <br />
            <label htmlFor="country">Enter the country you live: </label>
            <br />
            <input
              type="text"
              {...country}
              name="country"
              placeholder="Country"
            />
            <br />
            <label htmlFor="opinion">
              What's on your mind?:
              <br />
              <textarea {...text}></textarea>
            </label>
            <br />
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
