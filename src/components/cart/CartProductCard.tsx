import { useGlobalContext } from "@/context/AppProvider";
import Link from "next/link";
import React, { useState } from "react";

type Props = {
    id: number;
    name: string;
    slug: string;
    featured_image_link?: string;
    quantity: number;
    total_quantity_price: number;
    loading: boolean;
    deleteHandler?: (data:number) => void
    incrementProductQuantity?: (product_id:number) => Promise<void>
    decrementProductQuantity?: (product_id:number) => Promise<void>
}

const CartProductCard = ({ id, slug, featured_image_link, name, total_quantity_price, quantity, loading, deleteHandler, incrementProductQuantity, decrementProductQuantity }: Props) => {
    const { setOpenCart } = useGlobalContext();
    const [quantityLoading, setQuantityLoading] = useState<boolean>(false);
    
    const deleteClickHandler = () => {
        deleteHandler && deleteHandler(id);
    }

    const incrementQuantity = async () => {
        try {
            setQuantityLoading(true);
            incrementProductQuantity && await incrementProductQuantity(id);
        } finally {
            setQuantityLoading(false);
        }
    };
    const decrementQuantity = async () => {
        try {
            setQuantityLoading(true);
            decrementProductQuantity && await decrementProductQuantity(id)
        } finally {
            setQuantityLoading(false);
        }
    };
    return <li>
        <div className="cartmini__thumb">
            {featured_image_link && <Link onClick={() => setOpenCart(false)} href={`/products/${slug}`}>
                <img
                    style={{ width: "70px", height: "50px", objectFit:'contain' }}
                    src={featured_image_link}
                    alt=""
                />
            </Link>}
        </div>
        <div className="cartmini__content">
        <h5>
            <Link onClick={() => setOpenCart(false)} href={`/products/${slug}`}>
                {name}
            </Link>
        </h5>
        <div className="product-quantity mt-10 mb-10">
            <button
                className="cart-minus"
                onClick={() => decrementQuantity()}
                disabled={quantityLoading}
            >
                {quantityLoading ? 
                <div className="spinner-grow spinner-grow-sm text-success" role="status">
                    <span className="sr-only">Loading...</span>
                </div>: <>-</>}
            </button>
            <input
                className="cart-input"
                type="text"
                value={quantity}
                readOnly={true}
            />
            <button
                className="cart-plus"
                onClick={() => incrementQuantity()}
                disabled={quantityLoading}
            >
                {quantityLoading ? 
                <div className="spinner-grow spinner-grow-sm text-success" role="status">
                    <span className="sr-only">Loading...</span>
                </div>: <>+</>}
            </button>
        </div>
        <div className="product__sm-price-wrapper">
            <span className="product__sm-price">
                &#8377;{total_quantity_price}
            </span>
        </div>
        </div>
        <button
            className="cartmini__del"
            onClick={() => deleteClickHandler()}
            disabled={loading}
        >
            {loading ? 
                <div className="spinner-grow spinner-grow-sm text-success" role="status">
                    <span className="sr-only">Loading...</span>
                </div>:<i className="fal fa-times"></i>}
        </button>
    </li>;
};

export default CartProductCard;
