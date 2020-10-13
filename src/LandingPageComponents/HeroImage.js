import React from "react";
import style from "./styles/HeroImage.module.css";
import useWidth from "./widthhook";

export default function HeroImage() {
  const width = useWidth();
  const root = document.documentElement;

  root.style.setProperty("--windowWidth", `${width}px`);

  return (
    <div className={style.image_container}>
      <div className={style.text_container}>
        <h1>The Nice Cup</h1>
        <div>How do you like your coffee?</div>
      </div>
    </div>
  );
}
