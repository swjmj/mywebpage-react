import React from "react";
import { Link } from "react-router-dom";
import style from "./styles/Button.module.css";

export default function ContactButton() {
  return (
    <div id="ContactButton" className={style.ContactButton}>
      <div className={style.callContainer}>
        <div>How do you like your coffee? Tell us!</div>
        <Link to="/mywebpage-react/contact">
          <button className={style.button}>CONTACT US!</button>
        </Link>
      </div>
    </div>
  );
}
