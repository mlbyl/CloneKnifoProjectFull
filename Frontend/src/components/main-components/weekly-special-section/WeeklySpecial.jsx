import "@fontsource/poppins/600.css";
import React from "react";
import styles from "./WeeklySpecial.module.css";
import weeklyspecialImage from "../../../assets/Project-images/WeeklySaleProduct.png";
import { Link } from "react-router-dom";

const WeeklySpecial = () => {
  return (
    <div className={`d-flex mt-5 ${styles.container}`}>
      <img className={styles.Image} src={weeklyspecialImage} alt="" />
      <div className="d-flex flex-column px-5 justify-content-center gap-3">
        <p className={styles.Paragraph}>Weekl'y special deals!</p>
        <span className={styles.Span}>
          Get up to 25% off on kitchen appliances
        </span>
        <Link className={styles.ShopButton} to="/products">
          SHOP NOW
        </Link>
      </div>
    </div>
  );
};

export default WeeklySpecial;
