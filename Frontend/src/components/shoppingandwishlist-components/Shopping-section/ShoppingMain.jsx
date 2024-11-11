import { HiOutlineTrash } from "react-icons/hi2";
import React, { useEffect, useState } from "react";
import styles from "./ShoppingMain.module.css";
import axios from "axios";
import { toast } from "react-toastify";

const ShoppingMain = ({ products }) => {
  const [orderItems, setOrderItems] = useState(null);
  const [allPrices, setAllPrices] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/orderitem/delete/${id}`);
      setOrderItems((prevItems) => prevItems.filter((item) => item.id !== id));
      toast.success("Order item succesfully deleted");
    } catch (error) {
      toast.error("Delete operation ended up with an error", error);
    }
  };
  useEffect(() => {
    if (
      products &&
      products.data &&
      products.data.data &&
      products.data.data.OrderItems
    ) {
      setOrderItems(products.data.data.OrderItems);
    }
  }, [products]);

  useEffect(() => {
    if (orderItems) {
      const prices = orderItems.map((item) => Number(item.totalPrice));
      setAllPrices(prices);
    }
  }, [orderItems]);

  useEffect(() => {
    if (allPrices.length > 0) {
      const total = allPrices.reduce((acc, curr) => acc + curr, 0);
      setTotalPrice(total);
    }
  }, [allPrices]);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>Product Item</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Total Price</div>
        </div>

        {orderItems &&
          orderItems.map((i) => (
            <div className={styles.row} key={i.id}>
              <div className={styles.itemDetails}>
                <img
                  className={styles.itemImage}
                  src={i.Product.Images[0].url}
                  alt={i.Product.name}
                />
                <div>
                  <div>{i.Product.name}</div>
                </div>
              </div>
              <div className={styles.price}>${i.price}</div>
              <div className={styles.quantityControls}>
                <div className="d-flex justify-content-center align-items-center gap-3">
                  <input
                    type="number"
                    value={i.quantity}
                    className={styles.quantityInput}
                    min="1"
                    step="1"
                    readOnly
                  />{" "}
                  <HiOutlineTrash
                    className={styles.deleteIcon}
                    onClick={() => handleDelete(i.id)}
                    size={18}
                  />{" "}
                </div>
              </div>
              <div className={styles.totalPrice}>${i.totalPrice}</div>
            </div>
          ))}
      </div>
      <div className={`${styles.totalPrice}`}>${totalPrice}</div>
    </>
  );
};

export default ShoppingMain;
