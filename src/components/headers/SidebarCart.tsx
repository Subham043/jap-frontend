import { useGlobalContext } from "@/context/AppProvider";
import { useCart } from "@/context/CartProvider";
import Link from "next/link";
import React, { useState } from "react";
import CartProductCard from "../cart/CartProductCard";
import { useToast } from "@/hooks/useToast";

const SidebarCart = () => {
  const { openCart, setOpenCart } = useGlobalContext();
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
      <div className="fix">
        <div
          className={`sidebar-action sidebar-cart ${
            openCart ? "cart-open" : ""
          }`}
        >
          <div className="cartmini__wrapper">
            <div className="cartmini__title">
              <h4>Shopping Cart</h4>
              
            </div>
            <div className="cartmini__close">
              <button
                type="button"
                className="cartmini__close-btn"
                onClick={() => setOpenCart(false)}
              >
                <i className="fal fa-times"></i>
              </button>
            </div>
            <div className="cartmini__widget">
              {cart && cart.products.length ? (
                <>
                  <div className="cartmini__inner">
                    <ul>
                      {cart.products.map((item, index) => {
                        return (
                          <CartProductCard id={item.id} slug={item.slug} name={item.name} featured_image_link={item.featured_image_link} quantity={item.quantity} weight={item.weight} total_quantity_price={item.total_quantity_price} deleteHandler={removeCartHandler} incrementProductQuantity={incrementProductQuantity} decrementProductQuantity={decrementProductQuantity} loading={loading} key={index}/>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="cartmini__checkout">
                    <div className="cartmini__checkout-title mb-30">
                      <h4>Subtotal:</h4>
                      <span className="subtotal-price">&#8377; {cart.total_price_with_coupon_dicount}</span>
                    </div>
                    <div className="cartmini__checkout-btn">
                      <Link onClick={() => setOpenCart(false)} className="bd-fill__btn w-100" href="/cart">
                        View cart
                      </Link>
                      <Link onClick={() => setOpenCart(false)} className="bd-unfill__btn w-100" href="/checkout">
                        Checkout
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-center pt-20">Your cart is empty</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => setOpenCart(false)}
        className={`offcanvas-overlay ${openCart ? "overlay-open" : ""}`}
      ></div>
    </>
  );
};

export default SidebarCart;
