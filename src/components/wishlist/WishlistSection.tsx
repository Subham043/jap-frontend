import React, { useState } from "react";
import { useWishlist } from "@/context/WishlistProvider";
import { useToast } from "@/hooks/useToast";
import WishlistTableCard from "./WishlistTableCard";

const WishlistSection = () => {
  const [loading, setLoading] = useState(false);
  const {wishlist, removeWishlistItem, wishlistLoading} = useWishlist();
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
    <div className="cart-area pt-55 pb-50">
      <div className="container small-container">
        
        {wishlistLoading && <div className="w-100 text-center">
          <div className="spinner-border text-success" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>}

        {!wishlist || wishlist.products.length === 0 && (
          <div className="text-center">
            <h3>Your wishlist is empty</h3>
          </div>
        )}
        {wishlist && wishlist.products.length >= 1 ?
        <>
        <div className="row">
            <div className="col-12">
              <div className="w-100">
                <div className="table-content table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Images</th>
                        <th className="cart-product-name">Product</th>
                        <th className="product-price">Unit Price</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {wishlist.products.map((item, index) => {
                        return(
                          <WishlistTableCard product={item} loading={loading} deleteHandler={removeWishlistHandler} key={index} />
                        )
                      }
                        
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
        :
        <>
        
        </>
          
        }
      </div>
    </div>
  );
};

export default WishlistSection;
