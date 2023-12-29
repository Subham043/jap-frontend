import React from "react";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";
import Pagetitle from "../sheardComponent/Pagetitle";

const ContactMain = () => {
  return (
    <>
      <Pagetitle title='Contact us' img='/assets/img/banner/page-banner-2.jpg' />
      <ContactForm />
      <ContactMap />
    </>
  );
};

export default ContactMain;
