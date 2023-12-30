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

const CartTableCard = ({ id, slug, featured_image_link, name, total_quantity_price, quantity, loading, deleteHandler, incrementProductQuantity, decrementProductQuantity }: Props) => {
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
    return <tr>
    <td className="product-thumbnail">
      {featured_image_link && <Link href={`/products/${slug}`}>
        <img
          src={featured_image_link}
          style={{ width: "70px", height: "50px", objectFit:'contain' }}
          alt=""
        />
      </Link>}
    </td>
    <td className="product-name">
      <Link href={`/products/${slug}`}>
        {name}
      </Link>
    </td>
    <td className="product-price">
      <span className="amount">&#8377;{total_quantity_price}</span>
    </td>
    <td className="product-quantity text-center">
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
    </td>
    <td className="product-subtotal">
      <span className="amount">
        &#8377;{total_quantity_price}
      </span>
    </td>
    <td
      className="product-remove"
    >
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
    </td>
  </tr>;
};

export default CartTableCard;
