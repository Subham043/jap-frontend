
import Image from "next/image";
import Link from "next/link";
import React from "react";
import support from "../../../public/assets/img/icon/support.png";
import discover from "../../../public/assets/img/icon/discover.png";
import masterCard from "../../../public/assets/img/icon/mastercard.png";
import paypal from "../../../public/assets/img/icon/paypal.png";
import visa from "../../../public/assets/img/icon/visa.png";
import logo from "../../../public/assets/img/logo/new-logo.png";
import android from "../../../public/assets/img/playstore.png";
import ios from "../../../public/assets/img/applestore.png";

const Footer = () => {
  
  return (
    <footer>
      <section className="bd-footer__area grey-bg pt-50 pb-10">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="bd-footer__widget footer-col-1 mb-30">
                <div className="bd-footer__info">
                  <div className="bd-footer__logo">
                    <Link href="/">
                      <Image src={logo} alt="footer-logo" style={{height: '150px', objectFit: 'contain', width: 'auto'}} />
                    </Link>
                  </div>
                  <p>
                    JVK Organics takes pride in delivering a wide variety of fresh and certified organic vegetables, fruits, eggs, and meats right to your doorstep.
                  </p>
                  <div className="bd-footer__contact">
                    <span>
                      <Link href="mailto:operations@jap.bio">
                        <i className="fa-regular fa-envelope"></i>
                        operations@jap.bio
                      </Link>
                    </span>
                    <span>
                      <i className="fa-solid fa-location-dot"></i>Favicon,
                      New York, USA - 25423
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="bd-footer__widget footer-col-2 mb-30">
                <div className="bd-footer__widget-title">
                  <h4>Quick Links</h4>
                </div>
                <div className="bd-footer__link">
                  <ul>
                    <li>
                      <Link href="/about">About Our Company</Link>
                    </li>
                    <li>
                      <Link href="/certifications">Certifications</Link>
                    </li>
                    <li>
                      <Link href="/products">Products</Link>
                    </li>
                    <li>
                      <Link href="/gallery">Gallery</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <Link href="/b2b">B2B Enquiry</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="bd-footer__widget footer-col-3 mb-30">
                <div className="bd-footer__widget-title">
                  <h4>Legal Links</h4>
                </div>
                <div className="bd-footer__link">
                  <ul>
                    <li>
                      <Link href="/terms-conditions">Terms & Condition</Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="/shipping-policy">Shipping Policy</Link>
                    </li>
                    <li>
                      <Link href="/return-refund-policy">Return & Refund Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="bd-footer__widget mb-30">
                <div className="bd-footer__widget-title">
                  <h4>Available On</h4>
                </div>
                <div className="bd-footer__subcribe p-relative mb-40">
                  <div className="d-flex align-items-center gap-1">
                    <Image src={android} style={{height: '50px', objectFit: 'contain'}} alt="" />
                    <Image src={ios} style={{height: '50px', objectFit: 'contain'}} alt="" />
                  </div>
                </div>
                <div className="bd-footer__support-wrapper">
                  <div className="bd-fotter__support-icon">
                    <Image src={support} alt="support-img" />
                  </div>
                  <div className="bd-footer__support-inner">
                    <span>8:30 AM - 9:30 PM</span>
                    <h4>
                      <Link href="tel:+919207300055">+91-9207300055</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bd-sub__fotter">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="bd-footer__copyright">
                <ul>
                  <li>All Rights Reserved</li>
                  <li>
                    Copyrighted by © 2024&nbsp;
                    <span>
                      <Link href="/">
                        JAP
                      </Link>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="bd-footer__payment">
                <ul>
                  <li>
                    <span>We Support</span>
                  </li>
                  <li>
                    <Link href="#">
                      <Image src={discover} alt="discover" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Image src={masterCard} alt="mastercard" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Image src={paypal} alt="paypal" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Image src={visa} alt="visa" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="https://wa.me/9207300055" className="whatsapp_float" target="_blank" rel="noopener noreferrer"> <i className="fab fa-whatsapp whatsapp-icon"></i></a>
    </footer>
  );
};

export default Footer;
