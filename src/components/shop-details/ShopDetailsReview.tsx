"use client";
import React from "react";
import AddReview from "./AddReview";
import Image from "next/image";
import userIcon from "../../../public/assets/img/icon/user-icon.png";
import Link from "next/link";
import { ProductSegmentState } from "@/helper/types";
import GetRatting from "../rating/GetRatting";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
interface propsType {
  product: ProductSegmentState
}

const ShopDetailsReview = ({product}:propsType) => {
  return (
    <>
      <Tabs className="product_info-faq-area pt-50" defaultIndex={1} selectedTabClassName='active' selectedTabPanelClassName='active show'>
        <nav className="product-details-tab">
          <TabList className="nav nav-tabs" id="nav-tab" role="tablist">
            <Tab
              className="nav-item nav-link show"
            >
              Description
            </Tab>
            <Tab
              className="nav-item nav-link show"
            >
              Reviews
            </Tab>
          </TabList>
        </nav>
        <div
          className="tab-content product-details-content"
          id="nav-tabContent"
        >
          <TabPanel className="tab-pane fade" id="nav-general" role="tabpanel">
            <div className="tabs-wrapper mt-35">
              <div className="product__details-des">
                {product.description ? <p> {product.description} </p> : <p>No description is available</p>}
              </div>
            </div>
          </TabPanel>
          <TabPanel
            className="tab-pane fade"
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
                              <Image
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
            <AddReview product_id={product.id}/>
          </TabPanel>
        </div>
      </Tabs>
    </>
  );
};

export default ShopDetailsReview;
