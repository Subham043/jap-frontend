import Link from "next/link";
import React from "react";
import CartIcon from "../sheardComponent/elements/icons/cart-icon";
import WishlistIcon from "../sheardComponent/elements/icons/wishlist-icon";
import Image from "next/image";
import MobileMenu from "./elements/MobileMenu";
import { useGlobalContext } from "@/context/AppProvider";
const Sidebar = () => {
  const { showSidebar, setShowSidebar } = useGlobalContext();
  const safeSetShowSidebar = setShowSidebar || (() => {});

  return (
    <>
      <div className="fix">
        <div className={`side-info ${showSidebar ? "info-open" : ""}`}>
          <div className="side-info-content">
            <div className="modals-content">
              <div className="offcanvas__wrapper">
                <div className="offcanvas__content">
                  <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
                    <div className="offcanvas__logo logo">
                      <Link href="/">
                        <Image width={116} height={125} src='/assets/img/logo/new-logo.webp' alt="logo" style={{height: '90px', objectFit: 'contain'}} />
                      </Link>
                    </div>
                    <div className="offcanvas__close">
                      <button
                        className="offcanvas__close-btn"
                        onClick={() => safeSetShowSidebar(false)}
                      >
                        <i className="fal fa-times"></i>
                      </button>
                    </div>
                  </div>
                  <div className="bd-utilize__buttons mb-25 d-none">
                    <div className="bd-action__item">
                      <div className="bd-action__cart d-none">
                        <div className="bd-action__cart-icon">
                          <span className="bd-cart-mini-btn">
                            <CartIcon />
                          </span>
                          <span className="bd-action__item-number cart-count">
                            0
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bd-action__item d-none">
                      <div className="bd-action__wishlist">
                        <div className="bd-action__wistlist-icon">
                          <span className="bd-cart-mini-btn">
                            <WishlistIcon />
                          </span>
                          <span className="bd-action__item-number wishlist-count">
                            0
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <nav className="side-mobile-menu d-block d-xl-none mm-menu">
                    <MobileMenu />
                  </nav>
                  <div className="offcanvas__contact mt-30 mb-20">
                    <h4>Contact Info</h4>
                    <ul>
                      <li className="d-flex align-items-center">
                        <div className="offcanvas__contact-icon mr-15">
                          <i className="fal fa-map-marker-alt"></i>
                        </div>
                        <div className="offcanvas__contact-text">
                          <p className="m-0">
                            Salivaram PO, Denkanikottai, Tamil Nadu - 635107
                          </p>
                        </div>
                      </li>
                      <li className="d-flex align-items-center">
                        <div className="offcanvas__contact-icon mr-15">
                          <i className="far fa-phone"></i>
                        </div>
                        <div className="offcanvas__contact-text">
                          <Link href="tel:+91-9207300055">+91-9207300055 </Link>
                        </div>
                      </li>
                      <li className="d-flex align-items-center">
                        <div className="offcanvas__contact-icon mr-15">
                          <i className="fal fa-envelope"></i>
                        </div>
                        <div className="offcanvas__contact-text">
                          <Link href="mailto:operations@jap.bio">
                            <span className="mailto:operations@jap.bio">
                              operations@jap.bio
                            </span>
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="offcanvas__social">
                    <ul>
                      <li>Share:</li>
                      <li>
                        <Link href="https://www.facebook.com/jaivikavamprakrutikproducerltd" target="_blank">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://twitter.com/JaivikAvam"
                          title="Twitter"
                        >
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.linkedin.com/in/jaivik-avam-prakrutik-5501a327b/"
                          title="Linkedin"
                          target="_blank"
                        >
                          <i className="fab fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.instagram.com/jaivikavamprakrutik/"
                          target="_blank"
                          title="Instagram"
                        >
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => safeSetShowSidebar(false)}
        className={`offcanvas-overlay ${showSidebar ? "overlay-open" : ""}`}
      ></div>
    </>
  );
};

export default Sidebar;
