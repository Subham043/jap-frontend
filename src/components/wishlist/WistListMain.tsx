import React from 'react';
import WishlistSection from './WishlistSection';
import Pagetitle from '../sheardComponent/Pagetitle';

const WistlistMain = () => {
    return (
        <>
            <Pagetitle title='Wishlist' img='/assets/img/banner/page-banner-7.jpg' />
            <WishlistSection/>
        </>
    );
};

export default WistlistMain;