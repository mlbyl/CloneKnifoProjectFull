import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import styles from './ContactusInfo.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactInfo = () => {
  return (
    <div className="container my-5">
      <div className="row text-center">
        
        {/* Phone Number */}
        <div className="col-md-4">
          <div className={styles.iconWrapper}>
            <FaPhoneAlt className={styles.icon} />
          </div>
          <h5 className="mt-3 font-weight-bold">Phone number</h5>
          <p>(+01) 0223 6020 020</p>
          <p>(+01) 2006 0600 600</p>
        </div>
        
        {/* Store Address */}
        <div className="col-md-4">
          <div className={styles.iconWrapper}>
            <FaMapMarkerAlt className={styles.icon} />
          </div>
          <h5 className="mt-3 font-weight-bold">Store address</h5>
          <p>Akshya nagar 1st block 1st cross, bangalore-560016</p>
        </div>
        
        {/* Customer Email */}
        <div className="col-md-4">
          <div className={styles.iconWrapper}>
            <FaEnvelope className={styles.icon} />
          </div>
          <h5 className="mt-3 font-weight-bold">Customer email</h5>
          <p>demoinfo@gmail.com</p>
          <p>Info8989@gmail.com</p>
        </div>
        
      </div>
    </div>
  );
};

export default ContactInfo;
