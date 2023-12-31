import React, { ReactElement, useCallback } from 'react';
import { NextPageWithLayout } from '../../_app';
import AccountLayout from '@/components/sheardComponent/AccountLayout';
import Pagetitle from '@/components/sheardComponent/Pagetitle';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import { api_routes } from '@/helper/routes';
import { Order } from '@/helper/types';
import useSWRInfinite from "swr/infinite";
import InfiniteScroll from 'react-infinite-scroll-component';
import OrderCard from '@/components/order/OrderCard';
import Head from 'next/head';

const PAGE_SIZE = 20;

const OrdersPage:NextPageWithLayout = () => {
    const axiosPrivate = useAxiosPrivate();
    const ordersFetcher = async (url: string) => {
        const res =await axiosPrivate.get(url);
        return res.data.data
    };
    
    const getOrderKey = useCallback((pageIndex:any, previousPageData:any) => {
        if (previousPageData && previousPageData.length===0) return null;
        return `${api_routes.place_order_paginate}?total=${PAGE_SIZE}&page=${pageIndex+1}`;
    }, [])
    
    const {
          data,
          size,
          setSize,
          isLoading,
    } = useSWRInfinite<Order>(getOrderKey, ordersFetcher, {
          initialSize:1,
          revalidateAll: false,
          revalidateFirstPage: false,
          persistSize: false,
          parallel: false
    });
    const fetchNextPage = () => setSize(size+1);

    return (
        <>
            <Head>
                <title>JAP - Orders</title>
            </Head>
            <h4 className="mb-25">Orders</h4>
            <InfiniteScroll
                dataLength={data ? data.flat().length : 0}
                next={fetchNextPage}
                hasMore={true}
                loader={(isLoading) && <div className="text-center py-1">
                <div className="spinner-border text-success" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                </div>}
                refreshFunction={fetchNextPage}
                style={{overflowX: 'hidden'}}
            >
                {(data ? data.flat() : []).map((item, index) => <OrderCard order={item} key={index} />)}
            </InfiniteScroll>
        </>
    );
};

OrdersPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <main>
            <Pagetitle title='Settings' img='/assets/img/banner/page-banner-2.jpg' />
            <AccountLayout>
                {page}
            </AccountLayout>
        </main>
    )
}

export default OrdersPage;