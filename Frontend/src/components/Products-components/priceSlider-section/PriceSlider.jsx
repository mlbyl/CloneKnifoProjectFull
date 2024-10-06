import styles from "./PriceSlider.module.css"; // CSS modülünü import et
import { useEffect, useState } from "react";
import { Slider } from "antd";

const PriceSlider = ({ products, setPriceRange }) => {
  const prices = products.map((product) => Number(product.price));
  const maxValueOfPrices = Math.max(...prices);
  const minValueOfPrices = Math.min(...prices);

  const [minPrice, setminPrice] = useState(0);
  const [maxPrice, setmaxPrice] = useState(389);
  const [value, setValue] = useState([20, 900]);

  return (
    <div className={`pt-5 ${styles.mainDiv}`}>
      <h4>Price</h4>
      <p>The highest price is ${maxValueOfPrices}</p>
      <Slider
        range={{
          draggableTrack: true,
        }}
        defaultValue={value}
        min={minValueOfPrices}
        max={maxValueOfPrices}
        onChange={(value) => {
          setminPrice(value[0]);
          setmaxPrice(value[1]);
          setPriceRange(value);
        }}
      />
      <div className="d-flex justify-content-between align-items-end">
        <div className={styles.priceInput}>
          <label htmlFor="min-price">From</label>
          <input
            readOnly
            type="number"
            id="min-price"
            value={minPrice}
            onChange={(e) => setminPrice(Number(e.target.value))}
          />
        </div>
        <span>-</span>
        <div className={styles.priceInput}>
          <label htmlFor="max-price">To </label>
          <input
            readOnly
            type="number"
            id="max-price"
            value={maxPrice}
            onChange={(e) => {
              setmaxPrice(Number(e.target.value));
            }}
          />
        </div>
        <div className={styles.priceInput}></div>
      </div>
    </div>
  );
};

export default PriceSlider;
