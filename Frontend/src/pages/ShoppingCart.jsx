import { useContext, useEffect, useState } from "react";
import ProductsBanner from "../components/Products-components/productsBanner-section/ProductsBanner";
import ShoppingMain from "../components/shoppingandwishlist-components/Shopping-section/ShoppingMain";
import axios from "axios";

const ShoppingCart = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:2345/user/userwithorderitems/25")
      .then((response) => setProducts(response))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <ProductsBanner />
      <ShoppingMain products={products} />
    </div>
  );
};

export default ShoppingCart;
