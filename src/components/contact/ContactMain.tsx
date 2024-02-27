import React from "react";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";
import Pagetitle from "../sheardComponent/Pagetitle";

const ContactMain = () => {
  return (
    <>
      <Pagetitle title='Contact us' img='/assets/img/banner/page-banner-3.jpg' />
      <ContactForm />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12">
            <h2 className="bd-section__title mb-10 text-center">
              Regd office
            </h2>
            <ContactMap map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3896.4299949200426!2d77.79629201053798!3d12.421045087795335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae85864b829c47%3A0xaea37bfe27fe1953!2sJaivik%20Vigyan%20Kendra!5e0!3m2!1sen!2sin!4v1708671133923!5m2!1sen!2sin" />
          </div>
          <div className="col-lg-6 col-md-12">
            <h2 className="bd-section__title mb-10 text-center">
              Business office
            </h2>
            <ContactMap map="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15554.279747730327!2d77.5810544!3d12.9353396!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1502306f445f%3A0xc1591d5d69710f84!2sJaivik%20avam%20Prakruthik%20Producer%20Company!5e0!3m2!1sen!2sin!4v1704549150772!5m2!1sen!2sin" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMain;
