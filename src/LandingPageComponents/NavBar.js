import React from "react";
import useWidth from "./widthhook";
import useToggle from "./navbarhook";
import { Icon } from "react-icons-kit";
import { androidMenu } from "react-icons-kit/ionicons/androidMenu";
import style from "./styles/NavBar.module.css";

export default function NavBar() {
  const [toggle, setToggle] = useToggle();

  return (
    <div className={style.container}>
      <img
        src="/images/LandingPageAssets/logo.png"
        alt="logo"
        className={style.logo}
      />
      {useWidth() > 400 && (
        <ul className={style.nav}>
          <li>
            <a href="#reviews"> What they say</a>
          </li>
          <li>
            <a href="#signup">Sign Up</a>
          </li>
        </ul>
      )}
      {useWidth() <= 400 && !toggle && (
        <i className={style.navButton} onClick={() => setToggle(true)}>
          <Icon icon={androidMenu} size={30} style={{ margin: "auto" }} />
        </i>
      )}
      {useWidth() <= 400 && toggle && <MobileNav />}
    </div>
  );
}

function MobileNav() {
  return (
    <ul className={style.navMobile}>
      <li>
        <a href="#reviews">What they say</a>
      </li>
      <li>
        <a href="#signup">Sign Up</a>
      </li>
    </ul>
  );
}
