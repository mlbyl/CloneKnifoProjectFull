import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import KnifoIcon from "../../../assets/Project-images/Knifo-logo.png";
import styles from "../NavMenu/NavMenu.module.css";
import "@fontsource/poppins/";

const NavMenu = () => {
  return (
    <div
      className={`navbar navbar-expand-lg px-5 py-3 d-flex  justify-content-between  ${styles.Navbar}`}
    >
      <div>
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <span className={`${styles.NavLogo}`}>
            <img src={KnifoIcon} alt="Knifo Logo" />
          </span>
        </Link>
      </div>

      <div>
        <ul className={`navbar-nav ml-auto gap-3 d-flex${styles.Navbar}`}>
          <li className="nav-item">
            <Link className={`nav-link ${styles.NavLink}`} to="/">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${styles.NavLink}`} to="/products">
              SHOP
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${styles.NavLink}`} to="/products">
              COLLECTION
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${styles.NavLink}`} to="/blog">
              BLOG
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className={`nav-link dropdown-toggle ${styles.NavLink}`}
              to="/pages"
              id="navbarDropdown2"
              role="button"
            >
              PAGES
            </Link>
            <div
              className={`dropdown-menu ${styles.DropdownMenu}`}
              aria-labelledby="navbarDropdown2"
            >
              <Link className="dropdown-item" to="/pages/aboutus">
                About us
              </Link>
              <Link className="dropdown-item" to="/pages/contactus">
                Contact us
              </Link>
              <Link className="dropdown-item" to="/pages/faqs">
                FAQs
              </Link>
            </div>
          </li>
        </ul>
      </div>
      <div className=" d-flex gap-5" id="navbarNav">
        <form className="form-inline ml-auto d-flex gap-4">
          <div className={`position-relative ${styles.SearchWrapper}`}>
            <input
              className="form-control pr-5"
              type="search"
              placeholder="Search..."
              aria-label="Search"
              required
            />
            <FaSearch size={20} className={`${styles.SearchIcon}`} />
          </div>
        </form>

        <div className="d-flex gap-3 align-items-center  ">
          <Link to='/userprofile'>
            <AiOutlineUser size={20} color="black" className="mr-3" />
          </Link>
          <Link className="text-decoration-none d-flex align-items-center">
            <AiOutlineHeart size={20} color="black"/>
            <span className={`text-black ${styles.iconFonts}`}>(0)</span>
          </Link>
          <Link  to="/shoppingcart" className="text-decoration-none d-flex align-items-center">
            <AiOutlineShoppingCart size={20} color="black"/>
            <span className={`text-black ${styles.iconFonts}`}>(0)</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
