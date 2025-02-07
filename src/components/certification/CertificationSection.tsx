import React from "react";
import thumbOne from "../../../public/assets/img/certification/FSSAI.jpeg";
import thumbTwo from "../../../public/assets/img/certification/PGS.jpg";
import thumbThree from "../../../public/assets/img/certification/NPOP.jpeg";
import thumbFour from "../../../public/assets/img/certification/USDA.jpeg";
import Image from "next/image";
import NpopSlider from "./NpopSlider";
const CertificationSection = () => {
  
  return (
    <section className="bd-about__area pt-20 pb-35">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            <div className="bd-about__wrapper">
              <div className="bd-about__image-1 m-img">
                <Image src={thumbOne} style={{width:'100%', height: 'auto'}} alt="about-image" />
              </div>
            </div>
          </div>
          <div className="col-xxl-8 col-xl-7 col-lg-7">
            <div className="bd-about__content-box">
              <div className="bd-section__title-wrapper">
                <span className="bd-sub__title">Certified By</span>
                <h2 className="bd-section__title mb-10">
                  FSSAI
                </h2>
              </div>
              <div className="bd-about__inner">
                <div className="bd-about__info">
                  <p>The Food Safety and Standards Authority of India (FSSAI) is a legal organization created by the Indian Government&apos;s Ministry of Health & Family Welfare. It is in charge of preserving and advancing public health. Any food business in India that manufactures, stores, transports, or distributes food must have this license or registration.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            <div className="bd-about__wrapper">
              <div className="bd-about__image-1 m-img">
                <Image src={thumbTwo} style={{width:'100%', height: 'auto'}} alt="about-image" />
              </div>
            </div>
          </div>
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="bd-about__content-box">
              <div className="bd-section__title-wrapper">
                <span className="bd-sub__title">Certified By</span>
                <h2 className="bd-section__title mb-10">
                  PGS
                </h2>
              </div>
              <div className="bd-about__inner">
                <div className="bd-about__info">
                  <p>Locally focused quality assurance systems are known as Participatory Guarantee Systems (PGS). They serve as a substitute for third party certification and are particularly suited to small-scale markets and supply chains.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            <div className="bd-about__wrapper">
              <div className="bd-about__image-1 m-img">
                <Image src={thumbThree} style={{width:'100%', height: 'auto'}} alt="about-image" />
              </div>
            </div>
          </div>
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="bd-about__content-box">
              <div className="bd-section__title-wrapper">
                <span className="bd-sub__title">Certified By</span>
                <h2 className="bd-section__title mb-10">
                  NPOP
                </h2>
              </div>
              <div className="bd-about__inner">
                <div className="bd-about__info">
                  <p>The Indian Ministry of Commerce and Industry has been implementing the National Programme for Organic Production since 2001. It aims to provides for Standards for organic production, systems, criteria and procedure for accreditation of Certification Bodies, the National (India Organic) Logo and the regulations governing its use.</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-xxl-12 col-xl-12 col-lg-12">
            <div className="bd-about__content-box">
              <div className="bd-about__inner">
                <div className="bd-about__info">
                  <NpopSlider/>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        {/* <div className="row align-items-center">
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            <div className="bd-about__wrapper">
              <div className="bd-about__image-1 m-img">
                <Image src={thumbFour} style={{width:'100%', height: 'auto'}} alt="about-image" />
              </div>
            </div>
          </div>
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="bd-about__content-box">
              <div className="bd-section__title-wrapper">
                <span className="bd-sub__title">Certified By</span>
                <h2 className="bd-section__title mb-10">
                  NOP
                </h2>
              </div>
              <div className="bd-about__inner">
                <div className="bd-about__info">
                  <p>National Organic Program, USDA is a certification standards developed by United States. This is a third party certification, certifying farm and business to meet the national standards. NOP certified products can be exported to US only.</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default CertificationSection;
