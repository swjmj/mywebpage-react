import React from "react";
import style from "./styles/Feature.module.css";

export default function Feature({ feature }) {
  return (
    <div className={style.container}>
      <div className={style.sub_container}>
        <img src={feature.image} alt="" className={style.image} />
        <div>
          <div className={style.title}>{feature.feature}</div>
          <br />
          <div className={style.text}>{feature.text}</div>
        </div>
      </div>
    </div>
  );
}
