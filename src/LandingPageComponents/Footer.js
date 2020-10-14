import React from "react";
import style from "./styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={style.container}>
      <div className={style.footer_container}>
        <div>
          <ul>
            <li></li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
