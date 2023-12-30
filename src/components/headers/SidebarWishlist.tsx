;
import { useGlobalContext } from "@/context/AppProvider";
import { useWishlist } from "@/context/WishlistProvider";
import { useToast } from "@/hooks/useToast";
import Link from "next/link";
import React, { useState } from "react";
import WishlistProductCard from "../wishlist/WishlistProductCard";

const SidebarWishlist = () => {
  const [loading, setLoading] = useState(false);
  const { openWishlist, setOpenWishlist } = useGlobalContext();
  const {wishlist, removeWishlistItem} = useWishlist();
  const {toastSuccess} = useToast();

  const removeWishlistHandler = async(product_id:number) => {  
    try{
      setLoading(true)
      await removeWishlistItem(product_id);
      toastSuccess('Item removed from cart')
    }finally{
      setLoading(false)
    }
  }
  
  return (
    <>
      <div className="fix">
        <div
          className={`sidebar-action sidebar-cart ${
            openWishlist ? "cart-open" : ""
          }`}
        >
          <div className="cartmini__wrapper">
            <div className="cartmini__title">
              <h4>Wishlist Products</h4>
            </div>
            <div className="cartmini__close">
              <button
                type="button"
                className="cartmini__close-btn"
                onClick={() => setOpenWishlist(false)}
              >
                <i className="fal fa-times"></i>
              </button>
            </div>
            <div className="cartmini__widget">
              {wishlist && wishlist.products.length ? (
                <>
                  <div className="cartmini__inner">
                    <ul>
                      {wishlist.products.map((item, index) => {
                        return (
                          <WishlistProductCard product={item} loading={loading} deleteHandler={removeWishlistHandler} key={index} />
                        );
                      })}
                    </ul>
                  </div>
                  <div className="cartmini__checkout">
                    <div className="cartmini__checkout-btn">
                      <Link
                        onClick={() => setOpenWishlist(false)}
                        className="bd-fill__btn w-100"
                        href="/wishlist"
                      >
                        View Wishlist
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-center pt-20 text-capitalize">
                    Your wishlist is empty
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => setOpenWishlist(false)}
        className={`offcanvas-overlay ${openWishlist ? "overlay-open" : ""}`}
      ></div>
    </>
  );
};

export default SidebarWishlist;
