import React from 'react';
import CertificationSection from './CertificationSection';
import Pagetitle from '../sheardComponent/Pagetitle';
import HeroSlider from './HeroSlider';

const CertificationMain = () => {
    return (
        <>
            <Pagetitle title='Certifications' img='/assets/img/banner/page-banner-4.jpg' />
            <HeroSlider/>
            <CertificationSection/>
        </>
    );
};

export default CertificationMain;