import React from "react";
import { Carousel } from "react-bootstrap";
import slider from "../../../assets/Project-images/slider.png";
import slider1 from "../../../assets/Project-images/slider1.png";
import slider3 from "../../../assets/Project-images/slider3.png";
import styles from "./Slider.module.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="d-flex align-items-center h-50 position-relative mb-5">
          <img className={`${styles.image}`} src={slider} alt="First slide" />
          <div className=" d-flex flex-column position-absolute  p-5 gap-5">
            <span className={`d-flex gap-2 ${styles.spanInfo}`}>
              <span>Kitchen appliances</span>
              <a href="/">STARTING $120</a>
            </span>
            <span className="lh-1 d-flex flex-column">
              {" "}
              <span className={`${styles.imageInfoH2} `}> Efficient</span>
              <span className={`${styles.imageInfoH2} `}> Cooking</span>
            </span>

            <span>
              <Link to="/products" className={`${styles.ShopNowButton}`}>
                Shop Now{" "}
              </Link>
            </span>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="d-flex align-items-center h-50 position-relative">
          <img className={`${styles.image}`} src={slider1} alt="First slide" />
          <div className=" d-flex flex-column position-absolute  p-5 gap-5">
            <span className={`d-flex gap-2 ${styles.spanInfo}`}>
              <span>Kitchen appliances discount</span>
              <a href="/">GET 50% OFF</a>
            </span>
            <span className="lh-1 d-flex flex-column">
              {" "}
              <span className={`${styles.imageInfoH2} `}> Premium</span>
              <span className={`${styles.imageInfoH2} `}> appliance</span>
            </span>

            <span>
              <Link to="/products" className={`${styles.ShopNowButton}`}>
                Shop Now{" "}
              </Link>
            </span>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="d-flex align-items-center h-50 position-relative">
          <img className={`${styles.image}`} src={slider3} alt="First slide" />
          <div className=" d-flex flex-column position-absolute  p-5 gap-5">
            <span className={`d-flex gap-2 ${styles.spanInfo}`}>
              <span>Kitchen appliances discount</span>
              <a href="/">SAVE 20% OFF</a>
            </span>
            <span className="lh-1 d-flex flex-column">
              {" "}
              <span className={`${styles.imageInfoH2} `}> Premium</span>
              <span className={`${styles.imageInfoH2} `}> appliances</span>
            </span>

            <span>
              <Link to="/products" className={`${styles.ShopNowButton}`}>
                Shop Now{" "}
              </Link>
            </span>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
