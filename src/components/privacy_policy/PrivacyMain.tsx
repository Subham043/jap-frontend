import React from 'react';
import PrivacySection from './PrivacySection';
import Pagetitle from '../sheardComponent/Pagetitle';

const PrivacyMain = () => {
    return (
        <>
            <Pagetitle title='Privacy Policy' img='/assets/img/banner/page-banner-2.jpg' />
            <PrivacySection/>
        </>
    );
};

export default PrivacyMain;