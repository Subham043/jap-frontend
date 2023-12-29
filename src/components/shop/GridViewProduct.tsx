import { ProductSegmentState } from "@/helper/types";
import Link from "next/link";
import React from "react";
import GetRatting from "../rating/GetRatting";

type Props = {
  products: ProductSegmentState[];
}

const GridViewProduct = ({ products }: Props) => {

  return (
    <>
      
      {products?.length ? (
        <>
          {products.map((item: ProductSegmentState, index: number) => {
            return (
              <div
                className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6"
                key={index}
              >
                <div className="bd-trending__item text-center mb-30 position-relative">
                  <div className="bd-trending__product-thumb border-5">
                    {
                      item.featured_image_link &&
                      <Link href={`/products/${item.slug}`}>
                        <img
                          src={item.featured_image_link}
                          alt="product-img"
                          width={500}
                          height={500}
                          style={{ width: "100%", height: "auto" }}
                        />
                      </Link>
                    }
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
                      <Link href={`/products/${item.slug}`}>
                        {item.name}
                      </Link>
                    </h4>
                    <div className="bd-product__price">
                      {/* {item?.offer === true ? (
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
                      )} */}

                      {item?.discounted_price % 1 === 0 ? (
                        <span className="bd-product__new-price">
                          ${`${item?.discounted_price}.00`}
                        </span>
                      ) : (
                        <span className="bd-product__new-price">
                          ${item?.discounted_price.toFixed(2)}
                        </span>
                      )}
                    </div>

                    <div className="bd-product__icon">
                      <GetRatting averageRating={item.reviews.map(item => item.star).reduce(function (avg, value, _, { length }) {
                          return avg + value / length;
                      }, 0)} />
                    </div>
                  </div>
                  {/* <div className="bd-product__tag">
                    {item?.offer ? (
                      <>
                        <span className="tag-text danger-bg">
                          
                          {item?.offerPersent}%
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="tag-text theme-bg">
                          
                          {item?.productStatus}
                        </span>
                      </>
                    )}
                  </div> */}
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <>
          
        </>
      )}
    </>
  );
};

export default GridViewProduct;
