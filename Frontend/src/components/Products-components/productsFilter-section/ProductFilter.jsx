import React from "react";
import styles from "./ProductFilter.module.css";

const ProductFilter = ({ products }) => {
  const handleCheckboxChange = () => {
    window.location.reload();
  };

  return (
    <div className={`px-2 pt-5 d-flex flex-column gap-3 ${styles.mainDiv}`}>
      <h5>Categories</h5>
      <ul className={styles.filterList}>
        <li className={styles.filterItem}>
          <div className={styles.filterRow}>
            <input
              type="checkbox"
              id="bestseller"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="bestseller">Bestseller</label>
            <span className={styles.productCount}>({products.length})</span>
          </div>
        </li>
        <li className={styles.filterItem}>
          <div className={styles.filterRow}>
            <input
              type="checkbox"
              id="cookware"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="cookware">Cookware</label>
            <span className={styles.productCount}>({products.length})</span>
          </div>
        </li>
        <li className={styles.filterItem}>
          <div className={styles.filterRow}>
            <input
              type="checkbox"
              id="feature-product"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="feature-product">Feature Product</label>
            <span className={styles.productCount}>({products.length})</span>
          </div>
        </li>
        <li className={styles.filterItem}>
          <div className={styles.filterRow}>
            <input
              type="checkbox"
              id="kitchenware"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="kitchenware">Kitchenware</label>
            <span className={styles.productCount}>({products.length})</span>
          </div>
        </li>
        <li className={styles.filterItem}>
          <div className={styles.filterRow}>
            <input
              type="checkbox"
              id="new-product"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="new-product">New Product</label>
            <span className={styles.productCount}>({products.length})</span>
          </div>
        </li>
      </ul>

      <h5>Availability</h5>
      <ul className={styles.filterList}>
        <li className={styles.filterItem}>
          <div className={styles.filterRow}>
            <input
              type="checkbox"
              id="in-stock"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="in-stock">In stock</label>
            <span className={styles.productCount}>({products.length})</span>
          </div>
        </li>
        <li className={styles.filterItem}>
          <div className={styles.filterRow}>
            <input
              type="checkbox"
              id="out-of-stock"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="out-of-stock">Out of stock</label>
            <span className={styles.productCount}>(0)</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProductFilter;
