import React from "react";
import { useParams } from "react-router-dom";
import styles from "./styles/Features.module.css";

export default function Features({ children, data }) {
  const params = useParams();

  const found = data.find((data) => data.feature === params.feature);

  if (found === undefined) {
    return <h1>Not found</h1>;
  }
  const { ad } = found;
  return (
    <div id="Features">
      <img
        src="/images/spill_cup.jpeg"
        alt=""
        className={styles.header_image}
      />
      <div className={styles.section}>
        <p className={styles.paragraph}>{ad.text}</p>
        <img src={ad.ad_image} alt={ad.alt} className={styles.image} />
      </div>
      {children}
    </div>
  );
}
