import React from "react";
import styles from "./styles/footer.module.css";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div id="Footer" className={styles.footer}>
      <div className={styles.social_media}>
        <p>Contact us in social media!</p>
        <ul>
          <li>
            <AiFillFacebook className={styles.icons} />
            <a href="http://www.facebook.com">Facebook</a>
          </li>
          <li>
            <AiFillTwitterSquare className={styles.icons} />
            <a href="http://www.twitter.com">Twitter</a>
          </li>
          <li>
            <AiFillInstagram className={styles.icons} />
            <a href="http://www.instagram.com">Instagram</a>
          </li>
          <li>
            <AiFillYoutube className={styles.icons} />
            <a href="http://www.youtube.com"> Youtube</a>
          </li>
        </ul>
      </div>
      <div className={styles.map_container}>
        <p className={styles.social_title}>Find us!</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56491.308008762215!2d-68.58726666312405!3d63.73876151397908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4dd31647708ada07%3A0x1f1ed0067c9129c2!2sIqaluit%2C%20NU%2C%20Canada!5e0!3m2!1sen!2smx!4v1601807649843!5m2!1sen!2smx"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
          title="map of location"
        ></iframe>
      </div>
    </div>
  );
}
