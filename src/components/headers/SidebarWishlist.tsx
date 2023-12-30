;
import { useGlobalContext } from "@/context/AppProvider";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SidebarWishlist = () => {
  const { openWishlist, setOpenWishlist } = useGlobalContext();
  
  return (
    <>
      <div className="fix">
        <div
          className={`sidebar-action sidebar-cart ${
            openWishlist ? "cart-open" : ""
          }`}
        >
          <div className="cartmini__wrapper">
            <div className="cartmini__title">
              <h4>Wishlist Products</h4>
            </div>
            <div className="cartmini__close">
              <button
                type="button"
                className="cartmini__close-btn"
                onClick={() => setOpenWishlist(false)}
              >
                <i className="fal fa-times"></i>
              </button>
            </div>
            {/* <div className="cartmini__widget">
              {cartProducts.length ? (
                <>
                  <div className="cartmini__inner">
                    <ul>
                      {cartProducts.map((item, index) => {
                        const productPrice =
                          (item.price ?? 0) * (item.totalCard ?? 0);
                        return (
                          <li key={index}>
                            <div className="cartmini__thumb">
                              <Link href={`/products/${item._id}`}>
                                <Image
                                  width={50}
                                  height={100}
                                  style={{ width: "100%", height: "auto" }}
                                  src={item.img}
                                  alt=""
                                />
                              </Link>
                            </div>
                            <div className="cartmini__content">
                              <h5>
                                <Link href={`/products/${item._id}`}>
                                  {item.productName}
                                </Link>
                              </h5>
                              <div className="product-quantity mt-10 mb-10">
                                <span
                                  className="cart-minus"
                                  onClick={() => handDecressCart(item)}
                                >
                                  -
                                </span>
                                <input
                                  className="cart-input"
                                  type="text"
                                  onChange={handleChange}
                                  value={item.totalCard}
                                />
                                <span
                                  className="cart-plus"
                                  onClick={() => handleAddToCart(item)}
                                >
                                  +
                                </span>
                              </div>
                              <div className="product__sm-price-wrapper">
                                <span className="product__sm-price">
                                  ${productPrice}
                                </span>
                              </div>
                            </div>
                            <span
                              className="cartmini__del"
                              onClick={() => handleDelteProduct(item)}
                            >
                              <i className="fal fa-times"></i>
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="cartmini__checkout">
                    <div className="cartmini__checkout-title mb-30">
                      <h4>Subtotal:</h4>
                      <span className="subtotal-price">${totalPrice}</span>
                    </div>
                    <div className="cartmini__checkout-btn">
                      <Link
                        onClick={() => setOpenWishlist(false)}
                        className="bd-fill__btn w-100"
                        href="/wishlist"
                      >
                        View Wishlist
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-center pt-20 text-capitalize">
                    Your wishlist is empty
                  </p>
                </>
              )}
            </div> */}
          </div>
        </div>
      </div>
      <div
        onClick={() => setOpenWishlist(false)}
        className={`offcanvas-overlay ${openWishlist ? "overlay-open" : ""}`}
      ></div>
    </>
  );
};

export default SidebarWishlist;