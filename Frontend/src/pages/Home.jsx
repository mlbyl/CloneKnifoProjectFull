import React from "react";
import Slider from "../components/main-components/shopfiy-section/Slider";
import HottestDeals from "../components/main-components/deals-section/HottestDeals";
import ProductGrid from "../components/main-components/product-grid-section/ProductGrid";
import NewDeals from "../components/main-components/new-deals-section/NewDeals";
import WeeklySpecial from "../components/main-components/weekly-special-section/WeeklySpecial";
import Services from "../components/main-components/services-section/Services";
import OurProduct from "../components/main-components/our-product-section/OurProduct";
import Testimonials from "../components/main-components/testimonials-section/Testimonials"
import axios from "axios";
import {useContext, useState, useEffect } from "react";
import { ProductContext } from "../ProductProviderContext";

const Home = () => {
  const  {products}  = useContext(ProductContext);
  const products04=products.slice(0,4)
  const products48=products.slice(4,8)
  
  return (
    <>
      <div className="d-flex flex-column w-100">
        {" "}
        <Slider />
        <HottestDeals />
        <ProductGrid />
        <NewDeals products={products04} />
        <WeeklySpecial />
        <Services />
        <OurProduct products={products48}/>
        <Testimonials/>
      </div>
    </>
  );
};

export default Home;
