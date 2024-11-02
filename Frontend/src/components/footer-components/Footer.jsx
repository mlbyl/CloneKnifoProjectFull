import React, { useEffect,useState } from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaDribbble,
  FaYoutube,
} from "react-icons/fa";
import { SlEnvolopeLetter } from "react-icons/sl";
import KnifoIcon from "../../assets/Project-images/Knifo-logo.png";
import { toast } from "react-toastify";
import axios from "axios";



const Footer = () => {
  const token =localStorage.getItem("token")

const [userData, setUserData] = useState({
  firstname: "",
  lastname: "",
  email: "",
  password: "",
});

useEffect(() => {
  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:2345/user/userbyid/`,{
          headers:{
            Authorization:`Bearer ${token}`
          }
        }        );
      setUserData(response.data.data);
    } catch (error) {
     toast.warning("For the best experience, please log in");
    }
  };

  fetchUserData();
}, [token]);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerSection}>
        <div className={styles.footerLogo}>
          <img src={KnifoIcon} alt="" />
        </div>
        <div className={styles.footerSocials}>
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaDribbble />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
        </div>
      </div>

      <div className={styles.footerSection}>
        <h3 className={styles.footerTitle}>Contact us</h3>
        <p className={styles.footerText}>
          181 Mercer street, new york, ny 10012, united states
        </p>
        <p className={styles.footerText}>+(251) 123 456 7890</p>
        <p className={styles.footerText}>demo148563@gmail.com</p>
      </div>

      <div className={styles.footerSection}>
        <h3 className={styles.footerTitle}>Opening hours</h3>
        <p className={styles.footerText}>Monday to Saturday</p>
        <p className={styles.footerText}>09:00 am - 10:00 pm</p>
      </div>

      <div className={styles.footerSection}>
        <h3 className={styles.footerTitle}>Join newsletter</h3>
        <p className={styles.footerText}>Subscribe to the weekly newsletter.</p>
        <div className={styles.newsletter}>
         <input type="email" value={userData.email} placeholder="Enter your email.." />
          <button>
            <SlEnvolopeLetter size={30}/>
          </button>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.footerLinks}>
          <Link to="/">About us</Link>
          <Link to="/contact-us">Contact us</Link>
          <Link to="/faqs">Faq's</Link>
          <Link to="/">News</Link>
          <Link to="/">Privacy policy</Link>
          <Link to="/">Return policy</Link>
        </div>
        <p className={styles.footerCopyright}>Copyright © 2024 by mlbyl™</p>
      </div>
    </footer>
  );
};

export default Footer;
