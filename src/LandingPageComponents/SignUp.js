import React from "react";
import style from "./styles/SignUp.module.css";

export default function SignUp() {
  return (
    <div className={style.container}>
      <div className={style.signup}>
        <div className={style.text_container}>
          It really sounds delicious, right?
        </div>
        <div>
          <button className={style.button}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}
