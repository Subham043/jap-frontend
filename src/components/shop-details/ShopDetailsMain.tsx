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
import QuantityMain from "../cart/QuantityMain";
import { useCart } from "@/context/CartProvider";
import { useWishlist } from "@/context/WishlistProvider";
import { Swiper as SwiperType } from "swiper/types";

type Props = {
  product: ProductSegmentState
}

const ShopDetailsMain = ({ product }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const {incrementProductQuantity, decrementProductQuantity, cart} = useCart();
  const {wishlist, wishlistHandler} = useWishlist();
  const [wishlistLoading, setWishlistLoading] = useState<boolean>(false);

  const incrementQuantity = async () => {
    try {
        setLoading(true);
        await incrementProductQuantity(product.id);
    } finally {
        setLoading(false);
    }
  };
  const decrementQuantity = async () => {
      try {
          setLoading(true);
          await decrementProductQuantity(product.id)
      } finally {
          setLoading(false);
      }
  };

  const wishlistItemHandler = async () => {   
      try{
          setWishlistLoading(true)
          if(product && wishlist){
              await wishlistHandler(product.id)
          }
      }finally{
          setWishlistLoading(false)
      }
  }
  
  return (
    <>

      <div className="bd__shop-details-area pt-50 pb-25">
        <div className="container small-container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="bd__shop-details-inner mb-15">
                <div className="row">
                  <div className="col-md-6">
                    <div className="product-details__thumb-inner small-device p-relative">
                      <div className="bd__shop-details-img-gallery mb-10">
                        <div className="product-details-active swiper-container">
                          <div className="swiper-wrappers">
                            <Swiper
                              // thumbs={{ swiper: thumbsSwiper }}
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
                              {product &&
                                ([product.featured_image_link ? product.featured_image_link : '', ...product.other_images.flatMap(item =>item.image_link)]).map((item, index) => {
                                  return (
                                    <SwiperSlide key={index}>
                                      <div className="swiper-slides">
                                        <div className="bd-product__details-large-img w-img">
                                          {item && <img
                                            src={item}
                                            alt="product-details-img"
                                            width={577}
                                            height={577}
                                            style={{
                                              width: "100%",
                                              height: "auto",
                                            }}
                                          />}
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
                              // onSwiper={(swiper) => setThumbsSwiper(swiper)}
                              loop={true}
                              spaceBetween={0}
                              slidesPerView={4}
                              modules={[Controller, FreeMode, Thumbs]}
                              watchSlidesProgress={false}
                            >
                              {product &&
                                ([product.featured_image_link ? product.featured_image_link : '', ...product.other_images.flatMap(item =>item.image_link)]).map((item, index) => (
                                  <SwiperSlide key={index}>
                                    <div className="swiper-slides m-img">
                                      <div className="product-small__img">
                                        {item && <img
                                          src={item}
                                          alt="product-details-img"
                                          width={70}
                                          height={70}
                                          style={{
                                            width: "100%",
                                            height: "auto",
                                          }}
                                        />}
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                ))}
                            </Swiper>
                          </div>
                        </div>
                      </div>
                    </div>
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
                        <span>&#8377;{product.price}.00</span>
                        {product?.price !== product?.discounted_price && <del>&#8377;{product.discounted_price}.00</del>}
                      </div>
                      {product.categories.length && <div className="modal-product-meta bd__product-details-menu-1">
                        <ul>
                          <li>
                            <strong>Categories:</strong>
                            <span>
                              {
                                product.categories.map((item, i) => <Link href="/shop" key={i}>{item.name}</Link>)
                              }
                            </span>
                          </li>
                        </ul>
                      </div>}
                      <div className="main-product-quantity-cart product-quantity-cart align-items-center mb-25">
                        <QuantityMain 
                            loading={loading}
                            isSmall={false}
                            quantity={cart ? (cart.products.filter(item => item.id===product.id).length>0 ? cart.products.filter(item => item.id===product.id)[0].quantity : 0) : 0} 
                            incrementQuantity={incrementQuantity} 
                            decrementQuantity={decrementQuantity}
                        />
                        <button className="cart-btn bd-unfill__btn product-card-main mt-2" disabled={wishlistLoading} onClick={()=>wishlistItemHandler()}>
                          {wishlistLoading ? 
                            <div className="spinner-grow spinner-grow-sm text-success" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>: ((wishlist && [...wishlist.products.map(item => item.id)].indexOf(product.id)<0) ? <><i className="fal fa-heart"></i> &nbsp;Add to Wishlist</> : <><i className="fal fa-heart" style={{color: 'red'}}></i> &nbsp;Remove from Wishlist</>)}
                        </button>
                      </div>
                      <div className="bd__social-media">
                        <ul>
                          <li>Share:</li>
                          <li>
                            <Link
                              href={`https://www.facebook.com/share.php?u=https://jap.bio/products/${product.slug}&title=${product.name}`}
                              target="_blank"
                            >
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href={`https://twitter.com/share?text=${product.name}&url=https://jap.bio/products/${product.slug}`}
                              title="Twitter"
                            >
                              <i className="fab fa-twitter"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href={`https://www.linkedin.com/shareArticle?mini=true&url=https://jap.bio/products/${product.slug}&title=${product.name}&source=${product.name}`}
                              title="Linkedin"
                              target="_blank"
                            >
                              <i className="fab fa-linkedin"></i>
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
    </>
  );
};

export default ShopDetailsMain;
