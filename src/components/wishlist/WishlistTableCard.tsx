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

const WishlistTableCard = ({ product, loading, deleteHandler }: Props) => {
    
    const deleteClickHandler = () => deleteHandler(product.id)

    return <tr>
      <td className="product-thumbnail">
        {product.featured_image_link && <Link href={`/products/${product.slug}`}>
          <Image width={116} height={125}
            src={product.featured_image_link}
            style={{ width: "70px", height: "50px", objectFit:'contain' }}
            alt=""
          />
        </Link>}
      </td>
      <td className="product-name">
        <Link href={`/products/${product.slug}`}>
          {product.name}
        </Link>
      </td>
      <td className="product-price">
        <span className="amount">${product.discounted_price}.00</span>
      </td>
      <td
        className="product-remove"
      >
        <button
              className="cartmini__del"
              onClick={() => deleteClickHandler()}
              disabled={loading}
              style={{position: 'static'}}
          >
              {loading ? 
                  <div className="spinner-grow spinner-grow-sm text-success" role="status">
                      <span className="sr-only">Loading...</span>
                  </div>:<i className="fal fa-times"></i>}
          </button>
      </td>
    </tr>;
};

export default WishlistTableCard;
