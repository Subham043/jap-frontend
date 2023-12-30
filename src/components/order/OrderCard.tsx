import { Order } from "@/helper/types";
import { useMemo } from "react";

const OrderCard = ({order}: {order:Order}) => {
    const productNames = useMemo(() => order.products.map(item => item.name).join(', '), [order.products]);
    return (
        <div className="student-profile-reviews">
            <div className="student-profile-reviews-item mb-30">
            <div className="student-profile-reviews-course-title d-flex justify-content-between cursore_class">
                <h5>
                
                    Order Reciept : <small>{order.receipt} </small>
                </h5>
                <button className="copy-button">
                <i className={`fa-solid fa-copy`}></i>
                </button>
            </div>
            <div className="student-profile-reviews-text">
                <div className="student-profile-review-content">
            
                <div className="d-flex justify-content-between">
                    <h5>Products List </h5>
                    <h5>Total Price : &#8377;{order.total_price_with_coupon_dicount} </h5>
                </div>
                <ul className="icon_list  unordered_list_block">
                    <li className="d-flex justify-content-between">
                    <span className="list_item_text">{productNames}</span>
                    <span className="list_item_text">
                        
                        Order Status : {order.order_status}
                    </span>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    );
};

export default OrderCard;
