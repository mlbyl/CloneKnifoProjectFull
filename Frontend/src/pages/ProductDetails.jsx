import  { useContext } from "react";
import ProductDetail from "../components/product-details-components/productDetails-section/ProductDetail";
import RelatedProducts from "../components/product-details-components/relatedProducts-section/RelatedProducts";
import { ProductContext } from "../ProductProviderContext";

const ProductDetails = () => {
  const {products} = useContext(ProductContext);
  const products812 = products.slice(8, 12);
  return (
    <div>
      <ProductDetail />
      <RelatedProducts products={products812}/>
    </div>
  );
};

export default ProductDetails;
