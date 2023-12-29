import React from 'react';
import TermSection from './TermSection';
import Pagetitle from '../sheardComponent/Pagetitle';

const TermMain = () => {
    return (
        <>
            <Pagetitle title='Terms & Conditions' img='/assets/img/banner/page-banner-2.jpg' />
            <TermSection/>
        </>
    );
};

export default TermMain;