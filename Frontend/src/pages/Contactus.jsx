import React from "react";
import ContactusBanner from "../components/contactus-components/contactusBanner/ContactusBanner";
import ContactInfo from "../components/contactus-components/contactusInfo/ContactUsInfo";
import ContactForm from "../components/contactus-components/contactusForm/ContactusForm";

const ContactUs = () => {
  return (
    <div>
      <ContactusBanner />
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default ContactUs;
