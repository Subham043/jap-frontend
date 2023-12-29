import React from "react";
import { Scrollbar, A11y, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Link from "next/link";
import Image from "next/image";
import { productData } from "../home/product-data";
const RelatedProduct = () => {
  const products = productData.slice(0,6)

 

  return (
    <>
      <div className="row">
        <div className="col-xxl-4 col-xl-5 col-lg-4">
          <div className="bd-section__title-wrapper mb-40">
            <div className="bd-sm__section-title">
              <h3> Related Products </h3>
            </div>
          </div>
        </div>
        <div className="col-xxl-8 col-xl-7 col-lg-8">
          <div className="bd-trending__tab-wrapper mb-40 p-relative">
            <div className="bd-tending-nav"></div>
            <div className="bd-trending__navigation">
              <button className="trending-button-prev">
                <i className="fa-regular fa-angle-left"></i>
              </button>
              <button className="trending-button-next">
                <i className="fa-regular fa-angle-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bd-trending__item-wrapper">
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-tab-1"
            role="tabpanel"
            aria-labelledby="nav-tab-1-tab"
          >
            <div className="bd-trending-active swiper-container">
              <div className="swiper-wrappers">
                <Swiper
                  modules={[Navigation, Scrollbar, A11y, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                  loop={true}
                  observer={true}
                  observeParents={true}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                  }}
                  navigation={{
                    nextEl: ".trending-button-next",
                    prevEl: ".trending-button-prev",
                  }}
                  breakpoints={{
                    500: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 2,
                    },
                    1200: {
                      slidesPerView: 3,
                    },
                    1400: {
                      slidesPerView: 4,
                    },
                  }}
                >
                  {products.length ? (
                    <>
                      {products.map((item) => {
                      
                        return (
                          <SwiperSlide key={item._id}>
                            <div className="swiper-slides">
                              <div className="bd-trending__item text-center mb-30">
                                <div className="bd-trending__product-thumb">
                                  <Link href={`/products/${item._id}`}>
                                    <Image
                                      width={500}
                                      height={500}
                                      style={{ width: "100%", height: "auto" }}
                                      src={item.img}
                                      alt="product-img"
                                    />
                                  </Link>
                                  <div className="bd-product__action">
                                    <span
                                      className="cart-btn"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Quick Shop"
                                    >
                                      <i className="fal fa-cart-arrow-down"></i>
                                    </span>
                                    <span
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Quick View"
                                      data-bs-toggle="modal"
                                      data-bs-target="#productmodal"
                                    >
                                      <i className="fal fa-eye"></i>
                                    </span>
                                    <span
                                      className="wishlist-btn"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Quick Wishlist"
                                    >
                                      <i className="fal fa-heart"></i>
                                    </span>
                                  </div>
                                </div>
                                <div className="bd-teanding__content">
                                  <h4 className="bd-product__title">
                                    <Link href={`/products/${item._id}`}>
                                      {item.productName}
                                    </Link>
                                  </h4>
                                  <div className="bd-product__price">
                                    {item?.offer === true ? (
                                      <span className="bd-product__old-price">
                                        <del>
                                          {`$${
                                            item?.oldPrice % 1 === 0
                                              ? `${item?.oldPrice}.00`
                                              : item?.oldPrice.toFixed(2)
                                          }`}
                                        </del>
                                      </span>
                                    ) : (
                                      <></>
                                    )}

                                    {item?.price % 1 === 0 ? (
                                      <span className="bd-product__new-price">${`${item?.price}.00`}</span>
                                    ) : (
                                      <span className="bd-product__new-price">
                                        ${item?.price.toFixed(2)}
                                      </span>
                                    )}
                                  </div>
                                  <div className="bd-product__icon">
                                    {/* <GetRatting averageRating={item.averageRating} /> */}
                                  </div>
                                </div>
                                <div className="bd-product__tag">
                                  {item?.offer ? (
                                    <>
                                      <span className="tag-text danger-bg">
                                        
                                        {item.offerPersent}%
                                      </span>
                                    </>
                                  ) : (
                                    <>
                                      <span className="tag-text theme-bg">
                                        
                                        {item.productStatus}
                                      </span>
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </>
                  ) : (
                    <>
                      <h2>No Related Product Available</h2>
                    </>
                  )}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedProduct;
