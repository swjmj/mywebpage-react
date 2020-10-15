import React from "react";
import Feature from "./Feature";
import style from "./styles/Features.module.css";

export default function Features({ data }) {
  return (
    <div className={style.container}>
      {data.map((feature, i) => (
        <Feature feature={feature} key={i} />
      ))}
    </div>
  );
}
