import Link from "next/link";
import React, { useState } from "react";
import { FreeMode, Thumbs, Controller, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import discover from "../../../public/assets/img/icon/discover.png";
import masterCard from "../../../public/assets/img/icon/mastercard.png";
import papyle from "../../../public/assets/img/icon/paypal.png";
import visa from "../../../public/assets/img/icon/visa.png";
import Image from "next/image";
import ShopDetailsReview from "./ShopDetailsReview";
import RelatedProduct from "./RelatedProduct";
import { ProductSegmentState } from "@/helper/types";
import GetRatting from "../rating/GetRatting";

type Props = {
  product: ProductSegmentState
}

const ShopDetailsMain = ({ product }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  
  return (
    <>

      <div className="bd__shop-details-area pt-115 pb-75">
        <div className="container small-container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="bd__shop-details-inner mb-55">
                <div className="row">
                  <div className="col-md-6">
                    {/* <div className="product-details__thumb-inner small-device p-relative">
                      <div className="bd__shop-details-img-gallery mb-30">
                        <div className="product-details-active swiper-container">
                          <div className="swiper-wrappers">
                            <Swiper
                              thumbs={{ swiper: thumbsSwiper }}
                              loop={true}
                              spaceBetween={0}
                              slidesPerView={1}
                              freeMode={false}
                              watchSlidesProgress={true}
                              modules={[
                                Navigation,
                                Controller,
                                FreeMode,
                                Thumbs,
                              ]}
                              navigation={{
                                nextEl: ".product-details__button-next",
                                prevEl: ".product-details__button-prev",
                              }}
                            >
                              {myProduct &&
                                myProduct.productImages.map((item, index) => {
                                  return (
                                    <SwiperSlide key={index}>
                                      <div className="swiper-slides">
                                        <div className="bd-product__details-large-img w-img">
                                          <Image
                                            src={item}
                                            alt="product-details-img"
                                            width={577}
                                            height={577}
                                            style={{
                                              width: "100%",
                                              height: "auto",
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </SwiperSlide>
                                  );
                                })}
                            </Swiper>
                          </div>
                        </div>
                      </div>
                      <div className="bd-product__details-small-img">
                        <div className="swiper-container product-details-nav">
                          <div className="swiper-wrappers">
                            <Swiper
                              onSwiper={(swiper) => setThumbsSwiper(swiper)}
                              loop={true}
                              spaceBetween={0}
                              slidesPerView={4}
                              modules={[Controller, FreeMode, Thumbs]}
                              watchSlidesProgress={false}
                            >
                              {myProduct &&
                                myProduct.productImages.map((item, index) => (
                                  <SwiperSlide key={index}>
                                    <div className="swiper-slides m-img">
                                      <div className="product-small__img">
                                        <Image
                                          src={item}
                                          alt="product-details-img"
                                          width={70}
                                          height={70}
                                          style={{
                                            width: "100%",
                                            height: "auto",
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                ))}
                            </Swiper>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div className="col-md-6">
                    <div className="modal-product-info shop-details-info">
                      <div className="product-ratting">
                        <ul>
                          <li>
                            <a href="#">
                              <GetRatting
                                averageRating={product.reviews.map(item => item.star).reduce(function (avg, value, _, { length }) {
                                  return avg + value / length;
                                }, 0)}
                              />
                            </a>
                          </li>

                          <li className="review-total">
                            
                            <a href="#">
                              
                              (
                              {`${product.reviews.length} ${
                               product.reviews.length <= 1 ? "Rating" : "Ratings"
                              }`}
                              )
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h3>{product.name}</h3>
                      <div className="product-price">
                        <span>${product.price}.00</span>
                        <del>${product.discounted_price}.00</del>
                      </div>
                      <div className="modal-product-meta bd__product-details-menu-1">
                        <ul>
                          <li>
                            <strong>Products:</strong>
                            <span>
                              <Link href="/shop">Vegetable</Link>
                              <Link href="/shop">Fruits</Link>
                              <Link href="/shop">Dairy Milk</Link>
                              <Link href="/shop">Bakery</Link>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="product-quantity-cart mb-25">
                        <div className="product-quantity-form">
                          <form onSubmit={(e) => e.preventDefault()}>
                            <button
                              className="cart-minus"
                            >
                              <i className="far fa-minus"></i>
                            </button>
                            <input
                              className="cart-input"
                              type="text"
                              readOnly
                              value={0}
                            />
                            <button
                              className="cart-plus"
                            >
                              <i className="far fa-plus"></i>
                            </button>
                          </form>
                        </div>
                        <span>
                          <Link className="cart-btn bd-fill__btn" href="/cart">
                            <i className="fal fa-cart-arrow-down"></i> Add to
                            Cart
                          </Link>
                        </span>
                      </div>
                      <div className="bd__product-details-menu-3">
                        <ul>
                          <li>
                            <span
                              className="wishlist-btn"
                              title="Wishlist"
                            >
                              <i className="far fa-heart"></i>
                              <span>Add to Wishlist</span>
                            </span>
                          </li>
                          <li>
                            <span
                              className="wishlist-btn cart-btn"
                              title="Compare"
                            >
                              <i className="fas fa-exchange-alt"></i>
                              <span>Compare</span>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="bd__social-media">
                        <ul>
                          <li>Share:</li>
                          <li>
                            <Link
                              href="https://www.facebook.com/"
                              target="_blank"
                            >
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://twitter.com/?lang=en"
                              title="Twitter"
                            >
                              <i className="fab fa-twitter"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.linkedin.com/"
                              title="Linkedin"
                              target="_blank"
                            >
                              <i className="fab fa-linkedin"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.instagram.com/"
                              target="_blank"
                              title="Instagram"
                            >
                              <i className="fab fa-instagram"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="bd__safe-checkout">
                        <h5>Guaranteed Safe Checkout</h5>
                        <a href="#">
                          <Image src={discover} alt="Payment Image" />
                        </a>
                        <a href="#">
                          <Image src={masterCard} alt="Payment Image" />
                        </a>
                        <a href="#">
                          <Image src={papyle} alt="Payment Image" />
                        </a>
                        <a href="#">
                          <Image src={visa} alt="Payment Image" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ShopDetailsReview
                product={product}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bd-related-Product__area mb-95">
        <div className="small-container container">
          <RelatedProduct/>
        </div>
      </div>
    </>
  );
};

export default ShopDetailsMain;
