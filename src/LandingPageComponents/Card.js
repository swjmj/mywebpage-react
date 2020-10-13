import React from "react";
import style from "./styles/Card.module.css";

export default function Card({ data }) {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <img className={style.image_container} src={data.image} alt="" />
        <div>
          <h1 className={style.title}>{data.title}</h1>
          <p className={style.subtitle}>{data.sub_title}</p>
        </div>
      </div>
      <div className={style.text}>{data.main_text}</div>
    </div>
  );
}
