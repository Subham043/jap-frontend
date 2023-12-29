"use client";
import React from "react";
import AddReview from "./AddReview";
import Image from "next/image";
import userIcon from "../../../public/assets/img/icon/user-icon.png";
import Link from "next/link";
import { ProductSegmentState } from "@/helper/types";
import GetRatting from "../rating/GetRatting";
interface propsType {
  product: ProductSegmentState
}

const ShopDetailsReview = ({product}:propsType) => {
  return (
    <>
      <div className="product_info-faq-area pt-50">
        <nav className="product-details-tab">
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <Link
              className="nav-item nav-link show"
              id="nav-general-tab"
              data-bs-toggle="tab"
              href="#nav-general"
              role="tab"
              aria-selected="false"
            >
              Description
            </Link>
            <Link
              className="nav-item nav-link active"
              id="nav-seller-tab"
              data-bs-toggle="tab"
              href="#nav-seller"
              role="tab"
              aria-selected="true"
            >
              Reviews
            </Link>
          </div>
        </nav>
        <div
          className="tab-content product-details-content"
          id="nav-tabContent"
        >
          <div className="tab-pane fade" id="nav-general" role="tabpanel">
            <div className="tabs-wrapper mt-35">
              <div className="product__details-des">
                <p> {product.description} </p>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade active show"
            id="nav-seller"
            role="tabpanel"
          >
            <div className={`tabs-wrapper mt-35 mb-50`}>
              {product.reviews.length ? (
                <div className="scrollbox">
                  {product.reviews.map((item) => (
                    <div key={item.id} className={`course-review-item mb-30`}>
                      <div className="course-reviews-img">
                        {item.image_link ? (
                          <>
                            <Link href="#">
                              <img
                                src={item.image_link}
                                alt="image not found"
                                width={200}
                                height={200}
                                style={{ width: "auto", height: "auto" }}
                              />
                            </Link>
                          </>
                        ) : (
                          <>
                            <Link href="#">
                              <Image
                                width={200}
                                height={200}
                                style={{ width: "auto", height: "auto" }}
                                src={userIcon}
                                alt="image not found"
                              />
                            </Link>
                          </>
                        )}
                      </div>
                      <div className="course-review-list">
                        <h5>
                          <Link href="#"> {item.name} </Link>
                        </h5>
                        <div className="course-start-icon">
                          <GetRatting averageRating={product.reviews.map(item => item.star).reduce(function (avg, value, _, { length }) {
                            return avg + value / length;
                          }, 0)} />
                          <span> {item.created_at} </span>
                        </div>
                        <p> {item.message} </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <p> No Review For This Product</p>
                </>
              )}

              
            </div>
            <AddReview/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopDetailsReview;
