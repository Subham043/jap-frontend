import { ProductSegmentState } from "@/helper/types";
import Link from "next/link";
import React from "react";
import GetRatting from "../rating/GetRatting";
import ProductCard from "../product/ProductCard";

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
                <ProductCard product={item} />
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
