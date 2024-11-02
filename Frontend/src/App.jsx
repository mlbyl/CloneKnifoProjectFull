import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import Footer from "./components/footer-components/Footer";
import { ProductProvider } from "./ProductProviderContext";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./components/NotFound";
import Products from "./pages/Products";
import Register from "./components/login-register-components/register-section/Register";
import Login from "./components/login-register-components/login-section/Login";
import { AuthProvider } from "./AuthContext";
import PublicRoutes from "./components/PublicAndPrivateComponents/Public/PublicRoutes";
import PrivateRoutes from "./components/PublicAndPrivateComponents/Private/PrivateRoutes";
import User from "./components/login-register-components/user-section/User";
import ShoppingCart from "./pages/ShoppingCart";
import { ShoppingProvider } from "./ShoppingProviderContext";
import ContactUs from "./pages/Contactus";

function App() {
  return (
    <>
      <AuthProvider>
        <ProductProvider>
          <ShoppingProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/products" element={<Products />} />
              <Route path="/register" element={<PublicRoutes><Register /></PublicRoutes>} />
              <Route path="/login" element={<PublicRoutes><Login /></PublicRoutes>} />
              <Route path="/userprofile" element={<PrivateRoutes><User /></PrivateRoutes>} />
              <Route path="/shoppingcart" element={<ShoppingCart/>}></Route>
              <Route path="/contact-us" element={<ContactUs/>}></Route>
            </Routes>
            <Footer />
          </BrowserRouter>
          </ShoppingProvider>
        </ProductProvider>
      </AuthProvider>
    </>
  );
}

export default App;
