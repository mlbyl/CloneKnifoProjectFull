import React from "react";
import { HiOutlineCog } from "react-icons/hi";
import { CiDeliveryTruck } from "react-icons/ci";
import { TbRefresh } from "react-icons/tb";
import { AiOutlineCreditCard } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "./Service.module.css";
import "@fontsource/poppins/600.css";


const Services = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={` ${styles.servicesContainer}`}>
      <div className={styles.serviceItem}>
        <Link to="/" className={styles.link} onClick={handleClick}>
          <HiOutlineCog className={styles.icon} />
        </Link>
        <div className={styles.textContent}>
          <h3>Free service</h3>
          <p>Life-long free service</p>
        </div>
      </div>
      <div className={styles.serviceItem}>
        <Link to="/" className={styles.link} onClick={handleClick}>
          <CiDeliveryTruck className={styles.icon} />
        </Link>
        <div className={styles.textContent}>
          <h3>Fast delivery</h3>
          <p>Orders from all items</p>
        </div>
      </div>
      <div className={styles.serviceItem}>
        <Link to="/" className={styles.link} onClick={handleClick}>
          <TbRefresh className={styles.icon} />
        </Link>
        <div className={styles.textContent}>
          <h3>Money back</h3>
          <p>All item replacement</p>
        </div>
      </div>
      <div className={styles.serviceItem}>
        <Link to="/" className={styles.link} onClick={handleClick}>
          <AiOutlineCreditCard className={styles.icon} />
        </Link>
        <div className={styles.textContent}>
          <h3>Secure payment</h3>
          <p>Easy EMI options</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
