import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/product/productswithimages`)
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => {
        toast.error("An error occured while fetching products :", error);
      });
  }, []);
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
export { ProductContext, ProductProvider };
