import React from 'react';
import CartSection from './CartSection';
import Pagetitle from '../sheardComponent/Pagetitle';

const CartMain = () => {
    return (
        <>
            <Pagetitle title='Cart' img='/assets/img/banner/page-banner-2.jpg' />
            <CartSection/>
        </>
    );
};

export default CartMain;