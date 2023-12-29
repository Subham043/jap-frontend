import React from 'react';
import ShippingSection from './ShippingSection';
import Pagetitle from '../sheardComponent/Pagetitle';

const ShippingMain = () => {
    return (
        <>
            <Pagetitle title='Shipping Policy' img='/assets/img/banner/page-banner-2.jpg' />
            <ShippingSection/>
        </>
    );
};

export default ShippingMain;