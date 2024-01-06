import React, { ReactElement, useCallback } from 'react';
import { NextPageWithLayout } from '../../_app';
import AccountLayout from '@/components/sheardComponent/AccountLayout';
import Pagetitle from '@/components/sheardComponent/Pagetitle';
import { Order } from '@/helper/types';
import { useSession } from 'next-auth/react';
import useSWR from 'swr'
import { api_routes } from '@/helper/routes';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import { axiosPublic } from '../../../../axios';
import Head from 'next/head';
import Image from 'next/image';

type ServerSideProps = {
    reciept: string
}

export const getServerSideProps: GetServerSideProps<{
repo: ServerSideProps
}> = async (ctx: any) => {
    
    return {
        props: {
            repo: {
                reciept: ctx?.params.reciept,
            }
        }
    }
}

const OrderDetailPage:NextPageWithLayout<InferGetServerSidePropsType<typeof getServerSideProps>> = ({repo}) => {
    const { status, data:session } = useSession();
    const fetcher = useCallback(
        async (url: string) => {
          if(status==='authenticated'){
            const headers = {
              headers: {
                "Authorization" : `Bearer ${session?.user.token}`,
                "Accept": 'application/json'
              }
            }
            const res =  await axiosPublic.get(url,headers)
            return res.data.order;
          }
          return undefined;
        },
        [status, session],
    );
    const { data:order, isLoading:loading } = useSWR<Order>(status==='authenticated' ? api_routes.place_order_detail+`/${repo.reciept}` : null, fetcher);

    return (
        <>
            <Head>
                <title>JAP - Orders</title>
            </Head>
            {loading && <div className="text-center py-1">
                <div className="spinner-border text-success" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>}
            {order && order.products.length >= 1 && (
                <section className="cart-area pt-15 pb-20">
                    <div className="container small-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="student-profile-reviews">
                                    <div className="student-profile-reviews-item mb-30">
                                        <div className="student-profile-reviews-course-title d-flex justify-content-between">
                                            <h5>
                                            
                                                Order Reciept : <small>{order.receipt} </small>
                                            </h5>
                                        </div>
                                        <div className="student-profile-reviews-text">
                                            <div className="student-profile-review-content">
                                        
                                            <div className="d-flex justify-content-between">
                                                <h5>Payment Status : {order.payment_status} </h5>
                                                <h5>Order Status : {order.order_status} </h5>
                                            </div>
                                            <ul className="icon_list  unordered_list_block">
                                                <li className="d-flex justify-content-between">
                                                <span className="list_item_text">Payment Mode : {order.mode_of_payment}</span>
                                                <span className="list_item_text">
                                                    
                                                    Order Placed : {order.created_at}
                                                </span>
                                                </li>
                                            </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-content table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="product-thumbnail">Images</th>
                                                <th className="cart-product-name">Product</th>
                                                <th className="product-price">Unit Price</th>
                                                <th className="product-quantity">Quantity</th>
                                                <th className="product-subtotal">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        
                                            {order.products.map((item, index) => {
                                                return(
                                                    <tr key={index}>
                                                        <td className="product-thumbnail">
                                                        {item.featured_image_link && <Link href={`/products/${item.slug}`}>
                                                            <Image width={116} height={125}
                                                            src={item.featured_image_link}
                                                            style={{ width: "70px", height: "50px", objectFit:'contain' }}
                                                            alt=""
                                                            />
                                                        </Link>}
                                                        </td>
                                                        <td className="product-name">
                                                        <Link href={`/products/${item.slug}`}>
                                                            {item.name}
                                                        </Link>
                                                        </td>
                                                        <td className="product-price">
                                                        <span className="amount">&#8377;{item.discounted_price}</span>
                                                        </td>
                                                        <td className="product-quantity text-center">
                                                            <span className="amount">
                                                                {item.quantity}
                                                            </span>
                                                        </td>
                                                        <td className="product-subtotal">
                                                        <span className="amount">
                                                            &#8377;{item.total_quantity_price}
                                                        </span>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                                
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-md-5 ml-auto">
                                        <div className="cart-page-total">
                                            <h2 className="text-center">Order totals</h2>
                                            <ul className="mb-20">
                                                <li>
                                                Subtotal <span>&#8377; {order.sub_total}</span>
                                                </li>
                                                <li>
                                                Total Discount <span>- &#8377; {order.total_discount}</span>
                                                </li>
                                                <li>
                                                GST <span>+ &#8377; {order.gst_charge}</span>
                                                </li>
                                                <li>
                                                Delivery Charge <span>+ &#8377; {order.delivery_charge}</span>
                                                </li>
                                                <li>
                                                Cumulative Total <span>&#8377; {order.sub_total}</span>
                                                </li>
                                                <li>
                                                Coupon Discount <span>- &#8377; {order.coupon_discount}</span>
                                                </li>
                                                <li>
                                                Total <span>&#8377; {order.total_price_with_coupon_dicount}</span>
                                                </li>
                                            </ul>
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

OrderDetailPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <main>
            <Pagetitle title='Order Detail' img='/assets/img/banner/page-banner-4.jpg' />
            <AccountLayout>
                {page}
            </AccountLayout>
        </main>
    )
}

export default OrderDetailPage;