import React from "react";
import { Link } from "react-router-dom";
import "@fontsource/poppins/400.css";
import styles from "../TopBar/TopBar.module.css";

const TopBar = () => {
  return (
    <div className={` d-flex justify-content-between align-items-center  text-white px-5 py-2 ${styles.mainDiv}`}>
      <span className="d-flex gap-1 align-items-center">
        Save now 50% on kitchen appliances discount
        <Link to="/products" className="text-white ">
          <span className="d-flex align-items-center">SHOP NOW</span>
        </Link>
      </span>

      <span>
        <Link to="/contact" className={`text-white me-3 ${styles.links}`}>
          Call: +0123 456 789
        </Link>
        <Link to="/products" className={`text-white me-3 ${styles.links}`}>
          Hot deals!
        </Link>
        <Link to="/products" className={`text-white  ${styles.links}`}>
          Track order
        </Link>
      </span>
    </div>
  );
};

export default TopBar;
