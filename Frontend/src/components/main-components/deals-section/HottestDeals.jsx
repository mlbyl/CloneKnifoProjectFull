import React from "react";
import styles from "./HottestDeals.module.css"; 
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const HottestDeals = () => {
  return (
    <div className="container text-center my-5">
      <h2 className="mb-4">Hottest Deal</h2>
      <ul className={styles.dealList}>
        <li className={styles.dealItem}>
          <h5>BUY 1, GET 2 FREE</h5>
          <p>Buy more save 50%</p>
          <Link to="/products" className={styles.shopLink}>
            <span>Shop Now</span>
            <FiArrowUpRight size={19} className={styles.icon} />
          </Link>
        </li>
        <li className={styles.dealItem}>
          <h5>HURRY UP!</h5>
          <p>Winter sale kitchen</p>
          <Link to="/products" className={styles.shopLink}>
            <span>Shop Now</span>
            <FiArrowUpRight size={19} className={styles.icon} />
          </Link>
        </li>
        <li className={styles.dealItem}>
          <h5>MINIMUM 40% OFF</h5>
          <p>Trending products</p>
          <Link to="/products" className={styles.shopLink}>
            <span>Shop Now</span>
            <FiArrowUpRight size={19} className={styles.icon} />
          </Link>
        </li>
        <li className={styles.dealItem}>
          <h5>STARTING $40</h5>
          <p>Kitchen & more</p>
          <Link to="/products" className={styles.shopLink}>
            <span>Shop Now</span>
            <FiArrowUpRight size={19} className={styles.icon} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HottestDeals;
