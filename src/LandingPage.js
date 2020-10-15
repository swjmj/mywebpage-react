import React from "react";
import styles from "./styles/LandingPage.module.css";
import NavBar from "./LandingPageComponents/NavBar";
import HeroImage from "./LandingPageComponents/HeroImage";
import Cards from "./LandingPageComponents/Cards";
import Features from "./LandingPageComponents/Features";
import SignUp from "./LandingPageComponents/SignUp";
import data_features from "./data/landingFeatures.json";

export default function LandingPage() {
  return (
    <div className={styles.backg}>
      <div className={styles.container}>
        <NavBar />
        <HeroImage />
        <Features data={data_features} />
        <Cards />
        <SignUp />
      </div>
    </div>
  );
}
