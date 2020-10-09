import React from "react";
import styles from "./styles/FeatureBox.module.css";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

export default function FeatureBox({ data }) {
  // let history = useHistory();
  return (
    <div className={styles.FeatureBox}>
      <Link to={`${data.feature}`}>
        <img src={data.src} alt={data.alt} className={styles.image} />
      </Link>
      <p>{data.text} </p>
    </div>
  );
}
