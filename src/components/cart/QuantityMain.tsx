import React from "react";

type Props = {
    quantity:number;
    loading:boolean;
    incrementQuantity:()=>void;
    decrementQuantity:()=>void;
}

const QuantityMain = ({ quantity, loading, incrementQuantity, decrementQuantity }: Props) => {
    
    return (
        quantity===0 ? <button className="cart-btn bd-fill__btn product-card-main-btn mt-2" disabled={loading} onClick={()=>incrementQuantity()}>
            {loading ? 
                <div className="spinner-grow spinner-grow-sm text-success" role="status">
                    <span className="sr-only">Loading...</span>
                </div>:<><i className="fal fa-cart-arrow-down"></i> Add to Cart</>
            }
        </button> : <div className="product-quantity-form mt-2">
            <form onSubmit={(e) => e.preventDefault()}>
                <button
                    className="cart-minus"
                    type="button"
                    disabled={loading} 
                    onClick={()=>decrementQuantity()}
                >
                    {loading ? 
                        <div className="spinner-grow spinner-grow-sm text-success" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>:<i className="far fa-minus"></i>}
                </button>
                <input
                    className="cart-input"
                    type="text"
                    readOnly
                    value={quantity}
                />
                <button
                    className="cart-plus"
                    type="button"
                    disabled={loading} 
                    onClick={()=>incrementQuantity()}
                >
                    {loading ? 
                        <div className="spinner-grow spinner-grow-sm text-success" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>:<i className="far fa-plus"></i>}
                </button>
            </form>
        </div>
    );
};

export default QuantityMain;
