"use client";
import React, { useCallback, useState } from "react";
import ShopSidebarCategories from "./ShopSidebarCategories";
import GridViewProduct from "./GridViewProduct";
import ShopSidebarRetting from "./ShopSidebarRetting";
import NiceSelect from "./NiceSelect";
import InfiniteScroll from 'react-infinite-scroll-component';
import { ProductSegmentState } from "@/helper/types";
import { axiosPublic } from "../../../axios";
import useSWRInfinite from "swr/infinite";
import { api_routes } from "@/helper/routes";
import {debounce} from "lodash";
import { segments } from "@/helper/constants";

const PAGE_SIZE = 20;

const productFetcher = async (url: string) => {
  const res =await axiosPublic.get(url);
  return res.data.data
};

const ShopSection = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [segment, setSegment] = useState<string>('')
  const [categorySelected, setCategorySelected] = useState<string>('')
  const [ratingSelected, setRatingSelected] = useState<string>('')
  
  const getProductKey = useCallback((pageIndex:any, previousPageData:any) => {
      if (previousPageData && previousPageData.length===0) return null;
      return `${api_routes.products}?total=${PAGE_SIZE}&page=${pageIndex+1}&sort=-id${searchValue ? '&filter[search]='+searchValue : ''}${segment.length>0 ? segment : ''}${categorySelected}${ratingSelected}`;
  }, [searchValue, segment, categorySelected, ratingSelected])
  
  const {
        data,
        size:productSize,
        setSize:setProductSize,
        isLoading:isProductLoading
  } = useSWRInfinite<ProductSegmentState>((pageIndex, previousPageData)=>getProductKey(pageIndex, previousPageData), productFetcher, {
        initialSize:1,
        revalidateAll: false,
        revalidateFirstPage: false,
        persistSize: false,
        parallel: false
  });

  const fetchNextPage = () => setProductSize(productSize+1);

  const handleInputChange = debounce(async (e: any) => setSearchValue(e.target.value), 500);

  const selectHandler = () => {};

  return (
    <>
      <section className="bd-shop__area pt-55 pb-85">
        <div className="container">
          <div className="row">
            <div className="col-xxl-3 col-xl-4 col-lg-4">
              <div className="bd-sidebar__widget-warpper mb-60">
                <div className="bd-product__filters">
                  <ShopSidebarCategories setCategorySelected={setCategorySelected} />
                  <ShopSidebarRetting setRatingSelected={setRatingSelected} />
                </div>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-8 col-lg-8">
              <div className="row justify-content-between">
                <div className="col-xl-4">
                  <div className="bd-top__filter-search p-relative mb-30">
                    <form className="bd-top__filter-input" action="#">
                      <input
                        type="text"
                        placeholder="Search keyword..."
                        onChange={handleInputChange}
                      />
                      <button>
                        <i className="fa-regular fa-magnifying-glass"></i>
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-xl-auto">
                  <div className="bd-filter__tab-inner mb-30">
                    <div className="bd-sort__type-filter">
                      <NiceSelect
                        options={segments}
                        defaultCurrent={0}
                        onChange={selectHandler}
                        name="sorting-list"
                        setapiEndPoint={setSegment}
                        className="sorting-list"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12">
                  <div className="bd-shop__wrapper">
                    <div className="bd-trending__item-wrapper">
                      <InfiniteScroll
                          dataLength={data ? data.flat().length : 0}
                          next={fetchNextPage}
                          hasMore={true}
                          loader={(isProductLoading) && <div className="text-center py-1">
                            <div className="spinner-border text-success" role="status">
                              <span className="sr-only">Loading...</span>
                            </div>
                          </div>}
                          refreshFunction={fetchNextPage}
                          style={{overflowX: 'hidden'}}
                        > 
                          <div className="row">
                                <GridViewProduct products={data ? data.flat() : []} />
                          </div>
                      </InfiniteScroll>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopSection;
