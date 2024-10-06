import React from "react";
import ProductsBannerImage from "../../../assets/Project-images/ProductsBanner.webp";
import { Link } from "react-router-dom";
import styles from "./ProductsBanner.module.css"

const ProductsBanner = () => {
  return (
    <div className="position-relative">
      <img src={ProductsBannerImage} className={styles.image} alt="Products Banner" />
      <div className="position-absolute top-0 d-flex flex-row justify-content-between px-5 w-100">
        <h2 className={styles.name}>Products</h2>
        <div className={styles.linkName}>
          {" "}
          <Link to="/" className={styles.link}>Home/</Link>
          <span className={styles.span}>products</span>
        </div>
      </div>
    </div>
  );
};

export default ProductsBanner;
