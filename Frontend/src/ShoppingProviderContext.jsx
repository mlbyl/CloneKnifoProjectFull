import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { toast } from "react-toastify";

const ShoppingContext = createContext();

const ShoppingProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(null);
  const [price, setPrice] = useState(null);
  const [userId, setUserId] = useState(null);
  const [productId, setProductId] = useState(null);

  const { auth } = useContext(AuthContext);

  useEffect(() => {
    if (auth && auth.user && auth.user.id) {
      setUserId(auth.user.id);
    }
  });

  const handleOrderItems = async (orderItem) => {
    if (
      orderItem &&
      orderItem.addedProduct &&
      orderItem.addedInputValue &&
      orderItem.addedMainImage
    ) {
      setQuantity(orderItem.addedInputValue);
      setPrice(orderItem.addedProduct.price);
      setProductId(orderItem.addedProduct.id);
    }
  };
  useEffect(() => {
    if (userId && quantity && price && productId) {
      const orderItems = {
        userId: userId,
        quantity: quantity,
        price: price,
        productId: productId,
      };

      axios
        .post("http://localhost:2345/orderitem/create", orderItems, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => toast.success(response.data.message))
        .catch((error) => toast.error("Error", error));
    }
  }, [userId, quantity, price, productId]);

  return (
    <ShoppingContext.Provider value={{ handleOrderItems }}>
      {children}
    </ShoppingContext.Provider>
  );
};

export { ShoppingContext, ShoppingProvider };
