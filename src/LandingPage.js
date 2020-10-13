import React from "react";
import { Navbar } from "rsuite";
import styles from "./styles/LandingPage.module.css";
import NavBar from "./LandingPageComponents/NavBar";
import HeroImage from "./LandingPageComponents/HeroImage";
import Cards from "./LandingPageComponents/Cards";
import SignUp from "./LandingPageComponents/SignUp";
import Footer from "./LandingPageComponents/Footer";

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <NavBar />
      <HeroImage />
      <Cards />
      <SignUp />
      {/*<Footer />  */}
    </div>
  );
}
