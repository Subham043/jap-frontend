import React from "react";
import thumbOne from "../../../public/assets/img/about/about-img-6.jpg";
import Image from "next/image";
const AboutSectionTwo = () => {
  
  return (
    <section className="bd-about__area pt-50 pb-35">
      <div className="container">
        <div className="row g-0">
          <div className="col-xxl-5 col-xl-5 col-lg-6">
            <div className="bd-about__wrapper mb-20">
              <div className="bd-about__image-1 m-img mb-20">
                <Image src={thumbOne} alt="about-image" />
              </div>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-7 col-lg-6">
            <div className="bd-about__content-box mb-20">
              <div className="bd-section__title-wrapper mb-20">
                {/* <span className="bd-sub__title">About Us</span> */}
                <h2 className="bd-section__title mb-10">
                  What we do
                </h2>
              </div>
              <div className="bd-about__inner">
                <div className="bd-about__info">
                  <p>We represent 1751 farmers in 14 groups, all ‘certified organic’, managed through ICS (Internal Control System) and registered with the APEDA accredited Organic Certification Body as per NPOP/EU and/or NOP organic standards. JAP-PCL started business in 2022 by marketing fruits and vegetables produced by its farmers from the 14 groups in the markets of Bangalore. And soon after, it started bulk procurement and supplying organic red chilli, turmeric etc. to exporters (under category A).<br/><br/>
In its first year of operations, JAP reached a turnover of INR.118 million (USD. 1.5 million) largely with organic red chillies, fruits & vegetables.
<br/><br/>The company, today is procuring and supplying products to domestic companies in bulk and looking forward to starting retail packing and to entering international markets (exports) as well.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
