import { ProductSegmentState } from "@/helper/types";
import Link from "next/link";
import React, { useState } from "react";
import { useCart } from "@/context/CartProvider";
import QuantityMain from "../cart/QuantityMain";
import { useWishlist } from "@/context/WishlistProvider";
import Image from "next/image";

type Props = {
  product: ProductSegmentState;
}

const ProductCard = ({ product }: Props) => {

    const [loading, setLoading] = useState<boolean>(false);
    const {incrementProductQuantity, decrementProductQuantity, cart} = useCart();
    const {wishlist, wishlistHandler} = useWishlist();
    const [wishlistLoading, setWishlistLoading] = useState<boolean>(false);
    
    const incrementQuantity = async () => {
        try {
            setLoading(true);
            await incrementProductQuantity(product.id);
        } finally {
            setLoading(false);
        }
    };
    const decrementQuantity = async () => {
        try {
            setLoading(true);
            await decrementProductQuantity(product.id)
        } finally {
            setLoading(false);
        }
    };

    const wishlistItemHandler = async () => {   
        try{
            setWishlistLoading(true)
            if(product && wishlist){
                await wishlistHandler(product.id)
            }
        }finally{
            setWishlistLoading(false)
        }
    }

    return (
            <div className="bd-trending__item text-center mb-30 position-relative">
                <div className="bd-trending__product-thumb border-5">
                    {
                        product.featured_image_link &&
                        <Link href={`/products/${product.slug}`}>
                            <Image priority={false}
                                src={product.featured_image_link}
                                alt="product-img"
                                width={500}
                                height={500}
                                style={{ width: "100%", height: "auto" }}
                            />
                        </Link>
                    }
                    <div className="bd-product__action">
                        <Link
                        href={`/products/${product.slug}`}
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quick View"
                        >
                            <i className="fal fa-eye"></i>
                        </Link>
                        <span
                            className="wishlist-btn"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Quick Wishlist"
                            onClick={()=>!wishlistLoading && wishlistItemHandler()}
                        >
                            {wishlistLoading ? 
                            <div className="spinner-grow spinner-grow-sm text-success" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>: ((wishlist && [...wishlist.products.map(item => item.id)].indexOf(product.id)<0) ? <i className="fal fa-heart"></i> : <i className="fal fa-heart" style={{color: 'red'}}></i>)}
                        </span>
                    </div>
                </div>
                <div className="bd-teanding__content">
                    <h4 className="bd-product__title">
                        <Link href={`/products/${product.slug}`}>
                        {product.name}
                        </Link>
                    </h4>
                    <div className="bd-product__price">
                        {product?.price !== product?.discounted_price ? (
                        <span className="bd-product__old-price">
                            <del>&#8377;
                            {`${
                                product.price % 1 === 0
                                ? `${product.price}.00`
                                : product.price.toFixed(2)
                            }`}
                            </del>
                        </span>
                        ) : (
                        <></>
                        )}

                        {product.discounted_price % 1 === 0 ? (
                            <span className="bd-product__new-price">
                                &#8377;{`${product.discounted_price}.00 / ${product.weight}`}
                            </span>
                        ) : (
                            <span className="bd-product__new-price">
                                &#8377;{product.discounted_price.toFixed(2)} / {product.weight}
                            </span>
                        )}
                    </div>

                    <QuantityMain 
                        loading={loading} 
                        quantity={cart ? (cart.products.filter(item => item.id===product.id).length>0 ? cart.products.filter(item => item.id===product.id)[0].quantity : 0) : 0} 
                        incrementQuantity={incrementQuantity} 
                        decrementQuantity={decrementQuantity}
                    />
                </div>
            </div>
    );
};

export default ProductCard;
