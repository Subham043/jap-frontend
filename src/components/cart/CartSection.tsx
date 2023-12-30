import Link from "next/link";
import React, { useState } from "react";
import CartTableCard from "./CartTableCard";
import { useCart } from "@/context/CartProvider";
import { useToast } from "@/hooks/useToast";

const CartSection = () => {

  const {cart, removeCartItem, incrementProductQuantity, decrementProductQuantity} = useCart();
  const [loading, setLoading] = useState(false);
  const {toastSuccess} = useToast();
  const removeCartHandler = async(product_id:number) => {  
    try{
      setLoading(true)
      await removeCartItem(product_id);
      toastSuccess('Item removed from cart')
    }finally{
      setLoading(false)
    }
  }
  
  return (
    <>
      {cart && cart.products.length === 0 && (
        <div className="container">
          <div className="empty-text pt-100 pb-100 text-center">
            <h3>Your cart is empty</h3>
          </div>
        </div>
      )}
      {cart && cart.products.length >= 1 && (
        <section className="cart-area pt-55 pb-30">
          <div className="container small-container">
            <div className="row">
              <div className="col-12">
                <div className="table-content table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Images</th>
                        <th className="cart-product-name">Product</th>
                        <th className="product-price">Unit Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Total</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                     
                      {cart.products.map((item, index) => {
                        return(
                          <CartTableCard id={item.id} slug={item.slug} name={item.name} featured_image_link={item.featured_image_link} quantity={item.quantity} total_quantity_price={item.total_quantity_price} deleteHandler={removeCartHandler} incrementProductQuantity={incrementProductQuantity} decrementProductQuantity={decrementProductQuantity} loading={loading} key={index}/>
                        )
                      }
                        
                      )}
                    </tbody>
                  </table>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-5 ml-auto">
                    <div className="cart-page-total">
                      <h2>Cart totals</h2>
                      <ul className="mb-20">
                        <li>
                          Subtotal <span>&#8377; {cart.total_price_with_coupon_dicount}</span>
                        </li>
                        <li>
                          Total <span>&#8377; {cart.total_price_with_coupon_dicount}</span>
                        </li>
                      </ul>
                      <div className="d-flex justify-content-center">
                        <Link className="bd-fill__btn" href="/checkout">
                          Proceed to checkout
                        </Link>
                        <button
                          className="bd-unfill__btn mx-1"
                          name="update_cart"
                          type="submit"
                          // onClick={removeAllProduct}
                        >
                          Clear cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CartSection;
