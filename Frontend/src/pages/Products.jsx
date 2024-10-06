import { useContext, useState } from "react";
import ProductsBanner from "../components/Products-components/productsBanner-section/ProductsBanner";
import { ProductContext } from "../ProductProviderContext";
import AllProducts from "../components/Products-components/allProducts/AllProducts";
import ProductsBanner2 from "../components/Products-components/productsBanner2-section/ProductsBanner2";
import PriceSlider from "../components/Products-components/priceSlider-section/PriceSlider";
import ProductFilter from "../components/Products-components/productsFilter-section/ProductFilter";
import ProductBanner3 from "../components/Products-components/productBanner3-section/ProductBanner3"

const Products = () => {
  const {products} = useContext(ProductContext);

  const [priceRange, setPriceRange] = useState([0, 1000]);

  const filteredProducts = products.filter(
    (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
  );
  return (
    <div >
    <ProductsBanner />
    
    <div className="container-fluid row px-5 ">
      <div className="col-12 col-md-3 pt-5 ">
        <ProductFilter products={products}/>
        <PriceSlider products={products} setPriceRange={setPriceRange}/>
        <ProductBanner3/>
      </div>
      
      <div className="col-12 col-md-9 pt-5">
        <ProductsBanner2 products={products} />
        <AllProducts products={filteredProducts} />
      </div>
    </div>
  </div>
  );
};

export default Products;
