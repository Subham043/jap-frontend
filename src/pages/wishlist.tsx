import WistlistMain from '@/components/wishlist/WistListMain';
import Head from 'next/head';
import React from 'react';

const WistListPage = () => {
    return (
        <>
            <Head>
                <title>JAP - Wishlist</title>
            </Head>
            <main>
                <WistlistMain/>
            </main>
        </>
    );
};

export default WistListPage;