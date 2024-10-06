import React from "react";
import ProductsBanner2Img from "../../../assets/Project-images/ProductsBanner2.webp"
import styles from "./ProductsBanner2.module.css"

const ProductsBanner2 = ({ products }) => {
  return (
    <div className="d-flex flex-column gap-5 pt-5 col-12 ">
      <h2 className={styles.bannerHeader}>Products({products.length})</h2>
      <img src={ProductsBanner2Img} className={styles.bannerImage} alt="" />
    </div>
  );
};

export default ProductsBanner2;
