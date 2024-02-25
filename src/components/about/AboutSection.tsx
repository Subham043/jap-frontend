import React from "react";
import thumb1 from "../../../public/assets/img/about/about-big-shape.png";
import thumb2 from "../../../public/assets/img/about/about-icon.png";
import thumb3 from "../../../public/assets/img/gallery/23.jpeg";
// import thumb4 from "../../../public/assets/img/about/about-img-11.jpg";
import thumb4 from "../../../public/assets/img/gallery/76.jpeg";
import thumb5 from "../../../public/assets/img/about/about-shape-1.png";
import Image from "next/image";
const AboutSection = () => {
  return (
    <section className="bd-about__area grey-bg p-relative z-index-1 pt-55 pb-30">
      <div className="container">
        <div className="bd-about__bg-wrapper p-relative">
          <Image
            style={{ width: "100%", height: "auto" }}
            className="bd-about__bg-shape "
            src={thumb1}
            alt="about-big-shape"
          />
        </div>
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="bd-about__content-wrapper mb-10">
              <div className="bd-section__title-wrapper mb-25">
                {/* <span className="bd-sub__title">About Us</span> */}
                <h2 className="bd-section__title mb-15">
                  About Us
                </h2>
                <p>
                  JAP-PCL was created as a multi-state farmer&apos;s producer company, started by shareholder-member farmers from Karnataka, Tamil Nadu, Kerala and Andhra Pradesh. All these farmers practice only organic farming or natural farming, and hence the names, jaivik (organic) and pratrutik (natural). These organic farmers have been certified since 2015. Later, the new PCL was joined by small holders certified groups (ICS groups – Internal Control Systems) from different districts/locations from other states, thus giving a wider basket of offerings for FPOs to connect to markets and buyers.
                </p>
                <p>The formation of JAP-PCL and connecting it to buyers and markets are powered and facilitated by ICCOA – International Competence Centre for Organic Agriculture as part of its strategy to incubate a farmer - producer company to maintain and carry forward the sustainable farming status and organic certification of farmer groups created by ICCOA&apos;s projects across the years.</p>
              </div>
              <div className="bd-about__content">
                <div className="bd-about__features">
                  <div className="bd-adbout__icon">
                    <Image style={{ width: "100%", height: "100%" }} src={thumb2} alt="about-icon" />
                  </div>
                  <div className="bd-about__text">
                    <h4>Mission</h4>
                    <p>
                      Improve the livelihood and income of farmers through knowledge, quality farm-inputs and services; and be the most reliable supplier of healthy, safe, and ecological agri-horticultural produce to the markets and the world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="bd-about__thumb-wrapper p-relative mb-10 ">
              <div className="bd-about__thumb-1 w-img">
                <Image
                  src={thumb4}
                  width={330}
                  height={430}
                  alt="about-img"
                  style={{ width: "330px", height: "auto" }}
                />
              </div>
              <div className="bd-about__thumb-2">
                <Image
                  src={thumb3}
                  width={330}
                  height={430}
                  alt="about-img"
                  style={{ width: "330px", height: "auto" }}
                />
              </div>
              <div className="bd-about__quite-box">
                <div className="quite-content">
                  <p>{`"Go Organic, Be Organic, Live Organic"`}</p>
                </div>
                <div className="quite-icon">
                  <i className="flaticon-quote"></i>
                </div>
                <div className="bd-about__quite-name">
                  <span>JAP</span>
                </div>
              </div>
              <div className="bd-about__shape-1">
                <Image
                  src={thumb5}
                  alt="about-shape"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="bd-about__shape-2"></div>
              <div className="bd-about__shape-3"></div>
              <div className="bd-about__shape-4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
