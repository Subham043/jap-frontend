import React from 'react';
import CertificationSection from './CertificationSection';
import Pagetitle from '../sheardComponent/Pagetitle';

const CertificationMain = () => {
    return (
        <>
            <Pagetitle title='Certifications' img='/assets/img/banner/page-banner-2.jpg' />
            <CertificationSection/>
        </>
    );
};

export default CertificationMain;