import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/Header.module.css";
import PopUpMenu from "./PopUpMenu";

export default function Header() {
  const navigator = useNavigate();
  const ref = useRef(null);
  const [refState, setRefState] = useState();

  useEffect(() => {
    if (ref.current) {
      setRefState(ref.current.offsetWidth);
    }
  }, [refState]);

  return (
    <div className={styles.Header} id="Header" ref={ref}>
      <div className={styles.logo_container} onClick={() => navigator("/")}>
        <img src="/images/logo.png" alt="coffee logo" className={styles.logo} />
        <h1>The Nice Cup</h1>
      </div>
      {console.log(refState)}
      <PopUpMenu className={styles.PopUpMenu} />
      <FullWidthNav />
    </div>
  );
}

function FullWidthNav() {
  const navigator = useNavigate();

  return (
    <ul className={styles.navbar}>
      <li onClick={() => navigator("/")}>
        <p> Home</p>
      </li>
      <li>
        <p> FAQ</p>
      </li>
      <li onClick={() => navigator("/contact")}>
        <p>Contact</p>
      </li>
    </ul>
  );
}
