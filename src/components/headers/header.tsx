import Link from "next/link";
import React, { useEffect } from "react";
import HeaderTopTwo from "./header-top-two";
import NavMenu from "./navmenu";
import userIcon from "../../../public/assets/img/icon/user-icon.png"
import Image from "next/image";
import CartIcon from "../sheardComponent/elements/icons/cart-icon";
import WishlistIcon from "../sheardComponent/elements/icons/wishlist-icon";
import Sidebar from "..//sheardComponent/Sidebar";
import SidebarCart from "./SidebarCart";
import SidebarWishlist from "./SidebarWishlist";
import { useGlobalContext } from "@/context/AppProvider";
import { useSession } from "next-auth/react";
import { useCart } from "@/context/CartProvider";
import { useWishlist } from "@/context/WishlistProvider";

const Header = () => {
  const { status } = useSession();
  const {cart } = useCart();
  const {wishlist } = useWishlist();
  const { setShowSidebar, setOpenCart, setOpenWishlist } = useGlobalContext();
  const safeSetShowSidebar = setShowSidebar || (() => { });
  useEffect(() => {
    window.addEventListener("scroll", sticky);
    return () => {
      window.removeEventListener("scroll", sticky);
    };
  });

  const sticky = () => {
    const header = document.querySelector("#header-sticky");
    const scrollTop = window.scrollY;
    if (header) {
      scrollTop >= 40
        ? header.classList.add("header-sticky")
        : header.classList.remove("header-sticky");
    }
  };
  // Sticky Menu Area End
  return (
    <>
      <header>
        <HeaderTopTwo />
        <div
          id="header-sticky"
          className="bd-header__bottom-area-3 transparent__header"
        >
          <div className="container">
            <div className="row align-items-center justify-content-between">

              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-auto col-auto">
                <div className="bd-header__logo-3">
                  <Link href="/" className="header-logo-link">
                    <Image width={116} height={125} src='/assets/img/logo/new-logo.png' alt="logo" className="header-logo-main" style={{ width: "auto" }} />
                  </Link>
                </div>
              </div>

              <div className="col-xxl-auto col-xl-auto col-lg-auto d-none d-lg-block">
                <div className="bd-header__left-3">
                  <div className="main-menu d-none d-none d-lg-block">
                    <nav id="mobile-menu">
                      <NavMenu />
                    </nav>
                  </div>
                </div>
              </div>

              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-auto col-auto d-flex gap-5 justify-content-end">
                <div className="bd-header__right header__right-3">
                  <div className="bd-action__cart-list list-3">
                    <div className="bd-action__item">
                      <div className="bd-action__cart-wrapper">
                        <div
                          className="bd-action__cart-icon"
                          onClick={() => setOpenCart(true)}
                        >
                          <span className="bd-cart-mini-btn">
                            <CartIcon />
                          </span>
                          <span className="bd-action__item-number cart-count">
                            {cart ? cart.products.length : 0}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bd-action__item">
                      <div className="bd-action__wishlist">
                        <div
                          className="bd-action__wistlist-icon"
                          onClick={() => setOpenWishlist(true)}
                        >
                          <span className="bd-cart-mini-btn">
                            <WishlistIcon />
                          </span>
                          <span className="bd-action__item-number wishlist-count">
                            {wishlist ? wishlist.products.length :  0}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bd-action__item d-sm-flex  align-items-center">
                    <div className="bd-action__cart">
                      <div className="bd-action__cart-icon">
                        <Link className="header-author-img user-link" href={status === 'authenticated' ? "/account/profile" : "/auth/login"}>
                          <Image
                            src={userIcon}
                            width={50}
                            height={50}
                            style={{
                              width: "auto",
                              height: "auto",
                            }}
                            alt="user Icon"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="header__hamburger d-flex d-lg-none">
                    <button
                      type="button"
                      className="hamburger-btn"
                      onClick={() => safeSetShowSidebar(true)}
                    >
                      <span className="hamburger-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </header>
      <Sidebar />
      <SidebarCart />
      <SidebarWishlist />
    </>
  );
};

export default Header;
