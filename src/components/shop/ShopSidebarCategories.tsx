import React, { useCallback } from "react";
import { axiosPublic } from "../../../axios";
import { api_routes } from "@/helper/routes";
import { CategoryState } from "@/helper/types";
import useSWRInfinite from "swr/infinite";
import InfiniteScroll from 'react-infinite-scroll-component';

const PAGE_SIZE = 20;

type Props = {
  categorySelected: string;
  setCategorySelected: React.Dispatch<React.SetStateAction<string>>;
}

const ShopSidebarCategories = ({categorySelected, setCategorySelected}:Props) => {
  
  const categoryFetcher = async (url: string) => {
    const res =await axiosPublic.get(url);
    return res.data.data
  };

  const getCategoryKey = useCallback((pageIndex:any, previousPageData:any) => {
    if (previousPageData && previousPageData.length===0) return null;
    return `${api_routes.categories}?total=${PAGE_SIZE}&page=${pageIndex+1}`;
  }, []);

  const {
    data:categoryData,
    size:categorySize,
    setSize:setCategorySize,
    isLoading:isCategoryLoading
  } = useSWRInfinite<CategoryState>(getCategoryKey, categoryFetcher, {
    initialSize:1,
    revalidateAll: false,
    revalidateFirstPage: false,
    persistSize: false,
    parallel: false
  });

  const fetchNextPage = () => setCategorySize(categorySize+1);

  return (
    <>
      <div className="bd-filter__widget child-content-hidden">
        <h4 className="bd-filter__widget-title drop-btn">Categories</h4>
          <div className="bd-filter__content" id="product-category-list-holder">
            <InfiniteScroll
              dataLength={categoryData ? categoryData.flat().length : 0}
              next={fetchNextPage}
              hasMore={true}
              loader={(isCategoryLoading) && <div className="text-center py-1">
                <div className="spinner-border text-success" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>}
              refreshFunction={fetchNextPage}
              scrollableTarget="product-category-list-holder"
              style={{overflowX: 'hidden'}}
            >
              <div className="bd-singel__rating">
                <input
                  className="radio-box"
                  type="radio"
                  id="view-all-1"
                  name="category"
                  value=''
                  checked={categorySelected===''}
                  onChange={(e)=>setCategorySelected(e.target.value)}
                />
                <label className="radio-star" htmlFor="view-all-1">
                  <div className="bd-product__icon custome-cursor text-capitalize">
                    view all
                  </div>
                </label>
              </div>
              {(categoryData && categoryData.length>0) && (
                categoryData.flat().map((item, index) => (
                  <div
                    
                    key={index}
                    className="bd-singel__rating"
                  >
                    <input
                      className="radio-box"
                      type="radio"
                      id={item.slug}
                      name="category"
                      value={`${item.slug}`}
                      checked={categorySelected===item.slug}
                      onChange={(e)=>setCategorySelected(e.target.value)}
                    />
                    <label className="radio-star" htmlFor={item.slug}>
                      <div className="bd-product__icon custome-cursor text-capitalize">
                        {item.name}
                      </div>
                    </label>
                  </div>
                ))
              )}
            </InfiniteScroll>
          </div>
      </div>
    </>
  );
};

export default ShopSidebarCategories;
