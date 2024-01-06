import { useGlobalContext } from "@/context/AppProvider";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
    product: {
        id: number;
        name: string;
        slug: string;
        description?: string;
        meta_title?: string;
        meta_keywords?: string;
        meta_description?: string;
        featured_image_link?: string;
        created_at: string;
        updated_at: string;
        is_active: boolean;
        discount: number;
        discounted_price: number;
        image_alt?: string;
        image_title?: string;
        in_stock: boolean;
        inventory: number;
        is_best_sale: boolean;
        is_featured: boolean;
        is_new_arrival: boolean
        price: number
    };
    loading: boolean
    deleteHandler: (data:number) => void
}

const WishlistProductCard = ({ product, loading, deleteHandler }: Props) => {
    const { setOpenWishlist } = useGlobalContext();
    const deleteClickHandler = () => deleteHandler(product.id)

    return <li>
    <div className="cartmini__thumb">
      {product.featured_image_link && <Link onClick={() => setOpenWishlist(false)} href={`/products/${product.slug}`}>
        <Image width={116} height={125}
          style={{ width: "70px", height: "50px", objectFit:'contain' }}
          src={product.featured_image_link}
          alt=""
        />
      </Link>}
    </div>
    <div className="cartmini__content">
      <h5>
        <Link onClick={() => setOpenWishlist(false)} href={`/products/${product.slug}`}>
          {product.name}
        </Link>
      </h5>
      <div className="product__sm-price-wrapper">
        <span className="product__sm-price">
          &#8377;{product.discounted_price}
        </span>
      </div>
    </div>
    <button
      className="cartmini__del"
      disabled={loading}
      onClick={() => deleteClickHandler()}
    >
      {loading ? 
        <div className="spinner-grow spinner-grow-sm text-success" role="status">
            <span className="sr-only">Loading...</span>
        </div>:<i className="fal fa-times"></i>}
    </button>
  </li>;
};

export default WishlistProductCard;
