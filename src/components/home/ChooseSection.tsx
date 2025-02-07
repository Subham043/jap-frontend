import React from "react";
import Image from "next/image";

import thumb1 from "../../../public/assets/img/why-choose/1-min.png"
import thumb2 from "../../../public/assets/img/why-choose/2-min.png"
import thumb3 from "../../../public/assets/img/why-choose/3-min.png"
import thumb4 from "../../../public/assets/img/why-choose/4-min.png"
import thumb5 from "../../../public/assets/img/why-choose/pl1.png"
import thumb6 from "../../../public/assets/img/why-choose/pl2.png"
import { useRouter } from "next/navigation";

const ChooseSection = () => {
  const route = useRouter()
  return (
    <section className="bd-why-choose__area grey-bg-2 pt-55 pb-55">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="bd-section__title-wrapper text-center mb-60">
              <h2 className="bd-section__title mb-30">
                About Us
              </h2>
              <p>JAP-PCL was created as a multi-state farmers producer company, started by shareholder-member farmers from Karnataka, Tamil Nadu, Kerala and Andhra Pradesh. All these farmers practice only organic farming or natural farming, and hence the names, jaivik (organic) and pratrutik (natural).</p>
            </div>
          </div>
        </div>
        <div className="row g-0 align-items-center justify-content-center">
          <div className="col-xl-5 col-lg-5 col-md-12 d-flex flex-wrap p-relative">
            <button className="bd-choose__thumb text-center w-50 p-relative about-category-btn" onClick={()=>route.push('/products?category=oil-seeds-pulses-others')}>
              <Image
                src={thumb1}
                alt="choose-big"
                width={500}
                height={500}
                style={{ width: "100%", height: "auto" }}
              />
            </button>
            <button className="bd-choose__thumb text-center w-50 about-category-btn" onClick={()=>route.push('/products?category=vegetables')}>
              <Image
                src={thumb2}
                alt="choose-big"
                width={500}
                height={500}
                style={{ width: "100%", height: "auto" }}
              />
            </button>
            <button className="bd-choose__thumb text-center w-50 about-category-btn" onClick={()=>route.push('/products?category=oil-seeds-pulses-others')}>
              <Image
                src={thumb4}
                alt="choose-big"
                width={500}
                height={500}
                style={{ width: "100%", height: "auto" }}
              />
            </button>
            <button className="bd-choose__thumb text-center w-50 about-category-btn" onClick={()=>route.push('/products?category=fruits')}>
              <Image
                src={thumb3}
                alt="choose-big"
                width={500}
                height={500}
                style={{ width: "100%", height: "auto" }}
              />
            </button>
            <div className="d-flex col-auto about-section-image-center">
              <button className="bd-choose__thumb text-center w-50 p-relative about-category-btn" onClick={()=>route.push('/products?category=spices')}>
                <Image
                  src={thumb5}
                  alt="choose-big"
                  width={100}
                  height={100}
                  style={{ width: "100%", height: "auto" }}
                />
              </button>
              <button className="bd-choose__thumb text-center w-50 about-category-btn" onClick={()=>route.push('/products?category=millets')}>
                <Image
                  src={thumb6}
                  alt="choose-big"
                  width={100}
                  height={100}
                  style={{ width: "100%", height: "auto" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseSection;
