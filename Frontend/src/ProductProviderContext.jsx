import { createContext, useEffect, useState } from "react";
import axios from "axios";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:2345/product/productswithimages")
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.log("Fetch Error :", error);
      });
  }, []);
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
export { ProductContext, ProductProvider };
