"use client";
import React from "react";
import { rattingSidebar } from "./ratting-sidebar-data";
import GetRatting from "../rating/GetRatting";

type Props = {
  setRatingSelected: React.Dispatch<React.SetStateAction<string>>;
}

const ShopSidebarRetting = ({setRatingSelected}:Props) => {
 
  return (
    <>
      <div className="bd-filter__widget child-content-hidden">
        <h4 className="bd-filter__widget-title drop-btn">Ratings</h4>
        <div className="bd-filter__content">
          <div className="bd-singel__rating">
            <input
              className="radio-box"
              type="radio"
              id="view-all-rating-1"
              name="rating"
              value=''
              onChange={(e)=>setRatingSelected(e.target.value)}
            />
            <label className="radio-star" htmlFor="view-all-rating-1">
              <div className="bd-product__icon custome-cursor text-capitalize">
                view all
              </div>
            </label>
          </div>
          {rattingSidebar?.length>0 &&
            rattingSidebar.map((item, index) => (
              <div key={index} className="bd-singel__rating">
                <input
                  className="radio-box"
                  type="radio"
                  id={index.toString()}
                  name="rating"
                  value={`&filter[has_reviews]=${item.retting}`}
                  onChange={(e)=>setRatingSelected(e.target.value)}
                />
                <label className="radio-star" htmlFor={index.toString()}>
                  <div className="bd-product__icon custome-cursor">
                    <GetRatting averageRating={item.retting} />
                  </div>
                </label>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ShopSidebarRetting;
