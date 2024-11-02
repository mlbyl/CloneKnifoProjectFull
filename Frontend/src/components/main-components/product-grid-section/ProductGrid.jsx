import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductGrid.module.css";
import mixerImg from "../../../assets/Project-images/mixer.png";
import toasterImg from "../../../assets/Project-images/toaster.png";
import kitchenwareImg from "../../../assets/Project-images/kitchenware.png";
import cookwareImg from "../../../assets/Project-images/cookware.png";
import accessoriesImg from "../../../assets/Project-images/accessories.jpg";
import "@fontsource/poppins/600.css";

const ProductGrid = () => {
  return (
    <div className="container my-5 p-0 w-w-100">
      <div className="row">
        
        <div className="col-md-8 position-relative">
          <div className={`card ${styles.productCard}`}>
            <img src={mixerImg} className="card-img-top" alt="Mixer" />
            <div className={styles.cardOverlay}>
              <p className={styles.cardText}>Start from $99.99</p>
              <h5 className={styles.mixerTitle}>Get the vision you deserve</h5>
              <Link to="/products" className={styles.shopButton}>
                Shop Now
              </Link>
            </div>
          </div>
        </div>
       
        <div className="col-md-4 ">
          <Link
            to="/products"
            className={`card position-relative ${styles.productCard}`}
          >
            <img src={toasterImg} className="card-img-top" alt="Toaster" />
            <div className="card-body position-absolute d-flex  flex-column align-items-center justify-content-center gap-0">
              <p className={styles.cardText}>Best sale 50% OFF</p>
              <h5 className={styles.cardTitle}>Slice toaster</h5>
            </div>
          </Link>
        </div>
      </div>

      <div className="row mt-4">
     
        <div className="col-md-4 ">
          <Link
            to="/products"
            className={`card position-relative ${styles.productCard}`}
          >
            <img
              src={kitchenwareImg}
              className="card-img-top"
              alt="Kitchenware"
            />
            <div className="card-body position-absolute">
              <p className={styles.cardText}>Save shop 20% OFF</p>
              <h5 className={styles.cardTitle}>Kitchenware</h5>
            </div>
          </Link>
        </div>
        
        <div className="col-md-4 ">
          <Link
            to="/products"
            className={`card position-relative ${styles.productCard}`}
          >
            <img src={cookwareImg} className="card-img-top" alt="Kitchenware" />
            <div className="card-body position-absolute">
              <p className={styles.cardText}>Special Discount</p>
              <h5 className={styles.cardTitle}>Cookware</h5>
            </div>
          </Link>
        </div>
       
        <div className="col-md-4 position-relative">
          <Link
            to="/products"
            className={`card position-relative${styles.productCard}`}
          >
            <img
              src={accessoriesImg}
              className="card-img-top"
              alt="Accessories"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
