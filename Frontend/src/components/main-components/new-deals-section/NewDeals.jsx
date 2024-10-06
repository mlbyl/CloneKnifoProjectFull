import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./newDeals.module.css";
import "@fontsource/poppins/600.css";
import { Link } from "react-router-dom";

const NewDeals = ({ products }) => {
  return (
    <div className="container d-flex flex-column gap-5 justify-content-center align-items-center my-5 mw-100  ">
      <h2 className={`mb-4 ${styles.Head}`}>New arrival</h2>
      <ul className="d-flex flex-row gap-4 text-decoration-line-none list-unstyled">
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img
                className={styles.Image}
                src={product.Images[0].url}
                alt={product.name}
              />{" "}
            </Link>
            <div className="d-flex flex-column gap-1 mt-3">
              <Link to={`/product/${product.id}`} className={styles.imageName}>
                {product.name}
              </Link>
              <span className={styles.imagePrice}>${product.price}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewDeals;
