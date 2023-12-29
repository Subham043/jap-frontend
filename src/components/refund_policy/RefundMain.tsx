import React from 'react';
import RefundSection from './RefundSection';
import Pagetitle from '../sheardComponent/Pagetitle';

const RefundMain = () => {
    return (
        <>
            <Pagetitle title='Return & Refund Policy' img='/assets/img/banner/page-banner-2.jpg' />
            <RefundSection/>
        </>
    );
};

export default RefundMain;