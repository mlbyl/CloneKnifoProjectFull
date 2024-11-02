import { useContext, useEffect, useState } from "react";
import ProductsBanner from "../components/Products-components/productsBanner-section/ProductsBanner";
import ShoppingMain from "../components/shoppingandwishlist-components/Shopping-section/ShoppingMain";
import axios from "axios";
import { toast } from "react-toastify";

const ShoppingCart = () => {
  const [products, setProducts] = useState(null);
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get(`http://localhost:2345/user/userwithorderitems/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setProducts(response))
      .catch((error) => toast.error(error));
  }, []);

  return (
    <div>
      <ProductsBanner />
      {products && <ShoppingMain products={products} />}
    </div>
  );
};

export default ShoppingCart;
