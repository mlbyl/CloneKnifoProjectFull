import React from "react";
import ProductBanner3Img from "../../../assets/Project-images/ProductsBanner3.webp";
import styles from "./ProductBanner3.module.css";

const ProductBanner3 = () => {
  const bannerDivclick = () => {
    // window.location.reload()
    window.location.href = window.location.href;

  };
  return (
    <div
      onClick={bannerDivclick}
      className={`d-flex flex-column gap-5 pt-5 col-12 ${styles.bannerDiv}`}
    >
      <img src={ProductBanner3Img} className={styles.bannerImage} alt="" />
    </div>
  );
};

export default ProductBanner3;
