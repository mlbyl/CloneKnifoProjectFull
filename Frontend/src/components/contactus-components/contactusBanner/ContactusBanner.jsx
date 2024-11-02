import React from "react";
import ProductsBannerImage from "../../../assets/Project-images/ProductsBanner.webp";
import { Link } from "react-router-dom";
import styles from "./ContactusBanner.module.css"

const ContactusBanner = () => {
  return (
    <div className="position-relative">
      <img src={ProductsBannerImage} className={styles.image} alt="Products Banner" />
      <div className="position-absolute top-0 d-flex flex-row justify-content-between px-5 w-100">
        <h2 className={styles.name}>Contact us</h2>
        <div className={styles.linkName}>
          {" "}
          <Link to="/" className={styles.link}>Home/</Link>
          <span className={styles.span}>Contact us</span>
        </div>
      </div>
    </div>
  );
};

export default ContactusBanner;
