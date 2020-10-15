import React from "react";
import Images from "./Images";
import FeatureBox from "./FeatureBox";
import styles from "./styles/Home.module.css";

export default function Home({ children, data }) {
  return (
    <div id="Home">
      <Images className={styles.image} />
      {/* <div className={styles.heroText}>The Nice Cup</div>
      <div className={styles.secondHeroText}> How was your coffee today?</div> */}
      <div className={styles.features} id="Features">
        {data.map((image) => (
          <FeatureBox data={{ ...image }} key={image.id} />
        ))}
      </div>

      {children}
    </div>
  );
}
