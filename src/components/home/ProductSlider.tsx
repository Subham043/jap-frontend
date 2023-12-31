import React from "react";
import { Scrollbar, A11y, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { ProductSegmentState } from "@/helper/types";
import useSWR from "swr";
import { axiosPublic } from "../../../axios";
import { api_routes } from "@/helper/routes";
import ProductCard from "../product/ProductCard";
import Link from "next/link";

const PAGE_SIZE = 8;

type Props = {
  title: string;
  segment: 'is_new_arrival'|'is_best_sale'|'is_featured'|'default';
}

const productFetcher = async (url: string) => {
  const res =await axiosPublic.get(url);
  return res.data.data
};

const  ProductSlider = ({title, segment}:Props) => {

  const { data:productData, isLoading:isProductLoading } = useSWR<ProductSegmentState[]>(`${api_routes.products}?total=${PAGE_SIZE}&page=1&sort=-id${segment!=='default' ? `&filter[${segment}]=true` : ``}`, productFetcher);

  return (
    <>
      <section className="bd-product__area pt-25 pb-35">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12">
              <div className="bd-section__title-wrapper mb-60 text-center">
                <span className="bd-sub__title">Organic Products</span>
                <h2 className="bd-section__title mb-30">{title}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              {productData && (
                <div className="tab-content">
                  <div className="tab-pane fade show active">
                    <div className="row">
                      <div className="col-12">
                        <div className="bd-product__wrapper p-relative">
                          <div className="bd-product__active swiper-container">
                            <div className="swiper-wrappers">
                              {(isProductLoading) && <div className="text-center py-1">
                                <div className="spinner-border text-success" role="status">
                                  <span className="sr-only">Loading...</span>
                                </div>
                              </div>}
                              <Swiper
                                modules={[
                                  Navigation,
                                  Scrollbar,
                                  A11y,
                                  Autoplay,
                                ]}
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
                                  nextEl: ".product-button-next",
                                  prevEl: ".product-button-prev",
                                }}
                                breakpoints={{
                                  500: {
                                    slidesPerView: 2,
                                  },
                                  768: {
                                    slidesPerView: 3,
                                  },
                                  992: {
                                    slidesPerView: 4,
                                  },
                                  1200: {
                                    slidesPerView: 4,
                                  },
                                }}
                              >
                                {productData.map((item, index) => {
                                  return (
                                    <SwiperSlide key={index}>
                                      <div className="swiper-slides">
                                        <ProductCard product={item} />
                                      </div>
                                    </SwiperSlide>
                                  );
                                })}
                              </Swiper>
                            </div>
                          </div>
                          <div className="bd-product__nav">
                            <button className="product-button-prev">
                              <i className="fa-regular fa-angle-left"></i>
                            </button>
                            <button className="product-button-next">
                              <i className="fa-regular fa-angle-right"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="col-12 text-center mt-3">
                <Link href={{ pathname: '/products/', query: { filter: segment } }} type="submit" className="bd-fill__btn">
                    View More
                </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductSlider;
