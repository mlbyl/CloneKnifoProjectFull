import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './ContactusForm.module.css';

const ContactForm = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center font-weight-bold mb-4">
        Fill out the form and we'll get back soon!
      </h2>
      
      <form className="row">
        {/* First Name */}
        <div className="col-md-6 mb-3">
          <label className="form-label font-weight-bold">First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        {/* Last Name */}
        <div className="col-md-6 mb-3">
          <label className="form-label font-weight-bold">Last name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
          />
        </div>

        {/* Phone Number */}
        <div className="col-md-6 mb-3">
          <label className="form-label font-weight-bold">Phone number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Phone number"
          />
        </div>

        {/* Email Address */}
        <div className="col-md-6 mb-3">
          <label className="form-label font-weight-bold">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email address"
          />
        </div>

        {/* Message */}
        <div className="col-12 mb-3">
          <label className="form-label font-weight-bold">Enter your message</label>
          <textarea
            className="form-control"
            rows="4"
            placeholder="Enter your message"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="col-12 text-left">
          <button type="submit" className={`${styles.submitButton} btn`}>
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
