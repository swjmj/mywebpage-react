import React from "react";
import useInput from "../useInput";

import style from "./styles/SignUp.module.css";

export default function SignUp() {
  const [email, resetEmail] = useInput("");

  function submit(e) {
    e.preventDefault();
    console.log(`The input email was ${email.value}`);
    resetEmail();
  }
  return (
    <div className={style.container} id="signup">
      <div className={style.signup}>
        <div className={style.text_container}>
          How's your perfect cup? Tell us
        </div>
        <form onSubmit={submit} className={style.form}>
          <input type="email" className={style.input} {...email} />
          <button className={style.button}>Sign Up</button>
        </form>
      </div>
    </div>
  );
}
